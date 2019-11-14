/**
* DevExpress Dashboard (_window-definition-editor.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var specific_calc_window_definition_1 = require("../../model/data-item/window-definition/specific-calc-window-definition");
var data_item_1 = require("../../model/data-item/data-item");
var _undo_engine_helper_1 = require("../../model/internal/_undo-engine-helper");
var _base_metadata_1 = require("../../model/metadata/_base-metadata");
var _display_name_provider_1 = require("../_display-name-provider");
var _utils_1 = require("../../data/_utils");
var ko = require("knockout");
var WindowDefinitionMode;
(function (WindowDefinitionMode) {
    WindowDefinitionMode[WindowDefinitionMode["Predefined"] = 0] = "Predefined";
    WindowDefinitionMode[WindowDefinitionMode["Specific"] = 1] = "Specific";
})(WindowDefinitionMode = exports.WindowDefinitionMode || (exports.WindowDefinitionMode = {}));
var WindowDefinitionEditor = (function () {
    function WindowDefinitionEditor(params) {
        this.params = params;
        this.mode = ko.observable(null);
        this.value = params.target().windowDefinition;
        if (this.value() instanceof specific_calc_window_definition_1.SpecificWindowDefinition) {
            this.mode(WindowDefinitionMode.Specific);
            var definition = this.value();
            definition._dimensionsInfoPatcher = WindowDefinitionEditor.createPatchSpecificWindowDimensionsInfo(definition, params.dataDashboardItem(), params.dataSourceBrowser());
        }
        else {
            this.mode(WindowDefinitionMode.Predefined);
        }
        this.mode.subscribe(this.setValue, this);
    }
    Object.defineProperty(WindowDefinitionEditor.prototype, "dataSource", {
        get: function () {
            return [
                { value: WindowDefinitionMode.Predefined, displayValue: 'DashboardWebStringId.Calculations.WindowDefinitionModePredefined' },
                { value: WindowDefinitionMode.Specific, displayValue: 'DashboardWebStringId.Calculations.WindowDefinitionModeSpecific' }
            ];
        },
        enumerable: true,
        configurable: true
    });
    WindowDefinitionEditor.prototype.setValue = function (newMode) {
        if (newMode === WindowDefinitionMode.Predefined) {
            this.value(this.params.dataDashboardItem()._getDefaultCalculationWindowDefinition());
        }
        else {
            var windowDefinition = new specific_calc_window_definition_1.SpecificWindowDefinition();
            windowDefinition._dimensionsInfoPatcher = WindowDefinitionEditor.createPatchSpecificWindowDimensionsInfo(windowDefinition, this.params.dataDashboardItem(), this.params.dataSourceBrowser());
            this.value(windowDefinition);
        }
    };
    WindowDefinitionEditor.createPatchSpecificWindowDimensionsInfo = function (definition, dataDashboardItem, dataSourceBrowser) { return function (propertyInfo) {
        var lookupValueFromDimension = function (d) {
            return {
                value: d.uniqueName(),
                displayValue: _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, dataDashboardItem, d)
            };
        };
        var allDimensions = dataDashboardItem._dimensions.map(lookupValueFromDimension);
        var getAvailableDimensions = function () {
            return dataDashboardItem._dimensions
                .filter(function (d) { return !definition.dimensions().some(function (wd) { return wd.uniqueName() === d.uniqueName(); }); })
                .map(lookupValueFromDimension);
        };
        return _utils_1.deepExtend({
            getCollectionItemDefaultPropertyInfo: function (model) {
                var availableDimensions = !!model ? availableDimensions = dataDashboardItem._dimensions.filter(function (d) { return d.uniqueName() === model.uniqueName(); }).map(lookupValueFromDimension) : [];
                availableDimensions = availableDimensions.concat(getAvailableDimensions());
                return {
                    propertyName: "uniqueName",
                    editor: _base_metadata_1.editorTemplates.combobox,
                    valuesArray: availableDimensions,
                    allowAdd: function () { return getAvailableDimensions().length > 0; },
                    addHandler: function () {
                        if (getAvailableDimensions().length > 0) {
                            return new data_item_1.DataItemLink(dataDashboardItem, { "@DefaultId": getAvailableDimensions()[0].value });
                        }
                    }
                };
            },
            getDisplayText: function (item) {
                var description = allDimensions.filter(function (d) { return d.value === item.uniqueName(); })[0];
                return description && description.displayValue || item.uniqueName();
            }
        }, propertyInfo);
    }; };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], WindowDefinitionEditor.prototype, "setValue", null);
    return WindowDefinitionEditor;
}());
exports.WindowDefinitionEditor = WindowDefinitionEditor;
ko.components.register("dx-dashboard-window-definition-editor", {
    viewModel: WindowDefinitionEditor,
    template: { element: 'dx-dashboard-window-definition-editor' }
});
