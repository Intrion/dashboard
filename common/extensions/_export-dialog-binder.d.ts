/**
* DevExpress Dashboard (_export-dialog-binder.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardItem } from '../../model/items/dashboard-item';
import { ExportOptions } from '../../viewer-parts/_export-options';
import { exportDialog } from '../../viewer-parts/widgets/dialogs/export/_export-dialog';
import { Dashboard } from '../../model/dashboard';
import { IDataServiceClient, ExportInfo } from '../_service-client';
import { DashboardExportExtensionOptions, DashboardExportFormat } from './export-extension';
import { DisposableObject } from '../../model/disposable-object';
import * as ko from 'knockout';
export declare type ExportMode = 'SingleItem' | 'EntireDashboard';
export interface IExportInfoProvider {
    getItemExportInfo(itemName: string, mode: ExportMode, isCaption: boolean): any;
}
export declare class ExportDialogBinder {
    dashboard: ko.Computed<Dashboard>;
    private _serviceClient;
    private getContainer;
    private extensionOptions;
    private exportInfoProvider;
    availableExportFormats: string[];
    exportOptions: ExportOptions;
    private _exportDialog;
    constructor(dashboard: ko.Computed<Dashboard>, _serviceClient: ko.Observable<IDataServiceClient>, getContainer: () => Element, extensionOptions: DashboardExportExtensionOptions, exportInfoProvider: IExportInfoProvider);
    reset(): void;
    _getClientSize(container: HTMLElement, mode: ExportMode): {
        width: number;
        height: number;
    };
    _getActualComponentName(item: DashboardItem): string;
    _getExportHolderItem(item: DashboardItem): DashboardItem;
    _getInfo(items: Array<DashboardItem>, titleHeight: number, mode: ExportMode, format: DashboardExportFormat): {
        clientSize: {
            width: number;
            height: number;
        };
        titleHeight: number;
        itemsState: any[];
    };
    _getFilterFormattableValues(dashboard: Dashboard, exportGroupName: string, item: DashboardItem, exportInfo: ExportInfo): void | any[];
    exportDashboardTo(format: DashboardExportFormat, clientOptions: any, customFileName?: any): void;
    exportDashboardItemTo(itemComponentName: string, format: DashboardExportFormat, clientOptions: any, customFileName?: string): void;
    showDashboardDialog: (format: DashboardExportFormat) => void;
    showItemDialog: (itemComponentName: string, format: DashboardExportFormat) => void;
    hide: () => void;
    readonly exportDialog: exportDialog;
    _getExportItemType(item: DashboardItem): string;
    private _getGroupExternalDisplayFilterValues;
    private _exportTo;
    private _validateExportFormat;
    private _validateDashboardExport;
}
export declare class ExportInfoManager extends DisposableObject implements IExportInfoProvider {
    private _primaryExportInfoProviders;
    private _secondaryExportInfoProviders;
    private _captionExportInfoProviders;
    getItemExportInfo(itemName: string, mode: ExportMode, isCaption: boolean): any;
    registerPrimaryExportItem(itemName: string, getExportInfoFunc: () => any): void;
    unregisterPrimaryExportItem(itemName: string): void;
    registerSecondaryExportItem(itemName: string, getExportInfoFunc: () => any): void;
    unregisterSecondaryExportItem(itemName: string): void;
    registerCaptionExportItem(itemName: string, getExportInfoFunc: () => any): void;
    unregisterCaptionExportItem(itemName: string): void;
    dispose(): void;
}
