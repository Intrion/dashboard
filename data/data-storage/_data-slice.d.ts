/**
* DevExpress Dashboard (_data-slice.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare class dataSlice {
    _sliceKey: any;
    _sliceDTO: any;
    _decode: any;
    _encode: any;
    _keyIndexById: any;
    _valueIdByKey: any;
    constructor(sliceKey: any, sliceDTO: any, decode: any, encode: any);
    getRowCount(): number;
    getKey(): any;
    getValue(rowKey: any, valueId: any): any;
    getRowValues(rowKey: any): {};
    getRowKeyValues(rowKey: any): {};
    _getRowDTO(rowKey: any): any;
    getKeyValue(rowKey: any, keyId: any): any;
    getKeyIds(): any;
    getValueIds(): string[];
    forEach(action: any): void;
    append(slice: any): {
        forEach: (action: any) => void;
    };
    addRow(keyValues: any, values: any): any[];
    _parseKey(key: any): any;
    _stringifyKey(key: any): string;
}
export declare class sliceRepository {
    _sliceListDTO: any;
    _sliceList: any;
    _rowKeyConvertMap: any;
    _sliceJoinCache: any;
    _decode: any;
    _encode: any;
    constructor(sliceListDTO: any, decode: any, encode: any);
    _initialize(decode: any): void;
    getAll(): any;
    getKey(keyIds: any): any;
    get(vsKey: any): any;
    getOrCreate(keyIds: any): any;
    findDataRowKey(sliceKey: any, dataRowKey: any): {
        sliceKey: any;
        rowKey: any[];
    };
    getCrossValue(dataRows: any, valueId: any): any;
    getKeyValue(dataRow: any, keyId: any): any;
    getValue(dataRow: any, valueId: any): any;
    isEmpty(): boolean;
    _joinSliceKey(key1: any, key2: any): any;
    _getByKeyIds(keyIds: any): any;
    _getConvertMap(sliceFromKey: any, sliceToKey: any): any;
}
