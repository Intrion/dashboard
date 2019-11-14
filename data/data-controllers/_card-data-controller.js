/**
* DevExpress Dashboard (_card-data-controller.js)
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
var _kpi_data_controller_1 = require("./_kpi-data-controller");
var $ = require("jquery");
var cardDataController = (function (_super) {
    __extends(cardDataController, _super);
    function cardDataController(options) {
        return _super.call(this, options) || this;
    }
    cardDataController.prototype._iterateKpiItems = function (delegate) {
        var that = this;
        if (that.viewModel) {
            $.each(that.viewModel.Cards, function (_, card) {
                delegate(card);
            });
        }
    };
    return cardDataController;
}(_kpi_data_controller_1.kpiDataController));
exports.cardDataController = cardDataController;
