/**
* DevExpress Dashboard (map-viewport.js)
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
var serializable_model_1 = require("../../serializable-model");
var _map_viewport_1 = require("./metadata/_map-viewport");
var _undo_engine_helper_1 = require("../../internal/_undo-engine-helper");
var MapViewport = (function (_super) {
    __extends(MapViewport, _super);
    function MapViewport(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    MapViewport.prototype.getInfo = function () {
        return _map_viewport_1.mapViewportSerializationsInfo;
    };
    MapViewport.prototype._set = function (viewport, paddings) {
        if (paddings === void 0) { paddings = true; }
        if (!!viewport) {
            this.topLatitude(viewport.TopLatitude);
            this.bottomLatitude(viewport.BottomLatitude);
            this.leftLongitude(viewport.LeftLongitude);
            this.rightLongitude(viewport.RightLongitude);
            this.centerPointLatitude(viewport.CenterPointLatitude);
            this.centerPointLongitude(viewport.CenterPointLongitude);
            this.createViewerPaddings(paddings);
        }
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], MapViewport.prototype, "_set", null);
    return MapViewport;
}(serializable_model_1.SerializableModel));
exports.MapViewport = MapViewport;
