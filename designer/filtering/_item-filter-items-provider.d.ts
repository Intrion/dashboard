/**
* DevExpress Dashboard (_item-filter-items-provider.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { IDataField } from '../../model/data-sources/_data-field';
import { IDimensionDefinition } from '../../model/colorization/dimension-key';
import { DataItem } from '../../model/data-item/data-item';
import { IDataItemValuesProvider } from '../../common/_data-source-browser';
import { Parameter } from '../../model/parameters/parameter';
import { DataDashboardItem } from '../../model/items/data-dashboard-item';
import * as ko from 'knockout';
import { DataFieldType } from '../../model';
export declare var getRealDimensionType: (dimension: IDimensionDefinition, dataField: IDataField) => DataFieldType;
export declare var isCategoricalDateTime: (dimension: IDimensionDefinition, dataField: IDataField) => boolean;
export declare class ItemFilterItemsProvider implements DxDesigner.Analytics.Utils.IItemsProvider {
    private dataItemValuesProvider;
    private parameters;
    private dataDashboardItem;
    private filterPredicate;
    private static formatValue;
    constructor(dataItemValuesProvider: IDataItemValuesProvider, parameters: ko.ObservableArray<Parameter>, dataDashboardItem: DataDashboardItem, filterPredicate?: (di: DataItem) => boolean);
    getItems(pathRequest: DxDesigner.Analytics.Utils.IPathRequest): JQueryPromise<DxDesigner.Analytics.Utils.IDataMemberInfo[]>;
    getValues(pathRequest: DxDesigner.Analytics.Utils.IPathRequest): JQueryPromise<any[]>;
    private _getDashboardItemDataFields;
}
