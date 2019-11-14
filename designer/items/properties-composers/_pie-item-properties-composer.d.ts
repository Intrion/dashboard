/**
* DevExpress Dashboard (_pie-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { PieItem } from '../../../model/items/pie/pie-item';
import { AccordionTab } from '../../_accordion-tab';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
export declare class PieItemPropertiesComposer implements IDetailsPropertiesComposer<PieItem> {
    composeTabs(model: PieItem): AccordionTab[];
    getTypeWrapper(model: PieItem): ObjectPropertiesWrapper;
    getLabelsWrapper(model: PieItem): ObjectPropertiesWrapper;
}
