/**
* DevExpress Dashboard (dashboard-item-format-rule.js)
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
var serializable_model_1 = require("../serializable-model");
var _dashboard_item_format_rule_1 = require("./metadata/_dashboard-item-format-rule");
var icon_settings_1 = require("./style-settings/icon-settings");
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var DashboardItemFormatRule = (function (_super) {
    __extends(DashboardItemFormatRule, _super);
    function DashboardItemFormatRule(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.condition = ko.computed({
            read: function () {
                var info = _dashboard_item_format_rule_1.conditionTypes.filter(function (ct) { return _this[ct.propertyName] && !_this[ct.propertyName].isEmpty(); })[0];
                if (info) {
                    return _this[info.propertyName];
                }
            },
            write: function (newCondition) {
                var info = _dashboard_item_format_rule_1.conditionTypes.filter(function (ct) { return newCondition instanceof ct.type; })[0];
            }
        });
        return _this;
    }
    Object.defineProperty(DashboardItemFormatRule.prototype, "_classCaption", {
        get: function () {
            var _this = this;
            var info = _dashboard_item_format_rule_1.conditionTypes.filter(function (t) { return _this.condition() instanceof t.type; })[0];
            return info && (this.name() + ": " + _default_1.getLocalizationById(info.displayName));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardItemFormatRule.prototype, "_classId", {
        get: function () {
            var _this = this;
            var info = _dashboard_item_format_rule_1.conditionTypes.filter(function (t) { return _this.condition() instanceof t.type; })[0];
            var id = info && info.propertyName;
            if (id === "conditionRangeSet") {
                if (this.condition().actualStyles.filter(function (style) { return style instanceof icon_settings_1.IconSettings; }).length > 0) {
                    id += "_icons";
                }
                else {
                    id += "_colors";
                }
            }
            return id;
        },
        enumerable: true,
        configurable: true
    });
    DashboardItemFormatRule.prototype.getInfo = function () {
        return _dashboard_item_format_rule_1.dashboardItemFormatRuleSerializationsInfo;
    };
    DashboardItemFormatRule.prototype._changeConditionType = function (propertyName) {
        var condition = this[propertyName];
        var oldCondition = this.condition();
        condition.init();
        oldCondition && oldCondition.isEmpty(true);
    };
    return DashboardItemFormatRule;
}(serializable_model_1.TypedSerializableModel));
exports.DashboardItemFormatRule = DashboardItemFormatRule;
