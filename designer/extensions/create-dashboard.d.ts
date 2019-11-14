/**
* DevExpress Dashboard (create-dashboard.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IExtension } from '../../common/common-interfaces';
import { DashboardControl } from '../../common/dashboard-control';
export declare class CreateDashboardExtension implements IExtension {
    private dashboardControl;
    name: string;
    private _newDashboardMenuItem;
    private _viewModel;
    constructor(dashboardControl: DashboardControl);
    start(): void;
    stop(): void;
    showCreateNewDashboard: () => void;
    performCreateDashboard(dashboardName: string, dashboardJson: string): JQueryPromise<void>;
    private _createNewDashboard;
}
