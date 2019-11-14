/**
* DevExpress Dashboard (static-list-lookup-settings.js)
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
var serializable_model_1 = require("../serializable-model");
var _static_list_lookup_settings_1 = require("./metadata/_static-list-lookup-settings");
var _utils_1 = require("../internal/_utils");
var _parameters_helper_1 = require("./_parameters-helper");
var look_up_value_1 = require("./look-up-value");
var ko = require("knockout");
var StaticListLookUpSettings = (function (_super) {
    __extends(StaticListLookUpSettings, _super);
    function StaticListLookUpSettings(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this._valueType = ko.observable();
        _this.values = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Values, function (item) { return new look_up_value_1.LookUpValue(item, serializer); });
        return _this;
    }
    Object.defineProperty(StaticListLookUpSettings.prototype, "_itemInfo", {
        get: function () {
            var _this = this;
            return {
                propertyName: _static_list_lookup_settings_1.lookUpValue.propertyName,
                editor: _parameters_helper_1.ParameterHelper.getEditorType(this._valueType()),
                addHandler: function () {
                    var newLookUpValue = new look_up_value_1.LookUpValue({});
                    newLookUpValue.valueType(_this._valueType());
                    return newLookUpValue;
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    StaticListLookUpSettings.prototype.getInfo = function () {
        return _static_list_lookup_settings_1.staticListLookUpSettingsSerializationsInfo;
    };
    StaticListLookUpSettings.prototype._updateValuesType = function (newType) {
        this._valueType(newType);
        if (this.values() && this.values().length > 0) {
            this.values().forEach(function (lookUpValue) {
                lookUpValue.valueType(newType);
                lookUpValue.value(_parameters_helper_1.ParameterHelper.convertSingleValue(lookUpValue.value(), newType));
            });
        }
    };
    StaticListLookUpSettings.modelName = 'StaticListLookUpSettings';
    __decorate([
        _utils_1.collectionItemType("Value")
    ], StaticListLookUpSettings.prototype, "values", void 0);
    return StaticListLookUpSettings;
}(serializable_model_1.SerializableModel));
exports.StaticListLookUpSettings = StaticListLookUpSettings;
exports._staticListLookUpSettingsSerializationInfo = { propertyName: 'staticListLookUpSettings', displayName: "DashboardWebStringId.Parameters.StaticListLookUpSettings", type: StaticListLookUpSettings, defaultVal: null, alwaysSerialize: true };
