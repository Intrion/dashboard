﻿/**
* DevExpress Dashboard (export-options.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare type DashboardExportPaperKind = 'Letter' | 'Legal' | 'Executive' | 'A5' | 'A4' | 'A3';
export declare type DashboardExportPageLayout = 'Portrait' | 'Landscape';
export declare type DashboardMapSizeMode = 'None' | 'Zoom';
export declare type DashboardRangeFilterExportSizeMode = 'None' | 'Stretch' | 'Zoom';
export declare type DashboardChartExportSizeMode = 'None' | 'Stretch' | 'Zoom';
export declare type DashboardExcelFormat = 'Csv' | 'Xls' | 'Xlsx';
export declare type DashboardExportImageFormat = 'Png' | 'Jpeg' | 'Gif';
export declare type DashboardTreemapExportSizeMode = 'None' | 'Zoom';
export declare type DashboardExportDocumentScaleMode = 'None' | 'UseScaleFactor' | 'AutoFitToPagesWidth';
export declare type DashboardStateExportPosition = 'Below' | 'SeparatePage';
export declare type DashboardStateExcelExportPosition = 'Below' | 'SeparateSheet';
export interface DashboardPdfExportOptions {
    Title?: string;
    AutoFitPageCount?: number;
    CardAutoArrangeContent?: boolean;
    ChartAutomaticPageLayout?: boolean;
    ChartSizeMode?: DashboardChartExportSizeMode;
    ExportFilters?: boolean;
    ExportParameters?: boolean;
    DashboardStatePosition?: DashboardStateExportPosition;
    GaugeAutoArrangeContent?: boolean;
    GridFitToPageWidth?: boolean;
    GridPrintHeadersOnEveryPage?: boolean;
    MapAutomaticPageLayout?: boolean;
    MapSizeMode?: DashboardMapSizeMode;
    PageLayout?: DashboardExportPageLayout;
    PaperKind?: DashboardExportPaperKind | string;
    PieAutoArrangeContent?: boolean;
    PivotPrintHeadersOnEveryPage?: boolean;
    RangeFilterAutomaticPageLayout?: boolean;
    RangeFilterSizeMode?: DashboardRangeFilterExportSizeMode;
    ScaleFactor?: number;
    DocumentScaleMode?: DashboardExportDocumentScaleMode;
    ShowTitle?: boolean;
    TreemapAutomaticPageLayout?: boolean;
    TreemapSizeMode?: DashboardTreemapExportSizeMode;
    DashboardAutomaticPageLayout?: boolean;
    IncludeHiddenParameters?: boolean;
    FontInfo?: ExportFontInfo;
}
export interface DashboardImageExportOptions {
    Title?: string;
    Format?: DashboardExportImageFormat;
    Resolution?: number;
    ExportFilters?: boolean;
    ExportParameters?: boolean;
    ScaleFactor?: number;
    ShowTitle?: boolean;
    IncludeHiddenParameters?: boolean;
    FontInfo?: ExportFontInfo;
}
export interface DashboardExcelExportOptions {
    CsvValueSeparator?: string;
    ExportFilters?: boolean;
    ExportParameters?: boolean;
    DashboardStatePosition?: DashboardStateExcelExportPosition;
    Format?: DashboardExcelFormat;
    IncludeHiddenParameters?: boolean;
}
export interface ExportFontInfo {
    Name?: string;
    GdiCharSet?: number;
    UseCustomFontInfo?: boolean;
}
