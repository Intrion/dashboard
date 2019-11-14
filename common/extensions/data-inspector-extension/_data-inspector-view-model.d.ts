/**
* DevExpress Dashboard (_data-inspector-view-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataInspectorExtensionOptions, InspectedType } from "./data-inspector-extension";
import { DataDashboardItem } from "../../../model";
import DataSource from 'devextreme/data/data_source';
import { IUnderlyingDataProvider } from "../../data/_underlying-data-provider";
import { AggregatedDataSourceArgs } from "./_aggregated-data-source";
import { Column as DataGridColumn } from "devextreme/ui/data_grid";
import * as ko from 'knockout';
export interface GridDataSourceInfo {
    columns: DataGridColumn[];
    dataSource: DataSource;
}
export declare class DataInspectorViewModel {
    options: DataInspectorExtensionOptions;
    _dashboardItem: ko.Observable<DataDashboardItem>;
    _rawDataSource: GridDataSourceInfo;
    _aggregatedDataSource: GridDataSourceInfo;
    readonly avaliableInspectedDataType: Array<{
        value: InspectedType;
        text: string;
    }>;
    allowSwitchInspectedDataType: ko.Observable<boolean>;
    inspectedDataType: ko.Observable<InspectedType>;
    title: ko.Computed<string>;
    visible: ko.Observable<boolean>;
    underlyingDataProvider: IUnderlyingDataProvider;
    gridDataSource: ko.Observable<GridDataSourceInfo>;
    gridOptions: ko.Computed<Object>;
    constructor(options: DataInspectorExtensionOptions);
    setUnderlyingDataProvider(underlyingDataProvider?: IUnderlyingDataProvider): void;
    _bindGrid(): void;
    _clearDataSource(): void;
    _getInitialMode(options: DataInspectorExtensionOptions, initialMode: InspectedType, prevMode: InspectedType): InspectedType;
    _getRawDataSource(dashbordItem: DataDashboardItem): GridDataSourceInfo;
    _getAggregatedDataSource(dashbordItem: DataDashboardItem): GridDataSourceInfo;
    _getAggregatedDataSourceArgs(dashboardItem: DataDashboardItem): AggregatedDataSourceArgs;
    readonly isMobile: boolean;
    show(dashboardItem: DataDashboardItem, initialMode?: InspectedType): void;
}
