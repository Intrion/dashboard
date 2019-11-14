/**
* DevExpress Dashboard (_export-options-cache.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare let optionName: {
    pdfTitle: string;
    imageTitle: string;
    fileName: string;
    autoFitPageCount: string;
    cardAutoArrangeContent: string;
    chartAutomaticPageLayout: string;
    chartSizeMode: string;
    pdfDashboardStatePosition: string;
    gaugeAutoArrangeContent: string;
    gridFitToPageWidth: string;
    gridPrintHeadersOnEveryPage: string;
    mapAutomaticPageLayout: string;
    mapSizeMode: string;
    pageLayout: string;
    paperKind: string;
    pieAutoArrangeContent: string;
    pivotPrintHeadersOnEveryPage: string;
    rangeFilterAutomaticPageLayout: string;
    rangeFilterSizeMode: string;
    pdfScaleFactor: string;
    scaleMode: string;
    dashboardAutomaticPageLayout: string;
    pdfShowTitle: string;
    treemapAutomaticPageLayout: string;
    treemapSizeMode: string;
    imageFormat: string;
    resolution: string;
    imageScaleFactor: string;
    imageShowTitle: string;
    csvValueSeparator: string;
    excelDashboardStatePosition: string;
    excelFormat: string;
    pdfExportFilters: string;
    imageExportFilters: string;
    excelExportFilters: string;
    pdfExportParameters: string;
    imageExportParameters: string;
    excelExportParameters: string;
    pdfIncludeHiddenParameters: string;
    imageIncludeHiddenParameters: string;
    excelIncludeHiddenParameters: string;
    fontInfo: string;
};
export declare class exportOptionsCache {
    documentOptions: any;
    itemsOptions: any;
    pdfOptions: any;
    imageOptions: any;
    excelOptions: any;
    constructor();
    _initialize(): void;
    _addOption(cache: any, key: any, defaultValue: any, actualValue: any): void;
    add(name: any, defaultDocumentInfo: any, actualDocumentInfo: any): void;
    _setActualValue(cache: any, key: any, setActual: any, defaultValue: any): void;
    getActualDocumentInfo(name: any, defaultDocumentInfo: any): any;
}
