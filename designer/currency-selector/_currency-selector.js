/**
* DevExpress Dashboard (_currency-selector.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _currencies_1 = require("./_currencies");
var _knockout_utils_1 = require("../../model/internal/_knockout-utils");
var ko = require("knockout");
var _format_helper_1 = require("../../data/_format-helper");
var _default_1 = require("../../data/localization/_default");
var CurrencyInfo = (function () {
    function CurrencyInfo(name, displayText, previewText) {
        this.name = name;
        this.displayText = displayText;
        this.previewText = previewText;
    }
    return CurrencyInfo;
}());
exports.CurrencyInfo = CurrencyInfo;
var CultureInfo = (function () {
    function CultureInfo() {
    }
    return CultureInfo;
}());
exports.CultureInfo = CultureInfo;
var CurrencySelector = (function () {
    function CurrencySelector(currencyCultureName, disabled) {
        var _this = this;
        this.disabled = disabled;
        this._getDefaultCurrencyInfo = function () {
            var info = new CurrencyInfo(null, _default_1.getLocalizationById("DashboardStringId.DashboardCurrencyUseCurrentCurrency"), this.getPreviewText(123, null));
            info.cultures = [{
                    name: null,
                    displayText: _default_1.getLocalizationById("DashboardStringId.DashboardCurrencyUseCurrentCurrency")
                }];
            return info;
        };
        this.getPreviewText = function (value, currency) {
            var dashboardFormat = {
                format: 'currency',
                currency: currency
            };
            return _format_helper_1.formatHelper.format(value, dashboardFormat);
        };
        this.selectedCurrency = ko.observable(this._getDefaultCurrencyInfo());
        this.selectedCulture = ko.observable(this._getDefaultCurrencyInfo().cultures[0]);
        this.previewPositive = ko.pureComputed(function () { return _this.getPreviewText(123, _this.selectedCurrency().name); });
        this.previewNegative = ko.pureComputed(function () { return _this.getPreviewText(-123, _this.selectedCurrency().name); });
        this.currencies = ko.observableArray([this._getDefaultCurrencyInfo()].concat(_currencies_1.CURRENCIES.map(function (currency) {
            var currencyInfo = new CurrencyInfo(currency.name, currency.displayName, _this.getPreviewText(123, currency.name));
            currencyInfo.cultures = currency.cultures.map(function (culture) {
                var cultureInfo = new CultureInfo();
                cultureInfo.name = culture.name;
                cultureInfo.displayText = culture.displayName;
                if (cultureInfo.name === currencyCultureName()) {
                    _this.selectedCurrency(currencyInfo);
                    _this.selectedCulture(cultureInfo);
                }
                return cultureInfo;
            });
            return currencyInfo;
        }).sort(function (c1, c2) { return c1.displayText.localeCompare(c2.displayText); })));
        _knockout_utils_1.subscribeWithPrev(this.selectedCurrency, function (prevCurrencyInfo, currencyInfo) {
            if (currencyInfo && prevCurrencyInfo !== currencyInfo) {
                _this.selectedCulture(currencyInfo.cultures[0]);
            }
        });
        this.selectedCulture.subscribe(function (currencyCultureInfo) {
            currencyCultureName(currencyCultureInfo.name);
        });
    }
    return CurrencySelector;
}());
exports.CurrencySelector = CurrencySelector;
ko.components.register('dx-dashboard-currency-selector', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new CurrencySelector(params.currencyCultureName, ko.observable(false));
        }
    },
    template: { element: 'dx-dash-currency-selector' }
});
ko.components.register('dx-dashboard-currency-editor', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new CurrencySelector(params.currencyCultureName, params.disabled);
        }
    },
    template: { element: 'dx-dashboard-currency-editor-template' }
});
