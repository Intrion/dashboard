/**
* DevExpress Dashboard (_mobile-layout.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _viewer_1 = require("../viewer/_viewer");
var _mobile_layout_master_filters_editor_1 = require("./_mobile-layout-master-filters-editor");
var _title_component_1 = require("../viewer/title/_title-component");
var _viewer_interfaces_1 = require("../viewer/_viewer-interfaces");
var data_dashboard_item_1 = require("../../model/items/data-dashboard-item");
var caption_toolbar_options_1 = require("../../viewer-parts/widgets/caption-toolbar/caption-toolbar-options");
var _caption_toolbar_css_classes_1 = require("../../viewer-parts/widgets/caption-toolbar/_caption-toolbar-css-classes");
var _mobile_layout_caption_toolbar_1 = require("../../viewer-parts/widgets/caption-toolbar/_mobile-layout-caption-toolbar");
var _mobile_layout_item_1 = require("./_mobile-layout-item");
var filter_element_item_base_1 = require("../../model/items/filter-items/filter-element-item-base");
var date_filter_item_1 = require("../../model/items/filter-items/date-filter-item");
var dashboard_tab_page_1 = require("../../model/items/tab-container-item/dashboard-tab-page");
var tab_container_item_1 = require("../../model/items/tab-container-item/tab-container-item");
var dashboard_layout_group_1 = require("../../model/layout/dashboard-layout-group");
var _dashboard_title_view_constants_1 = require("../../viewer-parts/title/_dashboard-title-view-constants");
var _dashboard_title_model_1 = require("../viewer/title/_dashboard-title-model");
var _mobile_layout_fullscreen_item_1 = require("./_mobile-layout-fullscreen-item");
var $ = require("jquery");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var _utils_1 = require("../../data/_utils");
var DashboardMobileLayout = (function () {
    function DashboardMobileLayout(dashboard, dashboardContext, findExtension, _encodeHtml) {
        if (_encodeHtml === void 0) { _encodeHtml = false; }
        var _this = this;
        this.dashboard = dashboard;
        this.dashboardContext = dashboardContext;
        this._encodeHtml = _encodeHtml;
        var fullScreenItemLocalContext = new _viewer_interfaces_1.DashboardItemContext({
            addContextToolbarItems: function (options) {
                var dashboardItem = _this.fullscreenItemModel.dashboardItem();
                if (dashboardItem instanceof data_dashboard_item_1.DataDashboardItem)
                    _this.masterFiltersEditorModel.addFilterButton(options.stateItems, dashboardItem);
                options.navigationItems.push({
                    name: caption_toolbar_options_1.dashboardToolbarItemNames.backButton,
                    type: "button",
                    template: function () {
                        return $('<div/>')
                            .addClass([_caption_toolbar_css_classes_1.cssClasses.flexParent, _caption_toolbar_css_classes_1.cssClasses.ellipsisText].join(' '))
                            .append($('<svg><use xlink:href="#' + _caption_toolbar_css_classes_1.cssClasses.iconBack + '" /></svg>'))
                            .append($('<div/>').text(_default_1.getLocalizationById('DashboardWebStringId.MobileLayout.Back')).addClass([_caption_toolbar_css_classes_1.cssClasses.buttonBack, _caption_toolbar_css_classes_1.cssClasses.truncated].join(' ')));
                    },
                    click: function () {
                        _this.fullscreenItemModel.restoreDownItem();
                    }
                });
            },
            createCaptionToolbar: function (viewerItem, container, controlContainer, popupContainer, viewOptions) {
                return new _mobile_layout_caption_toolbar_1.MobileLayoutCaptionToolbar(container, controlContainer, popupContainer, viewOptions.encodeHtml, _caption_toolbar_css_classes_1.cssClasses.caption, viewOptions.captionToolbarSeparatorRequired);
            },
            viewerItemCreated: function (dashboardItem, viewerItem) { return _mobile_layout_item_1.customizeMobileViewerItems(viewerItem); },
            beforeApplyOptions: function (item, options, isCreation) {
                options.ParentContainer = undefined;
                _mobile_layout_item_1.setCardAutoArrangementMode(item, options);
            },
            itemCreatingType: 'secondary'
        });
        var exportExtension = findExtension('dashboard-export');
        if (exportExtension) {
            exportExtension._initializeSecondaryExportItem(fullScreenItemLocalContext);
        }
        this.fullscreenItemModel = new _viewer_1.FullscreenItemModel(dashboardContext, fullScreenItemLocalContext);
        this.masterFiltersEditorModel = new _mobile_layout_master_filters_editor_1.MasterFiltersEditorModel();
        this.dashboardTitleContext = new _title_component_1.DashboardTitleContext(this._encodeHtml, findExtension, false);
        var flatItems = this._getDashboardItemsInLayoutOrder(dashboard.layout());
        this.items = groupLayoutItems(flatItems).map(function (item) { return new DashboardMobileLayoutItem(item.itemComponentNames.map(function (itemName) { return dashboard.findItem(itemName); })
            .filter(function (item) { return !(item instanceof filter_element_item_base_1.FilterElementItemBase) && !(item instanceof date_filter_item_1.DateFilterItem); }), item.groupName); })
            .filter(function (mobileLayoutItem) { return mobileLayoutItem.dashboardItems.length > 0; });
    }
    Object.defineProperty(DashboardMobileLayout.prototype, "fullscreenItemProvider", {
        get: function () {
            return this.fullscreenItemModel;
        },
        enumerable: true,
        configurable: true
    });
    DashboardMobileLayout.prototype._getDashboardItemsInLayoutOrder = function (layoutItem) {
        var _this = this;
        var result = [];
        if (layoutItem.dashboardItem() && !(layoutItem instanceof dashboard_layout_group_1.DashboardLayoutGroup)) {
            var parentContainer = layoutItem.item && layoutItem.item.parentContainer() ? this.dashboard.findItem(layoutItem.item.parentContainer()) : undefined;
            var groupName = this._getGroupName(parentContainer);
            result.push({
                groupName: this._getGroupName(parentContainer),
                groupComponentName: this._getGroupComponentName(parentContainer),
                itemComponentName: layoutItem.dashboardItem()
            });
        }
        if (layoutItem instanceof dashboard_layout_group_1.DashboardLayoutGroup) {
            result = result.concat(layoutItem.childNodes().reduce(function (acc, value) { return acc.concat(_this._getDashboardItemsInLayoutOrder(value)); }, []));
        }
        return result;
    };
    DashboardMobileLayout.prototype._getGroupName = function (parentContainer) {
        if (parentContainer) {
            var showCaption = parentContainer instanceof dashboard_tab_page_1.DashboardTabPage ? this._getParentTabContainer(parentContainer).showCaption() : parentContainer.showCaption();
            return showCaption ? parentContainer.name() : parentContainer.name() + exports.groupWithoutCaptionItemKey;
        }
        else {
            return exports.ungroupedItemKey;
        }
    };
    DashboardMobileLayout.prototype._getGroupComponentName = function (parentContainer) {
        if (parentContainer) {
            var showCaption = parentContainer instanceof dashboard_tab_page_1.DashboardTabPage ? this._getParentTabContainer(parentContainer).showCaption() : parentContainer.showCaption();
            return showCaption ? parentContainer.componentName() : parentContainer.componentName() + exports.groupWithoutCaptionItemKey;
        }
        else {
            return exports.ungroupedItemKey;
        }
    };
    DashboardMobileLayout.prototype._getParentTabContainer = function (tabPage) {
        return this.dashboard.items()
            .filter(function (item) { return item instanceof tab_container_item_1.TabContainerItem; })
            .filter(function (tabContainer) { return tabContainer.tabPages().indexOf(tabPage) !== -1; })[0];
    };
    return DashboardMobileLayout;
}());
exports.DashboardMobileLayout = DashboardMobileLayout;
var DashboardMobileLayoutItem = (function () {
    function DashboardMobileLayoutItem(dashboardItems, groupName) {
        this.dashboardItems = dashboardItems;
        this.groupName = groupName;
    }
    return DashboardMobileLayoutItem;
}());
exports.DashboardMobileLayoutItem = DashboardMobileLayoutItem;
function groupLayoutItems(flatItems) {
    var groupedItems = [];
    var previousGroupedItem;
    flatItems.forEach(function (item) {
        if (previousGroupedItem && previousGroupedItem.groupComponentName === item.groupComponentName) {
            previousGroupedItem.itemComponentNames.push(item.itemComponentName);
        }
        else {
            previousGroupedItem = {
                groupName: item.groupName,
                groupComponentName: item.groupComponentName,
                itemComponentNames: [item.itemComponentName]
            };
            groupedItems.push(previousGroupedItem);
        }
    });
    return groupedItems;
}
exports.groupLayoutItems = groupLayoutItems;
ko.components.register('dashboard-mobile-layout-widget', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var disposables = [];
            var layoutModel = params.layoutModel;
            var dashboard = ko.unwrap(layoutModel.dashboard);
            var toolbarHeight = ko.observable(_dashboard_title_view_constants_1.titleHeight);
            var contentToolbarHeight = ko.observable(contentToolbarHeight);
            var viewModel = {};
            var element = componentInfo.element;
            var $element = $(element);
            var currentWidth = $element.width();
            var currentHeight = $element.height();
            var titleWidth = ko.observable(currentWidth);
            var repaintRequest = $.Callbacks();
            var layoutWidget = null;
            var resizeControl = function () {
                if ($element.width() != currentWidth || $element.height() != currentHeight) {
                    if (layoutWidget) {
                        layoutWidget["_renderDimensions"]();
                    }
                    repaintRequest.fire();
                    currentWidth = $element.width();
                    currentHeight = $element.height();
                    titleWidth(currentWidth);
                }
            };
            $(window).on("resize.mobilelayout", function () { return resizeControl(); });
            var interval = setInterval(function () { return resizeControl(); }, 300);
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                clearInterval(interval);
                $(window).off(".mobilelayout");
            });
            var customizeToolbarOptions = function (options) {
                options.contentItems = options.contentItems.filter(function (item) { return [caption_toolbar_options_1.dashboardToolbarItemNames.titleFilterIcon, caption_toolbar_options_1.dashboardToolbarItemNames.titleFilterText].indexOf(item.name) === -1; });
                layoutModel.masterFiltersEditorModel.addFilterButton(options.actionItems, layoutModel.dashboard);
            };
            var titleModel = new _dashboard_title_model_1.DashboardTitleModel(layoutModel.dashboardTitleContext, layoutModel.dashboard, customizeToolbarOptions);
            var actionToolbarViewModel = createToolbarViewModel(ko.computed(function () {
                return {
                    toolbarOptions: customizeActionToolbar(titleModel.toolbarOptions().toolbarOptions),
                    allowHideEmptyToolbar: true
                };
            }), titleWidth, toolbarHeight, layoutModel.dashboardTitleContext, _caption_toolbar_css_classes_1.cssClasses.actionToolbar);
            var contentToolbarViewModel = createToolbarViewModel(ko.computed(function () {
                return {
                    toolbarOptions: customizeContentToolbar(titleModel.toolbarOptions().toolbarOptions),
                    allowHideEmptyToolbar: true
                };
            }), titleWidth, contentToolbarHeight, layoutModel.dashboardTitleContext, _caption_toolbar_css_classes_1.cssClasses.contentToolbar);
            return {
                itemMasterFiltersViewModel: new _mobile_layout_master_filters_editor_1.ItemMasterFiltersViewModel(layoutModel.masterFiltersEditorModel, layoutModel.dashboardContext, repaintRequest),
                fullscreenItemViewModel: _mobile_layout_fullscreen_item_1.createFullscreenItemViewModel(layoutModel.fullscreenItemModel, layoutModel.masterFiltersEditorModel, repaintRequest),
                titleViewModel: actionToolbarViewModel,
                layoutViewModel: createLayoutViewModel(element, toolbarHeight, layoutModel.dashboardContext, repaintRequest, layoutModel, layoutModel.fullscreenItemModel, function (widget) { return layoutWidget = widget; }, contentToolbarViewModel, layoutModel.dashboard.title.visible())
            };
        }
    },
    template: { element: "dx-dashboard-mobile-layout-widget" }
});
exports.ungroupedItemKey = '_dx_dashboard_ungrouped_mobile_layout_item_key';
exports.groupWithoutCaptionItemKey = '_dx_dashboard_group_without_caption_mobile_layout_item_key';
exports.dashboardTitleKey = '_dx_dashboard_mobile_layout_title_key';
var mobileLayoutCssClasses = {
    ungroupedItem: 'dx-dashboard-ungrouped-item',
    dashboardDisplayNone: 'dx-dashboard-display-none',
    groupWithoutCaption: 'dx-dashboard-group-without-caption'
};
var createToolbarViewModel = function (options, width, height, context, className) {
    return {
        options: options,
        width: width,
        height: height,
        encodeHtml: context.encodeHtml,
        className: className
    };
};
var customizeActionToolbar = function (options) {
    return {
        staticItems: options.navigationItems,
        actionItems: options.actionItems,
        stateItems: options.stateItems,
        navigationItems: []
    };
};
var customizeContentToolbar = function (options) {
    return {
        staticItems: options.staticItems,
        actionItems: [],
        stateItems: [],
        navigationItems: []
    };
};
var createLayoutViewModel = function (element, actionToolbarHeight, dashboardContext, repaintRequest, mobileLayout, fullscreenItemModel, getWidgetCallback, titleViewModel, titleVisible) {
    var $element = $(element);
    var title = {
        data: titleViewModel,
        name: 'dx-dashboard-mobile-title'
    };
    var layoutItems = mobileLayout.items.map(function (layoutItem) {
        var items = layoutItem.dashboardItems.map(function (dashboardItem) {
            return {
                data: new _mobile_layout_item_1.MobileLayoutItemViewModel(dashboardContext, repaintRequest, dashboardItem, fullscreenItemModel),
                name: 'dx-dashboard-mobile-layout-item'
            };
        });
        return {
            key: layoutItem.groupName,
            items: items
        };
    });
    return {
        indicateLoading: false,
        height: function () {
            return $element.height() - actionToolbarHeight();
        },
        width: function () {
            return $element.width();
        },
        activeStateEnabled: false,
        focusStateEnabled: false,
        hoverStateEnabled: false,
        grouped: true,
        dataSource: ko.computed(function () { return titleVisible && actionToolbarHeight() > 0 ? [{
                key: exports.dashboardTitleKey,
                items: [title]
            }].concat(layoutItems) : layoutItems; }),
        onContentReady: function (e) {
            getWidgetCallback(e.component);
        },
        groupTemplate: function (data, index, element) {
            if (data.key === exports.ungroupedItemKey || data.key === exports.dashboardTitleKey) {
                var className = data.key === exports.dashboardTitleKey || (data.key === exports.ungroupedItemKey && (titleVisible && index === 1 || !titleVisible && index === 0)) ? mobileLayoutCssClasses.dashboardDisplayNone : mobileLayoutCssClasses.ungroupedItem;
                _utils_1.$unwrap(element).classList.add(className);
                return document.createElement('div');
            }
            else if (data.key.search(exports.groupWithoutCaptionItemKey) !== -1) {
                _utils_1.$unwrap(element).classList.add(mobileLayoutCssClasses.groupWithoutCaption);
                return document.createElement('div');
            }
            else {
                var div = document.createElement('div');
                div.innerText = data.key;
                return div;
            }
        }
    };
};
