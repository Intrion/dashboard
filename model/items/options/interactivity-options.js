﻿/**
* DevExpress Dashboard (interactivity-options.js)
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
var _interactivity_options_1 = require("./metadata/_interactivity-options");
var FilterableDashboardItemInteractivityOptions = (function (_super) {
    __extends(FilterableDashboardItemInteractivityOptions, _super);
    function FilterableDashboardItemInteractivityOptions(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    FilterableDashboardItemInteractivityOptions.prototype.getInfo = function () {
        return [_interactivity_options_1.ignoreMasterFiltersDefaultTrue];
    };
    return FilterableDashboardItemInteractivityOptions;
}(serializable_model_1.SerializableModel));
exports.FilterableDashboardItemInteractivityOptions = FilterableDashboardItemInteractivityOptions;
var DashboardItemGroupInteractivityOptions = (function (_super) {
    __extends(DashboardItemGroupInteractivityOptions, _super);
    function DashboardItemGroupInteractivityOptions(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    DashboardItemGroupInteractivityOptions.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this).concat(_interactivity_options_1.isMasterFilterDefaultFalse);
    };
    return DashboardItemGroupInteractivityOptions;
}(FilterableDashboardItemInteractivityOptions));
exports.DashboardItemGroupInteractivityOptions = DashboardItemGroupInteractivityOptions;
var DashboardItemBaseInteractivityOptions = (function (_super) {
    __extends(DashboardItemBaseInteractivityOptions, _super);
    function DashboardItemBaseInteractivityOptions(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    DashboardItemBaseInteractivityOptions.prototype.getInfo = function () {
        return [_interactivity_options_1.ignoreMasterFiltersDefaultFalse];
    };
    return DashboardItemBaseInteractivityOptions;
}(serializable_model_1.SerializableModel));
exports.DashboardItemBaseInteractivityOptions = DashboardItemBaseInteractivityOptions;
var DashboardTabItemInteractivityOptions = (function (_super) {
    __extends(DashboardTabItemInteractivityOptions, _super);
    function DashboardTabItemInteractivityOptions(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    DashboardTabItemInteractivityOptions.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this).concat([_interactivity_options_1.isMasterFilterDefaultTrue, _interactivity_options_1.ignoreMasterFiltersDefaultFalse]);
    };
    return DashboardTabItemInteractivityOptions;
}(DashboardItemBaseInteractivityOptions));
exports.DashboardTabItemInteractivityOptions = DashboardTabItemInteractivityOptions;
var DashboardItemMasterFilterInteractivityOptions = (function (_super) {
    __extends(DashboardItemMasterFilterInteractivityOptions, _super);
    function DashboardItemMasterFilterInteractivityOptions(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    DashboardItemMasterFilterInteractivityOptions.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this).concat([_interactivity_options_1.masterFilterMode]);
    };
    return DashboardItemMasterFilterInteractivityOptions;
}(DashboardItemBaseInteractivityOptions));
exports.DashboardItemMasterFilterInteractivityOptions = DashboardItemMasterFilterInteractivityOptions;
var DashboardItemDrillDownInteractivityOptions = (function (_super) {
    __extends(DashboardItemDrillDownInteractivityOptions, _super);
    function DashboardItemDrillDownInteractivityOptions(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    DashboardItemDrillDownInteractivityOptions.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this).concat([_interactivity_options_1.isDrillDownEnabled]);
    };
    return DashboardItemDrillDownInteractivityOptions;
}(DashboardItemBaseInteractivityOptions));
exports.DashboardItemDrillDownInteractivityOptions = DashboardItemDrillDownInteractivityOptions;
var DashboardItemInteractivityOptions = (function (_super) {
    __extends(DashboardItemInteractivityOptions, _super);
    function DashboardItemInteractivityOptions(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    DashboardItemInteractivityOptions.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this).concat([_interactivity_options_1.isDrillDownEnabled]);
    };
    return DashboardItemInteractivityOptions;
}(DashboardItemMasterFilterInteractivityOptions));
exports.DashboardItemInteractivityOptions = DashboardItemInteractivityOptions;
var ChartInteractivityOptions = (function (_super) {
    __extends(ChartInteractivityOptions, _super);
    function ChartInteractivityOptions(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    ChartInteractivityOptions.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this).concat(_interactivity_options_1.targetDimensions);
    };
    return ChartInteractivityOptions;
}(DashboardItemInteractivityOptions));
exports.ChartInteractivityOptions = ChartInteractivityOptions;
exports._filterItemInteractivityOptionsMeta = _interactivity_options_1.getInteractivityOptionsPropertyInfo(FilterableDashboardItemInteractivityOptions);
exports._groupItemInteractivityOptionsMeta = _interactivity_options_1.getInteractivityOptionsPropertyInfo(DashboardItemGroupInteractivityOptions);
exports._tabItemInteractivityOptions = _interactivity_options_1.getInteractivityOptionsPropertyInfo(DashboardTabItemInteractivityOptions);
exports._baseInteractivityOptionsMeta = _interactivity_options_1.getInteractivityOptionsPropertyInfo(DashboardItemBaseInteractivityOptions);
exports._dashboardItemInteractivityOptionsMeta = _interactivity_options_1.getInteractivityOptionsPropertyInfo(DashboardItemInteractivityOptions);
exports._masterFilterInteractivityOptionsMeta = _interactivity_options_1.getInteractivityOptionsPropertyInfo(DashboardItemMasterFilterInteractivityOptions);
exports._drillDownInteractivityOptionsMeta = _interactivity_options_1.getInteractivityOptionsPropertyInfo(DashboardItemDrillDownInteractivityOptions);
exports._chartItemInteractivityOptionsMeta = _interactivity_options_1.getInteractivityOptionsPropertyInfo(ChartInteractivityOptions);
