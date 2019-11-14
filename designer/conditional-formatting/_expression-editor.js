/**
* DevExpress Dashboard (_expression-editor.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var ko = require("knockout");
var RuleExpressionEditor = (function () {
    function RuleExpressionEditor(params) {
        var _this = this;
        this.criteriaString = ko.observable();
        this.editor = new dx_analytics_core_1.default.Analytics.Widgets.FilterEditor(params.options, params.fieldListProvider, false, params.displayNameProvider);
        ko.computed(function () {
            var displayExpressionConverter = new dx_analytics_core_1.default.Analytics.Internal.DisplayExpressionConverter(params.displayNameProvider);
            displayExpressionConverter.toDisplayExpression(params.options().path(), params.options().value()).done(function (result) {
                _this.criteriaString(result);
            }).fail(function () {
                _this.criteriaString(params.options().value());
            });
        });
    }
    RuleExpressionEditor.prototype.show = function () {
        this.editor.popupVisible(true);
    };
    return RuleExpressionEditor;
}());
exports.RuleExpressionEditor = RuleExpressionEditor;
ko.components.register("dx-dashboard-rule-expression-editor", {
    viewModel: RuleExpressionEditor,
    template: { element: 'dx-dashboard-rule-expression-editor' }
});
