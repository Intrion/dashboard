/**
* DevExpress Dashboard (_data-storage.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { sliceRepository } from './_data-slice';
export declare class dataStorage {
    _sliceRep: any;
    constructor(dto: any);
    _createSliceRep(dto: any): sliceRepository;
    _initialize(): void;
    getSlices(): any;
    getSlice(sliceKey: any): any;
    getSliceKey(keyIds: any): any;
    getSliceByIds(keyIds: any): any;
    getOrCreateSlice(keyIds: any): any;
    findDataRowKey(sliceKey: any, dataRowKey: any): any;
    getCrossValue(dataRowKeys: any, valueId: any): any;
    getKeyValue(dataRow: any, keyId: any): any;
    getValue(dataRow: any, valueId: any): any;
    isEmpty(): any;
    insert(ds: any, sortOrderSlices?: any): {};
}
