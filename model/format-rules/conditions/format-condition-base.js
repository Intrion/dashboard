/**
* DevExpress Dashboard (format-condition-base.js)
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
var _format_condition_base_1 = require("./metadata/_format-condition-base");
var ko = require("knockout");
var FormatConditionBase = (function (_super) {
    __extends(FormatConditionBase, _super);
    function FormatConditionBase(modelJson, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson || {}, serializer) || this;
        _this.dataType = ko.observable();
        _this.dateTimeGroupInterval = ko.observable();
        _this._empty = true;
        _this.isEmpty = ko.observable();
        _this.isEmpty(!modelJson);
        return _this;
    }
    FormatConditionBase.prototype.getInfo = function () {
        return _format_condition_base_1.formatConditionBaseSerializationsInfo;
    };
    FormatConditionBase.prototype.isValid = function () {
        return true;
    };
    FormatConditionBase.prototype.isRange = function () {
        return false;
    };
    FormatConditionBase.prototype.isGradient = function () {
        return false;
    };
    FormatConditionBase.prototype.init = function () {
        this.isEmpty(false);
    };
    return FormatConditionBase;
}(serializable_model_1.SerializableModel));
exports.FormatConditionBase = FormatConditionBase;
