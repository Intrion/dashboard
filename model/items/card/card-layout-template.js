/**
* DevExpress Dashboard (card-layout-template.js)
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
var serializable_model_1 = require("../../serializable-model");
var _card_layout_template_1 = require("./metadata/_card-layout-template");
var ko = require("knockout");
var cardLayoutTypes = {
    Stretched: 'Stretched',
    Centered: 'Centered',
    Compact: 'Compact',
    Lightweight: 'Lightweight',
    Custom: 'Custom',
    None: 'None'
};
var cardLayoutTemplateNames = {
    Stretched: "DashboardStringId.CardLayoutTemplateStretchedCaption",
    Centered: "DashboardStringId.CardLayoutTemplateCenteredCaption",
    Compact: "DashboardStringId.CardLayoutTemplateCompactCaption",
    Lightweight: "DashboardStringId.CardLayoutTemplateLightweightCaption",
    Custom: "DashboardStringId.CardLayoutTemplateCustomCaption",
    None: "DashboardStringId.CardLayoutTemplateNoneCaption"
};
var CardLayoutTemplate = (function (_super) {
    __extends(CardLayoutTemplate, _super);
    function CardLayoutTemplate(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    CardLayoutTemplate.prototype.getInfo = function () {
        return _card_layout_template_1.templateSerializationInfo;
    };
    CardLayoutTemplate.prototype._resetToDefaults = function () { };
    CardLayoutTemplate.prototype.clone = function () {
        var clonedTemplate = this._createInstance();
        this._clone(this, clonedTemplate);
        return clonedTemplate;
    };
    CardLayoutTemplate.prototype._clone = function (target, source) {
        var serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer();
        serializer.deserialize(source, serializer.serialize(target));
    };
    return CardLayoutTemplate;
}(serializable_model_1.SerializableModel));
exports.CardLayoutTemplate = CardLayoutTemplate;
var CardEmptyLayoutTemplate = (function (_super) {
    __extends(CardEmptyLayoutTemplate, _super);
    function CardEmptyLayoutTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allowEdit = ko.observable(false);
        _this.isEmpty = ko.observable(true);
        return _this;
    }
    Object.defineProperty(CardEmptyLayoutTemplate.prototype, "title", {
        get: function () {
            return cardLayoutTemplateNames[this.getType()];
        },
        enumerable: true,
        configurable: true
    });
    CardEmptyLayoutTemplate.prototype._collectProperties = function (dimensionNames) {
        return [];
    };
    CardEmptyLayoutTemplate.prototype.getType = function () {
        return cardLayoutTypes.None;
    };
    CardEmptyLayoutTemplate.prototype.getInfo = function () {
        return [];
    };
    CardEmptyLayoutTemplate.prototype._createInstance = function () {
        return this;
    };
    return CardEmptyLayoutTemplate;
}(CardLayoutTemplate));
exports.CardEmptyLayoutTemplate = CardEmptyLayoutTemplate;
var CardCustomLayoutTemplate = (function (_super) {
    __extends(CardCustomLayoutTemplate, _super);
    function CardCustomLayoutTemplate(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.allowEdit = ko.observable(true);
        !_this.type() && _this.type(cardLayoutTypes.Custom);
        _this.title = cardLayoutTemplateNames[_this.type()];
        return _this;
    }
    CardCustomLayoutTemplate.prototype.getInfo = function () {
        return _card_layout_template_1.customTemplateSerializationInfo;
    };
    CardCustomLayoutTemplate.prototype._collectProperties = function (dimensionNames) {
        return [];
    };
    CardCustomLayoutTemplate.prototype._resetToDefaults = function () { };
    CardCustomLayoutTemplate.prototype.getType = function () {
        return this.type();
    };
    CardCustomLayoutTemplate.prototype._createInstance = function () {
        return new CardCustomLayoutTemplate();
    };
    return CardCustomLayoutTemplate;
}(CardLayoutTemplate));
exports.CardCustomLayoutTemplate = CardCustomLayoutTemplate;
var CardCenteredLayoutTemplate = (function (_super) {
    __extends(CardCenteredLayoutTemplate, _super);
    function CardCenteredLayoutTemplate(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.allowEdit = ko.observable(true);
        !_this.type() && _this.type(cardLayoutTypes.Centered);
        _this.title = cardLayoutTemplateNames[_this.type()];
        return _this;
    }
    CardCenteredLayoutTemplate.prototype.getInfo = function () {
        return _card_layout_template_1.deltaCompactTemplateSerializationInfo;
    };
    CardCenteredLayoutTemplate.prototype._collectProperties = function (dimensionNames) {
        return [
            this.mainValue._createEditorModel(dimensionNames),
            this.subValue._createEditorModel(dimensionNames),
            this.bottomValue._createEditorModel(dimensionNames),
            this.bottomSubValue1._createEditorModel(dimensionNames),
            this.bottomSubValue2._createEditorModel(dimensionNames),
            this.deltaIndicator._createEditorModel(dimensionNames),
            this.sparkline._createEditorModel(dimensionNames)
        ];
    };
    CardCenteredLayoutTemplate.prototype._resetToDefaults = function () {
        this.mainValue._initDefault(true, 'Title');
        this.subValue._initDefault(true, 'Subtitle');
        this.bottomValue._initDefault(true, 'ActualValue');
        this.bottomSubValue1._initDefault(true, 'AbsoluteVariation');
        this.bottomSubValue2._initDefault(true, 'PercentVariation');
        this.deltaIndicator._initDefault(true);
        this.sparkline._initDefault(true);
        this.maxWidth(270);
    };
    CardCenteredLayoutTemplate.prototype.getType = function () {
        return this.type();
    };
    CardCenteredLayoutTemplate.prototype._createInstance = function () {
        return new CardCenteredLayoutTemplate();
    };
    return CardCenteredLayoutTemplate;
}(CardLayoutTemplate));
exports.CardCenteredLayoutTemplate = CardCenteredLayoutTemplate;
var CardStretchedLayoutTemplate = (function (_super) {
    __extends(CardStretchedLayoutTemplate, _super);
    function CardStretchedLayoutTemplate(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.allowEdit = ko.observable(true);
        !_this.type() && _this.type(cardLayoutTypes.Stretched);
        _this.title = cardLayoutTemplateNames[_this.type()];
        return _this;
    }
    CardStretchedLayoutTemplate.prototype.getInfo = function () {
        return _card_layout_template_1.autofitTemplateSerializationInfo;
    };
    CardStretchedLayoutTemplate.prototype._collectProperties = function (dimensionNames) {
        return [
            this.topValue._createEditorModel(dimensionNames),
            this.mainValue._createEditorModel(dimensionNames),
            this.subValue._createEditorModel(dimensionNames),
            this.bottomValue1._createEditorModel(dimensionNames),
            this.bottomValue2._createEditorModel(dimensionNames),
            this.deltaIndicator._createEditorModel(dimensionNames),
            this.sparkline._createEditorModel(dimensionNames)
        ];
    };
    CardStretchedLayoutTemplate.prototype._resetToDefaults = function () {
        this.topValue._initDefault(true, 'ActualValue');
        this.mainValue._initDefault(true, 'Title');
        this.subValue._initDefault(true, 'Subtitle');
        this.bottomValue1._initDefault(true, 'PercentVariation');
        this.bottomValue2._initDefault(true, 'AbsoluteVariation');
        this.deltaIndicator._initDefault(true);
        this.sparkline._initDefault(true);
    };
    CardStretchedLayoutTemplate.prototype.getType = function () {
        return this.type();
    };
    CardStretchedLayoutTemplate.prototype._createInstance = function () {
        return new CardStretchedLayoutTemplate();
    };
    return CardStretchedLayoutTemplate;
}(CardLayoutTemplate));
exports.CardStretchedLayoutTemplate = CardStretchedLayoutTemplate;
var CardLightweightLayoutTemplate = (function (_super) {
    __extends(CardLightweightLayoutTemplate, _super);
    function CardLightweightLayoutTemplate(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.allowEdit = ko.observable(true);
        !_this.type() && _this.type(cardLayoutTypes.Lightweight);
        _this.title = cardLayoutTemplateNames[_this.type()];
        return _this;
    }
    CardLightweightLayoutTemplate.prototype.getInfo = function () {
        return _card_layout_template_1.nameValueTemplateSerializationInfo;
    };
    CardLightweightLayoutTemplate.prototype._collectProperties = function (dimensionNames) {
        return [
            this.mainValue._createEditorModel(dimensionNames),
            this.subValue._createEditorModel(dimensionNames),
            this.bottomValue._createEditorModel(dimensionNames),
            this.deltaIndicator._createEditorModel(dimensionNames),
            this.sparkline._createEditorModel(dimensionNames)
        ];
    };
    CardLightweightLayoutTemplate.prototype._resetToDefaults = function () {
        this.mainValue._initDefault(true, 'ActualValue');
        this.subValue._initDefault(true, 'Title');
        this.bottomValue._initDefault(true, 'Subtitle');
        this.deltaIndicator._initDefault(false);
        this.sparkline._initDefault(false);
    };
    CardLightweightLayoutTemplate.prototype.getType = function () {
        return this.type();
    };
    CardLightweightLayoutTemplate.prototype._createInstance = function () {
        return new CardLightweightLayoutTemplate();
    };
    return CardLightweightLayoutTemplate;
}(CardLayoutTemplate));
exports.CardLightweightLayoutTemplate = CardLightweightLayoutTemplate;
var CardCompactLayoutTemplate = (function (_super) {
    __extends(CardCompactLayoutTemplate, _super);
    function CardCompactLayoutTemplate(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.allowEdit = ko.observable(true);
        !_this.type() && _this.type(cardLayoutTypes.Compact);
        _this.title = cardLayoutTemplateNames[_this.type()];
        return _this;
    }
    CardCompactLayoutTemplate.prototype.getInfo = function () {
        return _card_layout_template_1.deltaCompactTemplateSerializationInfo;
    };
    CardCompactLayoutTemplate.prototype._collectProperties = function (dimensionNames) {
        return [
            this.mainValue._createEditorModel(dimensionNames),
            this.subValue._createEditorModel(dimensionNames),
            this.bottomValue._createEditorModel(dimensionNames),
            this.bottomSubValue1._createEditorModel(dimensionNames),
            this.bottomSubValue2._createEditorModel(dimensionNames),
            this.deltaIndicator._createEditorModel(dimensionNames),
            this.sparkline._createEditorModel(dimensionNames)
        ];
    };
    CardCompactLayoutTemplate.prototype._resetToDefaults = function () {
        this.mainValue._initDefault(true, 'Title');
        this.subValue._initDefault(true, 'Subtitle');
        this.bottomValue._initDefault(true, 'ActualValue');
        this.bottomSubValue1._initDefault(true, 'AbsoluteVariation');
        this.bottomSubValue2._initDefault(true, 'PercentVariation');
        this.deltaIndicator._initDefault(true);
        this.sparkline._initDefault(true);
        this.maxWidth(270);
    };
    CardCompactLayoutTemplate.prototype.getType = function () {
        return this.type();
    };
    CardCompactLayoutTemplate.prototype._createInstance = function () {
        return new CardCompactLayoutTemplate();
    };
    return CardCompactLayoutTemplate;
}(CardLayoutTemplate));
exports.CardCompactLayoutTemplate = CardCompactLayoutTemplate;
