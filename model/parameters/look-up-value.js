/**
* DevExpress Dashboard (look-up-value.js)
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
var _parameters_helper_1 = require("./_parameters-helper");
var _date_utils_1 = require("../internal/_date-utils");
var ko = require("knockout");
var LookUpValue = (function (_super) {
    __extends(LookUpValue, _super);
    function LookUpValue(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.valueType = ko.observable("");
        _this.value(_date_utils_1.tryConvertToDateTime(_this.value()));
        return _this;
    }
    LookUpValue.prototype.getInfo = function () {
        return _parameters_helper_1.ParameterHelper.getInfoPerType(this.valueType);
    };
    LookUpValue.prototype._getDefaultItemType = function () {
        return "Value";
    };
    return LookUpValue;
}(serializable_model_1.TypedSerializableModel));
exports.LookUpValue = LookUpValue;
