/**
* DevExpress Dashboard (dimension-key.js)
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
var _localizer_1 = require("../../data/_localizer");
var ko = require("knockout");
var _format_helper_1 = require("../../data/_format-helper");
var DimensionKey = (function (_super) {
    __extends(DimensionKey, _super);
    function DimensionKey(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer, _color_scheme_entry_1.dimensionKeySerializationInfo) || this;
        _this.displayText = ko.pureComputed(function () {
            var displayText = null;
            if (!!_this.value.value()) {
                if (_this.value.type() === "System.DateTime") {
                    var groupInterval = _this.definition.dateTimeGroupInterval();
                    displayText = _format_helper_1.formatHelper.format(new Date(_this.value.value()), { dateType: 'short', format: groupInterval });
                }
                else {
                    displayText = _this.value.value().toString();
                }
            }
            var predefinedDisplayText = _localizer_1.localizer.getPredefinedString(displayText);
            if (predefinedDisplayText) {
                return predefinedDisplayText;
            }
            else {
                return displayText;
            }
        });
        return _this;
    }
    DimensionKey.prototype.getInfo = function () {
        return _color_scheme_entry_1.dimensionKeySerializationInfo;
    };
    return DimensionKey;
}(serializable_model_1.SerializableModel));
exports.DimensionKey = DimensionKey;
