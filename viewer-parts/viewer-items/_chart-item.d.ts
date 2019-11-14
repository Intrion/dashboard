/**
* DevExpress Dashboard (_chart-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from './_base-item';
import dxChart from 'devextreme/viz/chart';
import { Options as dxChartOptions } from 'devextreme/viz/chart';
export declare class chartItem extends baseItem {
    itemElementCustomColor: JQuery.Callbacks<Function>;
    chartViewer: dxChart;
    static _maxTooltipValues: number;
    constructor(container: HTMLElement, options: any);
    dispose(): void;
    protected _initializeData(newOptions: any): void;
    protected _clearSelectionUnsafe(): void;
    protected selectTupleUnsafe(tuple: any, state: any): void;
    protected _setSelectionUnsafe(values: any): void;
    protected updateContentStateUnsafe(): void;
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    protected getInfoUnsafe(): {
        name: any;
        headerHeight: number;
        position: JQuery.Coordinates;
        width: number;
        height: number;
        virtualSize: any;
        scroll: any;
    };
    _elementCustomColor(eventArgs: any): void;
    _getZoomAndPanOption(viewModel: any): {
        argumentAxis: string;
    };
    _getViewOptions(): any;
    _getCommonOptions(): dxChartOptions;
    protected _applySelectionUnsafe(): void;
    _getDataPoint(element: any): {
        getValues: (name: any) => any;
        getDeltaIds: () => any[];
        getMeasureIds: () => any;
    };
    _getMeasuresIds(elementSeriesTag: any): any;
    _isMultiDataSupported(): boolean;
    _getElementInteractionValue(element: any, viewModel: any): any;
    _isAxisInPercentFormat(pane: any, isSecondaryAxis: any): boolean;
    _isAxisInScientificFormat(pane: any, isSecondaryAxis: any): boolean;
    _isFullStackedSeriesType(seriesType: any): boolean;
    _convertHoverMode(selectionMode: any): "none" | "allArgumentPoints" | "allSeriesPoints";
    _convertPointHoverMode(selectionMode: any): "none" | "allArgumentPoints" | "allSeriesPoints" | "onlyPoint";
    protected _resizeUnsafe(): void;
    _getWidget(): dxChart;
}
