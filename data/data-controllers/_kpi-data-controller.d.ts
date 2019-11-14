/**
* DevExpress Dashboard (_kpi-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { dataControllerBase } from './_data-controller-base';
import { widgetItemCore } from '../../viewer-parts/viewer-items/_widget-viewer-item-core';
export declare class kpiDataController extends dataControllerBase {
    setSourceItemProperties: (sourceItem: widgetItemCore, element: any, properties: any) => void;
    _axisPoints: any;
    _sparklineAxisPoints: any;
    constructor(options: any);
    getDataSource(): any[];
    _createSourceItem(axisPoint: any, element: any): widgetItemCore;
    _getDeltaValue(axisPoint: any, kpiElement: any): any;
    _getMeasureValue(axisPoint: any, kpiElement: any): any;
    _getSparklineValues(axisPoint: any, kpiElement: any): any[];
    _initialize(): void;
    _iterateKpiItems(delegate: any): void;
    _getGaugeRange(element: any): void;
}
