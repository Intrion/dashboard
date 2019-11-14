/**
* DevExpress Dashboard (_range-filter-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { chartDataController } from './_chart-data-controller';
export declare class rangeFilterDataController extends chartDataController {
    constructor(options: any);
    getArgument(argumentAxisPoint: any): any;
    _iterateSeriesTemplates(proc: any): void;
    _isSelectionTagsRequired(): boolean;
    _getLastSeriesType(colorMeasureId: any): "area" | "line" | "bar" | "bubble" | "candlestick" | "fullstackedarea" | "fullstackedbar" | "fullstackedline" | "rangearea" | "rangebar" | "scatter" | "spline" | "splinearea" | "stackedarea" | "stackedbar" | "stackedline" | "steparea" | "stepline" | "stock" | "doughnut" | "pie" | "stackedSplineArea" | "fullStackedSplineArea";
    protected showPointLabels(pointLabelInfo: any): boolean;
}
