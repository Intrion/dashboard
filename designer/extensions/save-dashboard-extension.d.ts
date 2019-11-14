/**
* DevExpress Dashboard (save-dashboard-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IExtension, SequenceAction } from '../../common/common-interfaces';
import { ConfirmDialogViewModel } from '../_confirm-dialog';
import { DashboardControl } from '../../common/dashboard-control';
import * as ko from 'knockout';
export declare class SaveDashboardExtension implements IExtension {
    private dashboardControl;
    private _menuItem;
    name: string;
    _confirmDialogViewModel: ConfirmDialogViewModel;
    private _customTemplate;
    private _isDashboardDirty;
    canSaveDashboard: ko.Computed<boolean>;
    designerToViewerAction: SequenceAction;
    constructor(dashboardControl: DashboardControl);
    start(): void;
    stop(): void;
    private readonly _toolboxExtension;
    private readonly _undoEngineExtension;
    performSaveDashboard(dashboardId: string, dashboardJson: string): JQueryPromise<any>;
    ensureDashboardSaved(action: () => void): void;
    saveDashboard(): JQueryPromise<any>;
}
