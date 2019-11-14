/**
* DevExpress Dashboard (card-layout-template-element.js)
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var serializable_model_1 = require("../../serializable-model");
var _card_layout_template_element_1 = require("./metadata/_card-layout-template-element");
var $ = require("jquery");
var ko = require("knockout");
var _default_1 = require("../../../data/localization/_default");
var CardLayoutTemplateElementBase = (function (_super) {
    __extends(CardLayoutTemplateElementBase, _super);
    function CardLayoutTemplateElementBase(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this._displayTexts = {
            'Title': "DashboardStringId.CardRowDataElementTypeTitleCaption",
            'Subtitle': "DashboardStringId.CardRowDataElementTypeSubtitleCaption",
            'ActualValue': "DashboardStringId.CardRowDataElementTypeActualValueCaption",
            'TargetValue': "DashboardStringId.CardRowDataElementTypeTargetValueCaption",
            'AbsoluteVariation': "DashboardStringId.CardRowDataElementTypeAbsoluteVariationCaption",
            'PercentVariation': "DashboardStringId.CardRowDataElementTypePercentVariationCaption",
            'PercentOfTarget': "DashboardStringId.CardRowDataElementTypePercentOfTargetCaption",
            'DimensionValue': "DashboardStringId.CardRowDataElementTypeDimensionValueCaption",
            'CardName': "DashboardStringId.CardRowDataElementTypeCardNameCaption",
            'DeltaIndicator': "DashboardStringId.CardRowDataElementTypeDeltaIndicatorCaption",
            'Sparkline': "DashboardStringId.CardRowDataElementTypeSparklineCaption"
        };
        return _this;
    }
    CardLayoutTemplateElementBase.prototype._createEditorModel = function (dimensionNames) {
        return {
            title: this._getTitle(dimensionNames),
            checked: this.visible
        };
    };
    CardLayoutTemplateElementBase.prototype.getInfo = function () {
        return _card_layout_template_element_1.cardLayoutTemplateElementBaseSerializationInfo;
    };
    CardLayoutTemplateElementBase.prototype._initDefault = function (visible, valueType, dimenstionIndex) {
        if (visible === void 0) { visible = true; }
        if (valueType === void 0) { valueType = null; }
        if (dimenstionIndex === void 0) { dimenstionIndex = 0; }
        this.visible(visible);
    };
    return CardLayoutTemplateElementBase;
}(serializable_model_1.SerializableModel));
exports.CardLayoutTemplateElementBase = CardLayoutTemplateElementBase;
var CardLayoutTemplateDeltaElement = (function (_super) {
    __extends(CardLayoutTemplateDeltaElement, _super);
    function CardLayoutTemplateDeltaElement(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    CardLayoutTemplateDeltaElement.prototype._getTitle = function () {
        var _this = this;
        return ko.computed(function () { return _default_1.getLocalizationById(_this._displayTexts.DeltaIndicator); });
    };
    return CardLayoutTemplateDeltaElement;
}(CardLayoutTemplateElementBase));
exports.CardLayoutTemplateDeltaElement = CardLayoutTemplateDeltaElement;
var CardLayoutTemplateSparklineElement = (function (_super) {
    __extends(CardLayoutTemplateSparklineElement, _super);
    function CardLayoutTemplateSparklineElement(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    CardLayoutTemplateSparklineElement.prototype._getTitle = function () {
        var _this = this;
        return ko.computed(function () { return _default_1.getLocalizationById(_this._displayTexts.Sparkline); });
    };
    return CardLayoutTemplateSparklineElement;
}(CardLayoutTemplateElementBase));
exports.CardLayoutTemplateSparklineElement = CardLayoutTemplateSparklineElement;
var CardLayoutTemplateDataElement = (function (_super) {
    __extends(CardLayoutTemplateDataElement, _super);
    function CardLayoutTemplateDataElement(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this._valueTypeSelectorModel = new CardLayoutPropertyTypeSelectorModel();
        return _this;
    }
    CardLayoutTemplateDataElement.prototype._getTitle = function (dimensionNames) {
        var _this = this;
        return ko.computed(function () {
            var res = _default_1.getLocalizationById(_this._displayTexts[_this.valueType()]);
            if (_this.valueType() === 'DimensionValue') {
                res += " " + (dimensionNames[_this.dimensionIndex()] || ("[" + _this.dimensionIndex() + "]"));
            }
            return res;
        });
    };
    CardLayoutTemplateDataElement.prototype.getInfo = function () {
        return _card_layout_template_element_1.cardLayoutTemplateDataElementSerializationInfo;
    };
    CardLayoutTemplateDataElement.prototype._initDefault = function (visible, valueType, dimenstionIndex) {
        if (dimenstionIndex === void 0) { dimenstionIndex = 0; }
        _super.prototype._initDefault.call(this, visible);
        this.valueType(valueType);
        this.dimensionIndex(dimenstionIndex);
    };
    CardLayoutTemplateDataElement.prototype._getEditorProperty = function (valueType, dimensionIndex, dimensionNames) {
        if (dimensionIndex === void 0) { dimensionIndex = 0; }
        var displayText = _default_1.getLocalizationById(this._displayTexts[valueType]);
        if (valueType === 'DimensionValue')
            displayText += " " + dimensionNames[dimensionIndex];
        return { value: valueType, displayText: displayText, dimensionIndex: dimensionIndex, key: valueType + dimensionIndex };
    };
    CardLayoutTemplateDataElement.prototype._createEditorModel = function (dimensionNames) {
        var _this = this;
        var items = ['Title', 'Subtitle', 'ActualValue', 'TargetValue', 'AbsoluteVariation', 'PercentVariation', 'PercentOfTarget', 'CardName']
            .map(function (valueType) { return _this._getEditorProperty(valueType); })
            .concat(dimensionNames.map(function (name, index) { return _this._getEditorProperty('DimensionValue', index, dimensionNames); }));
        var selected = ko.computed(function () { return _this._getEditorProperty(_this.valueType(), _this.dimensionIndex(), dimensionNames); });
        var selectValueAction = function (data, event) {
            _this._valueTypeSelectorModel.init(items, selected, event.target, function (newType) {
                _this.valueType(newType.value);
                _this.dimensionIndex(newType.dimensionIndex);
            });
        };
        return __assign({}, _super.prototype._createEditorModel.call(this, dimensionNames), { typeSelectorModel: this._valueTypeSelectorModel, selectValueType: selectValueAction });
    };
    return CardLayoutTemplateDataElement;
}(CardLayoutTemplateElementBase));
exports.CardLayoutTemplateDataElement = CardLayoutTemplateDataElement;
var CardLayoutPropertyTypeSelectorModel = (function () {
    function CardLayoutPropertyTypeSelectorModel() {
        this.items = ko.observableArray();
        this.selectedItem = ko.observable("");
        this.popupVisible = ko.observable(false);
        this.target = ko.observable(null);
    }
    CardLayoutPropertyTypeSelectorModel.prototype.init = function (items, selected, target, clickHandler) {
        this.items(items);
        this.selectedItem(selected());
        this.target($(target).closest('.dx-dashboard-card-layout-element-chooser')[0]);
        this.popupVisible(true);
        this.clickHandler = function (e) {
            clickHandler(e);
            this.popupVisible(false);
            this.target(null);
        };
    };
    return CardLayoutPropertyTypeSelectorModel;
}());
