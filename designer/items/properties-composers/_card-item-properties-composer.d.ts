/**
* DevExpress Dashboard (_card-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { CardItem } from '../../../model/items/card/card-item';
import { AccordionTab } from '../../_accordion-tab';
export declare class CardItemPropertiesComposer implements IDetailsPropertiesComposer<CardItem> {
    composeTabs(model: CardItem): AccordionTab[];
}
