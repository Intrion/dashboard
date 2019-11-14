/**
* DevExpress Dashboard (scatter-point-label-options.js)
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
var point_label_options_1 = require("../chart/point-label-options");
var _scatter_point_label_options_1 = require("./metadata/_scatter-point-label-options");
var ScatterPointLabelOptions = (function (_super) {
    __extends(ScatterPointLabelOptions, _super);
    function ScatterPointLabelOptions(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    ScatterPointLabelOptions.prototype.getInfo = function () {
        return _scatter_point_label_options_1.scatterPointLabelOptionsSerializationsInfo;
    };
    return ScatterPointLabelOptions;
}(point_label_options_1.PointLabelOptionsBase));
exports.ScatterPointLabelOptions = ScatterPointLabelOptions;
