/**
* DevExpress Dashboard (_map-custom-shapefile-surface.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _map_custom_shapefile_properties_composer_1 = require("../properties-composers/_map-custom-shapefile-properties-composer");
var ko = require("knockout");
var MapCustomShapeFileSurface = (function () {
    function MapCustomShapeFileSurface(model, propertiesController) {
        this.model = model;
        this.propertiesController = propertiesController;
        this._disposables = [];
        this.propertiesTabs = ko.observableArray([]);
    }
    MapCustomShapeFileSurface.prototype.startEditing = function (args) {
        args.createImmediately = false;
        var composer = new _map_custom_shapefile_properties_composer_1.MapCustomShapefilePropertiesComposer();
        var tabs = composer.composeTabs(this.model);
        this.propertiesTabs(tabs);
        this.propertiesController.secondaryModel({
            name: "dx-dashboard-secondary-item-surface",
            displayText: 'DashboardWebStringId.Map.Area.Custom',
            data: this
        });
    };
    MapCustomShapeFileSurface.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
    };
    return MapCustomShapeFileSurface;
}());
exports.MapCustomShapeFileSurface = MapCustomShapeFileSurface;
