/**
* DevExpress Dashboard (_file-picker.js)
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
var registerComponent = require("devextreme/core/component_registrator");
var dxFilePicker = (function (_super) {
    __extends(dxFilePicker, _super);
    function dxFilePicker(element, options) {
        return _super.call(this, element, options) || this;
    }
    dxFilePicker.prototype._clearButtonVisibility = function () {
        return this.option("showClearButton") && !!this.option("value");
    };
    dxFilePicker.prototype._clearValueHandler = function (e) {
        this['_input']().val("");
        _super.prototype['_clearValueHandler'].call(this, e);
    };
    return dxFilePicker;
}(dx_analytics_core_1.default.Analytics.Widgets.Internal.dxFileImagePicker));
exports.dxFilePicker = dxFilePicker;
registerComponent("dxFilePicker", dxFilePicker);
