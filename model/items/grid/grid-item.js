/**
* DevExpress Dashboard (grid-item.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var data_dashboard_item_1 = require("../data-dashboard-item");
var grid_columns_1 = require("./grid-columns");
var _grid_item_1 = require("./metadata/_grid-item");
var _undo_engine_helper_1 = require("../../internal/_undo-engine-helper");
var _model_subscriber_1 = require("../../../common/dashboard-update-hub/_model-subscriber");
var grid_calc_window_definition_1 = require("../../data-item/window-definition/grid-calc-window-definition");
var serializable_model_1 = require("../../serializable-model");
var _utils_1 = require("../../../data/_utils");
var GridItem = (function (_super) {
    __extends(GridItem, _super);
    function GridItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this.columns = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.GridColumns, function (item) { return _this._createGridColumn(item, serializer); });
        _this._attachDataItem(_this, _grid_item_1.sparklineArgument.propertyName);
        _this.interactivityOptions.masterFilterMode.subscribe(function (newMode) {
            if (newMode !== "None") {
                _this.gridOptions.allowCellMerge(false);
            }
        });
        return _this;
    }
    GridItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.columns.removeAll();
    };
    GridItem.prototype._createGridColumn = function (columnJSON, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var itemType = columnJSON["@ItemType"];
        return new GridItem._gridColumnTypesMap[itemType].constructor(this, columnJSON, serializer);
    };
    GridItem.prototype.getInfo = function () {
        return _grid_item_1.dashboardGridItemSerializationsInfo;
    };
    GridItem.prototype._getDefaultItemType = function () {
        return "Grid";
    };
    GridItem.prototype._getMasterFilterMode = function () { return this.interactivityOptions.masterFilterMode(); };
    GridItem.prototype._getDrillDownEnabled = function () { return this.interactivityOptions.isDrillDownEnabled(); };
    GridItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    GridItem.prototype._getInteractivityDimensionLinks = function () {
        if (this.columns().length > 0) {
            var dimensionsMap = this.columns().map(function (col) { return col instanceof grid_columns_1.GridDimensionColumn || col instanceof grid_columns_1.GridHyperlinkColumn; });
            var startIndex = dimensionsMap.indexOf(true);
            startIndex = startIndex == -1 ? dimensionsMap.length : startIndex;
            var endIndex = dimensionsMap.indexOf(false, startIndex);
            endIndex = endIndex == -1 ? dimensionsMap.length : endIndex;
            return this.columns().slice(startIndex, endIndex)
                .filter(function (col) { return col instanceof grid_columns_1.GridHyperlinkColumn || col.displayMode() !== "Image"; })
                .map(function (col) { return col._actualDataItemLink; });
        }
        else {
            return _super.prototype._getInteractivityDimensionLinks.call(this);
        }
    };
    GridItem.prototype._cleanDataItemDependencies = function () {
        var _this = this;
        _super.prototype._cleanDataItemDependencies.call(this);
        var columnsToRemove = this.columns().filter(function (column) {
            var bindings = column._getBindingModel();
            return bindings.every(function (binding) { return !column[binding.propertyName].dataItem(); });
        });
        columnsToRemove.forEach(function (column) { return _this.columns.remove(column); });
    };
    GridItem.prototype._updateContentViewModel = function (content) {
        var _this = this;
        _super.prototype._updateContentViewModel.call(this, content);
        content.ViewModel = _utils_1.deepExtend(content.ViewModel || {}, this.gridOptions._getViewModel());
        if (!!content.ViewModel.Columns) {
            content.ViewModel.Columns.forEach(function (columnModel) {
                var column = _this.columns().filter(function (column) {
                    var actualDataItem = column.actualDataItem;
                    return actualDataItem ? columnModel.DataId == actualDataItem.uniqueName() : false;
                })[0];
                _utils_1.deepExtend(columnModel, !!column ? column._getViewModel() : {});
            });
        }
    };
    GridItem.prototype._isAttribute = function (dataItem) {
        return this.columns().some(function (c) { return c._isAttribute(dataItem); });
    };
    GridItem.prototype._setColumnWidthOptions = function (clientState) {
        var _this = this;
        if (clientState.widthOptions) {
            _model_subscriber_1.ModelSubscriber.changePropertyQuietly(this.gridOptions.columnWidthMode, function () { return _this.gridOptions.columnWidthMode(clientState.widthOptions.mode); });
            clientState.widthOptions.columnsOptions.forEach(function (columnOptions, index) {
                var column = _this.columns()[columnOptions.actualIndex];
                _model_subscriber_1.ModelSubscriber.changePropertyQuietly(column.widthType, function () { return column.widthType(columnOptions.widthType); });
                _model_subscriber_1.ModelSubscriber.changePropertyQuietly(column.weight, function () { return column.weight(columnOptions.weight); });
            });
        }
    };
    GridItem.prototype._getDefaultCalculationWindowDefinition = function () {
        return new grid_calc_window_definition_1.GridWindowDefinition();
    };
    GridItem.prototype._setClientState = function (clientState) {
        _super.prototype._setClientState.call(this, clientState);
        this._setColumnWidthOptions(clientState);
    };
    GridItem.prototype._getInteractivityAxisDimensionCount = function () {
        return this.columns().reduce(function (n, col) {
            return (col instanceof grid_columns_1.GridDimensionColumn) || (col instanceof grid_columns_1.GridHyperlinkColumn) ? n + 1 : n;
        }, 0);
    };
    GridItem._gridColumnTypesMap = {
        "GridDimensionColumn": {
            constructor: grid_columns_1.GridDimensionColumn,
            displayName: "DashboardWebStringId.Grid.Dimension",
            icon: "dx-dashboard-grid-column-dimension"
        },
        "GridMeasureColumn": {
            constructor: grid_columns_1.GridMeasureColumn,
            displayName: "DashboardWebStringId.Grid.Measure",
            icon: "dx-dashboard-grid-column-measure"
        },
        "GridDeltaColumn": {
            constructor: grid_columns_1.GridDeltaColumn,
            displayName: "DashboardWebStringId.Grid.Delta",
            icon: "dx-dashboard-grid-column-delta"
        },
        "GridSparklineColumn": {
            constructor: grid_columns_1.GridSparklineColumn,
            displayName: "DashboardWebStringId.Grid.Sparkline",
            icon: "dx-dashboard-grid-column-sparkline"
        },
        "GridHyperlinkColumn": {
            constructor: grid_columns_1.GridHyperlinkColumn,
            displayName: "DashboardWebStringId.Grid.Hyperlink",
            icon: "dx-dashboard-grid-column-hyperlink"
        }
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], GridItem.prototype, "_setColumnWidthOptions", null);
    return GridItem;
}(data_dashboard_item_1.DataDashboardItem));
exports.GridItem = GridItem;
serializable_model_1.itemTypesMap["Grid"] = { type: GridItem, groupName: 'common', title: "DashboardStringId.DefaultNameGridItem", index: 10 };
