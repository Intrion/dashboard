/**
* DevExpress Dashboard (_chart-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { chartDataControllerBase } from './_chart-data-controller-base';
import { PointLabelContentType } from '../../model/enums';
export declare class chartDataController extends chartDataControllerBase {
    _legendSeriesPrefix: string;
    _argumentAxisPoints: Array<any>;
    _argumentFormat: any;
    _axisXFormat: any;
    constructor(options: any);
    getLegendSeriesName(seriesName: string): string;
    getLegendSeriesDisplayName(seriesName: string): string;
    getDataSourceAndSeries(encodeHtml: any, range?: boolean): any;
    getArgumentBindingValue(argumentPoint: any, pointIndex: number, range?: boolean): any;
    generatePaneName(paneName: any, paneIndex: any): any;
    _getSeriesInfo(encodeHtml: any): any[];
    customizeTooltipText(series: any, point: any, seriesFormats: any, encodeHtml: any): string;
    _getTooltipHtml(series: any, point: any, seriesFormats: any, encodeHtml: any, color: any): string;
    _getTooltipTextInternal(series: any, point: any, seriesFormats: any, encodeHtml: any): string;
    getTooltipArgumentText(obj: any): any;
    getZoomArguments(): {
        start: any;
        end: any;
    };
    getArgumentUniquePath(value: any): any;
    _getArgumentAutoFormat(): {
        format: string;
        unitPower: any;
        precision: any;
        significantDigits: number;
        showTrailingZeros: boolean;
    };
    _createArgumentFormat(): any;
    _createAxisXFormat(): any;
    getArgumentFormat(): any;
    getAxisXFormat(): any;
    getArgumentText(argument: any): any;
    getAxisXLabelText(axisValue: any): any;
    _getArgumentText(argumentValue: any, formatGetter: () => any): any;
    _validatePoint(point: any, seriesType: any): boolean;
    _getCustomizeTooltipTextColor(point: any): any;
    _getLegendInfo(): any[];
    _valuesContainsValueSet(values: any, valueSet: any): boolean;
    _getLastSeriesType(colorMeasureId: any): "area" | "line" | "bar" | "bubble" | "candlestick" | "fullstackedarea" | "fullstackedbar" | "fullstackedline" | "rangearea" | "rangebar" | "scatter" | "spline" | "splinearea" | "stackedarea" | "stackedbar" | "stackedline" | "steparea" | "stepline" | "stock" | "doughnut" | "pie" | "stackedSplineArea" | "fullStackedSplineArea";
    _getDisplayTextBySeriesTemplates(): string;
    _iterateSeriesTemplates(proc: any): void;
    _isSelectionTagsRequired(): boolean;
    _createSeriesItem(seriesInfo: any, includeTags: any, encodeHtml: any): any;
    _customizePointLabelText(valueContainer: any, pointLabel: any, seriesInfo: any): string;
    _getPercentSupported(seriesInfo: any): boolean;
    _formatOpenHighLowCloseValues(values: any, formats: any, hasOpenValueField: any, encodeHtml: any, delimiter: any): string;
    _formatValuesList(valuesList: any, formats: any, encodeHtml: any): string;
    _formatValue(value: any, format: any, encodeHtml: any): any;
    _isNumericDataType(type: any): boolean;
    _convertContentType(typeModel: any): PointLabelContentType;
    _showPointMarker(seriesTemplate: any): boolean;
    checkSeriesTemplatePointLabels(seriesTemplateViewModel: any): boolean;
    protected showPointLabels(pointLabelInfo: any): boolean;
    private _getPointLabelInfo;
}
