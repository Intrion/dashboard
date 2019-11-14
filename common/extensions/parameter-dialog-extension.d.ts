/**
* DevExpress Dashboard (parameter-dialog-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import dxPopup from 'devextreme/ui/popup';
import { DisposableObject } from '../../model/disposable-object';
import { IExtension } from '../common-interfaces';
import { DashboardControl } from '../dashboard-control';
import { DashboardParameterCollection } from '../parameters-definitions';
import { ParameterDialogContent } from '../../viewer-parts/widgets/dialogs/parameters-dialog-content';
import * as ko from 'knockout';
import { dxElement } from 'devextreme/core/element';
export interface DashboardParameterDialogArgs {
    component?: dxPopup;
    element?: dxElement;
    model?: any;
}
export interface DynamicLookUpValuesLoadedArgs {
    parameterName: string;
}
export interface DashboardParameterDialogExtensionOptions {
    onDynamicLookUpValuesLoaded?: (args: DynamicLookUpValuesLoadedArgs) => void;
    onShowing?: ((e: DashboardParameterDialogArgs) => any);
    onShown?: ((e: DashboardParameterDialogArgs) => any);
    onHidden?: ((e: DashboardParameterDialogArgs) => any);
}
export declare class DashboardParameterDialogExtension extends DisposableObject implements IExtension {
    private _parameterDialog;
    private _customDialogContent;
    private _viewModel;
    name: string;
    _dashboardControl: DashboardControl;
    onShowing: ((e: DashboardParameterDialogArgs) => any);
    onShown: ((e: DashboardParameterDialogArgs) => any);
    onHidden: ((e: DashboardParameterDialogArgs) => any);
    showDialogButton: ko.Observable<boolean>;
    _onDynamicLookUpValuesLoaded: (args: any) => void;
    constructor(dashboardControl: DashboardControl, options?: DashboardParameterDialogExtensionOptions);
    start(): void;
    stop(): void;
    show(): void;
    hide(): void;
    subscribeToContentChanges(callback: (newValue: DashboardParameterCollection) => void): ko.Subscription;
    getParameters(): DashboardParameterCollection;
    renderContent(element: JQuery | Element): ParameterDialogContent;
    private _createParameterDialog;
    private _clearContent;
    private _clear;
    private _subscribeDynamicLookUpValuesLoaded;
    protected _updateViewModel: (dashboard: any) => void;
}
