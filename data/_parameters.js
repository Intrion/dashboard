/**
* DevExpress Dashboard (_parameters.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("./_utils");
var $ = require("jquery");
var ParameterValue = (function () {
    function ParameterValue(value, displayText) {
        this._value = value;
        this._displayText = displayText;
    }
    ParameterValue.prototype.getValue = function () {
        return this._value;
    };
    ParameterValue.prototype.getDisplayText = function () {
        return this._displayText;
    };
    return ParameterValue;
}());
var Parameter = (function () {
    function Parameter(parameterViewModel) {
        this.parameterChanged = $.Callbacks();
        this._name = parameterViewModel.Name;
        this._value = parameterViewModel.DefaultValue;
        this._defaultValue = parameterViewModel.DefaultValue;
        this._description = parameterViewModel.Description;
        this._type = parameterViewModel.Type;
        this._visible = parameterViewModel.Visible;
        this._allowNull = parameterViewModel.AllowNull;
        this._allowmultiselect = parameterViewModel.AllowMultiselect;
        this.setLookUpValues(parameterViewModel.Values, parameterViewModel.ContainsDisplayMember);
    }
    Parameter.prototype.getName = function () {
        return this._name;
    };
    Parameter.prototype.getAllowNull = function () {
        return this._allowNull;
    };
    Parameter.prototype.getAllowMultiselect = function () {
        return this._allowmultiselect;
    };
    Parameter.prototype.getValue = function () {
        return this._value;
    };
    Parameter.prototype.setValue = function (value) {
        if (!_utils_1.arrayEquals(this._value, value)) {
            this._value = value;
            this.parameterChanged.fire();
        }
    };
    Parameter.prototype.getDefaultValue = function () {
        return this._defaultValue;
    };
    Parameter.prototype.getDescription = function () {
        return this._description;
    };
    Parameter.prototype.getType = function () {
        return this._type;
    };
    Parameter.prototype.getLookUpValues = function () {
        return this._values;
    };
    Parameter.prototype.setLookUpValues = function (values, containsDisplayMember) {
        var that = this;
        if (values === null)
            that._values = values;
        else {
            that._values = [];
            if (values) {
                $.each(values, function (index, value) {
                    that._values.push(new ParameterValue(value.Value, containsDisplayMember ? value.DisplayText : value.Value));
                });
            }
        }
    };
    Parameter.prototype.isVisible = function () {
        return this._visible;
    };
    return Parameter;
}());
exports.Parameter = Parameter;
var ParametersCollection = (function () {
    function ParametersCollection(parametersViewModel) {
        this.collectionChanged = $.Callbacks();
        this._parameters = [];
        var that = this;
        if (parametersViewModel) {
            $.each(parametersViewModel, function (index, parameterViewModel) {
                var parameter = new Parameter(parameterViewModel);
                parameter.parameterChanged.add(function () {
                    that.collectionChanged.fire();
                });
                that._parameters.push(parameter);
            });
        }
    }
    ParametersCollection.prototype.updateParameterValues = function (parametersViewModel) {
        var that = this;
        $.each(parametersViewModel, function (index, parameterViewModel) {
            that.getParameterByName(parameterViewModel.Name).setLookUpValues(parameterViewModel.Values, parameterViewModel.ContainsDisplayMember);
        });
    };
    ParametersCollection.prototype.setParameters = function (newParameters) {
        var that = this;
        $.each(newParameters, function (index, newParameter) {
            var parameter = that.getParameterByName(newParameter.Name);
            parameter.setValue(newParameter.Value);
        });
    };
    ParametersCollection.prototype.getParameterValues = function () {
        var parameterValues = [];
        this._parameters.forEach(function (parameter) {
            parameterValues.push({
                Name: parameter.getName(),
                Value: parameter.getValue()
            });
        });
        return parameterValues;
    };
    ParametersCollection.prototype.getParameterDefaultValue = function (name) {
        return this.getParameterByName(name).getDefaultValue();
    };
    ParametersCollection.prototype.getParameterValue = function (name) {
        return this.getParameterByName(name).getValue();
    };
    ParametersCollection.prototype.setParameterValue = function (name, value) {
        var parameter = this.getParameterByName(name);
        parameter.setValue(value);
    };
    ParametersCollection.prototype.getParameters = function () {
        return this.getParameterList();
    };
    ParametersCollection.prototype.getVisibleParameters = function () {
        return this._parameters.filter(function (parameter) { return parameter.isVisible(); });
    };
    ParametersCollection.prototype.getParameterList = function () {
        return this._parameters;
    };
    ParametersCollection.prototype.getParameterByName = function (name) {
        var that = this;
        return that._parameters.filter(function (parameter) { return parameter.getName() == name; })[0];
    };
    ParametersCollection.prototype.getParameterByIndex = function (index) {
        return this._parameters[index];
    };
    return ParametersCollection;
}());
exports.ParametersCollection = ParametersCollection;
