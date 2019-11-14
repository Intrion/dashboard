/**
* DevExpress Dashboard (_grid-item-viewer-adapter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItemViewerAdapter } from './_data-item-viewer-adapter';
import { dataGridItem } from '../../../viewer-parts/viewer-items/data-grid-item/_data-grid-item';
import { GridItem } from '../../../model/items/grid/grid-item';
export declare class GridItemViewerAdapter extends DataItemViewerAdapter<dataGridItem, GridItem> {
    protected attachToModel(viewerItem: dataGridItem, dataDashboardItem: GridItem): void;
    protected dettachFromModel(viewerItem: dataGridItem, dataDashboardItem: GridItem): void;
}
