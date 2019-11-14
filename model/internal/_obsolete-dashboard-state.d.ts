/**
* DevExpress Dashboard (_obsolete-dashboard-state.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ItemState } from '../dashboard-state';
export declare class ObsoleteDashboardState {
    parameters: {
        [id: string]: any;
    };
    items: {
        [id: string]: ItemState;
    };
}
export declare class ObsoleteItemState {
    static unwrapDilldownValues(values: any[][][]): any[];
    DrillLevels: Array<Array<Array<any>>>;
    Selection: Array<Array<any>>;
    ClientState: any;
    SelectedElementIndex: number;
}
