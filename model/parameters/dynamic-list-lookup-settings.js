﻿/**
* DevExpress Dashboard (dynamic-list-lookup-settings.js)
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
var _dynamic_list_lookup_settings_1 = require("./metadata/_dynamic-list-lookup-settings");
var DynamicListLookUpSettings = (function (_super) {
    __extends(DynamicListLookUpSettings, _super);
    function DynamicListLookUpSettings(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        var clearMembers = function () {
            _this.valueMemberName(null);
            _this.displayMemberName(null);
            _this.sortByMember(null);
        };
        _this.dataSource.subscribe(function (_) {
            _this.dataMember(null);
            clearMembers();
        });
        _this.dataMember.subscribe(clearMembers);
        return _this;
    }
    DynamicListLookUpSettings.prototype.getInfo = function () {
        return _dynamic_list_lookup_settings_1.dynamicListLookUpSettingsSerializationsInfo;
    };
    DynamicListLookUpSettings.prototype.equals = function (target) {
        return this.dataMember() === target.dataMember() &&
            this.dataSource() === target.dataSource() &&
            this.valueMemberName() === target.valueMemberName() &&
            this.displayMemberName() === target.displayMemberName() &&
            this.sortByMember() === target.sortByMember() &&
            this.sortOrder() === target.sortOrder();
    };
    DynamicListLookUpSettings.prototype.isPropertyDisabled = function (propertyName) {
        if (propertyName === _dynamic_list_lookup_settings_1.sortOrder.propertyName) {
            return !this.sortByMember();
        }
        return false;
    };
    DynamicListLookUpSettings.modelName = 'DynamicListLookUpSettings';
    return DynamicListLookUpSettings;
}(serializable_model_1.SerializableModel));
exports.DynamicListLookUpSettings = DynamicListLookUpSettings;
exports._dynamicListLookUpSettingsSerializationInfo = { propertyName: 'dynamicListLookUpSettings', displayName: "DashboardWebStringId.Parameters.DynamicListLookUpSettings", type: DynamicListLookUpSettings, defaultVal: null, alwaysSerialize: true };
