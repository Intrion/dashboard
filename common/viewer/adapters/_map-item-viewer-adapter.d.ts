/**
* DevExpress Dashboard (_map-item-viewer-adapter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItemViewerAdapter } from './_data-item-viewer-adapter';
import { mapItem } from '../../../viewer-parts/viewer-items/_map-item';
import { MapItem } from '../../../model/items/map/map-item';
export declare class MapItemViewerAdapter extends DataItemViewerAdapter<mapItem, MapItem> {
    protected updateItemContent(content: any): void;
    protected createDashboardViewerItem(element: HTMLElement, content: any, dashboardItem: MapItem): mapItem;
    protected attachToModel(viewerItem: mapItem, dataDashboardItem: MapItem): void;
    protected dettachFromModel(viewerItem: mapItem, dataDashboardItem: MapItem): void;
    resume(): void;
}
