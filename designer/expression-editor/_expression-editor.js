/**
* DevExpress Dashboard (_expression-editor.js)
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
var _dx_designer_integration_1 = require("../_dx-designer-integration");
var _flat_item_provider_wrapper_1 = require("./_flat-item-provider-wrapper");
var _expression_editor_functions_1 = require("./_expression-editor-functions");
var $ = require("jquery");
var ko = require("knockout");
var _utils_1 = require("../../data/_utils");
var DashboardExpressionEditor = (function (_super) {
    __extends(DashboardExpressionEditor, _super);
    function DashboardExpressionEditor(options, fieldListProvider, disabled) {
        var _this = this;
        options.theme = _dx_designer_integration_1.getAceTheme();
        _this = _super.call(this, options, fieldListProvider, disabled) || this;
        var createCompletersBase = _this.languageHelper.createCompleters;
        _this.languageHelper.createCompleters = function (e, b, v) {
            var completers = createCompletersBase.call(_this.languageHelper, e, b, v);
            completers[0]["_fieldListProvider"] = new _flat_item_provider_wrapper_1.FlatItemProviderWrapper(fieldListProvider());
            completers.forEach(function (completer) { return _this._disposables.push(completer); });
            return completers;
        };
        var saveHandler = function (sender) {
            var val = "";
            if (_this.aceAvailable) {
                val = _this.editorContainer().getSession().getValue();
            }
            else {
                val = _this.textAreaValue();
            }
            try {
                if (!!val) {
                    dx_analytics_core_1.default.Analytics.Criteria.CriteriaOperator.parse(val);
                    options.value(val);
                    _this.isValid(true);
                    options.isValid(true);
                }
                else {
                    _this.isValid(false);
                    options.isValid(false);
                }
            }
            catch (exception) {
                var result = dx_analytics_core_1.default.Analytics.Criteria.CriteriaOperator.getNotValidRange(val, exception.message);
                var element = _utils_1.$unwrap(sender.element);
                var textArea = $(element).parents(".dx-overlay-content").find(".dx-expressioneditor").find(":input")[0];
                textArea && textArea.setSelectionRange(result.start, result.end);
                _this.isValid(false);
                options.isValid(false);
            }
            finally {
                return _this.isValid();
            }
        };
        options["saveHandler"] && options["saveHandler"](saveHandler);
        return _this;
    }
    DashboardExpressionEditor.prototype.focus = function () {
        this.editorContainer() && this.editorContainer().focus();
    };
    return DashboardExpressionEditor;
}(dx_analytics_core_1.default.Analytics.Widgets.ExpressionEditor));
exports.DashboardExpressionEditor = DashboardExpressionEditor;
ko.bindingHandlers['dshdExpressionEditor'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var $element = $(element);
        $element.children().remove();
        $element.addClass("dx-filtereditor");
        var templateHtml = dx_analytics_core_1.default.Analytics.Widgets.Internal.getTemplate('dx-expressioneditor-main'), $element = $element.append(templateHtml), editorElement = $element.children()[0], values = valueAccessor();
        values.options.functions = _expression_editor_functions_1.getExpressionEditorFunctions();
        var editor = new DashboardExpressionEditor(values.options, ko.observable(values.fieldListProvider), viewModel.disabled);
        editor.popupVisible(true);
        ko.utils.domNodeDisposal.addDisposeCallback(editorElement, function () {
            editor.dispose();
        });
        ko.applyBindings(editor, editorElement);
        editor.focus();
        return { controlsDescendantBindings: true };
    }
};
