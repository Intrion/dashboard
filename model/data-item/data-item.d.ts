/**
* DevExpress Dashboard (data-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { TypedSerializableModel } from '../serializable-model';
import { IDashboardComponent } from '../internal/_dashboard-component-name-generator';
import { DataItemNumericFormat, DataItemDateTimeFormat } from './data-item-format';
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { IDataItemProvider } from '../items/_binding-model';
import { IDataField } from '../data-sources/_data-field';
import * as ko from 'knockout';
export declare abstract class DataItem extends TypedSerializableModel implements IDashboardComponent {
    static typesMap: {
        Integer: string;
        Float: string;
        Double: string;
        Decimal: string;
        DateTime: string;
        Text: string;
        String: string;
        Bool: string;
        Boolean: string;
    };
    name: ko.Observable<string>;
    uniqueName: ko.Observable<string>;
    dataMember: ko.Observable<string>;
    numericFormat: DataItemNumericFormat;
    dateTimeFormat: DataItemDateTimeFormat;
    showValues: ko.Observable<boolean>;
    showTotals: ko.Observable<boolean>;
    showGrandTotals: ko.Observable<boolean>;
    constructor(dataItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.IModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    grabFrom(dataItem: DataItem): void;
    isDefinitionEquals(dataItem: DataItem): boolean;
    getUniqueNamePrefix(): string;
}
export declare enum AcceptableShapingType {
    Number = 0,
    String = 1,
    RangeDate = 2,
    Attribute = 3,
    Hidden = 4
}
export declare class DataItemLink extends TypedSerializableModel {
    static create(dataItemProvider: IDataItemProvider, dataItemLink: DataItemLink): DataItemLink;
    uniqueName: ko.Observable<string>;
    dataItem: ko.Subscribable<DataItem>;
    private _dataItemProvider;
    _specifics: {
        acceptableShapingType: AcceptableShapingType;
        customOptionsProperties: {
            serializationInfo: DxDesigner.Analytics.Utils.ISerializationInfo;
            filter?: (dataItem: DataItem) => boolean;
            disabledRule?: (dataItem: DataItem) => boolean;
        }[];
        customDataShapingProperties: {
            serializationInfo: DxDesigner.Analytics.Utils.ISerializationInfo;
            filter?: (dataField: IDataField) => boolean;
        }[];
        isAttribute: boolean;
        skipFormatting: boolean;
        supportsTopNOther: boolean;
        forceAddOlapExactDateFormat: boolean;
    };
    constructor(dataItemProvider: IDataItemProvider, dataItemLinkJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    _updateProvider(dataItemProvider: IDataItemProvider): void;
}
