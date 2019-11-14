/**
* DevExpress Dashboard (window-definition.js)
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
var measure_calc_window_definition_1 = require("./measure-calc-window-definition");
var serializable_model_1 = require("../../serializable-model");
var _window_definition_1 = require("./metadata/_window-definition");
var ko = require("knockout");
var currentwindowDefinitionInfo = function (model) {
    if (!model.windowDefinitionType)
        return [];
    return [{
            propertyName: "windowDefinition",
            modelName: model.windowDefinitionType() || "FakeWindowDefinitionForModelSubscriber",
            from: function (json, serializer) { return new measure_calc_window_definition_1.windowDefinitionsTypesMap[model.windowDefinitionType()](json, serializer); },
            toJsonObject: function (value, serializer, refs) {
                var result = serializer.serialize(value, null, refs);
                if (dx_analytics_core_1.default.Analytics.Internal.isEmptyObject(result)) {
                    return null;
                }
                return result;
            }
        }];
};
var WindowDefinition = (function (_super) {
    __extends(WindowDefinition, _super);
    function WindowDefinition(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.windowDefinitionType = ko.observable();
        _this.windowDefinition = ko.observable();
        _this.windowDefinitionType(Object.keys(measure_calc_window_definition_1.windowDefinitionsTypesMap).filter(function (mapItem) { return !!modelJson && modelJson[mapItem] !== undefined; })[0]);
        if (!!_this.windowDefinitionType()) {
            var type = measure_calc_window_definition_1.windowDefinitionsTypesMap[_this.windowDefinitionType()];
            _this.windowDefinition(new type((modelJson || {})[_this.windowDefinitionType()]));
            delete _this["_model"][_this.windowDefinitionType()];
        }
        _this.windowDefinition.subscribe(function (windowDefinition) {
            _this.windowDefinitionType(Object.keys(measure_calc_window_definition_1.windowDefinitionsTypesMap).filter(function (mapItem) { return windowDefinition instanceof measure_calc_window_definition_1.windowDefinitionsTypesMap[mapItem]; })[0]);
        });
        return _this;
    }
    WindowDefinition.prototype.getInfo = function () {
        return _window_definition_1.windowDefinitionSerializationsInfo.concat(currentwindowDefinitionInfo(this));
    };
    WindowDefinition.prototype.equals = function (def) {
        return (this.isEmpty() && def.isEmpty()) || this.windowDefinition().equals(def.windowDefinition());
    };
    WindowDefinition.prototype.isEmpty = function () {
        return !this.windowDefinition();
    };
    return WindowDefinition;
}(serializable_model_1.SerializableModel));
exports.WindowDefinition = WindowDefinition;
