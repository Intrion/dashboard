/**
* DevExpress Dashboard (_filter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDataField } from '../../model/data-sources/_data-field';
import { Dimension } from '../../model/data-item/dimension';
import { IFilterItem, DataSourceBrowser } from '../../common/_data-source-browser';
import { DataItem } from '../../model/data-item/data-item';
import { DisposableObject } from '../../model/disposable-object';
import DataSource from 'devextreme/data/data_source';
import { DataDashboardItem } from '../../model/items/data-dashboard-item';
import * as ko from 'knockout';
import { Options as dxTreeViewOptions } from 'devextreme/ui/tree_view';
export interface ITreeItem {
    id: string;
    displayName: string;
    selected: boolean;
    data: IFilterItem;
}
export declare class FieldWrapper {
    private getDisplayName;
    add: (d: Dimension) => number;
    dataMember: () => string;
    displayName: () => string;
    groupIndex: () => number;
    hasItems: (path: any) => boolean;
    isGroup: () => boolean;
    reorder: (dataFields: IDataField[]) => void;
    constructor(dimension: Dimension, getDisplayName: (dataItem: DataItem) => string);
    private _dimensions;
}
export declare class SimpleFilterEditor extends DisposableObject {
    dashboardItem: DataDashboardItem;
    dataSourceBrowser: DataSourceBrowser;
    selectedField: ko.Observable<FieldWrapper>;
    fields: ko.ObservableArray<FieldWrapper>;
    filterItems: Array<ITreeItem>;
    popupVisible: ko.Observable<boolean>;
    loadingVisible: ko.Observable<boolean>;
    treeDataSource: DataSource;
    treeRootValue: any;
    constructor(dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser);
    readonly treeOptions: dxTreeViewOptions;
    applyHandler: () => void;
    private _getBranchIndexes;
    private _getFilterItemsState;
    private _generateFields;
    private _loadDataFields;
    dispose(): void;
}
