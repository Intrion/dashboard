﻿/**
* DevExpress Dashboard (_data-item-container-surface.js)
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
var _accordion_tab_1 = require("../../_accordion-tab");
var _data_item_surface_1 = require("./_data-item-surface");
var _undo_engine_helper_1 = require("../../../model/internal/_undo-engine-helper");
var _display_name_provider_1 = require("../../_display-name-provider");
var $ = require("jquery");
var ko = require("knockout");
var _data_source_browser_1 = require("../../../common/_data-source-browser");
var DataItemContainerSurface = (function () {
    function DataItemContainerSurface(model, detailsPropertiesComposer, itemSurface, _removeDataItemContainer) {
        var _this = this;
        this.detailsPropertiesComposer = detailsPropertiesComposer;
        this.itemSurface = itemSurface;
        this._removeDataItemContainer = _removeDataItemContainer;
        this._disposables = [];
        this.propertiesTabs = ko.observableArray([]);
        this.selectItem = function (model, binding) {
            if (model[binding.propertyName]._specifics.isAttribute &&
                _this.model()._getBindingModel().some(function (bindingProp) { return _this.model()[bindingProp.propertyName] !== model[binding.propertyName] && !_this.model()[bindingProp.propertyName].dataItem(); }))
                return;
            var dataItemSurface = new _data_item_surface_1.DataItemSurface(model[binding.propertyName], binding, _this.itemSurface.dashboardItem, _this.itemSurface._dataSourceBrowser, _this.itemSurface.propertiesController, false);
            dataItemSurface.newItemCreated.add(function (link, newField) {
                if (!_this.model()._getBindingModel().some(function (bindingProp) {
                    return (_this.model()[bindingProp.propertyName] !== link) && _this.model()[bindingProp.propertyName].dataItem();
                })) {
                    _this.dataFieldChoosed.fire(newField, link);
                }
            });
            _this.itemSurface.propertiesController.secondaryModel({
                name: "dx-dashboard-secondary-item-surface",
                displayText: binding.emptyPlaceholder,
                data: dataItemSurface
            });
        };
        this.model = ko.observable();
        this.containerType = ko.observable();
        this.singleItemSurface = ko.observable();
        this.dataFieldChoosed = $.Callbacks();
        this.removeDataItem = function (dataItemLink) {
            _this._removeDataItem(dataItemLink);
        };
        this.dataItemDisplayNameProvider = function (dataItem) {
            return _display_name_provider_1.getDataItemDisplayName(_this.itemSurface._dataSourceBrowser, _this.itemSurface.dashboardItem, dataItem);
        };
        if (model.itemType) {
            this.containerType(model.seriesType ? model.seriesType() : model.itemType());
        }
        var updatePropertiesTabs = function (otherTabs) {
            var promises = [];
            promises.push(_this.itemSurface._dataSourceBrowser.getDataFieldsArray(_this.itemSurface.dashboardItem.dataSource(), _this.itemSurface.dashboardItem.dataMember(), "", _data_source_browser_1.isNonCollectionDataField));
            _this.model()._getBindingModel().forEach(function (b) {
                _this.model()[b.propertyName].uniqueName() && promises.push(_this.itemSurface._dataSourceBrowser.findDataField(_this.itemSurface.dashboardItem.dataSource(), _this.itemSurface.dashboardItem.dataMember(), _this.model()[b.propertyName].dataItem().dataMember()));
            });
            $.when.apply($, promises).done(function () {
                var fields = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    fields[_i] = arguments[_i];
                }
                otherTabs = otherTabs.concat(_this.detailsPropertiesComposer.composeTabs(_this.model(), _this.itemSurface.dashboardItem, _this.containerType, _this.itemSurface._dataSourceBrowser));
                _this.propertiesTabs(otherTabs);
            });
        };
        this._disposables.push(this.model.subscribe(function (newModel) {
            if (!!_this.singleItemSurface.peek()) {
                _this.singleItemSurface.peek().dispose();
                _this.singleItemSurface(null);
            }
            if (newModel._getBindingModel().length === 1) {
                var binding = newModel._getBindingModel()[0];
                var dataItemSurface = new _data_item_surface_1.DataItemSurface(newModel[binding.propertyName], binding, _this.itemSurface.dashboardItem, _this.itemSurface._dataSourceBrowser, _this.itemSurface.propertiesController, false);
                dataItemSurface.newItemCreated.add(function (link, newField) {
                    _this.dataFieldChoosed.fire(newField, link);
                });
                _this.singleItemSurface(dataItemSurface);
                _this._disposables.push(dataItemSurface.propertiesTabs.subscribe(function (newTabs) {
                    updatePropertiesTabs(dataItemSurface.propertiesTabs());
                }));
                updatePropertiesTabs(dataItemSurface.propertiesTabs());
            }
            else if (newModel._getBindingModel().length > 1) {
                updatePropertiesTabs([new _accordion_tab_1.ItemGroupAccordionTab(_accordion_tab_1.KnownTabs.DataItemsGroup, "Data Items", model)]);
            }
            else {
                updatePropertiesTabs([]);
            }
        }));
        this.model(model);
        this._disposables.push({
            dispose: function () {
                _this.dataFieldChoosed.empty();
            }
        });
    }
    DataItemContainerSurface.prototype._removeDataItem = function (dataItemLink) {
        var _this = this;
        var dataItem = dataItemLink.dataItem();
        if (!!dataItem) {
            dataItemLink.uniqueName(undefined);
            this.itemSurface.dashboardItem._removeDataItem(dataItem);
            if (!this.model()._getBindingModel().some(function (b) { return !!_this.model()[b.propertyName].dataItem() && !_this.model()[b.propertyName]._specifics.isAttribute; })) {
                this.itemSurface.propertiesController.mainModel(null);
                this._removeDataItemContainer(this.model());
            }
        }
    };
    DataItemContainerSurface.prototype.dataItemErrorFactory = function (dataItem) {
        var _this = this;
        var dataItemLinkErrorState = ko.observable(false);
        this._disposables.push(ko.computed(function () {
            if (!!dataItem && dataItem.dataMember()) {
                _this.itemSurface._dataSourceBrowser.findDataField(_this.itemSurface.dashboardItem.dataSource(), _this.itemSurface.dashboardItem.dataMember(), dataItem.dataMember()).done(function (result) {
                    dataItemLinkErrorState(!result);
                });
            }
        }));
        return dataItemLinkErrorState;
    };
    ;
    DataItemContainerSurface.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DataItemContainerSurface.prototype, "_removeDataItem", null);
    return DataItemContainerSurface;
}());
exports.DataItemContainerSurface = DataItemContainerSurface;
ko.components.register('dx-dashboard-group-data-items', {
    viewModel: function (params) {
        var model = ko.unwrap(params.model);
        var viewModel = {
            dataItems: model._getBindingModel().map(function (binding) {
                return {
                    binding: binding,
                    item: model[binding.propertyName],
                    placeholder: binding.emptyPlaceholder,
                    removeDataItem: function (item) {
                        params.holder.removeDataItem && params.holder.removeDataItem(item);
                    },
                    dataItemDisplayNameProvider: function (dataItem) {
                        return params.holder.dataItemDisplayNameProvider && params.holder.dataItemDisplayNameProvider(dataItem) || "";
                    },
                    click: function () {
                        params.holder.selectItem && params.holder.selectItem(model, binding) || "";
                    }
                };
            }),
            holder: params.holder
        };
        return viewModel;
    },
    template: { element: 'dx-dashboard-group-data-items' }
});
