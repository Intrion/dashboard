/**
* DevExpress Dashboard (_card-element-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { Card } from '../../../model/items/card/card';
import { CardLayoutTemplate } from '../../../model/items/card/card-layout-template';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { CardItem } from '../../../model/items/card/card-item';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { AccordionTab } from '../../_accordion-tab';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
import * as ko from 'knockout';
export declare class CardElementPropertiesComposer implements IDetailsPropertiesComposer<Card> {
    private editTemplateHandler;
    private editFormat;
    private applyTemplateToAllCards;
    constructor(editTemplateHandler?: (model: any) => void, editFormat?: (model: any) => void, applyTemplateToAllCards?: (template: CardLayoutTemplate) => void);
    composeTabs(model: Card, dashboardItem: CardItem, containerType: ko.Observable<string>, dataSourceBrowser: DataSourceBrowser): AccordionTab[];
    getCommonWrapper(model: Card, dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser): ObjectPropertiesWrapper;
    getSparklineWrapper(model: Card): ObjectPropertiesWrapper;
    fillTemplatesTab(tab: AccordionTab, card: Card): void;
    switchTemplate(card: Card, newTemplate: CardLayoutTemplate): void;
    getAvailableTemplates(card: Card): any[];
}
