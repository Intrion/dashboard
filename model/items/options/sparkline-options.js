/**
* DevExpress Dashboard (sparkline-options.js)
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
var _sparkline_options_1 = require("./metadata/_sparkline-options");
var SparklineOptions = (function (_super) {
    __extends(SparklineOptions, _super);
    function SparklineOptions(JSON, serializer) {
        if (JSON === void 0) { JSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, JSON, serializer) || this;
    }
    SparklineOptions.prototype.getInfo = function () {
        return _sparkline_options_1.sparklineOptionsSerializationsInfo;
    };
    return SparklineOptions;
}(serializable_model_1.SerializableModel));
exports.SparklineOptions = SparklineOptions;
