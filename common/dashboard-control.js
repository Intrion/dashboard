/**
* DevExpress Dashboard (dashboard-control.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
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
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var _dashboard_update_hub_1 = require("./dashboard-update-hub/_dashboard-update-hub");
var _interfaces_1 = require("./internal/_interfaces");
var _dashboard_surface_1 = require("./_dashboard-surface");
var _service_client_1 = require("./_service-client");
var control_options_1 = require("./control-options");
var _data_source_browser_1 = require("./_data-source-browser");
var notificator_1 = require("./notification-controller/notificator");
var popup_1 = require("devextreme/ui/popup");
var remote_service_1 = require("./remote-service");
var legacy_settings_1 = require("../viewer-parts/legacy-settings");
var dashboard_1 = require("../model/dashboard");
var resource_manager_1 = require("./resource-manager");
var serializable_model_1 = require("../model/serializable-model");
var _knockout_utils_1 = require("../model/internal/_knockout-utils");
var custom_item_1 = require("../model/items/custom-item/custom-item");
var _obsolete_helper_1 = require("../model/internal/_obsolete-helper");
var _utils_1 = require("../data/_utils");
var $ = require("jquery");
var ko = require("knockout");
var _default_1 = require("../data/localization/_default");
var _dx_devextreme_themes_integration_1 = require("../viewer-parts/_dx-devextreme-themes-integration");
var index_internal_1 = require("./viewer/index.internal");
var DashboardControl = (function () {
    function DashboardControl(element, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.element = element;
        this._itemBatchRequestsEnabled = false;
        this._extensions = ko.observableArray();
        this._encodeHtml = true;
        this._useNeutralFilterMode = false;
        this._allowMaximizeItems = true;
        this._repaintRequest = $.Callbacks();
        this._dashboardSurface = ko.observable();
        this._serviceClient = ko.observable();
        this._displayAllData = ko.observable();
        this._isLoading = ko.observable(false);
        this._perDashboardDisposables = [];
        this._layoutTemplate = ko.observable(null);
        this._layoutBindersCollection = ko.observableArray([]);
        this._emptyControlTemplates = ko.observableArray();
        this._surfaceLeft = ko.observable(0);
        this.surfaceLeft = ko.observable(0);
        this.isDesignMode = ko.observable();
        this.dashboardContainer = ko.observable();
        this.dashboard = ko.computed(function () { return _this.dashboardContainer() && _this.dashboardContainer().dashboard || null; });
        this.customTemplates = ko.observableArray();
        this.getWidgetContainer = function () {
            if (!_this._widgetContainer) {
                var wc = _this.element.querySelector(".dx-dashboard-widget-container");
                if (wc) {
                    _this._widgetContainer = wc;
                }
            }
            return _this._widgetContainer;
        };
        this._endpointCollection = this._unrollEndpointCollection(options);
        this._onItemBeginUpdate = options.onItemBeginUpdate || $.noop;
        this._onItemEndUpdate = options.onItemEndUpdate || $.noop;
        this._onDashboardBeginUpdate = options.onDashboardBeginUpdate || $.noop;
        this._onDashboardEndUpdate = options.onDashboardEndUpdate || $.noop;
        this._onDashboardInitializing = options.onDashboardInitializing || $.noop;
        this._onDashboardStateChanged = options.onDashboardStateChanged || $.noop;
        this._onDashboardInitialized = options.onDashboardInitialized || $.noop;
        this._limitVisibleDataMode = options.limitVisibleDataMode || "Designer";
        this.resizeByTimer = ko.observable(options.resizeByTimer === undefined ? true : options.resizeByTimer);
        this.remoteService = new remote_service_1.AjaxRemoteService(options.ajaxRemoteService || {});
        if (options.dataRequestOptions) {
            this._itemBatchRequestsEnabled = options.dataRequestOptions.itemDataRequestMode === 'BatchRequests';
        }
        this._encodeHtml = options.encodeHtml === undefined ? true : options.encodeHtml;
        this._useNeutralFilterMode = !!options.useNeutralFilterMode;
        this._allowMaximizeItems = options.allowMaximizeItems === undefined ? true : options.allowMaximizeItems;
        legacy_settings_1.LegacySettings._useCardLegacyLayout = options.useCardLegacyLayout;
        this.showConfirmationOnBrowserClosing = options.showConfirmationOnBrowserClosing;
        this.surfaceLeft.subscribe(function (value) {
            _this._surfaceLeft(value);
            _this.repaint();
        });
        this.isDesignMode(!options.workingMode || options.workingMode === "Designer");
        this._dashboardContext = {
            beforeApplyOptions: $.Callbacks(),
            viewerItemCreated: $.Callbacks(),
            viewerItemDispose: $.Callbacks(),
            addContextToolbarItems: $.Callbacks(),
            viewerItemCreator: {},
            refresh: function (itemName) { return _this.refresh(itemName); },
            useNeutralFilterMode: function () { return _this._useNeutralFilterMode; },
            isDesignMode: this.isDesignMode,
            viewerItemsManager: null
        };
        this._dashboardContext.beforeApplyOptions.add(function (item, itemOptions, isCreation) {
            itemOptions.useNeutralFilterMode = _this._useNeutralFilterMode;
            itemOptions.encodeHtml = _this.encodeHtml;
        });
        this._externalTemplates = ko.computed(function () {
            var result = [];
            _this.customTemplates().forEach(function (template) {
                result.push(template);
            });
            _this._extensions().forEach(function (extension) {
                if (extension["template"]) {
                    if (typeof extension["template"] === "string") {
                        result.push({
                            name: extension["template"],
                            data: extension
                        });
                    }
                    else {
                        result.push(extension["template"]);
                    }
                }
            });
            return result;
        });
        this.notificationController = new notificator_1.NotificationController();
        this.isDesignMode.subscribe(function (isDesignMode) {
            _this._validateWorkingMode();
        }, null, "beforeChange");
        this.isDesignMode.subscribe(function (isDesignMode) {
            _this._validateWorkingMode();
            _this._initializeServiceClient(_this.dashboardContainer());
            if (_this._dashboardSurface() && _this._dashboardSurface().rootItem) {
                _this._dashboardSurface().rootItem.isDesignMode(_this.isDesignMode());
                _this._dashboardSurface().select(null);
            }
        });
        this._allowSwitchToDesigner = options.workingMode !== "ViewerOnly";
        var extensionsToRegister = {};
        for (var name_1 in control_options_1.defaultExtensions) {
            extensionsToRegister[name_1] = control_options_1.defaultExtensions[name_1];
        }
        if (this.allowSwitchToDesigner) {
            for (var name_2 in control_options_1.designerExtensions) {
                extensionsToRegister[name_2] = control_options_1.designerExtensions[name_2];
            }
        }
        dx_analytics_core_1.default.Analytics.Internal.ShowMessage = function (msg, type, displayTime, debugInfo) { };
        this._layoutBindersCollection.push({
            name: "dx-dashboard-resizable-layout",
            condition: function () { return true; },
            getData: function () { return _this._dashboardSurface; }
        });
        ko.computed(function () {
            var binders = _this._layoutBindersCollection();
            var binder = binders.filter(function (b) { return b.condition(); })[0];
            if (binder && (!_this._layoutTemplate.peek() || binder.name !== _this._layoutTemplate.peek().name)) {
                _this._layoutTemplate({
                    name: binder.name,
                    data: binder.getData()
                });
            }
        });
        options.onInitializing && options.onInitializing({ component: this });
        this._registerDefaultExtensions(extensionsToRegister, options.extensions);
        this._registerKeyProcessing();
        this._isLoading.subscribe(function (isLoading) { return _this.notificationController.suspended(isLoading); });
        this._isLoading(true);
        setTimeout(function () {
            if (!_this.dashboard()) {
                _this._loadDefaultDashboard(options.initialDashboardId, options.initialDashboardState, options.loadDefaultDashboard)
                    .always(function () { _this._isLoading(false); });
            }
            else {
                _this._isLoading(false);
            }
        }, 1);
        _defineDashboardControlObsoleteMethods(this);
    }
    DashboardControl.recursiveAsyncEval = function (sequence, endCallback, previousOptions, currentIndex) {
        if (currentIndex === void 0) { currentIndex = 0; }
        if (!previousOptions) {
            previousOptions = {
                surfaceLeft: 0
            };
        }
        if (sequence[currentIndex]) {
            sequence[currentIndex].action(previousOptions).done(function (options) { return DashboardControl.recursiveAsyncEval(sequence, endCallback, options, currentIndex + 1); });
        }
        else {
            endCallback(previousOptions);
        }
    };
    Object.defineProperty(DashboardControl.prototype, "_updateHub", {
        get: function () {
            return this._updateHubPrivate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardControl.prototype, "encodeHtml", {
        get: function () {
            return this._encodeHtml;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardControl.prototype, "allowSwitchToDesigner", {
        get: function () {
            return this._allowSwitchToDesigner;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DashboardControl.prototype, "maximizedDashboardItemName", {
        get: function () {
            var fullscreenItemProvider = this._getFullscreenItemProvider();
            return fullscreenItemProvider && fullscreenItemProvider.maximizedItemName || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardControl.prototype, "extensions", {
        get: function () {
            return this._extensions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardControl.prototype, "_colorSchemeCss", {
        get: function () {
            return _dx_devextreme_themes_integration_1.getBaseColorScheme() === "light" ? "dx-color-scheme-light" : "dx-color-scheme-dark";
        },
        enumerable: true,
        configurable: true
    });
    DashboardControl.prototype.repaint = function () {
        this._repaintRequest.fire();
    };
    DashboardControl.prototype.render = function () {
        var openComment = document.createComment(" ko template: { name: 'dx-dashboard-control' } "), closingComment = document.createComment(" /ko ");
        this.element.appendChild(openComment);
        this.element.appendChild(closingComment);
        this._applyBindings(this.element);
    };
    DashboardControl.prototype.maximizeDashboardItem = function (itemName) {
        if (this.dashboard()) {
            var dashboardItem = this.dashboard().findItem(itemName);
            if (dashboardItem) {
                var fullscreenItemProvider = this._getFullscreenItemProvider();
                if (fullscreenItemProvider) {
                    fullscreenItemProvider.maximizeItem(dashboardItem);
                }
            }
            else {
                throw Error("The item with the '" + itemName + "' name does not exist");
            }
        }
    };
    DashboardControl.prototype.restoreDashboardItem = function () {
        var fullscreenItemProvider = this._getFullscreenItemProvider();
        fullscreenItemProvider && fullscreenItemProvider.restoreDownItem();
    };
    DashboardControl.prototype.initializeDashboard = function (id, dashboardJson, initialState) {
        var _this = this;
        this._unloadDashboardServices();
        var dashboard = new dashboard_1.Dashboard(dashboardJson);
        if (initialState) {
            dashboard._state(initialState);
        }
        var e = {
            component: this,
            dashboard: dashboard,
            dashboardId: id,
            ready: $.Deferred().resolve().promise()
        };
        this._onDashboardInitializing(e);
        e.ready.done(function () {
            dashboard.items().forEach(function (item) { return item._useNeutralFilterMode(_this._useNeutralFilterMode); });
            _this._perDashboardDisposables.push(_knockout_utils_1.subscribeArrayChange(dashboard.items, {
                added: function (newItem) { return newItem._useNeutralFilterMode(_this._useNeutralFilterMode); }
            }));
            var dashboardContainer = { id: id, dashboard: dashboard };
            _this._initializeServiceClient(dashboardContainer);
            _this._dataSourceBrowser = new _data_source_browser_1.DataSourceBrowser(dashboard.dataSources, _this.isDesignMode, dashboard.parameters, _this._serviceClient, _this._isLoading);
            _this._dashboardContext.viewerItemsManager = new index_internal_1.ViewerItemAdaptersManager();
            _this._perDashboardDisposables.push(_this._dashboardContext.viewerItemsManager);
            _this._dashboardSurface(new _dashboard_surface_1.DashboardSurface(dashboard, _this._dataSourceBrowser, _this._dashboardContext, function (name) { return _this.findExtension(name); }, _this._allowMaximizeItems, _this.resizeByTimer, _this._repaintRequest, _this.encodeHtml));
            _this._dashboardSurface().rootItem.isDesignMode(_this.isDesignMode());
            _this._updateHubPrivate = new _dashboard_update_hub_1.DashboardUpdateHub(dashboard, _this._itemBatchRequestsEnabled, {
                getItemData: function (item) { return _this._serviceClient().getItemData(item, isModeAllowsToReduceData()); },
                getBatchItemData: function (items) { return _this._serviceClient().getBatchItemData(items, isModeAllowsToReduceData()); },
                getMapShapeFile: function (item) { return _this._serviceClient().getMapShapeFile(item.componentName()); }
            });
            _this._updateHubPrivate.dashboardBeginUpdate = function () { return _this._onDashboardBeginUpdate({
                component: _this,
                dashboardId: _this.dashboardContainer().id
            }); };
            _this._updateHubPrivate.dashboardEndUpdate = function () { return _this._onDashboardEndUpdate({
                component: _this,
                dashboardId: _this.dashboardContainer().id
            }); };
            _this._updateHubPrivate.itemBeginUpdate = function (itemName) { return _this._onItemBeginUpdate({
                component: _this,
                dashboardId: _this.dashboardContainer().id,
                itemName: itemName
            }); };
            _this._updateHubPrivate.itemEndUpdate = function (itemName) { return _this._onItemEndUpdate({
                component: _this,
                dashboardId: _this.dashboardContainer().id,
                itemName: itemName
            }); };
            _this.dashboardContainer(dashboardContainer);
            _this.notificationController.reset();
            _this._onDashboardInitialized({
                component: _this,
                dashboardId: id,
                dashboard: dashboard
            });
            _this._onDashboardStateChanged({
                component: _this,
                dashboard: dashboard,
                dashboardId: id,
                stateString: dashboard.stateString
            });
            var isModeAllowsToReduceData = function () { return _this._limitVisibleDataMode === "DesignerAndViewer" || (_this.isDesignMode() && _this._limitVisibleDataMode === "Designer"); };
            _this._updateHubPrivate.initialize();
            _this._perDashboardDisposables.push(_this.dashboard()._state.subscribe(function (_) {
                _this._onDashboardStateChanged({
                    component: _this,
                    dashboard: _this.dashboard(),
                    dashboardId: _this.dashboardContainer().id,
                    stateString: dashboard.stateString
                });
            }));
        }).fail(function () {
            _this.notificationController.reset();
        });
    };
    DashboardControl.prototype.requestDashboardList = function () {
        var _this = this;
        var urls = this._endpointCollection.dashboardUrls;
        if (urls) {
            return this.remoteService.getFromServer(urls.GetDashboardsAction, null, { cache: false })
                .fail(function () {
                _this.notificationController.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.AttemptToLoadDashboards"));
            });
        }
        return $.Deferred().reject().promise();
    };
    DashboardControl.prototype.loadDashboard = function (dashboardId) {
        var _this = this;
        var urls = this._endpointCollection.dashboardUrls;
        if (urls) {
            this.notificationController.showState(_default_1.getLocalizationById("DashboardWebStringId.Notification.DashboardLoading"));
            return this.remoteService.getFromServer(urls.DashboardAction + "/" + encodeURIComponent(dashboardId), null, { cache: false })
                .done(function (result) {
                _this.initializeDashboard(dashboardId, result.Dashboard, result.initialState);
            }).fail(function (val) {
                _this.notificationController.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.AttemptToLoadDashboard") + (name || dashboardId), val);
            });
        }
        return $.Deferred().reject().promise();
    };
    DashboardControl.prototype.unloadDashboard = function () {
        this._unloadDashboardServices();
        this.dashboardContainer(null);
    };
    DashboardControl.prototype.switchToViewer = function () {
        var _this = this;
        var actions = this.extensions
            .filter(function (extension) { return !!extension.designerToViewerAction; })
            .map(function (extension) { return extension.designerToViewerAction; })
            .sort(function (a, b) { return a.orderNo - b.orderNo; });
        DashboardControl.recursiveAsyncEval(actions, function (options) {
            _this.surfaceLeft(options.surfaceLeft);
            _this.isDesignMode(false);
        });
    };
    DashboardControl.prototype.switchToDesigner = function () {
        var _this = this;
        this._validateWorkingMode();
        var actions = this.extensions
            .filter(function (extension) { return !!extension.viewerToDesignerAction; })
            .map(function (extension) { return extension.viewerToDesignerAction; })
            .sort(function (a, b) { return a.orderNo - b.orderNo; });
        DashboardControl.recursiveAsyncEval(actions, function (options) {
            _this.surfaceLeft(options.surfaceLeft);
            _this.isDesignMode(true);
        });
    };
    DashboardControl.prototype.reloadData = function () {
        var _this = this;
        if (this.dashboard()) {
            this._serviceClient().markDataSourcesForReload().done(function (result) {
                _this.refresh();
            });
        }
    };
    DashboardControl.prototype.refresh = function (args) {
        if (this.dashboard()) {
            var itemNames = [];
            if (!args) {
                itemNames = this.dashboard()._dataDashboardItems().map(function (item) { return item.componentName(); });
            }
            else if (typeof args === "string") {
                itemNames = [args];
            }
            else if (Array.isArray(itemNames)) {
                itemNames = args;
            }
            else {
                throw Error("Invalid arguments");
            }
            this._updateHubPrivate.refreshItems(itemNames);
        }
    };
    DashboardControl.prototype.getDashboardState = function () {
        var dashboard = this.dashboard();
        if (dashboard)
            return dashboard.stateString;
        return null;
    };
    DashboardControl.prototype.setDashboardState = function (dashboardState) {
        var dashboard = this.dashboard();
        if (dashboard) {
            if (typeof dashboardState === "string") {
                dashboard.stateString = dashboardState;
            }
            else {
                dashboard._state(dashboardState);
            }
        }
    };
    DashboardControl.prototype.getDashboardId = function () {
        var dashboardContainer = this.dashboardContainer();
        if (dashboardContainer)
            return dashboardContainer.id;
        return null;
    };
    DashboardControl.prototype.registerIcon = function (icon) {
        resource_manager_1.ResourceManager.registerIcon(icon);
    };
    DashboardControl.prototype.registerExtension = function () {
        var _this = this;
        var extensions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            extensions[_i] = arguments[_i];
        }
        extensions.forEach(function (extension) {
            if (_this._canAddExtension(extension)) {
                _this._addExtension(extension);
                _this._startExtension(extension);
            }
        });
    };
    DashboardControl.prototype.findExtension = function (extensionName) {
        return this._extensions().filter(function (ext) { return ext.name === extensionName; })[0];
    };
    DashboardControl.prototype.unregisterExtension = function () {
        var _this = this;
        var extensionNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            extensionNames[_i] = arguments[_i];
        }
        extensionNames.forEach(function (extensionName) {
            var extension = _this.findExtension(extensionName);
            if (!!extension) {
                var customItemExtension = extension;
                if (customItemExtension.createViewerItem) {
                    _this._dashboardContext.viewerItemCreator[extension.name] = undefined;
                }
                if (customItemExtension.metaData) {
                    delete serializable_model_1.itemTypesMap[extension.name];
                }
                extension.stop && extension.stop();
                _this._extensions.remove(extension);
            }
        });
    };
    DashboardControl.prototype.subscribeExtensionsChanged = function (handlers) {
        return _knockout_utils_1.subscribeArrayChange(this._extensions, handlers);
    };
    DashboardControl.prototype.dispose = function () {
        this.unloadDashboard();
        $(document).off(".dx-dshd");
        ko.cleanNode(this.element);
    };
    DashboardControl.prototype._renderDashboardItem = function (element, dashboardItemName, isStandalone) {
        var _this = this;
        if (isStandalone === void 0) { isStandalone = true; }
        var openComment = document.createComment(" ko template: { name: 'dx-dashboard-standalone-item' } "), closingComment = document.createComment(" /ko ");
        element.appendChild(openComment);
        element.appendChild(closingComment);
        var dashboardItem = ko.computed(function () { return _this.dashboard() && _this.dashboard().items().filter(function (i) { return i.componentName.peek() === dashboardItemName; })[0]; });
        this._applyBindings(element, {
            dashboardItem: dashboardItem,
            context: this._dashboardContext,
            sizeController: new _interfaces_1.SingleItemSizeController(element, this._repaintRequest),
            isStandalone: isStandalone
        });
    };
    DashboardControl.prototype._getFullscreenItemProvider = function () {
        var currentLayout = this._layoutTemplate();
        if (currentLayout && currentLayout.data && currentLayout.data().fullscreenItemProvider) {
            return currentLayout.data().fullscreenItemProvider;
        }
        return null;
    };
    DashboardControl.prototype._registerKeyProcessing = function () {
        var _this = this;
        _staticInitialize();
        var _ignoreKeyProcessing = function () {
            if (!_this.isDesignMode() || !_this._dashboardSurface()) {
                return true;
            }
            var activeElement = $(document.activeElement);
            if (activeElement.is("textarea") || activeElement.is(":input") && (['password', 'text', 'number'].indexOf(activeElement.attr("type")) != -1)) {
                return true;
            }
            return false;
        };
        $(document).on("keyup.dx-dshd", function (e) {
            if (_ignoreKeyProcessing()) {
                return;
            }
            if (e.keyCode === _interfaces_1.KeyCodes.Delete && _this._dashboardSurface()._selectedLayoutItem() && !_this._dashboardSurface().itemInteractionInProgress()) {
                _this._dashboardSurface()._selectedLayoutItem().delete();
                return false;
            }
            var i;
            for (i = 0; i < _this._extensions().length; i++) {
                var extension = _this._extensions()[i];
                if (extension.processKeyEvent && extension.processKeyEvent("keyup", e)) {
                    return false;
                }
            }
        });
        $(document).on("keydown.dx-dshd", function (e) {
            if (_ignoreKeyProcessing()) {
                return;
            }
            var i;
            for (i = 0; i < _this._extensions().length; i++) {
                var extension = _this._extensions()[i];
                if (extension.processKeyEvent && extension.processKeyEvent("keydown", e)) {
                    return false;
                }
            }
        });
    };
    DashboardControl.prototype._registerDefaultExtensions = function (extensions, extensionOptions) {
        var _this = this;
        if (extensionOptions === void 0) { extensionOptions = {}; }
        if (extensionOptions !== false) {
            for (var extensionName in extensions) {
                var options = extensionOptions[extensionName];
                if (options !== false) {
                    if (!!options && typeof options !== "object") {
                        throw Error("Extension options ");
                    }
                    var extension = extensions[extensionName](this, options);
                    this._canAddExtension(extension) && this._addExtension(extension);
                }
            }
            if (typeof extensionOptions === "object") {
                for (var extensionName in extensionOptions) {
                    var extensionCreator = extensionOptions[extensionName];
                    if (typeof extensionCreator === "function") {
                        var extension = extensionCreator(this);
                        this._canAddExtension(extension) && this._addExtension(extension);
                    }
                }
            }
        }
        this.extensions.forEach(function (extension) { return _this._startExtension(extension); });
    };
    DashboardControl.prototype._unrollEndpointCollection = function (options) {
        if (options["endpointCollection"]) {
            return options["endpointCollection"];
        }
        else if (options.endpoint) {
            return {
                dashboardUrls: {
                    DashboardAction: options.endpoint + "/dashboards",
                    GetDashboardsAction: options.endpoint + "/dashboards"
                },
                dataSourceUrls: {
                    GetDataSourcesAction: options.endpoint + "/dataSources"
                },
                dataSourceWizardUrls: {
                    DataSourceWizardAction: options.endpoint + "/data/DataSourceWizardAction",
                    GetConnectionStringsAction: options.endpoint + "/data/GetConnectionStringsAction"
                },
                dataServiceUrls: {
                    ConvertItemAction: options.endpoint + "/data/ConvertItemAction",
                    DashboardItemGetAction: options.endpoint + "/data/DashboardItemGetAction",
                    DimensionFilterItemsAction: options.endpoint + "/data/DimensionFilterItemsAction",
                    DimensionFilterStringAction: options.endpoint + "/data/DimensionFilterStringAction",
                    DimensionUniqueValuesAction: options.endpoint + "/data/DimensionUniqueValuesAction",
                    FieldListAction: options.endpoint + "/data/FieldListAction",
                    GetColoringSchemeAction: options.endpoint + "/data/GetColoringSchemeAction",
                    GetDashboardPaletteAction: options.endpoint + "/data/GetDashboardPaletteAction",
                    GetMapShapeFileAction: options.endpoint + "/data/GetMapShapeFileAction",
                    GetUnderlyingDataAction: options.endpoint + "/data/GetUnderlyingDataAction",
                    MarkDataSourcesForReloadAction: options.endpoint + "/data/MarkDataSourcesForReloadAction",
                    ParameterValuesAction: options.endpoint + "/data/ParameterValuesAction",
                    PerformExportAction: options.endpoint + "/data/PerformExportAction",
                    DashboardItemBatchGetAction: options.endpoint + "/data/DashboardItemBatchGetAction"
                }
            };
        }
        else {
            return {};
        }
    };
    DashboardControl.prototype._loadDefaultDashboard = function (initialDashboardId, initialDashboardState, loadDefaultDashboard) {
        var _this = this;
        if (!!initialDashboardId) {
            return this.loadDashboard(initialDashboardId)
                .done(function () {
                if (!!initialDashboardState) {
                    _this.dashboard().stateString = initialDashboardState;
                }
            });
        }
        else if (loadDefaultDashboard !== false) {
            var res = $.Deferred();
            this.requestDashboardList()
                .done(function (items) {
                if (items[0]) {
                    _this.loadDashboard(items[0].id).done(function () {
                        if (!!initialDashboardState) {
                            _this.dashboard().stateString = initialDashboardState;
                        }
                    })
                        .done(function () { return res.resolve(); })
                        .fail(function () { return res.reject(); });
                }
                else {
                    res.reject();
                }
            })
                .fail(function () {
                res.reject();
            });
            return res.promise();
        }
        else {
            return $.Deferred().resolve().promise();
        }
    };
    DashboardControl.prototype._initializeServiceClient = function (dashboardContainer) {
        var serviceClient = this.isDesignMode() ?
            !this._validateWorkingMode() && new _service_client_1.DesignerDataServiceClient(dashboardContainer, this.notificationController, this._endpointCollection.dataServiceUrls, this.remoteService) || null :
            new _service_client_1.ViewerDataServiceClient(dashboardContainer, this.notificationController, this._endpointCollection.dataServiceUrls, this.remoteService);
        this._serviceClient(serviceClient);
    };
    DashboardControl.prototype._validateWorkingMode = function () {
        if (!this.allowSwitchToDesigner) {
            throw Error("Cannot switch to Designer from the ViewerOnly mode.");
        }
        return false;
    };
    DashboardControl.prototype._canAddExtension = function (extension) {
        if (!!this.findExtension(extension.name)) {
            console.error("The extension with the '" + extension.name + "' name is already registered.");
            return false;
        }
        return true;
    };
    DashboardControl.prototype._addExtension = function (extension) {
        this._extensions.push(extension);
        var customItemExtension = extension;
        if (customItemExtension.createViewerItem) {
            this._dashboardContext.viewerItemCreator[extension.name] = customItemExtension.createViewerItem;
        }
        if (customItemExtension.metaData) {
            serializable_model_1.itemTypesMap[extension.name] = _utils_1.deepExtend({
                type: custom_item_1.CustomItem,
                customItemType: extension.name,
            }, customItemExtension.metaData);
        }
    };
    DashboardControl.prototype._startExtension = function (extension) {
        extension.start && extension.start();
    };
    DashboardControl.prototype._unloadDashboardServices = function () {
        var dashboard = this.dashboard();
        if (dashboard) {
            dashboard.dispose();
            if (this._updateHubPrivate) {
                this._updateHubPrivate.dispose();
                this._updateHubPrivate = null;
            }
            if (this._dataSourceBrowser) {
                this._dataSourceBrowser.dispose();
                this._dataSourceBrowser = null;
            }
            if (this._dashboardSurface()) {
                this._dashboardSurface().dispose();
                this._dashboardSurface(undefined);
            }
        }
        this._perDashboardDisposables.forEach(function (d) { return d.dispose(); });
        this._perDashboardDisposables.splice(0, this._perDashboardDisposables.length);
    };
    DashboardControl.prototype._applyBindings = function (element, additionalProperties) {
        var _this = this;
        var viewModel = __assign({ getWidgetContainer: this.getWidgetContainer, surfaceLeft: this._surfaceLeft, colorSchemeCss: this._colorSchemeCss, isDashboardLoaded: ko.computed(function () { return !!_this.dashboard(); }), layoutTemplate: this._layoutTemplate, externalTemplates: this._externalTemplates, emptyControlTemplates: this._emptyControlTemplates, notificationController: this.notificationController, isLoading: this._isLoading, getLocalizationById: _default_1.getLocalizationById, extend: _utils_1.extend, $unwrap: _utils_1.$unwrap, $: $, ko: ko }, additionalProperties);
        dx_analytics_core_1.default.Analytics.Internal.appendStaticContextToRootViewModel(viewModel);
        ko.applyBindings(viewModel, element);
    };
    return DashboardControl;
}());
exports.DashboardControl = DashboardControl;
ko.bindingHandlers["element-height-change-provider"] = {
    init: function (el, valueAccessor, allbindings, viewmodel, bindingcontext) {
        var data = ko.unwrap(valueAccessor());
        var recalculate = function () {
            setTimeout(function () {
                data.height($(el).height());
            }, 0);
        };
        data.model.subscribe(function () {
            recalculate();
        });
        recalculate();
    }
};
ko.bindingHandlers["xlinkHref"] = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        element.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + valueAccessor());
    }
};
ko.bindingHandlers["dxAttach2Model"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var attachmentName = ko.unwrap(valueAccessor());
        if (["getLookupDefaultValuesViewModel", "getLookupDefaultValueViewModel", "dataSourceBrowser"].indexOf(attachmentName) === -1) {
            throw "non supported";
        }
        var findAttachment = function (name) {
            var context = bindingContext.$parents.filter(function (item) { return item[name] !== undefined; })[0];
            if (context) {
                return context[name];
            }
            return null;
        }, attachment = findAttachment(attachmentName);
        if (attachment) {
            viewModel[attachmentName] = attachment;
        }
    }
};
function _staticInitialize() {
    popup_1.default.defaultOptions({
        options: {
            onInitialized: function (e) {
                var popup = e.component;
                popup.registerKeyHandler("escape", function (e) {
                    e.originalEvent.stopPropagation();
                    popup.hide();
                });
            }
        }
    });
}
function _defineDashboardControlObsoleteMethods(control) {
    _obsolete_helper_1.defineObsoleteProperty({
        target: control,
        memberName: "toolbox",
        oldMemberDisplayName: "DashboardControl.toolbox",
        newMemberDisplayName: "ToolboxExtension.toolboxGroups",
        action: function () {
            var toolboxExtension = control.findExtension("toolbox");
            if (toolboxExtension) {
                return toolboxExtension.toolboxGroups;
            }
            else {
                console.error("The ToolboxExtension could not be found.");
            }
        }
    });
    _obsolete_helper_1.defineObsoleteProperty({
        target: control,
        memberName: "toolbarItems",
        oldMemberDisplayName: "DashboardControl.toolbarItems",
        newMemberDisplayName: "ToolboxExtension.toolbarGroups",
        action: function () {
            var toolboxExtension = control.findExtension("toolbox");
            if (toolboxExtension) {
                return toolboxExtension.toolbarGroups;
            }
            else {
                console.error("The ToolboxExtension could not be found.");
            }
        }
    });
    _obsolete_helper_1.defineObsoleteProperty({
        target: control,
        memberName: "menuItems",
        oldMemberDisplayName: "DashboardControl.menuItems",
        newMemberDisplayName: "ToolboxExtension.menuItems",
        action: function () {
            var toolboxExtension = control.findExtension("toolbox");
            if (toolboxExtension) {
                return toolboxExtension.menuItems;
            }
            else {
                console.error("The ToolboxExtension could not be found.");
            }
        }
    });
    _obsolete_helper_1.defineObsoleteProperty({
        target: control,
        memberName: "menuVisible",
        oldMemberDisplayName: "DashboardControl.menuVisible",
        newMemberDisplayName: "ToolboxExtension.menuVisible",
        action: function () {
            var toolboxExtension = control.findExtension("toolbox");
            if (toolboxExtension) {
                return toolboxExtension.menuVisible;
            }
            else {
                console.error("The toolboxExtension could not be found.");
            }
        }
    });
    _obsolete_helper_1.defineObsoleteProperty({
        target: control,
        memberName: "selectMenuItem",
        oldMemberDisplayName: "DashboardControl.selectMenuItem",
        newMemberDisplayName: "ToolboxExtension.selectMenuItem",
        action: function () {
            var toolboxExtension = control.findExtension("toolbox");
            if (toolboxExtension) {
                return toolboxExtension.selectMenuItem;
            }
            else {
                console.error("The toolboxExtension could not be found.");
            }
        }
    });
    _obsolete_helper_1.defineObsoleteProperty({
        target: control,
        memberName: "undoEngine",
        oldMemberDisplayName: "DashboardControl.undoEngine",
        newMemberDisplayName: "UndoRedoExtension.undoEngine",
        action: function () {
            var undoEngineExtension = control.findExtension("undo-redo");
            if (undoEngineExtension) {
                return undoEngineExtension.undoEngine;
            }
            else {
                console.error("The UndoRedoExtension could not be found.");
            }
        }
    });
    _obsolete_helper_1.defineObsoleteProperty({
        target: control,
        memberName: "colorSchemeCss",
        warmMessage: "The DashboardControl.colorSchemeCss is obsolete. Use the DevExpress.ui.themes.current method instead.",
        action: function () { return control._colorSchemeCss; }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: control,
        memberName: "saveDashboard",
        oldMemberDisplayName: "DashboardControl.saveDashboard",
        newMemberDisplayName: "SaveDashboardExtension.saveDashboard",
        action: function () {
            var saveDashboardExtension = control.findExtension("save-dashboard");
            if (saveDashboardExtension) {
                return saveDashboardExtension.saveDashboard();
            }
            else {
                console.error("The SaveDashboardExtension could not be found.");
            }
        }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: control,
        memberName: "ensureDashboardSaved",
        oldMemberDisplayName: "DashboardControl.ensureDashboardSaved",
        newMemberDisplayName: "SaveDashboardExtension.ensureDashboardSaved",
        action: function (action) {
            var saveDashboardExtension = control.findExtension("save-dashboard");
            if (saveDashboardExtension) {
                return saveDashboardExtension.ensureDashboardSaved(action);
            }
            else {
                console.error("The SaveDashboardExtension could not be found.");
            }
        }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: control,
        memberName: "clearDesigner",
        oldMemberDisplayName: "DashboardControl.clearDesigner",
        newMemberDisplayName: "DashboardControl.unloadDashboard",
        action: function () { return control.unloadDashboard(); }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: control,
        memberName: "close",
        oldMemberDisplayName: "DashboardControl.close",
        newMemberDisplayName: "DashboardControl.unloadDashboard",
        action: function () { return control.unloadDashboard(); }
    });
}
