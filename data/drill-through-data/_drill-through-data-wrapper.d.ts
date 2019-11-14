/**
* DevExpress Dashboard (_drill-through-data-wrapper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ItemUnderlyingData } from '../item-data/item-data-definitions';
export declare class DrillThroughDataWrapper implements ItemUnderlyingData {
    _data: any;
    _drillThroughData: any;
    _errorMessage: any;
    constructor(drillThroughData: any);
    initialize(): void;
    getRowCount(): any;
    getRowValue(rowIndex: any, columnName: any): any;
    getDataMembers(): any;
    isDataReceived(): boolean;
    getRequestDataError(): any;
}
