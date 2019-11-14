/**
* DevExpress Dashboard (_data-item-viewer-adapter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from '../../../viewer-parts/viewer-items/_base-item';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { ItemViewerAdapterBase } from './_item-viewer-adapter-base';
export declare class DataItemViewerAdapter<TViewerItem extends baseItem, TItemModel extends DataDashboardItem> extends ItemViewerAdapterBase<TViewerItem, TItemModel> {
    protected attachToModel(viewerItem: baseItem, dataDashboardItem: DataDashboardItem): void;
    protected dettachFromModel(viewerItem: baseItem, dataDashboardItem: DataDashboardItem): void;
    protected ensureViewerItemCore(onlyCreation: boolean, content: any): void;
    protected updateItemContent(content: any): void;
    protected createDashboardViewerItem(element: HTMLElement, content: any, dashboardItem: TItemModel): TViewerItem;
    private getDrillUpState;
    private updateActionsModel;
}
