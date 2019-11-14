/**
* DevExpress Dashboard (format-condition-value.js)
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
var format_condition_style_base_1 = require("./format-condition-style-base");
var _format_condition_value_1 = require("./metadata/_format-condition-value");
var _format_rules_common_1 = require("../metadata/_format-rules-common");
var _parameters_helper_1 = require("../../parameters/_parameters-helper");
var FormatConditionValue = (function (_super) {
    __extends(FormatConditionValue, _super);
    function FormatConditionValue(modelJson, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.getSpecificType = function () { return _this.condition(); };
        _this.setSpecificType = function (type) {
            _this.condition(type);
            if (!_this.value1.type()) {
                _this.value1.type(_format_rules_common_1.fieldTypes[_this.dataType()]);
                var defaultValue = _parameters_helper_1.ParameterHelper.convertSingleValue(null, _this.value1.type());
                if (_this.value1.type() === "System.String" && defaultValue === undefined) {
                    defaultValue = "";
                }
                _this.value1.value(defaultValue);
            }
            if (type.toLocaleLowerCase().indexOf("between") !== -1) {
                if (!_this.value2.type()) {
                    _this.value2.value(_this.value1.value());
                    _this.value2.type(_this.value1.type());
                }
            }
            else {
                _this.value2.type(null);
            }
        };
        return _this;
    }
    FormatConditionValue.prototype._getStyleSettingsInfo = function () {
        return _format_condition_value_1.formatConditionValueSerializationsInfo;
    };
    return FormatConditionValue;
}(format_condition_style_base_1.FormatConditionStyleBase));
exports.FormatConditionValue = FormatConditionValue;
