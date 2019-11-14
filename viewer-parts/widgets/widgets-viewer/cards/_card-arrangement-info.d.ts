/**
* DevExpress Dashboard (_card-arrangement-info.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare let margins: number, paddings: number, borders: number;
export declare class cardArrangementInfo {
    private etalonWidth;
    private etalonHeight;
    arrangementDirection: string;
    columnCount: number;
    rowCount: number;
    cellHeight: number;
    cellWidth: number;
    viewerHeight: number;
    viewerWidth: number;
    itemsCount: number;
    ignorePadding: boolean;
    getMarginOffset(): number;
    getScrollableHeight(): number;
    getScrollableWidth(): number;
    proportionFactor(): number;
    getCardContentHeight(): number;
    getCardContentWidth(): number;
    getCardWidth(): number;
    getCardHeight(): number;
    hasVerticalScroll(): boolean;
    hasHorizontalScroll(): boolean;
}
