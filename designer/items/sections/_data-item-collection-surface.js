﻿/**
* DevExpress Dashboard (_data-item-collection-surface.js)
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
var dimension_1 = require("../../../model/data-item/dimension");
var _undo_engine_helper_1 = require("../../../model/internal/_undo-engine-helper");
var _data_item_surface_1 = require("../binding-details/_data-item-surface");
var _display_name_provider_1 = require("../../_display-name-provider");
var ko = require("knockout");
var DataItemCollectionSurface = (function () {
    function DataItemCollectionSurface(itemSurface, sectionInfo, extendTabsHandler, warning) {
        var _this = this;
        this.itemSurface = itemSurface;
        this.sectionInfo = sectionInfo;
        this.extendTabsHandler = extendTabsHandler;
        this.warning = warning;
        this._disposables = [];
        this.addClick = function () {
            var dataLink = new data_item_1.DataItemLink(_this.itemSurface.dashboardItem);
            _this.newItemSample(dataLink);
            var surface = new _data_item_surface_1.DataItemSurface(dataLink, _this.sectionInfo.bindingProperty, _this.itemSurface.dashboardItem, _this.itemSurface._dataSourceBrowser, _this.itemSurface.propertiesController, true, null, _this.extendTabsHandler);
            surface.newItemCreated.add(function (model) { return _this._addDataItem(model); });
            surface.itemSelected.add(function (model) {
                _this.newItemSample(undefined);
                _this.selectDataItem(model);
            });
            _this.itemSurface.propertiesController.mainModel({
                name: 'dx-dashboard-data-item-surface',
                data: surface,
                containingCollection: _this.dataItems
            });
        };
        this.removeDataItem = function (data) {
            _this._removeDataItem(data);
        };
        this.dataItemDisplayNameProvider = function (dataItem) {
            return _display_name_provider_1.getDataItemDisplayName(_this.itemSurface._dataSourceBrowser, _this.itemSurface.dashboardItem, dataItem);
        };
        this.selectDataItem = function (data) {
            var surface = new _data_item_surface_1.DataItemSurface(data, _this.sectionInfo.bindingProperty, _this.itemSurface.dashboardItem, _this.itemSurface._dataSourceBrowser, _this.itemSurface.propertiesController, true, null, _this.extendTabsHandler);
            surface.newItemCreated.add(function (model) {
                _this._addDataItem(model);
            });
            _this.dataItemSurface(surface);
            _this.itemSurface.propertiesController.mainModel({
                name: 'dx-dashboard-data-item-surface',
                data: _this.dataItemSurface(),
                containingCollection: _this.dataItems
            });
        };
        this.dataItemSurface = ko.observable();
        this.newItemSample = ko.observable();
        this.template = "dx-dashboard-data-item-collection";
        this.dataItems = itemSurface.dashboardItem[sectionInfo.bindingProperty.propertyName];
        this.groups = ko.computed(function () {
            var result = [], position = 0;
            _this.dataItems().forEach(function (dataItemLink) {
                if (dataItemLink.dataItem() instanceof dimension_1.Dimension && _data_field_1.IsOlapHierarchyField(dataItemLink.dataItem())) {
                    var dimension = dataItemLink.dataItem();
                    var group = result.filter(function (group) { return group.groupIndex === dimension.groupIndex(); })[0];
                    if (!group) {
                        group = {
                            groupIndex: dimension.groupIndex(),
                            items: [],
                            position: position++
                        };
                        result.push(group);
                    }
                    group.items.push(dataItemLink);
                }
                else {
                    result.push({
                        groupIndex: undefined,
                        items: [dataItemLink],
                        position: position++
                    });
                }
            });
            return result;
        });
    }
    Object.defineProperty(DataItemCollectionSurface.prototype, "items", {
        get: function () {
            return this.dataItems;
        },
        enumerable: true,
        configurable: true
    });
    DataItemCollectionSurface.prototype._addDataItem = function (model) {
        this.dataItems.push(model);
    };
    DataItemCollectionSurface.prototype._removeDataItem = function (link) {
        var dataItem = link.dataItem();
        this.dataItems.remove(link);
        this.itemSurface.dashboardItem._removeDataItem(dataItem, true);
        if (dataItem instanceof dimension_1.Dimension && _data_field_1.IsOlapHierarchyField(dataItem)) {
            for (var i = this.dataItems().length - 1; i >= 0; i--) {
                var groupItemLink = this.dataItems()[i];
                var groupItem = groupItemLink.dataItem();
                if (groupItem instanceof dimension_1.Dimension && groupItem.groupIndex() == dataItem.groupIndex()) {
                    this.dataItems.remove(groupItemLink);
                    this.itemSurface.dashboardItem._removeDataItem(groupItem, true);
                }
            }
        }
    };
    DataItemCollectionSurface.prototype.relocateItem = function (item, placeholderIndex) {
        var _this = this;
        var dataLink = new data_item_1.DataItemLink(this.itemSurface.dashboardItem);
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
            dataLink.dataItem(newDataItem);
            _this.items.splice(placeholderIndex, 0, dataLink);
        });
    };
    DataItemCollectionSurface.prototype.isOlap = function () {
        var filledItem = this
            .items()
            .filter(function (item) { return item.dataItem(); })[0];
        return _data_field_1.DataField.isOlap(filledItem.dataItem().dataMember());
    };
    DataItemCollectionSurface.prototype.errorFactory = function (link) {
        var linkErrorState = ko.observable(false);
        if (link.dataItem()) {
            this.itemSurface._dataSourceBrowser.findDataField(this.itemSurface.dashboardItem.dataSource(), this.itemSurface.dashboardItem.dataMember(), link.dataItem().dataMember()).done(function (result) {
                linkErrorState(!result);
            });
        }
        return linkErrorState;
    };
    ;
    DataItemCollectionSurface.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DataItemCollectionSurface.prototype, "_addDataItem", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DataItemCollectionSurface.prototype, "_removeDataItem", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DataItemCollectionSurface.prototype, "relocateItem", null);
    return DataItemCollectionSurface;
}());
exports.DataItemCollectionSurface = DataItemCollectionSurface;
