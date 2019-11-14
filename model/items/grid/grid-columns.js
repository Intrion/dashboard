/**
* DevExpress Dashboard (grid-columns.js)
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
var serializable_model_1 = require("../../serializable-model");
var _utils_1 = require("../../internal/_utils");
var grid_column_total_1 = require("./grid-column-total");
var data_item_1 = require("../../data-item/data-item");
var _grid_columns_1 = require("./metadata/_grid-columns");
var _grid_column_total_1 = require("./metadata/_grid-column-total");
var _data_field_1 = require("../../data-sources/_data-field");
var measure_1 = require("../../data-item/measure");
var ko = require("knockout");
var GridColumnType;
(function (GridColumnType) {
    GridColumnType[GridColumnType["Dimension"] = 0] = "Dimension";
    GridColumnType[GridColumnType["Measure"] = 1] = "Measure";
    GridColumnType[GridColumnType["Delta"] = 2] = "Delta";
    GridColumnType[GridColumnType["Sparkline"] = 3] = "Sparkline";
    GridColumnType[GridColumnType["Hyperlink"] = 4] = "Hyperlink";
})(GridColumnType = exports.GridColumnType || (exports.GridColumnType = {}));
var GridColumn = (function (_super) {
    __extends(GridColumn, _super);
    function GridColumn(dataItemProvider, dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this._displayNameSeparator = "vs";
        _this.totals = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.Totals, function (item) { return new grid_column_total_1.GridColumnTotal(item, serializer); });
        return _this;
    }
    Object.defineProperty(GridColumn.prototype, "actualDataItem", {
        get: function () {
            var dataItemLink = this._getActualDataItemLink();
            return !!dataItemLink ? dataItemLink.dataItem() : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumn.prototype, "_actualDataItemLink", {
        get: function () {
            return this._getActualDataItemLink();
        },
        enumerable: true,
        configurable: true
    });
    GridColumn.prototype.grabFrom = function (column) {
        this.weight(column.weight());
        this.fixedWidth(column.fixedWidth());
        this.widthType(column.widthType());
    };
    GridColumn.prototype.getInfo = function () {
        return _grid_columns_1.gridColumnBaseSerializationsInfo;
    };
    GridColumn.prototype._getColumnType = function () {
        return undefined;
    };
    GridColumn.prototype._isAttribute = function (dataItem) {
        return false;
    };
    GridColumn.prototype._getViewModel = function () {
        return {
            Weight: this.weight(),
            FixedWidth: this.fixedWidth(),
            WidthType: this.widthType()
        };
    };
    GridColumn.prototype._getAvailableTotalTypes = function (dataItemProvider) {
        return _grid_column_total_1.totalTypeValues.commonCountTypes;
    };
    GridColumn.prototype._getTotalTypes = function (dataType) {
        var possibleTypes = _grid_column_total_1.totalTypeValues.commonCountTypes;
        if (_data_field_1.IsNumeric(dataType)) {
            return _grid_column_total_1.totalTypeValues.commonMinMaxTypes.concat(_grid_column_total_1.totalTypeValues.numericTypes).concat(possibleTypes);
        }
        else if (_data_field_1.IsTextual(dataType) || _data_field_1.IsDateTime(dataType)) {
            return _grid_column_total_1.totalTypeValues.commonMinMaxTypes.concat(possibleTypes);
        }
        else {
            return possibleTypes;
        }
    };
    __decorate([
        _utils_1.collectionItemType("Total")
    ], GridColumn.prototype, "totals", void 0);
    return GridColumn;
}(serializable_model_1.TypedSerializableModel));
exports.GridColumn = GridColumn;
var GridDimensionColumn = (function (_super) {
    __extends(GridDimensionColumn, _super);
    function GridDimensionColumn(dataItemProvider, dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        var _this = _super.call(this, dataItemProvider, dashboardItemJSON, serializer) || this;
        dataItemProvider._attachDataItem(_this, _grid_columns_1.dimension.propertyName);
        return _this;
    }
    GridDimensionColumn.prototype.getInfo = function () {
        return _grid_columns_1.gridDimensionColumnSerializationsInfo;
    };
    GridDimensionColumn.prototype._getColumnType = function () {
        return GridColumnType.Dimension;
    };
    GridDimensionColumn.prototype._getActualDataItemLink = function () {
        return this.__dimension;
    };
    GridDimensionColumn.prototype._getAvailableTotalTypes = function (dataItemProvider) {
        var dataItem = this.actualDataItem;
        if (dataItem) {
            return this._getTotalTypes(dataItemProvider._getFinalDataType(dataItem.uniqueName()));
        }
        else {
            return _super.prototype._getAvailableTotalTypes.call(this, dataItemProvider);
        }
    };
    GridDimensionColumn.prototype._getDefaultItemType = function () {
        return "GridDimensionColumn";
    };
    GridDimensionColumn.prototype._getBindingModel = function () {
        return [{
                propertyName: _grid_columns_1.dimension.propertyName,
                dataItemType: 'Dimension',
                emptyPlaceholder: "DashboardStringId.DescriptionItemDimension"
            }];
    };
    return GridDimensionColumn;
}(GridColumn));
exports.GridDimensionColumn = GridDimensionColumn;
var GridMeasureColumn = (function (_super) {
    __extends(GridMeasureColumn, _super);
    function GridMeasureColumn(dataItemProvider, dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        var _this = _super.call(this, dataItemProvider, dashboardItemJSON, serializer) || this;
        dataItemProvider._attachDataItem(_this, _grid_columns_1.measure.propertyName);
        _this.__measure._specifics.acceptableShapingType = data_item_1.AcceptableShapingType.String;
        return _this;
    }
    GridMeasureColumn.prototype.getInfo = function () {
        return _grid_columns_1.gridMeasureColumnSerializationsInfo;
    };
    GridMeasureColumn.prototype._getColumnType = function () {
        return GridColumnType.Measure;
    };
    GridMeasureColumn.prototype._getActualDataItemLink = function () {
        return this.__measure;
    };
    GridMeasureColumn.prototype._getAvailableTotalTypes = function (dataItemProvider) {
        var dataItem = this.actualDataItem;
        if (dataItem instanceof measure_1.Measure) {
            var totalTypes = this._getTotalTypes(dataItemProvider._getFinalDataType(dataItem.uniqueName()));
            if (dataItem.expression() == null && dataItem.calculation.calculation() == null)
                totalTypes = totalTypes.concat(_grid_column_total_1.totalTypeValues.autoTypes);
            return totalTypes;
        }
        else {
            return _super.prototype._getAvailableTotalTypes.call(this, dataItemProvider);
        }
    };
    GridMeasureColumn.prototype._getDefaultItemType = function () {
        return "GridMeasureColumn";
    };
    GridMeasureColumn.prototype._getBindingModel = function () {
        return [{
                propertyName: _grid_columns_1.measure.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.DescriptionItemMeasure"
            }];
    };
    return GridMeasureColumn;
}(GridColumn));
exports.GridMeasureColumn = GridMeasureColumn;
var GridDeltaColumn = (function (_super) {
    __extends(GridDeltaColumn, _super);
    function GridDeltaColumn(dataItemProvider, dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        var _this = _super.call(this, dataItemProvider, dashboardItemJSON, serializer) || this;
        dataItemProvider._attachDataItem(_this, _grid_columns_1.gridColumnActualValue.propertyName);
        dataItemProvider._attachDataItem(_this, _grid_columns_1.gridColumnTargetValue.propertyName);
        ko.computed(function () {
            _this.__actualValue._specifics.skipFormatting = true;
            _this.__targetValue._specifics.skipFormatting = true;
            if (!_this.__actualValue.dataItem() && _this.__targetValue.dataItem()) {
                _this.__targetValue._specifics.skipFormatting = false;
            }
            if (_this.__actualValue.dataItem() && !_this.__targetValue.dataItem()) {
                _this.__actualValue._specifics.skipFormatting = false;
            }
            else if (_this.__actualValue.dataItem() && _this.__targetValue.dataItem() && _this.deltaOptions.valueType() === "ActualValue") {
                _this.__actualValue._specifics.skipFormatting = false;
            }
        });
        return _this;
    }
    GridDeltaColumn.prototype.getInfo = function () {
        return _grid_columns_1.gridDeltaColumnSerializationsInfo;
    };
    GridDeltaColumn.prototype._getColumnType = function () {
        return GridColumnType.Delta;
    };
    GridDeltaColumn.prototype._getActualDataItemLink = function () {
        return !!this.__actualValue.dataItem() ? this.__actualValue : this.__targetValue;
    };
    GridDeltaColumn.prototype._getDefaultItemType = function () {
        return "GridDeltaColumn";
    };
    GridDeltaColumn.prototype._getBindingModel = function () {
        return [{
                propertyName: _grid_columns_1.gridColumnActualValue.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.ActualValueCaption"
            }, {
                propertyName: _grid_columns_1.gridColumnTargetValue.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.TargetValueCaption"
            }];
    };
    return GridDeltaColumn;
}(GridColumn));
exports.GridDeltaColumn = GridDeltaColumn;
var GridSparklineColumn = (function (_super) {
    __extends(GridSparklineColumn, _super);
    function GridSparklineColumn(dataItemProvider, dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        var _this = _super.call(this, dataItemProvider, dashboardItemJSON, serializer) || this;
        dataItemProvider._attachDataItem(_this, _grid_columns_1.sparkline.propertyName);
        return _this;
    }
    GridSparklineColumn.prototype.getInfo = function () {
        return _grid_columns_1.gridSparklineColumnSerializationsInfo;
    };
    GridSparklineColumn.prototype._getColumnType = function () {
        return GridColumnType.Sparkline;
    };
    GridSparklineColumn.prototype._getActualDataItemLink = function () {
        return this.__measure;
    };
    GridSparklineColumn.prototype._getDefaultItemType = function () {
        return "GridSparklineColumn";
    };
    GridSparklineColumn.prototype._getBindingModel = function () {
        return [{
                propertyName: _grid_columns_1.sparkline.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardWebStringId.Grid.Sparkline"
            }];
    };
    return GridSparklineColumn;
}(GridColumn));
exports.GridSparklineColumn = GridSparklineColumn;
var GridHyperlinkColumn = (function (_super) {
    __extends(GridHyperlinkColumn, _super);
    function GridHyperlinkColumn(dataItemProvider, dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        var _this = _super.call(this, dataItemProvider, dashboardItemJSON, serializer) || this;
        dataItemProvider._attachDataItem(_this, _grid_columns_1.displayValue.propertyName);
        _this.__uriAttribute = data_item_1.DataItemLink.create(dataItemProvider, _this.__uriAttribute);
        _this.__uriAttribute._specifics.isAttribute = true;
        _this.__uriAttribute._specifics.acceptableShapingType = data_item_1.AcceptableShapingType.Attribute;
        _this._displayNameSeparator = "/";
        var isUriPatternChangedCallback = function (value) {
            _this.uriPattern(_grid_columns_1.checkGridUriPattern(value));
        };
        _this.uriPattern.subscribe(isUriPatternChangedCallback);
        return _this;
    }
    GridHyperlinkColumn.prototype.getInfo = function () {
        return _grid_columns_1.gridHyperlinkColumnSerializationsInfo;
    };
    GridHyperlinkColumn.prototype._getColumnType = function () {
        return GridColumnType.Hyperlink;
    };
    GridHyperlinkColumn.prototype._getActualDataItemLink = function () {
        return this.__displayValue;
    };
    GridHyperlinkColumn.prototype._getDefaultItemType = function () {
        return "GridHyperlinkColumn";
    };
    GridHyperlinkColumn.prototype._isAttribute = function (dataItem) {
        return dataItem === this.__uriAttribute.dataItem();
    };
    GridHyperlinkColumn.prototype._getBindingModel = function () {
        return [{
                propertyName: _grid_columns_1.displayValue.propertyName,
                dataItemType: 'Dimension',
                emptyPlaceholder: "DashboardStringId.DisplayValueCaption"
            }, {
                propertyName: _grid_columns_1.uri.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.UriCaption"
            }];
    };
    return GridHyperlinkColumn;
}(GridColumn));
exports.GridHyperlinkColumn = GridHyperlinkColumn;
