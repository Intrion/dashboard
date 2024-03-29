﻿/**
* DevExpress Dashboard (filter-element-item-base.js)
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
var _utils_1 = require("../../internal/_utils");
var data_item_1 = require("../../data-item/data-item");
var _knockout_utils_1 = require("../../internal/_knockout-utils");
var _filter_element_item_base_1 = require("./metadata/_filter-element-item-base");
var _hashset_wrapper_1 = require("../../../data/_hashset-wrapper");
var _utils_2 = require("../../../data/_utils");
var ko = require("knockout");
var FilterElementItemBase = (function (_super) {
    __extends(FilterElementItemBase, _super);
    function FilterElementItemBase(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this.__filterDimensions = ko.observableArray([]);
        _this.filterDimensions = ko.observableArray([]);
        _this._unselectedValues = ko.observable();
        _this._isExcludingAllFilter = ko.computed(function () {
            if (!!_this._useNeutralFilterMode())
                return false;
            var selectionValues = _this._selectionValues();
            return _this._dataManager() && selectionValues && selectionValues.length === 0;
        });
        _knockout_utils_1.subscribeArrayChange(_this.__filterDimensions, {
            added: function (link) { return link._specifics.supportsTopNOther = false; },
            deleted: function (link) { return link._specifics.supportsTopNOther = true; }
        });
        _this.__filterDimensions(dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.FilterDimensions, function (item) {
            var link = new data_item_1.DataItemLink(_this, item, serializer);
            link._specifics.supportsTopNOther = false;
            return link;
        })());
        _this._subscribeDataItemLinkArrays(_filter_element_item_base_1.filterDimensions);
        return _this;
    }
    Object.defineProperty(FilterElementItemBase.prototype, "_supportParallelRequests", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterElementItemBase.prototype, "_useCriteriaOptimization", {
        get: function () {
            return !this.filterString()
                && this.interactivityOptions.ignoreMasterFilters()
                && !this.isMasterFilterCrossDataSource()
                && !this._interactivityDimensions.some(function (d) { return d.topNOptionsEnabled(); });
        },
        enumerable: true,
        configurable: true
    });
    FilterElementItemBase.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.__filterDimensions.removeAll();
    };
    FilterElementItemBase.prototype.getInfo = function () {
        return _filter_element_item_base_1.filterElementItemBaseSerializationInfo;
    };
    FilterElementItemBase.prototype._isCalculationSupported = function () {
        return false;
    };
    FilterElementItemBase.prototype._getInteractivityDimensionLinks = function () { return this.__filterDimensions(); };
    FilterElementItemBase.prototype._getMasterFilterMode = function () { return !this._useNeutralFilterMode() || (!!this._useNeutralFilterMode() && this._isMultiselectable()) ? "Multiple" : "Single"; };
    FilterElementItemBase.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    FilterElementItemBase.prototype._getClearMasterFilterSupported = function () { return !!this._useNeutralFilterMode(); };
    FilterElementItemBase.prototype._getIsMasterFilter = function () { return true; };
    FilterElementItemBase.prototype._isMultiselectable = function () { return false; };
    FilterElementItemBase.prototype._updateContentViewModel = function (content) {
        _super.prototype._updateContentViewModel.call(this, content);
        content.ViewModel.EnableSearch = this.enableSearch();
    };
    FilterElementItemBase.prototype._performOutputFilterOptimization = function (filter) {
        if (this.__filterDimensions && filter && !!filter.values && this._useCriteriaOptimization) {
            var allselectionValues = this._getAllSelectionValues(this._interactivityDimensions.map(function (d) { return d.uniqueName(); }));
            if (filter.values.length === allselectionValues.length) {
                return undefined;
            }
        }
        if (!!this._dataQueryParams.peek()
            && !!this._dataQueryParams.peek().Filter
            && this._dataQueryParams.peek().Filter.some(function (externalFilter) { return externalFilter.isExcludingAllFilter; })) {
            return undefined;
        }
        return filter;
    };
    FilterElementItemBase.prototype._validateSelection = function (selection) {
        if (!this._interactivityDimensions.length)
            return;
        var allValues = this._getAllSelectionValues(this._interactivityDimensions.map(function (d) { return d.uniqueName(); }));
        if (this._isMultiselectable() && !this._useNeutralFilterMode() && !Array.isArray(this._unselectedValues())) {
            this._unselectedValues([]);
            if (Array.isArray(selection)) {
                this._updateUnselectedValues(selection, allValues);
            }
        }
        this._setSelectionData(this._correctSelectionValues(allValues, selection || []));
    };
    FilterElementItemBase.prototype._setSelectionData = function (selection) {
        if (!this._useNeutralFilterMode() && this._multiData) {
            var currentSelection = this._selectionValues();
            if (this._isMultiselectable() && !!currentSelection && this._unselectedValues()) {
                this._updateUnselectedValues(selection, currentSelection);
            }
            if (!!selection) {
                var hashset = new _hashset_wrapper_1.HashsetWrapper(selection);
                var allValues = this._getAllSelectionValues(this._interactivityDimensions.map(function (d) { return d.uniqueName(); }));
                selection = hashset.getIntersection(allValues);
            }
        }
        _super.prototype._setSelectionData.call(this, selection);
    };
    FilterElementItemBase.prototype._correctSelectionValues = function (allValues, currentSelection) {
        var _this = this;
        if (this._isMultiselectable() && !this._useNeutralFilterMode()) {
            var unknownSelection = allValues
                .filter(function (x) { return !_this._arrayContains(currentSelection, x) && !_this._arrayContains(_this._unselectedValues(), x); });
            return currentSelection.concat(unknownSelection);
        }
        else if (!this._isMultiselectable()) {
            if (!!this._useNeutralFilterMode()) {
                if (currentSelection.length !== 1) {
                    return this._allowAllValue() || allValues.length == 0 ? null : [allValues[0]];
                }
            }
            else {
                if (currentSelection.length !== 1 || !this._arrayContains(allValues, currentSelection[0])) {
                    return this._allowAllValue() ? allValues : [allValues[0]];
                }
            }
        }
        return currentSelection;
    };
    FilterElementItemBase.prototype._updateUnselectedValues = function (newSelection, currentSelection) {
        var _this = this;
        if (!newSelection || newSelection.length === 0) {
            currentSelection.forEach(function (x) { return _this._unselectedValues().push(x.slice()); });
        }
        else {
            var hashset_1 = new _hashset_wrapper_1.HashsetWrapper(newSelection);
            var unselectedCount = this._unselectedValues().length;
            for (var i = unselectedCount - 1; i >= 0; i--) {
                if (hashset_1.contains(this._unselectedValues()[i])) {
                    this._unselectedValues().splice(i, 1);
                }
            }
            currentSelection.forEach(function (x) {
                if (!hashset_1.contains(x)) {
                    _this._unselectedValues().push(x.slice());
                }
            });
        }
    };
    FilterElementItemBase.prototype._arrayContains = function (container, part) {
        return _utils_2.arrayContains(container, part);
    };
    __decorate([
        _utils_1.collectionItemType("Dimension")
    ], FilterElementItemBase.prototype, "__filterDimensions", void 0);
    return FilterElementItemBase;
}(data_dashboard_item_1.DataDashboardItem));
exports.FilterElementItemBase = FilterElementItemBase;
