/**
* DevExpress Dashboard (_expression-editor.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _expression_editor_functions_1 = require("../expression-editor/_expression-editor-functions");
var _expression_editor_1 = require("../expression-editor/_expression-editor");
var ko = require("knockout");
var CalculationExpressionEditor = (function () {
    function CalculationExpressionEditor(params) {
        var expressionEditorOptions = params.options();
        expressionEditorOptions.functions = _expression_editor_functions_1.getExpressionEditorFunctions();
        this.editor = new _expression_editor_1.DashboardExpressionEditor(expressionEditorOptions, params.fieldListProvider);
        this.editor.textAreaValue(expressionEditorOptions.value());
        this.criteriaString = ko.computed(function () {
            var criteria = params.options().value();
            return criteria;
        });
    }
    CalculationExpressionEditor.prototype.show = function () {
        this.editor.popupVisible(true);
    };
    return CalculationExpressionEditor;
}());
exports.CalculationExpressionEditor = CalculationExpressionEditor;
ko.components.register("dx-dashboard-calculation-expression-editor", {
    viewModel: CalculationExpressionEditor,
    template: { element: 'dx-dashboard-calculation-expression-editor' }
});
