/**
* DevExpress Dashboard (_scatter-chart-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { chartDataController } from './_chart-data-controller';
export declare class scatterChartDataController extends chartDataController {
    constructor(options: any);
    getArgument(argumentAxisPoint: any): any;
    getArgumentBindingValue(argumentPoint: any, pointIndex: any, range: any): any;
    getArgumentDisplayPath(axisPoint: any): any;
    getArgumentFormat(): any;
    getArgumentText(argument: any): any;
    _getTooltipHtml(series: any, point: any, seriesFormats: any, encodeHtml: any, color: any): string;
    _getMeasureIds(): any[];
    getTooltipArgumentText(obj: any): any;
    _getTooltipArgumentText(axisPoint: any): any;
    _customizePointLabelText(valueContainer: any, pointLabel: any, seriesInfo: any): any;
    isQualitativeArgument(): boolean;
    isDiscreteArgument(): boolean;
    protected showPointLabels(pointLabelInfo: any): boolean;
}
