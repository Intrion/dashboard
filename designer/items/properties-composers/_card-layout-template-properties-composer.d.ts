/**
* DevExpress Dashboard (_card-layout-template-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { CardLayoutTemplate } from '../../../model/items/card/card-layout-template';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { AccordionTab } from '../../_accordion-tab';
export declare class CardTemplatePropertiesComposer implements IDetailsPropertiesComposer<CardLayoutTemplate> {
    composeTabs(model: CardLayoutTemplate, dimensionNames: string[], applyTemplateToAllCards?: (template: CardLayoutTemplate) => void): AccordionTab[];
    private fillLayoutsTab;
    resetTemplate(template: CardLayoutTemplate): void;
}
