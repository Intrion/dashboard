/**
* DevExpress Dashboard (_parameter-dialog-binder.js)
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
var disposable_object_1 = require("../../model/disposable-object");
var _parameters_dialog_1 = require("../../viewer-parts/widgets/dialogs/_parameters-dialog");
var parameter_1 = require("../../model/parameters/parameter");
var _parameters_1 = require("../../data/_parameters");
var ko = require("knockout");
var ParameterDialogViewModel = (function (_super) {
    __extends(ParameterDialogViewModel, _super);
    function ParameterDialogViewModel(_parameters, getParameterValues) {
        var _this = _super.call(this) || this;
        _this._parameters = _parameters;
        _this._getDashboardParameterType = function (type) {
            var result = _parameters_dialog_1.parameterTypes.string;
            if (type) {
                if (type.indexOf("DateTime") > -1) {
                    result = _parameters_dialog_1.parameterTypes.dateTime;
                }
                else if ((type.indexOf("Decimal") + (type.indexOf("Double"))) > -2) {
                    result = _parameters_dialog_1.parameterTypes.float;
                }
                else if (type.indexOf("Boolean") > -1) {
                    result = _parameters_dialog_1.parameterTypes.bool;
                }
                else if (type.indexOf(".Int") > -1) {
                    result = _parameters_dialog_1.parameterTypes.int;
                }
            }
            return result;
        };
        _this.setParameters = function (newParameters) {
            newParameters.forEach(function (newParameter) {
                var parameterModel = _this._parameters.peek().filter(function (p) { return p.name.peek() === newParameter.getName(); })[0];
                if (parameterModel) {
                    parameterModel._value(newParameter.getValue());
                }
            });
        };
        _this.parameterCollection = ko.computed(function () {
            var parameters = _this._parameters();
            var parameterCollection = new _parameters_1.ParametersCollection(parameters.map(function (param) {
                var values = _this._getParameterValues(param, getParameterValues);
                return {
                    Name: param.name(),
                    DefaultValue: _this._getParameterDefaultValue(param, values),
                    Description: param.description(),
                    Values: values,
                    ContainsDisplayMember: param.containsDisplayMember(),
                    Visible: param.parameterVisible(),
                    AllowMultiselect: param.allowMultiselect(),
                    AllowNull: param.allowNull(),
                    Type: _this._getDashboardParameterType(param.type())
                };
            }));
            parameters.forEach(function (param) {
                var actualValue = param._actualValue();
                if (actualValue === parameter_1.Parameter.SelectAllValue) {
                    actualValue = _this._getParameterValues(param, getParameterValues).map(function (valueViewModel) { return valueViewModel.Value; });
                }
                parameterCollection.setParameterValue(param.name(), actualValue);
            });
            parameterCollection.collectionChanged.add(function () {
                _this.setParameters(parameterCollection.getParameterList());
            });
            return parameterCollection;
        });
        return _this;
    }
    ParameterDialogViewModel.prototype._getParameterValues = function (parameter, getParameterValues) {
        var parameterValues = null;
        if (!!parameter.staticListLookUpSettings()) {
            parameterValues = parameter.staticListLookUpSettings().values().map(function (item) {
                return {
                    Value: item.value(),
                };
            });
        }
        else if (!!parameter.dynamicListLookUpSettings()) {
            parameterValues = getParameterValues(parameter.type(), parameter.dynamicListLookUpSettings())();
        }
        return parameterValues;
    };
    ParameterDialogViewModel.prototype._getParameterDefaultValue = function (param, paramValues) {
        if (param.lookUpSourceType() !== "None" && param.allowMultiselect()) {
            if (param.selectAllValues()) {
                return paramValues && paramValues.map(function (value) { return value.Value; }) || [];
            }
            else {
                return param._valuesOfDefaultValues() || [];
            }
        }
        else {
            return param.defaultValue();
        }
    };
    return ParameterDialogViewModel;
}(disposable_object_1.DisposableObject));
exports.ParameterDialogViewModel = ParameterDialogViewModel;
