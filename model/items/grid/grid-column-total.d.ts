/**
* DevExpress Dashboard (grid-column-total.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../../serializable-model';
import * as ko from 'knockout';
import { GridColumnTotalType } from '../../enums';
export declare class GridColumnTotal extends TypedSerializableModel {
    totalType: ko.Observable<GridColumnTotalType>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
export declare let _totalTypeTemplate: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let _gridColumnTotalSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
