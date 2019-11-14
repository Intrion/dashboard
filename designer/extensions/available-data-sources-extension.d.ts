/**
* DevExpress Dashboard (available-data-sources-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataSource } from '../../model/data-sources/data-source';
import { IExtension } from '../../common/common-interfaces';
import { DashboardControl } from '../../common/dashboard-control';
import * as ko from 'knockout';
export declare class AvailableDataSourcesExtension implements IExtension {
    private dashboardControl;
    name: string;
    templateName: string;
    viewModel: any;
    private _errorState;
    private _uiState;
    constructor(dashboardControl: DashboardControl);
    start(): void;
    stop(): void;
    selectedDataSources: ko.ObservableArray<DataSource>;
    dataSources: ko.ObservableArray<DataSource>;
    loadAvailableDataSources(): void;
}
