/**
* DevExpress Dashboard (_custom-range-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { DateTimePeriod } from '../../../model/items/range-filter/date-time-period';
import { Dimension } from '../../../model/data-item/dimension';
import { RangeFilterItem } from '../../../model/items/range-filter/range-filter-item';
import { DateFilterItem } from '../../../model/items/filter-items/date-filter-item';
import { AccordionTab } from '../../_accordion-tab';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
export declare class CustomRangePropertiesComposer implements IDetailsPropertiesComposer<DateTimePeriod> {
    composeTabs(model: DateTimePeriod, argument: Dimension, rangeFilterItem: RangeFilterItem | DateFilterItem): AccordionTab[];
    getCommonWrapper(model: DateTimePeriod, argument: Dimension, rangeFilterItem: RangeFilterItem | DateFilterItem): ObjectPropertiesWrapper;
}
