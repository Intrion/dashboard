/**
* DevExpress Dashboard (_grid-bar-calculator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare class gridBarCalculator {
    _valueItems: Array<any>;
    _alwaysShowZeroLevel: any;
    _initialized: boolean;
    _normalizedValues: any;
    _zeroPosition: any;
    _range: any;
    _min: any;
    _max: any;
    _normalizationData: any;
    constructor(showZeroLevel: any);
    addValue(valueItem: any): void;
    getNormalizedValue(index: any): any;
    getZeroPosition(): any;
    _invalidate(): void;
    _normalizeValue(value: any): number;
    _calcMinMax(): void;
    _calcRange(): void;
    _calcZeroPosition(): void;
    _calcNormalizationData(): void;
    _initialize(): void;
}
