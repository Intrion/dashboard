/**
* DevExpress Dashboard (_accordion-tab.js)
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
var ko = require("knockout");
exports.KnownTabs = {
    Binding: "Binding",
    DataShaping: "DataShaping",
    NumericFormat: "NumericFormat",
    DateTimeFormat: "DateTimeFormat",
    TopN: "TopN",
    Interactivity: "Interactivity",
    Common: "Common",
    Totals: "Totals",
    AxisX: "AxisX",
    AxisY: "AxisY",
    Legend: "Legend",
    ColoringOptions: "ColoringOptions",
    ColorLegend: "ColorLegend",
    WeightedLegend: "WeightedLegend",
    Layout: "Layout",
    ConditionalFormatting: "ConditionalFormatting",
    FormatRuleCommon: "FormatRuleBinding",
    FormatRuleCondition: "FormatRuleCondition",
    FormatRuleMisc: "FormatRuleStyle",
    CustomRanges: "CustomRanges",
    Type: "Type",
    PointLabels: "PointLabels",
    DeltaOptions: "DeltaOptions",
    ScaleOptions: "ScaleOptions",
    SparklineOptions: "SparklineOptions",
    CardTemplates: "CardTemplates",
    DeltaFormats: "DeltaFormats",
    CardTemplateSettings: "CardTemplateSettings",
    ContentArrangement: "ContentArrangement",
    ShapeLabels: "ShapeLabels",
    Labels: "Labels",
    DataLayout: "DataDesign",
    DataItemsGroup: "DataItemsGroup",
    ColorScheme: "ColorScheme",
    Calculations: "Calculations",
    Expression: "Expression",
    TileOptions: "TileOptions",
    UnwrappedDataItem: "UnwrappedDataItem",
    CustomMapOptions: "CustomMapOptions"
};
var AccordionTab = (function () {
    function AccordionTab(name, category, tabModel) {
        var _this = this;
        this.name = name;
        this.category = category;
        this._tabModel = ko.observable();
        this.orderNo = undefined;
        this.visible = ko.computed(function () {
            var tabModel = _this.tabModel();
            return !!(tabModel && ((tabModel.isEmpty === undefined) || !tabModel.isEmpty()));
        });
        if (tabModel) {
            this.tabModel(tabModel);
        }
    }
    AccordionTab.prototype.grabData = function (tab) {
        var thisModel = this.tabModel(), otherModel = tab.tabModel();
        if (thisModel === otherModel) {
            return;
        }
        this.tabModel(tab.tabModel());
    };
    Object.defineProperty(AccordionTab.prototype, "tabModel", {
        get: function () { return this._tabModel; },
        set: function (model) {
            this.unsubscribeTabModel();
            this._tabModel(model);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionTab.prototype, "summary", {
        get: function () {
            return this.tabModel() && this.tabModel().summary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionTab.prototype, "buttons", {
        get: function () {
            return this.tabModel() && this.tabModel().buttons;
        },
        enumerable: true,
        configurable: true
    });
    AccordionTab.prototype.unsubscribeTabModel = function () {
        this.summary && this.summary.dispose();
    };
    AccordionTab.prototype.dispose = function () {
        this.unsubscribeTabModel();
    };
    return AccordionTab;
}());
exports.AccordionTab = AccordionTab;
var TypeAccordionTab = (function (_super) {
    __extends(TypeAccordionTab, _super);
    function TypeAccordionTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.orderNo = 50;
        _this.style = "dx-dashboard-item-type-selector";
        _this.headerTemplate = 'dx-dashboard-container-type-selector-header';
        _this.hasNoBorder = true;
        return _this;
    }
    return TypeAccordionTab;
}(AccordionTab));
exports.TypeAccordionTab = TypeAccordionTab;
var StyleAccordionTab = (function (_super) {
    __extends(StyleAccordionTab, _super);
    function StyleAccordionTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.orderNo = 55;
        _this.style = "dx-dashboard-item-type-selector";
        _this.headerTemplate = 'dx-dashboard-container-style-selector-header';
        _this.hasNoBorder = true;
        return _this;
    }
    return StyleAccordionTab;
}(AccordionTab));
exports.StyleAccordionTab = StyleAccordionTab;
var ItemGroupAccordionTab = (function (_super) {
    __extends(ItemGroupAccordionTab, _super);
    function ItemGroupAccordionTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = "dx-dashboard-items-wrapper";
        _this.orderNo = 60;
        _this.headerTemplate = 'dx-dashboard-data-items-header';
        _this.hasNoBorder = true;
        return _this;
    }
    Object.defineProperty(ItemGroupAccordionTab.prototype, "headerHeight", {
        get: function () { return this.tabModel()._getBindingModel().length * 40 + 15; },
        enumerable: true,
        configurable: true
    });
    return ItemGroupAccordionTab;
}(AccordionTab));
exports.ItemGroupAccordionTab = ItemGroupAccordionTab;
var BindingAccordionTab = (function (_super) {
    __extends(BindingAccordionTab, _super);
    function BindingAccordionTab(name, category) {
        var _this = _super.call(this, name, category) || this;
        _this.name = name;
        _this.category = category;
        _this.tabTemplate = "dx-dashboard-data-item-general";
        _this.orderNo = 70;
        return _this;
    }
    Object.defineProperty(BindingAccordionTab.prototype, "summaryHint", {
        get: function () {
            return this.tabModel() && this.tabModel().summaryHint;
        },
        enumerable: true,
        configurable: true
    });
    BindingAccordionTab.prototype.unsubscribeTabModel = function () {
        _super.prototype.unsubscribeTabModel.call(this);
        this.summaryHint && this.summaryHint.dispose();
    };
    BindingAccordionTab.prototype.grabData = function (tab) {
        var thisModel = this.tabModel(), otherModel = tab.tabModel();
        if (thisModel == otherModel) {
            return;
        }
        if (thisModel.dataItemLink !== otherModel.dataItemLink) {
            this.tabModel(tab.tabModel());
        }
        else {
            this.unsubscribeTabModel();
            thisModel.additionalProperties(otherModel.additionalProperties());
            thisModel.dataMemberPath(otherModel.dataMemberPath());
            thisModel.choosenField(otherModel.choosenField());
            thisModel.dataItemLink = otherModel.dataItemLink;
            thisModel.dataSourceBrowser = otherModel.dataSourceBrowser;
            thisModel.summary = otherModel.summary;
            thisModel.summaryHint = otherModel.summaryHint;
        }
    };
    return BindingAccordionTab;
}(AccordionTab));
exports.BindingAccordionTab = BindingAccordionTab;
