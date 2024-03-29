﻿/**
* DevExpress Dashboard (parameter.js)
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
var _date_utils_1 = require("../internal/_date-utils");
var serializable_model_1 = require("../serializable-model");
var _utils_1 = require("../internal/_utils");
var static_list_lookup_settings_1 = require("./static-list-lookup-settings");
var look_up_value_1 = require("./look-up-value");
var dynamic_list_lookup_settings_1 = require("./dynamic-list-lookup-settings");
var _parameters_helper_1 = require("./_parameters-helper");
var _parameter_1 = require("./metadata/_parameter");
var _base_metadata_1 = require("../metadata/_base-metadata");
var _utils_2 = require("../../data/_utils");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
function _getParametersQuery(parameters) {
    return parameters.map(function (p) {
        return {
            name: p.name(),
            value: _date_utils_1.toStringArray(p._actualValue()),
            type: p.type(),
            allowMultiselect: p.allowMultiselect(),
            selectAll: p.allowMultiselect() && p.selectAllValues() && p._actualValue() === Parameter.SelectAllValue
        };
    });
}
exports._getParametersQuery = _getParametersQuery;
var Parameter = (function (_super) {
    __extends(Parameter, _super);
    function Parameter(modelJson, serializer, _allParameters) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this._allParameters = _allParameters;
        _this.lookUpSourceType = ko.observable("None");
        _this.staticListLookUpSettings = ko.observable(null);
        _this.dynamicListLookUpSettings = ko.observable(null);
        _this._paramDialogValue = ko.observable();
        _this._value = ko.computed({
            read: function () { return _this._paramDialogValue(); },
            write: function (val) { return _this._paramDialogValue(val); }
        });
        _this.defaultValues = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Values, function (item) { return new look_up_value_1.LookUpValue(item, serializer); });
        _this._valuesOfDefaultValues = ko.computed(function () {
            return _this.defaultValues() && _this.defaultValues().map(function (val) { return val.value(); }) || null;
        });
        if (_this._type()) {
            var typeParts = _this._type().split(",");
            if (typeParts.length > 1) {
                _this._type(typeParts[0]);
            }
        }
        _this.type = ko.pureComputed({
            read: function () {
                return _this._type();
            },
            write: function (val) {
                var oldVal = _this._type();
                if (val !== oldVal) {
                    _this._value(undefined);
                    if (_this.staticListLookUpSettings()) {
                        _this.staticListLookUpSettings()._updateValuesType(val);
                    }
                    if (val === "System.DateTime") {
                        _this.defaultValue(_parameters_helper_1.ParameterHelper.getDefaultTypeValue(val));
                    }
                    else {
                        _this.defaultValue(_parameters_helper_1.ParameterHelper.convertSingleValue(_this.defaultValue(), val, _this.allowNull()));
                    }
                    _this._type(val);
                }
            }
        });
        _this.defaultValue(_parameters_helper_1.ParameterHelper.convertSingleValue(_this.defaultValue(), _this.type(), _this.allowNull()));
        if (modelJson.hasOwnProperty(static_list_lookup_settings_1.StaticListLookUpSettings.modelName)) {
            _this.staticListLookUpSettings(new static_list_lookup_settings_1.StaticListLookUpSettings(modelJson[static_list_lookup_settings_1.StaticListLookUpSettings.modelName], serializer));
            delete _this['_model'][static_list_lookup_settings_1.StaticListLookUpSettings.modelName];
            _this.staticListLookUpSettings()._updateValuesType(_this.type());
            _this.lookUpSourceType("StaticListLookUpSettings");
        }
        else if (modelJson.hasOwnProperty(dynamic_list_lookup_settings_1.DynamicListLookUpSettings.modelName)) {
            _this.dynamicListLookUpSettings(new dynamic_list_lookup_settings_1.DynamicListLookUpSettings(modelJson[dynamic_list_lookup_settings_1.DynamicListLookUpSettings.modelName], serializer));
            delete _this['_model'][dynamic_list_lookup_settings_1.DynamicListLookUpSettings.modelName];
            _this.lookUpSourceType("DynamicListLookUpSettings");
        }
        else {
            _this.lookUpSourceType("None");
        }
        _this.lookUpSourceType = ko.computed({
            read: function () {
                if (!!_this.staticListLookUpSettings()) {
                    return "StaticListLookUpSettings";
                }
                else if (_this.dynamicListLookUpSettings()) {
                    return "DynamicListLookUpSettings";
                }
                else {
                    return "None";
                }
            },
            write: function (val) {
                switch (val) {
                    case "StaticListLookUpSettings":
                        _this.staticListLookUpSettings(new static_list_lookup_settings_1.StaticListLookUpSettings());
                        _this.dynamicListLookUpSettings(null);
                        _this._resetDefaultValues();
                        break;
                    case "DynamicListLookUpSettings":
                        _this.staticListLookUpSettings(null);
                        _this.dynamicListLookUpSettings(new dynamic_list_lookup_settings_1.DynamicListLookUpSettings());
                        _this._resetDefaultValues();
                        break;
                    default:
                        _this.staticListLookUpSettings(null);
                        _this.dynamicListLookUpSettings(null);
                        _this._resetDefaultValues();
                        _this.allowMultiselect(false);
                        _this.selectAllValues(false);
                        break;
                }
            }
        });
        _this._actualValue = ko.computed(function () {
            if ((!_this.allowNull() && (_this._value() === null || _this._value() === undefined)) ||
                (_this.allowNull() && _this._value() === undefined)) {
                if (_this.allowMultiselect()) {
                    if (_this.selectAllValues()) {
                        if (!!_this.staticListLookUpSettings()) {
                            return _this.staticListLookUpSettings().values().map(function (val) { return val.value(); });
                        }
                        else if (!!_this.dynamicListLookUpSettings()) {
                            return Parameter.SelectAllValue;
                        }
                    }
                    return _this._valuesOfDefaultValues();
                }
                return _this.defaultValue();
            }
            return _this._value();
        });
        _this.containsDisplayMember = ko.computed(function () {
            return !!_this.dynamicListLookUpSettings();
        });
        _this.defaultValue.subscribe(function (newDefaultValue) {
            if (!_this.allowMultiselect()) {
                _this._value(_this.defaultValue());
            }
        });
        ko.computed(function () {
            if (_this.allowMultiselect()) {
                if (_this.selectAllValues()) {
                    _this._value(undefined);
                }
                else {
                    _this._value(_this._valuesOfDefaultValues());
                }
            }
            else {
                _this._value(_this.defaultValue());
            }
        });
        _this.allowMultiselect.subscribe(function (newAllowMultiselect) {
            if (!newAllowMultiselect) {
                _this.selectAllValues(false);
            }
            _this._resetDefaultValues();
        });
        _this.selectAllValues.subscribe(function (_) {
            _this._resetDefaultValues();
        });
        return _this;
    }
    Parameter.prototype._patchSerializationsInfo = function (infos, propertyName, action) {
        var property = (infos.filter(function (prop) { return prop.propertyName === propertyName; })[0]);
        if (!!property) {
            action(property);
        }
    };
    Parameter.prototype.getInfo = function () {
        var _this = this;
        var info = _utils_2.deepExtend([], _parameter_1.dashboardParameterSerializationsInfo);
        if (this._isNameValid) {
            this._patchSerializationsInfo(info, _parameter_1.parameterName.propertyName, function (prop) {
                prop.validationRules.push({
                    type: "custom",
                    validationCallback: function (options) { return _this._isNameValid(options.value); },
                    message: _default_1.getLocalizationById("DashboardWebStringId.Parameters.ParameterNameShouldBeUnique")
                });
            });
        }
        if (this.type) {
            var defaultValueEditor = _parameters_helper_1.ParameterHelper.getEditorType(this.type());
            if (this.lookUpSourceType() !== "None") {
                if (this.allowMultiselect()) {
                    defaultValueEditor = _base_metadata_1.editorTemplates.multiValueSelect;
                }
                else {
                    defaultValueEditor = _base_metadata_1.editorTemplates.singleValueSelect;
                }
            }
            this._patchSerializationsInfo(info, _parameter_1.defaultValue.propertyName, function (prop) { prop.editor = defaultValueEditor; });
            this._patchSerializationsInfo(info, _parameter_1.defaultValue.propertyName, function (prop) { prop.defaultVal = _parameters_helper_1.ParameterHelper.getDefaultTypeValue(_this.type()); });
        }
        if (this.staticListLookUpSettings && !!this.staticListLookUpSettings()) {
            this._patchSerializationsInfo(info, static_list_lookup_settings_1._staticListLookUpSettingsSerializationInfo.propertyName, function (prop) { prop.modelName = static_list_lookup_settings_1.StaticListLookUpSettings.modelName; });
        }
        if (this.staticListLookUpSettings && !!this.dynamicListLookUpSettings()) {
            this._patchSerializationsInfo(info, dynamic_list_lookup_settings_1._dynamicListLookUpSettingsSerializationInfo.propertyName, function (prop) { prop.modelName = dynamic_list_lookup_settings_1.DynamicListLookUpSettings.modelName; });
        }
        return info;
    };
    Parameter.prototype.isPropertyVisible = function (propertyName) {
        if (propertyName === static_list_lookup_settings_1._staticListLookUpSettingsSerializationInfo.propertyName) {
            return !!this.staticListLookUpSettings();
        }
        if (propertyName === dynamic_list_lookup_settings_1._dynamicListLookUpSettingsSerializationInfo.propertyName) {
            return !!this.dynamicListLookUpSettings();
        }
        if (propertyName === _parameter_1.selectAllValues.propertyName) {
            return this.allowMultiselect();
        }
        return true;
    };
    Parameter.prototype.isPropertyDisabled = function (propertyName) {
        if (propertyName === _parameter_1.allowMultiselect.propertyName) {
            return this.lookUpSourceType() === "None";
        }
        return false;
    };
    Parameter.prototype._resetDefaultValues = function () {
        this.defaultValue(_parameters_helper_1.ParameterHelper.convertSingleValue(null, this.type(), this.allowNull()));
        this.defaultValues(this.allowNull() ? null : []);
    };
    Parameter.prototype.grabFrom = function (another) {
        this.name(another.name.peek());
        this._type(another._type.peek());
        this.allowNull(another.allowNull.peek());
        this.parameterVisible(another.parameterVisible.peek());
        this.description(another.description.peek());
        this.defaultValue(another.defaultValue.peek());
        this.allowMultiselect(another.allowMultiselect.peek());
        this.defaultValues(another.defaultValues.peek());
        this.selectAllValues(another.selectAllValues.peek());
        this.staticListLookUpSettings(another.staticListLookUpSettings.peek());
        this.dynamicListLookUpSettings(another.dynamicListLookUpSettings.peek());
    };
    Parameter.prototype._getDefaultItemType = function () {
        return "Parameter";
    };
    Parameter.SelectAllValue = "7BD68C11-DC21-4571-8EF6-AAB6E15355EF";
    __decorate([
        _utils_1.collectionItemType("Value")
    ], Parameter.prototype, "defaultValues", void 0);
    return Parameter;
}(serializable_model_1.TypedSerializableModel));
exports.Parameter = Parameter;
