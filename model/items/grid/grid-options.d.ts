/**
* DevExpress Dashboard (grid-options.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { GridColumnWidthMode } from '../../enums';
import * as ko from 'knockout';
export declare class GridOptions extends SerializableModel {
    allowCellMerge: ko.Observable<boolean>;
    columnWidthMode: ko.Observable<GridColumnWidthMode>;
    enableBandedRows: ko.Observable<boolean>;
    showVerticalLines: ko.Observable<boolean>;
    showHorizontalLines: ko.Observable<boolean>;
    showColumnHeaders: ko.Observable<boolean>;
    wordWrap: ko.Observable<boolean>;
    constructor(JSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getViewModel(): Object;
}
