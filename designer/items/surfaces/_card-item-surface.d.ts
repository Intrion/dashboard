/**
* DevExpress Dashboard (_card-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { CardItem } from '../../../model/items/card/card-item';
import { CardLayoutTemplate } from '../../../model/items/card/card-layout-template';
import { BaseItemSurface } from './_base-item-surface';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
export declare class CardItemSurface extends BaseItemSurface<CardItem> {
    fillSections(): void;
    constructor(dashboardItem: CardItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    getPropertiesComposer(): IDetailsPropertiesComposer<CardItem>;
    applyLayoutTemplateToAllCards(template: CardLayoutTemplate): void;
}
