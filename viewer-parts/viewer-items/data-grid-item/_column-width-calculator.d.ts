﻿/**
* DevExpress Dashboard (_column-width-calculator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { GridColumnFixedWidthType } from '../../../model/enums';
export interface IColumnOptions {
    widthType: GridColumnFixedWidthType;
    weight: number;
    actualIndex: number;
    fixedWidth?: number;
}
export interface IWidthOptions {
    mode: ColumnWidthMode;
    columnsOptions: Array<IColumnOptions>;
}
export interface IWidthInfo {
    mode: string;
    columnsOptions: Array<IColumnWidthInfo>;
}
export interface IColumnWidthInfo {
    widthType: string;
    initialWidth: number;
    actualWidth: number;
}
export interface IBestFitProvider {
    getBestFit: (index: number) => number;
}
export interface IColumnWidthsStorage {
    columnsResized: boolean;
    mode: ColumnWidthMode;
    columnsOptions: Array<IColumnOptions>;
}
export declare type ColumnWidthMode = 'Manual' | 'AutoFitToContents' | 'AutoFitToGrid';
export declare class ColumnWidthCalculator {
    widthOptions: IWidthOptions;
    _columnWidths: Array<number>;
    _columnWidthsStorage: IColumnWidthsStorage;
    readonly columnsResized: boolean;
    reset(viewModel: any, columnWidthMode: ColumnWidthMode): void;
    getLeftPrintingColumnIndex(hScrollPosition: any): number;
    getClientWidthOptions(): any;
    onDataLoaded(viewModel: any, columnWidthMode: ColumnWidthMode): void;
    calcColumnsWidth(bestFitProvider: IBestFitProvider, maxVisibleWidth: number, charWidth: number): Array<number>;
    onColumnResized(leftColumnIndex: number, leftColumnWidth: number, rightColumnWidth: number): Array<number>;
    _unfixColumnWidth(leftColumnIndex: any): void;
    _calcWidth(optionsInfo: any, maxVisibleWidth: any): void;
    _scaleColumns(optionsInfo: any, isFixed: any, maxVisibleWidth: any, actualWidthSum: any): any;
    _spreadRemainder(optionsInfo: any, isFixed: any, maxVisibleWidth: any, actualWidthSum: any): any;
    _isScaledColumns(widthMode: any, widthType: any, isFixed: any): boolean;
    _resetWidthOptions(viewModel: any, columnWidthMode: ColumnWidthMode): void;
    _createWidthInfo(bestFitProvider: IBestFitProvider, charWidth: number): IWidthInfo;
    _updateColumnWidthsStorage(): void;
    _isAllColumnsFixed(): boolean;
    _updateWeight(columnsWidthInfo: any, columnWidths: any): void;
}
