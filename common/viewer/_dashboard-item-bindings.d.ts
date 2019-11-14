/**
* DevExpress Dashboard (_dashboard-item-bindings.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ISizeController, LayoutItem } from './layout/_layout';
import { DashboardItem } from '../../model/items/dashboard-item';
import { IDashboardContext, IDashboardItemContext } from './_viewer-interfaces';
import * as ko from 'knockout';
import { DisposableObject } from '../../model/disposable-object';
export interface IDashboardItemBindings {
    dashboardItem: DashboardItem;
    dashboardContext: IDashboardContext;
    localContext: IDashboardItemContext;
    sizeController: ISizeController;
}
export declare class GroupViewModel extends DisposableObject {
    defaultPadding: number;
    constructor(params: {
        layoutItem: ko.Subscribable<LayoutItem> | LayoutItem;
    });
    padding: ko.Observable<number>;
    headerHeight: ko.Observable<number>;
    layoutItem: ko.Computed<LayoutItem>;
}
export declare class TabContainerViewModel extends GroupViewModel {
    activeItems: ko.ObservableArray<LayoutItem>;
    private _activeItemsUpdateDebounced;
    constructor(params: {
        layoutItem: ko.Observable<LayoutItem> | LayoutItem;
    });
    private _updateActiveItems;
}
