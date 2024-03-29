﻿/**
* DevExpress Dashboard (_dashboard-title-toolbar-adapter.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _localizer_1 = require("../../data/_localizer");
var caption_toolbar_options_1 = require("../widgets/caption-toolbar/caption-toolbar-options");
var _localization_ids_1 = require("../../data/_localization-ids");
var _caption_toolbar_css_classes_1 = require("../widgets/caption-toolbar/_caption-toolbar-css-classes");
var _dashboard_title_view_constants_1 = require("./_dashboard-title-view-constants");
var _filter_icon_tooptip_1 = require("./_filter-icon-tooptip");
var _formatter_1 = require("../../data/_formatter");
var $ = require("jquery");
var _utils_1 = require("../../data/_utils");
var DashboardTitleToolbarAdapter = (function () {
    function DashboardTitleToolbarAdapter() {
    }
    DashboardTitleToolbarAdapter.getTitleOptions = function (titleViewModel, masterFilterValues, showExportDialog, showParametersDialog, allowExport) {
        var _this = this;
        var contentItems = [];
        var actionItems = [];
        if (titleViewModel) {
            var imageViewModel_1 = titleViewModel.LayoutModel.ImageViewModel;
            var exportMenu = {
                title: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ExportTo),
                items: [],
                itemClick: function (itemData, itemElement, index) { showExportDialog(_caption_toolbar_css_classes_1._convertToExportFormat(itemData)); },
                type: "icons"
            };
            exportMenu.items.push(_caption_toolbar_css_classes_1.cssClasses.iconExportToPDF);
            if (_caption_toolbar_css_classes_1.Settings.allowExportToImage)
                exportMenu.items.push(_caption_toolbar_css_classes_1.cssClasses.iconExportToImage);
            exportMenu.items.push(_caption_toolbar_css_classes_1.cssClasses.iconExportToExcel);
            if (imageViewModel_1) {
                contentItems.push({
                    name: caption_toolbar_options_1.dashboardToolbarItemNames.dashboardTitleImage,
                    template: function () {
                        var imageSrs = (imageViewModel_1.Url ? imageViewModel_1.Url : 'data:' + imageViewModel_1.MimeType + ';base64,' + imageViewModel_1.SourceBase64String);
                        var $image = $('<img>').attr("src", imageSrs).height(_dashboard_title_view_constants_1.titleHeight + 'px');
                        $image.on("load", function () {
                            var imageHeight = $image.height();
                            if (imageHeight > _dashboard_title_view_constants_1.titleHeight) {
                                $image.width(Math.floor($image.width() * (_dashboard_title_view_constants_1.titleHeight / imageHeight)));
                                $image.height(_dashboard_title_view_constants_1.titleHeight);
                            }
                            else {
                                $image.css('margin-top', Math.ceil((_dashboard_title_view_constants_1.titleHeight - imageHeight) / 2));
                            }
                            $image.css({ visibility: 'visible' });
                        });
                        return $image;
                    }
                });
            }
            if (titleViewModel.Text) {
                contentItems.push({
                    name: caption_toolbar_options_1.dashboardToolbarItemNames.dashboardTitle,
                    type: 'text',
                    text: titleViewModel.Text
                });
            }
            if (titleViewModel.IncludeMasterFilterValues && masterFilterValues && masterFilterValues.length == 1 && masterFilterValues[0].Values.length == 1)
                contentItems.push({
                    name: caption_toolbar_options_1.dashboardToolbarItemNames.titleFilterText,
                    template: function () {
                        return $('<div/>').text(_this._getMasterFilterText(masterFilterValues)).addClass([_caption_toolbar_css_classes_1.cssClasses.filterText, _caption_toolbar_css_classes_1.cssClasses.ellipsisText].join(' '));
                    }
                });
            if (titleViewModel.IncludeMasterFilterValues && masterFilterValues && (masterFilterValues.length > 1 || (masterFilterValues.length > 0 && masterFilterValues[0].Values.length > 1)))
                contentItems.push({
                    name: caption_toolbar_options_1.dashboardToolbarItemNames.titleFilterIcon,
                    icon: _caption_toolbar_css_classes_1.cssClasses.iconFilter,
                    type: 'button',
                    tooltip: {
                        template: function (contentElement) {
                            return _filter_icon_tooptip_1.FilterIconTooltip.getTooltipContent(_utils_1.$wrap(contentElement), masterFilterValues);
                        },
                    }
                });
            if (allowExport)
                actionItems.push({
                    name: caption_toolbar_options_1.dashboardToolbarItemNames.exportMenu,
                    menu: exportMenu,
                    icon: _caption_toolbar_css_classes_1.cssClasses.iconItemExport,
                    type: 'menu',
                    hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ExportTo)
                });
            if (titleViewModel.ShowParametersButton)
                actionItems.push({
                    name: caption_toolbar_options_1.dashboardToolbarItemNames.parameters,
                    click: function (element) { showParametersDialog(); },
                    icon: _caption_toolbar_css_classes_1.cssClasses.iconParameters,
                    type: 'button',
                    hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ParametersFormCaption)
                });
        }
        return {
            contentItems: contentItems,
            actionItems: actionItems,
            navigationItems: []
        };
    };
    DashboardTitleToolbarAdapter._getMasterFilterText = function (masterFilterValues) {
        if (masterFilterValues) {
            masterFilterValues.forEach(function (dimFilterValue) {
                dimFilterValue.Values.forEach(function (val) {
                    val.Format = val.Format || {};
                });
            });
            if (masterFilterValues.length == 1 && masterFilterValues[0].Values.length == 1) {
                return _formatter_1.formatFilterValue(masterFilterValues[0].Values[0]);
            }
        }
        return undefined;
    };
    return DashboardTitleToolbarAdapter;
}());
exports.DashboardTitleToolbarAdapter = DashboardTitleToolbarAdapter;
