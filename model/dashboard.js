﻿/**
* DevExpress Dashboard (dashboard.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var serializable_model_1 = require("./serializable-model");
var sql_data_source_1 = require("./data-sources/sql-data-source");
var ef_data_source_1 = require("./data-sources/ef-data-source");
var parameter_1 = require("./parameters/parameter");
var color_scheme_entry_1 = require("./colorization/color-scheme-entry");
var group_item_1 = require("./items/group/group-item");
var dashboard_layout_group_1 = require("./layout/dashboard-layout-group");
var data_dashboard_item_1 = require("./items/data-dashboard-item");
var dashboard_state_1 = require("./dashboard-state");
var _dashboard_component_name_generator_1 = require("./internal/_dashboard-component-name-generator");
var _dashboard_1 = require("./metadata/_dashboard");
var tab_container_item_1 = require("./items/tab-container-item/tab-container-item");
var _knockout_utils_1 = require("./internal/_knockout-utils");
var _array_utils_1 = require("./internal/_array-utils");
var _date_utils_1 = require("./internal/_date-utils");
var _dashboard_layout_creator_1 = require("./layout/_dashboard-layout-creator");
var _undo_engine_helper_1 = require("./internal/_undo-engine-helper");
var dashboard_layout_item_1 = require("./layout/dashboard-layout-item");
var ko = require("knockout");
var _dashboard_item_factory_1 = require("./items/_dashboard-item-factory");
var _helper_classes_1 = require("./internal/_helper-classes");
var _dashboard_item_helper_1 = require("./internal/_dashboard-item_helper");
var _layout_utils_1 = require("./layout/_layout-utils");
var federation_data_source_1 = require("./data-sources/federation-data-source");
var _data_source_factory_base_1 = require("./data-sources/_data-source-factory-base");
var Dashboard = (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard(dashboardJSON, serializer) {
        if (dashboardJSON === void 0) { dashboardJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardJSON, serializer, _dashboard_1.dashboardSerializationsInfo) || this;
        _this.dashboardJSON = dashboardJSON;
        _this._disposables = [];
        _this.dataSources = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardJSON.DataSources, function (item) { return Dashboard._createDataSource(item, serializer); });
        _this.groups = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardJSON.Groups, function (group) { return _dashboard_item_factory_1.createDashboardItem(group, serializer); });
        _this.items = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardJSON.Items, function (item) { return _dashboard_item_factory_1.createDashboardItem(item, serializer); });
        _knockout_utils_1.subscribeArrayChange(_this.dataSources, {
            added: function (newDataSource) {
                if (newDataSource instanceof federation_data_source_1.FederationDataSource) {
                    newDataSource.context()
                        .forEach(function (contextItem) {
                        var dataSourceToAdd = contextItem.source();
                        _this.dataSources.push(dataSourceToAdd);
                        var source = newDataSource.sources().filter(function (source) { return source.dataSource() === contextItem.id(); })[0];
                        if (source) {
                            source.dataSource(dataSourceToAdd.componentName());
                        }
                    });
                    newDataSource.context.removeAll();
                }
            }
        });
        _this._tabPages = ko.observableArray();
        _this._disposables.push(ko.computed(function () {
            var newTabPagesList = _this.items()
                .filter(function (item) { return item instanceof tab_container_item_1.TabContainerItem; })
                .reduce(function (acc, tabPage) { return acc.concat(tabPage.tabPages()); }, []);
            _this._tabPages()
                .filter(function (removedTabPage) { return newTabPagesList.indexOf(removedTabPage) === -1; })
                .forEach(function (removedTabPage) { return _this._tabPages.remove(removedTabPage); });
            newTabPagesList
                .filter(function (newTabPage) { return _this._tabPages().indexOf(newTabPage) === -1; })
                .forEach(function (newTabPage) { return _this._tabPages.push(newTabPage); });
        }));
        _this._componentNameGenerator = new _dashboard_component_name_generator_1.DashboardUniqueNameGenerator('componentName', 1, _this.dataSources, _this.items, _this.groups, _this._tabPages);
        _this._disposables.push(_this._componentNameGenerator);
        _this.parameters = ko.observableArray();
        _this.parameters(dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardJSON.Parameters, function (item) { return new parameter_1.Parameter(item, serializer); })());
        _this.colorScheme = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardJSON.ColorScheme, function (item) { return new color_scheme_entry_1.ColorSchemeEntry(item, serializer); });
        _this._disposables.push(_knockout_utils_1.subscribeArrayChange(_this.dataSources, {
            deleted: _this._processDeleteDataSource.bind(_this)
        }));
        _this._queryParameters = ko.computed(function () {
            return parameter_1._getParametersQuery(_this.parameters());
        });
        _this._dataDashboardItems = ko.computed(function () {
            return _this.items().filter(function (item) { return item instanceof data_dashboard_item_1.DataDashboardItem; });
        });
        _this._masterFilterItems = ko.computed(function () {
            return _this._dataDashboardItems()
                .filter(function (item) { return item._isMasterFilter() && _this._interactivityGroupPathToRoot(item).every(function (containerItem) { return containerItem.interactivityOptions.isMasterFilter(); }); });
        });
        _this._disposables.push(ko.computed(function () {
            _this._dataDashboardItems().forEach(function (detailItem) {
                var masterItems = _this._dataDashboardItems()
                    .filter(function (item) { return item !== detailItem && item._isMasterFilter(); })
                    .filter(function (item) {
                    if (item.isMasterFilterCrossDataSource())
                        return true;
                    return item.dataSource() == detailItem.dataSource() && item.dataMember() == detailItem.dataMember();
                })
                    .filter(function (item) {
                    var masterGroups = _this._interactivityGroupPathToRoot(item).reverse();
                    var detailGroups = _this._interactivityGroupPathToRoot(detailItem).reverse();
                    while (masterGroups.length && detailGroups.length && masterGroups[0] === detailGroups[0]) {
                        masterGroups.shift();
                        detailGroups.shift();
                    }
                    if (masterGroups.some(function (masterGroup) { return !masterGroup.interactivityOptions.isMasterFilter(); })) {
                        return false;
                    }
                    if (detailGroups.length === 0) {
                        return !detailItem._isIgnoreMasterFilter();
                    }
                    else {
                        return !detailGroups[0].interactivityOptions.ignoreMasterFilters();
                    }
                });
                if (!_array_utils_1.arrayEquals(detailItem._masterFilterItems.peek(), masterItems)) {
                    detailItem._masterFilterItems(masterItems);
                }
            });
        }));
        _this._state = ko.computed({
            read: function () {
                var state = new dashboard_state_1.DashboardState();
                if (_this.parameters().length > 0) {
                    var parametersState = {};
                    _this.parameters().forEach(function (param) {
                        parametersState[param.name()] = param._actualValue();
                    });
                    if (Object.keys(parametersState).length) {
                        state.Parameters = parametersState;
                    }
                }
                if (_this.items().length > 0) {
                    var itemsState = {};
                    _this.items().forEach(function (item) {
                        var itemState = item._state();
                        if (itemState && Object.keys(itemState).length) {
                            itemsState[item.componentName()] = itemState;
                        }
                    });
                    if (Object.keys(itemsState).length) {
                        state.Items = itemsState;
                    }
                }
                return state;
            },
            write: function (dashboardState) {
                var obsoleteDashboardState = dashboardState;
                var parametersState = dashboardState.Parameters || obsoleteDashboardState.parameters;
                if (parametersState) {
                    _this.parameters().forEach(function (parameter) {
                        if (parametersState[parameter.name()] !== undefined) {
                            var parameterValue = parametersState[parameter.name()];
                            if (Array.isArray(parameterValue)) {
                                parameterValue = parameterValue.map(_date_utils_1.tryConvertToDateTime);
                            }
                            else {
                                parameterValue = _date_utils_1.tryConvertToDateTime(parameterValue);
                            }
                            parameter._value(parameterValue);
                        }
                    });
                }
                var itemsState = dashboardState.Items || obsoleteDashboardState.items;
                if (itemsState) {
                    Object.keys(itemsState).forEach(function (name) {
                        var dashboardItemModel = _this.findItem(name);
                        if (dashboardItemModel) {
                            dashboardItemModel._setState(itemsState[name]);
                        }
                    });
                }
            }
        });
        var item = new dashboard_layout_group_1.DashboardLayoutRootGroup(_this, dashboardJSON.LayoutTree || {}, serializer);
        _this.layout(item);
        _this._availableColorSignatures = ko.computed(function () {
            return _this._dataDashboardItems().filter(function (dataDashboardItem) { return dataDashboardItem._isGloballyColored; }).map(function (globallyColoredItem) { return globallyColoredItem._getColoringSignature(); });
        });
        return _this;
    }
    Dashboard._createDataSource = function (dataSourceJSON, serializer) {
        var itemTypeName = dataSourceJSON["@ItemType"];
        var itemType = Dashboard._dataSourceTypesMap[itemTypeName];
        return new itemType(dataSourceJSON, serializer);
    };
    Object.defineProperty(Dashboard.prototype, "stateString", {
        get: function () {
            var state = this._state();
            return Object.keys(state).length ? JSON.stringify(state) : "";
        },
        set: function (stateVal) {
            if (!stateVal)
                return;
            this._state(JSON.parse(stateVal));
        },
        enumerable: true,
        configurable: true
    });
    Dashboard.prototype.dispose = function () {
        this._disposables.map(function (disposable) { return disposable.dispose(); });
    };
    Dashboard.prototype.getInfo = function () {
        return _dashboard_1.dashboardSerializationsInfo;
    };
    Dashboard.prototype.getJSON = function () {
        return new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer({ useRefs: false, serializeDate: _date_utils_1.serializeDate }).serialize(this, _dashboard_1.dashboardSerializationsInfo);
    };
    Dashboard.prototype.findItem = function (itemId) {
        var item = this.items().filter(function (filterItem) { return filterItem.componentName() === itemId; })[0];
        if (!item) {
            item = this.groups().filter(function (filterItem) { return filterItem.componentName() === itemId; })[0];
        }
        if (!item) {
            item = this._tabPages().filter(function (filterItem) { return filterItem.componentName() === itemId; })[0];
        }
        return item;
    };
    Dashboard.prototype.rebuildLayout = function (clientWidth, clientHeight) {
        if (clientWidth === void 0) { clientWidth = 1; }
        if (clientHeight === void 0) { clientHeight = 1; }
        new _dashboard_layout_creator_1.DashboardLayoutCreator(clientWidth, clientHeight, this).rebuildLayout();
    };
    Dashboard.prototype._getDisplayDashboardItem = function (tabPage) {
        if (!tabPage || !tabPage.showItemAsTabPage())
            return tabPage;
        var itemsOnTabPage = this.items().concat(this.groups()).filter(function (item) { return item.parentContainer() === tabPage.componentName(); });
        return itemsOnTabPage.length === 1 && !(itemsOnTabPage[0] instanceof group_item_1.GroupItem) ? itemsOnTabPage[0] : tabPage;
    };
    Dashboard.prototype._changeItem = function (oldItem, newItem) {
        var dashboardLayoutItem = this.layout().findLayoutItem(oldItem);
        this.items.replace(oldItem, newItem);
        dashboardLayoutItem.item = newItem;
    };
    Dashboard.prototype._duplicateItem = function (item) {
        var dashboardLayoutItem = this.layout().findLayoutItem(item);
        var serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer({ useRefs: false });
        var itemJSON = serializer.serialize(item);
        var itemCopy = _dashboard_item_factory_1.createDashboardItem(itemJSON, serializer);
        itemCopy.componentName(undefined);
        this.items.push(itemCopy);
        var newDashboardLayoutItem = new dashboard_layout_item_1.DashboardLayoutItem();
        newDashboardLayoutItem.item = itemCopy;
        newDashboardLayoutItem.weight(dashboardLayoutItem.weight());
        dashboardLayoutItem.insert(newDashboardLayoutItem, 'left');
    };
    Dashboard.prototype._createDashboardLayoutItem = function (modelItemJson) {
        if (!!modelItemJson) {
            var newItemModel = _dashboard_item_factory_1.createDashboardItem(modelItemJson);
            newItemModel.name(_helper_classes_1.NameGenerator.generateName(_dashboard_item_helper_1.getItemTitle(newItemModel) + " ", this.items().concat(this.groups()), 'name', 1));
            if (this.dataSources().length > 0 && newItemModel instanceof data_dashboard_item_1.DataDashboardItem) {
                newItemModel.dataSource(this.dataSources()[0].componentName());
                if (this.dataSources()[0] instanceof sql_data_source_1.SqlDataSource) {
                    var sqlDataSource = (this.dataSources()[0]);
                    sqlDataSource.queries().length > 0 && newItemModel.dataMember(sqlDataSource.queries()[0].name());
                }
                if (this.dataSources()[0] instanceof ef_data_source_1.EFDataSource) {
                    var efDataSource = (this.dataSources()[0]);
                    if (!efDataSource._tables().length) {
                        var subscription = efDataSource._tables.subscribe(function (tables) {
                            var dataDashboardItem = newItemModel;
                            if (dataDashboardItem.dataSource() === efDataSource.componentName() && !dataDashboardItem.dataMember.peek()) {
                                newItemModel.dataMember(tables[0].dataMember());
                            }
                            subscription.dispose();
                        });
                    }
                    else {
                        newItemModel.dataMember(efDataSource._tables()[0].dataMember());
                    }
                }
                if (this.dataSources()[0] instanceof federation_data_source_1.FederationDataSource) {
                    var feredationDataSource = (this.dataSources()[0]);
                    feredationDataSource.queries().length > 0 && newItemModel.dataMember(feredationDataSource.queries()[0].alias());
                }
            }
            if (newItemModel instanceof group_item_1.GroupItem) {
                this.groups.push(newItemModel);
            }
            else {
                this.items.push(newItemModel);
            }
            return this._createDashboardLayoutNode(newItemModel);
        }
        return new dashboard_layout_group_1.DashboardLayoutGroup();
    };
    Dashboard.prototype._createDashboardLayoutNode = function (dashboardItem) {
        var itemType = null;
        if (dashboardItem instanceof group_item_1.GroupItem) {
            itemType = "LayoutGroup";
        }
        else if (dashboardItem instanceof tab_container_item_1.TabContainerItem) {
            itemType = "LayoutTabContainer";
        }
        else {
            itemType = "LayoutItem";
        }
        var newLayoutItemModel = _layout_utils_1.deserializeDashboardLayoutNode({ "@ItemType": itemType });
        newLayoutItemModel.item = dashboardItem;
        return newLayoutItemModel;
    };
    Dashboard.prototype._findDataItem = function (itemId) {
        return this._dataDashboardItems().filter(function (item) { return item.componentName() == itemId; })[0];
    };
    Dashboard.prototype._interactivityGroupPathToRoot = function (dashboardItem) {
        var _this = this;
        var getParentContainerItem = function (item) {
            return (!!item.parentContainer() && _this.findItem(item.parentContainer()) || undefined);
        };
        var parentContainers = [];
        var parentContainerItem = dashboardItem;
        do {
            parentContainerItem = getParentContainerItem(parentContainerItem);
            if (parentContainerItem) {
                parentContainers.push(parentContainerItem);
            }
        } while (parentContainerItem);
        return parentContainers;
    };
    ;
    Dashboard.prototype._processDeleteDataSource = function (dataSource) {
        this._dataDashboardItems()
            .filter(function (item) { return item.dataSource() == dataSource.componentName(); })
            .forEach(function (item) { return item._clearBindings(); });
    };
    Dashboard._dataSourceTypesMap = __assign({ "FederationDataSource": federation_data_source_1.FederationDataSource }, _data_source_factory_base_1._baseDataSourceTypesMap);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], Dashboard.prototype, "_changeItem", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], Dashboard.prototype, "_duplicateItem", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], Dashboard.prototype, "_processDeleteDataSource", null);
    return Dashboard;
}(serializable_model_1.SerializableModel));
exports.Dashboard = Dashboard;
