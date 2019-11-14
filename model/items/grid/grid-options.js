/**
* DevExpress Dashboard (grid-options.js)
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
var _grid_options_1 = require("./metadata/_grid-options");
var GridOptions = (function (_super) {
    __extends(GridOptions, _super);
    function GridOptions(JSON, serializer) {
        if (JSON === void 0) { JSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, JSON, serializer) || this;
    }
    GridOptions.prototype.getInfo = function () {
        return _grid_options_1.gridOptionsSerializationsInfo;
    };
    GridOptions.prototype._getViewModel = function () {
        return {
            AllowCellMerge: this.allowCellMerge(),
            ColumnWidthMode: this.columnWidthMode(),
            EnableBandedRows: this.enableBandedRows(),
            ShowHorizontalLines: this.showHorizontalLines(),
            ShowVerticalLines: this.showVerticalLines(),
            ShowColumnHeaders: this.showColumnHeaders(),
            WordWrap: this.wordWrap()
        };
    };
    return GridOptions;
}(serializable_model_1.SerializableModel));
exports.GridOptions = GridOptions;
