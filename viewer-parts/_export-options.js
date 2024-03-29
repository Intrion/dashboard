﻿/**
* DevExpress Dashboard (_export-options.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("../data/_utils");
exports.dashboardExportPaperKind = {
    letter: 'Letter',
    legal: 'Legal',
    executive: 'Executive',
    a5: 'A5',
    a4: 'A4',
    a3: 'A3'
};
exports.dashboardExportPageLayout = {
    auto: 'Auto',
    portrait: 'Portrait',
    landscape: 'Landscape'
};
exports.dashboardExportScaleMode = {
    none: 'None',
    useScaleFactor: 'UseScaleFactor',
    autoFitToPageWidth: 'AutoFitToPageWidth',
    autoFitWithinOnePage: 'AutoFitWithinOnePage'
};
exports.dashboardExportDocumentScaleMode = {
    none: 'None',
    useScaleFactor: 'UseScaleFactor',
    autoFitToPagesWidth: 'AutoFitToPagesWidth',
};
exports.exportFormats = {
    pdf: 'PDF',
    image: 'Image',
    excel: 'Excel'
};
exports.dashboardExportFilterState = {
    none: 'None',
    after: 'Below',
    afterAndSplitPage: 'SeparatePage',
};
exports.excelExportFilterState = {
    none: 'None',
    below: 'Below',
    separateSheet: 'SeparateSheet'
};
exports.dashboardExportImageFormat = {
    png: 'Png',
    gif: 'Gif',
    jpg: 'Jpg'
};
exports.dashboardExportExcelFormat = {
    csv: 'Csv',
    xls: 'Xls',
    xlsx: 'Xlsx'
};
exports.dashboardExportSizeMode = {
    none: 'None',
    stretch: 'Stretch',
    zoom: 'Zoom'
};
exports.dashboardStateExportPosition = {
    below: 'Below',
    separatePage: 'SeparatePage'
};
exports.dashboardStateExcelExportPosition = {
    below: 'Below',
    separateSheet: 'SeparateSheet'
};
var ExportOptions = (function () {
    function ExportOptions() {
        var defaultFontInfoName = undefined;
        var defaultGdiCharSet = 0;
        var defaultUseCustomFontInfo = false;
        this.pdfExportOptions = {
            Title: ExportOptions.DefaultTitle,
            AutoFitPageCount: 1,
            CardAutoArrangeContent: true,
            ChartAutomaticPageLayout: true,
            ChartSizeMode: 'Zoom',
            ExportFilters: false,
            ExportParameters: false,
            DashboardStatePosition: 'Below',
            GaugeAutoArrangeContent: true,
            GridFitToPageWidth: true,
            GridPrintHeadersOnEveryPage: true,
            MapAutomaticPageLayout: true,
            MapSizeMode: 'Zoom',
            PageLayout: 'Portrait',
            PaperKind: 'Letter',
            PieAutoArrangeContent: true,
            PivotPrintHeadersOnEveryPage: true,
            RangeFilterAutomaticPageLayout: true,
            RangeFilterSizeMode: 'Stretch',
            ScaleFactor: 1.0,
            DocumentScaleMode: 'None',
            DashboardAutomaticPageLayout: true,
            ShowTitle: true,
            TreemapAutomaticPageLayout: true,
            TreemapSizeMode: 'Zoom',
            IncludeHiddenParameters: false,
            FontInfo: {
                Name: defaultFontInfoName,
                GdiCharSet: defaultGdiCharSet,
                UseCustomFontInfo: defaultUseCustomFontInfo
            }
        };
        this.imageExportOptions = {
            Title: ExportOptions.DefaultTitle,
            Format: 'Png',
            Resolution: 96,
            ExportFilters: false,
            ExportParameters: false,
            ScaleFactor: 1.0,
            ShowTitle: true,
            IncludeHiddenParameters: false,
            FontInfo: {
                Name: defaultFontInfoName,
                GdiCharSet: defaultGdiCharSet,
                UseCustomFontInfo: defaultUseCustomFontInfo
            }
        };
        this.excelExportOptions = {
            CsvValueSeparator: ',',
            ExportFilters: false,
            ExportParameters: false,
            DashboardStatePosition: 'Below',
            Format: 'Xlsx',
            IncludeHiddenParameters: false
        };
    }
    ExportOptions.prototype.convertToExportOptions = function (clientOptions) {
        if (!clientOptions)
            return this;
        var currentPdfOptions = this.pdfExportOptions;
        var currentImageOptions = this.imageExportOptions;
        var currentExcelOptions = this.excelExportOptions;
        var clientPdfOptions = clientOptions.pdfExportOptions ? clientOptions.pdfExportOptions : clientOptions;
        var clientImageOptions = clientOptions.imageExportOptions ? clientOptions.imageExportOptions : clientOptions;
        var clientExcelOptions = clientOptions.excelExportOptions ? clientOptions.excelExportOptions : clientOptions;
        var pdfOptions = {
            Title: 'Title' in clientPdfOptions ? clientPdfOptions.Title : currentPdfOptions.Title,
            ShowTitle: _utils_1.type.isDefined(clientPdfOptions.ShowTitle) ? clientPdfOptions.ShowTitle !== 'False' && clientPdfOptions.ShowTitle !== false : currentPdfOptions.ShowTitle,
            AutoFitPageCount: clientPdfOptions.AutoFitPageCount || currentPdfOptions.AutoFitPageCount,
            CardAutoArrangeContent: this._getDefinedValue(clientPdfOptions.CardOptions, 'AutoArrangeContent', clientPdfOptions.CardAutoArrangeContent, currentPdfOptions.CardAutoArrangeContent),
            ChartAutomaticPageLayout: this._getDefinedValue(clientPdfOptions.ChartOptions, 'AutomaticPageLayout', clientPdfOptions.ChartAutomaticPageLayout, currentPdfOptions.ChartAutomaticPageLayout),
            ChartSizeMode: this._getDefinedValue(clientPdfOptions.ChartOptions, 'SizeMode', clientPdfOptions.ChartSizeMode, currentPdfOptions.ChartSizeMode),
            ExportFilters: this._getExportFilters(clientPdfOptions, currentPdfOptions.ExportFilters),
            ExportParameters: _utils_1.type.isDefined(clientPdfOptions.ExportParameters) ? clientPdfOptions.ExportParameters : currentPdfOptions.ExportParameters,
            DashboardStatePosition: this._getPdfDashboardStatePosition(clientPdfOptions, currentPdfOptions.DashboardStatePosition),
            GaugeAutoArrangeContent: this._getDefinedValue(clientPdfOptions.GaugeOptions, 'AutoArrangeContent', clientPdfOptions.GaugeAutoArrangeContent, currentPdfOptions.GaugeAutoArrangeContent),
            GridFitToPageWidth: this._getDefinedValue(clientPdfOptions.GridOptions, 'FitToPageWidth', clientPdfOptions.GridFitToPageWidth, currentPdfOptions.GridFitToPageWidth),
            GridPrintHeadersOnEveryPage: this._getDefinedValue(clientPdfOptions.GridOptions, 'PrintHeadersOnEveryPage', clientPdfOptions.GridPrintHeadersOnEveryPage, currentPdfOptions.GridPrintHeadersOnEveryPage),
            MapAutomaticPageLayout: this._getDefinedValue(clientPdfOptions.MapOptions, 'AutomaticPageLayout', clientPdfOptions.MapAutomaticPageLayout, currentPdfOptions.MapAutomaticPageLayout),
            MapSizeMode: this._getDefinedValue(clientPdfOptions.MapOptions, 'SizeMode', clientPdfOptions.MapSizeMode, currentPdfOptions.MapSizeMode),
            PageLayout: clientPdfOptions.PageLayout || currentPdfOptions.PageLayout,
            PaperKind: clientPdfOptions.PaperKind || currentPdfOptions.PaperKind,
            PieAutoArrangeContent: this._getDefinedValue(clientPdfOptions.PieOptions, 'AutoArrangeContent', clientPdfOptions.PieAutoArrangeContent, currentPdfOptions.PieAutoArrangeContent),
            PivotPrintHeadersOnEveryPage: this._getDefinedValue(clientPdfOptions.PivotOptions, 'PrintHeadersOnEveryPage', clientPdfOptions.PivotPrintHeadersOnEveryPage, currentPdfOptions.PivotPrintHeadersOnEveryPage),
            RangeFilterAutomaticPageLayout: this._getDefinedValue(clientPdfOptions.RangeFilterOptions, 'AutomaticPageLayout', clientPdfOptions.RangeFilterAutomaticPageLayout, currentPdfOptions.RangeFilterAutomaticPageLayout),
            RangeFilterSizeMode: this._getDefinedValue(clientPdfOptions.RangeFilterOptions, 'SizeMode', clientPdfOptions.RangeFilterSizeMode, currentPdfOptions.RangeFilterSizeMode),
            ScaleFactor: clientPdfOptions.ScaleFactor || currentPdfOptions.ScaleFactor,
            DocumentScaleMode: clientPdfOptions.DocumentScaleMode || (clientPdfOptions.ScaleMode && this._convertScaleModeToDocumentScaleMode(clientPdfOptions.ScaleMode)) || currentPdfOptions.DocumentScaleMode,
            DashboardAutomaticPageLayout: this._getDashboardAutomaticPageLayout(clientPdfOptions, currentPdfOptions.DashboardAutomaticPageLayout),
            TreemapAutomaticPageLayout: this._getDefinedValue(clientPdfOptions.TreemapOptions, 'AutomaticPageLayout', clientPdfOptions.TreemapAutomaticPageLayout, currentPdfOptions.TreemapAutomaticPageLayout),
            TreemapSizeMode: this._getDefinedValue(clientPdfOptions.TreemapOptions, 'SizeMode', clientPdfOptions.TreemapSizeMode, currentPdfOptions.TreemapSizeMode),
            IncludeHiddenParameters: _utils_1.type.isDefined(clientPdfOptions.IncludeHiddenParameters) ? clientPdfOptions.IncludeHiddenParameters : currentPdfOptions.IncludeHiddenParameters,
            FontInfo: {
                Name: this._getDefinedValue(clientPdfOptions.FontInfo, 'Name', undefined, currentPdfOptions.FontInfo.Name),
                GdiCharSet: this._getDefinedValue(clientPdfOptions.FontInfo, 'GdiCharSet', undefined, currentPdfOptions.FontInfo.GdiCharSet),
                UseCustomFontInfo: this._getDefinedValue(clientPdfOptions.FontInfo, 'UseCustomFontInfo', undefined, currentPdfOptions.FontInfo.UseCustomFontInfo),
            }
        };
        var imageOptions = {
            Title: clientImageOptions.Title || currentImageOptions.Title,
            Format: this._getImageFormat(clientImageOptions, currentImageOptions.Format),
            Resolution: (clientImageOptions.ImageOptions ? clientImageOptions.ImageOptions.Resolution : clientImageOptions.Resolution) || currentImageOptions.Resolution,
            ExportFilters: this._getExportFilters(clientImageOptions, currentImageOptions.ExportFilters),
            ExportParameters: _utils_1.type.isDefined(clientImageOptions.ExportParameters) ? clientImageOptions.ExportParameters : currentImageOptions.ExportParameters,
            ScaleFactor: clientImageOptions.ScaleFactor || currentImageOptions.ScaleFactor,
            ShowTitle: _utils_1.type.isDefined(clientImageOptions.ShowTitle) ? clientImageOptions.ShowTitle !== 'False' && clientImageOptions.ShowTitle !== false : currentImageOptions.ShowTitle,
            IncludeHiddenParameters: _utils_1.type.isDefined(clientImageOptions.IncludeHiddenParameters) ? clientImageOptions.IncludeHiddenParameters : currentImageOptions.IncludeHiddenParameters,
            FontInfo: {
                Name: this._getDefinedValue(clientImageOptions.FontInfo, 'Name', undefined, currentImageOptions.FontInfo.Name),
                GdiCharSet: this._getDefinedValue(clientImageOptions.FontInfo, 'GdiCharSet', undefined, currentImageOptions.FontInfo.GdiCharSet),
                UseCustomFontInfo: this._getDefinedValue(clientImageOptions.FontInfo, 'UseCustomFontInfo', undefined, currentImageOptions.FontInfo.UseCustomFontInfo),
            }
        };
        var excelOptions = {
            CsvValueSeparator: (clientExcelOptions.ExcelOptions ? clientExcelOptions.ExcelOptions.CsvValueSeparator : clientExcelOptions.CsvValueSeparator) || currentExcelOptions.CsvValueSeparator,
            ExportFilters: this._getExportFilters(clientExcelOptions, currentExcelOptions.ExportFilters),
            ExportParameters: clientExcelOptions.ExportParameters || currentExcelOptions.ExportParameters,
            DashboardStatePosition: this._getExcelDashboardStatePosition(clientExcelOptions, currentExcelOptions.DashboardStatePosition),
            Format: this._getExcelFormat(clientExcelOptions, currentExcelOptions.Format),
            IncludeHiddenParameters: _utils_1.type.isDefined(clientExcelOptions.IncludeHiddenParameters) ? clientExcelOptions.IncludeHiddenParameters : currentExcelOptions.IncludeHiddenParameters
        };
        var options = new ExportOptions();
        options.pdfExportOptions = pdfOptions;
        options.imageExportOptions = imageOptions;
        options.excelExportOptions = excelOptions;
        return options;
    };
    ExportOptions.prototype.convertToASPxClientDashboardExportOptions = function () {
        return {
            PaperKind: this.pdfExportOptions.PaperKind,
            PageLayout: this.pdfExportOptions.PageLayout,
            ScaleMode: this._convertDocumentScaleModeToScaleMode(this.pdfExportOptions.DocumentScaleMode, this.pdfExportOptions.DashboardAutomaticPageLayout),
            ScaleFactor: this.pdfExportOptions.ScaleFactor,
            AutoFitPageCount: this.pdfExportOptions.AutoFitPageCount,
            Title: this.pdfExportOptions.Title,
            ShowTitle: this.pdfExportOptions.ShowTitle,
            FilterState: this._getPdfFilterState(),
            ImageOptions: {
                Format: this.imageExportOptions.Format,
                Resolution: this.imageExportOptions.Resolution,
            },
            ExcelOptions: {
                CsvValueSeparator: this.excelExportOptions.CsvValueSeparator,
                Format: this.excelExportOptions.Format,
                FilterState: this._getExcelFilterState()
            },
            GridOptions: {
                FitToPageWidth: this.pdfExportOptions.GridFitToPageWidth,
                PrintHeadersOnEveryPage: this.pdfExportOptions.GridPrintHeadersOnEveryPage
            },
            PivotOptions: {
                PrintHeadersOnEveryPage: this.pdfExportOptions.PivotPrintHeadersOnEveryPage
            },
            PieOptions: {
                AutoArrangeContent: this.pdfExportOptions.PieAutoArrangeContent
            },
            GaugeOptions: {
                AutoArrangeContent: this.pdfExportOptions.GaugeAutoArrangeContent
            },
            CardOptions: {
                AutoArrangeContent: this.pdfExportOptions.CardAutoArrangeContent
            },
            RangeFilterOptions: {
                AutomaticPageLayout: this.pdfExportOptions.RangeFilterAutomaticPageLayout,
                SizeMode: this.pdfExportOptions.RangeFilterSizeMode,
            },
            ChartOptions: {
                AutomaticPageLayout: this.pdfExportOptions.ChartAutomaticPageLayout,
                SizeMode: this.pdfExportOptions.ChartSizeMode,
            },
            MapOptions: {
                AutomaticPageLayout: this.pdfExportOptions.MapAutomaticPageLayout,
                SizeMode: this.pdfExportOptions.MapSizeMode
            },
            TreemapOptions: {
                AutomaticPageLayout: this.pdfExportOptions.TreemapAutomaticPageLayout,
                SizeMode: this.pdfExportOptions.TreemapSizeMode
            }
        };
    };
    ExportOptions.prototype.setExcelOptions = function (options) {
        this.excelExportOptions = this.convertToExportOptions(options).excelExportOptions;
    };
    ExportOptions.prototype.setImageOptions = function (options) {
        this.imageExportOptions = this.convertToExportOptions(options).imageExportOptions;
    };
    ExportOptions.prototype.setPdfOptions = function (options) {
        this.pdfExportOptions = this.convertToExportOptions(options).pdfExportOptions;
    };
    ExportOptions.prototype.setOptions = function (options) {
        var exportOptions = this.convertToExportOptions(options);
        this.pdfExportOptions = exportOptions.pdfExportOptions;
        this.imageExportOptions = exportOptions.imageExportOptions;
        this.excelExportOptions = exportOptions.excelExportOptions;
    };
    ExportOptions.prototype._getPdfDashboardStatePosition = function (clientOptions, currentValue) {
        if (clientOptions.DashboardStatePosition && clientOptions.DashboardStatePosition !== 'SeparateSheet')
            return clientOptions.DashboardStatePosition;
        return clientOptions.FilterState && clientOptions.FilterState !== 'None' ? clientOptions.FilterState : currentValue;
    };
    ExportOptions.prototype._getExcelDashboardStatePosition = function (clientOptions, currentValue) {
        if (clientOptions.DashboardStatePosition && clientOptions.DashboardStatePosition !== 'SeparatePage')
            return clientOptions.DashboardStatePosition;
        return clientOptions.ExcelOptions && clientOptions.ExcelOptions.FilterState && clientOptions.ExcelOptions.FilterState !== 'None' ? clientOptions.ExcelOptions.FilterState : currentValue;
    };
    ExportOptions.prototype._getImageFormat = function (clientOptions, currentValue) {
        if (clientOptions.Format && (clientOptions.Format === 'Png' || clientOptions.Format === 'Jpeg' || clientOptions.Format === 'Jpg' || clientOptions.Format === 'Gif'))
            return this._correctImageFormat(clientOptions.Format);
        return clientOptions.ImageOptions ? clientOptions.ImageOptions.Format : currentValue;
    };
    ExportOptions.prototype._getExcelFormat = function (clientOptions, currentValue) {
        if (clientOptions.Format && (clientOptions.Format === 'Csv' || clientOptions.Format === 'Xls' || clientOptions.Format === 'Xlsx'))
            return clientOptions.Format;
        return clientOptions.ExcelOptions ? clientOptions.ExcelOptions.Format : currentValue;
    };
    ExportOptions.prototype._getDefinedValue = function (oldOptions, oldProperty, newValue, currentValue) {
        if (_utils_1.type.isDefined(oldOptions))
            return oldOptions[oldProperty];
        if (_utils_1.type.isDefined(newValue))
            return newValue;
        return currentValue;
    };
    ExportOptions.prototype._getExportFilters = function (clientOptions, currentValue) {
        if (_utils_1.type.isDefined(clientOptions.ExportFilters))
            return clientOptions.ExportFilters;
        if (_utils_1.type.isDefined(clientOptions.FilterState))
            return clientOptions.FilterState !== 'None';
        return currentValue;
    };
    ExportOptions.prototype._getDashboardAutomaticPageLayout = function (clientOptions, currentValue) {
        if (_utils_1.type.isDefined(clientOptions.DashboardAutomaticPageLayout))
            return clientOptions.DashboardAutomaticPageLayout;
        if (_utils_1.type.isDefined(clientOptions.ScaleMode))
            return clientOptions.ScaleMode === exports.dashboardExportScaleMode.autoFitWithinOnePage;
        return currentValue;
    };
    ExportOptions.prototype._convertDocumentScaleModeToScaleMode = function (documentScaleMode, dashboardAutomaticPageLayout) {
        switch (documentScaleMode) {
            case exports.dashboardExportDocumentScaleMode.autoFitToPagesWidth:
                return exports.dashboardExportScaleMode.autoFitToPageWidth;
            case exports.dashboardExportDocumentScaleMode.useScaleFactor:
                return exports.dashboardExportScaleMode.useScaleFactor;
            default:
                return dashboardAutomaticPageLayout ? exports.dashboardExportScaleMode.autoFitWithinOnePage : exports.dashboardExportScaleMode.none;
        }
    };
    ExportOptions.prototype._convertScaleModeToDocumentScaleMode = function (scaleMode) {
        switch (scaleMode) {
            case exports.dashboardExportScaleMode.autoFitToPageWidth:
                return exports.dashboardExportDocumentScaleMode.autoFitToPagesWidth;
            case exports.dashboardExportScaleMode.useScaleFactor:
                return exports.dashboardExportDocumentScaleMode.useScaleFactor;
            default:
                return exports.dashboardExportDocumentScaleMode.none;
        }
    };
    ExportOptions.prototype._getPdfFilterState = function () {
        if (!this.pdfExportOptions.ExportFilters && !this.pdfExportOptions.ExportParameters)
            return 'None';
        return this.pdfExportOptions.DashboardStatePosition;
    };
    ExportOptions.prototype._getExcelFilterState = function () {
        if (!this.excelExportOptions.ExportFilters && !this.excelExportOptions.ExportParameters)
            return 'None';
        return this.excelExportOptions.DashboardStatePosition;
    };
    ExportOptions.prototype._correctImageFormat = function (imageFormat) {
        return imageFormat === "Jpeg" ? exports.dashboardExportImageFormat.jpg : imageFormat;
    };
    ExportOptions.DefaultTitle = undefined;
    return ExportOptions;
}());
exports.ExportOptions = ExportOptions;
