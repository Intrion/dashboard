/**
* DevExpress Dashboard (_common.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare type ClearMasterFilterButtonState = 'Enabled' | 'Disabled' | 'Hidden';
export declare let viewerActions: {
    setMasterFilter: string;
    setMultipleValuesMasterFilter: string;
    clearMasterFilter: string;
    drillDown: string;
    drillUp: string;
    setSelectedElementIndex: string;
    expandValue: string;
    dataRequest: string;
    getDrillThroughData: string;
};
export declare let contentType: {
    empty: string;
    viewModel: string;
    actionModel: string;
    completeDataSource: string;
    partialDataSource: string;
    fullContent: string;
};
export declare let parseFlagsEnumType: (typeModel: string, defaultValue: number, dic: {
    [key: string]: number;
}) => number;
export declare let serializeFlagsEnumType: (val: number, defaultValue: string, dic: {
    [key: string]: number;
}) => string;
export declare let getFlagsEnumTypeValues: (val: number, dic: {
    [key: string]: number;
}, type: "value" | "key") => any[];
