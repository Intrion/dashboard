/**
* DevExpress Dashboard (_item-data-axis-builder.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare let pivotAreaNames: {
    columns: string;
    rows: string;
};
export declare let itemDataAxisBuilder: {
    build: (name: any, storage: any, dimensions: any, sortOrderSlices?: any, metaData?: any, iterators?: any) => any;
    _getKeyIdsList: (keyIds: any) => any[][];
    _isSortOrderSlice: (slice: any, sortOrderSlices: any) => boolean;
};
