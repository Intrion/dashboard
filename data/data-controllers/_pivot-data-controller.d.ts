/**
* DevExpress Dashboard (_pivot-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { dataControllerBase } from './_data-controller-base';
export declare class pivotDataController extends dataControllerBase {
    _columnPointsHash: any;
    _rowPointsHash: any;
    _measureIds: any;
    _collapseStateCache: any;
    _conditionalFormattingInfoCache: any;
    constructor(options: any);
    _createAreaFields(list: any, area: any): any[];
    _getFields(): any[];
    getDataSource(viewState: any, isColumn: any, path: any): {
        fields: any[];
        columns: any[];
        rows: any[];
        values: any[];
    };
    getStyleSettingsInfo(cellItem: any, collapseStateCache: any, conditionalFormattingInfoCache: any): any;
    getAxisPointsHash(): {
        columnPointsHash: any;
        rowPointsHash: any;
    };
    _prepareHierarchy(root: any, headers: any, areaIndexHash: any, areaHash: any, isPartial: any, expandCollapsePaths: Array<Array<any>>, isCollapsePaths: boolean): void;
    _getMeasureIds(): any[];
    _prepareCells(columnHash: any, rowHash: any, partial: any): any[];
    _getColumnAxis(): any;
    _getRowAxis(): any;
    _getCellInfo(cellItem: any): {
        columnAxisPoint: any;
        rowAxisPoint: any;
    };
    protected _getStyleIndexes(rule: any, cellInfo: any, points: any): any[];
    _findStyleSettingsOnAxis(rowAxisPoint: any, columnAxisPoint: any, measureId: any, isRowAxis: any): any;
    _getFormatRules(cellItem: any, cellInfo: any): any[];
    _isRowValuePosition(): boolean;
    _getAxisPointByPath(pointsHash: any, path: any, type: any): any;
    _getFormatRulesByDataId(dataId: any): any[];
    _getPointId(point: any): any;
}
