/**
* DevExpress Dashboard (_predefined-periods-item-viewer-adapter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItemViewerAdapter } from './_data-item-viewer-adapter';
import { rangeSelectorItem } from '../../../viewer-parts/viewer-items/range-selector-item/_range-selector-item';
import { dateFilterElement } from '../../../viewer-parts/viewer-items/filter-items/_date-filter-element';
import { RangeFilterItem } from '../../../model/items/range-filter/range-filter-item';
import { DateFilterItem } from '../../../model';
export declare type PredefinedPeriodsItem = RangeFilterItem | DateFilterItem;
export declare type PredefinedPeriodsViewer = rangeSelectorItem | dateFilterElement;
export declare class PredefinedPeriodsItemViewerAdapter extends DataItemViewerAdapter<PredefinedPeriodsViewer, PredefinedPeriodsItem> {
    protected attachToModel(viewerItem: PredefinedPeriodsViewer, rangeFilterItem: PredefinedPeriodsItem): void;
}
