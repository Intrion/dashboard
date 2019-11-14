/**
* DevExpress Dashboard (_chart-data-controller-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { dataControllerBase } from './_data-controller-base';
export declare class chartDataControllerBase extends dataControllerBase {
    static _getLegendSeriesName(seriesName: string): void;
    static _getLegendSeriesDisplayName(seriesName: string): void;
    elementCustomColor: any;
    constructor(options: any);
    getArgument(argumentAxisPoint: any): any;
    getArgumentAxisPoints(argumentId?: any): any;
    getSeriesAxisPoints(seriesId?: any): any;
    getSingleArgumentDimensionFormat(): any;
    getColor(argumentAxisPoint: any, seriesAxisPoint: any, measuesIds: any, colorMeasureId: any): any;
    isDiscreteArgument(): boolean;
    isQualitativeArgument(): boolean;
    isSingleArgument(): boolean;
    hasSeriesPoints(): boolean;
    _getElementCustomColor(argumentAxisPoint: any, seriesAxisPoint: any, measuesIds: any, color: any): any;
    _getColorFromData(argumentAxisPoint: any, seriesAxisPoint: any, colorMeasureId: any): any;
    _getCrossSlice(argumentAxisPoint: any, seriesAxisPoint: any): any;
    _getArgumentAxis(): any;
    _getSeriesAxis(): any;
    _getArgumentAxisDimensions(): any;
    _getSingleArgumentDimension(): any;
}
