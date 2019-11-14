/**
* DevExpress Dashboard (_item-data-axis-point.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ItemDataAxisPoint, ItemDataAxisName, ItemDataDimensionValue, ItemDataDimension } from './item-data-definitions';
import { PrimitiveType } from '../types';
export declare let dataStorageSpecialIds: {
    DisplayText: string;
    Value: string;
};
export declare class itemDataAxisPoint implements ItemDataAxisPoint {
    _info: any;
    _dataRowKey: any;
    _children: any;
    _parent: any;
    constructor(levelInfo: any, dataRowKey: any);
    _getSpecialValue(specialId: any): any;
    getUniqueValue(): PrimitiveType;
    getValue(): PrimitiveType;
    _getLevel(): any;
    _getServerText(): any;
    getKey(): any;
    getAxisName(): ItemDataAxisName;
    getChildren(): Array<itemDataAxisPoint>;
    getParent(): itemDataAxisPoint;
    getAvaliableLeafPoints(): Array<itemDataAxisPoint>;
    _setParent(parent: any): void;
    _setChildren(children: any): void;
    getParentByDimensionId(dimensionId: string): itemDataAxisPoint;
    getDimensionValue(dimensionId: string): ItemDataDimensionValue;
    getDisplayText(): string;
    getDimension(): ItemDataDimension;
    getDimensions(): Array<ItemDataDimension>;
    getAxisPath(): Array<itemDataAxisPoint>;
    getUniquePath(): Array<PrimitiveType>;
    getValuePath(includeProc: any): Array<PrimitiveType>;
    getDisplayPath(includeProc: any): Array<string>;
    getValues(): void;
    _selectIncludedPath(includeProc: any, pointProc: any): any;
    _selectPath(predicate: any): any;
    getPointsByDimensionId(dimensionId: string): Array<itemDataAxisPoint>;
    getDisplayTextsByDimensionId(dimensionId: any): Array<string>;
    _getPointsByDimensionId(dimensionId: any, pointProc: any): any[];
    _findPoints(dimensionId: any, result: any, pointProc: any): void;
}
