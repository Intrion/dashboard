/**
* DevExpress Dashboard (range-set.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var serializable_model_1 = require("../../../serializable-model");
var _utils_1 = require("../../../internal/_utils");
var range_info_1 = require("./range-info");
var _range_set_1 = require("./metadata/_range-set");
var RangeSet = (function (_super) {
    __extends(RangeSet, _super);
    function RangeSet(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.ranges = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Ranges, function (range) { return new range_info_1.RangeInfo(range, serializer); });
        return _this;
    }
    RangeSet.prototype.getInfo = function () {
        return _range_set_1.rangeSetSerializationsInfo;
    };
    __decorate([
        _utils_1.collectionItemType("RangeInfo")
    ], RangeSet.prototype, "ranges", void 0);
    return RangeSet;
}(serializable_model_1.SerializableModel));
exports.RangeSet = RangeSet;
