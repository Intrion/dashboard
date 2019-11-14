/**
* DevExpress Dashboard (_image-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ImageItem } from '../../../model/items/image-item';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { IDisposable } from '../../../model/disposable-object';
export declare class ImageItemSurface implements IDisposable {
    constructor(dashboardItem: ImageItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    getPropertiesComposer(): IDetailsPropertiesComposer<ImageItem>;
    dispose(): void;
}
