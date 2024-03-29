﻿/**
* DevExpress Dashboard (_gauge-range-calculator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare class gaugeRangeCalculator {
    _values: any;
    _gaugeViewType: any;
    _customMin: any;
    _customMax: any;
    _minDefined: any;
    _maxDefined: any;
    _minTickCount: any;
    _maxTickCount: any;
    _min: any;
    _max: any;
    _equalSign: any;
    constructor(options: any);
    getGaugeRange(): {
        minorTickCount: any;
        majorTickCount: any;
        min: any;
        max: any;
    };
    _getLeft(left: any, step: any): number;
    _getRight(right: any, step: any): number;
    _isFit(left: any, right: any, step: any, tickCount: any): boolean;
    _extendRange(): void;
    _setRangeStart(): void;
    _defineMinMax(): void;
    _signsEqual(number1: any, number2: any): boolean;
    _defineMinMaxTicks(): void;
    _chooseMultiplier(delta: any): any;
}
