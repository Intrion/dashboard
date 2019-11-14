/**
* DevExpress Dashboard (_grid-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { dataControllerBase } from './_data-controller-base';
export interface CellValue {
    getValue: () => any;
    getData: () => any;
    getStyleSettingsInfo: () => any;
}
export interface DimensionCellValue extends CellValue {
    getUniqueValue: () => any;
}
export interface HyperlinkCellValue extends DimensionCellValue {
    getUriValue: () => any;
}
export declare class gridDataController extends dataControllerBase {
    private _axisColumnPoints;
    private _axisSparklinePoints;
    private _columnRepository;
    private _selectionMembers;
    constructor(options: any);
    getDataSource(): {
        store: {
            type: string;
            data: any[];
            key: string;
        };
    };
    getValueItem(columnName: any, rowIndex?: any): any;
    private _getValueItem;
    getSelectionValues(values: any): any[];
    getSelectedRowKeys(valuesSet: any): any[];
    getDimensionValues(rowIndex: any): any;
    getTotalValue(measureId: any): any;
    private _getBarCellValue;
    private _getBarData;
    private _getMeasureCellValue;
    private _getCellValue;
    private _getStyleSettingsInfo;
    protected _getStyleIndexes(rule: any, cellInfo: any, points: any): any[];
    private _getAxisPoint;
    private _getDeltaValue;
    private _getDeltaValueItem;
    private _getSparklineCellValues;
    private _findAxisPoint;
    private _getColumnAxisPoint;
    private _getPointArray;
}
