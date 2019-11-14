/**
* DevExpress Dashboard (_filter-utils.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var _dx_designer_integration_1 = require("../_dx-designer-integration");
var _parameters_helper_1 = require("../../model/parameters/_parameters-helper");
var ko = require("knockout");
exports.createItemFilterOptions = function (expression, item, _dataSourceBrowser, title) {
    return ko.computed(function () {
        var options = new dx_analytics_core_1.default.Analytics.Widgets.FilterStringOptions(expression, undefined, undefined, title);
        options.helper.aceTheme = _dx_designer_integration_1.getAceTheme();
        if (_dataSourceBrowser && _dataSourceBrowser.parameters) {
            options.helper.parameters(_dataSourceBrowser.parameters().map(function (parameter) {
                var shortTypeName = parameter.type().split(",")[0];
                return { displayName: parameter.name(), name: parameter.name(), specifics: _parameters_helper_1.ParameterHelper.typeValues.filter(function (typeDescription) { return typeDescription.value === shortTypeName; })[0].specifics || "string" };
            }));
            options.helper.canChoiceParameters = true;
        }
        if (item) {
            options["item"] = item;
        }
        return options;
    });
};
