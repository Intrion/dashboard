/**
* DevExpress Dashboard (dashboard-control.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IExtension, KnockoutTemplate, IRemoteService, DashboardContainer } from './common-interfaces';
import { DashboardUpdateHub } from './dashboard-update-hub/_dashboard-update-hub';
import { IDashboardContext } from './viewer/_viewer-interfaces';
import { IEndpointCollection, IDashboardLayout, ILayoutBinder } from './internal/_interfaces';
import { DashboardSurface } from './_dashboard-surface';
import { IDataServiceClient } from './_service-client';
import { DashboardItemUpdateArgs, DashboardUpdateArgs, DashboardInitializingArgs, DashboardInitializedArgs, DashboardStateChangedArgs, LimitVisibleDataMode, DashboardControlOptions, RefreshItemsArgs } from './control-options';
import { DataSourceBrowser } from './_data-source-browser';
import { NotificationController } from './notification-controller/notificator';
import { DashboardState } from '../model/dashboard-state';
import { Dashboard } from '../model/dashboard';
import * as ko from 'knockout';
import { DisposableType } from '../model/disposable-object';
export declare class DashboardControl {
    element: Element;
    private static recursiveAsyncEval;
    private _itemBatchRequestsEnabled;
    private _extensions;
    private _updateHubPrivate;
    readonly _updateHub: DashboardUpdateHub;
    private _encodeHtml;
    private _useNeutralFilterMode;
    private _allowMaximizeItems;
    readonly encodeHtml: boolean;
    _dashboardContext: IDashboardContext;
    private _allowSwitchToDesigner;
    private _repaintRequest;
    _externalTemplates: ko.Computed<KnockoutTemplate[]>;
    _endpointCollection: IEndpointCollection;
    _dashboardSurface: ko.Observable<DashboardSurface>;
    _serviceClient: ko.Observable<IDataServiceClient>;
    _onItemBeginUpdate: (args: DashboardItemUpdateArgs) => void;
    _onItemEndUpdate: (args: DashboardItemUpdateArgs) => void;
    _onDashboardBeginUpdate: (args: DashboardUpdateArgs) => void;
    _onDashboardEndUpdate: (args: DashboardUpdateArgs) => void;
    _onDashboardInitializing: (args: DashboardInitializingArgs) => void;
    _onDashboardInitialized: (args: DashboardInitializedArgs) => void;
    _onDashboardStateChanged: (args: DashboardStateChangedArgs) => void;
    _limitVisibleDataMode: LimitVisibleDataMode;
    _displayAllData: ko.Observable<boolean>;
    _widgetContainer: HTMLElement;
    _dataSourceBrowser: DataSourceBrowser;
    _isLoading: ko.Observable<boolean>;
    _perDashboardDisposables: Array<DisposableType>;
    _layoutTemplate: ko.Observable<{
        name: string;
        data: ko.Subscribable<IDashboardLayout>;
    }>;
    _layoutBindersCollection: ko.ObservableArray<ILayoutBinder>;
    _emptyControlTemplates: ko.ObservableArray<KnockoutTemplate>;
    _surfaceLeft: ko.Observable<number>;
    surfaceLeft: ko.Observable<number>;
    resizeByTimer: ko.Observable<boolean>;
    remoteService: IRemoteService;
    notificationController: NotificationController;
    showConfirmationOnBrowserClosing: boolean;
    isDesignMode: ko.Observable<boolean>;
    dashboardContainer: ko.Observable<DashboardContainer>;
    dashboard: ko.Computed<Dashboard>;
    customTemplates: ko.ObservableArray<KnockoutTemplate>;
    getWidgetContainer: () => HTMLElement;
    readonly allowSwitchToDesigner: boolean;
    readonly maximizedDashboardItemName: string;
    readonly extensions: IExtension[];
    constructor(element: Element, options?: DashboardControlOptions);
    readonly _colorSchemeCss: "dx-color-scheme-light" | "dx-color-scheme-dark";
    repaint(): void;
    render(): void;
    maximizeDashboardItem(itemName: string): void;
    restoreDashboardItem(): void;
    initializeDashboard(id: string, dashboardJson: Object, initialState?: DashboardState): void;
    requestDashboardList(): JQueryPromise<any>;
    loadDashboard(dashboardId: string): JQueryPromise<any>;
    unloadDashboard(): void;
    switchToViewer(): void;
    switchToDesigner(): void;
    reloadData(): void;
    refresh(args?: RefreshItemsArgs): void;
    getDashboardState(): string;
    setDashboardState(dashboardState: DashboardState | string): void;
    getDashboardId(): string;
    registerIcon(icon: string): void;
    registerExtension(...extensions: IExtension[]): void;
    findExtension(extensionName: string): IExtension;
    unregisterExtension(...extensionNames: string[]): void;
    subscribeExtensionsChanged(handlers: {
        added?: (item: IExtension) => void;
        deleted?: (item: IExtension) => void;
    }): ko.Subscription;
    dispose(): void;
    _renderDashboardItem(element: Element, dashboardItemName: string, isStandalone?: boolean): void;
    private _getFullscreenItemProvider;
    private _registerKeyProcessing;
    private _registerDefaultExtensions;
    private _unrollEndpointCollection;
    private _loadDefaultDashboard;
    private _initializeServiceClient;
    private _validateWorkingMode;
    private _canAddExtension;
    private _addExtension;
    private _startExtension;
    private _unloadDashboardServices;
    private _applyBindings;
}
