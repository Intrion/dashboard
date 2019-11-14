/**
* DevExpress Dashboard (cells-item-format-rule.js)
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
var dashboard_item_format_rule_1 = require("./dashboard-item-format-rule");
var _cells_item_format_rule_1 = require("./metadata/_cells-item-format-rule");
var ko = require("knockout");
var CellsItemFormatRule = (function (_super) {
    __extends(CellsItemFormatRule, _super);
    function CellsItemFormatRule(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.dataItemApplyToName = ko.computed({
            read: function () { return _this._dataItemApplyToName() || _this.dataItemName(); },
            write: function (val) { return _this._dataItemApplyToName(val); }
        });
        return _this;
    }
    CellsItemFormatRule.prototype.getInfo = function () {
        return _cells_item_format_rule_1.cellsItemFormatRuleSerializationsInfo;
    };
    return CellsItemFormatRule;
}(dashboard_item_format_rule_1.DashboardItemFormatRule));
exports.CellsItemFormatRule = CellsItemFormatRule;
