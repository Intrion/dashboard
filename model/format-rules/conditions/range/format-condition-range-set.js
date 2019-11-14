/**
* DevExpress Dashboard (format-condition-range-set.js)
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
var format_condition_range_base_1 = require("./format-condition-range-base");
var _format_condition_range_set_1 = require("./metadata/_format-condition-range-set");
var range_generator_1 = require("./range-generator");
var FormatConditionRangeSet = (function (_super) {
    __extends(FormatConditionRangeSet, _super);
    function FormatConditionRangeSet(modelJson, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    FormatConditionRangeSet.prototype.getInfo = function () {
        return _format_condition_range_set_1.formatConditionRangeSetSerializationsInfo;
    };
    FormatConditionRangeSet.prototype.getActualPredefinedType = function () {
        return range_generator_1.FormatConditionRangeGenerator.getPredefinedType(this.actualStyles, function (type) {
            var c = new FormatConditionRangeSet();
            range_generator_1.FormatConditionRangeGenerator.generateRangeSet(c, type);
            return c;
        });
    };
    FormatConditionRangeSet.prototype.setActualPredefinedType = function (type) {
        range_generator_1.FormatConditionRangeGenerator.generateRangeSet(this, type);
    };
    return FormatConditionRangeSet;
}(format_condition_range_base_1.FormatConditionRangeBase));
exports.FormatConditionRangeSet = FormatConditionRangeSet;
