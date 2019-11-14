/**
* DevExpress Dashboard (_map-custom-shapefile-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { CustomShapefile } from '../../../model/items/map/custom-shape-file';
import { AccordionTab } from '../../_accordion-tab';
export declare class MapCustomShapefilePropertiesComposer implements IDetailsPropertiesComposer<CustomShapefile> {
    composeTabs(model: CustomShapefile): AccordionTab[];
    private fillLayoutsTab;
}
