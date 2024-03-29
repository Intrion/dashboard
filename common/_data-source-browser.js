﻿/**
* DevExpress Dashboard (_data-source-browser.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data_field_1 = require("../model/data-sources/_data-field");
var sql_data_source_1 = require("../model/data-sources/sql-data-source");
var ef_data_source_1 = require("../model/data-sources/ef-data-source");
var object_data_source_1 = require("../model/data-sources/object-data-source");
var federation_data_source_1 = require("../model/data-sources/federation-data-source");
var _date_utils_1 = require("../model/internal/_date-utils");
var _knockout_utils_1 = require("../model/internal/_knockout-utils");
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var dx_querybuilder_1 = require("@devexpress/analytics-core/dx-querybuilder");
var $ = require("jquery");
var ko = require("knockout");
;
function patchCalcFieldPath(dataSource, calculatedField, fieldName) {
    if (fieldName.indexOf("Parameters.Parameters.") === 0) {
        return "Parameters." + fieldName.split(".")[2];
    }
    if (dataSource instanceof sql_data_source_1.SqlDataSource) {
        var query = dataSource.queries().filter(function (query) { return query.name() === calculatedField.dataMember(); })[0];
        if (!!query && query instanceof dx_querybuilder_1.default.Analytics.Data.TableQuery) {
            var table = query.tables().filter(function (table) { return fieldName.indexOf((table.alias() || table.name()) + ".") === 0; })[0];
            if (!!table) {
                return trimLeadingPathElement(fieldName, table.alias() || table.name());
            }
        }
    }
    return fieldName;
}
exports.patchCalcFieldPath = patchCalcFieldPath;
function trimLeadingPathElement(path, element) {
    if (path === void 0) { path = ""; }
    var str = path;
    if (path.indexOf(element) === 0) {
        str = path.substring(element.length);
    }
    return str[0] === '.' ? str.substring(1) : str;
}
exports.trimLeadingPathElement = trimLeadingPathElement;
function splitFullFieldName(fullFieldName) {
    var parts = fullFieldName.split('.');
    return {
        path: parts.slice(0, parts.length - 1).join('.'),
        name: parts[parts.length - 1] || ""
    };
}
exports.splitFullFieldName = splitFullFieldName;
function isStartedWith(path, value) {
    return path.indexOf(value) === 0 && (path.length === value.length || path[value.length] === '.');
}
exports.isStartedWith = isStartedWith;
function findDataMember(dataSource, path) {
    var dataMember = "";
    var fieldPath = path;
    if (dataSource instanceof sql_data_source_1.SqlDataSource) {
        var query = dataSource.queries().filter(function (q) { return isStartedWith(path, q.name()); })[0];
        if (!!query) {
            dataMember = query.name();
            fieldPath = trimLeadingPathElement(path, dataMember);
        }
    }
    else if (dataSource instanceof ef_data_source_1.EFDataSource) {
        var table = dataSource._tables().filter(function (t) { return isStartedWith(path, t.dataMember()); })[0];
        if (!!table) {
            dataMember = table.dataMember();
            fieldPath = trimLeadingPathElement(path, dataMember);
        }
    }
    else if (dataSource instanceof federation_data_source_1.FederationDataSource) {
        var query = dataSource.queries().filter(function (q) { return isStartedWith(path, q.alias()); })[0];
        if (!!query) {
            dataMember = query.alias();
            fieldPath = trimLeadingPathElement(path, dataMember);
        }
    }
    return {
        dataMember: dataMember,
        fieldPath: fieldPath
    };
}
exports.findDataMember = findDataMember;
function getFirstDataMember(dataSource) {
    if (dataSource instanceof sql_data_source_1.SqlDataSource && dataSource.queries().length > 0) {
        return dataSource.queries()[0].name();
    }
    else if (dataSource instanceof ef_data_source_1.EFDataSource && dataSource._tables().length > 0) {
        return dataSource._tables()[0].dataMember();
    }
    else if (dataSource instanceof federation_data_source_1.FederationDataSource && dataSource.queries().length > 0) {
        return dataSource.queries()[0].alias();
    }
    else if (dataSource instanceof object_data_source_1.ObjectDataSource)
        return undefined;
    throw new Error();
}
exports.getFirstDataMember = getFirstDataMember;
var DataSourceBrowser = (function () {
    function DataSourceBrowser(_dataSources, isDesignMode, parameters, _serviceClient, isLoading) {
        if (isLoading === void 0) { isLoading = ko.observable(false); }
        var _this = this;
        this._dataSources = _dataSources;
        this.isDesignMode = isDesignMode;
        this.parameters = parameters;
        this._serviceClient = _serviceClient;
        this.isLoading = isLoading;
        this._disposables = [];
        this._dynamicParametersValueCache = {};
        this._dimensionValuesCache = {};
        this._fieldsCache = {};
        this.removeDataSource = function (dataSource) {
            _this._dataSources.remove(dataSource);
            _this.clearFieldsCache(dataSource.componentName());
        };
        if (isDesignMode()) {
            this._subscribeDataSources();
        }
        this._disposables.push(this.isDesignMode.subscribe(function (isDesignMode) {
            if (isDesignMode) {
                _this._subscribeDataSources();
            }
            else {
                _this._unsubscribeDataSources();
            }
        }));
    }
    DataSourceBrowser.prototype._cacheNestedFields = function (path, field) {
        var _this = this;
        if (field.childNodes().length > 0 && !!field.childNodes()[0].dataMember()) {
            var nestedPath = !!path ? path + "." + field.dataMember() : field.dataMember();
            this._fieldsCache[nestedPath] = $.Deferred().resolve(field.childNodes()).promise();
            field.childNodes().forEach(function (member) { return _this._cacheNestedFields(nestedPath, member); });
        }
    };
    DataSourceBrowser.prototype._findInFieldsCache = function (dataSourceName, dataMemberName, fieldName, constraint, separateGroupFields) {
        var deferred = $.Deferred();
        var result = { path: "", field: undefined };
        var keys = Object.keys(this._fieldsCache);
        var fieldPath = dataMemberName ? [dataSourceName, dataMemberName].join(".") : dataSourceName;
        var i = 0;
        var findPromises = [];
        while (!result.field && i < keys.length) {
            var path = keys[i];
            if (path === fieldPath || path.indexOf(fieldPath + ".") === 0) {
                var a = function (notClosuredPath, notClosuredFieldPath) {
                    return function (fields) {
                        var filteredFields = fields.filter(isNonCollectionDataField);
                        for (var i_1 = 0; i_1 < filteredFields.length; i_1++) {
                            var field = filteredFields[i_1];
                            var foundField = field.dataMember() === fieldName && constraint(field) ? field : undefined;
                            var groupDataItems = field["groupDataItems"];
                            if ((!foundField || separateGroupFields) && !!groupDataItems && groupDataItems.length > 0) {
                                var foundGroupField = groupDataItems.filter(function (groupField) { return groupField.dataMember() === fieldName; })[0];
                                if (foundGroupField) {
                                    foundField = separateGroupFields ? foundGroupField : field;
                                }
                            }
                            if (!!foundField) {
                                result.path = notClosuredPath.substr(notClosuredFieldPath.length).split(".").filter(function (item) { return !!item; }).join(".");
                                result.field = foundField;
                                deferred.resolve(result);
                                break;
                            }
                        }
                    };
                };
                findPromises.push(this._fieldsCache[path].done(a(path, fieldPath)));
            }
            i++;
        }
        $.when.apply($.when, findPromises).done(function () {
            if (!result.field) {
                deferred.resolve(result);
            }
        });
        return deferred.promise();
    };
    DataSourceBrowser.prototype.getDimensionFilterItems = function (dashboardItem, dimensionDataMember, previousState, branch) {
        var deferred = $.Deferred();
        var result = deferred.promise();
        if (!!dashboardItem && !!dimensionDataMember) {
            this._serviceClient.peek().getDimensionFilterItems(dashboardItem, dimensionDataMember, previousState, branch).done(function (list) {
                deferred.resolve(list);
            }).fail(function () {
                deferred.resolve([]);
            });
        }
        else {
            deferred.resolve([]);
        }
        return result;
    };
    DataSourceBrowser.prototype.getDimensionFilterString = function (dashboardItem, dimensionDataMember, previousState) {
        var deferred = $.Deferred();
        var result = deferred.promise();
        if (!!dashboardItem && !!dimensionDataMember) {
            this._serviceClient.peek().getDimensionFilterString(dashboardItem, dimensionDataMember, previousState).done(function (filterString) {
                deferred.resolve(filterString);
            }).fail(function () {
                deferred.resolve("");
            });
        }
        else {
            deferred.resolve("");
        }
        return result;
    };
    DataSourceBrowser.prototype.getDataFieldsArray = function (dataSourceName, dataMember, fieldPath, filterDelegate) {
        var _this = this;
        if (filterDelegate === void 0) { filterDelegate = function () { return true; }; }
        var id = !!dataMember ? [dataSourceName, dataMember].join(".") : dataSourceName;
        id = !!fieldPath ? [id, fieldPath].join(".") : id;
        var dataSource = this.findDataSource(dataSourceName);
        if (!dataSource) {
            return $.Deferred().resolve([]).promise();
        }
        dataSource.calculatedFields().forEach(function (calcField) {
            var expression = calcField.expression();
            var fieldType = calcField.fieldType();
            var name = calcField.name();
        });
        var result = $.Deferred();
        var cachedValue = this._fieldsCache[id];
        if (cachedValue) {
            cachedValue.done(function (dataFields) { return result.resolve(dataFields.filter(filterDelegate)); });
        }
        else {
            if (!!dataSourceName && !!dataSource && !!this._serviceClient) {
                var valueToCache_1 = $.Deferred();
                this._fieldsCache[id] = valueToCache_1.promise();
                setTimeout(function () {
                    _this._serviceClient.peek().getFieldList(dataSource, dataMember, fieldPath).done(function (list) {
                        var members = [];
                        (list || []).forEach(function (field) {
                            var dataField = new _data_field_1.DataField(field);
                            members.push(dataField);
                            _this._cacheNestedFields(id, dataField);
                        });
                        if (!fieldPath) {
                            members = members
                                .sort(function (f1, f2) { return f1.displayName().localeCompare(f2.displayName()); });
                        }
                        valueToCache_1
                            .resolve(members)
                            .done(function (dataFields) { return result.resolve(dataFields.filter(filterDelegate)); });
                    }).fail(function () {
                        result.resolve([]);
                    });
                }, 1);
            }
            else {
                result.resolve([]);
            }
        }
        return result.promise();
    };
    DataSourceBrowser.prototype.isFolder = function (path) {
        return !!this._fieldsCache[path];
    };
    DataSourceBrowser.prototype.findPathToFieldInTree = function (dataSourceName, dataMemberName, fieldName, constraint) {
        var _this = this;
        var deferred = $.Deferred();
        this.getDataFieldsArray(dataSourceName, dataMemberName, "", isNonCollectionDataField).done(function () {
            _this._findInFieldsCache(dataSourceName, dataMemberName, fieldName, constraint, false).done(function (info) { return deferred.resolve(info.path); });
        });
        return deferred.promise();
    };
    DataSourceBrowser.prototype.findDataField = function (dataSourceName, dataMemberName, fullFieldName, separateGroupFields) {
        var _this = this;
        if (separateGroupFields === void 0) { separateGroupFields = false; }
        var deferred = $.Deferred();
        var dataSource = this._dataSources().filter(function (ds) { return ds.componentName() === dataSourceName; })[0];
        var info = {
            path: "",
            name: fullFieldName
        };
        if (dataSource instanceof object_data_source_1.ObjectDataSource || dataSource instanceof ef_data_source_1.EFDataSource) {
            info = splitFullFieldName(fullFieldName);
        }
        this.getDataFieldsArray(dataSourceName, dataMemberName, info.path, isNonCollectionDataField).done(function () {
            _this._findInFieldsCache(dataSourceName, dataMemberName, fullFieldName, function () { return true; }, separateGroupFields).done(function (info) { return deferred.resolve(info.field); });
        });
        return deferred.promise();
    };
    DataSourceBrowser.prototype.fuzzyFindFields = function (startPath, searchFor) {
        var _this = this;
        var deferred = $.Deferred(), result = [], findPromises = [];
        var strContains = function (str, substr) { return str.toLowerCase().indexOf(substr.toLowerCase()) !== -1; };
        Object.keys(this._fieldsCache).forEach(function (path) {
            if (path === startPath || path.indexOf(startPath + ".") === 0) {
                findPromises.push(_this._fieldsCache[path].done(function (fields) {
                    fields
                        .filter(function (field) { return isNonCollectionDataField; })
                        .filter(function (field) { return strContains(field.dataMember(), searchFor) || strContains(field.displayName(), searchFor); })
                        .forEach(function (field) { return result.push({ path: path, field: field }); });
                }));
            }
        });
        $.when.apply($.when, findPromises).done(function () { return deferred.resolve(result); });
        return deferred.promise();
    };
    DataSourceBrowser.prototype.findDataSource = function (dsName) {
        return this._dataSources().filter(function (ds) { return ds.componentName() === dsName; })[0];
    };
    DataSourceBrowser.prototype.getDataSources = function () {
        return this._dataSources().map(function (ds) {
            return {
                name: ds.componentName(),
                displayName: ds.name()
            };
        });
    };
    DataSourceBrowser.prototype.getDataMembers = function (dsc) {
        var result = ko.observableArray();
        if (dsc) {
            var dataSource = this.findDataSource(dsc.dataSource());
            if (dataSource && dataSource.supportDataMembers) {
                this.getDataFieldsArray(dsc.dataSource(), "", "", isNonCollectionDataField).done(function (members) {
                    result(members.map(function (member) { return member.dataMember(); }));
                });
            }
        }
        return result;
    };
    DataSourceBrowser.prototype.dataMembersSupported = function (dsc) {
        var dataSource = dsc && this.findDataSource(dsc.dataSource()) || null;
        return dataSource && dataSource.supportDataMembers;
    };
    DataSourceBrowser.prototype.isDataSourceAndDataMemberSet = function (dsc) {
        if (dsc) {
            var isDataSourceSet = !!dsc.dataSource();
            var dataMemberSupported = this.dataMembersSupported(dsc);
            var isDataMemberSet = true;
            if (dataMemberSupported) {
                isDataMemberSet = !!dsc.dataMember();
            }
            return isDataSourceSet && isDataMemberSet;
        }
        return false;
    };
    DataSourceBrowser.prototype.getDataFields = function (dsc) {
        var result = ko.observableArray();
        if (dsc) {
            this.getDataFieldsArray(dsc.dataSource(), dsc.dataMember(), "", isNonCollectionDataField).done(function (members) {
                result(members.map(function (member) { return member.displayName(); }));
            });
        }
        return result;
    };
    DataSourceBrowser.prototype.clearFieldsCache = function (path) {
        var _this = this;
        Object.keys(this._fieldsCache).forEach(function (key) {
            if (key === path || key.indexOf(path + ".") === 0) {
                delete _this._fieldsCache[key];
            }
        });
    };
    DataSourceBrowser.prototype.clearDynamicParametersValueCache = function () {
        this._dynamicParametersValueCache = {};
    };
    DataSourceBrowser.prototype.initDataSource = function (dataSource) {
        var _this = this;
        if (dataSource instanceof sql_data_source_1.SqlDataSource) {
            this._fieldsCache[dataSource.componentName()] = $.Deferred().resolve(dataSource.queries().map(function (query) {
                var newDataField = new _data_field_1.DataField({ "DataMember": query.name(), "Name": query.name(), "DisplayName": query.name() });
                newDataField.hasCalculatedFields = true;
                return newDataField;
            })).promise();
        }
        else if (dataSource instanceof ef_data_source_1.EFDataSource) {
            this.isLoading(true);
            this.getDataFieldsArray(dataSource.componentName(), "", "", isNonCollectionDataField).done(function (members) {
                dataSource._tables(members);
                _this.isLoading(false);
            });
        }
    };
    DataSourceBrowser.prototype.getParameterValues = function (parameterType, dynamicListLookUpSettings) {
        var _this = this;
        var dsc = dynamicListLookUpSettings;
        var valueMember = dynamicListLookUpSettings.valueMemberName();
        var displayMember = dynamicListLookUpSettings.displayMemberName() || valueMember;
        var sortOrder = dynamicListLookUpSettings.sortOrder();
        var sortByMember = dynamicListLookUpSettings.sortByMember();
        var selectedValues = "";
        if (this.parameters) {
            selectedValues = this.parameters()
                .map(function (p) {
                return {
                    name: p.name(),
                    value: _date_utils_1.toStringArray(p._actualValue.peek())
                };
            })
                .sort(function (p1, p2) { return p1.name.localeCompare(p2.name); })
                .reduce(function (acc, param) {
                var value = param.name + ":" + (param.value instanceof Array ? param.value.slice().sort().join('|') : param.value);
                return !!acc ? acc + "," + value : value;
            }, '');
        }
        var key = [parameterType, dsc.dataSource(), dsc.dataMember(), valueMember, displayMember, sortOrder, sortByMember, selectedValues].join(".");
        var parameterValues = this._dynamicParametersValueCache[key];
        if (!parameterValues) {
            parameterValues = ko.observableArray();
            if (!!valueMember && !!displayMember) {
                this._dynamicParametersValueCache[key] = parameterValues;
                this._serviceClient.peek().getParameterValues(dsc.dataSource(), this.findDataSource(dsc.dataSource()), dsc.dataMember(), valueMember, displayMember, sortOrder, sortByMember, parameterType)
                    .done(function (result) {
                    parameterValues(result ? result.map(function (value) { return ({
                        Value: _date_utils_1.tryConvertToDateTime(value.Value),
                        DisplayText: value.DisplayText
                    }); }) : undefined);
                    _this.dynamicLookUpValuesLoaded && _this.dynamicLookUpValuesLoaded(dynamicListLookUpSettings);
                });
            }
        }
        return parameterValues;
    };
    DataSourceBrowser.prototype.getDimensionUniqueValues = function (dataSourceName, dataMember, dimension) {
        var def = $.Deferred();
        var key = "DataSource=" + dataSourceName
            + "DataMember=" + dataMember
            + "Dimension=" + JSON.stringify(new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer({ useRefs: false }).serialize(dimension));
        var dimensionValues = this._dimensionValuesCache[key];
        if (!dimensionValues) {
            dimensionValues = ko.observableArray();
            var dataSource = this.findDataSource(dataSourceName);
            if (!!dataSource && !!dimension) {
                this._dimensionValuesCache[key] = dimensionValues;
                this._serviceClient.peek().getDimensionUniqueValues(dataSource, dataMember, dimension)
                    .done(function (result) {
                    dimensionValues(result);
                    def.resolve(dimensionValues());
                });
            }
        }
        else {
            def.resolve(dimensionValues());
        }
        return def.promise();
    };
    DataSourceBrowser.prototype.splitFullPath = function (fullPath) {
        if (fullPath === void 0) { fullPath = ""; }
        var dataSource = "";
        var dataSourceObj = this._dataSources().filter(function (ds) { return isStartedWith(fullPath, ds.componentName()); })[0];
        if (!!dataSourceObj) {
            dataSource = dataSourceObj.componentName();
        }
        var _a = findDataMember(dataSourceObj, trimLeadingPathElement(fullPath, dataSource)), dataMember = _a.dataMember, fieldPath = _a.fieldPath;
        return {
            dataSource: dataSource,
            dataMember: dataMember,
            fieldPath: fieldPath
        };
    };
    DataSourceBrowser.prototype._subscribeDataSources = function () {
        var _this = this;
        this._dataSources().forEach(function (dataSource) {
            _this.initDataSource(dataSource);
        });
        this._dataSourcesSubscription = _knockout_utils_1.subscribeArrayChange(this._dataSources, {
            added: function (ds) { return _this.initDataSource(ds); },
            deleted: function (ds) { return _this.clearFieldsCache(ds.componentName()); }
        });
        this._disposables.push(this._dataSourcesSubscription);
    };
    DataSourceBrowser.prototype._unsubscribeDataSources = function () {
        var _this = this;
        if (this._dataSourcesSubscription) {
            this._disposables.splice(this._disposables.indexOf(this._dataSourcesSubscription), 1);
            this._dataSourcesSubscription.dispose();
            this._dataSourcesSubscription = undefined;
            this._dataSources().forEach(function (dataSource) {
                _this.clearFieldsCache(dataSource.componentName());
            });
        }
    };
    DataSourceBrowser.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
    };
    return DataSourceBrowser;
}());
exports.DataSourceBrowser = DataSourceBrowser;
function isNonCollectionDataField(dataField) {
    if (!dataField)
        return;
    var nodeType = ko.unwrap(dataField.nodeType);
    var childNodes = ko.unwrap(dataField.childNodes);
    return !(nodeType === 'DataMember' && childNodes && childNodes.length === 0);
}
exports.isNonCollectionDataField = isNonCollectionDataField;
