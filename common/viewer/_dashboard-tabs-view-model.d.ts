/**
* DevExpress Dashboard (_dashboard-tabs-view-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardItem } from '../../model/items/dashboard-item';
import { DashboardTabPage } from '../../model/items/tab-container-item/dashboard-tab-page';
import { SingleTabItemSizeController } from '../internal/_interfaces';
import { DashboardItemContext } from './_viewer-interfaces';
import { DisposableObject } from '../../model/disposable-object';
import * as ko from 'knockout';
import { LayoutItem } from './layout/_layout';
export interface PageBinding {
    dashboardItem: DashboardItem;
    pageDashboardItem: DashboardTabPage;
    id: string;
    sizeController: SingleTabItemSizeController;
    context: any;
    localContext: DashboardItemContext;
    ignoreBorder: ko.Observable<boolean>;
}
export declare class DashboardTabsViewModel extends DisposableObject {
    layoutItem: LayoutItem;
    headerHeight: ko.Observable<number>;
    private element;
    showMenu: ko.Observable<boolean>;
    tabPageBindings: ko.ObservableArray<PageBinding>;
    selectedItemKeys: ko.ObservableArray<string>;
    showAddButton: ko.Computed<any>;
    private _defaultButtonWidth;
    private _tabsInfoCache;
    private _toolbarCache;
    private headersViewModel;
    private readonly viewModel;
    private readonly showCaption;
    private readonly _containerSizeController;
    constructor(layoutItem: LayoutItem, headerHeight: ko.Observable<number>, element: HTMLElement);
    toggleMenu(bindings: any, args: any): void;
    createTabPage(): void;
    onSelectionChanged(e: any): void;
    private _initialize;
    private _createMenuToolbarItem;
    private _getSelectedKeys;
    private _createPageBinding;
    private _prepareLocalContext;
    private _onContainerRepaint;
    private _onToolbarUpdated;
    private _updateTabHeaders;
}
