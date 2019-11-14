/**
* DevExpress Dashboard (_pivot-item-viewer-adapter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItemViewerAdapter } from './_data-item-viewer-adapter';
import { pivotGridItem } from '../../../viewer-parts/viewer-items/_pivot-grid-item';
import { PivotItem } from '../../../model/items/pivot/pivot-item';
export declare class PivotItemViewerAdapter extends DataItemViewerAdapter<pivotGridItem, PivotItem> {
    private expandValueHandler;
    private expandStateChangedHandler;
    protected attachToModel(viewerItem: pivotGridItem, dataDashboardItem: PivotItem): void;
    protected dettachFromModel(viewerItem: pivotGridItem, dataDashboardItem: PivotItem): void;
}
