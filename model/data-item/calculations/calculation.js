/**
* DevExpress Dashboard (calculation.js)
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
var measure_calculation_1 = require("./measure-calculation");
var serializable_model_1 = require("../../serializable-model");
var _calculation_1 = require("./metadata/_calculation");
var ko = require("knockout");
exports._currentCalculationInfo = function (model) {
    if (!model.calculationType)
        return [];
    return [{
            propertyName: "calculation",
            modelName: model.calculationType() || "FakeCalculationForModelSubscriber",
            from: function (json, serializer) { return new measure_calculation_1.calculationsTypesMap[model.calculationType()](json, serializer); },
            toJsonObject: function (value, serializer, refs) {
                var result = serializer.serialize(value, null, refs);
                if (dx_analytics_core_1.default.Analytics.Internal.isEmptyObject(result)) {
                    return null;
                }
                return result;
            }
        }];
};
var Calculation = (function (_super) {
    __extends(Calculation, _super);
    function Calculation(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.calculationType = ko.observable();
        _this.calculation = ko.observable();
        _this.calculationType(Object.keys(measure_calculation_1.calculationsTypesMap).filter(function (mapItem) { return !!modelJson && modelJson[mapItem] !== undefined; })[0]);
        if (!!_this.calculationType()) {
            _this.calculation(new (measure_calculation_1.calculationsTypesMap[_this.calculationType()])((modelJson || {})[_this.calculationType()]));
            delete _this["_model"][_this.calculationType()];
        }
        _this.calculation.subscribe(function (calculation) {
            _this.calculationType(Object.keys(measure_calculation_1.calculationsTypesMap).filter(function (mapItem) { return calculation instanceof measure_calculation_1.calculationsTypesMap[mapItem]; })[0]);
        });
        return _this;
    }
    Calculation.prototype.getInfo = function () {
        return _calculation_1.calculationSerializationsInfo.concat(exports._currentCalculationInfo(this));
    };
    Calculation.prototype.isEmpty = function () {
        return !this.calculation();
    };
    return Calculation;
}(serializable_model_1.SerializableModel));
exports.Calculation = Calculation;
