/**
* DevExpress Dashboard (card-row.js)
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
var _card_row_1 = require("./metadata/_card-row");
var card_row_element_1 = require("./card-row-element");
var CardRowBase = (function (_super) {
    __extends(CardRowBase, _super);
    function CardRowBase(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    CardRowBase.prototype.getInfo = function () {
        return _card_row_1.cardRowBaseSerializationInfo;
    };
    return CardRowBase;
}(serializable_model_1.TypedSerializableModel));
exports.CardRowBase = CardRowBase;
var CardRow = (function (_super) {
    __extends(CardRow, _super);
    function CardRow(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.elements = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.CardRowElements, function (item) { return _this.createRowElement(item, serializer); });
        return _this;
    }
    CardRow.prototype.createRowElement = function (elementJSON, serializer) {
        var itemType = elementJSON["@ItemType"];
        return new CardRow.elementItemTypes[itemType].constructor(elementJSON, serializer);
    };
    CardRow.prototype.getInfo = function () {
        return _card_row_1.cardRowSerializationInfo;
    };
    CardRow.prototype._getDefaultItemType = function () {
        return "CardRow";
    };
    CardRow.elementItemTypes = {
        "CardRowDataElement": {
            constructor: card_row_element_1.CardRowDataElement
        },
        "CardRowIndicatorElement": {
            constructor: card_row_element_1.CardRowIndicatorElement
        },
        "CardRowTextElement": {
            constructor: card_row_element_1.CardRowTextElement
        }
    };
    return CardRow;
}(CardRowBase));
exports.CardRow = CardRow;
var CardSparklineRow = (function (_super) {
    __extends(CardSparklineRow, _super);
    function CardSparklineRow(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    CardSparklineRow.prototype.getInfo = function () {
        return _card_row_1.cardSparklineRowSerializationInfo;
    };
    CardSparklineRow.prototype._getDefaultItemType = function () {
        return "CardSparklineRow";
    };
    return CardSparklineRow;
}(CardRowBase));
exports.CardSparklineRow = CardSparklineRow;
