/**
* DevExpress Dashboard (_add-data-source-popup.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var dashboard_1 = require("../../model/dashboard");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var AddDataSourcePopup = (function () {
    function AddDataSourcePopup(accessibleDataSourcesExtension, addDataSourcesCallback, popupVisible) {
        this.title = _default_1.getLocalizationById("DashboardWebStringId.DataSources.AddDataSource");
        this.toolbarItems = [];
        this.addButtonDisable = ko.computed(function () { return accessibleDataSourcesExtension && accessibleDataSourcesExtension().selectedDataSources().length === 0; });
        this.template = accessibleDataSourcesExtension().templateName;
        this.bindingData = accessibleDataSourcesExtension().viewModel;
        this.toolbarItems = [{
                toolbar: 'bottom',
                location: 'after',
                widget: 'dxButton',
                disabled: this.addButtonDisable,
                options: {
                    text: _default_1.getLocalizationById("DashboardWebStringId.DataSources.IncludeToTheDashboard"),
                    type: 'default',
                    onClick: function () {
                        addDataSourcesCallback(accessibleDataSourcesExtension().selectedDataSources().map(function (dataSource) {
                            return dashboard_1.Dashboard._createDataSource(new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer({ useRefs: false }).serialize(dataSource), new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer());
                        }));
                        popupVisible(false);
                    }
                }
            },
            {
                toolbar: 'bottom',
                location: 'after',
                widget: 'dxButton',
                options: {
                    text: _default_1.getLocalizationById("DashboardWebStringId.DataSources.Cancel"),
                    onClick: function () { popupVisible(false); }
                }
            }];
    }
    return AddDataSourcePopup;
}());
exports.AddDataSourcePopup = AddDataSourcePopup;
