/**
* DevExpress Dashboard (card-row-element.js)
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
var _card_row_element_1 = require("./metadata/_card-row-element");
var ko = require("knockout");
var CardRowElement = (function (_super) {
    __extends(CardRowElement, _super);
    function CardRowElement(modelJson, serializer) {
        return _super.call(this, modelJson, serializer) || this;
    }
    CardRowElement.prototype.getInfo = function () {
        return _card_row_element_1.cardRowElementSerializationsInfo;
    };
    return CardRowElement;
}(serializable_model_1.TypedSerializableModel));
exports.CardRowElement = CardRowElement;
var CardRowTextElementBase = (function (_super) {
    __extends(CardRowTextElementBase, _super);
    function CardRowTextElementBase(modelJson, serializer) {
        return _super.call(this, modelJson, serializer) || this;
    }
    CardRowTextElementBase.prototype.getInfo = function () {
        return _card_row_element_1.cardRowTextElementBaseSerializationInfo;
    };
    return CardRowTextElementBase;
}(CardRowElement));
exports.CardRowTextElementBase = CardRowTextElementBase;
var CardRowDataElement = (function (_super) {
    __extends(CardRowDataElement, _super);
    function CardRowDataElement(modelJson, serializer) {
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.title = ko.computed(function () { return _this.valueType(); });
        return _this;
    }
    CardRowDataElement.prototype.getInfo = function () {
        return _card_row_element_1.cardRowDataElementSerializationInfo;
    };
    CardRowDataElement.prototype._getDefaultItemType = function () {
        return "CardRowDataElement";
    };
    return CardRowDataElement;
}(CardRowTextElementBase));
exports.CardRowDataElement = CardRowDataElement;
var CardRowTextElement = (function (_super) {
    __extends(CardRowTextElement, _super);
    function CardRowTextElement(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    CardRowTextElement.prototype.getInfo = function () {
        return _card_row_element_1.cardRowTextElementSerializationInfo;
    };
    CardRowTextElement.prototype._getDefaultItemType = function () {
        return "CardRowTextElement";
    };
    return CardRowTextElement;
}(CardRowTextElementBase));
exports.CardRowTextElement = CardRowTextElement;
var CardRowIndicatorElement = (function (_super) {
    __extends(CardRowIndicatorElement, _super);
    function CardRowIndicatorElement(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    CardRowIndicatorElement.prototype.getInfo = function () {
        return _card_row_element_1.cardRowIndicatorElementSerializationInfo;
    };
    CardRowIndicatorElement.prototype._getDefaultItemType = function () {
        return "CardRowIndicatorElement";
    };
    return CardRowIndicatorElement;
}(CardRowElement));
exports.CardRowIndicatorElement = CardRowIndicatorElement;
