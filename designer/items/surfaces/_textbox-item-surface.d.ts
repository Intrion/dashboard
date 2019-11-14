/**
* DevExpress Dashboard (_textbox-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { BaseItemSurface } from './_base-item-surface';
import { TextBoxItem } from '../../../model/items/text-box-item';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { IDetailsPropertiesComposer } from '../_interfaces';
export declare class TextBoxItemSurface extends BaseItemSurface<TextBoxItem> {
    fillSections(): void;
    constructor(dashboardItem: TextBoxItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    getPropertiesComposer(): IDetailsPropertiesComposer<TextBoxItem>;
}
