/**
* DevExpress Dashboard (_dashboard-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DisposableObject } from '../model/disposable-object';
import { IDashboardLayout } from './internal/_interfaces';
import { Dashboard } from '../model/dashboard';
import { DataSourceBrowser } from './_data-source-browser';
import { IDashboardContext } from './viewer/_viewer-interfaces';
import { IExtension, KnockoutTemplate } from './common-interfaces';
import { LayoutItem } from './viewer/layout/_layout';
import { FullscreenItemModel } from './viewer/_viewer';
import { DashboardTitleContext } from './viewer/title/_title-component';
import * as ko from 'knockout';
import { DashboardItem } from '../model';
export declare class DashboardSurface extends DisposableObject implements IDashboardLayout {
    dashboardModel: Dashboard;
    dataSourceBrowser: DataSourceBrowser;
    context: IDashboardContext;
    private _findExtension;
    private _allowMaximizeItems;
    resizeByTimer: ko.Observable<boolean>;
    repaintRequest: JQueryCallback;
    encodeHtml: boolean;
    constructor(dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser, context: IDashboardContext, _findExtension: (name: string) => IExtension, _allowMaximizeItems: boolean, resizeByTimer: ko.Observable<boolean>, repaintRequest: JQueryCallback, encodeHtml?: boolean);
    titleContext: DashboardTitleContext;
    readonly fullscreenItemProvider: FullscreenItemModel;
    select(item: LayoutItem): void;
    rootItem: LayoutItem;
    allowExportDashboard: boolean;
    fullscreenItemModel: FullscreenItemModel;
    itemInteractionInProgress: ko.Observable<boolean>;
    _selectedLayoutItem: ko.Observable<LayoutItem>;
    selectedDashboardItem: ko.Computed<DashboardItem>;
    emptyItemTemplates: ko.ObservableArray<KnockoutTemplate>;
    emptyItemTemplatesService: (layoutItem: LayoutItem) => {
        data: ko.ObservableArray<KnockoutTemplate>;
        templateName: string;
    };
    contextMenu: (layoutItem: LayoutItem) => {
        data: any;
        templateName: string;
    };
    layoutItemPlaceholderService: (layoutItem: LayoutItem) => {
        data: any;
        templateName: string;
    };
    addDashboardItem: (data: {
        type: string;
    }) => void;
    width: ko.Observable<number>;
    height: ko.Observable<number>;
    headerHeight: ko.Observable<number>;
    dispose(): void;
}
