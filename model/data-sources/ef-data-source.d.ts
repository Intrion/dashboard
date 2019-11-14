/**
* DevExpress Dashboard (ef-data-source.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataSource } from './data-source';
import { IDataField } from './_data-field';
import * as ko from 'knockout';
export declare class EFDataSource extends DataSource {
    _tables: ko.ObservableArray<IDataField>;
    constructor(dataSourceJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getDisplayNamePrefix(): string;
    protected _getDefaultItemType(): string;
}
