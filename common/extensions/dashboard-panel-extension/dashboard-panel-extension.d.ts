/**
* DevExpress Dashboard (dashboard-panel-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IExtension, SequenceAction, DashboardInfo, WorkingModeSwitchingOptions } from '../../common-interfaces';
import { DashboardControl } from '../../dashboard-control';
import * as ko from 'knockout';
export declare class DashboardPanelExtension implements IExtension {
    private dashboardControl;
    private options;
    name: string;
    private _customTemplate;
    private _iconBack;
    private _flexParent;
    private _dashboardsButton;
    private _dashboardTruncated;
    private _ellipsisText;
    private _itemTemplate;
    private _isMobile;
    private _disposables;
    panelWidth: number;
    visible: ko.Observable<boolean>;
    allowSwitchToDesigner: ko.Observable<boolean>;
    designerToViewerAction: SequenceAction;
    viewerToDesignerAction: SequenceAction;
    selectedItemKeys: ko.ObservableArray<string>;
    availableDashboards: ko.ObservableArray<DashboardInfo>;
    private _actualPanelWidth;
    private readonly _templateName;
    constructor(dashboardControl: DashboardControl, options?: DashboardPanelExtensionOptions);
    start(): void;
    stop(): void;
    updateDashboardsList(): void;
    private _validateSelection;
    private _hidePanel;
    showPanelAsync: (options: WorkingModeSwitchingOptions) => JQueryPromise<{}>;
    hidePanelAsync: (options: WorkingModeSwitchingOptions) => JQueryPromise<{}>;
    switchToViewer: () => void;
    switchToDesigner: () => void;
    private _getCustomTemplate;
}
export interface DashboardPanelExtensionOptions {
    dashboardThumbnail?: string;
}
