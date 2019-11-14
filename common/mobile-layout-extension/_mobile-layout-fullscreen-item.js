/**
* DevExpress Dashboard (_mobile-layout-fullscreen-item.js)
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
var _viewer_item_factory_1 = require("../../viewer-parts/_viewer-item-factory");
var _viewer_item_types_1 = require("../../viewer-parts/_viewer-item-types");
var _list_element_1 = require("../../viewer-parts/viewer-items/filter-items/_list-element");
var $ = require("jquery");
var ko = require("knockout");
var MobileItemViewerFactory = (function (_super) {
    __extends(MobileItemViewerFactory, _super);
    function MobileItemViewerFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileItemViewerFactory.prototype.createItem = function (container, options) {
        if (options.Type === _viewer_item_types_1.types.comboBox)
            return new _list_element_1.listFilterElement(container, options);
        return _super.prototype.createItem.call(this, container, options);
    };
    return MobileItemViewerFactory;
}(_viewer_item_factory_1.ViewerItemFactory));
exports.MobileItemViewerFactory = MobileItemViewerFactory;
var PopupResizeController = (function () {
    function PopupResizeController(_repaintRequest) {
        var _this = this;
        this._repaintRequest = _repaintRequest;
        this._resizeHandler = null;
        this.onInitialized = function (e) {
            if (!_this._resizeHandler) {
                _this._resizeHandler = function () { return e.component.repaint(); };
                _this._repaintRequest.add(_this._resizeHandler);
            }
        };
        this.onDisposing = function (e) {
            _this._resizeHandler && _this._repaintRequest.remove(_this._resizeHandler);
        };
    }
    return PopupResizeController;
}());
exports.PopupResizeController = PopupResizeController;
exports.createFullscreenItemViewModel = function (fullscreenItemModel, masterFilters, repaintRequest) {
    var resizeController = new PopupResizeController(repaintRequest);
    return {
        itemViewModel: ko.computed(function () {
            var viewModel = fullscreenItemModel.viewModel();
            viewModel.repaintRequest = repaintRequest;
            return viewModel;
        }),
        visible: ko.computed(function () { return fullscreenItemModel.visible(); }),
        width: function () { return $(window).width(); },
        height: function () { return $(window).height(); },
        onInitialized: resizeController.onInitialized,
        onDisposing: resizeController.onDisposing
    };
};
