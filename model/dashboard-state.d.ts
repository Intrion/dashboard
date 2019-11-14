/**
* DevExpress Dashboard (dashboard-state.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { PrimitiveType } from '../data/types';
export declare class DashboardState {
    Parameters: {
        [id: string]: any;
    };
    Items: {
        [id: string]: ItemState;
    };
}
export declare class RangeFilterSelection {
    Minimum: any;
    Maximum: any;
}
export declare class RangeFilterState {
    Selection?: RangeFilterSelection;
    PeriodName?: string;
}
export declare class ItemState {
    RangeFilterState?: RangeFilterState;
    MasterFilterValues?: Array<Array<PrimitiveType>>;
    DrillDownValues?: Array<PrimitiveType>;
    SelectedLayerIndex?: number;
    TabPageName?: string;
}
