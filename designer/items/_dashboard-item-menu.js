/**
* DevExpress Dashboard (_dashboard-item-menu.js)
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
var disposable_object_1 = require("../../model/disposable-object");
var _properties_controller_1 = require("../_properties-controller");
var _section_descriptors_1 = require("./_section-descriptors");
var $ = require("jquery");
var ko = require("knockout");
var events_1 = require("devextreme/events");
var _utils_1 = require("../../data/_utils");
exports.DashboardItemMenuSizes = {
    BindingPanelPanelWidth: 495,
    OptionsPanelWidth: 274
};
var ItemMenuViewModel = (function (_super) {
    __extends(ItemMenuViewModel, _super);
    function ItemMenuViewModel(surface, layoutItem, _positionCalculator, propertiesController, surfaceItemsFactory) {
        var _this = _super.call(this) || this;
        _this.surface = surface;
        _this.layoutItem = layoutItem;
        _this._positionCalculator = _positionCalculator;
        _this.propertiesController = propertiesController;
        _this.surfaceItemsFactory = surfaceItemsFactory;
        _this.menuItemClick = function (menuItem) {
            _this.contextMenuItems().forEach(function (contextMenuItem) {
                if (contextMenuItem !== menuItem) {
                    contextMenuItem.detailVisible(false);
                }
                else {
                    var detailData = ko.isObservable(contextMenuItem.detailData) && contextMenuItem.detailData();
                    if (detailData) {
                        _this.propertiesController.mainModel({
                            name: null,
                            data: ko.isObservable(contextMenuItem.detailData) && contextMenuItem.detailData()
                        });
                    }
                    else {
                        _this.propertiesController.mainModel(null);
                    }
                    contextMenuItem.detailVisible(!contextMenuItem.detailVisible.peek());
                }
            });
        };
        _this.contextMenuItems = ko.observableArray();
        _this.contextMenuItemsSorted = ko.pureComputed(function () {
            return _this.contextMenuItems().sort(function (a, b) { return (a.index || Number.MAX_VALUE) - (b.index || Number.MAX_VALUE); });
        });
        _this.menuItemDetailVisible = ko.pureComputed(function () { return _this.contextMenuItems().some(function (contextMenuItem) { return contextMenuItem.detailVisible(); }); });
        _this.verticalPosition = ko.observable();
        _this.isLeft = ko.observable();
        _this.positionMy = ko.computed(function () { return _this.isLeft() ? 'right' : 'left'; });
        _this.positionAt = ko.computed(function () { return _this.isLeft() ? 'left' : 'right'; });
        _this._recalculateVerticalPosition = function () {
            window.setTimeout(function () {
                _this.verticalPosition(_this._positionCalculator.calculateVPosition());
            }, 1);
        };
        _this._recalculateIsLeft = function () {
            _this.isLeft(_this._positionCalculator.calculateIsLeft());
        };
        _this.hideBindingProperties = function () {
            if (_this.propertiesController.secondaryModel() && _this.isSecondaryPanelVisible()) {
                _this.isSecondaryPanelVisible(false);
            }
            else {
                _this.propertiesController.mainModel(null);
                if (_this.contextMenuItems().filter(function (mi) { return mi.detailVisible() && mi.menuItemId !== "item-binding-panel"; })[0]) {
                    _this.hideBindingPanel();
                }
            }
        };
        _this.hideBindingPanel = function () {
            _this.propertiesController.secondaryModel(null);
            _this.propertiesController.mainModel(null);
            _this.menuItemClick(null);
        };
        _this.isSecondaryPanelVisible = ko.observable(false);
        _this.__secondaryPanelVisibleTimeout = 0;
        _this.initForFirstShown = function (options) {
            _utils_1.$unwrap(options.component._$content).classList.add("dx-state-hover");
        };
        _this.repaintHandlers = [];
        _this.popupInitialized = function (args) {
            _this._addRepaintHandler(function () {
                window.setTimeout(function () {
                    if (!_this.disposed) {
                        args.component.repaint();
                    }
                }, 1);
            });
        };
        _this.selectedItemSurface = surfaceItemsFactory.createSurfaceItem(layoutItem.viewModel.item(), surface.dashboardModel, surface.dataSourceBrowser);
        if (_this.selectedItemSurface) {
            _this.selectedItemSurface.propertiesController = _this.propertiesController;
        }
        ko.computed(function () {
            surface.itemInteractionInProgress(_this.menuItemDetailVisible());
        });
        _this.isSecondaryPanelVisible.subscribe(function (visibility) {
            if (!visibility) {
                _this.__secondaryPanelVisibleTimeout = window.setTimeout(function () {
                    _this.propertiesController.secondaryModel(undefined);
                    _this.__secondaryPanelVisibleTimeout = 0;
                }, 1500);
            }
        });
        _this.propertiesController.secondaryModel.subscribe(function (model) {
            _this.isSecondaryPanelVisible(!!model);
            if (_this.__secondaryPanelVisibleTimeout)
                clearTimeout(_this.__secondaryPanelVisibleTimeout);
        });
        _this.propertiesPanelStyle = ko.computed(function () {
            var visiblePanel = _this.contextMenuItems().filter(function (contextMenuItem) { return contextMenuItem.detailVisible(); })[0], mainModel = _this.propertiesController.mainModel();
            if (visiblePanel) {
                if (visiblePanel.menuItemId === "item-binding-panel") {
                    if (mainModel) {
                        return { width: exports.DashboardItemMenuSizes.BindingPanelPanelWidth.toString() + "px", marginLeft: "" };
                    }
                    else {
                        return { width: "220px", marginLeft: "" };
                    }
                }
            }
            return { width: exports.DashboardItemMenuSizes.OptionsPanelWidth.toString() + "px", marginLeft: "0px" };
        });
        _this._addRepaintHandler(_this._recalculateVerticalPosition);
        _this.toDispose(_this.contextMenuItemsSorted.subscribe(function () { return _this._recalculateVerticalPosition(); }));
        _this.toDispose(_this.layoutItem.isSelected.subscribe(function () { return _this._recalculateVerticalPosition(); }));
        _this._recalculateVerticalPosition();
        _this._recalculateIsLeft();
        return _this;
    }
    ItemMenuViewModel.prototype.deleteCurrentItem = function () {
        this.surface._selectedLayoutItem().delete();
    };
    ItemMenuViewModel.prototype._addRepaintHandler = function (handler) {
        this.layoutItem.repaintCallbacks.add(handler);
        this.repaintHandlers.push(handler);
    };
    ItemMenuViewModel.prototype.dispose = function () {
        var _this = this;
        _super.prototype.dispose.call(this);
        this.repaintHandlers.forEach(function (handler) { return _this.layoutItem.repaintCallbacks.remove(handler); });
        this.selectedItemSurface && this.selectedItemSurface.dispose();
    };
    return ItemMenuViewModel;
}(disposable_object_1.DisposableObject));
exports.ItemMenuViewModel = ItemMenuViewModel;
ko.components.register('dx-dashboard-item-menu', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var positionCalculator = new ItemMenuPositionCalculator(componentInfo.element);
            var propertiesController = new _properties_controller_1.PropertiesController();
            var itemMenu = new ItemMenuViewModel(params.surface, params.layoutItem, positionCalculator, propertiesController, _section_descriptors_1.surfaceItemsFactory);
            params.itemMenuViewModelContainer(itemMenu);
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                itemMenu.dispose();
                propertiesController.dispose();
                params.itemMenuViewModelContainer(undefined);
            });
            return itemMenu;
        }
    },
    template: { element: 'dx-dashboard-item-menu' }
});
var ItemMenuPositionCalculator = (function () {
    function ItemMenuPositionCalculator(element) {
        this.$element = $(element);
        this.$layoutRoot = this.$element.closest('.dx-layout-root');
    }
    ItemMenuPositionCalculator.prototype._isValidElement = function () {
        return this.$element.parent().length !== 0 && this.$layoutRoot[0];
    };
    ItemMenuPositionCalculator.prototype.calculateIsLeft = function () {
        if (!this._isValidElement()) {
            return false;
        }
        var left = this.$element.parent().offset().left, right = left + this.$element.parent().width(), rootLeft = this.$layoutRoot.offset().left, rootRight = rootLeft + this.$layoutRoot.width();
        return (rootRight - right < exports.DashboardItemMenuSizes.BindingPanelPanelWidth &&
            left - rootLeft > exports.DashboardItemMenuSizes.BindingPanelPanelWidth) || (rootRight - right < 50);
    };
    ItemMenuPositionCalculator.prototype.calculateVPosition = function () {
        var itemMenuElement = this.$element.find('.dx-dashboard-item-menu');
        var layoutItem = this.$element.closest('.dx-layout-item-wrapper');
        if (!this._isValidElement() || !layoutItem[0] || !itemMenuElement[0]) {
            return "center";
        }
        if (itemMenuElement.height() <= layoutItem.height()) {
            return "center";
        }
        else {
            var rootTop = this.$layoutRoot.offset().top;
            if (layoutItem.offset().top + layoutItem.height() - itemMenuElement.height() < rootTop) {
                return "top";
            }
            else {
                return "bottom";
            }
        }
    };
    return ItemMenuPositionCalculator;
}());
exports.ItemMenuPositionCalculator = ItemMenuPositionCalculator;
var DISAPPEARING_EVENT_NAMESPACE = ".disappearing";
var findContainer = function (element) {
    return $(element).closest(".dx-layout-item-wrapper").find(".dx-layout-item-container")[0];
};
ko.bindingHandlers["menuVisibilitySubscription"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            events_1.off(findContainer(element), DISAPPEARING_EVENT_NAMESPACE);
        });
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var toggleClass = function (state) {
            var cssClass = "dx-target-widget-hovered";
            var nodes = document.querySelectorAll(".dx-disappearing-overlay>.dx-overlay-content");
            for (var i = 0; i < nodes.length; i++) {
                if (state) {
                    nodes[i].classList.add(cssClass);
                }
                else {
                    nodes[i].classList.remove(cssClass);
                }
            }
        };
        valueAccessor().visible.subscribe(function (val) {
            var container = findContainer(element);
            if (val) {
                events_1.on(container, "mouseenter" + DISAPPEARING_EVENT_NAMESPACE, function () { toggleClass(true); });
                events_1.on(container, "mouseleave" + DISAPPEARING_EVENT_NAMESPACE, function () { toggleClass(false); });
            }
            else {
                events_1.off(container, DISAPPEARING_EVENT_NAMESPACE);
                toggleClass(false);
            }
        });
    }
};
