/**
* DevExpress Dashboard (slice-table.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { IDataItemProvider } from '../_binding-model';
import { DataItemLink } from '../../data-item/data-item';
import * as ko from 'knockout';
export declare class SliceTable extends SerializableModel {
    private _dataItemProvider;
    constructor(_dataItemProvider: IDataItemProvider, modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    push(bindings: Array<DataItemLink>, dataItemType: string): void;
    dimensions: ko.ObservableArray<DataItemLink>;
    measures: ko.ObservableArray<DataItemLink>;
    name: ko.Observable<string>;
}
