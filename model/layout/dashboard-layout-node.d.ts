/**
* DevExpress Dashboard (dashboard-layout-node.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../serializable-model';
import { ILayoutItemViewModelProvider, ILayoutItemViewModel, LayoutItemInsertionBehavior } from '../../common/viewer/layout/_layout';
import { DashboardItem } from '../items/dashboard-item';
import { DashboardItemJson } from './metadata/_dashboard-layout-node';
import * as ko from 'knockout';
import { IDashboardItemsProvider } from '../internal/_interfaces';
import { KnockoutEntry } from '../internal/_knockout-utils';
export declare type LayoutItemInsertPosition = 'left' | 'right' | 'top' | 'bottom';
export declare abstract class DashboardLayoutNode extends TypedSerializableModel implements ILayoutItemViewModelProvider {
    static _canAttach(parent: DashboardLayoutNode, dashboardLayoutNode: DashboardLayoutNode | DashboardItemJson): boolean;
    dashboardItem: ko.Observable<string>;
    itemType: ko.Observable<string>;
    weight: ko.Observable<number>;
    parentNode: ko.Observable<any>;
    _dashboard: ko.Observable<IDashboardItemsProvider>;
    private _findDashboardItem;
    item: DashboardItem;
    constructor(dashboardLayoutItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfo[];
    findLayoutItem(dashboardItem: DashboardItem): DashboardLayoutNode;
    insert(itemToInsert: DashboardLayoutNode | DashboardItem, position: LayoutItemInsertPosition): void;
    moveTo(targetItem: DashboardLayoutNode, position: LayoutItemInsertPosition): void;
    _moveTo(targetItem: DashboardLayoutNode, position: LayoutItemInsertPosition, insertionBehavior?: LayoutItemInsertionBehavior): void;
    remove(): void;
    _relativeWidth: ko.Computed<any>;
    _relativeHeight: ko.Computed<any>;
    _relativeArea: ko.Computed<number>;
    _create(modelItemJson?: any, position?: LayoutItemInsertPosition, insertionBehavior?: LayoutItemInsertionBehavior): DashboardLayoutNode;
    _validateParentNode(newParentNode: any): void;
    _canAttach(itemToAttach: DashboardLayoutNode | DashboardItemJson): boolean;
    _viewModel: ILayoutItemViewModel;
    _createViewModel(): ILayoutItemViewModel;
    protected readonly _template: string;
    protected readonly _ignoreChildMaxHeight: boolean;
    protected readonly _visibleItems: ko.ObservableArray<DashboardLayoutNode>;
    protected readonly _childItems: ko.ObservableArray<DashboardLayoutNode>;
    protected readonly _orientation: ko.Observable<string>;
    protected readonly _createPlaceholderFunc: () => ILayoutItemViewModel;
    protected readonly _dragOverInnerElementController: any;
    protected _activeTabPage: KnockoutEntry;
    protected _activeTabIndex: KnockoutEntry;
    protected _delete(): void;
    protected _insertItemCore(layoutNodeToInsert: DashboardLayoutNode, position: LayoutItemInsertPosition, insertionBehavior?: LayoutItemInsertionBehavior): void;
    protected _setItemCore(newItem: DashboardItem): void;
    protected _createTabPage(): void;
    _ensureItemParentContainer(): void;
    _deleteDashbordItem(): void;
}
