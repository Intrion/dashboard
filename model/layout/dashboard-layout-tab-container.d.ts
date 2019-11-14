/**
* DevExpress Dashboard (dashboard-layout-tab-container.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DashboardLayoutGroup } from './dashboard-layout-group';
import { DashboardLayoutNode } from './dashboard-layout-node';
import { DashboardItem } from '../items/dashboard-item';
import { DashboardTabPage } from '../items/tab-container-item/dashboard-tab-page';
import { DashboardLayoutTabPage } from './dashboard-layout-tab-page';
import * as ko from 'knockout';
export declare class DashboardLayoutTabContainer extends DashboardLayoutGroup {
    private readonly _tabContainer;
    protected _getDefaultItemType(): string;
    protected readonly _template: string;
    protected readonly _visibleItems: ko.ObservableArray<DashboardLayoutNode>;
    protected readonly _ignoreChildMaxHeight: boolean;
    protected readonly _dragOverInnerElementController: {
        selector: string;
        onDragOver: (index: number) => void;
    };
    private _visibleItemsCore;
    protected _activeTabIndex: ko.Computed<number>;
    constructor(modelJson?: Object, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    protected _setItemCore(newItem: DashboardItem): void;
    _createTabPage(): DashboardLayoutTabPage;
    _removeLayoutTabPage(tabPageModel: DashboardTabPage): void;
    _activeTabPage: ko.Computed<DashboardTabPage>;
    _deleteDashbordItem(): void;
    private _addLayoutTabPage;
}
