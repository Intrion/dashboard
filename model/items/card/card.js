/**
* DevExpress Dashboard (card.js)
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
var card_layout_template_1 = require("./card-layout-template");
var kpi_element_1 = require("../kpi/kpi-element");
var _card_1 = require("./metadata/_card");
var ko = require("knockout");
var emptyCardTemplate = new card_layout_template_1.CardEmptyLayoutTemplate();
var Card = (function (_super) {
    __extends(Card, _super);
    function Card(dataItemProvider, modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        var _this = _super.call(this, dataItemProvider, modelJson, serializer) || this;
        _this.layoutTemplate = ko.observable();
        ko.computed(function () {
            _this.__targetValue._specifics.skipFormatting = !!_this.__actualValue.uniqueName();
        });
        _this.layoutTemplate(Card._createTemplate(modelJson.LayoutTemplate, serializer));
        return _this;
    }
    Card._createTemplate = function (jsonModel, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return jsonModel ? new Card.templateTypes[jsonModel["@Type"]](jsonModel, serializer) : emptyCardTemplate;
    };
    Card.prototype.getInfo = function () {
        return _card_1.cardSerializationsInfo;
    };
    Card.prototype._isTypeEmpty = function () {
        return this.layoutTemplate().getType() === emptyCardTemplate.getType();
    };
    Card.prototype._setTemplateSwitchingOptions = function (newTemplate) {
        if (this._isTypeEmpty()) {
            this._switchToCardDeltaOptions();
        }
        else if (newTemplate.getType() === emptyCardTemplate.getType()) {
            this._switchToKpiDeltaOptions();
        }
        this.layoutTemplate(newTemplate);
    };
    Card.prototype._switchToCardDeltaOptions = function () {
        this.cardDeltaOptions.resultIndicationMode(this.deltaOptions.resultIndicationMode());
        this.cardDeltaOptions.resultIndicationThreshold(this.deltaOptions.resultIndicationThreshold());
        this.cardDeltaOptions.resultIndicationThresholdType(this.deltaOptions.resultIndicationThresholdType());
    };
    Card.prototype._switchToKpiDeltaOptions = function () {
        this.deltaOptions.resultIndicationMode(this.cardDeltaOptions.resultIndicationMode());
        this.deltaOptions.resultIndicationThreshold(this.cardDeltaOptions.resultIndicationThreshold());
        this.deltaOptions.resultIndicationThresholdType(this.cardDeltaOptions.resultIndicationThresholdType());
    };
    Card.templateTypes = {
        Stretched: card_layout_template_1.CardStretchedLayoutTemplate,
        Centered: card_layout_template_1.CardCenteredLayoutTemplate,
        Compact: card_layout_template_1.CardCompactLayoutTemplate,
        Lightweight: card_layout_template_1.CardLightweightLayoutTemplate,
        Custom: card_layout_template_1.CardCustomLayoutTemplate
    };
    return Card;
}(kpi_element_1.KpiElement));
exports.Card = Card;
