/**
* DevExpress Dashboard (_gauge-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { GaugeItem } from '../../../model/items/gauge/gauge-item';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { AccordionTab } from '../../_accordion-tab';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
export declare class GaugeItemPropertiesComposer implements IDetailsPropertiesComposer<GaugeItem> {
    composeTabs(model: GaugeItem): AccordionTab[];
    getTypeWrapper(model: GaugeItem): ObjectPropertiesWrapper;
}
