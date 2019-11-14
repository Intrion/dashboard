/**
* DevExpress Dashboard (_dashboard-layout-creator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardLayoutGroup } from './dashboard-layout-group';
import { Dashboard } from '../dashboard';
import { DashboardItem } from '../items/dashboard-item';
export declare class DashboardLayoutCreator {
    private _clientWidth;
    private _clientHeight;
    private _dashboard;
    _layoutRoot: DashboardLayoutGroup;
    constructor(_clientWidth: number, _clientHeight: number, _dashboard: Dashboard);
    rebuildLayout(): void;
    private _removeIncorrectLayoutNodes;
    private _getParentItem;
    _createLayoutNodes(dashboardItems: Array<DashboardItem>): void;
    _createLayoutNode(dashboardItem: DashboardItem, layoutGroup: DashboardLayoutGroup): void;
}
