/**
* DevExpress Dashboard (_data-source-parameter-wrapper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _parameters_item_provider_1 = require("./_parameters-item-provider");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var _utils_1 = require("../../../data/_utils");
var ko = require("knockout");
var DataSourceParameterWrapper = (function () {
    function DataSourceParameterWrapper(parameter, dashboardParameters) {
        var _this = this;
        this.parameter = parameter;
        this.name = ko.computed({
            read: function () { return parameter.name(); },
            write: function (val) { return parameter.name(val); }
        });
        this.isValid = ko.computed({
            read: function () { return parameter.isValid(); },
            write: function (val) { return parameter.isValid(val); }
        });
        this.type = ko.computed({
            read: function () { return parameter.type(); },
            write: function (val) { return parameter.type(val); }
        });
        this.resultType = ko.computed({
            read: function () { return parameter.resultType(); },
            write: function (val) { return parameter.resultType(val); }
        });
        var _value = ko.computed({
            read: function () {
                if (!!parameter.value() && !!parameter.value().value) {
                    return parameter.value().value();
                }
                return parameter.value();
            },
            write: function (val) {
                if (!!parameter.value() && !!parameter.value().value) {
                    parameter.value().value(val);
                }
                else {
                    parameter.value(val);
                }
            }
        });
        this.expressionEditable = {
            value: _value,
            patchFieldName: function (fieldName) {
                if (fieldName && fieldName.toLowerCase().indexOf("parameters.parameters.") === 0) {
                    return "Parameters." + fieldName.split(".")[2];
                }
                return fieldName;
            },
            itemsProvider: new _parameters_item_provider_1.ParametersItemProvider(dashboardParameters)
        };
        this.value = ko.computed({
            read: function () { return !!parameter.value() && !!parameter.value().value && _this.expressionEditable || parameter.value(); },
            write: function (val) { return _value(val); }
        });
    }
    DataSourceParameterWrapper.prototype.isPropertyVisible = function (name) {
        return this.parameter.isPropertyVisible(name);
    };
    DataSourceParameterWrapper.prototype.getInfo = function () {
        var info = this.parameter.getInfo().filter(function (item) { return !!item.editor; }).map(function (item) { return _utils_1.deepExtend({}, item); });
        info.filter(function (item) { return item.editor.header === "dxrd-expressionstring"; }).forEach(function (item) {
            item.editor = _base_metadata_1.editorTemplates.expression;
        });
        return info;
    };
    Object.defineProperty(DataSourceParameterWrapper.prototype, "specifics", {
        get: function () {
            return this.parameter.specifics;
        },
        enumerable: true,
        configurable: true
    });
    return DataSourceParameterWrapper;
}());
exports.DataSourceParameterWrapper = DataSourceParameterWrapper;
