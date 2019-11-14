/**
* DevExpress Dashboard (data-dashboard-item.js)
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
var _limit_data_state_1 = require("./_limit-data-state");
var _item_data_tuple_1 = require("../../data/item-data/_item-data-tuple");
var dashboard_item_1 = require("./dashboard-item");
var measure_1 = require("../data-item/measure");
var dimension_1 = require("../data-item/dimension");
var grid_item_format_rule_1 = require("../format-rules/grid-item-format-rule");
var pivot_item_format_rule_1 = require("../format-rules/pivot-item-format-rule");
var data_item_1 = require("../data-item/data-item");
var _data_field_1 = require("../data-sources/_data-field");
var _dimension_1 = require("../data-item/metadata/_dimension");
var _measure_1 = require("../data-item/metadata/_measure");
var _utils_1 = require("../internal/_utils");
var color_scheme_entry_1 = require("../colorization/color-scheme-entry");
var _expanding_manager_1 = require("../internal/_expanding-manager");
var _dashboard_component_name_generator_1 = require("../internal/_dashboard-component-name-generator");
var _data_dashboard_item_1 = require("./metadata/_data-dashboard-item");
var dashboard_state_1 = require("../dashboard-state");
var _date_utils_1 = require("../internal/_date-utils");
var _common_1 = require("../../data/_common");
var specific_calc_window_definition_1 = require("../data-item/window-definition/specific-calc-window-definition");
var _helper_classes_1 = require("../internal/_helper-classes");
var _knockout_utils_1 = require("../internal/_knockout-utils");
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var _utils_2 = require("../../data/_utils");
var _item_data_axis_builder_1 = require("../../data/item-data/internal/_item-data-axis-builder");
var _item_data_manager_1 = require("../../data/item-data/internal/_item-data-manager");
var _dimension_filter_values_1 = require("../data-item/_dimension-filter-values");
var color_scheme_definition_1 = require("../colorization/color-scheme-definition");
var _item_data_axis_names_1 = require("../../viewer-parts/viewer/_item-data-axis-names");
var special_values_1 = require("../../data/special-values");
var _obsolete_dashboard_state_1 = require("../internal/_obsolete-dashboard-state");
var _array_utils_1 = require("../internal/_array-utils");
var _item_data_axis_helper_1 = require("../../data/item-data/internal/_item-data-axis-helper");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var DataDashboardItem = (function (_super) {
    __extends(DataDashboardItem, _super);
    function DataDashboardItem(dashboardItemJSON, serializer, info) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        if (info === void 0) { info = []; }
        var _this = _super.call(this, dashboardItemJSON, serializer, info) || this;
        _this.hiddenDimensions = ko.observableArray([]);
        _this.hiddenMeasures = ko.observableArray([]);
        _this.colorScheme = ko.observableArray();
        _this._masterFilterMode = ko.computed(function () { return _this._getMasterFilterMode(); });
        _this._isSingleMasterFilter = ko.computed(function () { return _this._masterFilterMode() === "Single"; });
        _this._isMultipleMasterFilter = ko.computed(function () { return _this._masterFilterMode() === "Multiple"; });
        _this._isDrillDownEnabled = ko.computed(function () { return _this._getDrillDownEnabled(); });
        _this._isIgnoreMasterFilter = ko.computed(function () { return _this._getIgnoreMasterFilter(); });
        _this._isMasterFilter = ko.computed(function () { return _this._getIsMasterFilter(); });
        _this._clearMasterFilterSupported = ko.computed(function () { return _this._getClearMasterFilterSupported(); });
        _this._fullRange = ko.observable();
        _this._selectedElementIndex = ko.observable();
        _this._beforeMasterFilterSetByUserInteraction = null;
        _this._afterMasterFilterSetByUserInteraction = null;
        _this._drillDownChangedByUserInteraction = null;
        _this._masterFilterItems = ko.observable([]);
        _this._dataManager = ko.observable();
        _this._drillDownValues = ko.observableArray([]);
        _this._clientState = ko.observable();
        _this._dataRequestArgs = ko.observable();
        _this._expandingManager = new _expanding_manager_1.ExpandingManager();
        _this._selectionValues = ko.observable();
        _this._supportedUIStates = ko.observable(["error", "empty", "loading"]);
        _this._limitDataState = new _limit_data_state_1.LimitDataState();
        _this._isExcludingAllFilter = ko.computed(function () { return false; });
        _this._processItemSelectionChange = function (itemElement, mode, selection) {
            if (mode === _common_1.viewerActions.setMasterFilter || mode === _common_1.viewerActions.setMultipleValuesMasterFilter) {
                _this._beforeMasterFilterSetByUserInteraction && _this._beforeMasterFilterSetByUserInteraction();
                _this._setSelectionData(selection);
                _this._afterMasterFilterSetByUserInteraction && _this._afterMasterFilterSetByUserInteraction();
            }
            else if (mode === _common_1.viewerActions.drillDown) {
                _this._drillDownChangedByUserInteraction && _this._drillDownChangedByUserInteraction();
                _this._drillDownValues.push(selection[0]);
                _this._setSelectionData(null);
            }
        };
        _this._processItemDrillUp = function () {
            _this._drillDownChangedByUserInteraction && _this._drillDownChangedByUserInteraction();
            var drillValue = _this._drillDownValues.pop();
            _this._selectionValues(_this._isMasterFilter() ? [[drillValue]] : null);
        };
        _this._processItemClearMasterFilter = function (itemElement) {
            _this._beforeMasterFilterSetByUserInteraction && _this._beforeMasterFilterSetByUserInteraction();
            if (!!_this._useNeutralFilterMode() && _this._isSingleMasterFilter()) {
                _this._validateSelection(null);
            }
            else {
                _this._setSelectionData(null);
            }
            _this._afterMasterFilterSetByUserInteraction && _this._afterMasterFilterSetByUserInteraction();
        };
        _this._processContentElementSelection = function (itemName, args) {
            _this._selectedElementIndex(args.index);
        };
        _this._processDataRequest = function () { };
        _this._processItemClientStateUpdate = function (itemName, clientState) {
            _this._setClientState(clientState);
        };
        _this._processExpandingStateChanged = function (expandingParams) {
            _this._expandingManager.onViewStateChanged(expandingParams);
        };
        _this._processItemExpandingChange = function (expandingParams) {
            _this._expandingManager.setExpandingParams(expandingParams);
            _this._dataQueryParams.notifySubscribers();
        };
        _this.dataItems = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.DataItems, function (dataItemJSON) { return DataDashboardItem._createDataItem(dataItemJSON["@ItemType"], dataItemJSON, serializer); });
        _this.formatRules = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.FormatRules, function (rule) { return DataDashboardItem._createFormatRule(_this, rule, serializer); });
        _this.__hiddenDimensions = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.HiddenDimensions, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this.__hiddenMeasures = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.HiddenMeasures, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this._subscribeDataItemLinkArrays(_data_dashboard_item_1.hiddenDimensions, _data_dashboard_item_1.hiddenMeasures);
        _this.colorScheme(dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.ColorScheme, function (item) { return new color_scheme_entry_1.ColorSchemeEntry(item, serializer, _this.componentName(), _this.name()); })());
        _this.__hiddenMeasures.subscribe(function (links) {
            _this._setLinkCollectionAcceptableShapingType(links, data_item_1.AcceptableShapingType.Hidden);
        });
        _this._setLinkCollectionAcceptableShapingType(_this.__hiddenMeasures(), data_item_1.AcceptableShapingType.Hidden);
        _this._componentNameGenerator = new _dashboard_component_name_generator_1.DashboardUniqueNameGenerator('uniqueName', 0, _this.dataItems);
        _this._state = ko.computed(function () {
            var state = new dashboard_state_1.ItemState();
            if (_this._drillDownValues().length) {
                state.DrillDownValues = _date_utils_1.toStringArray(_this._drillDownValues());
            }
            if (_this._selectionValues()) {
                state.MasterFilterValues = _date_utils_1.toStringArray(_this._selectionValues());
            }
            if (_this._selectedElementIndex()) {
                state.SelectedLayerIndex = _this._selectedElementIndex();
            }
            return state;
        });
        _this._actions = ko.computed({
            read: function () {
                var newValue = [];
                var interactivityDimensionCount = _this._interactivityDimensions.length;
                var drillDownValuesCount = _this._drillDownValues().length;
                if (_this._isMasterFilter() && interactivityDimensionCount > 0) {
                    newValue.push(_common_1.viewerActions.setMasterFilter);
                }
                if (_this._isMultipleMasterFilter() && interactivityDimensionCount > 0) {
                    newValue.push(_common_1.viewerActions.setMultipleValuesMasterFilter);
                }
                if (_this._isDrillDownEnabled() && (drillDownValuesCount < (interactivityDimensionCount - 1))) {
                    newValue.push(_common_1.viewerActions.drillDown);
                }
                var isPreviousLevelSelection = false;
                if (drillDownValuesCount > 0) {
                    newValue.push(_common_1.viewerActions.drillUp);
                    if (_this._selectionValues() && _this._selectionValues()[0] && _this._selectionValues()[0][0] === _this._drillDownValues()[drillDownValuesCount - 1]) {
                        isPreviousLevelSelection = true;
                    }
                }
                if (_this._hasSelection(_this._selectionValues()) && !isPreviousLevelSelection) {
                    newValue.push(_common_1.viewerActions.clearMasterFilter);
                }
                return newValue;
            },
            deferEvaluation: true
        });
        _this._outputFilter = ko.computed(function () {
            if (!_this._isMasterFilter())
                return undefined;
            var result = undefined, serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(), selectionValues = _this._selectionValues(), selectionValuesCount = selectionValues ? selectionValues.length : 0, drillDownValuesCount = _this._drillDownValues.peek().length, dimensionality = selectionValuesCount > 0 ? selectionValues[0].length : 0, fullRange = _this._fullRange();
            if (selectionValuesCount > 0 || drillDownValuesCount > 0) {
                result = {
                    dimensions: _this._interactivityDimensions.slice(0, drillDownValuesCount + dimensionality).map(function (dimension) { return serializer.serialize(dimension); })
                };
                if (result.dimensions.length === 1 && selectionValuesCount === 1 && dimensionality === 2) {
                    result.range = selectionValues[0];
                }
                else {
                    result.values = selectionValuesCount > 0 ? selectionValues.map(function (arr) { return _this._drillDownValues.peek().concat(arr); }) : [_this._drillDownValues.peek()];
                }
            }
            if (!result) {
                if (fullRange && fullRange.length && _this._interactivityDimensions.length) {
                    result = {
                        dimensions: _this._interactivityDimensions.map(function (dim) { return serializer.serialize(dim); }),
                        range: fullRange
                    };
                }
            }
            if (_this._isExcludingAllFilter()) {
                result = result || {};
                result.isExcludingAllFilter = true;
            }
            result = _this._performOutputFilterOptimization(result);
            return result;
        });
        _this._dataQueryParams = ko.computed(function () {
            var result = {};
            if (_this.dataItems().length > 0) {
                var externalFilter = _this._masterFilterItems().filter(function (item) { return !!item._outputFilter(); }).map(function (item) { return item._outputFilter(); });
                if (externalFilter.length) {
                    result.Filter = externalFilter.map(function (f) {
                        var v = {};
                        if (!!f.dimensions) {
                            v.dimensions = f.dimensions;
                        }
                        if (!!f.values) {
                            v.values = _date_utils_1.toStringArray(f.values);
                        }
                        if (!!f.range) {
                            v.range = _date_utils_1.toStringArray(f.range);
                        }
                        if (f.isExcludingAllFilter != undefined) {
                            v.isExcludingAllFilter = f.isExcludingAllFilter;
                        }
                        return v;
                    });
                }
                if (_this._drillDownValues().length) {
                    result.DrillDown = _date_utils_1.toStringArray(_this._drillDownValues());
                }
                if (_this._dataRequestArgs()) {
                    result.ClientState = _this._dataRequestArgs();
                }
                if (_this._selectedElementIndex()) {
                    result.SelectedElementIndex = _this._selectedElementIndex();
                }
            }
            return result;
        });
        _this._availableColorSignatures = ko.pureComputed(function () { return _this._getColoringSignature(); });
        _this._uiState && _this._uiState["dispose"] && _this._uiState["dispose"]();
        _this._uiState = ko.computed({
            read: function () {
                var result = "live", errorState = _this._errorState(), previousState = _this._uiState(), paneValid = _this._paneContentHolder.valid(), viewerItemCreated = _this._viewerItemCreated(), hasDataItems = !!_this.dataSource.peek() && !!_this.dataItems.peek().length;
                if (_this._stateSupported("error") && errorState) {
                    result = "error";
                }
                else if (_this._stateSupported("empty") && !hasDataItems) {
                    result = "empty";
                }
                else if (_this._stateSupported("loading") && !paneValid && (!viewerItemCreated || "empty" === previousState || "error" === previousState)) {
                    result = "loading";
                }
                else {
                    result = "live";
                }
                return result;
            },
            deferEvaluation: true
        });
        ko.computed(function () {
            if (_this._selectedElementIndex() >= _this._getLayersCount()) {
                _this._selectedElementIndex(null);
            }
        });
        ko.computed(function () {
            _this.dataItems()
                .map(function (d) { return d instanceof measure_1.Measure ? d.windowDefinition.windowDefinition() : null; })
                .filter(function (def) { return def != null; })
                .forEach(function (def) {
                if (def instanceof specific_calc_window_definition_1.SpecificWindowDefinition) {
                    def.dimensions().forEach(function (link) { return link._updateProvider(_this); });
                }
            });
        });
        ko.computed(function () {
            if (!_this.dataSource() || _this.dataItems().length === 0) {
                _this._dataManager(null);
            }
        });
        _knockout_utils_1.subscribeToArrayItemProperties(_this.dataItems, function (dataItem) {
            if (dataItem instanceof dimension_1.Dimension) {
                return dataItem.dateTimeGroupInterval.subscribe(function () {
                    _this.filterString(removeDataItemFromCriteria(_this.filterString(), dataItem.uniqueName()));
                });
            }
            return null;
        });
        return _this;
    }
    DataDashboardItem._createDataItem = function (itemTypeName, dataItemJSON, serializer) {
        var itemType = DataDashboardItem._itemTypesMap[itemTypeName];
        return new itemType(dataItemJSON, serializer);
    };
    DataDashboardItem._updateDataItemByField = function (dataField, newDataItem, summaryInfo) {
        newDataItem.dataMember(dataField.dataMember());
        if (newDataItem instanceof measure_1.Measure) {
            if (!_data_field_1.DataField.isOlap(dataField.dataMember())) {
                if (!!summaryInfo && summaryInfo.oldDataItem instanceof measure_1.Measure) {
                    var avaliableSummaryTypes = DataDashboardItem._getAvaliableSummaryTypeInfo(dataField, summaryInfo.acceptableShapingType);
                    if (avaliableSummaryTypes) {
                        if (Object.keys(avaliableSummaryTypes.values).indexOf(summaryInfo.oldDataItem.summaryType()) !== -1) {
                            newDataItem.summaryType(summaryInfo.oldDataItem.summaryType());
                        }
                        else {
                            newDataItem.summaryType(avaliableSummaryTypes.defaultVal);
                        }
                    }
                }
                else {
                    newDataItem.summaryType(getSummaryType(dataField));
                }
            }
            else if (!!dataField["defaultNumericFormat"]) {
                var defaultNumericFormat = dataField["defaultNumericFormat"];
                newDataItem.numericFormat.currencyCultureName(defaultNumericFormat.CurrencyCultureName);
                newDataItem.numericFormat.formatType(defaultNumericFormat.FormatType);
                newDataItem.numericFormat.includeGroupSeparator(defaultNumericFormat.IncludeGroupSeparator);
                newDataItem.numericFormat.precision(defaultNumericFormat.Precision);
                newDataItem.numericFormat.unit(defaultNumericFormat.Unit);
            }
        }
    };
    DataDashboardItem._createFormatRule = function (item, formatRuleJSON, serializer) {
        var typeName = formatRuleJSON["@ItemType"];
        var type = DataDashboardItem._formatRuleTypesMap[typeName];
        return new type(formatRuleJSON, serializer);
    };
    DataDashboardItem._getAvaliableSummaryTypeInfo = function (dataField, acceptableShapingType) {
        if (!_data_field_1.DataField.isOlap(dataField.dataMember())) {
            if (_data_field_1.DataField.isNumeric(dataField)) {
                return _measure_1.summaryTypeNumericToAny;
            }
            else {
                switch (acceptableShapingType) {
                    case data_item_1.AcceptableShapingType.Number:
                        return _measure_1.summaryTypeNonNumericToNumeric;
                    case data_item_1.AcceptableShapingType.Attribute:
                        return _measure_1.summaryTypeAttribute;
                    case data_item_1.AcceptableShapingType.String:
                    case data_item_1.AcceptableShapingType.Hidden:
                        return _measure_1.summaryTypeNonNumericToString;
                }
            }
        }
        return null;
    };
    Object.defineProperty(DataDashboardItem.prototype, "_actualSelectionValues", {
        get: function () {
            return this._selectionValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataDashboardItem.prototype, "_canColorByMeasures", {
        get: function () { return this._getCanColorByMeasures(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataDashboardItem.prototype, "_canColorByDimensions", {
        get: function () { return this._getCanColorByDimensions(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataDashboardItem.prototype, "_isLocallyColored", {
        get: function () {
            return (this._getAreMeasuresColoredByDefault() || this._getCanColorByDimensions()) && !this._getUseGlobalColors();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataDashboardItem.prototype, "_isGloballyColored", {
        get: function () {
            return (this._getAreMeasuresColoredByDefault() || this._getCanColorByDimensions()) && this._getUseGlobalColors();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataDashboardItem.prototype, "_interactivityDimensions", {
        get: function () {
            return this._getInteractivityDimensionLinks().map(function (link) { return link.dataItem(); }).filter(function (item) { return !!item; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataDashboardItem.prototype, "_dimensions", {
        get: function () {
            return this.dataItems && this.dataItems().filter(function (item) { return item instanceof dimension_1.Dimension; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataDashboardItem.prototype, "_measures", {
        get: function () {
            return this.dataItems && this.dataItems().filter(function (item) { return item instanceof measure_1.Measure; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataDashboardItem.prototype, "_uniqueDataItems", {
        get: function () {
            var uniqueDataItems = [];
            this.dataItems.peek().forEach(function (dataItem) {
                if (uniqueDataItems.filter(function (item) { return item.isDefinitionEquals(dataItem); }).length === 0) {
                    uniqueDataItems.push(dataItem);
                }
            });
            return uniqueDataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataDashboardItem.prototype, "_multiData", {
        get: function () {
            var dataManager = this._dataManager.peek();
            return dataManager && dataManager.getItemData();
        },
        enumerable: true,
        configurable: true
    });
    DataDashboardItem.prototype._clearBindings = function () {
        this.dataSource(null);
        this.dataMember(null);
        this.dataItems.removeAll();
        this.__hiddenDimensions.removeAll();
        this.__hiddenMeasures.removeAll();
        this.colorScheme.removeAll();
    };
    DataDashboardItem.prototype._clearInteractivityState = function () {
        this._selectionValues(null);
        this._drillDownValues([]);
    };
    DataDashboardItem.prototype._isCalculationSupported = function () {
        return true;
    };
    DataDashboardItem.prototype._isSortingEnabled = function () {
        return true;
    };
    DataDashboardItem.prototype._isTopNEnabled = function (dataItem) {
        return this.hiddenDimensions().indexOf(dataItem) == -1;
    };
    DataDashboardItem.prototype._isColoringEnabled = function (dataItem) {
        if (dataItem instanceof dimension_1.Dimension) {
            if (this._canColorByDimensions) {
                if (this._isHiddenDimension(dataItem) || dataItem.coloringMode() === "None") {
                    return false;
                }
                if (dataItem.coloringMode() === "Hue") {
                    return true;
                }
                return this._getIsDimensionColoredByDefault(dataItem);
            }
        }
        else if (dataItem instanceof measure_1.Measure) {
            if (this._canColorByMeasures) {
                if (this._isHiddenMeasure(dataItem)) {
                    return false;
                }
                return this._coloredByMeasures();
            }
            return false;
        }
    };
    DataDashboardItem.prototype._getDataItem = function (uniqueName) {
        return this.dataItems().filter(function (item) { return item.uniqueName() === uniqueName; })[0];
    };
    DataDashboardItem.prototype._getFinalDataType = function (dataItemId) {
        var metaData = this._dataManager() ? this._dataManager().getMetaData() : undefined;
        return !!metaData ? metaData.getFinalDataType(dataItemId) : "Unknown";
    };
    DataDashboardItem.prototype._createDataItem = function (dataField, binding) {
        var itemTypeName = binding.dataItemType;
        if (!itemTypeName) {
            itemTypeName = _data_field_1.DataField.isMeasure(dataField) ? "Measure" : "Dimension";
        }
        var newDataItem = DataDashboardItem._createDataItem(itemTypeName);
        DataDashboardItem._updateDataItemByField(dataField, newDataItem);
        this.dataItems.push(newDataItem);
        return newDataItem;
    };
    DataDashboardItem.prototype._updateDataItem = function (dataItem, binding, dataField, acceptableShapingType) {
        _helper_classes_1.Guard.isNotNull(dataItem, "dataItem");
        var itemTypeName = binding.dataItemType || dataItem.itemType();
        var newDataItem = (binding.dataItemType === dataItem.itemType()) ? dataItem : DataDashboardItem._createDataItem(itemTypeName);
        DataDashboardItem._updateDataItemByField(dataField, newDataItem, { oldDataItem: dataItem, acceptableShapingType: acceptableShapingType });
        this._unassignDataItem(dataItem, false);
        if (newDataItem !== dataItem) {
            this._removeDataItemCore(dataItem);
            newDataItem.uniqueName(dataItem.uniqueName());
            this.dataItems.push(newDataItem);
        }
    };
    DataDashboardItem.prototype._removeDataItem = function (dataItem, skipGroups) {
        this._removeDataItemCore(dataItem);
        this._unassignDataItem(dataItem, skipGroups);
    };
    DataDashboardItem.prototype._attachDataItem = function (target, propertyName, link) {
        var _this = this;
        var dataItemLink = !!link ? link : new data_item_1.DataItemLink(this, { "@DefaultId": target[propertyName].uniqueName() });
        target[propertyName] = dataItemLink;
        target[propertyName.substring(2)] = ko.computed({
            read: function () { return dataItemLink.dataItem(); },
            write: function (value) {
                if (!!value) {
                    if (_this._getDataItem(value.uniqueName())) {
                        throw Error("DataItemLink: DataItem " + value.uniqueName() + " already exists");
                    }
                    else {
                        _this.dataItems.push(value);
                        dataItemLink.dataItem(value);
                    }
                }
                else {
                    if (dataItemLink.dataItem()) {
                        _this._removeDataItem(dataItemLink.dataItem());
                        dataItemLink.dataItem(null);
                    }
                }
            }
        });
    };
    DataDashboardItem.prototype._subscribeDataItemLinkArrays = function () {
        var _this = this;
        var propertyInfos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            propertyInfos[_i] = arguments[_i];
        }
        propertyInfos.forEach(function (propertyInfo) {
            var property = _this[propertyInfo.propertyName];
            var realProperty = _this[propertyInfo.propertyName.substring(2)];
            ko.computed(function () {
                property().filter(function (value) { return !value.dataItem(); })
                    .forEach(function (value) { return property.remove(value); });
            });
            ko.computed(function () {
                var linkedDataItems = property().map(function (link) { return link.dataItem(); }).filter(function (dataItem) { return !!dataItem; });
                realProperty.peek().filter(function (dataItem) { return linkedDataItems.indexOf(dataItem) === -1; })
                    .forEach(function (itemToRemove) { return realProperty.remove(itemToRemove); });
                linkedDataItems.filter(function (dataItem) { return realProperty.peek().indexOf(dataItem) === -1; })
                    .forEach(function (itemToAdd) { return realProperty.splice(linkedDataItems.indexOf(itemToAdd), 0, itemToAdd); });
            });
            _knockout_utils_1.subscribeArrayChange(realProperty, {
                added: function (dimension, index) {
                    if (!property().some(function (link) { return link.dataItem() === dimension; })) {
                        _this.dataItems.push(dimension);
                        var link = new data_item_1.DataItemLink(_this);
                        link.dataItem(dimension);
                        property.splice(index, 0, link);
                    }
                },
                deleted: function (dimension) {
                    if (property().some(function (link) { return link.dataItem() === dimension; })) {
                        _this.dataItems.remove(dimension);
                        property.remove(function (link) { return link.dataItem() === dimension; });
                    }
                }
            });
        });
    };
    DataDashboardItem.prototype._getMasterFilterMode = function () { return "None"; };
    DataDashboardItem.prototype._getDrillDownEnabled = function () { return false; };
    DataDashboardItem.prototype._getIgnoreMasterFilter = function () { return false; };
    DataDashboardItem.prototype._getClearMasterFilterSupported = function () { return this._isMultipleMasterFilter(); };
    DataDashboardItem.prototype._getIsMasterFilter = function () { return this._isSingleMasterFilter() || this._isMultipleMasterFilter(); };
    DataDashboardItem.prototype._getInteractivityDimensionLinks = function () { return []; };
    DataDashboardItem.prototype._getCanColorByMeasures = function () { return false; };
    DataDashboardItem.prototype._getCanColorByDimensions = function () { return false; };
    DataDashboardItem.prototype._getAreMeasuresColoredByDefault = function () { return false; };
    DataDashboardItem.prototype._getIsDimensionColoredByDefault = function (dimension) { return false; };
    DataDashboardItem.prototype._coloredDimensions = function () {
        var _this = this;
        return this._dimensions.filter(function (item) { return _this._isColoringEnabled(item); });
    };
    DataDashboardItem.prototype._coloredByMeasures = function () {
        if (this.coloringOptions.measuresColoringMode() === "Hue") {
            return true;
        }
        if (this.coloringOptions.measuresColoringMode() === "None") {
            return false;
        }
        return this._getAreMeasuresColoredByDefault();
    };
    DataDashboardItem.prototype._getUseGlobalColors = function () { return this.coloringOptions && this.coloringOptions.useGlobalColors(); };
    DataDashboardItem.prototype._patchArray = function (array) {
        array.forEach(function (value, i) {
            array[i] = _date_utils_1.tryConvertToDateTime(array[i]);
        });
    };
    DataDashboardItem.prototype._patchSelectionValues = function (selectionValues) {
        var _this = this;
        selectionValues.forEach(function (selectionValue) { return _this._patchArray(selectionValue); });
    };
    DataDashboardItem.prototype._getClearMasterFilterState = function () {
        if (this._clearMasterFilterSupported()) {
            if (this._useNeutralFilterMode() && this._isSingleMasterFilter() && !this._allowAllValue()) {
                return 'Disabled';
            }
            return this._actions().indexOf(_common_1.viewerActions.clearMasterFilter) !== -1 ? 'Enabled' : 'Hidden';
        }
        return 'Hidden';
    };
    DataDashboardItem.prototype._allowAllValue = function () { return false; };
    DataDashboardItem.prototype._validateSelection = function (selection) {
        var activeDimensions = this._interactivityDimensions.slice(this._drillDownValues().length).map(function (d) { return d.uniqueName(); });
        if (this._isSingleMasterFilter() && activeDimensions.length > 0) {
            var allSelection = this._getAllSelectionValues(activeDimensions);
            if (!selection || (!this._useNeutralFilterMode() && !_utils_2.arrayContains(allSelection, selection[0]))) {
                this._setSelectionData(allSelection.length > 0 ? [allSelection[0]] : null);
            }
        }
    };
    DataDashboardItem.prototype._updateContentData = function (content) {
        _super.prototype._updateContentData.call(this, content);
        if (this.dataItems().length > 0 || !this._stateSupported("empty")) {
            this._updateDataManager(content);
        }
        if (content.ItemData && content.ItemData.Reduced) {
            this._limitDataState.setReduced();
        }
        this._validateSelection(this._actualSelectionValues());
        var drillDownValues = this._getDisplayDrillDownValues();
        _utils_2.deepExtend(content, {
            multiData: this._multiData,
            DrillDownValues: !!drillDownValues ? drillDownValues.map(function (fv) { return fv.Values; }).reduce(function (v1, v2) { return v1.concat(v2); }) : undefined,
            DrillDownUniqueValues: this._drillDownValues.peek().length > 0 ? this._drillDownValues.peek() : undefined,
            LimitDataState: this._limitDataState.getViewModel()
        });
    };
    DataDashboardItem.prototype._extendContentState = function (content) {
        _super.prototype._extendContentState.call(this, content);
        content.SelectedValues = this._actualSelectionValues.peek();
    };
    DataDashboardItem.prototype._updateDataManager = function (content) {
        var itemDataDTO = content.ItemData, contentType = content.ContentType;
        if (itemDataDTO) {
            _date_utils_1.patchDateTime(itemDataDTO.DataStorageDTO);
        }
        if (contentType === _common_1.contentType.partialDataSource && this._dataManager() && itemDataDTO) {
            content.Parameters[0] = !!content.Parameters[0] && content.Parameters[0].map(function (value) { return _date_utils_1.tryConvertToDateTime(value); });
            this._dataManager().updateExpandedData(itemDataDTO, {
                values: content.Parameters[0],
                pivotArea: content.Parameters[1] ? _item_data_axis_builder_1.pivotAreaNames.columns : _item_data_axis_builder_1.pivotAreaNames.rows
            });
        }
        else {
            if ((contentType === _common_1.contentType.fullContent || contentType === _common_1.contentType.completeDataSource) && itemDataDTO && itemDataDTO.MetaData) {
                var dataManager = new _item_data_manager_1.itemDataManager();
                dataManager.initialize(itemDataDTO);
                this._dataManager(dataManager);
            }
            if (contentType !== _common_1.contentType.completeDataSource) {
            }
        }
        this._expandingManager.resetExpandingParams();
    };
    DataDashboardItem.prototype._getAllSelectionValues = function (activeDimensions) {
        return !!this._multiData ? this._multiData.getAllSelectionValues(activeDimensions) : [];
    };
    DataDashboardItem.prototype._getPointsByDimension = function (dimensionId, axisName) {
        if (this._multiData) {
            var axis = this._multiData.getAxis(axisName);
            return axis ? axis.getPointsByDimension(dimensionId) : [];
        }
    };
    DataDashboardItem.prototype._getColorizableDataItemsInfo = function () {
        return [];
    };
    DataDashboardItem.prototype._getDefaultCalculationWindowDefinition = function () {
        return undefined;
    };
    DataDashboardItem.prototype._getExportingSelection = function () {
        return this._selectionValues();
    };
    DataDashboardItem.prototype._getDisplayFilterValues = function (limitCount) {
        var _this = this;
        var metaData = this._dataManager() ? this._dataManager().getMetaData() : undefined, selection = this._outputFilter(), outFilterValues = [];
        if (selection && selection.dimensions) {
            selection.dimensions.forEach(function (dimension, dimensionIndex) {
                var dimensionId = dimension["@DefaultId"];
                var format = metaData ? metaData.getDimensionFormat(dimensionId) : undefined;
                var filterValues = new _dimension_filter_values_1.DimensionFilterValues(_this._getDimensionDisplayName(dimensionId));
                var isOlap = _data_field_1.DataField.isOlap(dimension["@DataMember"]);
                var uniqueValues = {};
                for (var valueIndex = 0, valueCount = 0; valueIndex < selection.values.length; valueIndex++) {
                    if (!!limitCount && valueCount >= limitCount) {
                        filterValues.Truncated = true;
                        break;
                    }
                    var value = selection.values[valueIndex][dimensionIndex];
                    if (!uniqueValues[value]) {
                        uniqueValues[value] = value;
                        valueCount++;
                    }
                }
                filterValues.Values = Object.keys(uniqueValues).map(function (v) {
                    return {
                        Type: "Value",
                        Value: isOlap ? _this._getOlapDimensionDisplayText(uniqueValues[v], dimensionId) : uniqueValues[v],
                        Format: format
                    };
                });
                outFilterValues.push(filterValues);
            });
        }
        return outFilterValues;
    };
    DataDashboardItem.prototype._getDisplayFilterValuesExternal = function () {
        var externalFilter = this._masterFilterItems().filter(function (item) { return !!item._outputFilter(); });
        return externalFilter
            .map(function (item) { return item._getDisplayFilterValues(); })
            .filter(function (arr) { return arr.length > 0; })
            .reduce(function (acc, items) { return acc.concat(items); }, []);
    };
    DataDashboardItem.prototype._getDisplayDrillDownValues = function () {
        var _this = this;
        var drillDownUniqueValues = this._drillDownValues.peek();
        if (!drillDownUniqueValues || drillDownUniqueValues.length == 0)
            return undefined;
        var values = new Array(), metaData = this._dataManager() ? this._dataManager().getMetaData() : undefined;
        drillDownUniqueValues.forEach(function (value, valueIndex) {
            var dimension = _this._interactivityDimensions[valueIndex];
            var filterValues = new _dimension_filter_values_1.DimensionFilterValues(_this._getDimensionDisplayName(dimension.uniqueName()));
            var isOlap = _data_field_1.DataField.isOlap(dimension.dataMember());
            filterValues.Values.push({
                Type: "Value",
                Value: isOlap ? _this._getOlapDimensionDisplayText(value, dimension.uniqueName()) : value,
                Format: metaData ? metaData.getDimensionFormat(dimension.uniqueName()) : undefined
            });
            values.push(filterValues);
        });
        return values;
    };
    DataDashboardItem.prototype._getColoringSignature = function () {
        return new color_scheme_definition_1.ColorSchemeDefinition(this.dataSource(), this.dataMember(), this._coloredDimensions().map(function (dimension) {
            return {
                dataMember: ko.observable(dimension.dataMember()),
                dateTimeGroupInterval: ko.observable(dimension.dateTimeGroupInterval())
            };
        }), this._coloredByMeasures(), this._isGloballyColored ? "" : this.componentName(), this._isGloballyColored ? "" : this.name());
    };
    DataDashboardItem.prototype._isAttribute = function (dataItem) {
        return false;
    };
    DataDashboardItem.prototype._getItemDataAxis = function () {
        return _item_data_axis_names_1.itemDataAxisNames.defaultAxis;
    };
    DataDashboardItem.prototype._getDataItemContainerDisplayName = function (dataItemContainer, dataItemDisplayNameGetter) {
        var _this = this;
        if (dataItemDisplayNameGetter === void 0) { dataItemDisplayNameGetter = null; }
        var name = dataItemContainer.name && dataItemContainer.name() || null;
        if (name) {
            return name;
        }
        var bindingModel = dataItemContainer._getBindingModel(), separator = " " + (dataItemContainer._displayNameSeparator || "-") + " ";
        name = "";
        bindingModel.forEach(function (binding) {
            var dataItemLink = dataItemContainer[binding.propertyName];
            var dataItem = dataItemLink.dataItem && dataItemLink.dataItem();
            if (dataItem && dataItem.dataMember()) {
                if (name) {
                    name = name + separator;
                }
                name = name + (!!dataItemDisplayNameGetter ? dataItemDisplayNameGetter(dataItem) : _this._getDataItemDisplayName(dataItem));
            }
        });
        return name;
    };
    DataDashboardItem.prototype._getDataItemDisplayName = function (dataItem) {
        var uniqueName = dataItem.uniqueName();
        return dataItem instanceof dimension_1.Dimension ? this._getDimensionDisplayName(uniqueName) : this._getMeasureDisplayName(uniqueName);
    };
    DataDashboardItem.prototype._getMeasureDisplayName = function (uniqueName) {
        var metaData = this._dataManager() ? this._dataManager().getMetaData() : undefined;
        var measure = metaData.getMeasures().filter(function (m) { return m.id == uniqueName; })[0];
        return !!measure ? measure.name : uniqueName;
    };
    DataDashboardItem.prototype._getDimensionDisplayName = function (uniqueName) {
        var dimension = undefined;
        var metaData = this._dataManager() ? this._dataManager().getMetaData() : undefined;
        var axes = !!metaData && metaData.getAxisNames() || [];
        axes.every(function (axisName) {
            var dimensions = metaData.getDimensions(axisName) || [];
            dimension = dimensions.filter(function (d) { return d.id == uniqueName; })[0];
            return !dimension;
        });
        return !!dimension ? dimension.name : uniqueName;
    };
    DataDashboardItem.prototype._getOlapDimensionDisplayText = function (uniqueValue, dimensionId) {
        var itemData = this._dataManager() ? this._dataManager().getItemData() : undefined;
        var axes = !!itemData ? itemData.getAxisNames() : [];
        var pt = undefined;
        axes.every(function (axisName) {
            var axis = itemData.getAxis(axisName);
            pt = axis.getPointByUniqueValueAndDimension(uniqueValue, dimensionId);
            return !pt;
        });
        if (!!pt) {
            return pt.getUniqueValue() === special_values_1.specialValues.olapNullValueGuid ? _default_1.getLocalizationById("DashboardStringId.OlapRaggedHierarchyNoneItemCaption") : pt.getDisplayText();
        }
        else {
            return uniqueValue;
        }
    };
    ;
    DataDashboardItem.prototype._cleanDataItemDependencies = function () {
    };
    DataDashboardItem.prototype._setLinkCollectionAcceptableShapingType = function (links, type) {
        links.forEach(function (l) { l._specifics.acceptableShapingType = type; });
    };
    DataDashboardItem.prototype._updateDataQueryParams = function (params) {
        _super.prototype._updateDataQueryParams.call(this, params);
        if (this._expandingManager.canProvideExpandingState()) {
            params.ExpandingState = this._expandingManager.calculateExpandingState();
        }
    };
    DataDashboardItem.prototype._stateSupported = function (state) {
        return this._supportedUIStates().indexOf(state) !== -1;
    };
    DataDashboardItem.prototype._isHiddenDimension = function (dimension) {
        return !!this.__hiddenDimensions().filter(function (link) { return link.dataItem() === dimension; })[0];
    };
    DataDashboardItem.prototype._isHiddenMeasure = function (measure) {
        return !!this.__hiddenMeasures().filter(function (link) { return link.dataItem() === measure; })[0];
    };
    DataDashboardItem.prototype._applySelectionFromState = function (parameter) {
        var itemState = parameter;
        var obsoleteItemState = parameter;
        this._setSelectionFromState(itemState.MasterFilterValues || obsoleteItemState.Selection);
    };
    DataDashboardItem.prototype._setSelectionFromState = function (stateSelection) {
        if (stateSelection) {
            this._patchSelectionValues(stateSelection);
        }
        this._setSelectionData(stateSelection);
    };
    DataDashboardItem.prototype._hasSelection = function (selection) {
        return selection && selection[0];
    };
    DataDashboardItem.prototype._performOutputFilterOptimization = function (filter) {
        return filter;
    };
    DataDashboardItem.prototype._setState = function (parameter) {
        _super.prototype._setState.call(this, parameter);
        var itemState = parameter;
        var obsoleteItemState = parameter;
        var drillDownState = itemState.DrillDownValues || _obsolete_dashboard_state_1.ObsoleteItemState.unwrapDilldownValues(obsoleteItemState.DrillLevels);
        if (drillDownState) {
            this._patchArray(drillDownState);
        }
        this._drillDownValues(drillDownState || []);
        this._applySelectionFromState(itemState);
        this._selectedElementIndex(itemState.SelectedLayerIndex || obsoleteItemState.SelectedElementIndex || null);
    };
    DataDashboardItem.prototype._setClientState = function (clientState) {
        this._clientState(clientState);
    };
    DataDashboardItem.prototype._setSelectionData = function (selection) {
        if (!_array_utils_1.arrayEquals(this._selectionValues(), selection)) {
            if (this._isSingleMasterFilter() && selection && selection.length > 1) {
                selection = [selection[0]];
            }
            this._selectionValues(selection);
        }
    };
    DataDashboardItem.prototype._itemInteractivityByColumnAxis = function () {
        return true;
    };
    DataDashboardItem.prototype._getInteractivityAxisDimensionCount = function () {
        return this._dimensions.length - this.hiddenDimensions().length;
    };
    DataDashboardItem.prototype._unassignDataItem = function (dataItem, skipGroups) {
        this._clearInteractivityState();
        this.filterString(removeDataItemFromCriteria(this.filterString(), dataItem.uniqueName()));
        if (!skipGroups && dataItem instanceof dimension_1.Dimension && _data_field_1.IsOlapHierarchyField(dataItem)) {
            for (var i = this.dataItems().length - 1; i >= 0; i--) {
                var item = this.dataItems()[i];
                if (item instanceof dimension_1.Dimension && item.groupIndex() == dataItem.groupIndex() && item != dataItem) {
                    this.dataItems.remove(item);
                }
            }
            this._cleanDataItemDependencies();
        }
    };
    DataDashboardItem.prototype._removeDataItemCore = function (dataItem) {
        if (dataItem instanceof measure_1.Measure) {
            this._dimensions.forEach(function (dimensionDataItem) {
                var dimension = dimensionDataItem;
                if (dimension.sortMeasure() === dataItem.uniqueName()) {
                    dimension.sortMeasure(undefined);
                }
                if (dimension.topNOptionsMeasureName() === dataItem.uniqueName()) {
                    dimension.topNOptionsMeasureName(undefined);
                }
            });
        }
        this.dataItems.remove(dataItem);
    };
    DataDashboardItem.prototype._getActiveDimensions = function () {
        var drillDownValuesCount = this._drillDownValues().length;
        if (this._getDrillDownEnabled()) {
            return [this._interactivityDimensions[drillDownValuesCount]];
        }
        else {
            return this._interactivityDimensions;
        }
    };
    DataDashboardItem.prototype._getDimensionIdsByItemName = function () {
        return this._getActiveDimensions().map(function (dim) { return dim.uniqueName(); });
    };
    DataDashboardItem.prototype._getValues = function (tuples) {
        return _item_data_axis_helper_1.itemDataAxisHelper.getValuesByTuples(tuples, this._getDimensionIdsByItemName());
    };
    DataDashboardItem.prototype._getAvailableTuples = function () {
        var that = this, data = that._getItemData(), dimensionIds = that._getDimensionIdsByItemName(), axisName = that._getCurrentAxisNameByItemName();
        return data && data.getAvailableTuples(dimensionIds, axisName);
    };
    DataDashboardItem.prototype._getCurrentAxisNameByItemName = function () {
        return this._getItemDataAxis();
    };
    DataDashboardItem.prototype._getSelectedValuesByItemName = function () {
        return this._selectionValues();
    };
    DataDashboardItem.prototype._performSetMasterFilter = function (values) {
        if (values) {
            if (!Array.isArray(values) || (!(values[0] instanceof _item_data_tuple_1.itemDataTuple) && !Array.isArray(values[0]))) {
                throw new Error("The type of the values parameter is not supported.");
            }
            var arrayValues = values[0] instanceof _item_data_tuple_1.itemDataTuple ? this._getValues(values) : values;
            if (this._isSingleMasterFilter() && arrayValues.length !== 1) {
                throw new Error("Only one filter value is allowed when the Master Filter mode is set to Single.");
            }
            this._processItemSelectionChange("", _common_1.viewerActions.setMasterFilter, arrayValues);
        }
        else {
            throw Error();
        }
    };
    DataDashboardItem.prototype._performClearMasterFilter = function () {
        this._processItemClearMasterFilter();
    };
    DataDashboardItem.prototype._performDrillDown = function (values) {
        var realValues = values instanceof _item_data_tuple_1.itemDataTuple ? this._getValues([values]) : [[values]];
        this._processItemSelectionChange("", _common_1.viewerActions.drillDown, realValues[0]);
    };
    DataDashboardItem.prototype._performDrillUp = function () {
        this._processItemDrillUp();
    };
    DataDashboardItem.prototype._getAvailableDrillDownValues = function (itemName) {
        return (this._getAvailableActions().indexOf(_common_1.viewerActions.drillDown) !== -1) ? this._getAvailableTuples() : null;
    };
    DataDashboardItem.prototype._getCurrentDrillDownValues = function () {
        var data = this._getItemData(), dimensionIds = this._getDimensionIdsByItemName(), axisName = this._getCurrentAxisNameByItemName();
        return data && data.getCurrentDrillDownValues(dimensionIds, axisName);
    };
    DataDashboardItem.prototype._getAvailableFilterValues = function (itemName) {
        return (this._getAvailableActions().indexOf(_common_1.viewerActions.setMasterFilter) !== -1 ||
            this._getAvailableActions().indexOf(_common_1.viewerActions.setMultipleValuesMasterFilter) !== -1) ? this._getAvailableTuples() : null;
    };
    DataDashboardItem.prototype._getAvailableActions = function () {
        return this._actions();
    };
    DataDashboardItem.prototype._getItemData = function () {
        var dataManager = this._dataManager();
        return dataManager && dataManager.getItemData();
    };
    DataDashboardItem.prototype._getCurrentFilterValues = function () {
        var that = this, data = that._getItemData(), dimensionIds = that._getDimensionIdsByItemName(), axisName = that._getCurrentAxisNameByItemName(), selectedValues = that._getSelectedValuesByItemName();
        return data && data.getCurrentFilterValues(dimensionIds, axisName, selectedValues);
    };
    DataDashboardItem._itemTypesMap = {
        Measure: measure_1.Measure,
        Dimension: dimension_1.Dimension
    };
    DataDashboardItem._formatRuleTypesMap = {
        GridItemFormatRule: grid_item_format_rule_1.GridItemFormatRule,
        PivotItemFormatRule: pivot_item_format_rule_1.PivotItemFormatRule
    };
    DataDashboardItem._addColoringMeta = function (links) {
        links.forEach(function (link) {
            if (!link._specifics.customDataShapingProperties.some(function (prop) { return prop.serializationInfo.propertyName === _dimension_1.coloringMode.propertyName; })) {
                link._specifics.customDataShapingProperties = link._specifics.customDataShapingProperties.concat([{
                        serializationInfo: _dimension_1.coloringMode
                    }]);
            }
        });
    };
    __decorate([
        _utils_1.collectionItemType("Dimension")
    ], DataDashboardItem.prototype, "__hiddenDimensions", void 0);
    __decorate([
        _utils_1.collectionItemType("Measure")
    ], DataDashboardItem.prototype, "__hiddenMeasures", void 0);
    __decorate([
        _utils_1.collectionItemType("Entry")
    ], DataDashboardItem.prototype, "colorScheme", void 0);
    return DataDashboardItem;
}(dashboard_item_1.DashboardItem));
exports.DataDashboardItem = DataDashboardItem;
function getSummaryType(dataField) {
    if (dataField) {
        switch (dataField.fieldType()) {
            case "Bool":
            case "Text":
            case "DateTime":
                return "Count";
            case "Custom":
                if (!dataField.isConvertible()) {
                    return "Count";
                }
        }
    }
    return _measure_1.summaryTypeNumericToAny.defaultVal;
}
function removePropertyFromCriteriaOperator(sourceCriteriaOperator, propertyName) {
    if (sourceCriteriaOperator instanceof dx_analytics_core_1.default.Analytics.Criteria.GroupOperator) {
        sourceCriteriaOperator.operands = sourceCriteriaOperator.operands.map(function (operand) { return removePropertyFromCriteriaOperator(operand, propertyName); });
        return sourceCriteriaOperator;
    }
    else if (sourceCriteriaOperator instanceof dx_analytics_core_1.default.Analytics.Criteria.UnaryOperator) {
        sourceCriteriaOperator.operand = removePropertyFromCriteriaOperator(sourceCriteriaOperator.operand, propertyName);
        return sourceCriteriaOperator;
    }
    else if (!sourceCriteriaOperator.children().some(function (operand) { return operand instanceof dx_analytics_core_1.default.Analytics.Criteria.OperandProperty && operand.propertyName === propertyName; })) {
        return sourceCriteriaOperator;
    }
    return new dx_analytics_core_1.default.Analytics.Criteria.GroupOperator(dx_analytics_core_1.default.Analytics.Criteria.GroupOperatorType.And, []);
}
function removeDataItemFromCriteria(criteria, dataItemName) {
    try {
        if (!!criteria) {
            var criteriaSerializer = new dx_analytics_core_1.default.Analytics.Widgets.Internal.FilterEditorSerializer();
            var criteriaOperator = criteriaSerializer.deserialize(criteria);
            var cleanedOperator = removePropertyFromCriteriaOperator(criteriaOperator, dataItemName);
            return criteriaSerializer.serialize(cleanedOperator);
        }
        else {
            return criteria;
        }
    }
    catch (e) {
        return "";
    }
}
