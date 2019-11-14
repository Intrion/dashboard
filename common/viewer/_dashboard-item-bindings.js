/**
* DevExpress Dashboard (_dashboard-item-bindings.js)
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
var _layout_1 = require("./layout/_layout");
var _dashboard_item_helper_1 = require("../../model/internal/_dashboard-item_helper");
var _dashboard_tabs_view_model_1 = require("./_dashboard-tabs-view-model");
var ko = require("knockout");
var _element_size_utils_1 = require("./_element-size-utils");
var disposable_object_1 = require("../../model/disposable-object");
var _utils_1 = require("../../data/_utils");
function renderItemViewer(element, dashboardItem, dashboardContext, localContext, sizeController, _disposables) {
    var beforeRender = function (viewerItem) {
        var updateConstraintsHandler = function (viewerItem) {
            if (viewerItem && sizeController.setConstraints) {
                sizeController.setConstraints(viewerItem.getConstraints(true));
            }
        };
        updateConstraintsHandler(viewerItem);
        _disposables.push(dashboardItem.showCaption.subscribe(function () {
            setTimeout(function () { return updateConstraintsHandler(viewerItem); }, 100);
        }));
        viewerItem.constraintsUpdated.add(function () {
            updateConstraintsHandler(viewerItem);
        });
        _element_size_utils_1.setElementSize(element, sizeController);
        _disposables.push(_element_size_utils_1.createItemSizeUpdater(viewerItem, sizeController));
        if (sizeController.visible) {
            _disposables.push(sizeController.visible.subscribe(function (isVisible) {
                if (!isVisible) {
                    var castedItem = viewerItem;
                    if (castedItem.chartViewer) {
                        castedItem.chartViewer.hideTooltip();
                    }
                }
            }));
        }
    };
    var itemViewerAdapter = dashboardContext.viewerItemsManager.create(dashboardItem, element, dashboardContext, localContext, beforeRender);
    itemViewerAdapter.itemUpdated = function (viewerItem) { updateLayoutItemBackbound(element, viewerItem._isTransparentBackground()); };
    itemViewerAdapter.initialize();
    _disposables.push(itemViewerAdapter);
}
function getUiStateTemplate(dashboardItem, sizeController) {
    var sizeObservable = ko.observable();
    var setSizeClass = function (sizeController) {
        var height = sizeController.getHeight();
        if (height > 120) {
            sizeObservable("dx-dashboard-layout-state-large");
        }
        else if (height > 80) {
            sizeObservable("dx-dashboard-layout-state-medium");
        }
        else {
            sizeObservable("dx-dashboard-layout-state-small");
        }
    };
    setSizeClass(sizeController);
    var resizeHandler = function () { return setSizeClass(sizeController); };
    sizeController.requestRepaint.add(resizeHandler);
    var disposable = {
        dispose: function () {
            sizeController.requestRepaint.remove(resizeHandler);
        }
    };
    if (dashboardItem._uiState() === 'loading') {
        return { template: { name: 'dx-dashboard-item-state-loading' }, disposable: disposable };
    }
    else if (dashboardItem._uiState() === 'error') {
        return {
            template: {
                name: 'dx-dashboard-item-state-error',
                data: {
                    icon: _dashboard_item_helper_1.getItemIconName(dashboardItem),
                    title: _dashboard_item_helper_1.getItemTitle(dashboardItem),
                    errorState: dashboardItem._errorState,
                    sizeClass: sizeObservable
                }
            },
            disposable: disposable
        };
    }
    else if (dashboardItem._uiState() === 'empty') {
        return {
            template: {
                name: 'dx-dashboard-item-state-empty',
                data: {
                    icon: _dashboard_item_helper_1.getItemIconName(dashboardItem),
                    title: _dashboard_item_helper_1.getItemTitle(dashboardItem),
                    sizeClass: sizeObservable
                }
            },
            disposable: disposable
        };
    }
}
function updateLayoutItemBackbound(element, isTransparent) {
    if (isTransparent) {
        element.classList.add("dx-layout-item-container-transparent");
    }
    else {
        element.classList.remove("dx-layout-item-container-transparent");
    }
}
ko.bindingHandlers["dx-dashboard-item-binding"] = {
    init: function (element, valueAccessor, _, __, bindingContext) {
        var perUiStateSubscriptions = [];
        var params = ko.unwrap(valueAccessor());
        var dashboardItem = params.dashboardItem;
        var sizeController = params.sizeController;
        _element_size_utils_1.setElementSize(element, sizeController);
        element.classList.add("dx-dashboard-item-container");
        var renderDashboardItemState = function () {
            perUiStateSubscriptions.forEach(function (d) { return d.dispose(); });
            perUiStateSubscriptions = [];
            updateLayoutItemBackbound(element, false);
            if (dashboardItem._uiState() === 'live') {
                renderItemViewer(element, dashboardItem, params.dashboardContext, params.localContext, sizeController, perUiStateSubscriptions);
            }
            else {
                var _a = getUiStateTemplate(dashboardItem, sizeController), template = _a.template, disposable = _a.disposable;
                perUiStateSubscriptions.push(disposable);
                perUiStateSubscriptions.push(_element_size_utils_1.createElementSizeUpdater(element, sizeController));
                ko.applyBindingsToNode(element, { template: template }, bindingContext);
            }
        };
        renderDashboardItemState();
        var uiStateSubscription = dashboardItem._uiState.subscribe(function () { return renderDashboardItemState(); });
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            perUiStateSubscriptions.forEach(function (d) { return d.dispose(); });
            perUiStateSubscriptions = [];
            uiStateSubscription.dispose();
        });
        return { controlsDescendantBindings: true };
    }
};
ko.bindingHandlers["dx-dashboard-layout-group-binding"] = {
    init: function (element, valueAccessor) {
        var _disposables = [];
        var params = ko.unwrap(valueAccessor());
        element.classList.add("dx-dashboard-item-container");
        var sizeController = params.sizeController;
        _element_size_utils_1.setElementSize(element, sizeController);
        var itemViewerAdapter = params.dashboardContext.viewerItemsManager.create(params.dashboardItem, element, params.dashboardContext, params.localContext, function (viewerItem) {
            _disposables.push(ko.computed(function () {
                params.headerHeight(params.dashboardItem.showCaption() ? _layout_1.DashboardItemHeaderHeight : 0);
            }));
            _element_size_utils_1.setElementSize(element, sizeController);
            _disposables.push(_element_size_utils_1.createItemSizeUpdater(viewerItem, params.sizeController));
        });
        itemViewerAdapter.initialize();
        _disposables.push(itemViewerAdapter);
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            _disposables.forEach(function (d) { return d.dispose(); });
        });
        return { controlsDescendantBindings: true };
    }
};
ko.bindingHandlers["dx-dashboard-layout-tab-binding"] = {
    init: function (element, valueAccessor) {
        var _disposables = [];
        var params = ko.unwrap(valueAccessor());
        element.classList.add("dx-dashboard-item-container");
        if (params.ignoreBorder())
            element.classList.add("dx-dashboard-ignore-border");
        var sizeController = params.sizeController;
        _element_size_utils_1.setElementSize(element, sizeController);
        _disposables.push(params.sizeController.width.subscribe(function (newValue) { _element_size_utils_1.setElementSize(element, sizeController); }));
        _disposables.push(params.sizeController.height.subscribe(function (newValue) { _element_size_utils_1.setElementSize(element, sizeController); }));
        _disposables.push(params.ignoreBorder.subscribe(function (newValue) {
            if (newValue) {
                element.classList.add("dx-dashboard-ignore-border");
            }
            else {
                element.classList.remove("dx-dashboard-ignore-border");
            }
        }));
        var itemViewerAdapter = params.dashboardContext.viewerItemsManager.create(params.dashboardItem, element, params.dashboardContext, params.localContext, function (viewerItem) {
            _element_size_utils_1.setElementSize(element, sizeController);
            _disposables.push(_element_size_utils_1.createItemSizeUpdater(viewerItem, params.sizeController));
        });
        itemViewerAdapter.initialize();
        _disposables.push(itemViewerAdapter);
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            _disposables.forEach(function (d) { return d.dispose(); });
        });
        return { controlsDescendantBindings: true };
    }
};
var GroupViewModel = (function (_super) {
    __extends(GroupViewModel, _super);
    function GroupViewModel(params) {
        var _this = _super.call(this) || this;
        _this.defaultPadding = _layout_1.SplitterSize * 2;
        _this.padding = ko.observable(_this.defaultPadding);
        _this.headerHeight = ko.observable(_layout_1.DashboardItemHeaderHeight);
        _this.layoutItem = ko.computed(function () { return ko.unwrap(params.layoutItem); });
        ko.computed(function () {
            _this.layoutItem().verticalPaddings(_this.padding() * 2 + _this.headerHeight());
            _this.layoutItem().horizontalPaddings(_this.padding() * 2);
        });
        ko.computed(function () {
            _this.layoutItem().setConstraints({
                min: {
                    width: _this.layoutItem().items().length === 0 ? 100 : 0,
                    height: _this.layoutItem().items().length === 0 ? 100 : 0
                },
                max: {
                    width: Number.MAX_VALUE,
                    height: Number.MAX_VALUE
                }
            });
        });
        return _this;
    }
    return GroupViewModel;
}(disposable_object_1.DisposableObject));
exports.GroupViewModel = GroupViewModel;
var TabContainerViewModel = (function (_super) {
    __extends(TabContainerViewModel, _super);
    function TabContainerViewModel(params) {
        var _this = _super.call(this, params) || this;
        _this.activeItems = ko.observableArray();
        _this._activeItemsUpdateDebounced = _utils_1.debounce(function () {
            _this._updateActiveItems();
        }, 1);
        _this.headerHeight(0);
        _this._updateActiveItems();
        var isItemShownInsteadTabPage = ko.computed(function () {
            var activeLayoutItem = _this.layoutItem().items().length > 0 ? _this.layoutItem().items()[0] : undefined;
            if (!activeLayoutItem)
                return false;
            return !!activeLayoutItem._parent().viewModel.activeTabPage()
                && activeLayoutItem._parent().viewModel.activeTabPage() !== activeLayoutItem.viewModel.item();
        });
        ko.computed(function () {
            var newPadding = _this.defaultPadding;
            if (isItemShownInsteadTabPage()) {
                newPadding = _this.layoutItem().isDesignMode() ? 2 : 0;
            }
            _this.padding(newPadding);
        });
        _this.toDispose(_this.layoutItem().items.subscribe(function (newValue) {
            _this.activeItems.removeAll();
            _this._activeItemsUpdateDebounced();
        }));
        return _this;
    }
    TabContainerViewModel.prototype._updateActiveItems = function () {
        var _this = this;
        this.layoutItem().items().forEach(function (item) {
            _this.activeItems.push(item);
        });
    };
    return TabContainerViewModel;
}(GroupViewModel));
exports.TabContainerViewModel = TabContainerViewModel;
ko.components.register('dx-dashboard-layout-group', {
    viewModel: GroupViewModel,
    template: { element: 'dx-dashboard-layout-group' }
});
ko.components.register('dx-dashboard-layout-tab-container', {
    viewModel: TabContainerViewModel,
    template: { element: 'dx-dashboard-layout-tab-container' }
});
ko.components.register('dashboard-layout-tabs', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new _dashboard_tabs_view_model_1.DashboardTabsViewModel(params.layoutItem, params.headerHeight, componentInfo.element);
        }
    },
    template: { element: 'dx-dashboard-layout-tabs' }
});
