/**
* DevExpress Dashboard (dashboard-panel-extension.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devices_1 = require("devextreme/core/devices");
var string_1 = require("devextreme/core/utils/string");
var caption_toolbar_options_1 = require("../../../viewer-parts/widgets/caption-toolbar/caption-toolbar-options");
var $ = require("jquery");
var ko = require("knockout");
var _default_1 = require("../../../data/localization/_default");
var DashboardPanelExtension = (function () {
    function DashboardPanelExtension(dashboardControl, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.dashboardControl = dashboardControl;
        this.options = options;
        this.name = "dashboard-panel";
        this._iconBack = 'dx-dashboard-back';
        this._flexParent = 'dx-dashboard-flex-parent';
        this._dashboardsButton = 'dx-dashboards-button';
        this._dashboardTruncated = 'dx-dashboard-truncated';
        this._ellipsisText = 'dx-dashboard-ellipsis';
        this._itemTemplate = ko.observable();
        this._isMobile = ko.observable(false);
        this._disposables = [];
        this.panelWidth = 250;
        this.visible = ko.observable(false);
        this.allowSwitchToDesigner = ko.observable();
        this.selectedItemKeys = ko.observableArray();
        this.availableDashboards = ko.observableArray();
        this._actualPanelWidth = ko.observable();
        this.showPanelAsync = function (options) {
            var def = $.Deferred();
            _this.visible(true);
            _this.updateDashboardsList();
            setTimeout(function () {
                options.surfaceLeft = _this.panelWidth;
                def.resolve(options);
            }, 500);
            return def.promise();
        };
        this.hidePanelAsync = function (options) {
            var def = $.Deferred();
            _this.visible(false);
            setTimeout(function () {
                options.surfaceLeft = 0;
                def.resolve(options);
            }, 500);
            return def.promise();
        };
        this.switchToViewer = function () {
            _this.dashboardControl.switchToViewer();
        };
        this.switchToDesigner = function () {
            _this.dashboardControl.switchToDesigner();
        };
        this.designerToViewerAction = {
            orderNo: 60,
            action: this.showPanelAsync
        };
        this.viewerToDesignerAction = {
            orderNo: 20,
            action: this.hidePanelAsync
        };
    }
    Object.defineProperty(DashboardPanelExtension.prototype, "_templateName", {
        get: function () {
            if (this._isMobile()) {
                return this.options.dashboardThumbnail ? 'dashboard-preview' : 'dashboard-card-view';
            }
            return 'dashboard-list-item';
        },
        enumerable: true,
        configurable: true
    });
    DashboardPanelExtension.prototype.start = function () {
        var _this = this;
        var mobileExtension = this.dashboardControl.findExtension("mobile-layout");
        this._isMobile(mobileExtension && mobileExtension.mobileLayoutEnabled());
        mobileExtension && mobileExtension.mobileLayoutEnabled.subscribe(function () {
            _this.stop();
            _this.start();
        });
        if (this._isMobile())
            this.allowSwitchToDesigner(false);
        else if (this.allowSwitchToDesigner() === undefined) {
            this.allowSwitchToDesigner(this.dashboardControl.allowSwitchToDesigner);
        }
        this.visible(this._isMobile() ? false : !this.dashboardControl.isDesignMode());
        this._itemTemplate(this._templateName);
        if (this._isMobile()) {
            this._actualPanelWidth($(window).width());
            devices_1.default.on('orientationChanged', function (e) {
                _this._actualPanelWidth($(window).width());
            });
        }
        else {
            this._actualPanelWidth(this.panelWidth);
        }
        this._customTemplate = this._getCustomTemplate();
        this.dashboardControl.customTemplates.push(this._customTemplate);
        this._disposables.push(this.dashboardControl.dashboardContainer.subscribe(function (dashboardContainer) {
            if (dashboardContainer) {
                _this._validateSelection(dashboardContainer, _this.availableDashboards());
            }
        }));
        if (this._isMobile()) {
            var api = this.dashboardControl.findExtension("viewer-api");
            var originalTitleUpdatedHangler_1 = api._options.onDashboardTitleToolbarUpdated;
            api._options.onDashboardTitleToolbarUpdated = function (args) {
                args.options.navigationItems.push({
                    name: caption_toolbar_options_1.dashboardToolbarItemNames.dashboardList,
                    type: 'button',
                    template: function () {
                        return $('<div/>')
                            .addClass([_this._flexParent, _this._ellipsisText].join(' '))
                            .append($('<svg><use xlink:href="#' + _this._iconBack + '" /></svg>'))
                            .append($('<div/>').text(_default_1.getLocalizationById('DashboardWebStringId.Dashboards')).addClass([_this._dashboardsButton, _this._dashboardTruncated].join(' ')));
                    },
                    click: function () {
                        _this.showPanelAsync({ surfaceLeft: _this._actualPanelWidth() });
                    }
                });
                originalTitleUpdatedHangler_1.call(_this, args);
            };
        }
        if (!this.dashboardControl.isDesignMode()) {
            this.dashboardControl.surfaceLeft(this._isMobile() ? 0 : this.panelWidth);
        }
        this.updateDashboardsList();
    };
    DashboardPanelExtension.prototype.stop = function () {
        this._disposables.forEach(function (d) { return d.dispose(); });
        this._disposables = [];
        this.dashboardControl.customTemplates.remove(this._customTemplate);
    };
    DashboardPanelExtension.prototype.updateDashboardsList = function () {
        var _this = this;
        var dashboardContainer = this.dashboardControl.dashboardContainer();
        var options = this.options;
        this.dashboardControl.requestDashboardList().done(function (availableDashboards) {
            _this.availableDashboards(availableDashboards.map(function (dashboard) { return new PanelExtensionDashboardInfo(dashboard.id, dashboard.name, options.dashboardThumbnail ? string_1.format(options.dashboardThumbnail, dashboard.id) : undefined); }));
            _this._validateSelection(_this.dashboardControl.dashboardContainer(), _this.availableDashboards());
        });
    };
    DashboardPanelExtension.prototype._validateSelection = function (dashboardContainer, avaliableDashboards) {
        if (dashboardContainer) {
            var dashboardInfo = avaliableDashboards.filter(function (info) { return info.id === dashboardContainer.id; })[0];
            if (dashboardInfo) {
                this.selectedItemKeys([dashboardInfo.id]);
            }
        }
    };
    DashboardPanelExtension.prototype._hidePanel = function () {
        if (this._isMobile()) {
            this.hidePanelAsync({ surfaceLeft: 0 });
        }
    };
    DashboardPanelExtension.prototype._getCustomTemplate = function () {
        var _this = this;
        var enableAnimation = ko.observable(!this.visible());
        var listOptions = {
            noDataText: '',
            keyExpr: 'id',
            selectionMode: 'single',
            itemTemplate: this._itemTemplate,
            activeStateEnabled: false,
            selectedItemKeys: this.selectedItemKeys,
            onItemClick: function () { _this._hidePanel(); },
            searchEnabled: ko.computed(function () { return _this._isMobile(); }),
            searchExpr: 'id',
            hoverStateEnabled: ko.computed(function () { return !_this._isMobile(); }),
            focusStateEnabled: false,
            searchEditorOptions: {
                placeholder: _default_1.getLocalizationById('DashboardWebStringId.Search')
            },
            onOptionChanged: function (e) {
                if (e.name === 'selectedItemKeys' && _this.selectedItemKeys().length > 0) {
                    var selectedItem = _this.availableDashboards().filter(function (item) { return item.id === _this.selectedItemKeys()[0]; })[0];
                    e.component.scrollToItem(_this.availableDashboards().indexOf(selectedItem));
                }
            },
            onSelectionChanged: function (e) {
                if (e.addedItems.length) {
                    var newDashboardId = e.addedItems[0].id;
                    if (!_this.dashboardControl.dashboardContainer() || _this.dashboardControl.dashboardContainer().id !== newDashboardId) {
                        _this.dashboardControl.loadDashboard(newDashboardId);
                    }
                }
            },
        };
        if (this._isMobile()) {
            listOptions.dataSource = this.availableDashboards;
        }
        else {
            listOptions.items = this.availableDashboards;
        }
        return {
            name: "dx-dashboard-working-mode-extension",
            data: {
                panelWidth: this._actualPanelWidth,
                allowSwitchToDesigner: this.allowSwitchToDesigner,
                visible: this.visible,
                isMobile: this._isMobile,
                hidePanel: function () { _this._hidePanel(); },
                switchToDesigner: this.switchToDesigner,
                switchToViewer: this.switchToViewer,
                listOptions: listOptions,
                enableAnimation: enableAnimation
            }
        };
    };
    return DashboardPanelExtension;
}());
exports.DashboardPanelExtension = DashboardPanelExtension;
var PanelExtensionDashboardInfo = (function () {
    function PanelExtensionDashboardInfo(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.hidden = ko.observable(false);
    }
    PanelExtensionDashboardInfo.prototype.hide = function () {
        this.hidden(true);
    };
    return PanelExtensionDashboardInfo;
}());
