﻿/**
* DevExpress Dashboard (color-scheme-editor-extension.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolbox_items_1 = require("../toolbox-extension/toolbox-items");
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var color_1 = require("../../model/color");
var _color_scheme_model_1 = require("./internal/_color-scheme-model");
var _accordion_tab_1 = require("../_accordion-tab");
var _base_metadata_1 = require("../../model/metadata/_base-metadata");
var _coloring_options_1 = require("../../model/items/options/metadata/_coloring-options");
var _dashboard_item_coloring_options_1 = require("../../model/items/options/metadata/_dashboard-item-coloring-options");
var _object_properties_wrapper_1 = require("../_object-properties-wrapper");
var _display_name_provider_1 = require("../_display-name-provider");
var _dimension_1 = require("../../model/data-item/metadata/_dimension");
var _entry_editor_model_1 = require("./internal/_entry-editor-model");
var _color_picker_model_1 = require("./internal/_color-picker-model");
var control_options_1 = require("../../common/control-options");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var name = "dashboard-color-scheme-editor";
var DashboardColorSchemeEditorExtension = (function () {
    function DashboardColorSchemeEditorExtension(dashboardControl) {
        var _this = this;
        this.dashboardControl = dashboardControl;
        this.name = name;
        this._subscriptions = [];
        this.selected = ko.observable(false);
        this._colorSchemeModel = ko.observable();
        this._colorPalette = ko.observableArray();
        this._entryEditorModel = new _entry_editor_model_1.EntryEditorViewModel(this._colorPalette);
        this._colorPickerModel = ko.computed(function () { return new _color_picker_model_1.ColorPickerModel(_this._colorSchemeModel(), _this._colorPalette); });
        this._selectedEntry = ko.observable();
        this._createNewEntry = function () {
            _this._colorSchemeModel().initNewEntry();
            _this._entryEditorModel.editEntry(_this.dataSourceBrowserExtension._dataSourceBrowserViewModel().dataSourceBrowser, _this._colorSchemeModel().newEntry(), _this._colorSchemeModel().selectedSignatures()[0].colorByMeasures, _this._colorSchemeModel().getAvailableMeasureKeys(), function (editedEntry) { return _this._colorSchemeModel().updateEntry(undefined, editedEntry); }, false);
        };
        this._menuItem = new toolbox_items_1.DashboardMenuItem(this.name, "DashboardWebStringId.DashboardMenuColorScheme", 250, 0);
        this._menuItem.template = "dx-dashboard-form-color-scheme";
        this._menuItem.data = {
            colorSchemeModel: this._colorSchemeModel,
            selectedEntry: this._selectedEntry,
            entryEditorModel: this._entryEditorModel,
            colorPickerModel: this._colorPickerModel,
            createNewEntry: this._createNewEntry,
            colorPalette: this._colorPalette
        };
        this._menuItem.disabled = ko.computed(function () { return !dashboardControl.dashboard(); });
    }
    DashboardColorSchemeEditorExtension._isColoringSupported = function (item) {
        return !!item["coloringOptions"];
    };
    DashboardColorSchemeEditorExtension.prototype._updateExtensionModel = function () {
        var _this = this;
        if (!!this.dashboardControl.dashboard() && this.dashboardControl.isDesignMode()) {
            !!this.dashboardControl._serviceClient() && this.dashboardControl._serviceClient().getDashboardPalette().done(function (palette) {
                _this._colorPalette(dx_analytics_core_1.default.Analytics.Utils.deserializeArray(palette, function (colorModel) { return new color_1.Color(colorModel["#text"]); })());
            });
            this._colorSchemeModel(new _color_scheme_model_1.ColorSchemeModel(this.dashboardControl.dashboard(), this.dashboardControl._serviceClient() && this.dashboardControl._serviceClient().getColoringScheme || null));
        }
        else {
            this._colorSchemeModel(null);
        }
    };
    DashboardColorSchemeEditorExtension.prototype.start = function () {
        var _this = this;
        this._propertiesPanelExtension = this.dashboardControl.findExtension("item-options-panel");
        this.dataSourceBrowserExtension = this.dashboardControl.findExtension("data-source-browser");
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        if (toolboxExtension) {
            toolboxExtension.menuItems.push(this._menuItem);
        }
        this._subscriptions.push(this.dashboardControl.dashboard.subscribe(this._updateExtensionModel, this));
        this._subscriptions.push(this.dashboardControl.isDesignMode.subscribe(this._updateExtensionModel, this));
        this._subscriptions.push(this._selectedEntry.subscribe(function (entry) {
            if (entry == null) {
                _this._entryEditorModel.close();
            }
            else {
                _this._entryEditorModel.editEntry(_this.dataSourceBrowserExtension._dataSourceBrowserViewModel().dataSourceBrowser, entry, _this._colorSchemeModel().selectedSignatures()[0].colorByMeasures, _this._colorSchemeModel().getAvailableMeasureKeys(), function (editedEntry) { return _this._colorSchemeModel().updateEntry(entry, editedEntry); }, _this._colorSchemeModel().isEntryAutogenerated(entry));
            }
        }));
        ko.computed(function () {
            var model = _this._colorSchemeModel();
            if (model) {
                _this._subscriptions.push(model.selectedSignatures.subscribe(function (v) {
                    _this._entryEditorModel.close();
                    model.newEntry(null);
                }));
            }
        });
        var oldColoringComputed = null;
        if (!!this._propertiesPanelExtension) {
            this._subscriptions.push(this._propertiesPanelExtension._subscribeTabsChanged(function (tabs) {
                oldColoringComputed && oldColoringComputed.dispose();
                var item = _this.dashboardControl._dashboardSurface() && _this.dashboardControl._dashboardSurface().selectedDashboardItem() || null;
                if (item && DashboardColorSchemeEditorExtension._isColoringSupported(item)) {
                    var coloringTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ColoringOptions, "DashboardWebStringId.ColoringOptions");
                    tabs.push(coloringTab);
                    oldColoringComputed = ko.computed(function () {
                        coloringTab.tabModel(_this._getColoringWrapper(item));
                    });
                    _this._subscriptions.push(oldColoringComputed);
                    tabs.push(new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ColorScheme, "DashboardWebStringId.DashboardMenuColorScheme", _this._getColorSchemeWrapper(item)));
                }
            }));
        }
        this._updateExtensionModel();
    };
    DashboardColorSchemeEditorExtension.prototype.stop = function () {
        this._subscriptions.forEach(function (s) { return s.dispose(); });
        this._subscriptions = [];
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        if (toolboxExtension) {
            toolboxExtension.menuItems.remove(this._menuItem);
        }
    };
    DashboardColorSchemeEditorExtension.prototype._getColorSchemeWrapper = function (model) {
        var _this = this;
        ko.computed(function () {
            if (!!_this._colorSchemeModel())
                _this._colorSchemeModel().selectedSignatures([model._getColoringSignature()]);
        });
        var artificialModel = {
            colorSchemeModel: this._colorSchemeModel(),
            coloringOptions: model.coloringOptions
        };
        var properties = [{
                propertyName: "colorSchemeModel",
                editor: _base_metadata_1.editorTemplates.colorSchemeTreeViewEditor,
                editColor: function (entry, event) {
                    _this._colorPickerModel().init(entry, event.target);
                },
                colorPickerModel: this._colorPickerModel,
                colorPalette: this._colorPalette
            }, {
                container: _coloring_options_1.coloringOptions,
                properties: [_dashboard_item_coloring_options_1.useGlobalColors]
            }
        ];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: artificialModel,
            properties: properties
        });
    };
    DashboardColorSchemeEditorExtension.prototype._getColoringWrapper = function (model) {
        var _this = this;
        var allColorsModel = {
            measuresColoringMode: model.coloringOptions.measuresColoringMode,
            getInfo: function () { return []; }
        };
        var properties = [];
        var addColoringOptions = function (item, arr, prefixId) {
            var prefix = _default_1.getLocalizationById(prefixId);
            arr.forEach(function (arg) {
                if (arg.dataItem()) {
                    allColorsModel[arg.uniqueName()] = arg.dataItem().coloringMode;
                    properties.push({
                        propertyName: arg.uniqueName(),
                        displayName: prefix + " - " + _display_name_provider_1.getDataItemDisplayName(_this.dashboardControl._dataSourceBrowser, item, arg.dataItem()),
                        editor: _base_metadata_1.editorTemplates.buttonGroup,
                        values: _dimension_1.coloringMode.values
                    });
                }
            });
        };
        var addItemColoringOptions = function (itemsInfo) {
            itemsInfo.forEach(function (itemInfo) { return addColoringOptions(model, itemInfo.items, itemInfo.prefixId); });
        };
        addItemColoringOptions(model._getColorizableDataItemsInfo());
        if (model._canColorByMeasures) {
            properties.push(_dashboard_item_coloring_options_1.measuresColoringMode);
        }
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: allColorsModel,
            properties: properties
        });
    };
    return DashboardColorSchemeEditorExtension;
}());
exports.DashboardColorSchemeEditorExtension = DashboardColorSchemeEditorExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new DashboardColorSchemeEditorExtension(dashboardControl); };
