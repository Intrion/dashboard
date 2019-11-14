/**
* DevExpress Dashboard (_textbox-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { TextBoxItem } from '../../../model/items/text-box-item';
import { AccordionTab } from '../../_accordion-tab';
export declare class TextBoxItemPropertiesComposer implements IDetailsPropertiesComposer<TextBoxItem> {
    composeTabs(model: TextBoxItem): AccordionTab[];
}
