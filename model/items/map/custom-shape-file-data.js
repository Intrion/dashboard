/**
* DevExpress Dashboard (custom-shape-file-data.js)
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
var _custom_shape_file_data_1 = require("./metadata/_custom-shape-file-data");
var CustomShapefileData = (function (_super) {
    __extends(CustomShapefileData, _super);
    function CustomShapefileData(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.shapeData.subscribe(function (newData) { return !newData && _this.attributeData(_custom_shape_file_data_1.attributeData.defaultVal); });
        return _this;
    }
    CustomShapefileData.prototype.getInfo = function () {
        return _custom_shape_file_data_1.customShapefileDataSerializationsInfo;
    };
    return CustomShapefileData;
}(serializable_model_1.SerializableModel));
exports.CustomShapefileData = CustomShapefileData;
