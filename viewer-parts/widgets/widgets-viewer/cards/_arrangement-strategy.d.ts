﻿/**
* DevExpress Dashboard (_arrangement-strategy.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ICardSizeProvider } from './_card-measurer';
import { cardLayout } from './_card-layout';
import { cardArrangementInfo } from './_card-arrangement-info';
export declare abstract class ArrangementStrategy {
    static createInstance(method: string, lineCount?: number): ArrangementStrategy;
    cardMeasurer: ICardSizeProvider;
    getArrangeMethod(): string;
    getLineCount(): number;
    constructor();
    arrange(viewerHeight: number, viewerWidth: number, itemsCount: number, layouts: cardLayout[], ignorePadding?: boolean): cardArrangementInfo;
    calcBestProportions(calcArrangementInfo: (nextColumnCount?: number) => cardArrangementInfo): cardArrangementInfo;
    private getCardMinWidthWithMargin;
    private getCardMinHeightWithMargin;
    checkEmptyRows(columnCount: number, itemsCount: number): number;
    abstract getColumnCount(itemsCount: any, actualViewerWidth: any, cardMinWidth: any): any;
    abstract getRowCount(itemsCount: any, columnCount?: any): any;
    getArrangementDirection(): string;
}
export declare class AutoArrangementStrategy extends ArrangementStrategy {
    constructor();
    getArrangeMethod(): string;
    getLineCount(): number;
    getColumnCount(itemsCount: any, actualViewerWidth: any, cardMinWidth: any): number;
    checkEmptyRows(columnCount: number, itemsCount: number): number;
    calcBestProportions(calcArrangementInfo: (nextColumnCount?: number) => cardArrangementInfo): cardArrangementInfo;
    getRowCount(itemsCount: any, columnCount?: any): number;
}
export declare class ColumnArrangementStrategy extends ArrangementStrategy {
    private columnCount;
    constructor(columnCount: number);
    getArrangeMethod(): string;
    getLineCount(): number;
    getColumnCount(itemsCount: any, actualViewerWidth: any, cardMinWidth: any): number;
    getRowCount(itemsCount: any, columnCount?: any): number;
}
export declare class RowArrangementStrategy extends ArrangementStrategy {
    private rowCount;
    constructor(rowCount: number);
    getArrangementMethod(): string;
    getLineCount(): number;
    getColumnCount(itemsCount: any, actualViewerWidth: any, cardMinWidth: any): number;
    getRowCount(itemsCount: any, columnCount?: any): number;
    getArrangementDirection(): string;
}
