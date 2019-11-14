/**
* DevExpress Dashboard (_gauges-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { kpiItem } from './_kpi-item';
import { widgetItemCore } from './_widget-viewer-item-core';
export declare class gaugesItem extends kpiItem {
    constructor(container: HTMLElement, options: any);
    _getSpecificWidgetViewerOptions(): any;
    _supportAnimation(): boolean;
    _getWidgetType(): "circulargauge" | "lineargauge";
    _getElementsName(): string;
    _showTitle(): any;
    _getWidget(): any[];
    _setSourceItemProperties(sourceItem: widgetItemCore, gaugeModel: any, props: any): void;
    _setVisualProperties(sourceItem: any, gaugeModel: any, range: any): void;
}
