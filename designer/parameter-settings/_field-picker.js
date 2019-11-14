/**
* DevExpress Dashboard (_field-picker.js)
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
var _expression_editor_item_provider_1 = require("../expression-editor/_expression-editor-item-provider");
var $ = require("jquery");
var ko = require("knockout");
var FieldListPicker = (function () {
    function FieldListPicker(dataSourceBrowser, _value, model, disabled) {
        this.disabled = disabled;
        var self = this;
        this.treeListController = new DashboardTreeListFieldController(_value);
        this.pathToMembers = ko.computed(function () { return [model.dataSource(), model.dataMember()].filter(function (item) { return !!item; }).join("."); });
        this.pathToMembers.subscribe(function () { return _value(null); });
        this.displayValue = ko.computed(function () {
            return !!_value() ? _value() : "";
        });
        this.value = ko.computed({
            read: function () {
                return _value();
            },
            write: function (val) {
                if (!val) {
                    _value(null);
                }
            }
        });
        this.itemsProvider = new _expression_editor_item_provider_1.ExpressionEditorItemsProvider(dataSourceBrowser, dataSourceBrowser.parameters && dataSourceBrowser.parameters(), model.dataSource, model.dataMember);
    }
    return FieldListPicker;
}());
var DashboardTreeListFieldController = (function (_super) {
    __extends(DashboardTreeListFieldController, _super);
    function DashboardTreeListFieldController(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    DashboardTreeListFieldController.prototype.hasItems = function (item) {
        return item['hasItems'];
    };
    DashboardTreeListFieldController.prototype.canSelect = function (value) {
        return !value.hasItems;
    };
    DashboardTreeListFieldController.prototype.select = function (value) {
        this._value(value.data["field"].dataMember());
    };
    return DashboardTreeListFieldController;
}(dx_analytics_core_1.default.Analytics.Widgets.Internal.TreeListController));
ko.bindingHandlers['dx-dashboard-field-list-drop-down'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var $element = $(element);
        $element.children().remove();
        $element.addClass("dx-dashboard-field-picker");
        var values = valueAccessor(), model = new FieldListPicker(values.dataSourceBrowser, values.value, values.model, values.disabled);
        ko.applyBindingsToNode(element, { template: { name: 'dx-dashboard-field-picker', data: model } }, bindingContext);
        return { controlsDescendantBindings: true };
    }
};
exports._fieldPickerModuleId = "_field-picker";
