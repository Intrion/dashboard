/**
* DevExpress Dashboard (card-layout.js)
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
var card_row_1 = require("./card-row");
var _card_layout_1 = require("./metadata/_card-layout");
var ko = require("knockout");
var CardLayout = (function (_super) {
    __extends(CardLayout, _super);
    function CardLayout(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.templateID = ko.observable(-1);
        _this.rows = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.CardRows, function (item) { return _this.createRow(item, serializer); });
        return _this;
    }
    CardLayout.prototype.createRow = function (elementJSON, serializer) {
        var itemType = elementJSON["@ItemType"];
        return new CardLayout.rowTypes[itemType].constructor(elementJSON, serializer);
    };
    CardLayout.prototype.getInfo = function () {
        return _card_layout_1.cardLayoutSerializationInfo;
    };
    CardLayout.prototype.grabFrom = function (newLayout) {
        this.minWidth = newLayout.minWidth;
        this.maxWidth = newLayout.maxWidth;
        this.rows(newLayout.rows());
    };
    CardLayout.rowTypes = {
        "CardRow": {
            constructor: card_row_1.CardRow
        },
        "CardSparklineRow": {
            constructor: card_row_1.CardSparklineRow
        }
    };
    return CardLayout;
}(serializable_model_1.SerializableModel));
exports.CardLayout = CardLayout;
