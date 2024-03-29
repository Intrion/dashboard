﻿/**
* DevExpress Dashboard (_data-item-container-collection-surface.js)
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
var _binding_model_1 = require("../../../model/items/_binding-model");
var _undo_engine_helper_1 = require("../../../model/internal/_undo-engine-helper");
var _data_item_container_surface_1 = require("../binding-details/_data-item-container-surface");
var _data_item_container_seed_1 = require("../binding-details/_data-item-container-seed");
var _display_name_provider_1 = require("../../_display-name-provider");
var $ = require("jquery");
var ko = require("knockout");
var DataItemContainerCollectionSurface = (function () {
    function DataItemContainerCollectionSurface(itemSurface, holder, sectionInfo, warning) {
        var _this = this;
        this.itemSurface = itemSurface;
        this.holder = holder;
        this.sectionInfo = sectionInfo;
        this.warning = warning;
        this._disposables = [];
        this.addDataItemContainerClick = function () {
            var dataItemContainer = new _data_item_container_seed_1.DataItemContainerSeed(_this.itemSurface.dashboardItem, _this.sectionInfo.bindingProperty.dataItemType);
            _this.selectContainerSample(dataItemContainer);
        };
        this.selectContainerSample = function (dataItemContainer) {
            _this.newContainerSample(dataItemContainer);
            var newContainerSurface = new _data_item_container_surface_1.DataItemContainerSurface(dataItemContainer, _this.sectionInfo.detailsPropertiesComposer, _this.itemSurface, _this.removeDataItem);
            newContainerSurface.dataFieldChoosed.add(function (dataField) {
                _this._chooseDataField(dataField, newContainerSurface);
            });
            _this._disposables.push(newContainerSurface.containerType.subscribe(function (containerType) {
                var newContainer = _this.sectionInfo.bindingProperty.creator(containerType);
                _this.selectContainerSample(newContainer);
            }));
            _this.itemSurface.propertiesController.mainModel({
                name: "dx-dashboard-data-item-container",
                data: newContainerSurface,
                containingCollection: _this.items
            });
        };
        this.removeDataItem = function (container) {
            _this._removeDataItem(container);
        };
        this.dataItemDisplayNameProvider = function (dataItem) {
            return _display_name_provider_1.getDataItemDisplayName(_this.itemSurface._dataSourceBrowser, _this.itemSurface.dashboardItem, dataItem);
        };
        this.getDisplayName = function (object) {
            return _display_name_provider_1.getDataItemContainerDisplayName(_this.itemSurface._dataSourceBrowser, _this.itemSurface.dashboardItem, object);
        };
        this.selectDataItemContainer = function (container) {
            var surface = new _data_item_container_surface_1.DataItemContainerSurface(container, _this.sectionInfo.detailsPropertiesComposer, _this.itemSurface, _this.removeDataItem);
            surface.dataFieldChoosed.add(function (dataField, link) {
                if (link) {
                    var newContainer = _this.sectionInfo.bindingProperty.creator("", dataField);
                    var binding = newContainer._getBindingModel()[0];
                    newContainer[binding.propertyName].uniqueName(link.uniqueName());
                    var prevContainers = _this.items().filter(function (item) {
                        var bindingProperty = item[binding.propertyName];
                        if (!!bindingProperty) {
                            return bindingProperty.dataItem().groupIndex && bindingProperty.dataItem().groupIndex() === link.dataItem().groupIndex();
                        }
                        return false;
                    });
                    _this.items.splice(_this.items().indexOf(prevContainers[prevContainers.length - 1]) + 1, 0, newContainer);
                }
            });
            _this._disposables.push(surface.containerType.subscribe(function (containerType) {
                _this._processChangeContainerType(containerType, container, surface);
            }));
            _this.itemSurface.propertiesController.mainModel({
                name: "dx-dashboard-data-item-container",
                data: surface,
                containingCollection: _this.items
            });
        };
        this.newContainerSample = ko.observable();
        this.template = "dx-dashboard-data-item-container-collection";
        this.groups = ko.computed(function () {
            var result = [], position = 0;
            _this.items().forEach(function (dataItemContainer) {
                var dataItem = dataItemContainer[dataItemContainer._getBindingModel()[0].propertyName].dataItem();
                if (dataItem instanceof dimension_1.Dimension && _data_field_1.IsOlapHierarchyField(dataItem)) {
                    var dimension = dataItem;
                    var group = result.filter(function (group) { return group.groupIndex === dimension.groupIndex(); })[0];
                    if (!group) {
                        group = {
                            groupIndex: dimension.groupIndex(),
                            items: [],
                            position: position++
                        };
                        result.push(group);
                    }
                    group.items.push(dataItemContainer);
                }
                else {
                    result.push({
                        groupIndex: undefined,
                        items: [dataItemContainer],
                        position: position++
                    });
                }
            });
            return result;
        });
        this._disposables.push(this.groups);
    }
    Object.defineProperty(DataItemContainerCollectionSurface.prototype, "items", {
        get: function () {
            return this.holder[this.sectionInfo.bindingProperty.propertyName];
        },
        enumerable: true,
        configurable: true
    });
    DataItemContainerCollectionSurface.prototype._chooseDataField = function (dataField, newContainerSurface) {
        var containerModel = [newContainerSurface.model()];
        if (containerModel[0] instanceof _data_item_container_seed_1.DataItemContainerSeed) {
            containerModel = containerModel[0].grow(this.itemSurface.dashboardItem, this.sectionInfo.bindingProperty, dataField);
        }
        this.items.push.apply(this.items, containerModel);
        this.newContainerSample(undefined);
        this.selectDataItemContainer(containerModel[0]);
    };
    DataItemContainerCollectionSurface.prototype._removeDataItem = function (container) {
        var _this = this;
        this.groups().forEach(function (group) {
            if (!!group.items.filter(function (item) { return item === container; })[0]) {
                group.items.forEach(function (item) {
                    _this.items.remove(item);
                    item._getBindingModel().forEach(function (binding) {
                        var dataItem = item[binding.propertyName].dataItem();
                        if (!!dataItem) {
                            _this.itemSurface.dashboardItem._removeDataItem(dataItem, true);
                        }
                    });
                });
            }
        });
    };
    DataItemContainerCollectionSurface.prototype._processChangeContainer = function (newContainer, transfers, container, surface) {
        var _this = this;
        var position = this.items().indexOf(surface.model());
        transfers.forEach(function (transfer) {
            var link = newContainer[transfer.newBinding.propertyName];
            _this.itemSurface.dashboardItem._updateDataItem(transfer.dataItem, transfer.newBinding, transfer.dataField, link._specifics.acceptableShapingType);
            link.uniqueName(transfer.dataItem.uniqueName());
            _this.items.splice(position, 1, newContainer);
            link.dataItem().grabFrom(transfer.dataItem);
        });
        this.selectDataItemContainer(newContainer);
    };
    DataItemContainerCollectionSurface.prototype.getCompatibleTransfers = function (container, newContainer) {
        var _this = this;
        if (_binding_model_1._areTheSameBindingProviders(container, newContainer)) {
            return newContainer
                ._getBindingModel()
                .map(function (binding) {
                var filledBinding = container._getBindingModel().filter(function (b) { return b.propertyName === binding.propertyName; })[0];
                if (!filledBinding)
                    return;
                if (!container[filledBinding.propertyName].uniqueName()) {
                    return;
                }
                var dataItem = container[filledBinding.propertyName].dataItem();
                var transferInfo = {
                    filledBinding: filledBinding,
                    dataItem: dataItem,
                    newBinding: binding,
                    dataField: null,
                    promise: _this.itemSurface._dataSourceBrowser.findDataField(_this.itemSurface.dashboardItem.dataSource(), _this.itemSurface.dashboardItem.dataMember(), dataItem.dataMember())
                };
                transferInfo.promise.done(function (field) {
                    transferInfo.dataField = field;
                });
                return transferInfo;
            })
                .filter(function (t) { return !!t; });
        }
        return [];
    };
    DataItemContainerCollectionSurface.prototype._processChangeContainerType = function (containerType, container, surface) {
        var _this = this;
        var newContainer = this.sectionInfo.bindingProperty.creator(containerType);
        if (!!newContainer.grabFrom) {
            newContainer.grabFrom(container);
        }
        var transfers = this.getCompatibleTransfers(container, newContainer);
        if (transfers.length === 0) {
            var filledBinding = container._getBindingModel().filter(function (b) { return !!container[b.propertyName].uniqueName(); })[0];
            var dataItem = container[filledBinding.propertyName].dataItem();
            var binding = newContainer._getBindingModel()[0];
            var transferInfo_1 = {
                filledBinding: filledBinding,
                dataItem: dataItem,
                newBinding: binding,
                dataField: null,
                promise: this.itemSurface._dataSourceBrowser.findDataField(this.itemSurface.dashboardItem.dataSource(), this.itemSurface.dashboardItem.dataMember(), dataItem.dataMember())
            };
            transferInfo_1.promise.done(function (field) {
                transferInfo_1.dataField = field;
            });
            transfers.push(transferInfo_1);
        }
        $.when.apply($, transfers.map(function (t) { return t.promise; })).done(function () { return _this._processChangeContainer(newContainer, transfers, container, surface); });
    };
    DataItemContainerCollectionSurface.prototype.relocateItem = function (item, placeholderIndex) {
        var _this = this;
        var dataItem;
        if (item instanceof data_item_1.DataItemLink) {
            dataItem = item.dataItem();
        }
        else if (item["_getBindingModel"]) {
            this.items.splice(placeholderIndex, 0, item);
            return;
        }
        this.itemSurface
            ._dataSourceBrowser.findDataField(this.itemSurface.dashboardItem.dataSource(), this.itemSurface.dashboardItem.dataMember(), dataItem.dataMember())
            .done(function (dataField) {
            var newContainer = _this.sectionInfo.bindingProperty.creator(undefined, dataField, dataItem);
            var binding = newContainer._getBindingModel()[0];
            var link = newContainer[binding.propertyName];
            _this.itemSurface.dashboardItem._updateDataItem(dataItem, binding, dataField, link._specifics.acceptableShapingType);
            link.uniqueName(dataItem.uniqueName());
            link.dataItem().grabFrom(dataItem);
            _this.items.splice(placeholderIndex, 0, newContainer);
        });
    };
    DataItemContainerCollectionSurface.prototype.isOlap = function () {
        var filledLink = this
            .items()
            .reduce(function (links, container) { return links.concat(container._getBindingModel().map(function (bm) { return container[bm.propertyName]; })); }, [])
            .filter(function (dil) { return dil.dataItem(); })[0];
        return _data_field_1.DataField.isOlap(filledLink.dataItem().dataMember());
    };
    DataItemContainerCollectionSurface.prototype.errorFactory = function (container) {
        var _this = this;
        var errorState = ko.observable(false);
        var fieldPromises = [];
        container
            ._getBindingModel()
            .filter(function (binding) { return container[binding.propertyName].dataItem(); })
            .forEach(function (binding) {
            fieldPromises.push(_this.itemSurface._dataSourceBrowser.findDataField(_this.itemSurface.dashboardItem.dataSource(), _this.itemSurface.dashboardItem.dataMember(), container[binding.propertyName].dataItem().dataMember()));
        });
        $.when.apply($.when, fieldPromises).done(function () {
            var fields = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                fields[_i] = arguments[_i];
            }
            errorState(fields.filter(function (f) { return !f; }).length > 0);
        });
        return errorState;
    };
    ;
    DataItemContainerCollectionSurface.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DataItemContainerCollectionSurface.prototype, "_chooseDataField", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DataItemContainerCollectionSurface.prototype, "_removeDataItem", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DataItemContainerCollectionSurface.prototype, "_processChangeContainer", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DataItemContainerCollectionSurface.prototype, "relocateItem", null);
    return DataItemContainerCollectionSurface;
}());
exports.DataItemContainerCollectionSurface = DataItemContainerCollectionSurface;
