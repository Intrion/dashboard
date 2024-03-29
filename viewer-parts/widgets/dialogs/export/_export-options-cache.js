﻿/**
* DevExpress Dashboard (_export-options-cache.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionName = {
    pdfTitle: 'pdfTitle',
    imageTitle: 'imageTitle',
    fileName: 'fileName',
    autoFitPageCount: 'autoFitPageCount',
    cardAutoArrangeContent: 'cardAutoArrangeContent',
    chartAutomaticPageLayout: 'chartAutomaticPageLayout',
    chartSizeMode: 'chartSizeMode',
    pdfDashboardStatePosition: 'pdfDashboardStatePosition',
    gaugeAutoArrangeContent: 'gaugeAutoArrangeContent',
    gridFitToPageWidth: 'gridFitToPageWidth',
    gridPrintHeadersOnEveryPage: 'gridPrintHeadersOnEveryPage',
    mapAutomaticPageLayout: 'mapAutomaticPageLayout',
    mapSizeMode: 'mapSizeMode',
    pageLayout: 'pageLayout',
    paperKind: 'paperKind',
    pieAutoArrangeContent: 'pieAutoArrangeContent',
    pivotPrintHeadersOnEveryPage: 'pivotPrintHeadersOnEveryPage',
    rangeFilterAutomaticPageLayout: 'rangeFilterAutomaticPageLayout',
    rangeFilterSizeMode: 'rangeFilterSizeMode',
    pdfScaleFactor: 'pdfScaleFactor',
    scaleMode: 'scaleMode',
    dashboardAutomaticPageLayout: 'dashboardAutomaticPageLayout',
    pdfShowTitle: 'pdfShowTitle',
    treemapAutomaticPageLayout: 'treemapAutomaticPageLayout',
    treemapSizeMode: 'treemapSizeMode',
    imageFormat: 'imageFormat',
    resolution: 'resolution',
    imageScaleFactor: 'imageScaleFactor',
    imageShowTitle: 'imageShowTitle',
    csvValueSeparator: 'csvValueSeparator',
    excelDashboardStatePosition: 'excelDashboardStatePosition',
    excelFormat: 'excelFormat',
    pdfExportFilters: 'pdfExportFilters',
    imageExportFilters: 'imageExportFilters',
    excelExportFilters: 'excelExportFilters',
    pdfExportParameters: 'pdfExportParameters',
    imageExportParameters: 'imageExportParameters',
    excelExportParameters: 'excelExportParameters',
    pdfIncludeHiddenParameters: 'pdfIncludeHiddenParameters',
    imageIncludeHiddenParameters: 'imageIncludeHiddenParameters',
    excelIncludeHiddenParameters: 'excelIncludeHiddenParameters',
    fontInfo: 'fontInfo'
};
var exportOptionsCache = (function () {
    function exportOptionsCache() {
        this._initialize();
    }
    exportOptionsCache.prototype._initialize = function () {
        this.documentOptions = {};
        this.itemsOptions = {};
        this.pdfOptions = {};
        this.imageOptions = {};
        this.excelOptions = {};
    };
    exportOptionsCache.prototype._addOption = function (cache, key, defaultValue, actualValue) {
        if (defaultValue == actualValue)
            delete cache[key];
        else
            cache[key] = actualValue;
    };
    exportOptionsCache.prototype.add = function (name, defaultDocumentInfo, actualDocumentInfo) {
        var that = this;
        if (name === "") {
            this._addOption(that.documentOptions, exports.optionName.pdfTitle, defaultDocumentInfo.pdfExportOptions.Title, actualDocumentInfo.pdfExportOptions.Title);
            this._addOption(that.documentOptions, exports.optionName.imageTitle, defaultDocumentInfo.imageExportOptions.Title, actualDocumentInfo.imageExportOptions.Title);
            this._addOption(that.pdfOptions, exports.optionName.pdfShowTitle, defaultDocumentInfo.pdfExportOptions.ShowTitle, actualDocumentInfo.pdfExportOptions.ShowTitle);
            this._addOption(that.imageOptions, exports.optionName.imageShowTitle, defaultDocumentInfo.imageExportOptions.ShowTitle, actualDocumentInfo.imageExportOptions.ShowTitle);
        }
        this._addOption(that.pdfOptions, exports.optionName.pageLayout, defaultDocumentInfo.pdfExportOptions.PageLayout, actualDocumentInfo.pdfExportOptions.PageLayout);
        this._addOption(that.pdfOptions, exports.optionName.paperKind, defaultDocumentInfo.pdfExportOptions.PaperKind, actualDocumentInfo.pdfExportOptions.PaperKind);
        this.itemsOptions[name] = {};
        this._addOption(that.itemsOptions[name], exports.optionName.scaleMode, defaultDocumentInfo.pdfExportOptions.DocumentScaleMode, actualDocumentInfo.pdfExportOptions.DocumentScaleMode);
        this._addOption(that.itemsOptions[name], exports.optionName.dashboardAutomaticPageLayout, defaultDocumentInfo.pdfExportOptions.DashboardAutomaticPageLayout, actualDocumentInfo.pdfExportOptions.DashboardAutomaticPageLayout);
        this._addOption(that.itemsOptions[name], exports.optionName.pdfScaleFactor, defaultDocumentInfo.pdfExportOptions.ScaleFactor, actualDocumentInfo.pdfExportOptions.ScaleFactor);
        this._addOption(that.itemsOptions[name], exports.optionName.imageScaleFactor, defaultDocumentInfo.imageExportOptions.ScaleFactor, actualDocumentInfo.imageExportOptions.ScaleFactor);
        this._addOption(that.itemsOptions[name], exports.optionName.autoFitPageCount, defaultDocumentInfo.pdfExportOptions.AutoFitPageCount, actualDocumentInfo.pdfExportOptions.AutoFitPageCount);
        this._addOption(that.itemsOptions[name], exports.optionName.fileName, defaultDocumentInfo.fileName, actualDocumentInfo.fileName);
        this._addOption(that.itemsOptions[name], exports.optionName.gridPrintHeadersOnEveryPage, defaultDocumentInfo.pdfExportOptions.GridPrintHeadersOnEveryPage, actualDocumentInfo.pdfExportOptions.GridPrintHeadersOnEveryPage);
        this._addOption(that.itemsOptions[name], exports.optionName.gridFitToPageWidth, defaultDocumentInfo.pdfExportOptions.GridFitToPageWidth, actualDocumentInfo.pdfExportOptions.GridFitToPageWidth);
        this._addOption(that.itemsOptions[name], exports.optionName.pivotPrintHeadersOnEveryPage, defaultDocumentInfo.pdfExportOptions.PivotPrintHeadersOnEveryPage, actualDocumentInfo.pdfExportOptions.PivotPrintHeadersOnEveryPage);
        this._addOption(that.itemsOptions[name], exports.optionName.chartSizeMode, defaultDocumentInfo.pdfExportOptions.ChartSizeMode, actualDocumentInfo.pdfExportOptions.ChartSizeMode);
        this._addOption(that.itemsOptions[name], exports.optionName.chartAutomaticPageLayout, defaultDocumentInfo.pdfExportOptions.ChartAutomaticPageLayout, actualDocumentInfo.pdfExportOptions.ChartAutomaticPageLayout);
        this._addOption(that.itemsOptions[name], exports.optionName.mapSizeMode, defaultDocumentInfo.pdfExportOptions.MapSizeMode, actualDocumentInfo.pdfExportOptions.MapSizeMode);
        this._addOption(that.itemsOptions[name], exports.optionName.mapAutomaticPageLayout, defaultDocumentInfo.pdfExportOptions.MapAutomaticPageLayout, actualDocumentInfo.pdfExportOptions.MapAutomaticPageLayout);
        this._addOption(that.itemsOptions[name], exports.optionName.treemapSizeMode, defaultDocumentInfo.pdfExportOptions.TreemapSizeMode, actualDocumentInfo.pdfExportOptions.TreemapSizeMode);
        this._addOption(that.itemsOptions[name], exports.optionName.treemapAutomaticPageLayout, defaultDocumentInfo.pdfExportOptions.TreemapAutomaticPageLayout, actualDocumentInfo.pdfExportOptions.TreemapAutomaticPageLayout);
        this._addOption(that.itemsOptions[name], exports.optionName.rangeFilterSizeMode, defaultDocumentInfo.pdfExportOptions.rangeFilterSizeMode, actualDocumentInfo.pdfExportOptions.rangeFilterSizeMode);
        this._addOption(that.itemsOptions[name], exports.optionName.rangeFilterAutomaticPageLayout, defaultDocumentInfo.pdfExportOptions.RangeFilterAutomaticPageLayout, actualDocumentInfo.pdfExportOptions.RangeFilterAutomaticPageLayout);
        this._addOption(that.itemsOptions[name], exports.optionName.pieAutoArrangeContent, defaultDocumentInfo.pdfExportOptions.PieAutoArrangeContent, actualDocumentInfo.pdfExportOptions.PieAutoArrangeContent);
        this._addOption(that.itemsOptions[name], exports.optionName.gaugeAutoArrangeContent, defaultDocumentInfo.pdfExportOptions.GaugeAutoArrangeContent, actualDocumentInfo.pdfExportOptions.GaugeAutoArrangeContent);
        this._addOption(that.itemsOptions[name], exports.optionName.cardAutoArrangeContent, defaultDocumentInfo.pdfExportOptions.CardAutoArrangeContent, actualDocumentInfo.pdfExportOptions.CardAutoArrangeContent);
        if (name != "") {
            this._addOption(that.itemsOptions[name], exports.optionName.pdfShowTitle, defaultDocumentInfo.pdfExportOptions.ShowTitle, actualDocumentInfo.pdfExportOptions.ShowTitle);
            this._addOption(that.itemsOptions[name], exports.optionName.imageShowTitle, defaultDocumentInfo.imageExportOptions.ShowTitle, actualDocumentInfo.imageExportOptions.ShowTitle);
            this._addOption(that.itemsOptions[name], exports.optionName.pdfTitle, defaultDocumentInfo.pdfExportOptions.Title, actualDocumentInfo.pdfExportOptions.Title);
            this._addOption(that.itemsOptions[name], exports.optionName.imageTitle, defaultDocumentInfo.imageExportOptions.Title, actualDocumentInfo.imageExportOptions.Title);
        }
        this._addOption(that.documentOptions, exports.optionName.pdfDashboardStatePosition, defaultDocumentInfo.pdfExportOptions.DashboardStatePosition, actualDocumentInfo.pdfExportOptions.DashboardStatePosition);
        this._addOption(that.documentOptions, exports.optionName.pdfExportFilters, defaultDocumentInfo.pdfExportOptions.ExportFilters, actualDocumentInfo.pdfExportOptions.ExportFilters);
        this._addOption(that.documentOptions, exports.optionName.pdfExportParameters, defaultDocumentInfo.pdfExportOptions.ExportParameters, actualDocumentInfo.pdfExportOptions.ExportParameters);
        this._addOption(that.documentOptions, exports.optionName.pdfIncludeHiddenParameters, defaultDocumentInfo.pdfExportOptions.IncludeHiddenParameters, actualDocumentInfo.pdfExportOptions.IncludeHiddenParameters);
        this._addOption(that.documentOptions, exports.optionName.fontInfo, defaultDocumentInfo.pdfExportOptions.FontInfo, actualDocumentInfo.pdfExportOptions.FontInfo);
        this._addOption(that.imageOptions, exports.optionName.imageFormat, defaultDocumentInfo.imageExportOptions.Format, actualDocumentInfo.imageExportOptions.Format);
        this._addOption(that.imageOptions, exports.optionName.resolution, defaultDocumentInfo.imageExportOptions.Resolution, actualDocumentInfo.imageExportOptions.Resolution);
        this._addOption(that.documentOptions, exports.optionName.imageExportFilters, defaultDocumentInfo.imageExportOptions.ExportFilters, actualDocumentInfo.imageExportOptions.ExportFilters);
        this._addOption(that.documentOptions, exports.optionName.imageExportParameters, defaultDocumentInfo.imageExportOptions.ExportParameters, actualDocumentInfo.imageExportOptions.ExportParameters);
        this._addOption(that.documentOptions, exports.optionName.imageIncludeHiddenParameters, defaultDocumentInfo.imageExportOptions.IncludeHiddenParameters, actualDocumentInfo.imageExportOptions.IncludeHiddenParameters);
        this._addOption(that.documentOptions, exports.optionName.fontInfo, defaultDocumentInfo.imageExportOptions.FontInfo, actualDocumentInfo.imageExportOptions.FontInfo);
        this._addOption(that.excelOptions, exports.optionName.excelFormat, defaultDocumentInfo.excelExportOptions.Format, actualDocumentInfo.excelExportOptions.Format);
        this._addOption(that.excelOptions, exports.optionName.csvValueSeparator, defaultDocumentInfo.excelExportOptions.CsvValueSeparator, actualDocumentInfo.excelExportOptions.CsvValueSeparator);
        this._addOption(that.excelOptions, exports.optionName.excelDashboardStatePosition, defaultDocumentInfo.excelExportOptions.DashboardStatePosition, actualDocumentInfo.excelExportOptions.DashboardStatePosition);
        this._addOption(that.documentOptions, exports.optionName.excelExportFilters, defaultDocumentInfo.excelExportOptions.ExportFilters, actualDocumentInfo.excelExportOptions.ExportFilters);
        this._addOption(that.documentOptions, exports.optionName.excelExportParameters, defaultDocumentInfo.excelExportOptions.ExportParameters, actualDocumentInfo.excelExportOptions.ExportParameters);
        this._addOption(that.documentOptions, exports.optionName.excelIncludeHiddenParameters, defaultDocumentInfo.excelExportOptions.IncludeHiddenParameters, actualDocumentInfo.excelExportOptions.IncludeHiddenParameters);
    };
    exportOptionsCache.prototype._setActualValue = function (cache, key, setActual, defaultValue) {
        var value = cache[key] != undefined ? cache[key] : defaultValue;
        setActual(value);
    };
    exportOptionsCache.prototype.getActualDocumentInfo = function (name, defaultDocumentInfo) {
        var that = this;
        var actualDocumentInfo = {
            pdfExportOptions: {},
            imageExportOptions: {},
            excelExportOptions: {}
        };
        if (name === "") {
            this._setActualValue(that.documentOptions, exports.optionName.pdfTitle, function (actual) { actualDocumentInfo.pdfExportOptions.Title = actual; }, defaultDocumentInfo.pdfExportOptions.Title);
            this._setActualValue(that.documentOptions, exports.optionName.imageTitle, function (actual) { actualDocumentInfo.imageExportOptions.Title = actual; }, defaultDocumentInfo.imageExportOptions.Title);
            this._setActualValue(that.pdfOptions, exports.optionName.pdfShowTitle, function (actual) { actualDocumentInfo.pdfExportOptions.ShowTitle = actual; }, defaultDocumentInfo.pdfExportOptions.ShowTitle);
            this._setActualValue(that.imageOptions, exports.optionName.imageShowTitle, function (actual) { actualDocumentInfo.imageExportOptions.ShowTitle = actual; }, defaultDocumentInfo.imageExportOptions.ShowTitle);
        }
        this._setActualValue(that.pdfOptions, exports.optionName.paperKind, function (actual) { actualDocumentInfo.pdfExportOptions.PaperKind = actual; }, defaultDocumentInfo.pdfExportOptions.PaperKind);
        this._setActualValue(that.pdfOptions, exports.optionName.pageLayout, function (actual) { actualDocumentInfo.pdfExportOptions.PageLayout = actual; }, defaultDocumentInfo.pdfExportOptions.PageLayout);
        if (this.itemsOptions[name] === undefined)
            this.itemsOptions[name] = {};
        this._setActualValue(that.itemsOptions[name], exports.optionName.scaleMode, function (actual) { actualDocumentInfo.pdfExportOptions.DocumentScaleMode = actual; }, defaultDocumentInfo.pdfExportOptions.DocumentScaleMode);
        this._setActualValue(that.itemsOptions[name], exports.optionName.dashboardAutomaticPageLayout, function (actual) { actualDocumentInfo.pdfExportOptions.DashboardAutomaticPageLayout = actual; }, defaultDocumentInfo.pdfExportOptions.DashboardAutomaticPageLayout);
        this._setActualValue(that.itemsOptions[name], exports.optionName.pdfScaleFactor, function (actual) { actualDocumentInfo.pdfExportOptions.ScaleFactor = actual; }, defaultDocumentInfo.pdfExportOptions.ScaleFactor);
        this._setActualValue(that.itemsOptions[name], exports.optionName.imageScaleFactor, function (actual) { actualDocumentInfo.imageExportOptions.ScaleFactor = actual; }, defaultDocumentInfo.imageExportOptions.ScaleFactor);
        this._setActualValue(that.itemsOptions[name], exports.optionName.autoFitPageCount, function (actual) { actualDocumentInfo.pdfExportOptions.AutoFitPageCount = actual; }, defaultDocumentInfo.pdfExportOptions.AutoFitPageCount);
        this._setActualValue(that.itemsOptions[name], exports.optionName.fileName, function (actual) { actualDocumentInfo.fileName = actual; }, defaultDocumentInfo.fileName);
        this._setActualValue(that.itemsOptions[name], exports.optionName.fontInfo, function (actual) { actualDocumentInfo.imageExportOptions.FontInfo = actual; }, defaultDocumentInfo.imageExportOptions.FontInfo);
        this._setActualValue(that.itemsOptions[name], exports.optionName.gridPrintHeadersOnEveryPage, function (actual) { actualDocumentInfo.pdfExportOptions.GridPrintHeadersOnEveryPage = actual; }, defaultDocumentInfo.pdfExportOptions.GridPrintHeadersOnEveryPage);
        this._setActualValue(that.itemsOptions[name], exports.optionName.gridFitToPageWidth, function (actual) { actualDocumentInfo.pdfExportOptions.GridFitToPageWidth = actual; }, defaultDocumentInfo.pdfExportOptions.GridFitToPageWidth);
        this._setActualValue(that.itemsOptions[name], exports.optionName.pivotPrintHeadersOnEveryPage, function (actual) { actualDocumentInfo.pdfExportOptions.PivotPrintHeadersOnEveryPage = actual; }, defaultDocumentInfo.pdfExportOptions.PivotPrintHeadersOnEveryPage);
        this._setActualValue(that.itemsOptions[name], exports.optionName.chartSizeMode, function (actual) { actualDocumentInfo.pdfExportOptions.ChartSizeMode = actual; }, defaultDocumentInfo.pdfExportOptions.ChartSizeMode);
        this._setActualValue(that.itemsOptions[name], exports.optionName.chartAutomaticPageLayout, function (actual) { actualDocumentInfo.pdfExportOptions.ChartAutomaticPageLayout = actual; }, defaultDocumentInfo.pdfExportOptions.ChartAutomaticPageLayout);
        this._setActualValue(that.itemsOptions[name], exports.optionName.mapSizeMode, function (actual) { actualDocumentInfo.pdfExportOptions.MapSizeMode = actual; }, defaultDocumentInfo.pdfExportOptions.MapSizeMode);
        this._setActualValue(that.itemsOptions[name], exports.optionName.mapAutomaticPageLayout, function (actual) { actualDocumentInfo.pdfExportOptions.MapAutomaticPageLayout = actual; }, defaultDocumentInfo.pdfExportOptions.MapAutomaticPageLayout);
        this._setActualValue(that.itemsOptions[name], exports.optionName.treemapSizeMode, function (actual) { actualDocumentInfo.pdfExportOptions.TreemapSizeMode = actual; }, defaultDocumentInfo.pdfExportOptions.TreemapSizeMode);
        this._setActualValue(that.itemsOptions[name], exports.optionName.treemapAutomaticPageLayout, function (actual) { actualDocumentInfo.pdfExportOptions.TreemapAutomaticPageLayout = actual; }, defaultDocumentInfo.pdfExportOptions.TreemapAutomaticPageLayout);
        this._setActualValue(that.itemsOptions[name], exports.optionName.rangeFilterSizeMode, function (actual) { actualDocumentInfo.pdfExportOptions.RangeFilterSizeMode = actual; }, defaultDocumentInfo.pdfExportOptions.RangeFilterSizeMode);
        this._setActualValue(that.itemsOptions[name], exports.optionName.rangeFilterAutomaticPageLayout, function (actual) { actualDocumentInfo.pdfExportOptions.RangeFilterAutomaticPageLayout = actual; }, defaultDocumentInfo.pdfExportOptions.RangeFilterAutomaticPageLayout);
        this._setActualValue(that.itemsOptions[name], exports.optionName.pieAutoArrangeContent, function (actual) { actualDocumentInfo.pdfExportOptions.PieAutoArrangeContent = actual; }, defaultDocumentInfo.pdfExportOptions.PieAutoArrangeContent);
        this._setActualValue(that.itemsOptions[name], exports.optionName.gaugeAutoArrangeContent, function (actual) { actualDocumentInfo.pdfExportOptions.GaugeAutoArrangeContent = actual; }, defaultDocumentInfo.pdfExportOptions.GaugeAutoArrangeContent);
        this._setActualValue(that.itemsOptions[name], exports.optionName.cardAutoArrangeContent, function (actual) { actualDocumentInfo.pdfExportOptions.CardAutoArrangeContent = actual; }, defaultDocumentInfo.pdfExportOptions.CardAutoArrangeContent);
        if (name != "") {
            this._setActualValue(that.itemsOptions[name], exports.optionName.pdfShowTitle, function (actual) { actualDocumentInfo.pdfExportOptions.ShowTitle = actual; }, defaultDocumentInfo.pdfExportOptions.ShowTitle);
            this._setActualValue(that.itemsOptions[name], exports.optionName.imageShowTitle, function (actual) { actualDocumentInfo.imageExportOptions.ShowTitle = actual; }, defaultDocumentInfo.imageExportOptions.ShowTitle);
            this._setActualValue(that.itemsOptions[name], exports.optionName.pdfTitle, function (actual) { actualDocumentInfo.pdfExportOptions.Title = actual; }, defaultDocumentInfo.pdfExportOptions.Title);
            this._setActualValue(that.itemsOptions[name], exports.optionName.imageTitle, function (actual) { actualDocumentInfo.imageExportOptions.Title = actual; }, defaultDocumentInfo.imageExportOptions.Title);
        }
        this._setActualValue(that.documentOptions, exports.optionName.pdfDashboardStatePosition, function (actual) { actualDocumentInfo.pdfExportOptions.DashboardStatePosition = actual; }, defaultDocumentInfo.pdfExportOptions.DashboardStatePosition);
        this._setActualValue(that.documentOptions, exports.optionName.pdfExportFilters, function (actual) { actualDocumentInfo.pdfExportOptions.ExportFilters = actual; }, defaultDocumentInfo.pdfExportOptions.ExportFilters);
        this._setActualValue(that.documentOptions, exports.optionName.pdfExportParameters, function (actual) { actualDocumentInfo.pdfExportOptions.ExportParameters = actual; }, defaultDocumentInfo.pdfExportOptions.ExportParameters);
        this._setActualValue(that.documentOptions, exports.optionName.pdfIncludeHiddenParameters, function (actual) { actualDocumentInfo.pdfExportOptions.IncludeHiddenParameters = actual; }, defaultDocumentInfo.pdfExportOptions.IncludeHiddenParameters);
        this._setActualValue(that.documentOptions, exports.optionName.fontInfo, function (actual) { actualDocumentInfo.pdfExportOptions.FontInfo = actual; }, defaultDocumentInfo.pdfExportOptions.FontInfo);
        this._setActualValue(that.imageOptions, exports.optionName.imageFormat, function (actual) { actualDocumentInfo.imageExportOptions.Format = actual; }, defaultDocumentInfo.imageExportOptions.Format);
        this._setActualValue(that.imageOptions, exports.optionName.resolution, function (actual) { actualDocumentInfo.imageExportOptions.Resolution = actual; }, defaultDocumentInfo.imageExportOptions.Resolution);
        this._setActualValue(that.documentOptions, exports.optionName.imageExportFilters, function (actual) { actualDocumentInfo.imageExportOptions.ExportFilters = actual; }, defaultDocumentInfo.imageExportOptions.ExportFilters);
        this._setActualValue(that.documentOptions, exports.optionName.imageExportParameters, function (actual) { actualDocumentInfo.imageExportOptions.ExportParameters = actual; }, defaultDocumentInfo.imageExportOptions.ExportParameters);
        this._setActualValue(that.documentOptions, exports.optionName.imageIncludeHiddenParameters, function (actual) { actualDocumentInfo.imageExportOptions.IncludeHiddenParameters = actual; }, defaultDocumentInfo.imageExportOptions.IncludeHiddenParameters);
        this._setActualValue(that.excelOptions, exports.optionName.excelFormat, function (actual) { actualDocumentInfo.excelExportOptions.Format = actual; }, defaultDocumentInfo.excelExportOptions.Format);
        this._setActualValue(that.excelOptions, exports.optionName.csvValueSeparator, function (actual) { actualDocumentInfo.excelExportOptions.CsvValueSeparator = actual; }, defaultDocumentInfo.excelExportOptions.CsvValueSeparator);
        this._setActualValue(that.excelOptions, exports.optionName.excelDashboardStatePosition, function (actual) { actualDocumentInfo.excelExportOptions.DashboardStatePosition = actual; }, defaultDocumentInfo.excelExportOptions.DashboardStatePosition);
        this._setActualValue(that.documentOptions, exports.optionName.excelExportFilters, function (actual) { actualDocumentInfo.excelExportOptions.ExportFilters = actual; }, defaultDocumentInfo.excelExportOptions.ExportFilters);
        this._setActualValue(that.documentOptions, exports.optionName.excelExportParameters, function (actual) { actualDocumentInfo.excelExportOptions.ExportParameters = actual; }, defaultDocumentInfo.excelExportOptions.ExportParameters);
        this._setActualValue(that.documentOptions, exports.optionName.excelIncludeHiddenParameters, function (actual) { actualDocumentInfo.excelExportOptions.IncludeHiddenParameters = actual; }, defaultDocumentInfo.excelExportOptions.IncludeHiddenParameters);
        return actualDocumentInfo;
    };
    return exportOptionsCache;
}());
exports.exportOptionsCache = exportOptionsCache;
