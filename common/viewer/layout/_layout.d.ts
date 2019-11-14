/**
* DevExpress Dashboard (_layout.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IResizableModel } from './_resizable';
import * as ko from 'knockout';
import { DashboardLayoutNode, DashboardItem, DashboardTabPage, IDisposable } from '../../../model';
import { DashboardItemJson } from '../../../model/layout/metadata/_dashboard-layout-node';
import { KnockoutEntry } from '../../../model/internal/_knockout-utils';
export interface ISizeController {
    getWidth: () => number;
    getHeight: () => number;
    requestRepaint: JQueryCallback;
    renderImmediately?: boolean;
    setConstraints?: (constraints: {
        min: ISize;
        max: ISize;
    }) => void;
    visible?: ko.Subscribable<boolean>;
}
export interface ILayoutItemViewModel {
    create: (modelItemJson: any, location: string, insertionBehavior?: LayoutItemInsertionBehavior) => any;
    moveTo: (itemModel?: ILayoutItemViewModel, location?: string, insertionBehavior?: LayoutItemInsertionBehavior) => any;
    delete: () => void;
    canAttach?: (something: ILayoutItemViewModel | DashboardItemJson) => boolean;
    createTabPage: () => void;
    model: DashboardLayoutNode;
    item: ko.Subscribable<DashboardItem>;
    dashboardItem: ko.Subscribable<string>;
    orientation: ko.Observable<string>;
    weight: ko.Observable<number>;
    visibleItems: ko.ObservableArray<ILayoutItemViewModelProvider>;
    childItems: ko.ObservableArray<ILayoutItemViewModelProvider>;
    activeTabPage: KnockoutEntry<DashboardTabPage>;
    activeTabIndex: KnockoutEntry<number>;
    template: string;
    hasItem: ko.Subscribable<boolean>;
    ignoreChildMaxHeight: boolean;
    dragOverInnerElementController?: DragOverController;
    getPlaceholder(): ILayoutItemViewModel;
}
export interface ILayoutItemViewModelProvider {
    _createViewModel(): ILayoutItemViewModel;
}
export interface DragOverController {
    selector: string;
    onDragOver(elementIndex: number): void;
}
export interface ISize {
    width: number;
    height: number;
}
export interface Constrains {
    min: {
        width: ko.Observable<number>;
        height: ko.Observable<number>;
    };
    max: {
        width: ko.Observable<number>;
        height: ko.Observable<number>;
    };
}
export interface LayoutDroppableItem {
    node: LayoutItem;
    dropBehavior: LayoutItemInsertionBehavior;
}
export declare type LayoutItemInsertionBehavior = 'InsertIntoGroup' | 'InsertBesideGroup';
export declare function _syncLayoutHelper<T, U extends IDisposable>(sourceArray: ko.ObservableArray<T>, destArray: ko.ObservableArray<U>, addHandler: (value: T) => U): ko.Subscription;
export declare function setHoverLocation(hoverLayoutItem: LayoutItem, location?: string, dropBehavior?: LayoutItemInsertionBehavior): void;
export declare let SplitterSize: number;
export declare let DashboardItemHeaderHeight: number;
export declare const MinWeight = 0.00001;
export declare class LayoutItem implements IResizableModel, IDisposable {
    viewModel: ILayoutItemViewModel;
    private _isUpdating;
    static findLargestItem(layoutItem: LayoutItem): {
        maxSquare: number;
        item: LayoutItem;
    };
    private _constraints;
    _parent: ko.Observable<LayoutItem>;
    private _width;
    private _height;
    private _subscriptions;
    private _changeWeight;
    private _changeWeightCore;
    private _correntWeight;
    private _safeSetWidth;
    private _safeSetHeight;
    private _updateChildrenSize;
    private _updateChildrenResizeHandles;
    constructor(viewModel: ILayoutItemViewModel, parent?: LayoutItem);
    dispose(): void;
    isValidWidth(val: number): boolean;
    isValidHeight(val: number): boolean;
    setConstraints: (constraints: {
        min: ISize;
        max: ISize;
    }) => void;
    getSelectionParentsList(location: string): LayoutDroppableItem[];
    private _getRequiredOrientationByLocation;
    private _inverseOrientation;
    findLayoutItem(criteria: (item: LayoutItem) => boolean): LayoutItem;
    findLayoutItemByItemModel(itemModel: ILayoutItemViewModel): LayoutItem;
    items: ko.ObservableArray<LayoutItem>;
    minWidth: ko.Computed<number>;
    minHeight: ko.Computed<number>;
    maxWidth: ko.Computed<number>;
    maxHeight: ko.Computed<number>;
    width: ko.Computed<number>;
    height: ko.Computed<number>;
    contentWidth: ko.Computed<number>;
    contentHeight: ko.Computed<number>;
    containerWidth: ko.Computed<number>;
    containerHeight: ko.Computed<number>;
    resizeHandles: ko.Observable<string>;
    isSelected: ko.Observable<boolean>;
    areChildrenSelected: ko.Computed<boolean>;
    dragOverLocation: ko.Observable<string>;
    itemStyle: ko.Computed<string>;
    onEvent(item: LayoutItem, event: string): any;
    coverClickHandler: (e: any) => void;
    coverMouseOverHandler: (e: any) => void;
    resizeStarted: () => void;
    resizeCompleted: () => void;
    getContext: () => any;
    getLocalContext: () => any;
    verticalPaddings: ko.Observable<number>;
    horizontalPaddings: ko.Observable<number>;
    isDesignMode: ko.Observable<boolean>;
    isLayoutReady: ko.Observable<boolean>;
    updateSize(width: number, height: number): void;
    visible: ko.Computed<boolean>;
    create(modelItemJson?: any, location?: string, insertBehavior?: LayoutItemInsertionBehavior): LayoutItem;
    moveTo(layoutNode: LayoutItem, location: string, insertBehavior?: LayoutItemInsertionBehavior): LayoutItem;
    delete(): void;
    getRoot(): LayoutItem;
    canAttach(something: ILayoutItemViewModel | DashboardItemJson): boolean;
    placeholderItem: LayoutItem;
    getPlaceholder(): LayoutItem;
    repaintCallbacks: JQuery.Callbacks<Function>;
    sizeController: ISizeController;
}
