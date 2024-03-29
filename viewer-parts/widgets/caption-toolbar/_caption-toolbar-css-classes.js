﻿/**
* DevExpress Dashboard (_caption-toolbar-css-classes.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _export_options_1 = require("../../_export-options");
exports.cssClasses = {
    caption: 'dx-dashboard-caption-toolbar',
    actionToolbar: 'dx-dashboard-action-toolbar',
    contentToolbar: 'dx-dashboard-content-toolbar',
    captionBorder: 'dx-dashboard-caption-toolbar-border',
    title: 'dx-dashboard-title-toolbar',
    captionPanelSeparator: 'dx-caption-panel-separator',
    popoverIconMenuWrapper: 'dx-dashboard-icon-menu-popover-wrapper',
    popoverListWrapper: 'dx-dashboard-list-popover-wrapper',
    floatingContainer: 'dx-dashboard-floating-caption-panel-container',
    iconClearMasterFilter: 'dx-dashboard-clear-master-filter',
    iconClearSelection: 'dx-dashboard-clear-selection',
    iconDrillUp: 'dx-dashboard-drill-up',
    iconMultiselection: 'dx-dashboard-toggle-multiselection',
    iconItemExport: 'dx-dashboard-export',
    iconExportToPDF: 'dx-dashboard-export-to-pdf',
    iconExportToImage: 'dx-dashboard-export-to-image',
    iconExportToExcel: 'dx-dashboard-export-to-excel',
    iconContentSelection: 'dx-dashboard-content-selection',
    iconLimitVisibleData: 'dx-dashboard-data-reduced',
    iconParameters: 'dx-dashboard-parameters',
    iconFilter: 'dx-dashboard-filter',
    iconTimePeriods: 'dx-dashboard-range-time-periods',
    iconInitialExtent: 'dx-dashboard-map-initial-extent',
    iconBack: 'dx-dashboard-back',
    ellipsisIcon: 'dx-dashboard-open-tab-pages',
    tooltipLimitVisibleData: 'dx-dashboard-tooltip-limit-visible-data',
    checked: 'dx-dashboard-checked',
    textButton: 'text-button',
    filterText: 'filter-text',
    dashboardContainer: 'dx-dashboard-container',
    toolbarItem: 'dx-toolbar-item',
    toolbarBefore: 'dx-toolbar-before',
    toolbarAfter: 'dx-toolbar-after',
    toolbarCenter: 'dx-toolbar-center',
    ellipsisText: 'dx-dashboard-ellipsis',
    flexParent: 'dx-dashboard-flex-parent',
    truncated: 'dx-dashboard-truncated',
    fixed: 'dx-dashboard-fixed',
    buttonBack: 'dx-dashboard-back-button',
    toolbarPreview: 'dx-dashboard-toolbar-preview'
};
function _convertToExportFormat(exportIcon) {
    switch (exportIcon) {
        case exports.cssClasses.iconExportToExcel:
            return _export_options_1.exportFormats.excel;
        case exports.cssClasses.iconExportToImage:
            return _export_options_1.exportFormats.image;
        default:
            return _export_options_1.exportFormats.pdf;
    }
}
exports._convertToExportFormat = _convertToExportFormat;
exports.Settings = {
    allowExportToImage: true
};
