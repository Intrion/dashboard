/**
* DevExpress Dashboard (custom-item.js)
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
var data_dashboard_item_1 = require("../data-dashboard-item");
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var _data_item_1 = require("../../data-item/metadata/_data-item");
var _custom_item_1 = require("./metadata/_custom-item");
var interactivity_options_1 = require("../options/interactivity-options");
var _coloring_options_1 = require("../options/metadata/_coloring-options");
var slice_table_1 = require("./slice-table");
var _utils_1 = require("../../internal/_utils");
var data_item_1 = require("../../data-item/data-item");
var _knockout_utils_1 = require("../../internal/_knockout-utils");
var color_1 = require("../../color");
var _item_data_axis_point_1 = require("../../../data/item-data/_item-data-axis-point");
var special_values_1 = require("../../../data/special-values");
var _formatter_1 = require("../../../data/_formatter");
var interactivity_options_2 = require("../options/interactivity-options");
var custom_item_calc_window_definition_1 = require("../../data-item/window-definition/custom-item-calc-window-definition");
var _utils_2 = require("../../../data/_utils");
var $ = require("jquery");
var ko = require("knockout");
var COLOR_MEASURE_ID = 'ColorMeasure';
var CustomItem = (function (_super) {
    __extends(CustomItem, _super);
    function CustomItem(_meta, modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer, CustomItem._getInfo(_meta)) || this;
        _this._meta = _meta;
        _this.sliceTables = ko.observableArray();
        _this.interactivityTargets = ko.observableArray();
        _this.coloringDimensions = ko.observableArray();
        _this.coloringMeasures = ko.observableArray();
        _this.customMetadata = {};
        _this._getMeasureValue = function (dataRow, dataItemUniqueName) {
            return _this._getStorage().getValue(dataRow, dataItemUniqueName);
        };
        _this._getMeasureDisplayText = function (dataRow, dataItemUniqueName) {
            var value = _this._getMeasureValue(dataRow, dataItemUniqueName);
            if (value === null || value === undefined) {
                return null;
            }
            var metaData = _this._dataManager().getMetaData(), formatViewModel = metaData.getMeasureFormat(dataItemUniqueName);
            return _this._format(value, formatViewModel);
        };
        _this._getDimensionUniqueValue = function (dataRow, dataItemUniqueName) {
            return _this._getStorage().getKeyValue(dataRow, dataItemUniqueName);
        };
        _this._getDimensionValue = function (dataRow, dataItemUniqueName) {
            var value = _this._getSpecialValue(dataRow, dataItemUniqueName, _item_data_axis_point_1.dataStorageSpecialIds.Value);
            if (value === null || value === undefined)
                value = _this._getDimensionUniqueValue(dataRow, dataItemUniqueName);
            if (value === special_values_1.specialValues.nullValueGuid)
                value = null;
            return value;
        };
        _this._getDimensionDisplayText = function (dataRow, dataItemUniqueName) {
            var displayText = _this._getServerText(dataRow, dataItemUniqueName), uniqueValue = _this._getDimensionUniqueValue(dataRow, dataItemUniqueName);
            if (uniqueValue === special_values_1.specialValues.olapNullValueGuid)
                return undefined;
            if (displayText == null) {
                var metaData = _this._dataManager().getMetaData(), formatViewModel = metaData.getDimensionFormat(dataItemUniqueName);
                displayText = uniqueValue === special_values_1.specialValues.nullValueGuid ?
                    _this._format(uniqueValue, formatViewModel) :
                    _this._format(_this._getDimensionValue(dataRow, dataItemUniqueName), formatViewModel);
            }
            return displayText;
        };
        _this._isExcludingAllFilter = ko.computed(function () {
            if (_this._isMasterFilter() && !!_this.customInteractivity && !!_this.customInteractivity.applyEmptyFilter) {
                var selectionValues = _this._selectionValues();
                return !selectionValues || selectionValues.length === 0;
            }
            return false;
        });
        var modelCustomMetadata = modelJson.CustomMetadata || {};
        _this.customBindings.forEach(function (binding) {
            var linkPropertyName = CustomItem._getBindingLinkName(binding.propertyName);
            if (binding.array) {
                _this[linkPropertyName] = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelCustomMetadata[binding.propertyName], function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
                _this[binding.propertyName] = ko.observableArray([]);
                _this._subscribeDataItemLinkArrays({ propertyName: linkPropertyName, modelName: binding.propertyName });
                _knockout_utils_1.subscribeArrayChange(_this[linkPropertyName], {
                    added: function (item) { return item.itemType(binding.dataItemType); }
                });
            }
            else {
                _this[binding.propertyName] = ko.observable();
                _this._attachDataItem(_this, linkPropertyName, new data_item_1.DataItemLink(_this, modelCustomMetadata[binding.propertyName], serializer));
            }
            _this.customMetadata[linkPropertyName] = _this[linkPropertyName];
        });
        _this.customProperties.forEach(function (p) {
            _this.customMetadata[p.propertyName] = _this[p.propertyName] = serializer.deserializeProperty(CustomItem.getPropertyInfo(p), modelCustomMetadata);
        });
        ko.computed(function () {
            var sliceTables = [];
            var interactivityTargets = [];
            var coloringDimensions = [];
            var coloringMeasures = [];
            _this.customBindings.forEach(function (binding) {
                var prop = _this[CustomItem._getBindingLinkName(binding.propertyName)];
                var bindings = (binding.array ? prop() : [prop]).filter(function (link) { return !!link.dataItem(); });
                var sliceTable = sliceTables.filter(function (sliceTable) { return sliceTable.name() === binding.slice; })[0];
                if (!sliceTable) {
                    sliceTable = new slice_table_1.SliceTable(_this, { '@ItemType': 'SliceTable', '@Name': binding.slice });
                    sliceTables.push(sliceTable);
                }
                sliceTable.push(bindings, binding.dataItemType);
                if (binding.enableInteractivity) {
                    interactivityTargets = interactivityTargets.concat(bindings);
                }
                if (binding.enableColoring) {
                    if (binding.dataItemType === 'Dimension') {
                        bindings.forEach(function (link) { return data_dashboard_item_1.DataDashboardItem._addColoringMeta([link]); });
                        if (binding.array) {
                            prop.subscribe(function (links) { return data_dashboard_item_1.DataDashboardItem._addColoringMeta(links); });
                        }
                        coloringDimensions = coloringDimensions.concat(bindings);
                    }
                    if (binding.dataItemType === 'Measure') {
                        coloringMeasures = coloringMeasures.concat(bindings);
                    }
                }
            });
            _this.sliceTables(sliceTables);
            _this.interactivityTargets(interactivityTargets);
            _this.coloringDimensions(coloringDimensions);
            _this.coloringMeasures(coloringMeasures);
        });
        _this.getInfo = function () { return CustomItem._getInfo(_this._meta); };
        if (!_this.customBindings.length) {
            _this._supportedUIStates(["error"]);
        }
        return _this;
    }
    CustomItem.getPropertyInfo = function (p) {
        return _utils_2.deepExtend({ modelName: '@' + p.propertyName, category: _base_metadata_1.PropertyCategory.ViewModel }, p);
    };
    CustomItem._getBindingLinkName = function (propertyName) {
        return '__' + propertyName;
    };
    CustomItem._getSerializationsInfo = function (bindings) {
        return (bindings || []).map(function (binding) {
            return {
                propertyName: CustomItem._getBindingLinkName(binding.propertyName),
                modelName: binding.propertyName,
                array: binding.array,
                info: !binding.array ? _data_item_1.dataItemLinkSerializationsInfo : undefined
            };
        });
    };
    CustomItem._hasInteractivityTargets = function (meta) {
        var bindings = (meta && meta['bindings']) || [];
        return bindings.some(function (binding) { return binding.enableInteractivity; });
    };
    CustomItem._hasColoringDimensions = function (bindings) {
        return bindings.some(function (binding) { return binding.enableColoring && binding.dataItemType === 'Dimension'; });
    };
    CustomItem._hasColoringMeasures = function (bindings) {
        return bindings.some(function (binding) { return binding.enableColoring && binding.dataItemType === 'Measure'; });
    };
    CustomItem._isFilterAllowed = function (meta) {
        var interactivity = !!meta && meta['interactivity'];
        return !!interactivity && interactivity.filter && CustomItem._hasInteractivityTargets(meta);
    };
    CustomItem._isDrillDownAllowed = function (meta) {
        var interactivity = !!meta && meta['interactivity'];
        return !!interactivity && interactivity.drillDown && CustomItem._hasInteractivityTargets(meta);
    };
    CustomItem._getInfo = function (meta) {
        if (!meta)
            return _custom_item_1.customDashboardItemSerializationsInfo;
        var dynamicInfo = [];
        var bindings = (meta && meta['bindings']) || [];
        var properties = (meta && meta['properties']) || [];
        var isFilterAllowed = CustomItem._isFilterAllowed(meta);
        var isDrillDownAllowed = CustomItem._isDrillDownAllowed(meta);
        var bindingsInfo = CustomItem._getSerializationsInfo(bindings);
        var propertiesInfo = CustomItem._getPropertiesSerializationsInfo(properties);
        if (isFilterAllowed && isDrillDownAllowed) {
            dynamicInfo.push(interactivity_options_1._dashboardItemInteractivityOptionsMeta);
        }
        else if (isFilterAllowed) {
            dynamicInfo.push(interactivity_options_1._masterFilterInteractivityOptionsMeta);
        }
        else if (isDrillDownAllowed) {
            dynamicInfo.push(interactivity_options_1._drillDownInteractivityOptionsMeta);
        }
        else {
            dynamicInfo.push(interactivity_options_1._baseInteractivityOptionsMeta);
        }
        var hasColoringDimensions = CustomItem._hasColoringDimensions(bindings);
        if (hasColoringDimensions) {
            dynamicInfo.push(_custom_item_1.coloringDimensions);
        }
        var hasColoringMeasures = CustomItem._hasColoringMeasures(bindings);
        if (hasColoringMeasures) {
            dynamicInfo.push(_custom_item_1.coloringMeasures);
        }
        if (hasColoringDimensions || hasColoringMeasures) {
            dynamicInfo.push(_coloring_options_1.coloringOptions);
        }
        return _custom_item_1.customDashboardItemSerializationsInfo
            .concat([{ propertyName: 'customMetadata', modelName: 'CustomMetadata', info: bindingsInfo.concat(propertiesInfo) }])
            .concat(propertiesInfo)
            .concat(dynamicInfo);
    };
    CustomItem._getPropertiesSerializationsInfo = function (properties) {
        return (properties || []).map(function (p) { return CustomItem.getPropertyInfo(p); });
    };
    CustomItem.prototype._clearBindings = function () {
        var _this = this;
        _super.prototype._clearBindings.call(this);
        this.customBindings.forEach(function (binding) {
            if (binding.array) {
                _this[CustomItem._getBindingLinkName(binding.propertyName)].removeAll();
            }
        });
    };
    CustomItem.prototype.getBindingValue = function (propertyName, index) {
        var _this = this;
        var binding = ko.unwrap(this[CustomItem._getBindingLinkName(propertyName)]);
        var bindingValues = undefined;
        var wrapBindingValue = function (binding) {
            return !binding.dataItem() ? undefined : {
                displayName: function () { return _this._getDataItemDisplayName(binding.dataItem()); },
                uniqueName: function () { return binding.uniqueName(); }
            };
        };
        if (Array.isArray(binding)) {
            bindingValues = index != undefined ? [wrapBindingValue(binding[index])] : binding.map(function (b) { return wrapBindingValue(b); });
        }
        else {
            bindingValues = [wrapBindingValue(binding)];
        }
        return bindingValues.filter(function (b) { return b !== undefined; });
    };
    CustomItem.prototype.iterateData = function (action, sliceTableName) {
        var _this = this;
        if (sliceTableName === void 0) { sliceTableName = null; }
        var slice = this.getSlice(sliceTableName);
        if (!slice)
            return;
        var keyIds = slice.getKeyIds() || [], valueIds = slice.getValueIds() || [], processDataRow = function (dataRow, propertyName, measureAction, dimensionAction) {
            var binding = _this.customBindings.filter(function (b) { return b.propertyName === propertyName; })[0], result = [];
            if (!!binding) {
                var property = _this[CustomItem._getBindingLinkName(propertyName)];
                $.each(binding.array ? property() : [property], function (_, item) {
                    var uniqueName = item.uniqueName();
                    if (keyIds.indexOf(uniqueName) != -1)
                        result.push(dimensionAction(dataRow, uniqueName));
                    if (valueIds.indexOf(uniqueName) != -1)
                        result.push(measureAction(dataRow, uniqueName));
                });
            }
            return result;
        };
        slice.forEach(function (dataRow) {
            action({
                getColor: function (measureBindingName) {
                    if (!measureBindingName) {
                        return [_this._getColor(dataRow, keyIds, COLOR_MEASURE_ID)];
                    }
                    else {
                        return processDataRow(dataRow, measureBindingName, function (dataRow, uniqueName) { return _this._getColor(dataRow, keyIds, _this._getColorMeasureId(uniqueName)); }, function (dataRow, uniqueName) { return _this._getColor(dataRow, keyIds, COLOR_MEASURE_ID); });
                    }
                },
                getDisplayText: function (property) {
                    return processDataRow(dataRow, property, _this._getMeasureDisplayText, _this._getDimensionDisplayText);
                },
                getValue: function (property) {
                    return processDataRow(dataRow, property, _this._getMeasureValue, _this._getDimensionValue);
                },
                getUniqueValue: function (property) {
                    return processDataRow(dataRow, property, _this._getMeasureValue, _this._getDimensionUniqueValue);
                }
            });
        });
    };
    CustomItem.prototype._getDefaultItemType = function () {
        return CustomItem.ItemType;
    };
    CustomItem.prototype._getSliceTable = function (name) {
        var sliceTables = this.sliceTables();
        if (!!name) {
            return sliceTables.filter(function (slice) { return slice.name() === name; })[0];
        }
        else {
            return sliceTables.length > 0 ? sliceTables[0] : undefined;
        }
    };
    CustomItem.prototype._getAllSelectionValues = function (activeDimensions) {
        var sliceTables = this.sliceTables().filter(function (slice) { return activeDimensions.every(function (id) { return slice.dimensions().map(function (dim) { return dim.uniqueName(); }).indexOf(id) !== -1; }); }), values = [];
        if (sliceTables.length > 0) {
            var slice = this.getSlice(sliceTables[0].name());
            if (!!slice) {
                var keyIds = slice.getKeyIds().filter(function (id) { return activeDimensions.indexOf(id) !== -1; });
                slice.forEach(function (dataRow) { return values.push(keyIds.map(function (id) { return slice.getKeyValue(dataRow.rowKey, id); })); });
            }
        }
        return values;
    };
    CustomItem.prototype.getSlice = function (sliceTableName) {
        if (sliceTableName === void 0) { sliceTableName = null; }
        var dimensions = this._getSliceTable(sliceTableName).dimensions();
        var storage = this._getStorage();
        return storage && storage.getSliceByIds && storage.getSliceByIds(this._getValidIds(dimensions));
    };
    CustomItem.prototype._getStorage = function () {
        return this._dataManager() && this._dataManager().getDataStorage();
    };
    CustomItem.prototype._getValidIds = function (dimensionLinks) {
        var excluded = [];
        if (this.isDrillDownAllowed() && this._isDrillDownEnabled() && this.interactivityTargets().every(function (d) { return dimensionLinks.filter(function (dd) { return d.uniqueName() === dd.uniqueName(); }).length > 0; })) {
            excluded = this.interactivityTargets().slice(this._drillDownValues().length + 1);
        }
        return dimensionLinks.filter(function (d) { return excluded.filter(function (dd) { return d.uniqueName() === dd.uniqueName(); }).length == 0; }).map(function (d) { return d.uniqueName(); });
    };
    CustomItem.prototype._getColor = function (dataRow, keyIds, colorMeasureId) {
        var coloredDimensionIds = this._coloredDimensions().map(function (dim) { return dim.uniqueName(); }).filter(function (id) { return keyIds.indexOf(id) != -1; }), sliceKey = [];
        if (coloredDimensionIds.length > 0) {
            var lastColored = coloredDimensionIds[coloredDimensionIds.length - 1];
            for (var i = 0; i < keyIds.length; i++) {
                var currentId = keyIds[i];
                sliceKey.push(currentId);
                if (currentId == lastColored)
                    break;
            }
        }
        var colorValue = this._getValueBySliceKey(dataRow, sliceKey, colorMeasureId);
        if (colorValue)
            return color_1.Color.toHex(colorValue);
        return null;
    };
    CustomItem.prototype._getColorMeasureId = function (uniqueName) {
        if (this.coloringOptions && this._coloredByMeasures()) {
            var measure = this.coloringMeasures().map(function (mes) { return mes.dataItem(); }).filter(function (mes) { return mes.uniqueName() === uniqueName; });
            if (measure && measure.length > 0)
                return COLOR_MEASURE_ID + '_' + measure[0].dataMember() + ' (' + measure[0]['summaryType']() + ')';
        }
        return COLOR_MEASURE_ID;
    };
    CustomItem.prototype._format = function (value, formatViewModel) {
        return !!formatViewModel ? _formatter_1.format(value, formatViewModel) : value.toString();
    };
    CustomItem.prototype._getServerText = function (dataRow, dataItemUniqueName) {
        return this._getSpecialValue(dataRow, dataItemUniqueName, _item_data_axis_point_1.dataStorageSpecialIds.DisplayText);
    };
    CustomItem.prototype._getSpecialValue = function (dataRow, dataItemUniqueName, specialId) {
        return this._getValueBySliceKey(dataRow, [dataItemUniqueName], specialId);
    };
    CustomItem.prototype._getValueBySliceKey = function (dataRow, sliceKey, valueId) {
        var storage = this._getStorage(), metaDataSliceKey = storage.getSliceKey(sliceKey);
        if (metaDataSliceKey < 0)
            return null;
        var metaDataRowKey = storage.findDataRowKey(metaDataSliceKey, dataRow);
        return storage.getValue(metaDataRowKey, valueId);
    };
    Object.defineProperty(CustomItem.prototype, "customBindings", {
        get: function () {
            return (this._meta && this._meta['bindings']) || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomItem.prototype, "customProperties", {
        get: function () {
            return (this._meta && this._meta['properties']) || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomItem.prototype, "customInteractivity", {
        get: function () {
            return !!this._meta && this._meta['interactivity'];
        },
        enumerable: true,
        configurable: true
    });
    CustomItem.prototype._getMasterFilterMode = function () {
        return this.interactivityOptions instanceof interactivity_options_2.DashboardItemMasterFilterInteractivityOptions ? this.interactivityOptions.masterFilterMode() : 'None';
    };
    CustomItem.prototype._getDrillDownEnabled = function () {
        return this.interactivityOptions instanceof interactivity_options_2.DashboardItemInteractivityOptions && this.interactivityOptions.isDrillDownEnabled();
    };
    CustomItem.prototype._getIgnoreMasterFilter = function () { return !!this.interactivityOptions && this.interactivityOptions.ignoreMasterFilters(); };
    CustomItem.prototype._getInteractivityDimensionLinks = function () { return this.interactivityTargets(); };
    CustomItem.prototype.isDrillDownAllowed = function () {
        return CustomItem._isDrillDownAllowed(this._meta);
    };
    CustomItem.prototype.isFilterAllowed = function () {
        return CustomItem._isFilterAllowed(this._meta);
    };
    CustomItem.prototype._isInteractivityAllowed = function () {
        return this.isDrillDownAllowed() || this.isFilterAllowed();
    };
    CustomItem.prototype._getCanColorByMeasures = function () { return CustomItem._hasColoringMeasures(this.customBindings); };
    CustomItem.prototype._getCanColorByDimensions = function () { return CustomItem._hasColoringDimensions(this.customBindings); };
    CustomItem.prototype._getColorizableDataItemsInfo = function () {
        var _this = this;
        return this.customBindings.filter(function (binding) { return binding.enableColoring && binding.dataItemType === 'Dimension'; }).map(function (binding) {
            var prop = _this[CustomItem._getBindingLinkName(binding.propertyName)];
            return {
                items: binding.array ? prop() : [prop],
                prefixId: binding.displayName
            };
        });
    };
    CustomItem.prototype._getDefaultCalculationWindowDefinition = function () {
        return new custom_item_calc_window_definition_1.CustomItemWindowDefinition();
    };
    CustomItem.ItemType = 'CustomItem';
    __decorate([
        _utils_1.collectionItemType("Dimension")
    ], CustomItem.prototype, "interactivityTargets", void 0);
    __decorate([
        _utils_1.collectionItemType("Dimension")
    ], CustomItem.prototype, "coloringDimensions", void 0);
    __decorate([
        _utils_1.collectionItemType("Measure")
    ], CustomItem.prototype, "coloringMeasures", void 0);
    return CustomItem;
}(data_dashboard_item_1.DataDashboardItem));
exports.CustomItem = CustomItem;
