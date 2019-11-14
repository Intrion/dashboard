/**
* DevExpress Dashboard (_data-item-surface.js)
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
var measure_1 = require("../../../model/data-item/measure");
var _undo_engine_helper_1 = require("../../../model/internal/_undo-engine-helper");
var _data_source_browser_1 = require("../../../common/_data-source-browser");
var _data_item_properties_composer_1 = require("../properties-composers/_data-item-properties-composer");
var $ = require("jquery");
var ko = require("knockout");
var DataItemSurface = (function () {
    function DataItemSurface(model, binding, container, dataSourceBrowser, propertiesController, unwrappedDataItem, fieldConstraint, extendTabsHandler) {
        var _this = this;
        this.model = model;
        this.binding = binding;
        this.propertiesController = propertiesController;
        this.unwrappedDataItem = unwrappedDataItem;
        this.fieldConstraint = fieldConstraint;
        this.extendTabsHandler = extendTabsHandler;
        this._disposables = [];
        this.propertiesTabs = ko.observableArray([]);
        this.choosenField = ko.observable();
        this.newItemCreated = $.Callbacks();
        this.itemSelected = $.Callbacks();
        var composer = new _data_item_properties_composer_1.DataItemsPropertiesComposer();
        var updatePropertiesTabs = function () {
            var result = composer.composeTabs(_this.model, _this.choosenField, dataSourceBrowser, container, _this.unwrappedDataItem, _this.fullConstraint, _this.propertiesController);
            _this.extendTabsHandler && _this.extendTabsHandler(result, _this.model.dataItem());
            var promise = dataSourceBrowser.getDataFieldsArray(container.dataSource(), container.dataMember(), "", _data_source_browser_1.isNonCollectionDataField);
            promise.done(function () {
                var oldTabs = _this.propertiesTabs.peek();
                oldTabs && oldTabs.forEach(function (tab) { return tab.dispose(); });
                _this.propertiesTabs(result);
            });
        };
        var subscribeToFieldChanges = function () {
            _this._disposables.push(_this.choosenField.subscribe(function (newField) {
                if (model.dataItem() && model.dataItem().dataMember()) {
                    _this._changeExistingField(container, model, newField, updatePropertiesTabs);
                }
                else {
                    _this._changeNewField(container, newField, updatePropertiesTabs);
                }
            }));
            updatePropertiesTabs();
        };
        if (!!model.dataItem()) {
            dataSourceBrowser
                .findDataField(container.dataSource(), container.dataMember(), model.dataItem().dataMember())
                .done(function (field) {
                if (!!field && field !== _this.choosenField()) {
                    _this.choosenField(field);
                }
                subscribeToFieldChanges();
            });
        }
        else {
            subscribeToFieldChanges();
        }
        this._disposables.push({
            dispose: function () {
                _this.newItemCreated.empty();
            }
        });
    }
    DataItemSurface.prototype._changeNewField = function (container, newField, additionalFunc) {
        var _this = this;
        if (this.model.itemType() !== "Seed") {
            if (!_data_field_1.IsOlapHierarchyField(newField)) {
                var dataItem = container._createDataItem(newField, this.binding);
                if (this.model._specifics.isAttribute && dataItem instanceof measure_1.Measure) {
                    dataItem.summaryType('Min');
                }
                this.model.uniqueName(dataItem.uniqueName());
                this.newItemCreated.fire(this.model, newField);
                this.itemSelected.fire(this.model, newField);
            }
            else {
                var groupIndex = newField.groupIndex();
                newField["groupDataItems"].forEach(function (groupItem, index) {
                    var dataItem = container._createDataItem(groupItem, _this.binding);
                    dataItem.groupIndex(groupIndex);
                    if (index === 0) {
                        _this.model.uniqueName(dataItem.uniqueName());
                        _this.newItemCreated.fire(_this.model, groupItem);
                    }
                    else {
                        var model = new data_item_1.DataItemLink(container);
                        model.uniqueName(dataItem.uniqueName());
                        _this.newItemCreated.fire(model, groupItem);
                    }
                });
                this.itemSelected.fire(this.model, newField["groupDataItems"][0]);
            }
        }
        else {
            this.newItemCreated.fire(this.model, newField);
            this.itemSelected.fire(this.model, newField);
        }
        additionalFunc();
    };
    DataItemSurface.prototype._changeExistingField = function (container, model, newField, additionalFunc) {
        var _this = this;
        if (!_data_field_1.IsOlapHierarchyField(newField)) {
            container._updateDataItem(model.dataItem(), this.binding, newField, model._specifics.acceptableShapingType);
        }
        else {
            var groupIndex = newField.groupIndex();
            newField["groupDataItems"].forEach(function (groupItem, index) {
                if (index === 0) {
                    container._updateDataItem(model.dataItem(), _this.binding, groupItem, model._specifics.acceptableShapingType);
                    model.dataItem().groupIndex(groupIndex);
                }
                else {
                    var dataItem = container._createDataItem(groupItem, _this.binding);
                    dataItem.groupIndex(groupIndex);
                    var dataItemLink = new data_item_1.DataItemLink(container);
                    dataItemLink.uniqueName(dataItem.uniqueName());
                    _this.newItemCreated.fire(dataItemLink, groupItem);
                }
            });
        }
        additionalFunc();
    };
    Object.defineProperty(DataItemSurface.prototype, "folderFieldConstraint", {
        get: function () {
            if (this.binding.dataItemType === "Dimension") {
                return function (field) { return _data_field_1.DataField.ifOlapThenOnlyDimension(field); };
            }
            if (this.binding.dataItemType === "Measure") {
                return function (field) { return _data_field_1.DataField.ifOlapThenOnlyMeasure(field); };
            }
            return function () { return true; };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataItemSurface.prototype, "fullConstraint", {
        get: function () {
            var _this = this;
            return function (field) {
                if (_data_field_1.DataField.isOlap(field.dataMember()) && !_this.folderFieldConstraint(field))
                    return false;
                if (field.isDataFieldNode()) {
                    return !_this.fieldConstraint || _this.fieldConstraint(field);
                }
                else {
                    return true;
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    DataItemSurface.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DataItemSurface.prototype, "_changeNewField", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DataItemSurface.prototype, "_changeExistingField", null);
    return DataItemSurface;
}());
exports.DataItemSurface = DataItemSurface;
