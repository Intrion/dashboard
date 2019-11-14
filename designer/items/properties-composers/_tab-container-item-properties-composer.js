/**
* DevExpress Dashboard (_tab-container-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var _interactivity_options_1 = require("../../../model/items/options/metadata/_interactivity-options");
var _accordion_tab_1 = require("../../_accordion-tab");
var _dashboard_tab_page_1 = require("../../../model/items/tab-container-item/metadata/_dashboard-tab-page");
var ko = require("knockout");
var _undo_engine_helper_1 = require("../../../model/internal/_undo-engine-helper");
var _default_1 = require("../../../data/localization/_default");
var TabContainerItemPropertiesComposer = (function () {
    function TabContainerItemPropertiesComposer() {
    }
    TabContainerItemPropertiesComposer.prototype.composeTabs = function (model, _, dashboard) {
        var _this = this;
        var tabContainerLayoutItem = dashboard.layout().findLayoutItem(model);
        if (!tabContainerLayoutItem) {
            return [];
        }
        return this._getTabPagesInLayoutOrder(model, tabContainerLayoutItem).map(function (tabPage) {
            var tabPageLayoutItem = dashboard.layout().findLayoutItem(tabPage);
            var objectPropertiesWrapper = new _object_properties_wrapper_1.ObjectPropertiesWrapper({
                model: {
                    name: tabPage.name,
                    isMasterFilter: tabPage.interactivityOptions.isMasterFilter,
                    ignoreMasterFilters: tabPage.interactivityOptions.ignoreMasterFilters,
                    showItemAsTabPage: tabPage.showItemAsTabPage
                },
                properties: [
                    _base_metadata_1.name_ViewModel,
                    _dashboard_tab_page_1.showItemAsTabPage,
                    _interactivity_options_1.isMasterFilterDefaultTrue,
                    _interactivity_options_1.ignoreMasterFiltersDefaultFalse
                ]
            });
            var accordionTab = new _accordion_tab_1.AccordionTab(tabPage.componentName(), tabPage.name, objectPropertiesWrapper);
            accordionTab.headerTemplate = "dx-dashboard-properties-header-with-buttons";
            accordionTab.headerModel = {
                category: ko.computed(function () { return dashboard._getDisplayDashboardItem(tabPage).name(); }),
                buttons: [
                    {
                        click: function () { return _this._reordrerTabs(tabContainerLayoutItem, tabPageLayoutItem, -1); },
                        disabled: ko.computed(function () {
                            return tabContainerLayoutItem.childNodes().indexOf(tabPageLayoutItem) === 0;
                        }),
                        title: "",
                        icon: "dx-dashboard-ce-arrow-up"
                    },
                    {
                        click: function () { return _this._reordrerTabs(tabContainerLayoutItem, tabPageLayoutItem, 1); },
                        disabled: ko.computed(function () {
                            return tabContainerLayoutItem.childNodes().indexOf(tabPageLayoutItem) === model.tabPages().length - 1;
                        }),
                        title: "",
                        icon: "dx-dashboard-ce-arrow-down"
                    },
                    {
                        click: function () {
                            var tabContainerLayoutItem = dashboard.layout().findLayoutItem(model);
                            if (tabContainerLayoutItem) {
                                tabContainerLayoutItem._removeLayoutTabPage(tabPage);
                            }
                            model.tabPages.remove(tabPage);
                        },
                        disabled: ko.computed(function () { return model.tabPages().length <= 1; }),
                        title: _default_1.getLocalizationById('DashboardWebStringId.Remove'),
                        class: "dx-dashboard-remove-item-button",
                        icon: "dx-dashboard-remove-small"
                    }
                ]
            };
            return accordionTab;
        });
    };
    TabContainerItemPropertiesComposer.prototype._getTabPagesInLayoutOrder = function (model, tabContainerLayoutItem) {
        return model.tabPages().map(function (i) { return i; }).sort(function (pageItem1, pageItem2) {
            var pageLayoutItem1 = tabContainerLayoutItem.findLayoutItem(pageItem1);
            var pageLayoutItem2 = tabContainerLayoutItem.findLayoutItem(pageItem2);
            return tabContainerLayoutItem.childNodes().indexOf(pageLayoutItem1) - tabContainerLayoutItem.childNodes().indexOf(pageLayoutItem2);
        });
    };
    TabContainerItemPropertiesComposer.prototype._reordrerTabs = function (tabContainerLayoutItem, tabPageLayoutItem, direction) {
        var reorder = function (array, from, to) {
            array.splice(to, 0, array.splice(from, 1)[0]);
        };
        var tabPageIndex = tabContainerLayoutItem.childNodes().indexOf(tabPageLayoutItem);
        var targetTabPageIndex = tabPageIndex + direction;
        if (tabContainerLayoutItem) {
            reorder(tabContainerLayoutItem.childNodes, tabPageIndex, targetTabPageIndex);
        }
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], TabContainerItemPropertiesComposer.prototype, "_reordrerTabs", null);
    return TabContainerItemPropertiesComposer;
}());
exports.TabContainerItemPropertiesComposer = TabContainerItemPropertiesComposer;
