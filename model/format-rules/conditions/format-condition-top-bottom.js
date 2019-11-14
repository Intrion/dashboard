/**
* DevExpress Dashboard (format-condition-top-bottom.js)
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
var _format_condition_top_bottom_1 = require("./metadata/_format-condition-top-bottom");
var FormatConditionTopBottom = (function (_super) {
    __extends(FormatConditionTopBottom, _super);
    function FormatConditionTopBottom(modelJson, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.getSpecificType = function () { return _this.topBottom(); };
        _this.setSpecificType = function (type) {
            _this.topBottom(type);
        };
        return _this;
    }
    FormatConditionTopBottom.prototype._getStyleSettingsInfo = function () {
        return _format_condition_top_bottom_1.formatConditionTopBottomSerializationsInfo;
    };
    return FormatConditionTopBottom;
}(format_condition_style_base_1.FormatConditionStyleBase));
exports.FormatConditionTopBottom = FormatConditionTopBottom;
