/**
* DevExpress Dashboard (_bound-image-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { BaseItemSurface } from './_base-item-surface';
import { BoundImageItem } from '../../../model/items/bound-image-item';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
export declare class BoundImageItemSurface extends BaseItemSurface<BoundImageItem> {
    fillSections(): void;
    constructor(dashboardItem: BoundImageItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    getPropertiesComposer(): IDetailsPropertiesComposer<BoundImageItem>;
}
