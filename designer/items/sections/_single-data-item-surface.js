﻿/**
* DevExpress Dashboard (_single-data-item-surface.js)
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
var data_item_1 = require("../../../model/data-item/data-item");
var _data_field_1 = require("../../../model/data-sources/_data-field");
var _undo_engine_helper_1 = require("../../../model/internal/_undo-engine-helper");
var _display_name_provider_1 = require("../../_display-name-provider");
var _data_item_surface_1 = require("../binding-details/_data-item-surface");
var ko = require("knockout");
var SingleDataItemSurface = (function () {
    function SingleDataItemSurface(options) {
        var _this = this;
        this._disposables = [];
        this.removeDataItem = function () {
            _this._removeDataItem();
        };
        this.dataItemDisplayNameProvider = function (dataItem) {
            return _display_name_provider_1.getDataItemDisplayName(_this.itemSurface._dataSourceBrowser, _this.itemSurface.dashboardItem, dataItem);
        };
        this.selectDataItem = function () {
            _this.dataItemSurface(new _data_item_surface_1.DataItemSurface(_this.dataItemLink, _this.sectionInfo.bindingProperty, _this.itemSurface.dashboardItem, _this.itemSurface._dataSourceBrowser, _this.itemSurface.propertiesController, true, _this.fieldConstraint));
            _this.dataItemSurface().newItemCreated.add(function (model) {
                _this.selectDataItem();
            });
            _this.itemSurface.propertiesController.mainModel({
                name: 'dx-dashboard-data-item-surface',
                data: _this.dataItemSurface()
            });
        };
        this.dataItemSurface = ko.observable();
        this.items = ko.observableArray([]);
        this.template = "dx-dashboard-data-item-single";
        this.itemSurface = options.itemSurface;
        this.sectionInfo = options.sectionInfo;
        this.warning = options.warning;
        this.fieldConstraint = options.fieldConstraint;
        this.dataItemLink = this.itemSurface.dashboardItem[this.sectionInfo.bindingProperty.propertyName];
        this._disposables.push(ko.computed(function () {
            if (_this.dataItemLink.uniqueName()) {
                _this.items([_this.dataItemLink]);
            }
        }));
        this._disposables.push(this.items.subscribe(function (newValue) {
            if (!newValue.length) {
                _this.dataItemLink.uniqueName(undefined);
            }
        }));
    }
    SingleDataItemSurface.prototype._removeDataItem = function () {
        if (!!this.dataItemLink.dataItem()) {
            this.itemSurface.propertiesController.mainModel(null);
            var dataItem = this.dataItemLink.dataItem();
            this.dataItemLink.uniqueName(undefined);
            this.itemSurface.dashboardItem._removeDataItem(dataItem);
        }
    };
    SingleDataItemSurface.prototype.relocateItem = function (item, placeholderIndex) {
        var _this = this;
        var dataItem;
        if (item instanceof data_item_1.DataItemLink) {
            dataItem = item.dataItem();
        }
        else if (item["_getBindingModel"]) {
            var x = item;
            var filledBinding = x._getBindingModel().filter(function (b) { return !!item[b.propertyName].uniqueName(); })[0];
            dataItem = item[filledBinding.propertyName].dataItem();
        }
        this.itemSurface
            ._dataSourceBrowser.findDataField(this.itemSurface.dashboardItem.dataSource(), this.itemSurface.dashboardItem.dataMember(), dataItem.dataMember())
            .done(function (dataField) {
            var newDataItem = _this.itemSurface.dashboardItem._createDataItem(dataField, _this.sectionInfo.bindingProperty);
            newDataItem.grabFrom(dataItem);
            _this.itemSurface.dashboardItem._removeDataItem(dataItem);
            _this.dataItemLink.dataItem(newDataItem);
        });
    };
    SingleDataItemSurface.prototype.isOlap = function () {
        return _data_field_1.DataField.isOlap(this.dataItemLink.dataItem() && this.dataItemLink.dataItem().dataMember());
    };
    SingleDataItemSurface.prototype.errorFactory = function (link) {
        var linkErrorState = ko.observable(false);
        if (link.dataItem()) {
            this.itemSurface._dataSourceBrowser.findDataField(this.itemSurface.dashboardItem.dataSource(), this.itemSurface.dashboardItem.dataMember(), link.dataItem().dataMember()).done(function (result) {
                linkErrorState(!result);
            });
        }
        return linkErrorState;
    };
    ;
    SingleDataItemSurface.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], SingleDataItemSurface.prototype, "_removeDataItem", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], SingleDataItemSurface.prototype, "relocateItem", null);
    return SingleDataItemSurface;
}());
exports.SingleDataItemSurface = SingleDataItemSurface;
