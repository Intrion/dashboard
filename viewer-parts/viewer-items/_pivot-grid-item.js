/**
* DevExpress Dashboard (_pivot-grid-item.js)
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
Object.defineProperty(exports, "__esModule", { value: true });
var _base_item_1 = require("./_base-item");
var _style_settings_provider_1 = require("../conditional-formatting/_style-settings-provider");
var pivot_grid_1 = require("devextreme/ui/pivot_grid");
var _dashboard_viewer_constants_1 = require("../viewer/_dashboard-viewer-constants");
var _localizer_1 = require("../../data/_localizer");
var _localization_ids_1 = require("../../data/_localization-ids");
var _item_data_axis_names_1 = require("../viewer/_item-data-axis-names");
var _utils_1 = require("../../data/_utils");
var $ = require("jquery");
var PIVOT_BAR_ID = 'pivotBar';
var pivotGridItem = (function (_super) {
    __extends(pivotGridItem, _super);
    function pivotGridItem(container, options) {
        var _this = _super.call(this, container, options) || this;
        _this._conditionalFormattingInfoCache = [];
        _this.expandStateChanged = $.Callbacks();
        _this._collapseStateCache = {};
        _this._conditionalFormattingInfoCache = [];
        _this._styleSettingsProvider = new _style_settings_provider_1.styleSettingsProvider();
        _this._styleSettingsProvider.initialize(_this.options.ConditionalFormattingModel);
        return _this;
    }
    Object.defineProperty(pivotGridItem.prototype, "_captionToolbarSeparatorRequired", {
        get: function () {
            return !this.hasParentContainer() || (this.hasParentContainer() && this.visualMode === 'caption');
        },
        enumerable: true,
        configurable: true
    });
    pivotGridItem.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.pivotGridViewer && this.pivotGridViewer.dispose();
    };
    pivotGridItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        if (this.options) {
            var pivotOptions = this._getPivotGridOptions();
            if (changeExisting && this.pivotGridViewer) {
                this.pivotGridViewer.option(pivotOptions);
            }
            else {
                this.pivotGridViewer = new pivot_grid_1.default(element, pivotOptions);
            }
            this._conditionalFormattingInfoCache = [];
        }
        return false;
    };
    pivotGridItem.prototype.renderPartialContentUnsafe = function () {
        var parameters = this.options.Parameters, isColumn = parameters[1], area = isColumn ? 'column' : 'row', path = parameters[0], pivotDataSource = this.dataController.getDataSource(null, isColumn, path);
        this._conditionalFormattingInfoCache = [];
        this.pivotGridViewer.applyPartialDataSource(area, path, pivotDataSource);
    };
    pivotGridItem.prototype.getInfoUnsafe = function () {
        return _utils_1.deepExtend(_super.prototype.getInfoUnsafe.call(this), {
            scroll: {
                topPath: this.pivotGridViewer.getScrollPath('row'),
                leftPath: this.pivotGridViewer.getScrollPath('column'),
                horizontal: this.pivotGridViewer.hasScroll('column'),
                vertical: this.pivotGridViewer.hasScroll('row')
            }
        });
    };
    pivotGridItem.prototype.getExpandingState = function (isRowsExpanding, isColumnsExpanding) {
        if (isRowsExpanding === void 0) { isRowsExpanding = true; }
        if (isColumnsExpanding === void 0) { isColumnsExpanding = true; }
        var ds = this.pivotGridViewer ? this.pivotGridViewer.getDataSource() : undefined;
        return {
            rows: isRowsExpanding ? this._getExpandedPaths(ds, false) : this._getCollapsedPaths(ds, false),
            columns: isColumnsExpanding ? this._getExpandedPaths(ds, true) : this._getCollapsedPaths(ds, true)
        };
    };
    pivotGridItem.prototype._onExpandStateChanged = function (state) {
        this.expandStateChanged.fire(state);
    };
    pivotGridItem.prototype._getExpandedPaths = function (ds, isColumn) {
        if (!ds)
            return [];
        var state = ds.state();
        if (!state)
            return [];
        return isColumn ? state.columnExpandedPaths : state.rowExpandedPaths;
    };
    pivotGridItem.prototype._getCollapsedPaths = function (ds, isColumn) {
        if (!ds)
            return [];
        var result = [], data = ds.getData() || [], area = isColumn ? 'column' : 'row', fields = ds.getAreaFields(area);
        var foreachTreeItem = function (items, members, callback) {
            members = members || [];
            items = items || [];
            var item;
            for (var i = 0; i < items.length; i++) {
                item = items[i];
                members.unshift(item);
                callback(members, i);
                if (item.children) {
                    foreachTreeItem(item.children, members, callback);
                }
                members.shift();
            }
        };
        var createPath = function (items) {
            var result = [];
            for (var i = items.length - 1; i >= 0; i--) {
                result.push(items[i].key || items[i].value);
            }
            return result;
        };
        foreachTreeItem(data[area + 's'], undefined, function (items) {
            var item = items[0], path = createPath(items);
            if (!(item.children && fields[path.length - 1] && !fields[path.length - 1].expanded)) {
                (path.length < fields.length) && result.push(path.slice());
            }
        });
        return result;
    };
    pivotGridItem.prototype._initializeData = function (newOptions) {
        _super.prototype._initializeData.call(this, newOptions);
        this.options.PivotExpandViewState = newOptions.PivotExpandViewState;
        if (this._styleSettingsProvider) {
            this._styleSettingsProvider.initialize(this.options.ConditionalFormattingModel);
        }
    };
    pivotGridItem.prototype._getPivotGridOptions = function () {
        var _this = this;
        if (!this.options.ViewModel) {
            return {};
        }
        var viewModel = this.options.ViewModel, commonOptions = {};
        var dataSource = this.dataController.getDataSource(this.options.PivotExpandViewState);
        commonOptions.dataSource = dataSource;
        var fields = dataSource.fields;
        commonOptions.fieldChooser = { enabled: false };
        commonOptions.loadPanel = { enabled: false };
        commonOptions.contextMenuEnabled = false;
        commonOptions.showRowGrandTotals = this._showRowGrandTotals(fields);
        commonOptions.showColumnGrandTotals = this._getShowColumnGrandTotals(fields);
        commonOptions.showColumnTotals = viewModel.ShowColumnTotals;
        commonOptions.showRowTotals = viewModel.ShowRowTotals;
        commonOptions.dataFieldArea = viewModel.ValuesPosition == "Rows" ? "row" : "column";
        if (viewModel.LayoutType == "Compact") {
            commonOptions.rowHeaderLayout = "tree";
            if (viewModel.ColumnTotalsPosition == "Near")
                commonOptions.showTotalsPrior = "columns";
            else
                commonOptions.showTotalsPrior = "none";
        }
        else {
            commonOptions.rowHeaderLayout = "standard";
            if (viewModel.RowTotalsPosition == "Top" && viewModel.ColumnTotalsPosition == "Near")
                commonOptions.showTotalsPrior = "both";
            else if (viewModel.RowTotalsPosition == "Top")
                commonOptions.showTotalsPrior = "rows";
            else if (viewModel.ColumnTotalsPosition == "Near")
                commonOptions.showTotalsPrior = "columns";
            else
                commonOptions.showTotalsPrior = "none";
        }
        var dataFields = fields.filter(function (field) { return field.area == 'data'; });
        for (var i = 0; i < viewModel.Values.length; i++) {
            dataFields[i].showValues = viewModel.Values[i].ShowValues;
            dataFields[i].showTotals = viewModel.Values[i].ShowTotals;
            dataFields[i].showGrandTotals = viewModel.Values[i].ShowGrandTotals;
        }
        var columnFields = fields.filter(function (field) { return field.area == 'column'; });
        for (var i = 0; i < viewModel.Columns.length; i++) {
            columnFields[i].showTotals = viewModel.Columns[i].ShowTotals;
        }
        var rowFields = fields.filter(function (field) { return field.area == 'row'; });
        for (var i = 0; i < viewModel.Rows.length; i++) {
            rowFields[i].showTotals = viewModel.Rows[i].ShowTotals;
        }
        commonOptions.encodeHtml = this._isEncodeHtml();
        commonOptions.scrolling = {
            mode: 'standard',
            useNative: _dashboard_viewer_constants_1.USE_NATIVE_SCROLLING
        };
        commonOptions.stateStoring = {
            enabled: true,
            type: "custom",
            savingTimeout: 0,
            customLoad: function () { return null; },
            customSave: function (state) { _this._onExpandStateChanged(state); }
        },
            commonOptions.onExpandValueChanging = this._getExpandValueChangingHandler();
        commonOptions.texts = {
            grandTotal: _localizer_1.localizer.getString(_localization_ids_1.localizationId.PivotGridGrandTotal),
            total: _localizer_1.localizer.getString(_localization_ids_1.localizationId.PivotGridTotal),
            noData: _localizer_1.localizer.getString(_localization_ids_1.localizationId.MessagePivotHasNoData)
        };
        commonOptions.onCellClick = function (e) {
            if (e.area === "data") {
                _this._raiseItemClick(e.cell);
            }
        };
        commonOptions.onCellPrepared = function (e) { return _this._onCellPrepared(e); };
        commonOptions.onContentReady = function (e) { return _this._styleSettingsProvider.draw(); };
        return commonOptions;
    };
    pivotGridItem.prototype._getShowColumnGrandTotals = function (fields) {
        var viewModel = this.options.ViewModel;
        var columnFields = fields.filter(function (field) { return field.area == 'column'; });
        var rowFields = fields.filter(function (field) { return field.area == 'row'; });
        if (!viewModel.ShowColumnGrandTotals && (columnFields.length === 0 && rowFields.length !== 0)) {
            return true;
        }
        return viewModel.ShowColumnGrandTotals;
    };
    pivotGridItem.prototype._showRowGrandTotals = function (fields) {
        var viewModel = this.options.ViewModel;
        var columnFields = fields.filter(function (field) { return field.area == 'column'; });
        var rowFields = fields.filter(function (field) { return field.area == 'row'; });
        if (!viewModel.ShowRowGrandTotals && (columnFields.length !== 0 && rowFields.length === 0)) {
            return true;
        }
        return viewModel.ShowRowGrandTotals;
    };
    pivotGridItem.prototype._createHeaderHierarchy = function (list) {
        var result = [], tempList = [], current = null, parent = null, index = 0, i, item, parentHash = [];
        if (list && list.length > 0) {
            for (i = 0; i < list.length; i++) {
                item = list[i];
                current = {
                    index: index++,
                    value: item[1],
                    displayText: item[2],
                    parentIndex: item[3]
                };
                tempList.push(current);
                if (current.parentIndex >= 0) {
                    parent = tempList[current.parentIndex];
                    if (!parent.children) {
                        parent.children = [];
                    }
                    parent.children.push(current);
                }
            }
            for (i = 0; i < tempList.length; i++) {
                item = tempList[i];
                if (item.parentIndex < 0) {
                    result.push({
                        index: item.index,
                        value: item.value,
                        displayText: item.displayText,
                        children: item.children
                    });
                }
            }
        }
        return result;
    };
    pivotGridItem.prototype._createCells = function (list) {
        var result = [], columnIndex = -1, rowIndex = -1, dataIndex = -1, value = null, i, elem;
        if (list && list.length > 0) {
            for (i = 0; i < list.length; i++) {
                elem = list[i];
                columnIndex = elem[0];
                rowIndex = elem[1];
                dataIndex = elem[2];
                value = elem[3];
                if (!result[rowIndex]) {
                    result[rowIndex] = [];
                }
                if (!result[rowIndex][columnIndex]) {
                    result[rowIndex][columnIndex] = [];
                }
                result[rowIndex][columnIndex].splice(dataIndex, 0, value);
            }
        }
        ;
        return result;
    };
    pivotGridItem.prototype._getExpandValueChangingHandler = function () {
        var that = this;
        return function (args) {
            var isColumn = args.area === 'column', values = args.path;
            that._onExpandValue({
                values: values,
                isColumn: isColumn,
                isExpand: args.expanded,
                isRequestData: !!args.needExpandData
            });
            that.onCollapseStateChanged(isColumn, values, !args.expanded);
        };
    };
    pivotGridItem.prototype.onCollapseStateChanged = function (isColumn, values, collapse) {
        var that = this, collapseState = values.concat(isColumn ? 'column' : 'row');
        that._conditionalFormattingInfoCache = [];
        if (collapse)
            that._collapseStateCache[collapseState] = collapseState;
        else
            delete that._collapseStateCache[collapseState];
    };
    pivotGridItem.prototype._resizeUnsafe = function () {
        _super.prototype._resizeUnsafe.call(this);
        this.pivotGridViewer.resize();
        this._styleSettingsProvider.updateBarWidth(PIVOT_BAR_ID);
    };
    pivotGridItem.prototype._getDataPoint = function (element) {
        var that = this, viewModel = that.options.ViewModel;
        return {
            getValues: function (name) {
                switch (name) {
                    case _item_data_axis_names_1.itemDataAxisNames.pivotRowAxis:
                        return element.rowPath;
                    case _item_data_axis_names_1.itemDataAxisNames.pivotColumnAxis:
                        return element.columnPath;
                    default:
                        return null;
                }
            },
            getDeltaIds: function () {
                return [];
            },
            getMeasureIds: function () {
                var dataIndex = element.dataIndex;
                if (dataIndex != undefined) {
                    return [viewModel.Values[dataIndex].DataId];
                }
                return null;
            }
        };
    };
    pivotGridItem.prototype._getWidget = function () {
        return this.pivotGridViewer;
    };
    pivotGridItem.prototype._onCellPrepared = function (element) {
        var styleSettingsInfo, isMeasureHeader = (element.area === _utils_1.pivotArea.column || element.area === _utils_1.pivotArea.row) && element.cell.dataIndex !== undefined, cellItem = {
            area: element.area
        };
        if (!isMeasureHeader) {
            if (element.area === _utils_1.pivotArea.column) {
                cellItem.columnPath = element.cell.path;
                cellItem.columnType = element.cell.type;
            }
            else if (element.area === _utils_1.pivotArea.row) {
                cellItem.rowPath = element.cell.path;
                cellItem.rowType = element.cell.type;
            }
            else {
                cellItem.columnPath = element.cell.columnPath;
                cellItem.rowPath = element.cell.rowPath;
                cellItem.cellIndex = element.cell.dataIndex;
                cellItem.columnType = element.cell.columnType;
                cellItem.rowType = element.cell.rowType;
            }
            styleSettingsInfo = this.dataController.getStyleSettingsInfo(cellItem, this._collapseStateCache, this._conditionalFormattingInfoCache);
            this._styleSettingsProvider.applyStyleSettings(_utils_1.$unwrap(element.cellElement), styleSettingsInfo, false, PIVOT_BAR_ID);
        }
    };
    return pivotGridItem;
}(_base_item_1.baseItem));
exports.pivotGridItem = pivotGridItem;
