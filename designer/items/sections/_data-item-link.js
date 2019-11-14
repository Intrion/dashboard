/**
* DevExpress Dashboard (_data-item-link.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var _default_1 = require("../../../data/localization/_default");
var DataItemLinkComponent = (function () {
    function DataItemLinkComponent(surface, $element, propertiesController, surfaceItemsFactory) {
        this.surface = surface;
        this.$element = $element;
        this.propertiesController = propertiesController;
        this.surfaceItemsFactory = surfaceItemsFactory;
    }
    return DataItemLinkComponent;
}());
exports.DataItemLinkComponent = DataItemLinkComponent;
ko.components.register('dx-dashboard-data-item-link', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            if (params.propertiesController) {
                params.selected = ko.computed(function () { return (params.propertiesController.mainModel() && params.propertiesController.mainModel().data && ko.unwrap(params.propertiesController.mainModel().data.model)) === (params.selectionTarget ? ko.unwrap(params.selectionTarget) : ko.unwrap(params.item)); });
            }
            if (params.isEmpty === undefined) {
                params.isEmpty = ko.computed(function () {
                    return !(params.item && params.item.dataItem && params.item.dataItem() && params.item.dataItem().dataMember());
                });
            }
            params.placeholder = _default_1.getLocalizationById(params.placeholder);
            params.selectedPlaceholder = _default_1.getLocalizationById(params.selectedPlaceholder);
            return params;
        }
    },
    template: { element: 'dx-dashboard-data-item-link' }
});
