/**
* DevExpress Dashboard (_export-dialog.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { exportOptionsCache } from './_export-options-cache';
import { dialogForm } from '../_dialog-form';
import { dashboardImageOptionsGroup, simplyImageOptionsGroup, imageOptionsGroup, dashboardExcelOptionsGroup, excelOptionsGroup, entireDashboardOptionsGroup, groupItemOptionsGroup, gridOptionsGroup, chartOptionsGroup, pieOptionsGroup, gaugeOptionsGroup, cardOptionsGroup, pivotOptionsGroup, treemapOptionsGroup, mapOptionsGroup, rangeFilterOptionsGroup, textItemOptionsGroup, boundImageItemOptionsGroup, imageItemOptionsGroup, customItemOptionsGroup, optionsGroup } from './_export-options-groups';
export declare class exportDialog {
    options: any;
    exportOptionsCache: exportOptionsCache;
    dialogForm: dialogForm;
    group: optionsGroup;
    exportFunction: any;
    name: string;
    type: any;
    format: any;
    defaultTitle: string;
    constructor(options: any);
    _initialize(): void;
    showDialog(name: any, type: any, format: any, options: any): void;
    hideDialog(): void;
    dispose(): void;
    private _getLocalizedTitle;
    setExportFunction(exportFunction: any): void;
    _createImageGroup(type: any, documentInfo: any): imageOptionsGroup | simplyImageOptionsGroup | dashboardImageOptionsGroup;
    _createExcelGroup(type: any, documentInfo: any): dashboardExcelOptionsGroup | excelOptionsGroup;
    _createPdfGroup(type: any, documentInfo: any): textItemOptionsGroup | boundImageItemOptionsGroup | imageItemOptionsGroup | groupItemOptionsGroup | customItemOptionsGroup | entireDashboardOptionsGroup | gridOptionsGroup | pivotOptionsGroup | chartOptionsGroup | mapOptionsGroup | treemapOptionsGroup | rangeFilterOptionsGroup | pieOptionsGroup | gaugeOptionsGroup | cardOptionsGroup;
    _createGroup(): void;
    static _initializeExportLocalizedStrings(): void;
}
