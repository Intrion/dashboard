/**
* DevExpress Dashboard (dashboard.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from './serializable-model';
import { IMasterFilterItemsProvider, IColorSignaturesProvider } from './internal/_interfaces';
import { DashboardItem } from './items/dashboard-item';
import { ObjectDataSource } from './data-sources/object-data-source';
import { SqlDataSource } from './data-sources/sql-data-source';
import { OlapDataSource } from './data-sources/olap-data-source';
import { EFDataSource } from './data-sources/ef-data-source';
import { ExcelDataSource } from './data-sources/excel-data-source';
import { ExtractDataSource } from './data-sources/extract-data-source';
import { JsonDataSource } from './data-sources/json-data-source';
import { XpoDataSource } from './data-sources/xpo-data-source';
import { DataSource } from './data-sources/data-source';
import { Parameter, IQueryParameter } from './parameters/parameter';
import { ColorSchemeEntry } from './colorization/color-scheme-entry';
import { GroupItem } from './items/group/group-item';
import { DashboardLayoutGroup } from './layout/dashboard-layout-group';
import { DashboardTitle } from './title';
import { DataDashboardItem } from './items/data-dashboard-item';
import { DashboardState } from './dashboard-state';
import { DashboardTabPage } from './items/tab-container-item/dashboard-tab-page';
import * as ko from 'knockout';
import { DashboardLayoutNode } from './layout/dashboard-layout-node';
import { FederationDataSource } from './data-sources/federation-data-source';
export declare class Dashboard extends SerializableModel implements IMasterFilterItemsProvider, IColorSignaturesProvider {
    dashboardJSON: any;
    static _dataSourceTypesMap: {
        "ObjectDataSource": typeof ObjectDataSource;
        "SqlDataSource": typeof SqlDataSource;
        "OLAPDataSource": typeof OlapDataSource;
        "EFDataSource": typeof EFDataSource;
        "ExcelDataSource": typeof ExcelDataSource;
        "ExtractFileDataSource": typeof ExtractDataSource;
        "JsonDataSource": typeof JsonDataSource;
        "XPObjectSource": typeof XpoDataSource;
        "FederationDataSource": typeof FederationDataSource;
    };
    static _createDataSource(dataSourceJSON: any, serializer: DxDesigner.Analytics.Utils.ModelSerializer): any;
    dataSources: ko.ObservableArray<DataSource>;
    parameters: ko.ObservableArray<Parameter>;
    colorScheme: ko.ObservableArray<ColorSchemeEntry>;
    currencyCultureName: ko.Observable<string>;
    items: ko.ObservableArray<DashboardItem>;
    groups: ko.ObservableArray<GroupItem>;
    layout: ko.Observable<DashboardLayoutGroup>;
    title: DashboardTitle;
    _tabPages: ko.ObservableArray<DashboardItem>;
    _dataDashboardItems: ko.Computed<DataDashboardItem[]>;
    _availableColorSignatures: ko.Computed<any>;
    _queryParameters: ko.Subscribable<IQueryParameter[]>;
    _masterFilterItems: ko.Computed<DataDashboardItem[]>;
    _state: ko.Computed<DashboardState>;
    private _disposables;
    private _componentNameGenerator;
    stateString: string;
    constructor(dashboardJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    dispose(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getJSON(): any;
    findItem(itemId: string): DashboardItem;
    rebuildLayout(clientWidth?: number, clientHeight?: number): void;
    _getDisplayDashboardItem(tabPage: DashboardTabPage): DashboardItem;
    _changeItem(oldItem: DashboardItem, newItem: DashboardItem): void;
    _duplicateItem(item: DashboardItem): void;
    _createDashboardLayoutItem(modelItemJson?: any): DashboardLayoutNode;
    _createDashboardLayoutNode(dashboardItem: DashboardItem): DashboardLayoutNode;
    _findDataItem(itemId: string): DataDashboardItem;
    _interactivityGroupPathToRoot(dashboardItem: DashboardItem): Array<GroupItem | DashboardTabPage>;
    private _processDeleteDataSource;
}
