/**
* DevExpress Dashboard (_viewer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IFullscreenItemProvider } from '../internal/_interfaces';
import { DashboardItem } from '../../model/items/dashboard-item';
import { IDashboardContext, IDashboardItemContext } from './_viewer-interfaces';
import * as ko from 'knockout';
export declare class FullscreenItemModel implements IFullscreenItemProvider {
    private dashboardContext;
    private localContext?;
    private repaintRequest;
    _dashboardItem: ko.Observable<DashboardItem>;
    _visible: ko.Observable<boolean>;
    dashboardItem: ko.Computed<DashboardItem>;
    visible: ko.Computed<boolean>;
    constructor(dashboardContext: IDashboardContext, localContext?: IDashboardItemContext, repaintRequest?: JQuery.Callbacks<Function>);
    viewModel: ko.Computed<{
        dashboardItem: DashboardItem;
        dashboardContext: IDashboardContext;
        localContext: IDashboardItemContext;
        repaintRequest: JQuery.Callbacks<Function>;
    }>;
    readonly maximizedItemName: string;
    maximizeItem(dashboardItem: DashboardItem): void;
    restoreDownItem(): void;
}
