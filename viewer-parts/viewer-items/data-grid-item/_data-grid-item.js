/**
* DevExpress Dashboard (_data-grid-item.js)
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
Object.defineProperty(exports, "__esModule", { value: true });
var _base_item_1 = require("../_base-item");
var _column_width_calculator_1 = require("./_column-width-calculator");
var data_grid_1 = require("devextreme/ui/data_grid");
var _style_settings_provider_1 = require("../../conditional-formatting/_style-settings-provider");
var _utils_1 = require("../../../data/_utils");
var _grid_column_painter_1 = require("./_grid-column-painter");
var _dashboard_viewer_constants_1 = require("../../viewer/_dashboard-viewer-constants");
var _localizer_1 = require("../../../data/_localizer");
var _localization_ids_1 = require("../../../data/_localization-ids");
var $ = require("jquery");
var string_1 = require("devextreme/core/utils/string");
var index_internal_1 = require("../../../data/index.internal");
var MAX_CELL_COUNT = 2000, HEIGHT_DELTA_INDICATOR = 12, DATAGRID_CONTEXT_MENU_ICON = 'dashboard-datagriditem-resetcolumnwidths';
var dataGridItem = (function (_super) {
    __extends(dataGridItem, _super);
    function dataGridItem(container, options) {
        var _this = _super.call(this, container, options) || this;
        _this._updateLocked = false;
        _this._digits_string = '0123456789';
        _this.TextAlignment = {
            Left: 'left',
            Right: 'right',
            Center: 'center'
        };
        _this.DisplayMode = {
            Value: 'Value',
            Delta: 'Delta',
            Bar: 'Bar',
            Sparkline: 'Sparkline',
            Image: 'Image',
            Hyperlink: 'Hyperlink'
        };
        _this.SummaryType = {
            Count: 'Count',
            Min: 'Min',
            Max: 'Max',
            Avg: 'Avg',
            Sum: 'Sum'
        };
        _this.CssClasses = {
            wordWrap: 'dx-dashboard-word-wrap',
            gridAdaptiveCellValue: 'dx-adaptive-item-text'
        };
        _this._bestFitProvider = {
            getBestFit: function (index) {
                var bestFit = 0;
                var columnViewModel = _this.options.ViewModel.Columns[index];
                if (columnViewModel.DisplayMode === _this.DisplayMode.Sparkline) {
                    var columnName = _this.options.Name + columnViewModel.DataId;
                    var startValues = _utils_1.$unwrap(_this._dataGrid.element()).querySelectorAll('.' + columnName + '_startValue');
                    var endValues = _utils_1.$unwrap(_this._dataGrid.element()).querySelectorAll('.' + columnName + '_endValue');
                    var maxStartWidth = _grid_column_painter_1.GridColumnPainter.calcMaxWidth(startValues);
                    var maxEndWidth = _grid_column_painter_1.GridColumnPainter.calcMaxWidth(endValues);
                    bestFit = Math.round(_this._getDefaultBestCharacterCount(index) * _this.charWidth) + maxStartWidth + maxEndWidth;
                }
                else if (columnViewModel.DisplayMode === _this.DisplayMode.Bar) {
                    bestFit = Math.round(_this._getDefaultBestCharacterCount(index) * _this.charWidth);
                }
                else {
                    bestFit = _this._dataGrid.columnOption(index, 'bestFitWidth');
                }
                return bestFit;
            }
        };
        _this._clientStateUpdateDebounced = _utils_1.debounce(function (widthOptions) {
            _this.gridWidthOptionsChanged && _this.gridWidthOptionsChanged({
                widthOptions: widthOptions
            });
        }, 300);
        _this._customizeViewOptions = function (opts) { };
        _this._calculator = new _column_width_calculator_1.ColumnWidthCalculator();
        _this._styleSettingsProvider = new _style_settings_provider_1.styleSettingsProvider();
        _this._styleSettingsProvider.initialize(_this.options.ConditionalFormattingModel, _this.options.ViewModel ? _this.options.ViewModel.WordWrap : false);
        return _this;
    }
    Object.defineProperty(dataGridItem.prototype, "_captionToolbarSeparatorRequired", {
        get: function () {
            return !this.hasParentContainer() || (this.hasParentContainer() && this.visualMode === 'caption');
        },
        enumerable: true,
        configurable: true
    });
    dataGridItem.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._dataGrid && this._dataGrid.dispose();
    };
    dataGridItem.prototype._clearSelectionUnsafe = function () {
        this._dataGrid.clearSelection();
    };
    dataGridItem.prototype._setSelectionUnsafe = function (values) {
        _super.prototype._setSelectionUnsafe.call(this, values);
        this.clearSelection();
        if (values)
            this._setGridSelection(values);
    };
    dataGridItem.prototype._selectTuplesCore = function (tuples, updateTupleDelegate, state) {
        var that = this, currentSelection = that._dataGrid.getSelectedRowKeys(), values = [], processKeys = function (keys) {
            $.each(keys, function (_, key) {
                if (state) {
                    currentSelection.push(key);
                }
                else {
                    currentSelection.splice(currentSelection.indexOf(key), 1);
                }
            });
            return currentSelection;
        };
        tuples.forEach(function (tuple) {
            var res = updateTupleDelegate(tuple);
            if (res != null && res[0] != null) {
                values.push(res[0].Value);
            }
        });
        that._setGridSelection(values, processKeys);
    };
    dataGridItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        if (!this.options)
            return false;
        var opts = this._getViewOptions();
        if (this.options.ViewModel && this.options.ViewModel.WordWrap) {
            element.classList.add(this.CssClasses.wordWrap);
        }
        else {
            element.classList.remove(this.CssClasses.wordWrap);
        }
        if (changeExisting && this._dataGrid) {
            if (this.resetClientStateOnUpdate) {
                this._resetColumnWidths();
            }
            _utils_1.deepExtend(opts, this._getCommonOptions());
            this._dataGrid.option(opts);
        }
        else {
            this._dataGrid = new data_grid_1.default(element, __assign({}, opts, this._getCommonOptions()));
            this._updateCharWidth();
        }
        return false;
    };
    dataGridItem.prototype.getInfoUnsafe = function () {
        var that = this, gridScroll = this._dataGrid.getScrollable(), isVScrollbarVisible = that._dataGrid.isScrollbarVisible(), isHScrollbarVisible = gridScroll.scrollWidth() > gridScroll.clientWidth(), scrollRowData = that._dataGrid.getTopVisibleRowData(), combinedFilter = that._dataGrid.getCombinedFilter(), topPath = [], leftPath = [];
        if (scrollRowData) {
            $.each(that.options.ViewModel.RowIdentificatorDataMembers, function (index, dataMember) {
                var value = scrollRowData[dataMember];
                topPath.push(value);
            });
            leftPath.push(this._calculator.getLeftPrintingColumnIndex(gridScroll.scrollLeft()));
        }
        return _utils_1.deepExtend(_super.prototype.getInfoUnsafe.call(this), {
            scroll: {
                horizontal: isHScrollbarVisible,
                vertical: isVScrollbarVisible,
                topPath: topPath,
                leftPath: leftPath
            },
            sortInfo: that._getSortInfo(),
            combinedFilter: combinedFilter !== undefined ? that._parseFilter(combinedFilter, undefined) : "",
            widthOptions: that._calculator.getClientWidthOptions()
        });
    };
    dataGridItem.prototype._parseFilter = function (filterItems, columnIndex) {
        var that = this, resultFilterString = "";
        if (_utils_1.type.isFunction(filterItems[0])) {
            var exprColumnIndex = columnIndex === undefined ? filterItems.columnIndex : columnIndex;
            resultFilterString += that._parseFilterOperatorPart(filterItems, exprColumnIndex);
        }
        else {
            for (var i = 0; i < filterItems.length; i++) {
                var filterItem = filterItems[i];
                resultFilterString += _utils_1.type.isString(filterItem) ? filterItem : that._parseFilter(filterItem, filterItems.columnIndex) + " ";
            }
        }
        return "(" + resultFilterString + ")";
    };
    dataGridItem.prototype._parseFilterOperatorPart = function (filterItemPart, exprColumnIndex) {
        var that = this, partOperator = filterItemPart[1], value = filterItemPart[2], column = that._dataGrid.getVisibleColumns()[exprColumnIndex], dataField = column.dataField, unaryOperator = "not", binaryOperators = [
            "contains",
            "startswith",
            "endswith"
        ], format = function (fmtstr) {
            var argArray = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                argArray[_i - 1] = arguments[_i];
            }
            var args = Array.prototype.slice.call(arguments, 1);
            return fmtstr.replace(/\{(\d+)\}/g, function (match, index) {
                return args[index];
            });
        };
        if (partOperator.indexOf(unaryOperator) != -1) {
            filterItemPart[1] = partOperator.replace(unaryOperator, "").trim();
            var builder = that._parseFilterOperatorPart(filterItemPart, exprColumnIndex);
            return format("{0}({1})", unaryOperator, builder);
        }
        if (binaryOperators.indexOf(partOperator) != -1)
            return format("{1}([{0}], '{2}')", dataField, partOperator, value);
        if (_utils_1.type.isNumeric(value) || _utils_1.type.isBoolean(value))
            return format("[{0}] {1} {2}", dataField, partOperator, value);
        if (column.dataType === "date")
            return format("[{0}] {1} #{2}#", dataField, partOperator, this.dateToString(value));
        return format("[{0}] {1} '{2}'", dataField, partOperator, value);
    };
    dataGridItem.prototype._getSortInfo = function () {
        var that = this, sortInfo = [];
        $.each(that._dataGrid.getVisibleColumns(), function (i, info) {
            if (info.sortIndex != undefined && info.sortOrder != undefined) {
                sortInfo.push({
                    dataField: info.dataField,
                    sortIndex: info.sortIndex,
                    sortOrder: info.sortOrder
                });
            }
        });
        sortInfo.sort(function (a, b) {
            return a.sortIndex - b.sortIndex;
        });
        return sortInfo;
    };
    dataGridItem.prototype._initializeData = function (newOptions) {
        _super.prototype._initializeData.call(this, newOptions);
        var isResetColumnWidthsRequired = !!this.options && !!this.options.ViewModel && !!newOptions.ViewModel && this.options.ViewModel.ColumnWidthMode !== newOptions.ViewModel.ColumnWidthMode;
        if (isResetColumnWidthsRequired) {
            this._resetColumnWidths();
        }
        if (this._styleSettingsProvider) {
            this._styleSettingsProvider.initialize(this.options.ConditionalFormattingModel, this.options.ViewModel ? this.options.ViewModel.WordWrap : false);
        }
    };
    dataGridItem.prototype.getValueItem = function (columnName, index) {
        return this.dataController.getValueItem(columnName, index);
    };
    dataGridItem.prototype._resetColumnWidths = function () {
        this._calculator.reset(this.options.ViewModel, this._getColumnWidthMode());
        var columnsWidth = this._calculator.calcColumnsWidth(this._bestFitProvider, (_utils_1.$wrap(this._dataGrid.element())).width() - this._dataGrid.getScrollbarWidth(), this.charWidth);
        this._updateColumnsWidth(columnsWidth);
        this._applySelection();
    };
    dataGridItem.prototype._updateColumnsWidth = function (columnWidths) {
        var _this = this;
        this._beginResize();
        columnWidths.forEach(function (width, i) {
            _this._dataGrid.columnOption(i, _this._getColumnWidthProperty(), width);
        });
        this._endResize();
    };
    dataGridItem.prototype._getColumnWidthProperty = function () {
        return 'visibleWidth';
    };
    dataGridItem.prototype._getColumnWidthMode = function () {
        return this.options.ViewModel.ColumnWidthMode;
    };
    dataGridItem.prototype._getDefaultBestCharacterCount = function (index) {
        return this.options.ViewModel.Columns[index].DefaultBestCharacterCount;
    };
    dataGridItem.prototype._beginResize = function () {
        this._updateLocked = true;
        this._dataGrid.beginUpdate();
    };
    dataGridItem.prototype._endResize = function () {
        this._dataGrid.endUpdate();
        this._updateLocked = false;
    };
    dataGridItem.prototype._updateCharWidth = function () {
        var $span = $('<span />', {
            'class': 'dx-widget',
            css: { display: 'inline-block' }
        }).text(this._digits_string).appendTo($('body'));
        this.charWidth = $span.width() / 10;
        $span.remove();
    };
    dataGridItem.prototype._onColumnsChanging = function (e) {
        var grid = e.component, columnResized = e.optionNames.width, gridResized = e.optionNames.visibleWidth && grid.columnOption(0, 'visibleWidth') !== undefined, viewModel = this.options.ViewModel;
        if (this._updateLocked || !viewModel || !viewModel.Columns ||
            viewModel.Columns.length == 0 || grid.columnCount() !== viewModel.Columns.length) {
            return;
        }
        if (grid.getController('data').isLoaded() && gridResized && !columnResized) {
            this._calculator.onDataLoaded(viewModel, this._getColumnWidthMode());
        }
        if (columnResized) {
            var leftColumnIndex = grid.getController("columnsResizer")._resizingInfo.currentColumnIndex;
            var leftColumnWidth = this._dataGrid.columnOption(leftColumnIndex, 'width');
            var rightColumnWidth = this._dataGrid.columnOption(leftColumnIndex + 1, 'width');
            var columnWidths = this._calculator.onColumnResized(leftColumnIndex, leftColumnWidth, rightColumnWidth);
            this._updateColumnsWidth(columnWidths);
            this._clientStateUpdateDebounced(this._calculator.widthOptions);
        }
        else if (gridResized) {
            var columnsWidth = this._calculator.calcColumnsWidth(this._bestFitProvider, _utils_1.$wrap(this._dataGrid.element()).width() - this._dataGrid.getScrollbarWidth(), this.charWidth);
            this._updateColumnsWidth(columnsWidth);
        }
    };
    dataGridItem.prototype._getViewOptions = function () {
        var that = this;
        var viewModel = that.options.ViewModel;
        if (!viewModel)
            return {};
        var dataSource = that.dataController.getDataSource(), columns = that._getColumns();
        var hasSlowColumns = columns.some(function (c) { return c.displayMode == that.DisplayMode.Bar || c.displayMode == that.DisplayMode.Sparkline || c.displayMode == that.DisplayMode.Image; });
        var viewOptions = {
            dataSource: dataSource,
            columns: columns,
            summary: {
                totalItems: that._getTotals(),
                calculateCustomSummary: function () { return ""; }
            },
            scrolling: {
                mode: hasSlowColumns || dataSource.store.data.length * (columns.length || 1) >= MAX_CELL_COUNT ? 'virtual' : 'standard',
                useNative: _dashboard_viewer_constants_1.USE_NATIVE_SCROLLING
            },
            rowAlternationEnabled: viewModel.EnableBandedRows,
            showRowLines: viewModel.ShowHorizontalLines,
            showColumnLines: viewModel.ShowVerticalLines,
            wordWrapEnabled: viewModel.WordWrap,
            showColumnHeaders: viewModel.ShowColumnHeaders,
            allowColumnResizing: this._getColumnWidthMode() !== 'AutoFitToContents',
        };
        this._customizeViewOptions(viewOptions);
        return viewOptions;
    };
    dataGridItem.prototype._getCommonOptions = function () {
        var _this = this;
        var that = this, commonOptions = {};
        commonOptions.remoteOperations = { summary: true };
        commonOptions.paging = { enabled: false };
        commonOptions.sorting = {
            mode: 'multiple',
            ascendingText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.GridSortAscending),
            descendingText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.GridSortDescending),
            clearText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.GridClearSorting)
        };
        if (this.manualyResetClientState) {
            commonOptions.onContextMenuPreparing = function (options) {
                if (options.target === 'content' && _this._calculator.columnsResized) {
                    options.items = [{
                            text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.GridResetColumnWidths),
                            icon: DATAGRID_CONTEXT_MENU_ICON,
                            onItemClick: function () {
                                _this._resetColumnWidths();
                            }
                        }];
                }
            };
        }
        commonOptions.onContentReady = function () { return that._styleSettingsProvider.draw(); };
        commonOptions.noDataText = _localizer_1.localizer.getString(_localization_ids_1.localizationId.MessageGridHasNoData);
        commonOptions.onCellClick = function (data) {
            var columnType = data.column && data.column.type || null;
            if (data.rowType === 'data' && columnType !== 'adaptive')
                that._raiseItemClick(data);
        };
        commonOptions.onCellHoverChanged = function (data) {
            that._raiseItemHover(data, data.eventType == 'mouseover');
        };
        commonOptions["onColumnsChanging"] = $.proxy(that._onColumnsChanging, that);
        commonOptions.width = '100%';
        commonOptions.columnAutoWidth = true;
        commonOptions.cellHintEnabled = true;
        commonOptions.loadPanel = { enabled: false };
        commonOptions.searchPanel = { visible: false };
        commonOptions.keyboardNavigation = { enabled: false };
        return commonOptions;
    };
    dataGridItem.prototype._getRowsValues = function (data) {
        var that = this, selectionMembers = that.options.ViewModel.SelectionDataMembers, visibleValues = [], value;
        $.each(selectionMembers, function (_, member) {
            value = that.getValueItem(member, data.index).getUniqueValue();
            if (value !== undefined) {
                visibleValues.push(value);
            }
        });
        return that.dataController.getSelectionValues(visibleValues);
    };
    dataGridItem.prototype._getSelectedRowIndices = function () {
        var selectedValues = this._getSelectedValues();
        return selectedValues ? this.dataController.getSelectedRowKeys(selectedValues) : [];
    };
    dataGridItem.prototype._getTotalCaptionTemplate = function (totalType) {
        if (totalType == 'Auto') {
            return index_internal_1.getLocalizationById("DashboardStringId.GridTotalAutoTemplate");
        }
        else {
            var id = void 0;
            switch (totalType) {
                case 'Min':
                    id = 'DashboardStringId.GridTotalTypeMin';
                    break;
                case 'Max':
                    id = 'DashboardStringId.GridTotalTypeMax';
                    break;
                case 'Avg':
                    id = 'DashboardStringId.GridTotalTypeAvg';
                    break;
                case 'Sum':
                    id = 'DashboardStringId.GridTotalTypeSum';
                    break;
                default:
                    id = 'DashboardStringId.GridTotalTypeCount';
                    break;
            }
            return string_1.format(index_internal_1.getLocalizationById("DashboardStringId.GridTotalTemplate"), index_internal_1.getLocalizationById(id), index_internal_1.getLocalizationById("DashboardStringId.GridTotalValueTemplate"));
        }
    };
    dataGridItem.prototype._getTotals = function () {
        var _this = this;
        var that = this, res = [], columns = that.options.ViewModel.Columns || [];
        columns.forEach(function (column) {
            var columnName = column.DataId, totalsViewModel = column.Totals || [];
            totalsViewModel.forEach(function (totalModel) {
                res.push({
                    column: columnName,
                    summaryType: 'custom',
                    displayFormat: string_1.format(_this._getTotalCaptionTemplate(totalModel.TotalType), that.dataController.getTotalValue(totalModel.DataId))
                });
            });
        });
        return res;
    };
    dataGridItem.prototype._calculateCustomSummary = function (options) {
        options.totalValue = 0;
    };
    dataGridItem.prototype._getColumns = function () {
        var that = this, res = [], gridName = that.options.Name, columns = that.options.ViewModel.Columns || [], columnsCount = columns.length;
        $.each(columns, function (columnIndex, column) {
            var fieldName = column.DataId, columnName = gridName + fieldName, gridColumn = {
                dataField: fieldName,
                encodeHtml: that._isEncodeHtml(),
                caption: column.Caption,
                alignment: column.HorzAlignment === "Right" ? that.TextAlignment.Right : that.TextAlignment.Left
            };
            gridColumn.headerAlignment = that.TextAlignment.Left;
            gridColumn.displayMode = column.DisplayMode;
            switch (column.DisplayMode) {
                case that.DisplayMode.Value:
                    gridColumn.cellTemplate = function (containerElement, options) {
                        var container = _utils_1.$unwrap(containerElement);
                        var valueItem = that.getValueItem(fieldName, options.data.index);
                        _grid_column_painter_1.GridColumnPainter.renderValue(container, valueItem.getData().displayText, that._isEncodeHtml());
                        var isDetail = that._isDetail(options.rowType);
                        var colummPrefix = isDetail ? columnName + '_detail' : columnName;
                        that._styleSettingsProvider.applyStyleSettings(container, valueItem.getStyleSettingsInfo(), false, colummPrefix, isDetail);
                        if (isDetail)
                            container.classList.add(that.CssClasses.gridAdaptiveCellValue);
                    };
                    gridColumn.resized = function () {
                        var visibleWidthReset = that._dataGrid && (that._dataGrid.columnOption(columnIndex, 'visibleWidth') === undefined);
                        if (!visibleWidthReset) {
                            that._styleSettingsProvider.updateBarWidth(columnName);
                            that._styleSettingsProvider.updateBarWidth(columnName + '_detail');
                        }
                    };
                    break;
                case that.DisplayMode.Delta:
                    gridColumn.cellTemplate = function (containerElement, options) {
                        var container = _utils_1.$unwrap(containerElement);
                        var valueItem = that.getValueItem(fieldName, options.data.index);
                        var isDetail = that._isDetail(options.rowType);
                        _grid_column_painter_1.GridColumnPainter.renderDelta(container, valueItem.getData(), isDetail);
                        that._styleSettingsProvider.applyStyleSettings(container, valueItem.getStyleSettingsInfo(), true);
                        if (isDetail)
                            container.classList.add(that.CssClasses.gridAdaptiveCellValue);
                    };
                    break;
                case that.DisplayMode.Hyperlink:
                    gridColumn.cellTemplate = function (containerElement, options) {
                        var container = _utils_1.$unwrap(containerElement);
                        var valueItem = that.getValueItem(fieldName, options.data.index), uri = fieldName ? string_1.format(!!column.UriPattern ? column.UriPattern : '{0}', valueItem.getUriValue()) : undefined;
                        _grid_column_painter_1.GridColumnPainter.renderHyperlink(container, uri, valueItem.getData().displayText, that._isEncodeHtml());
                        that._styleSettingsProvider.applyStyleSettings(container, valueItem.getStyleSettingsInfo(), false, columnName);
                        if (that._isDetail(options.rowType))
                            container.classList.add(that.CssClasses.gridAdaptiveCellValue);
                    };
                    break;
                case that.DisplayMode.Sparkline:
                    gridColumn.alignment = that.TextAlignment.Left;
                    gridColumn.cssClass = 'dx-dashboard-datagrid-column-visible-cell-content';
                    gridColumn.cellTemplate = function (containerElement, options) {
                        var container = _utils_1.$unwrap(containerElement);
                        var valueItem = that.getValueItem(fieldName, options.data.index);
                        _grid_column_painter_1.GridColumnPainter.renderSparkline(columnName, column.ShowStartEndValues, container, valueItem.getData());
                        that._styleSettingsProvider.applyStyleSettings(container, valueItem.getStyleSettingsInfo(), true);
                        if (that._isDetail(options.rowType))
                            container.classList.add(that.CssClasses.gridAdaptiveCellValue);
                    };
                    gridColumn.resized = function () {
                        var gridRootElement = that._dataGrid ? _utils_1.$unwrap(that._dataGrid.element()) : undefined;
                        if (gridRootElement) {
                            _grid_column_painter_1.GridColumnPainter.changeGridSparklineColumnsWidth(gridRootElement, columnName);
                        }
                    };
                    break;
                case that.DisplayMode.Bar:
                    gridColumn.alignment = that.TextAlignment.Left;
                    gridColumn.cssClass = 'dx-dashboard-datagrid-column-visible-cell-content';
                    gridColumn.cellTemplate = function (containerElement, options) {
                        var container = _utils_1.$unwrap(containerElement);
                        var valueItem = that.getValueItem(fieldName, options.data.index);
                        var barData = valueItem.getData();
                        _grid_column_painter_1.GridColumnPainter.renderBar(columnName, container, barData.text, barData.normalizedValue, barData.zeroValue);
                        that._styleSettingsProvider.applyStyleSettings(container, valueItem.getStyleSettingsInfo(), true);
                        if (that._isDetail(options.rowType))
                            container.classList.add(that.CssClasses.gridAdaptiveCellValue);
                    };
                    gridColumn.resized = function () {
                        var gridRootElement = that._dataGrid ? _utils_1.$unwrap(that._dataGrid.element()) : undefined;
                        if (gridRootElement) {
                            _grid_column_painter_1.GridColumnPainter.changeGridBarColumnsWidth(gridRootElement, columnName);
                        }
                    };
                    break;
                case that.DisplayMode.Image:
                    gridColumn.cellTemplate = function (containerElement, options) {
                        var container = _utils_1.$unwrap(containerElement);
                        var valueItem = that.getValueItem(fieldName, options.data.index);
                        _grid_column_painter_1.GridColumnPainter.renderImage(container, valueItem.getData());
                        that._styleSettingsProvider.applyStyleSettings(container, valueItem.getStyleSettingsInfo(), true);
                        if (that._isDetail(options.rowType))
                            container.classList.add(that.CssClasses.gridAdaptiveCellValue);
                    };
                    break;
            }
            res.push(gridColumn);
        });
        return res;
    };
    dataGridItem.prototype._isDetail = function (rowType) {
        return rowType === 'detailAdaptive';
    };
    dataGridItem.prototype._applySelectionUnsafe = function () {
        this.setSelection(this.options.SelectedValues);
    };
    dataGridItem.prototype._resizeUnsafe = function () {
        _super.prototype._resizeUnsafe.call(this);
        this._dataGrid.resize();
    };
    dataGridItem.prototype._getDataPoint = function (element) {
        var that = this;
        return {
            getValues: function (name) {
                return (name === 'Default') ? that.dataController.getDimensionValues(element.data.index) : null;
            },
            getDeltaIds: function () {
                return that._getColumnDataIdsByColumnType('Delta');
            },
            getMeasureIds: function () {
                return that._getColumnDataIdsByColumnType('Measure');
            },
            getSelectionValues: function (name) {
                return that._getRowsValues(element.data);
            }
        };
    };
    dataGridItem.prototype._getColumnsByColumnType = function (columnType) {
        var columns = this.options.ViewModel.Columns, foundColumns = [];
        $.each(columns, function (_, column) {
            if (column.ColumnType === columnType)
                foundColumns.push(column);
        });
        return foundColumns;
    };
    dataGridItem.prototype._getColumnDataIdsByColumnType = function (columnType) {
        var that = this, columns = that._getColumnsByColumnType(columnType), ids = [];
        $.each(columns, function (_, column) {
            ids.push(column.DataId);
        });
        return ids;
    };
    dataGridItem.prototype._getElementInteractionValue = function (element, viewModel) {
        return this._getRowsValues(element.data);
    };
    dataGridItem.prototype._getWidget = function () {
        return this._dataGrid;
    };
    dataGridItem.prototype._setGridSelection = function (values, keyProcessingDelegate) {
        if (values && values.length > 0) {
            var that = this, selectionKeys = that.dataController.getSelectedRowKeys(values);
            that._selectRows(keyProcessingDelegate ? keyProcessingDelegate(selectionKeys) : selectionKeys);
        }
    };
    dataGridItem.prototype._selectRows = function (data) {
        if (this._dataGrid) {
            this._dataGrid.selectRows(data);
        }
    };
    dataGridItem.prototype._isMultiDataSupported = function () {
        return true;
    };
    return dataGridItem;
}(_base_item_1.baseItem));
exports.dataGridItem = dataGridItem;
