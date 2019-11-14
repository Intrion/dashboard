/**
* DevExpress Dashboard (_lookup-values-viewmodel.js)
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
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var look_up_value_1 = require("../../model/parameters/look-up-value");
var ko = require("knockout");
var data_source_1 = require("devextreme/data/data_source");
var _default_1 = require("../../data/localization/_default");
var LookupValuesViewModel = (function () {
    function LookupValuesViewModel(_parameter, _dataSourceBrowser, _container) {
        var _this = this;
        this._parameter = _parameter;
        this._dataSourceBrowser = _dataSourceBrowser;
        this.items = ko.observableArray();
        this.disabled = undefined;
        this.searchEnabled = true;
        this.valueExpr = "Value";
        this.searchExpr = ["Value", "DisplayText"];
        this.displayExpr = "DisplayText";
        this.noDataText = _default_1.getLocalizationById('DashboardStringId.FilterElementNoDataToDisplay');
        this.placeholder = _default_1.getLocalizationById('DashboardStringId.ParametersSelectorText');
        this.value = ko.observableArray();
        this.showClearButton = true;
        this.multiline = false;
        this.showSelectionControls = true;
        this.disabled = _parameter.selectAllValues;
        ko.computed(function () {
            if (!!_parameter.staticListLookUpSettings()) {
                _this.items(_parameter.staticListLookUpSettings().values().filter(function (lookUpValue) { return !!lookUpValue.value(); }).map(function (lookUpValue) { return { Value: lookUpValue.value(), DisplayText: lookUpValue.value() }; }));
            }
            else if (!!_parameter.dynamicListLookUpSettings()) {
                _this.parameterValues = _this._dataSourceBrowser.getParameterValues(_parameter.type(), _parameter.dynamicListLookUpSettings());
                if (_this.parameterValues().length === 0) {
                    _this.parameterValues.subscribe(function (newValues) { return _this.items(newValues); });
                }
                else {
                    _this.items(_this.parameterValues());
                }
            }
        });
        this.dataSource = ko.computed(function () {
            return new data_source_1.default({
                store: new dx_analytics_core_1.default.Analytics.Internal.SortedArrayStore(_this.items(), "displayValue"),
                paginate: true,
                pageSize: 100
            });
        });
        this.dropDownOptions = {
            container: _container
        };
    }
    return LookupValuesViewModel;
}());
exports.LookupValuesViewModel = LookupValuesViewModel;
var LookupDefaultValuesViewModel = (function (_super) {
    __extends(LookupDefaultValuesViewModel, _super);
    function LookupDefaultValuesViewModel(_parameter, _dataSourceBrowser, container) {
        var _this = _super.call(this, _parameter, _dataSourceBrowser, container) || this;
        _this.onValueChanged = function (e) {
            _this._parameter.defaultValues((e.value || []).map(function (val) {
                var lookUpValue = new look_up_value_1.LookUpValue();
                lookUpValue.value(val);
                return lookUpValue;
            }));
        };
        _this.value(_parameter._valuesOfDefaultValues.peek());
        return _this;
    }
    return LookupDefaultValuesViewModel;
}(LookupValuesViewModel));
exports.LookupDefaultValuesViewModel = LookupDefaultValuesViewModel;
var LookupDefaultValueViewModel = (function (_super) {
    __extends(LookupDefaultValueViewModel, _super);
    function LookupDefaultValueViewModel(_parameter, _dataSourceBrowser, container) {
        var _this = _super.call(this, _parameter, _dataSourceBrowser, container) || this;
        _this.onValueChanged = function (e) {
            _this._parameter.defaultValue(e.value);
        };
        _this.value(_parameter.defaultValue.peek());
        return _this;
    }
    return LookupDefaultValueViewModel;
}(LookupValuesViewModel));
exports.LookupDefaultValueViewModel = LookupDefaultValueViewModel;
