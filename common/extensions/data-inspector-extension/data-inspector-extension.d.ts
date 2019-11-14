/**
* DevExpress Dashboard (data-inspector-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DisposableObject } from '../../../model/disposable-object';
import { IExtension } from '../../common-interfaces';
import { DashboardControl } from '../../dashboard-control';
import { DashboardItemCaptionToolbarOptions } from '../../../viewer-parts/widgets/caption-toolbar/caption-toolbar-options';
import { DashboardItem } from '../../../model';
import { dxElement } from 'devextreme/core/element';
import dxPopup from 'devextreme/ui/popup';
import dxDataGrid from 'devextreme/ui/data_grid';
export declare type InspectedType = "Aggregated" | "Raw";
export interface DataInspectorDialogArgs {
    component: dxPopup;
    element: dxElement;
}
export interface DataInspectorGridArgs {
    component: dxDataGrid;
    element: dxElement;
}
export interface DataInspectorExtensionOptions {
    allowInspectAggregatedData?: boolean;
    allowInspectRawData?: boolean;
    onDialogShowing?: (args: DataInspectorDialogArgs) => void;
    onDialogShown?: (args: DataInspectorDialogArgs) => void;
    onDialogHidden?: (args: DataInspectorDialogArgs) => void;
    onGridInitialized?: (args: DataInspectorGridArgs) => void;
    onGridContentReady?: (args: DataInspectorGridArgs) => void;
}
export declare class DataInspectorExtension extends DisposableObject implements IExtension {
    private _dashboardControl;
    private readonly _viewModel;
    private readonly _customTemplate;
    private _options;
    private _defaultOptions;
    name: string;
    constructor(dashboardControl: DashboardControl, options?: DataInspectorExtensionOptions);
    _addContextToolbarItem: (toolbarOptions: DashboardItemCaptionToolbarOptions, dashboardItem: DashboardItem) => void;
    start(): void;
    stop(): void;
    showDataInspector(dashboardItemName: string, inspectedType?: InspectedType): void;
    currentInspectedType(): InspectedType;
    hideDataInspector(): void;
}
