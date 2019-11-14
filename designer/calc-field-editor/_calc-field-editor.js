/**
* DevExpress Dashboard (_calc-field-editor.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculated_field_1 = require("../../model/data-sources/calculated-field");
var sql_data_source_1 = require("../../model/data-sources/sql-data-source");
var ef_data_source_1 = require("../../model/data-sources/ef-data-source");
var _helper_classes_1 = require("../../model/internal/_helper-classes");
var _base_metadata_1 = require("../../model/metadata/_base-metadata");
var _calculated_field_1 = require("../../model/data-sources/metadata/_calculated-field");
var _data_source_browser_1 = require("../../common/_data-source-browser");
var _expression_editor_item_provider_1 = require("../expression-editor/_expression-editor-item-provider");
var $ = require("jquery");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var federation_data_source_1 = require("../../model/data-sources/federation-data-source");
var CalcFieldEditor = (function () {
    function CalcFieldEditor(dataSourceBrowser) {
        this.dataSourceBrowser = dataSourceBrowser;
        this.viewModel = ko.observable(null);
    }
    CalcFieldEditor.prototype.canAddCalculatedField = function (dataSourceName) {
        var dataSource = this.dataSourceBrowser.findDataSource(dataSourceName);
        if (dataSource && dataSource.hasCalculatedFields) {
            if (dataSource instanceof sql_data_source_1.SqlDataSource) {
                return dataSource.queries().length > 0;
            }
            else if (dataSource instanceof ef_data_source_1.EFDataSource) {
                return dataSource._tables().length > 0;
            }
            else if (dataSource instanceof federation_data_source_1.FederationDataSource) {
                return dataSource.queries().length > 0;
            }
            return !!dataSource;
        }
        else {
            return false;
        }
    };
    CalcFieldEditor.prototype.showAddDialog = function (dataSourceName, dataMemberName) {
        var def = $.Deferred();
        if (this.canAddCalculatedField) {
            var dataSourceInstance = this.dataSourceBrowser.findDataSource(dataSourceName);
            var newCalculatedFieldName = _helper_classes_1.NameGenerator.generateName(_default_1.getLocalizationById("DashboardStringId.NewCalculatedFieldNamePrefix") + " ", dataSourceInstance.calculatedFields(), 'name', 1);
            var newCalculatedField = new calculated_field_1.CalculatedField({ '@Name': newCalculatedFieldName, "@DataMember": dataMemberName, "@DataType": "Auto" });
            this.show(newCalculatedField, dataSourceName, dataMemberName).then(function (calcField) { return def.resolve(calcField); }, function (calcField) { return def.reject(calcField); });
        }
        else {
            def.reject();
        }
        return def.promise();
    };
    CalcFieldEditor.prototype.showEditDialog = function (calculatedField, dataSourceName, dataMemberName) {
        return this.show(calculatedField, dataSourceName, dataMemberName);
    };
    CalcFieldEditor.prototype.removeCalcField = function (calculatedField, dataSourceName) {
        var dataSourceInstance = this.dataSourceBrowser.findDataSource(dataSourceName);
        var dataMemberName = calculatedField.dataMember();
        var pathInCache = [dataSourceName].concat(dataMemberName ? [dataMemberName] : []);
        this.dataSourceBrowser.clearFieldsCache(pathInCache.join("."));
        dataSourceInstance.calculatedFields.remove(calculatedField);
        return $.Deferred().resolve(calculatedField).promise();
    };
    CalcFieldEditor.prototype.show = function (calculatedField, dataSourceName, dataMemberName) {
        var _this = this;
        var def = $.Deferred();
        var pathInCache = [dataSourceName].concat(dataMemberName ? [dataMemberName] : []);
        this.viewModel(new CalcFieldEditorViewModel(calculatedField, this.dataSourceBrowser, dataSourceName, function (calcField) {
            var dsi = _this.dataSourceBrowser.findDataSource(dataSourceName);
            if (dsi && dsi.calculatedFields.indexOf(calcField) === -1) {
                dsi.calculatedFields.push(calcField);
            }
            def.resolve(calcField);
        }, function () { return _this.dataSourceBrowser.clearFieldsCache(pathInCache.join(".")); }));
        return def.promise();
    };
    return CalcFieldEditor;
}());
exports.CalcFieldEditor = CalcFieldEditor;
var CalcFieldEditorViewModel = (function () {
    function CalcFieldEditorViewModel(calculatedField, dataSourceBrowser, dataSourceName, onSave, onBeforeSave) {
        var _this = this;
        this.toolbarItems = [];
        this.isCalcFieldNameValid = ko.observable(true);
        this.popupVisible = ko.observable(true);
        var dataSource = dataSourceBrowser.findDataSource(dataSourceName);
        this.getInfo = function () {
            return [_base_metadata_1.name, _calculated_field_1.calculatedFieldType, _calculated_field_1.calcFieldExpressionEditable];
        };
        this.nameValidationRules = [{
                type: "required"
            }, {
                type: "custom",
                validationCallback: function (params) {
                    var previousParams = false;
                    var dataSource = dataSourceBrowser.findDataSource(dataSourceName);
                    var dataMembers = [''];
                    if (dataSource instanceof sql_data_source_1.SqlDataSource) {
                        dataMembers = dataSource.queries().map(function (dm) { return dm.name(); });
                    }
                    else if (dataSource instanceof ef_data_source_1.EFDataSource) {
                        dataMembers = dataSource._tables().map(function (dm) { return dm.name(); });
                    }
                    else if (dataSource instanceof federation_data_source_1.FederationDataSource) {
                        dataMembers = dataSource.queries().map(function (dm) { return dm.alias(); });
                    }
                    var promises = dataMembers.map(function (dataMember) { return dataSourceBrowser.findDataField(dataSourceName, dataMember, params.value); });
                    $.when.apply($, promises).done(function () {
                        var fields = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            fields[_i] = arguments[_i];
                        }
                        previousParams = true;
                        params.rule.isValid = fields.reduce(function (result, curField) { return result && !curField; }, true);
                        params.validator.validate();
                    });
                    if (previousParams)
                        return params.rule.isValid;
                    return false;
                },
                message: _default_1.getLocalizationById('DashboardWebStringId.DataSources.CalculatedField.UniqueNameError')
            }];
        this.calculatedField = calculatedField;
        this.dataMember = ko.observable(calculatedField.dataMember());
        this.fieldType = ko.observable(calculatedField.fieldType());
        this.availableTypes = Object.keys(_calculated_field_1.calculatedFieldType.values);
        this.name = ko.observable(calculatedField.name());
        this.expression = ko.observable(calculatedField.expression());
        this.expressionEditable = {
            value: this.expression,
            path: ko.observable(calculatedField.dataMember() ? [dataSourceName, calculatedField.dataMember()].join(".") : dataSourceName),
            fieldName: calculatedField.name,
            patchFieldName: function (fieldPath) { return _data_source_browser_1.patchCalcFieldPath(dataSource, calculatedField, fieldPath); },
            saveHandler: ko.observable(),
            isValid: ko.observable(true),
            itemsProvider: new _expression_editor_item_provider_1.ExpressionEditorItemsProvider(dataSourceBrowser, dataSourceBrowser.parameters && dataSourceBrowser.parameters(), ko.computed(function () { return dataSourceName; }), calculatedField.dataMember),
            customizeCategories: function (sender, categories, dblclick) {
                var treeList = categories[0].content.data.fields().treeListController;
                var putSelectionHandlerBase = treeList.putSelectionHandler;
                treeList.putSelectionHandler = function (data, element) {
                    if (!data.data.isList) {
                        putSelectionHandlerBase.call(treeList, data, element);
                    }
                };
            }
        };
        var saveHandler = function (sender) {
            if (_this.expressionEditable.saveHandler()(sender)) {
                onBeforeSave && onBeforeSave();
                calculatedField.expression(_this.expression());
                calculatedField.name(_this.name());
                calculatedField.fieldType(_this.fieldType());
                onSave && onSave(calculatedField);
                _this.popupVisible(false);
            }
        };
        this.toolbarItems = [
            {
                toolbar: 'bottom', location: 'after', widget: 'dxButton', options: {
                    text: _default_1.getLocalizationById('DashboardWebStringId.DashboardMenuSave'),
                    onClick: saveHandler,
                    disabled: ko.computed(function () { return !_this.isCalcFieldNameValid(); }),
                    type: 'default'
                }
            },
            { toolbar: 'bottom', location: 'after', widget: 'dxButton', options: { text: _default_1.getLocalizationById('DashboardWebStringId.DataSources.Cancel'), onClick: function () { return _this.popupVisible(false); } } }
        ];
        this.popupVisible(true);
    }
    return CalcFieldEditorViewModel;
}());
exports.CalcFieldEditorViewModel = CalcFieldEditorViewModel;
