/**
* DevExpress Dashboard (viewer-api-extension.js)
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_dashboard_item_1 = require("../../model/items/data-dashboard-item");
var disposable_object_1 = require("../../model/disposable-object");
var _knockout_utils_1 = require("../../model/internal/_knockout-utils");
var _array_utils_1 = require("../../model/internal/_array-utils");
var range_filter_item_1 = require("../../model/items/range-filter/range-filter-item");
var date_filter_item_1 = require("../../model/items/filter-items/date-filter-item");
var _events_helper_1 = require("../../viewer-parts/viewer/_events-helper");
var _drill_through_data_wrapper_1 = require("../../data/drill-through-data/_drill-through-data-wrapper");
var notificator_1 = require("../notification-controller/notificator");
var _helper_classes_1 = require("../../model/internal/_helper-classes");
var _common_1 = require("../../data/_common");
var control_options_1 = require("../control-options");
var $ = require("jquery");
var ko = require("knockout");
var model_1 = require("../../model");
var _default_1 = require("../../data/localization/_default");
var utils_1 = require("../internal/utils");
var _underlying_data_provider_1 = require("../data/_underlying-data-provider");
var name = "viewer-api";
var ViewerApiExtension = (function (_super) {
    __extends(ViewerApiExtension, _super);
    function ViewerApiExtension(dashboardControl, customOptions) {
        if (customOptions === void 0) { customOptions = {}; }
        var _this = _super.call(this) || this;
        _this.dashboardControl = dashboardControl;
        _this.name = name;
        _this._viewerItems = {};
        _this._defaultOptions = {
            onItemClick: $.noop,
            onItemSelectionChanged: $.noop,
            onItemWidgetCreated: $.noop,
            onItemWidgetUpdating: $.noop,
            onItemWidgetUpdated: $.noop,
            onItemElementCustomColor: $.noop,
            onItemVisualInteractivity: $.noop,
            onItemMasterFilterStateChanged: $.noop,
            onItemDrillDownStateChanged: $.noop,
            onItemActionAvailabilityChanged: $.noop,
            onItemCaptionToolbarUpdated: $.noop,
            onDashboardTitleToolbarUpdated: $.noop,
            onSelectedTabPageChanged: $.noop,
            onDynamicLookUpValuesLoaded: $.noop,
            onItemBeginUpdate: $.noop,
            onItemEndUpdate: $.noop,
            onDashboardBeginUpdate: $.noop,
            onDashboardEndUpdate: $.noop
        };
        _this._dashboardDisposables = [];
        _this._title = ko.observable(null);
        _this._viewerItemCreated = function (item, viewerItem) {
            if (!!viewerItem) {
                if (item instanceof data_dashboard_item_1.DataDashboardItem) {
                    viewerItem.itemClick.add(_this._raiseItemClick);
                    viewerItem.itemSelectionChanged.add(_this._raiseItemSelectionChanged);
                    viewerItem.clearMasterFilter.add(_this._raiseClearMasterFilter);
                }
                if (!!viewerItem["itemElementCustomColor"]) {
                    viewerItem["itemElementCustomColor"].add(_this._raiseItemElementCustomColor);
                }
                viewerItem.itemWidgetCreated.add(_this._raiseItemWidgetCreated);
                viewerItem.itemWidgetUpdating.add(_this._raiseItemWidgetUpdating);
                viewerItem.itemWidgetUpdated.add(_this._raiseItemWidgetUpdated);
                viewerItem.itemCaptionToolbarUpdated.add(_this._raiseItemCaptionToolbarUpdated);
            }
            if (!_this._viewerItems[item.componentName()]) {
                _this._viewerItems[item.componentName()] = [];
            }
            if (_this._viewerItems[item.componentName()].indexOf(viewerItem) === -1) {
                _this._viewerItems[item.componentName()].push(viewerItem);
            }
        };
        _this._viewerItemDispose = function (item, viewerItem) {
            if (!!viewerItem) {
                if (item instanceof data_dashboard_item_1.DataDashboardItem) {
                    viewerItem.itemClick.remove(_this._raiseItemClick);
                    viewerItem.itemSelectionChanged.remove(_this._raiseItemSelectionChanged);
                    viewerItem.clearMasterFilter.remove(_this._raiseClearMasterFilter);
                }
                if (!!viewerItem["itemElementCustomColor"]) {
                    viewerItem["itemElementCustomColor"].remove(_this._raiseItemElementCustomColor);
                }
                viewerItem.itemWidgetCreated.remove(_this._raiseItemWidgetCreated);
                viewerItem.itemWidgetUpdating.remove(_this._raiseItemWidgetUpdating);
                viewerItem.itemWidgetUpdated.remove(_this._raiseItemWidgetUpdated);
                viewerItem.itemCaptionToolbarUpdated.remove(_this._raiseItemCaptionToolbarUpdated);
            }
            if (_this._viewerItems[item.componentName()]) {
                var index = _this._viewerItems[item.componentName()].indexOf(viewerItem);
                if (index > -1) {
                    _this._viewerItems[item.componentName()].splice(index, 1);
                }
            }
        };
        _this._beforeApplyOptions = function (item, options, isCreation, customInteractivityOptions) {
            if (item instanceof data_dashboard_item_1.DataDashboardItem) {
                var itemData = item._getItemData();
                _this._options.onItemVisualInteractivity(_events_helper_1.eventsHelper.createItemInteractivityEventArgs(item.componentName(), customInteractivityOptions, itemData));
            }
        };
        _this._raiseItemActionAvailabilityChanged = function (itemName) {
            _this._options.onItemActionAvailabilityChanged({
                itemName: itemName
            });
        };
        _this._raiseItemClick = function (itemName, dataPoint) {
            var itemData = _this._getDataItem(itemName)._getItemData();
            _this._options.onItemClick(_events_helper_1.eventsHelper.createItemEventArgs(itemName, dataPoint, null, itemData, _this.requestUnderlyingData));
        };
        _this._raiseItemSelectionChanged = function (itemName, tuples) {
            var itemData = _this._getDataItem(itemName)._getItemData();
            _this._options.onItemSelectionChanged(_events_helper_1.eventsHelper.createItemSelectionChangedEventArgs(itemName, tuples, itemData));
        };
        _this._raiseItemWidgetCreated = function (name, viewControl) {
            _this._options.onItemWidgetCreated(_events_helper_1.eventsHelper.createWidgetEventArgs(name, viewControl));
        };
        _this._raiseItemWidgetUpdating = function (name, viewControl) {
            _this._options.onItemWidgetUpdating(_events_helper_1.eventsHelper.createWidgetEventArgs(name, viewControl));
        };
        _this._raiseItemWidgetUpdated = function (name, viewControl) {
            _this._options.onItemWidgetUpdated(_events_helper_1.eventsHelper.createWidgetEventArgs(name, viewControl));
        };
        _this._raiseItemCaptionToolbarUpdated = function (name, options) {
            _this._options.onItemCaptionToolbarUpdated({ itemName: name, options: options });
        };
        _this._raiseTitleToolbarUpdated = function (options) {
            _this._options.onDashboardTitleToolbarUpdated({ options: options });
        };
        _this._raiseItemElementCustomColor = function (itemName, eventArgs) {
            var itemData = _this._getDataItem(itemName)._getItemData();
            _this._options.onItemElementCustomColor(_events_helper_1.eventsHelper.createItemElementCustomColorEventArgs(itemName, eventArgs, itemData));
        };
        _this._raiseItemVisualInteractivity = function (itemName, interactivityOptions) {
            var itemData = _this._getDataItem(itemName)._getItemData();
            _this._options.onItemVisualInteractivity(_events_helper_1.eventsHelper.createItemInteractivityEventArgs(itemName, interactivityOptions, itemData));
        };
        _this._raiseClearMasterFilter = function (itemName) {
            _this._options.onItemMasterFilterStateChanged({
                itemName: itemName,
                values: null
            });
        };
        _this.requestUnderlyingData = function (itemName, args, onCompleted) {
            var dataDashboardItem = _this._getDataItem(itemName);
            var raiseOnCompleted = function (underlyingData) {
                var drillThroughData = new _drill_through_data_wrapper_1.DrillThroughDataWrapper(underlyingData);
                drillThroughData.initialize();
                onCompleted(drillThroughData);
            };
            var provider = new _underlying_data_provider_1.UnderlyingDataProvider(_this.dashboardControl._serviceClient());
            provider.requestUnderlyingData(dataDashboardItem, args)
                .done(raiseOnCompleted)
                .fail(function (request) {
                var errorMessage = notificator_1.NotificationController._getErrorTextFromResponse(request);
                if (!errorMessage) {
                    errorMessage = _default_1.getLocalizationById("DashboardWebStringId.Notification.AttemptToGetUnderlyingData");
                }
                ;
                raiseOnCompleted({ ErrorMessage: errorMessage });
            });
        };
        _this._options = __assign({}, _this._defaultOptions, customOptions);
        _this.toDispose.apply(_this, _knockout_utils_1.subscribeWithPrev(_this._title, function (oldValue, newValue) {
            if (oldValue) {
                oldValue.onUpdated.remove(_this._raiseTitleToolbarUpdated);
            }
            if (newValue) {
                newValue.onUpdated.add(_this._raiseTitleToolbarUpdated);
            }
        }));
        _this.toDispose(ko.computed(function () {
            var newDashboard = dashboardControl.dashboard();
            _this._dashboardDisposables.forEach(function (d) { return d.dispose(); });
            _this._dashboardDisposables = [];
            if (newDashboard) {
                newDashboard
                    .items()
                    .filter(function (item) { return item instanceof model_1.TabContainerItem; })
                    .forEach(function (tabContainer) {
                    tabContainer._activePageChanged = function (prevPageName, pageName) {
                        _this._raiseSelectedTabPageChanged(tabContainer.componentName(), prevPageName, pageName);
                    };
                });
                newDashboard._dataDashboardItems().forEach(function (item) {
                    var itemName = item.componentName.peek();
                    _this._raiseItemActionAvailabilityChanged(itemName);
                    var disposables = _knockout_utils_1.subscribeWithPrev(item._actions, function (prevActions, actions) {
                        if (!_array_utils_1.arrayEquals(prevActions, actions)) {
                            _this._raiseItemActionAvailabilityChanged(itemName);
                        }
                    });
                    disposables.push(_knockout_utils_1.subscribeArrayChange(item._drillDownValues, {
                        added: function (v) {
                            _this._options.onItemDrillDownStateChanged({
                                itemName: itemName,
                                action: 'Down',
                                values: item._drillDownValues()
                            });
                        },
                        deleted: function (v) {
                            _this._options.onItemDrillDownStateChanged({
                                itemName: itemName,
                                action: 'Up',
                                values: item._drillDownValues()
                            });
                        }
                    }));
                    disposables.push(item._actualSelectionValues.subscribe(function (newValue) {
                        _this._options.onItemMasterFilterStateChanged({
                            itemName: itemName,
                            values: newValue
                        });
                    }));
                    Array.prototype.push.apply(_this._dashboardDisposables, disposables);
                });
            }
        }));
        return _this;
    }
    ViewerApiExtension.prototype._checkIsRangeFilterItem = function (itemName) {
        var item = this._getDataItem(itemName);
        if (!(item instanceof range_filter_item_1.RangeFilterItem) && !(item instanceof date_filter_item_1.DateFilterItem)) {
            throw new Error("Action is called for an unsupported dashboard item. This action can be performed only for Range Filter and Date Filter.");
        }
    };
    ViewerApiExtension.prototype._raiseSelectedTabPageChanged = function (tabContainerName, prevPageName, pageName) {
        this._options.onSelectedTabPageChanged({
            tabContainerName: tabContainerName,
            selectedPage: pageName,
            previousPage: prevPageName
        });
    };
    ViewerApiExtension.prototype.start = function () {
        this.dashboardControl._dashboardContext.viewerItemCreated.add(this._viewerItemCreated);
        this.dashboardControl._dashboardContext.viewerItemDispose.add(this._viewerItemDispose);
        this.dashboardControl._dashboardContext.beforeApplyOptions.add(this._beforeApplyOptions);
    };
    ViewerApiExtension.prototype.stop = function () {
        this.dashboardControl._dashboardContext.viewerItemCreated.remove(this._viewerItemCreated);
        this.dashboardControl._dashboardContext.viewerItemDispose.remove(this._viewerItemDispose);
        this.dashboardControl._dashboardContext.beforeApplyOptions.remove(this._beforeApplyOptions);
    };
    ViewerApiExtension.prototype._getDataItem = function (itemName) {
        if (this.dashboardControl.dashboard()) {
            var item = this.dashboardControl.dashboard()._findDataItem(itemName);
            if (item) {
                return item;
            }
            else {
                throw Error("The item with the '" + itemName + "' name does not exist");
            }
        }
        else {
            throw new Error("Cannot perform operation because the dashboard is not loaded");
        }
    };
    ViewerApiExtension.prototype.getCurrentRange = function (itemName) {
        this._checkIsRangeFilterItem(itemName);
        var item = this._getDataItem(itemName);
        var selection = item._actualSelectionValues() && item._actualSelectionValues()[0] || item._getEntireRange();
        return selection && selection.length > 0 ? {
            minimum: selection[0],
            maximum: selection[1]
        } : null;
    };
    ViewerApiExtension.prototype.getEntireRange = function (itemName) {
        this._checkIsRangeFilterItem(itemName);
        var entireRange = this._getDataItem(itemName)._getEntireRange();
        return entireRange.length > 0 ? {
            minimum: entireRange[0],
            maximum: entireRange[1]
        } : null;
    };
    ViewerApiExtension.prototype.setRange = function (itemName, range) {
        this._checkIsRangeFilterItem(itemName);
        this.setMasterFilter(itemName, [[range.minimum, range.maximum]]);
    };
    ViewerApiExtension.prototype.setPredefinedRange = function (itemName, dateTimePeriodName) {
        this._checkIsRangeFilterItem(itemName);
        var rangeFilter = this._getDataItem(itemName);
        var periods = rangeFilter.dateTimePeriods().filter(function (period) { return period.name() === dateTimePeriodName; });
        if (periods.length === 0) {
            throw new Error("The predefined range with the '" + dateTimePeriodName + "' name does not exist");
        }
        rangeFilter.currentSelectedDateTimePeriodName(dateTimePeriodName);
    };
    ViewerApiExtension.prototype.getAvailablePredefinedRanges = function (itemName) {
        this._checkIsRangeFilterItem(itemName);
        return this._getDataItem(itemName).dateTimePeriods().map(function (period) { return period.name(); });
    };
    ViewerApiExtension.prototype.getCurrentPredefinedRange = function (itemName) {
        this._checkIsRangeFilterItem(itemName);
        var period = this._getDataItem(itemName).currentSelectedDateTimePeriodName();
        return period ? period : '';
    };
    ViewerApiExtension.prototype.getCurrentSelection = function (itemName) {
        _helper_classes_1.Guard.isNotNull(itemName, "itemName");
        var itemData = this._getDataItem(itemName)._getItemData(), tuples = [], viewerItem = this._getViewerItem(itemName);
        var selectedTuples = viewerItem && viewerItem.getSelectedTuples() || null;
        if (selectedTuples) {
            tuples = selectedTuples.map(function (selectedTuple) { return itemData.createTuple(selectedTuple); });
        }
        return tuples;
    };
    ViewerApiExtension.prototype.canSetMasterFilter = function (itemName) {
        return this._getDataItem(itemName)._actions().indexOf(_common_1.viewerActions.setMasterFilter) !== -1;
    };
    ViewerApiExtension.prototype.canClearMasterFilter = function (itemName) {
        return this._getDataItem(itemName)._actions().indexOf(_common_1.viewerActions.clearMasterFilter) !== -1;
    };
    ViewerApiExtension.prototype.canPerformDrillDown = function (itemName) {
        return this._getDataItem(itemName)._actions().indexOf(_common_1.viewerActions.drillDown) !== -1;
    };
    ViewerApiExtension.prototype.canPerformDrillUp = function (itemName) {
        return this._getDataItem(itemName)._actions().indexOf(_common_1.viewerActions.drillUp) !== -1;
    };
    ViewerApiExtension.prototype.getItemData = function (itemName) {
        return this._getDataItem(itemName)._getItemData();
    };
    ViewerApiExtension.prototype.getCurrentFilterValues = function (itemName) {
        return this._getDataItem(itemName)._getCurrentFilterValues();
    };
    ViewerApiExtension.prototype.getAvailableFilterValues = function (itemName) {
        return this._getDataItem(itemName)._getAvailableFilterValues(itemName);
    };
    ViewerApiExtension.prototype.getCurrentDrillDownValues = function (itemName) {
        return this._getDataItem(itemName)._getCurrentDrillDownValues();
    };
    ViewerApiExtension.prototype.getAvailableDrillDownValues = function (itemName) {
        return this._getDataItem(itemName)._getAvailableDrillDownValues(itemName);
    };
    ViewerApiExtension.prototype.setMasterFilter = function (itemName, values) {
        var item = this._getDataItem(itemName);
        this._clearSelectedDateTimePeriod(item);
        this._getDataItem(itemName)._performSetMasterFilter(values);
    };
    ViewerApiExtension.prototype.clearMasterFilter = function (itemName) {
        var item = this._getDataItem(itemName);
        this._clearSelectedDateTimePeriod(item);
        item._performClearMasterFilter();
    };
    ViewerApiExtension.prototype.performDrillDown = function (itemName, value) {
        this._getDataItem(itemName)._performDrillDown(value);
    };
    ViewerApiExtension.prototype.performDrillUp = function (itemName) {
        this._getDataItem(itemName)._performDrillUp();
    };
    ViewerApiExtension.prototype.getAvailableActions = function (itemName) {
        return this._getDataItem(itemName)._getAvailableActions();
    };
    ViewerApiExtension.prototype.updateItemCaptionToolbar = function (itemName) {
        var _this = this;
        var dashboardItemNames = itemName ?
            this.dashboardControl.dashboard().findItem(itemName) && [itemName] || []
            :
                this.dashboardControl
                    .dashboard()
                    .items()
                    .concat(this.dashboardControl.dashboard().groups())
                    .map(function (item) { return item.componentName(); });
        if (itemName && dashboardItemNames.length === 0) {
            throw new Error("The item with the '" + itemName + "' name does not exist");
        }
        ;
        dashboardItemNames.forEach(function (itemName) {
            _this._viewerItems[itemName] && _this._viewerItems[itemName].forEach(function (viewerItem) { return viewerItem.updateCaptionToolbar(); });
        });
    };
    ViewerApiExtension.prototype.updateDashboardTitleToolbar = function () {
        if (this._title()) {
            this._title().update();
        }
    };
    ViewerApiExtension.prototype.setSelectedTabPage = function (tabPageName) {
        var dashboard = this.dashboardControl.dashboard();
        if (dashboard) {
            var tabPage = utils_1.findItemForApi(this.dashboardControl.dashboard(), tabPageName, model_1.DashboardTabPage);
            var tabContainer = this._findParentTabContainer(tabPageName);
            if (tabContainer && tabPage)
                tabContainer._activeTabPage(tabPage);
        }
    };
    ViewerApiExtension.prototype.setSelectedTabPageIndex = function (tabContainerName, index) {
        var dashboard = this.dashboardControl.dashboard();
        if (dashboard) {
            var tabContainer = utils_1.findItemForApi(this.dashboardControl.dashboard(), tabContainerName, model_1.TabContainerItem);
            if (index < 0 || index > tabContainer.tabPages().length - 1) {
                throw Error("The '" + tabContainerName + "' tab container does not contain a tab page with the following index: " + index);
            }
            var tabContainerLayoutItem = this.dashboardControl.dashboard().layout().findLayoutItem(tabContainer);
            if (tabContainerLayoutItem) {
                this.setSelectedTabPage(tabContainerLayoutItem.childNodes()[index].dashboardItem());
            }
        }
    };
    ViewerApiExtension.prototype.getSelectedTabPageIndex = function (tabContainerName) {
        var dashboard = this.dashboardControl.dashboard();
        if (dashboard) {
            var tabContainer = utils_1.findItemForApi(this.dashboardControl.dashboard(), tabContainerName, model_1.TabContainerItem);
            var tabContainerLayoutItem = this.dashboardControl.dashboard().layout().findLayoutItem(tabContainer);
            var activeTabPageLayoutItem = this.dashboardControl.dashboard().layout().findLayoutItem(tabContainer._activeTabPage());
            if (tabContainerLayoutItem && tabContainerLayoutItem) {
                return tabContainerLayoutItem.childNodes().indexOf(activeTabPageLayoutItem);
            }
        }
        return -1;
    };
    ViewerApiExtension.prototype.getSelectedTabPage = function (tabContainerName) {
        var dashboard = this.dashboardControl.dashboard();
        if (dashboard) {
            var tabContainer = utils_1.findItemForApi(this.dashboardControl.dashboard(), tabContainerName, model_1.TabContainerItem);
            return tabContainer._activeTabPage() ? tabContainer._activeTabPage().componentName() : '';
        }
        return "";
    };
    ViewerApiExtension.prototype._findParentTabContainer = function (tabPageName) {
        var tabContainers = this.dashboardControl.dashboard().items().filter(function (item) { return item instanceof model_1.TabContainerItem; });
        var parentContainer;
        tabContainers.forEach(function (container) {
            var pages = container.tabPages().filter(function (page) { return page.componentName() === tabPageName; });
            if (pages.length > 0) {
                parentContainer = container;
            }
        });
        if (!parentContainer) {
            throw new Error("The tab container item with the page'" + tabPageName + "' name does not exist");
        }
        return parentContainer;
    };
    ViewerApiExtension.prototype._getViewerItem = function (itemName) {
        var viewerItems = this._viewerItems[itemName] ? this._viewerItems[itemName].filter(function (viewer) { return viewer.hasWidget; }) : [];
        return viewerItems.length > 0 ? viewerItems[0] : undefined;
    };
    ViewerApiExtension.prototype._clearSelectedDateTimePeriod = function (item) {
        if ((item instanceof range_filter_item_1.RangeFilterItem) || (item instanceof date_filter_item_1.DateFilterItem)) {
            var rangeFilter = item;
            rangeFilter.currentSelectedDateTimePeriodName(undefined);
        }
    };
    return ViewerApiExtension;
}(disposable_object_1.DisposableObject));
exports.ViewerApiExtension = ViewerApiExtension;
control_options_1.defaultExtensions[name] = function (dashboardControl, options) { return new ViewerApiExtension(dashboardControl, options); };
