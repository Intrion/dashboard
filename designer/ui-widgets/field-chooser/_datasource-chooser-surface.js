/**
* DevExpress Dashboard (_datasource-chooser-surface.js)
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
var _field_chooser_surface_1 = require("./_field-chooser-surface");
var ko = require("knockout");
var DataSourceChooserController = (function (_super) {
    __extends(DataSourceChooserController, _super);
    function DataSourceChooserController(params) {
        var _this = _super.call(this, { startPath: ko.observable(""), dataSourceBrowser: params.dataSourceBrowser, selectedField: ko.observable(), listChanged: params.listChanged, filter: undefined }) || this;
        _this.selectedField.subscribe(function (field) {
            params.dataSource(field && field["dataSourceName"]);
            params.dataMember(field && field["dataMemberName"]);
        });
        var updatingWrapper = function (func) {
            _this.lists()[0].ready(false);
            func();
            setTimeout(function () {
                _this.lists().forEach(function (list) { return list.ready(true); });
                _this.listChanged && _this.listChanged();
            }, 1);
        };
        var updateSelection = function () {
            if (params.dataSource() && params.dataMember()) {
                updatingWrapper(function () {
                    var newList = new _field_chooser_surface_1.FieldChooserList(_this, params.dataSource(), [params.dataSource()], _this.selectedField);
                    newList.index(1);
                    _this.lists.push(newList);
                    _this.lists().forEach(function (list, index) { return list.index(index - _this.lists().length + 1); });
                });
            }
            _this.selectedField({ dataMember: ko.observable(params.dataMember() || params.dataSource()), dataSourceName: params.dataSource(), dataMemberName: params.dataMember() });
        };
        if (ko.isSubscribable(params.active)) {
            params.active.subscribe(function (newVal) {
                if (newVal) {
                    updateSelection();
                }
                else {
                    _this.selectedField(undefined);
                    updatingWrapper(function () {
                        _this.lists([_this.lists()[0]]);
                        _this.lists()[0].index(0);
                    });
                }
            });
        }
        updateSelection();
        return _this;
    }
    return DataSourceChooserController;
}(_field_chooser_surface_1.SliderController));
exports.DataSourceChooserController = DataSourceChooserController;
ko.components.register('dx-datasource-chooser', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            params.listChanged = _field_chooser_surface_1.getScrollViewUpdater(componentInfo.element);
            return new DataSourceChooserController(params);
        }
    },
    template: { element: 'dx-datasource-chooser-slider' }
});
