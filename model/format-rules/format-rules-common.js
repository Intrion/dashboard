/**
* DevExpress Dashboard (format-rules-common.js)
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
var serializable_model_1 = require("../serializable-model");
var _format_rules_common_1 = require("./metadata/_format-rules-common");
var _parameters_helper_1 = require("../parameters/_parameters-helper");
var ComplexValue = (function (_super) {
    __extends(ComplexValue, _super);
    function ComplexValue(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        if (!_this.isEmpty() && !_this.isInfinity) {
            _this.value(_parameters_helper_1.ParameterHelper.convertSingleValue(_this.value(), _this.type()));
        }
        return _this;
    }
    ComplexValue.prototype.isEmpty = function () {
        return !this.value || !this.type || !this.type();
    };
    Object.defineProperty(ComplexValue.prototype, "isInfinity", {
        get: function () {
            return this.value() == _format_rules_common_1.negativeInfinity;
        },
        enumerable: true,
        configurable: true
    });
    ComplexValue.prototype.getInfo = function () {
        return _format_rules_common_1.complexValueInfo;
    };
    ComplexValue.prototype.setValue = function (value, type) {
        this.value(value);
        this.type(type);
    };
    return ComplexValue;
}(serializable_model_1.SerializableModel));
exports.ComplexValue = ComplexValue;
