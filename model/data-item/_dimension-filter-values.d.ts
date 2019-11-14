/**
* DevExpress Dashboard (_dimension-filter-values.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export interface IFormattableValue {
    Type: string;
    Value?: any;
    RangeLeft?: any;
    RangeRight?: any;
    Format: any;
}
export declare class DimensionFilterValues {
    Name: string;
    Truncated: boolean;
    Values: Array<IFormattableValue>;
    constructor(name?: string);
}
