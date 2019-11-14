/**
* DevExpress Dashboard (_style-settings-editor.js)
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
var bar_style_settings_1 = require("../../model/format-rules/style-settings/bar-style-settings");
var appearance_settings_1 = require("../../model/format-rules/style-settings/appearance-settings");
var icon_settings_1 = require("../../model/format-rules/style-settings/icon-settings");
var _style_settings_container_1 = require("./_style-settings-container");
var _icon_settings_1 = require("../../model/format-rules/style-settings/metadata/_icon-settings");
var _style_settings_base_1 = require("../../model/format-rules/style-settings/metadata/_style-settings-base");
var _undo_engine_helper_1 = require("../../model/internal/_undo-engine-helper");
var format_condition_style_base_1 = require("../../model/format-rules/conditions/format-condition-style-base");
var ko = require("knockout");
var StyleSettingsEditor = (function (_super) {
    __extends(StyleSettingsEditor, _super);
    function StyleSettingsEditor(params) {
        var _this = _super.call(this, params.isRange, params.isGradient, params.isEmptyAllowed) || this;
        _this.mode = ko.observable(null);
        _this.value = params.target;
        _this.selectedChanged = params.selectedChanged;
        _this.list = _style_settings_container_1.Palette.standard;
        _this.iconList = Object.keys(_icon_settings_1.iconType.values).slice(1);
        _this.closeEditCell = params.closeEditCell || (function () { });
        _this.selected = ko.computed(function () {
            if (!_this.value())
                return null;
            switch (_this.value().constructor) {
                case appearance_settings_1.AppearanceSettings:
                    return _this.value().appearanceType();
                case icon_settings_1.IconSettings:
                    return _this.value().iconType();
                case bar_style_settings_1.BarStyleSettings:
                    return _this.value().predefinedColor();
                default:
                    throw Error("Unsupported style settings");
            }
        });
        switch (_this.value() && _this.value().constructor) {
            case appearance_settings_1.AppearanceSettings:
                _this.mode('Appearance');
                break;
            case icon_settings_1.IconSettings:
                _this.mode('Icon');
                break;
            case bar_style_settings_1.BarStyleSettings:
                _this.mode('Bar');
                _this.list = _style_settings_container_1.Palette.bar;
                break;
            case undefined:
                _this.mode('Appearance');
                break;
            default:
                throw Error("Unsupported style settings");
        }
        if (_this.isGradient) {
            _this.list = _style_settings_container_1.Palette.gradient;
        }
        else if (_this.isRange) {
            _this.list = [_style_settings_base_1.emptyStyleType].concat(_this.list);
            _this.iconList = [_style_settings_base_1.emptyStyleType].concat(_this.iconList);
        }
        return _this;
    }
    StyleSettingsEditor.prototype.getIconClass = function (iconType) {
        var iconClass = this.isEmpty(iconType) ? "dx-dashboard-appearance-item dx-dashboard-appearance-item-label dx-dashboard-appearance-item-empty" : "dx-dashboard-icon-item " + _super.prototype.getIconClass.call(this, iconType);
        return iconClass + (this.selected() === iconType ? " dx-state-selected" : "");
    };
    StyleSettingsEditor.prototype.setStyleType = function (type) {
        var oldSelectedType = this.selected();
        var getTypeFromMode = function (mode) {
            if (mode === 'Icon') {
                return "IconSettings";
            }
            else if (mode === 'Appearance') {
                return "AppearanceSettings";
            }
            else {
                return "StyleSettings";
            }
        };
        var realJsType = getTypeFromMode(this.mode());
        if (!(this.value() instanceof format_condition_style_base_1._styleSettingsTypesMap[realJsType])) {
            this.value(new format_condition_style_base_1._styleSettingsTypesMap[realJsType]({}));
        }
        this.value().setSpecificType(type);
        if (this.selectedChanged) {
            this.selectedChanged(oldSelectedType, type);
        }
        this.closeEditCell();
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], StyleSettingsEditor.prototype, "setStyleType", null);
    return StyleSettingsEditor;
}(_style_settings_container_1.StyleSettingsContainer));
ko.components.register("dx-dashboard-style-settings-editor", {
    viewModel: StyleSettingsEditor,
    template: { element: 'dx-dashboard-style-settings-editor' }
});
exports._styleSettingsEditorModuleId = "_style-settings-editor";
