/**
* DevExpress Dashboard (_parameter-settings-viewmodel.js)
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
var parameter_1 = require("../../model/parameters/parameter");
var disposable_object_1 = require("../../model/disposable-object");
var _lookup_values_viewmodel_1 = require("./_lookup-values-viewmodel");
var validation_engine_1 = require("devextreme/ui/validation_engine");
var _helper_classes_1 = require("../../model/internal/_helper-classes");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var ParameterEditorViewModel = (function (_super) {
    __extends(ParameterEditorViewModel, _super);
    function ParameterEditorViewModel(dashboard, _dataSourceBrowserGetter) {
        var _this = _super.call(this) || this;
        _this.dashboard = dashboard;
        _this._dataSourceBrowserGetter = _dataSourceBrowserGetter;
        _this.getLookupDefaultValuesViewModel = function (parameter, container) { return new _lookup_values_viewmodel_1.LookupDefaultValuesViewModel(parameter, _this.dataSourceBrowser, container); };
        _this.getLookupDefaultValueViewModel = function (parameter, container) { return new _lookup_values_viewmodel_1.LookupDefaultValueViewModel(parameter, _this.dataSourceBrowser, container); };
        _this.selectedParameters = ko.observable([]);
        _this.selectedParameter = ko.computed(function () {
            return _this.selectedParameters()[0];
        });
        _this.selectedParameterClone = ko.observable();
        _this.allowReordering = ko.observable(false);
        _this.toggleReordering = function () {
            _this.allowReordering(!_this.allowReordering());
        };
        _this.addParameter = function () {
            var name = _helper_classes_1.NameGenerator.generateName(_default_1.getLocalizationById("DashboardStringId.NewParameterNamePrefix"), _this.dashboard().parameters(), 'name', 1), param = new parameter_1.Parameter({ "@Name": name });
            _this.dashboard().parameters.push(param);
            _this.selectedParameters([param]);
        };
        _this.removeParameter = function () {
            _this.dashboard().parameters.remove(_this.selectedParameter());
            _this.selectedParameters([_this.dashboard().parameters()[0]]);
        };
        _this.reorderParameters = function (e) {
            var reorder = function (array, from, to) {
                var innerArray = array();
                innerArray.splice(to, 0, innerArray.splice(from, 1)[0]);
                array(innerArray);
            };
            reorder(_this.dashboard().parameters, e.fromIndex, e.toIndex);
            _this.selectedParameters([_this.dashboard().parameters()[e.toIndex]]);
        };
        _this.validationGroupInitialized = function (e) {
            _this.validationGroup = e.component;
        };
        _this.toDispose(_this.selectedParameter.subscribe(function (sp) {
            var clone = undefined;
            if (sp) {
                clone = new parameter_1.Parameter();
                clone.grabFrom(sp);
                clone._isNameValid = function (name) {
                    return _this.dashboard().parameters().filter(function (p) { return p !== sp && p.name() === name; }).length === 0;
                };
                var propertyNames = ["name", "allowNull", "parameterVisible", "description", "defaultValue", "allowMultiselect",
                    "_type", "lookUpSourceType", "defaultValues", "selectAllValues",
                    "staticListLookUpSettings", "dynamicListLookUpSettings"];
                propertyNames.forEach(function (propertyName) {
                    clone[propertyName].subscribe(function (val) {
                        var validationResult = validation_engine_1.default.validateGroup(_this.validationGroup);
                        if (validationResult.isValid) {
                            sp[propertyName](val);
                        }
                    });
                });
                _this.selectedParameterClone(clone);
            }
        }));
        _this.toDispose(_this.selectedParameter);
        return _this;
    }
    Object.defineProperty(ParameterEditorViewModel.prototype, "dataSourceBrowser", {
        get: function () {
            return this._dataSourceBrowserGetter ? this._dataSourceBrowserGetter() : undefined;
        },
        enumerable: true,
        configurable: true
    });
    ParameterEditorViewModel.prototype.initialize = function () {
        var _this = this;
        var setDefaultSelectedParameter = function (dashboard) {
            if (dashboard && dashboard.parameters.peek().length > 0) {
                _this.selectedParameters([dashboard.parameters.peek()[0]]);
            }
        };
        this.toDispose(this.dashboard.subscribe(setDefaultSelectedParameter));
        setDefaultSelectedParameter(this.dashboard.peek());
    };
    return ParameterEditorViewModel;
}(disposable_object_1.DisposableObject));
exports.ParameterEditorViewModel = ParameterEditorViewModel;
