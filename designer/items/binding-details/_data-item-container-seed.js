/**
* DevExpress Dashboard (_data-item-container-seed.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_item_1 = require("../../../model/data-item/data-item");
var _data_field_1 = require("../../../model/data-sources/_data-field");
var ko = require("knockout");
var DataItemContainerSeed = (function () {
    function DataItemContainerSeed(dataItemProvider, dataItemType) {
        this.dataItemType = dataItemType;
        this.name = ko.observable("NewContainer");
        this.itemType = ko.observable("Stub");
        this.dataLink = new data_item_1.DataItemLink(dataItemProvider);
        this.dataLink.itemType("Seed");
    }
    DataItemContainerSeed.prototype._getBindingModel = function () {
        return [{
                propertyName: 'dataLink',
                dataItemType: this.dataItemType,
                emptyPlaceholder: 'Data',
                selectedPlaceholder: 'Configure Data'
            }];
    };
    DataItemContainerSeed.prototype.grow = function (dataItemProvider, bindingProperty, dataField) {
        var containerModels = [];
        if (!_data_field_1.IsOlapHierarchyField(dataField)) {
            var cm = bindingProperty.creator(undefined, dataField);
            var dataItem = dataItemProvider._createDataItem(dataField, cm._getBindingModel()[0]);
            var newDataItemBinding = cm._getBindingModel()[0];
            cm[newDataItemBinding.propertyName].uniqueName(dataItem.uniqueName());
            containerModels.push(cm);
        }
        else {
            dataField.groupDataItems.forEach(function (groupItem) {
                var cm = bindingProperty.creator(undefined, groupItem);
                var dataItem = dataItemProvider._createDataItem(groupItem, cm._getBindingModel()[0]);
                dataItem.groupIndex(dataField.groupIndex());
                var newDataItemBinding = cm._getBindingModel()[0];
                cm[newDataItemBinding.propertyName].uniqueName(dataItem.uniqueName());
                containerModels.push(cm);
            });
        }
        return containerModels;
    };
    return DataItemContainerSeed;
}());
exports.DataItemContainerSeed = DataItemContainerSeed;
