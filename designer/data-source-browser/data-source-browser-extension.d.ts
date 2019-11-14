/**
* DevExpress Dashboard (data-source-browser-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IExtension } from '../../common/common-interfaces';
import { DashboardControl } from '../../common/dashboard-control';
import { Dashboard } from '../../model/dashboard';
import { DataSourceBrowserViewModel } from './_data-source-browser-viewmodel';
import * as ko from 'knockout';
export declare class DataSourceBrowserExtension implements IExtension {
    private dashboardControl;
    name: string;
    private _menuItem;
    private _subscription;
    private _perDashboardSubscription;
    constructor(dashboardControl: DashboardControl);
    _disposePerDashboardSubcriptions(): void;
    _updateExtensionModel(dashboard: Dashboard): void;
    start(): void;
    stop(): void;
    _dataSourceBrowserViewModel: ko.Observable<DataSourceBrowserViewModel>;
}
