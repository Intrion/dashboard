﻿/**
* DevExpress Dashboard (_range-state-controller.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_state_1 = require("../../dashboard-state");
var _date_utils_1 = require("../../internal/_date-utils");
var ko = require("knockout");
var _dimension_filter_values_1 = require("../../data-item/_dimension-filter-values");
var _utils_1 = require("../../../data/_utils");
var RangeStateController = (function () {
    function RangeStateController(item) {
        this.item = item;
    }
    Object.defineProperty(RangeStateController.prototype, "defaultDateTimePeriodName", {
        get: function () { return this.item.defaultDateTimePeriodName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeStateController.prototype, "currentSelectedDateTimePeriodName", {
        get: function () { return this.item.currentSelectedDateTimePeriodName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeStateController.prototype, "dateTimePeriods", {
        get: function () { return this.item.dateTimePeriods; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeStateController.prototype, "_selectionValues", {
        get: function () { return this.item._selectionValues; },
        enumerable: true,
        configurable: true
    });
    RangeStateController.prototype._setSelectionData = function (selection) {
        this.item._setSelectionData(selection);
    };
    RangeStateController.prototype._getSelectionByPeriod = function (period) {
        return this.item._getSelectionByPeriod(period);
    };
    RangeStateController.prototype._setSelectionFromState = function (stateSelection) {
        this.item._setSelectionFromState(stateSelection);
    };
    RangeStateController.prototype.initialize = function () {
        var _this = this;
        if (this.defaultDateTimePeriodName()) {
            this.currentSelectedDateTimePeriodName(this.defaultDateTimePeriodName());
            this._setSelectionData(this._getSelectionByPeriod(this.dateTimePeriods().filter(function (period) { return period.name() === _this.defaultDateTimePeriodName(); })[0]));
        }
        this.dateTimePeriods.subscribe(function (newPeriods) {
            if (!newPeriods.filter(function (p) { return p.name() === _this.defaultDateTimePeriodName(); })[0]) {
                _this.defaultDateTimePeriodName(null);
            }
        });
        var subscribeOnNameChange = function (newName) {
            _this.item._defaultDateTimePeriodIndexSubscription && _this.item._defaultDateTimePeriodIndexSubscription.dispose();
            _this.item._defaultDateTimePeriodIndexSubscription = null;
            var newPeriod = _this.dateTimePeriods().filter(function (p) { return p.name() === _this.defaultDateTimePeriodName(); })[0];
            if (newPeriod) {
                _this.item._defaultDateTimePeriodIndexSubscription = newPeriod.name.subscribe(function (changedName) {
                    _this.defaultDateTimePeriodName(changedName);
                });
            }
        };
        this.defaultDateTimePeriodName.subscribe(function (newName) {
            subscribeOnNameChange(newName);
            var newPeriod = _this.dateTimePeriods().filter(function (p) { return p.name() === _this.defaultDateTimePeriodName(); })[0];
            if (newPeriod) {
                _this.currentSelectedDateTimePeriodName(newName);
            }
        });
        subscribeOnNameChange(this.defaultDateTimePeriodName());
        this.item._state = ko.computed(function () {
            var state = new dashboard_state_1.ItemState();
            if (_this.currentSelectedDateTimePeriodName()) {
                if (_this.currentSelectedDateTimePeriodName() !== _this.defaultDateTimePeriodName()) {
                    state.RangeFilterState = {
                        PeriodName: _this.currentSelectedDateTimePeriodName()
                    };
                }
            }
            else {
                var selection = _date_utils_1.toStringArray(_this._selectionValues());
                if (selection && selection.length) {
                    state.RangeFilterState = {
                        Selection: {
                            Minimum: selection[0][0],
                            Maximum: selection[0][1]
                        }
                    };
                }
            }
            return state;
        });
    };
    RangeStateController.prototype.applySelectionFromState = function (itemState) {
        if (itemState.RangeFilterState) {
            var rangeSelection = itemState.RangeFilterState.Selection;
            if (rangeSelection) {
                this.currentSelectedDateTimePeriodName(undefined);
                if (!!rangeSelection.Minimum || !!rangeSelection.Maximum) {
                    this._setSelectionFromState([[rangeSelection.Minimum, rangeSelection.Maximum]]);
                }
                else {
                    this._setSelectionData(null);
                }
            }
            if (itemState.RangeFilterState.PeriodName) {
                var period = this.dateTimePeriods().filter(function (p) { return p.name() === itemState.RangeFilterState.PeriodName; })[0];
                if (period) {
                    this.currentSelectedDateTimePeriodName(itemState.RangeFilterState.PeriodName);
                    this._setSelectionFromState(this._getSelectionByPeriod(period));
                }
            }
        }
    };
    RangeStateController.prototype.extendContentState = function (content) {
        var _this = this;
        if (this.currentSelectedDateTimePeriodName()) {
            var selectedPeriod = this.dateTimePeriods().filter(function (p) { return p.name() === _this.currentSelectedDateTimePeriodName(); })[0];
            if (selectedPeriod) {
                content.ViewModel.DefaultDateTimePeriodIndex = this.dateTimePeriods().indexOf(selectedPeriod);
            }
        }
        else {
            content.IgnoreDefaultDateTimePeriod = true;
        }
    };
    RangeStateController.prototype._getDisplayFilterValues = function (limitCount) {
        var metaData = this.item._dataManager() ? this.item._dataManager().getMetaData() : undefined, selection = this.item._outputFilter(), outFilterValues = [], argumentDimension = selection && selection.dimensions && selection.dimensions[0];
        if (argumentDimension) {
            var dimensionId = argumentDimension["@DefaultId"];
            var format = metaData ? metaData.getDimensionFormat(dimensionId) : undefined;
            if (!_utils_1.arrayEquals(selection.range, this.item._fullRange())) {
                var filterValues = new _dimension_filter_values_1.DimensionFilterValues(this.item._getDimensionDisplayName(dimensionId));
                filterValues.Values.push({
                    Type: "Range",
                    RangeLeft: selection.range[0],
                    RangeRight: selection.range[1],
                    Format: format
                });
                outFilterValues.push(filterValues);
            }
        }
        return outFilterValues;
    };
    return RangeStateController;
}());
exports.RangeStateController = RangeStateController;
