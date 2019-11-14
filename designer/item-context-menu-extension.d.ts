/**
* DevExpress Dashboard (item-context-menu-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DisposableObject } from '../model/disposable-object';
import { DashboardControl } from '../common/dashboard-control';
import { IDashboardItemMenu } from './items/_dashboard-item-menu';
import { KeyEventType } from '../common/common-interfaces';
import * as ko from 'knockout';
export declare class DashboardItemMenuExtension extends DisposableObject {
    private dashboardControl;
    name: string;
    constructor(dashboardControl: DashboardControl);
    _itemContextMenu: ko.Observable<IDashboardItemMenu>;
    start(): void;
    stop(): void;
    processKeyEvent(keyEventType: KeyEventType, eventArgs: JQueryKeyEventObject): boolean;
    menuItemClick(menuItemId: string): void;
    private _undateExtension;
}
