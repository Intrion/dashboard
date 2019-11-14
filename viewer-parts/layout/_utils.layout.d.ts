/**
* DevExpress Dashboard (_utils.layout.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare let size: (w?: any, h?: any) => {
    width: any;
    height: any;
    plus: (arg: any) => any;
    minus: (arg: any) => any;
    compareByDirections: (size: any) => string[];
    constrain: (constraints: any) => any;
    clone: () => any;
};
export declare let constraints: (pMin: any, pMax: any) => {
    min: any;
    max: any;
    consolidate: (sourceConstraints: any, consolidateDirection: any) => any;
    isFixed: (direction: any) => boolean;
    _consolidatePart: (sourceConstraints: any, consolidateDirection: any, part: any) => {
        width: any;
        height: any;
        plus: (arg: any) => any;
        minus: (arg: any) => any;
        compareByDirections: (size: any) => string[];
        constrain: (constraints: any) => any;
        clone: () => any;
    };
};
export declare let nonClientElement: (width: any, height: any) => {
    getBounds: () => {
        width: any;
        height: any;
        plus: (arg: any) => any;
        minus: (arg: any) => any;
        compareByDirections: (size: any) => string[];
        constrain: (constraints: any) => any;
        clone: () => any;
    };
};
export declare let getCrossDirection: (direction: any) => "width" | "height";
export declare let defConstraints: (valueMin?: number, valueMax?: number) => any;
export declare let defSizeInPercents: (direction: any, value: any) => any;
export declare let checkRange: (value: any, min: any, max: any) => boolean;
export declare let ensureRange: (value: any, min: any, max: any) => number;
export declare let deepCloneObject: (injectObject: any, sourceObject: any, noDeepCopyPropsValues: any) => any;
