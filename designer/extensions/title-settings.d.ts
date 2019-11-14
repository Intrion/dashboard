/**
* DevExpress Dashboard (title-settings.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DisposableObject } from '../../model/disposable-object';
import { IExtension } from '../../common/common-interfaces';
import { DashboardControl } from '../../common/dashboard-control';
export declare class DashboardTitleEditorExtension extends DisposableObject implements IExtension {
    private dashboardControl;
    name: string;
    private _menuItem;
    private _titleEditorViewModel;
    constructor(dashboardControl: DashboardControl);
    start(): void;
    stop(): void;
    private _updateTitleToolbar;
}
