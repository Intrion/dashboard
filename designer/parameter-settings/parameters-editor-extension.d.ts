/**
* DevExpress Dashboard (parameters-editor-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IExtension } from '../../common/common-interfaces';
import { ParameterEditorViewModel } from './_parameter-settings-viewmodel';
import { DashboardControl } from '../../common/dashboard-control';
import { Dashboard } from '../../model/dashboard';
import * as ko from 'knockout';
export declare class DashboardParameterEditorExtension implements IExtension {
    private dashboardControl;
    name: string;
    private _menuItem;
    _viewModel: ParameterEditorViewModel;
    constructor(dashboardControl: DashboardControl);
    start(): void;
    stop(): void;
    dashboard: ko.Computed<Dashboard>;
}
