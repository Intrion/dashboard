/**
* DevExpress Dashboard (_choropleth-map-element-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { ChoroplethMap } from '../../../model/items/map/chorolpeth-map';
import { ChoroplethMapItem } from '../../../model/items/map/chorolpeth-map-item';
import { AccordionTab } from '../../_accordion-tab';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
import * as ko from 'knockout';
export declare class ChoroplethMapElementPropertiesComposer implements IDetailsPropertiesComposer<ChoroplethMap> {
    private editDeltaFormatHandler;
    constructor(editDeltaFormatHandler?: (model: any) => void);
    composeTabs(model: ChoroplethMap, dashboardItem: ChoroplethMapItem, containerType: ko.Observable<string>): AccordionTab[];
    getMapTypeWrapper(model: any, containerType: ko.Observable<string>): ObjectPropertiesWrapper;
}
