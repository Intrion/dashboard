/**
* DevExpress Dashboard (_data-inspector-view-model.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_internal_1 = require("../../../data/index.internal");
var model_1 = require("../../../model");
var string_1 = require("devextreme/core/utils/string");
var _aggregated_data_source_1 = require("./_aggregated-data-source");
var _underlying_data_source_1 = require("./_underlying-data-source");
var _dashboard_layout_mode_helper_1 = require("../../../viewer-parts/_dashboard-layout-mode-helper");
var ko = require("knockout");
var DataInspectorViewModel = (function () {
    function DataInspectorViewModel(options) {
        var _this = this;
        this.options = options;
        this._dashboardItem = ko.observable();
        this.avaliableInspectedDataType = [{
                value: "Aggregated",
                text: index_internal_1.getLocalizationById("DashboardStringId.AggregatedDataType")
            }, {
                value: "Raw",
                text: index_internal_1.getLocalizationById("DashboardStringId.RawDataType")
            }];
        this.allowSwitchInspectedDataType = ko.observable(false);
        this.inspectedDataType = ko.observable();
        this.title = ko.computed(function () {
            return (_this._dashboardItem() && _this._dashboardItem().name() || "") + (!_this.allowSwitchInspectedDataType() ?
                " " + string_1.format(index_internal_1.getLocalizationById("DashboardStringId.InspectedTypeFormatString"), _this.inspectedDataType()) :
                "");
        });
        this.visible = ko.observable(false);
        this.gridDataSource = ko.observable(null);
        this.gridOptions = ko.computed(function () {
            var gridDataSoruce = _this.gridDataSource();
            if (!gridDataSoruce) {
                return null;
            }
            var dataSource = gridDataSoruce.dataSource || null;
            var columns = gridDataSoruce.columns || null;
            return {
                onContentReady: _this.options.onGridContentReady,
                onInitialized: _this.options.onGridInitialized,
                showBorders: true,
                scrolling: {
                    mode: 'virtual'
                },
                filterRow: {
                    visible: true,
                    applyFilterText: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.ApplyFilter"),
                    betweenEndText: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.BetweenEnd"),
                    betweenStartText: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.BetweenStart"),
                    resetOperationText: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.ResetOperation"),
                    operationDescriptions: {
                        between: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.Between"),
                        contains: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.Contains"),
                        endsWith: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.EndsWith"),
                        equal: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.Equals"),
                        greaterThan: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.Greater"),
                        greaterThanOrEqual: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.GreaterOrEqual"),
                        lessThan: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.Less"),
                        lessThanOrEqual: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.LessOrEqual"),
                        notContains: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.DoesNotContain"),
                        notEqual: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.DoesNotEqual"),
                        startsWith: index_internal_1.getLocalizationById("DashboardWebStringId.Grid.FilterClause.StartsWith"),
                    }
                },
                columnHidingEnabled: _this.isMobile,
                rowAlternationEnabled: true,
                noDataText: index_internal_1.getLocalizationById('DashboardStringId.MessageGridHasNoData'),
                dataSource: dataSource,
                columns: columns,
            };
        });
        this.visible.subscribe(function (visible) {
            if (!visible) {
                _this._clearDataSource();
            }
        });
        this._dashboardItem.subscribe(function (_) { _this._clearDataSource(); });
        this.inspectedDataType.subscribe(function () {
            if (_this.visible()) {
                _this._bindGrid();
            }
        });
    }
    DataInspectorViewModel.prototype.setUnderlyingDataProvider = function (underlyingDataProvider) {
        this.underlyingDataProvider = underlyingDataProvider;
    };
    DataInspectorViewModel.prototype._bindGrid = function () {
        var dashboardItem = this._dashboardItem();
        var inspectedDataType = this.inspectedDataType();
        var dataSource = inspectedDataType === "Raw" ? this._getRawDataSource(dashboardItem) : this._getAggregatedDataSource(dashboardItem);
        if (dataSource !== this.gridDataSource()) {
            this.gridDataSource(dataSource);
        }
    };
    DataInspectorViewModel.prototype._clearDataSource = function () {
        this._rawDataSource = null;
        this._aggregatedDataSource = null;
    };
    DataInspectorViewModel.prototype._getInitialMode = function (options, initialMode, prevMode) {
        if (initialMode) {
            return initialMode;
        }
        else if (prevMode && options.allowInspectAggregatedData && options.allowInspectRawData) {
            return prevMode;
        }
        else if (options.allowInspectAggregatedData) {
            return "Aggregated";
        }
        else if (options.allowInspectRawData) {
            return "Raw";
        }
        else
            return "Aggregated";
    };
    DataInspectorViewModel.prototype._getRawDataSource = function (dashbordItem) {
        if (!this._rawDataSource) {
            this._rawDataSource = _underlying_data_source_1.generateUnderlyingDataSource(this.underlyingDataProvider, dashbordItem);
        }
        return this._rawDataSource;
    };
    DataInspectorViewModel.prototype._getAggregatedDataSource = function (dashbordItem) {
        if (!this._aggregatedDataSource) {
            this._aggregatedDataSource = _aggregated_data_source_1.generateAggregatedSource(dashbordItem._getItemData(), this._getAggregatedDataSourceArgs(dashbordItem));
        }
        return this._aggregatedDataSource;
    };
    DataInspectorViewModel.prototype._getAggregatedDataSourceArgs = function (dashboardItem) {
        if (dashboardItem instanceof model_1.CardItem) {
            if (dashboardItem.sparklineArgument()) {
                return {
                    addSparklineTotal: true,
                    sparklineMeasures: dashboardItem
                        .cards()
                        .map(function (card) { return card.actualValue().uniqueName(); })
                };
            }
        }
        else if (dashboardItem instanceof model_1.GridItem) {
            return {
                addSparklineTotal: false,
                sparklineMeasures: dashboardItem
                    .columns()
                    .filter(function (column) { return column instanceof model_1.GridSparklineColumn; })
                    .map(function (column) { return column.measure().uniqueName(); })
            };
        }
        return { addSparklineTotal: false, sparklineMeasures: [] };
    };
    Object.defineProperty(DataInspectorViewModel.prototype, "isMobile", {
        get: function () {
            return _dashboard_layout_mode_helper_1.DashboardLayoutModeHelper.isMobile;
        },
        enumerable: true,
        configurable: true
    });
    DataInspectorViewModel.prototype.show = function (dashboardItem, initialMode) {
        this.allowSwitchInspectedDataType(this.options.allowInspectAggregatedData && this.options.allowInspectRawData);
        this.inspectedDataType(this._getInitialMode(this.options, initialMode, this.inspectedDataType()));
        this._dashboardItem(dashboardItem);
        this.visible(true);
        this._bindGrid();
    };
    return DataInspectorViewModel;
}());
exports.DataInspectorViewModel = DataInspectorViewModel;
