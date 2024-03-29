﻿/**
* DevExpress Dashboard (_grid-column-painter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import 'devextreme/viz/bullet';
import 'devextreme/viz/sparkline';
export declare class GridColumnPainter {
    static CssClasses: {
        flexParent: string;
        flexDeltaParent: string;
        sparklineStartValue: string;
        deltaIndicator: string;
        truncated: string;
        fixed: string;
        rightAlignment: string;
    };
    static renderDelta(parentContainer: HTMLElement, deltaValue: any, isDetail: any): void;
    static renderSparkline(name: string, showStartEndValues: boolean, parentContainer: HTMLElement, sparklineData: any): void;
    static renderBar(columnName: string, parentContainer: HTMLElement, tooltipText: string, value: number, zeroValue: number): void;
    static renderImage(container: HTMLElement, imageData: any): void;
    static renderHyperlink(container: HTMLElement, uri: string, displayValue: string, isEncodeHtml: boolean): void;
    static renderValue(container: HTMLElement, text: string, isEncodeHtml: boolean): void;
    static changeGridSparklineColumnsWidth(gridRootElement: HTMLElement, columnName: string): void;
    static calcMaxWidth(values: NodeListOf<Element>): number;
    static changeGridBarColumnsWidth(gridRootElement: HTMLElement, columnName: string): void;
}
