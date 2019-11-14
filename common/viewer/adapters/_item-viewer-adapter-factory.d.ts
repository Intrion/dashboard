/**
* DevExpress Dashboard (_item-viewer-adapter-factory.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardItem } from '../../../model/items/dashboard-item';
import { ItemViewerAdapterBase } from './_item-viewer-adapter-base';
import { IDashboardContext, IDashboardItemContext } from '../_viewer-interfaces';
import { baseItem } from '../../../viewer-parts/viewer-items/_base-item';
import { DisposableObject } from '../../../model/disposable-object';
export declare class ViewerItemAdaptersManager extends DisposableObject {
    private viewerItemAdaptersMap;
    private modelSubscriberDict;
    private createAdapterCore;
    private releaseAdapter;
    create(dashboardItem: DashboardItem, element: HTMLElement, context: IDashboardContext, localContext?: IDashboardItemContext, beforeRender?: (item: baseItem) => void): ItemViewerAdapterBase<baseItem, DashboardItem>;
    dispose(): void;
}
