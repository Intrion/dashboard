/**
* DevExpress Dashboard (toolbox-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DisposableObject } from '../../model/disposable-object';
import { IExtension, KnockoutTemplate, SequenceAction, WorkingModeSwitchingOptions, KeyEventType } from '../../common/common-interfaces';
import { ToolboxViewModel } from './_toolbox-view-model';
import { DashboardToolbarGroup, DashboardMenuItem, DashboardToolboxGroup, DashboardToolboxItem, DashboardToolbarItem } from './toolbox-items';
import { DashboardControl } from '../../common/dashboard-control';
import { LayoutItem } from '../../common/viewer/layout/_layout';
import * as ko from 'knockout';
export declare class ToolboxExtension extends DisposableObject implements IExtension {
    private dashboardControl;
    name: string;
    template: KnockoutTemplate;
    designerToViewerAction: SequenceAction;
    viewerToDesignerAction: SequenceAction;
    _viewModel: ToolboxViewModel;
    private _switchToViewerToolbar;
    readonly menuVisible: ko.Observable<boolean>;
    menuItems: ko.ObservableArray<DashboardMenuItem>;
    addMenuItem: (menuItem: DashboardMenuItem) => void;
    removeMenuItem: (menuItemId: string) => void;
    selectMenuItem: (menuItem: DashboardMenuItem) => void;
    toolboxGroups: ko.ObservableArray<DashboardToolboxGroup>;
    addToolboxItem: (groupName: string, toolboxItem: DashboardToolboxItem) => void;
    removeToolboxItem: (groupName: string, toolboxItemName: string) => void;
    toolbarGroups: ko.ObservableArray<DashboardToolbarGroup>;
    addToolbarItem: (groupName: string, toolbarItem: DashboardToolbarItem) => void;
    removeToolbarItem: (groupName: string, toolbarItemName: string) => void;
    openMenu(): void;
    closeMenu(): void;
    showPanelAsync: (options: WorkingModeSwitchingOptions) => JQueryPromise<{}>;
    hidePanelAsync: (options: WorkingModeSwitchingOptions) => JQueryPromise<{}>;
    processKeyEvent(keyEventType: KeyEventType, eventArgs: JQueryKeyEventObject): boolean;
    constructor(dashboardControl: DashboardControl);
    start(): void;
    stop(): void;
    _layoutItemPlaceholderService: (layoutItem: LayoutItem) => {
        data: {
            dashboardItems: ko.Computed<any[]>;
            addDashboardItem: (data: {
                type: string;
            }) => void;
        };
        templateName: string;
    };
    private _registerCustomItemToolbox;
    private _createDefaultGroups;
    private _registerToolboxItem;
    private _unregisterToolboxItem;
    private _findToolboxGroup;
    private _findMenuItem;
}
