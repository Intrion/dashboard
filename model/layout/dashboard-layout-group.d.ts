/**
* DevExpress Dashboard (dashboard-layout-group.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DashboardLayoutNode, LayoutItemInsertPosition } from './dashboard-layout-node';
import { DashboardLayoutGroupOrientation } from '../enums';
import { DashboardItem } from '../items/dashboard-item';
import * as ko from 'knockout';
import { IDashboardItemsProvider } from '../internal/_interfaces';
import { ILayoutItemViewModel, LayoutItemInsertionBehavior } from '../../common/viewer/layout/_layout';
export declare class DashboardLayoutGroup extends DashboardLayoutNode {
    protected readonly _template: string;
    protected readonly _createPlaceholderFunc: () => ILayoutItemViewModel;
    protected readonly _visibleItems: ko.ObservableArray<DashboardLayoutNode>;
    protected readonly _childItems: ko.ObservableArray<DashboardLayoutNode>;
    protected readonly _orientation: ko.Observable<DashboardLayoutGroupOrientation>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    orientation: ko.Observable<DashboardLayoutGroupOrientation>;
    childNodes: ko.ObservableArray<DashboardLayoutNode>;
    findLayoutItem(dashboardItem: DashboardItem): DashboardLayoutNode;
    getNodesRecursive(): Array<DashboardLayoutNode>;
    getItemsRecursive(): Array<DashboardLayoutNode>;
    private _attachToGroupWithInversedOrientation;
    _attachChild(target: DashboardLayoutNode, itemToAttach: DashboardLayoutNode, position: LayoutItemInsertPosition): void;
    _detachChild(removedChildLayoutNode: DashboardLayoutNode): void;
    private _ensureGroupIsNeeded;
    private _wrapChildWithGroup;
    private _getOrientationByInsertPosition;
    _insertItemCore(layoutNodeToInsert: DashboardLayoutNode, position: LayoutItemInsertPosition, insertionBehavior?: LayoutItemInsertionBehavior): void;
    _addItem(layoutNodeToInsert: DashboardLayoutNode): void;
    protected _getDefaultItemType(): string;
    _deleteDashbordItem(): void;
}
export declare class DashboardLayoutRootGroup extends DashboardLayoutGroup {
    constructor(dashboard: IDashboardItemsProvider, modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    protected _getDefaultItemType(): string;
    _addItem(layoutNodeToInsert: DashboardLayoutNode): void;
}
