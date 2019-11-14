/**
* DevExpress Dashboard (_interfaces.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ErrorInfo, KnockoutTemplate } from '../common-interfaces';
import { ISizeController, ISize } from '../viewer/layout/_layout';
import { DashboardItem } from '../../model/items/dashboard-item';
import { NotificationController } from '../notification-controller/notificator';
import * as ko from 'knockout';
export declare var KeyCodes: {
    Esc: number;
    Delete: number;
    Z: number;
    Y: number;
    S: number;
};
export interface IErrorHandler {
    showError(title: string, errorInfo?: ErrorInfo): any;
}
export interface IDashboardUrls {
    GetDashboardsAction: string;
    DashboardAction: string;
}
export interface IDataSourceUrls {
    GetDataSourcesAction: string;
}
export interface IDataSourceWizardUrls {
    DataSourceWizardAction: string;
    GetConnectionStringsAction: string;
}
export interface IDataServiceUrls {
    ConvertItemAction: string;
    FieldListAction: string;
    ParameterValuesAction: string;
    DimensionUniqueValuesAction: string;
    DimensionFilterItemsAction: string;
    DimensionFilterStringAction: string;
    DashboardItemGetAction: string;
    PerformExportAction: string;
    GetColoringSchemeAction: string;
    GetDashboardPaletteAction: string;
    GetUnderlyingDataAction: string;
    GetMapShapeFileAction: string;
    MarkDataSourcesForReloadAction: string;
    DashboardItemBatchGetAction: string;
}
export interface IEndpointCollection {
    dashboardUrls?: IDashboardUrls;
    dataSourceUrls?: IDataSourceUrls;
    dataSourceWizardUrls?: IDataSourceWizardUrls;
    dataServiceUrls?: IDataServiceUrls;
}
export declare class SingleItemSizeController implements ISizeController {
    private _element;
    requestRepaint: any;
    renderImmediately: boolean;
    constructor(_element: Element, requestRepaint: any);
    getWidth(): number;
    getHeight(): number;
    setConstraints(constraints: {
        min: ISize;
        max: ISize;
    }): void;
}
export declare class SingleTabItemSizeController implements ISizeController {
    requestRepaint: any;
    width: ko.Observable<number>;
    height: ko.Observable<number>;
    renderImmediately: boolean;
    constructor(requestRepaint: any, width: ko.Observable<number>, height: ko.Observable<number>);
    getWidth(): number;
    getHeight(): number;
    setConstraints(constraints: {
        min: ISize;
        max: ISize;
    }): void;
}
export interface IDashboardLayout {
    fullscreenItemProvider: IFullscreenItemProvider;
}
export interface IFullscreenItemProvider {
    maximizedItemName: string;
    maximizeItem(dashboardItem: DashboardItem): any;
    restoreDownItem(): any;
}
export interface ILayoutBinder {
    name: string;
    getData: () => ko.Subscribable<IDashboardLayout>;
    condition: () => boolean;
}
export interface IDashboardControlViewModel {
    getWidgetContainer: () => HTMLElement;
    surfaceLeft: ko.Subscribable<number>;
    colorSchemeCss: string;
    isLoading: ko.Subscribable<boolean>;
    isDashboardLoaded: ko.Subscribable<boolean>;
    layoutTemplate: ko.Observable<{
        name: string;
        data: ko.Subscribable<IDashboardLayout>;
    }>;
    externalTemplates: ko.Subscribable<Array<KnockoutTemplate>>;
    emptyControlTemplates: ko.ObservableArray<KnockoutTemplate>;
    notificationController: NotificationController;
    $unwrap: (element: Element | JQuery) => Element;
    $: any;
    ko: any;
}
