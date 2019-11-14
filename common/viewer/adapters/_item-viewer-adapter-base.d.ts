/**
* DevExpress Dashboard (_item-viewer-adapter-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from '../../../viewer-parts/viewer-items/_base-item';
import { DashboardItem } from '../../../model/items/dashboard-item';
import { DisposableObject } from '../../../model/disposable-object';
import { IDashboardContext, IDashboardItemContext } from '../_viewer-interfaces';
import * as ko from 'knockout';
export declare class ItemViewerAdapterBase<TViewerItem extends baseItem, TItemModel extends DashboardItem> extends DisposableObject {
    protected dashboardItem: TItemModel;
    protected element: HTMLElement;
    protected context: IDashboardContext;
    protected localContext?: IDashboardItemContext;
    private beforeRender;
    private onDisposed;
    protected item: TViewerItem;
    protected modelSubscriptions: Array<ko.Subscription>;
    readonly name: string;
    protected readonly _isDesignMode: boolean;
    constructor(dashboardItem: TItemModel, element: HTMLElement, context: IDashboardContext, localContext?: IDashboardItemContext, beforeRender?: (item: baseItem) => void, onDisposed?: () => void);
    itemUpdated: (viewerItem: baseItem) => void;
    ensureViewerItem(onlyCreation: any, content: any): void;
    initialize(): void;
    private updateServerContentHandler;
    dispose(): void;
    resume(): void;
    suspend(): void;
    protected ensureViewerItemCore(onlyCreation: boolean, content: any, additionalData?: any): void;
    protected updateItemContent(content: any): void;
    protected createDashboardViewerItem(element: HTMLElement, content: any, dashboardItem: TItemModel): TViewerItem;
    protected attachToModel(viewerItem: TViewerItem, dashboardItem: TItemModel): void;
    protected dettachFromModel(viewerItem: TViewerItem, dashboardItem: TItemModel): void;
}
