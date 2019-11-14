/**
* DevExpress Dashboard (_underlying-data-provider.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDataServiceClient } from "../_service-client";
import { DataDashboardItem } from "../../model";
import { RequestUnderlyingDataParameters, ItemDataAxisPoint, PrimitiveType } from "../../data";
import { itemData } from "../../data/item-data/_item-data";
export interface RawUnderlyingData {
    Data: Array<Array<PrimitiveType>>;
    DataMembers: Array<string>;
    ErrorMessage?: string;
}
export interface IUnderlyingDataProvider {
    requestUnderlyingData(dataDashboardItem: DataDashboardItem, args: RequestUnderlyingDataParameters): JQueryPromise<RawUnderlyingData>;
}
export declare class UnderlyingDataProvider {
    private _serviceClient;
    constructor(_serviceClient: IDataServiceClient);
    _getValidDataQueryParamsValues(values: Array<any>, dataDashboardItem: DataDashboardItem): any;
    _getUnderlyingDataArgsAxisPoints(data: itemData, args: RequestUnderlyingDataParameters): ItemDataAxisPoint[];
    requestUnderlyingData(dataDashboardItem: DataDashboardItem, args: RequestUnderlyingDataParameters): JQueryPromise<RawUnderlyingData>;
}
