/**
* DevExpress Dashboard (_utils.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare let type: {
    isDefined: (object: any) => boolean;
    isFunction: (object: any) => boolean;
    isString: (object: any) => boolean;
    isNumeric: (object: any) => boolean;
    isBoolean: (object: any) => boolean;
};
export declare let KpiValueMode: {
    Measure: string;
    Delta: string;
}, pivotArea: {
    column: string;
    row: string;
    data: string;
}, gaugeViewType: {
    CircularFull: string;
    CircularHalf: string;
    CircularQuarterRight: string;
    CircularQuarterLeft: string;
    CircularThreeFourth: string;
    LinearHorizontal: string;
    LinearVertical: string;
}, tooltipContainerSelector: string;
export declare function toColor(numericColorValue: any): any;
export declare function getRGBColor(r: any, g: any, b: any, a: any): string;
export declare function allowSelectValue(values: any): boolean;
export declare function isVulnerable(value: string): boolean;
export declare function encodeHtml(str: any): string;
export declare function decodeHtml(value: any): string;
export declare function moveContent(source: HTMLElement, dest: HTMLElement, clearSource: boolean): void;
export declare function arrayContains(container: Array<Array<any>>, part: Array<any>): boolean;
export declare function arrayEquals(array1: Array<any>, array2: Array<any>): boolean;
export declare function checkValuesAreEqual(value1: any, value2: any): boolean;
export declare function checkTuplesAreEqual(tuple1: any, tuple2: any): boolean;
export declare function checkArrayContainsTuple(array: any, tuple: any): any;
export declare function getAxisPointValue(tuple: any, axisName: any): any;
export declare function getTagValue(tag: any): any;
export declare function getValueIndex(matrix: any, vector: any): number;
export declare function treeWalker(rootNode: any, childrenFunc: any): {
    walk: (func: any) => void;
    walkLeaf: (func: any) => void;
    _walkInternal: (node: any, parent: any, func: any, callPredicate: any) => void;
};
export declare function getParentClasses($obj: any): any[];
export declare function wrapHash(valuesArray: any): {};
export declare function areNotOrderedListsEqual(list1: any, list2: any): boolean;
export declare function pxToNumber(px: any): number;
export declare function debounce(func: any, wait: any): (...args: any[]) => void;
export declare type dxRenderer = {
    dxRenderer: true;
};
export declare const $unwrap: (element: Element | HTMLElement | JQuery<HTMLElement> | dxRenderer) => HTMLElement;
export declare const $wrap: (element: Element | HTMLElement | JQuery<HTMLElement>) => JQuery<HTMLElement>;
export declare const wrapPublicElement: (element: HTMLElement) => JQuery<HTMLElement> & Element;
export declare const extend: (target: any, source1: any, ...sources: any[]) => any;
export declare const deepExtend: (target: any, ...sources: any[]) => any;
export declare const isPlainObject: (object: any) => boolean;
export declare class LocalStorageHelper {
    private static _getLocalStorage;
    static getItem(key: string, defaultValue?: string): string;
    static setItem(key: string, value: string): void;
}
