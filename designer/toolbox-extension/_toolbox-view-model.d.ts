/**
* DevExpress Dashboard (_toolbox-view-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardMenuItem, DashboardToolboxGroup, DashboardToolbarGroup } from './toolbox-items';
import { KeyEventType } from '../../common/common-interfaces';
import * as ko from 'knockout';
export declare class ToolboxViewModel {
    private _defaultMenuItemData;
    private _menuItems;
    private _toolboxGroups;
    private _toolbarGroups;
    leftPanelWidth: number;
    constructor(menuVisible: boolean, _defaultMenuItemData: any, _menuItems: ko.ObservableArray<DashboardMenuItem>, _toolboxGroups: ko.ObservableArray<DashboardToolboxGroup>, _toolbarGroups: ko.ObservableArray<DashboardToolbarGroup>);
    toggleMenu: () => void;
    processKeyEvent(keyEventType: KeyEventType, eventArgs: JQueryKeyEventObject): boolean;
    showDesignerPanel(): void;
    hideDesignerPanel(): void;
    toolbarHeight: ko.Observable<number>;
    designerPanelLeft: ko.Observable<number>;
    menuItemsSorted: ko.Computed<Array<DashboardMenuItem>>;
    toolboxGroupsSorted: ko.Computed<Array<DashboardToolboxGroup>>;
    toolbarGroupsSorted: ko.Computed<Array<DashboardToolbarGroup>>;
    settingsForm: ko.Observable<any>;
    settingsFormVisible: ko.Computed<boolean>;
    closeMenu: () => void;
    showMenu: () => void;
    menuItemClick: (menuItem: DashboardMenuItem) => void;
    menuVisible: ko.Observable<boolean>;
}
