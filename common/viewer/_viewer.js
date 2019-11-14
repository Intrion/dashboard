/**
* DevExpress Dashboard (_viewer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _layout_1 = require("./layout/_layout");
var _dashboard_title_view_constants_1 = require("../../viewer-parts/title/_dashboard-title-view-constants");
var _dashboard_title_model_1 = require("./title/_dashboard-title-model");
var $ = require("jquery");
var ko = require("knockout");
var FullscreenItemModel = (function () {
    function FullscreenItemModel(dashboardContext, localContext, repaintRequest) {
        if (repaintRequest === void 0) { repaintRequest = $.Callbacks(); }
        var _this = this;
        this.dashboardContext = dashboardContext;
        this.localContext = localContext;
        this.repaintRequest = repaintRequest;
        this._dashboardItem = ko.observable(null);
        this._visible = ko.observable(false);
        this.dashboardItem = ko.computed(function () { return _this._dashboardItem(); });
        this.visible = ko.computed(function () { return _this._visible(); });
        this.viewModel = ko.computed(function () {
            return {
                dashboardItem: _this.dashboardItem(),
                dashboardContext: _this.dashboardContext,
                localContext: _this.localContext,
                repaintRequest: _this.repaintRequest
            };
        });
    }
    Object.defineProperty(FullscreenItemModel.prototype, "maximizedItemName", {
        get: function () {
            if (this._visible() && this.dashboardItem()) {
                return this.dashboardItem().componentName();
            }
            else {
                return "";
            }
        },
        enumerable: true,
        configurable: true
    });
    FullscreenItemModel.prototype.maximizeItem = function (dashboardItem) {
        this._dashboardItem(dashboardItem);
        this._visible(true);
    };
    FullscreenItemModel.prototype.restoreDownItem = function () {
        this._visible(false);
    };
    return FullscreenItemModel;
}());
exports.FullscreenItemModel = FullscreenItemModel;
ko.components.register('dashboard-viewer', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var $element = $(componentInfo.element);
            var viewModel = {};
            var disposables = [];
            var headerHeight = ko.observable(_dashboard_title_view_constants_1.titleHeight);
            var hostSize = ko.observable();
            var timers = {
                interval: 0,
                timer: 0
            };
            viewModel.dashboard = params.dashboard;
            viewModel.dataSourceBrowser = params.dataSourceBrowser;
            viewModel.layout = params.layout;
            viewModel.headerHeight = headerHeight;
            viewModel.encodeHtml = params.encodeHtml;
            viewModel.fullscreenItemModel = params.fullscreenItemModel;
            viewModel.encodeHtml = params.encodeHtml;
            var titleModel = new _dashboard_title_model_1.DashboardTitleModel(params.titleContext, params.dashboard);
            viewModel.toolbarOptions = titleModel.toolbarOptions;
            viewModel.showTitle = titleModel.showTitle;
            viewModel.left = _layout_1.SplitterSize / 2;
            viewModel.right = _layout_1.SplitterSize / 2;
            var layoutTop = ko.computed(function () {
                return titleModel.showTitle() ? headerHeight() : 0;
            });
            viewModel.layoutTop = layoutTop;
            var layout = ko.unwrap(viewModel.layout);
            var updateSize = function (force) {
                if (force === void 0) { force = false; }
                if (!!layout && layout.isLayoutReady()) {
                    if (!hostSize() || Math.abs(hostSize().width - $element.width()) > 1 || Math.abs(hostSize().height - $element.height()) > 1) {
                        hostSize({ width: $element.width(), height: $element.height() });
                        clearTimeout(timers.timer);
                        timers.timer = 0;
                        clearInterval(timers.interval);
                        timers.interval = 0;
                        var updateSize_1 = function () {
                            layout.updateSize($element.width(), $element.height() - layoutTop());
                        };
                        if (!force) {
                            timers.timer = window.setTimeout(function () {
                                updateSize_1();
                                startInterval();
                            }, 350);
                        }
                        else {
                            updateSize_1();
                            startInterval();
                        }
                    }
                }
            };
            var startInterval = function () {
                if (params.resizeByTimer()) {
                    timers.interval = window.setInterval(updateSize, 300);
                }
            };
            var forceRepaintCallback = function () { return updateSize(true); };
            params.repaintRequest.add(forceRepaintCallback);
            startInterval();
            updateSize(true);
            disposables.push(headerHeight.subscribe(function () { hostSize(undefined); updateSize(true); }));
            disposables.push(titleModel.showTitle.subscribe(function () { hostSize(undefined); updateSize(true); }));
            var disposeCallback = function () {
                params.repaintRequest.remove(forceRepaintCallback);
                titleModel.dispose();
                disposables.forEach(function (disposable) { return disposable.dispose(); });
                disposables = [];
                clearTimeout(timers.timer);
                timers.timer = 0;
                clearInterval(timers.interval);
                timers.interval = 0;
                window.removeEventListener('unload', disposeCallback);
            };
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, disposeCallback);
            window.addEventListener('unload', disposeCallback);
            return viewModel;
        }
    },
    template: { element: 'dx-dashboard-viewer' }
});
