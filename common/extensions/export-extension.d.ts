/**
* DevExpress Dashboard (export-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardPdfExportOptions, DashboardImageExportOptions, DashboardExcelExportOptions } from '../../viewer-parts/export-options';
import { IExtension } from '../common-interfaces';
import dxPopup from 'devextreme/ui/popup';
import { ExportDialogBinder } from './_export-dialog-binder';
import { IDashboardItemContext } from '../viewer/_viewer-interfaces';
import { DashboardControl } from '../dashboard-control';
import { dxElement } from 'devextreme/core/element';
export interface DashboardExportDialogArgs {
    component: dxPopup;
    element: dxElement;
}
export interface DashboardExportExtensionOptions {
    allowExportDashboard?: boolean;
    allowExportDashboardItems?: boolean;
    pdfExportOptions?: DashboardPdfExportOptions;
    imageExportOptions?: DashboardImageExportOptions;
    excelExportOptions?: DashboardExcelExportOptions;
    onExportDialogShowing?: (args: DashboardExportDialogArgs) => void;
    onExportDialogShown?: (args: DashboardExportDialogArgs) => void;
    onExportDialogHidden?: (args: DashboardExportDialogArgs) => void;
}
export declare type DashboardExportFormat = "PDF" | "Image" | "Excel";
export declare class DashboardExportExtension implements IExtension {
    private dashboardControl;
    private _dialogBinderSubscription;
    private _exportInfoContoller;
    allowExportDashboard: boolean;
    allowExportDashboardItems: boolean;
    name: string;
    private _defaultOptions;
    _dialogBinder: ExportDialogBinder;
    private _initializeExportButton;
    _initializePrimaryExportItem(localContext: IDashboardItemContext): void;
    _initializeSecondaryExportItem(localContext: IDashboardItemContext): void;
    constructor(dashboardControl: DashboardControl, options?: DashboardExportExtensionOptions);
    start(): void;
    stop(): void;
    showExportDashboardDialog(format: DashboardExportFormat): void;
    showExportDashboardItemDialog(itemComponentName: string, format: DashboardExportFormat): void;
    hideExportDialog(): void;
    getPdfExportOptions(): DashboardPdfExportOptions;
    getImageExportOptions(): DashboardImageExportOptions;
    getExcelExportOptions(): DashboardExcelExportOptions;
    setPdfExportOptions(options: DashboardPdfExportOptions): void;
    setImageExportOptions(options: DashboardImageExportOptions): void;
    setExcelExportOptions(options: DashboardExcelExportOptions): void;
    exportToPdf(options?: DashboardPdfExportOptions, fileName?: string): void;
    exportToImage(options?: DashboardImageExportOptions, fileName?: string): void;
    exportToExcel(options?: DashboardExcelExportOptions, fileName?: string): void;
    exportDashboardItemToPdf(itemName: string, options?: DashboardPdfExportOptions, fileName?: string): void;
    exportDashboardItemToImage(itemName: string, options?: DashboardImageExportOptions, fileName?: string): void;
    exportDashboardItemToExcel(itemName: string, options?: DashboardExcelExportOptions, fileName?: string): void;
}
