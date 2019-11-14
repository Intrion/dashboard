/**
* DevExpress Dashboard (measure-definition.js)
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
var _color_scheme_entry_1 = require("./metadata/_color-scheme-entry");
var _measure_1 = require("../data-item/metadata/_measure");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var MeasureDefinition = (function (_super) {
    __extends(MeasureDefinition, _super);
    function MeasureDefinition(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer, _color_scheme_entry_1.measureKeySerializationInfo) || this;
        _this.displayText = ko.computed(function () {
            if (!!_this.expression())
                return _default_1.getLocalizationById("DashboardWebStringId.Calculations.Expression");
            var prefix = !!_this.calculation.calculation() && _default_1.getLocalizationById(_this.calculation.calculation().name);
            var postfix = " (" + _default_1.getLocalizationById(_measure_1.summaryTypeDict[_this.summaryType() || "Sum"]) + ")";
            return ((prefix && (prefix + " ")) || "") + _this.dataMember() + postfix;
        });
        return _this;
    }
    MeasureDefinition.prototype.getInfo = function () {
        return _color_scheme_entry_1.measureKeySerializationInfo;
    };
    Object.defineProperty(MeasureDefinition.prototype, "_id", {
        get: function () {
            var serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer({ useRefs: false });
            return JSON.stringify(serializer.serialize(this, _color_scheme_entry_1.measureKeySerializationInfo));
        },
        enumerable: true,
        configurable: true
    });
    return MeasureDefinition;
}(serializable_model_1.SerializableModel));
exports.MeasureDefinition = MeasureDefinition;
