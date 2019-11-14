/**
* DevExpress Dashboard (specific-calc-window-definition.js)
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
var measure_calc_window_definition_1 = require("./measure-calc-window-definition");
var _utils_1 = require("../../internal/_utils");
var data_item_1 = require("../data-item");
var _specific_calc_window_definition_1 = require("./metadata/_specific-calc-window-definition");
var _array_utils_1 = require("../../internal/_array-utils");
var SpecificWindowDefinition = (function (_super) {
    __extends(SpecificWindowDefinition, _super);
    function SpecificWindowDefinition(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.dimensions = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson && modelJson.Dimensions, function (item) {
            return new data_item_1.DataItemLink(null, item, serializer);
        });
        return _this;
    }
    SpecificWindowDefinition.prototype.getInfo = function () {
        var dimensionsInfo = _specific_calc_window_definition_1.sliceTableDimensions;
        if (!!this._dimensionsInfoPatcher) {
            dimensionsInfo = this._dimensionsInfoPatcher(dimensionsInfo);
        }
        return _super.prototype.getInfo.call(this).concat([dimensionsInfo]);
    };
    SpecificWindowDefinition.prototype.equals = function (def) {
        return (def instanceof SpecificWindowDefinition) &&
            _array_utils_1.compareNotOrderedArrays(this.dimensions(), def.dimensions(), function (d1, d2) { return d1.uniqueName() === d2.uniqueName(); });
    };
    __decorate([
        _utils_1.collectionItemType("Dimension")
    ], SpecificWindowDefinition.prototype, "dimensions", void 0);
    return SpecificWindowDefinition;
}(measure_calc_window_definition_1.MeasureCalculationWindowDefinition));
exports.SpecificWindowDefinition = SpecificWindowDefinition;
measure_calc_window_definition_1.windowDefinitionsTypesMap["SpecificWindowDefinition"] = SpecificWindowDefinition;
