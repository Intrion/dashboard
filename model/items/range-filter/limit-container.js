/**
* DevExpress Dashboard (limit-container.js)
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
var _limit_container_1 = require("./metadata/_limit-container");
var ko = require("knockout");
var LimitContainer = (function (_super) {
    __extends(LimitContainer, _super);
    function LimitContainer(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.mode = ko.observable();
        _this.argumentInterval = ko.observable("Year");
        _this.mode.subscribe(function (newMode) {
            if (newMode === "None") {
                _this.flow.isEmpty(true);
                _this.fixed.isEmpty(true);
            }
            else if (newMode === "Flow") {
                _this.flow.isEmpty(false);
                _this.fixed.isEmpty(true);
            }
            else if (newMode === "Fixed") {
                _this.flow.isEmpty(true);
                _this.fixed.isEmpty(false);
            }
        });
        if (!modelJson.hasOwnProperty("FixedDateTimePeriodLimit")) {
            if (!modelJson.hasOwnProperty("FlowDateTimePeriodLimit")) {
                _this.mode("None");
            }
            else {
                _this.mode("Flow");
            }
        }
        else {
            _this.mode("Fixed");
        }
        ko.computed(function () {
            _this.flow.argumentInterval(_this.argumentInterval());
        });
        return _this;
    }
    LimitContainer.prototype.getInfo = function () {
        return _limit_container_1.limitContainer;
    };
    LimitContainer.prototype.isEmpty = function () {
        return this.mode() === "None";
    };
    LimitContainer.prototype.getInterval = function () {
        if (this.mode() === "Flow") {
            return this.flow.interval();
        }
        else {
            return null;
        }
    };
    return LimitContainer;
}(serializable_model_1.SerializableModel));
exports.LimitContainer = LimitContainer;
