/**
* DevExpress Dashboard (card-item.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var kpi_item_1 = require("../kpi/kpi-item");
var _utils_1 = require("../../internal/_utils");
var card_1 = require("./card");
var _card_item_1 = require("./metadata/_card-item");
var card_calc_window_definition_1 = require("../../data-item/window-definition/card-calc-window-definition");
var serializable_model_1 = require("../../serializable-model");
var CardItem = (function (_super) {
    __extends(CardItem, _super);
    function CardItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.cards = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Cards, function (item) { return new card_1.Card(_this, item, serializer); });
        _this._attachDataItem(_this, _card_item_1.cardSparklineArgument.propertyName);
        return _this;
    }
    CardItem.prototype.getInfo = function () {
        return _card_item_1.cardDashboardItemSerializationsInfo;
    };
    CardItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.cards.removeAll();
    };
    CardItem.prototype._getDefaultItemType = function () {
        return "Card";
    };
    CardItem.prototype._getLayersCount = function () {
        return !!this.__seriesDimensions && this.__seriesDimensions().length > 0 ? this.cards().length : 0;
    };
    CardItem.prototype._getLayerName = function () {
        return this._getDataItemContainerDisplayName(this.cards()[this._selectedElementIndex() || 0]);
    };
    CardItem.prototype._getDefaultCalculationWindowDefinition = function () {
        return new card_calc_window_definition_1.CardWindowDefinition();
    };
    CardItem.prototype._itemInteractivityByColumnAxis = function () {
        return false;
    };
    CardItem.prototype._getInteractivityAxisDimensionCount = function () {
        return this.seriesDimensions().length;
    };
    __decorate([
        _utils_1.collectionItemType("Card")
    ], CardItem.prototype, "cards", void 0);
    return CardItem;
}(kpi_item_1.KpiItem));
exports.CardItem = CardItem;
serializable_model_1.itemTypesMap["Card"] = { type: CardItem, groupName: 'common', title: "DashboardStringId.DefaultNameCardItem", index: 60 };
