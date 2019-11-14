/**
* DevExpress Dashboard (_item-data-axis-helper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare let itemDataAxisHelper: {
    eachPoint: (point: any, _process: any) => boolean;
    findFirstPoint: (root: any, predicate: any) => any;
    findFirstPointByUniqueValues: (root: any, values: any) => any;
    findFirstPointByValues: (root: any, values: any) => any;
    findFirstPointByUniqueValueAndDimension: (root: any, value: any, dimensionId: any) => any;
    _areEqual: (value1: any, value2: any) => boolean;
    _equalPredicate: (points: any, values: any, equal: any) => boolean;
    forSamePoints: (baseItem: any, item: any, process: any) => void;
    findChildByUniqueValue: (point: any, value: any) => any;
    getValuesByTuples: (tuples: any, dimensionIds: any) => any[];
};
