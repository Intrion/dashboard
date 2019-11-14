/**
* DevExpress Dashboard (binding-panel.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IExtension } from '../../common/common-interfaces';
import { DashboardControl } from '../../common/dashboard-control';
export declare class BindingPanelExtension implements IExtension {
    private dashboardControl;
    name: string;
    private _subscriptions;
    constructor(dashboardControl: DashboardControl);
    private _contextMenuSubscriber;
    private _updateEmptyItemTemplate;
    private _updateDashboardItemMenu;
    start(): void;
    stop(): void;
}
