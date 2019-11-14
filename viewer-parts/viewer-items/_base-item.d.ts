﻿/**
* DevExpress Dashboard (_base-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ItemCaptionToolbarViewOptions, CaptionToolbar } from '../widgets/caption-toolbar/_caption-toolbar-base';
import { IItemLoadingElement } from './elements/_item-loading';
import { DashboardItemCaptionToolbarOptions, ViewerToolbarItem } from '../widgets/caption-toolbar/caption-toolbar-options';
export declare var createDefaultToolbar: (viewerItem: baseItem, container: HTMLElement, controlContainer: HTMLElement, popupContainer: HTMLElement, viewOptions: ItemCaptionToolbarViewOptions) => CaptionToolbar;
export declare function getControlContainer(element: HTMLElement): HTMLElement;
export declare type ViewerItemVisualMode = 'full' | 'caption' | 'content';
export declare abstract class baseItem {
    private _lockCount;
    _isFixedHeight: boolean;
    customHoverEnabled: boolean;
    container: HTMLElement;
    controlContainer: HTMLElement;
    _boundaryContainer: HTMLElement;
    _clearMasterFilterHandler: any;
    _clearSelectionHandler: any;
    _toggleSelectionModeHandler: any;
    _drillUpHandler: any;
    _allowMultiselection: boolean;
    allowMultiselectionChanged: (allowed: any) => void;
    allowLimitDataCallback: () => void;
    dateToString: (date: Date) => string;
    selected: JQuery.Callbacks<Function>;
    clearMasterFilter: JQuery.Callbacks<Function>;
    drillUp: JQuery.Callbacks<Function>;
    contentElementSelection: JQuery.Callbacks<Function>;
    expandValue: JQuery.Callbacks<Function>;
    clientStateUpdate: JQuery.Callbacks<Function>;
    dataRequest: JQuery.Callbacks<Function>;
    itemClick: JQuery.Callbacks<Function>;
    itemHover: JQuery.Callbacks<Function>;
    itemSelectionChanged: JQuery.Callbacks<Function>;
    itemWidgetCreated: JQuery.Callbacks<Function>;
    itemWidgetUpdating: JQuery.Callbacks<Function>;
    itemWidgetUpdated: JQuery.Callbacks<Function>;
    itemCaptionToolbarUpdated: JQuery.Callbacks<Function>;
    constraintsUpdated: JQuery.Callbacks<Function>;
    interactivityController: any;
    customSelectionMode: any;
    customTargetAxes: any[];
    customDefaultSelectedValues: any[];
    options: any;
    dataController: any;
    customSelectedTuples: Array<any>;
    contentRoot: HTMLElement;
    shieldingElement: HTMLElement;
    itemLoadingElement: IItemLoadingElement;
    captionToolbar: CaptionToolbar;
    visualMode: ViewerItemVisualMode;
    _hasWidget: boolean;
    readonly hasWidget: boolean;
    protected readonly _captionToolbarSeparatorRequired: boolean;
    protected readonly _isBottomFloatingToolbarPosition: boolean;
    protected readonly _allowPreview: boolean;
    constructor($container: HTMLElement, options: any);
    protected _initializeData(newOptions: any): void;
    initialDataRequest(): void;
    initialDataRequestUnsafe(): void;
    allowMultiselection: boolean;
    forceUpdateInteractivity(): void;
    clearSelection(): void;
    protected _clearSelectionUnsafe(): void;
    protected _clearSelectionBase(): void;
    performClearSelection(): void;
    selectTuple(tuple: any, state: any): void;
    protected selectTupleUnsafe(tuple: any, state: any): void;
    setSelection(values: any): void;
    protected _setSelectionUnsafe(values: any): void;
    private setSelectionBase;
    protected _applySelection(): void;
    protected _applySelectionUnsafe(): void;
    protected _isEncodeHtml(): any;
    protected _isSupportDataAwareExport(): any;
    protected _isLocked(): boolean;
    protected _lock(): void;
    protected _unlock(): void;
    protected _getCustomSelectionMode(): any;
    protected _setCustomSelectionMode(value: any): void;
    protected _getCustomHoverEnabled(): boolean;
    protected _setCustomHoverEnabled(value: any): void;
    private _getCustomTargetAxes;
    private _setCustomTargetAxes;
    protected _getTargetAxes(): any;
    getSelectedTuples(): any[];
    updateItem(options: any): void;
    forceUpdateItem(): void;
    private _changeTuple;
    private _onSelectionChanged;
    protected _mustSelectingFired(values: any): boolean;
    private _patchTroughDrillDownValues;
    private _deductDrillDownValues;
    private _getSelectionCallbackType;
    protected _selectTuples(tuplesToSelect: any, unaffectedTuples: any, isSelect: any): void;
    protected _selectTuplesCore(tuples: any, updateTupleDelegate: any, state: any): void;
    protected _renderContent(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    protected renderContentUnsafe($element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    renderPartialContent(): void;
    protected renderPartialContentUnsafe(): void;
    updateContentState(): void;
    protected updateContentStateUnsafe(): void;
    getInfo(): {
        name: any;
        headerHeight: number;
        position: JQuery.Coordinates;
        width: number;
        height: number;
        virtualSize: any;
        scroll: any;
    };
    protected getInfoUnsafe(): {
        name: any;
        headerHeight: number;
        position: JQuery.Coordinates;
        width: number;
        height: number;
        virtualSize: any;
        scroll: any;
    };
    private getInfoBase;
    getName(): any;
    getCaption(): any;
    hasCaption(options?: any): any;
    hasParentContainer(): boolean;
    protected _isPaneEmpty(): boolean;
    _isTransparentBackground(): boolean;
    render(container?: HTMLElement): void;
    dispose(): void;
    updateContent(newOptions: any): void;
    updateClientState(clientState: any): void;
    _removeShildElement(): void;
    updateState(state: {
        loading: boolean;
        operations: {
            actions?: boolean;
            exportTo?: boolean;
        };
    }): void;
    width(width?: any): number;
    height(height?: any): number;
    setSize(width: any, height: any): void;
    getConstraints(includeBorders: any): {
        min: any;
        max: any;
        consolidate: (sourceConstraints: any, consolidateDirection: any) => any;
        isFixed: (direction: any) => boolean;
        _consolidatePart: (sourceConstraints: any, consolidateDirection: any, part: any) => {
            width: any;
            height: any;
            plus: (arg: any) => any;
            minus: (arg: any) => any;
            compareByDirections: (size: any) => string[];
            constrain: (constraints: any) => any;
            clone: () => any;
        };
    };
    getOffset(): {
        width: number;
        height: number;
    };
    updateInteractivityOptions(): void;
    addContextCaptionToolbarOptions?: (options: DashboardItemCaptionToolbarOptions) => void;
    getCaptionToolbarOptions(): DashboardItemCaptionToolbarOptions;
    updateConstraints(): void;
    deferredToolbarRenderingPromise: (itemName: string, width: number, height: number) => JQueryPromise<any>;
    updateCaptionToolbar(): void;
    private _createCaptionToolbar;
    private _updateCaptionToolbarAndSize;
    createCaptionToolbar: (viewerItem: baseItem, container: HTMLElement, controlContainer: HTMLElement, parentContainerElement: HTMLElement, viewOptions: ItemCaptionToolbarViewOptions) => CaptionToolbar;
    forceCreateCaptionToolbar(): void;
    protected _updateClientStateUnsafe(clientState: any): void;
    protected _changeContent(updateExisting: boolean): void;
    protected _calcHeaderAndFooterHeight(): number;
    private _getReducedDataTooltip;
    private _getStaticToolbarItems;
    private _getReduceDataToolbarItem;
    private _getStateToolbarItems;
    private _getActionToolbarItems;
    private _getExportMenuModel;
    private _getParametersTitle;
    showExportDialog(exportFormat: any): void;
    protected _getSpecificActionToolbarItems(): Array<ViewerToolbarItem>;
    protected _getSpecificStatePanelItems(): Array<ViewerToolbarItem>;
    protected _getMinContentHeight(): number;
    private _generateInnerBorderClasses;
    protected _generateInnerBorderClassesUnsafe(element?: HTMLElement): string[];
    private _generateOuterBorderClasses;
    _isBorderRequired(): boolean;
    _resize(): void;
    protected _resizeUnsafe(): void;
    private _resizeBase;
    updateContentSize(): void;
    protected _updateContentSizeUnsafe(): void;
    private _updateContentSizeBase;
    private _allocatePreloader;
    protected _getButtonOffset(useToolbarOffset: any): {
        left: number;
        top: number;
    };
    protected _getAnimationOptions(): {
        enabled: boolean;
        duration: number;
    };
    private _getContainerPosition;
    protected _getContainerPositionUnsafe(): {
        left: number;
        top: number;
        width: number;
        height: number;
        offsetX: number;
        offsetY: number;
    };
    private _getContainerPositionBase;
    protected _getBoundaryContainer(): HTMLElement;
    protected _getSelectedValues(): any;
    private _onClearSelection;
    protected _getElementInteractionValue(element: any, viewModel: any): void;
    protected _setSelectedValues(values: any): any;
    protected _raiseItemClick(element: any): void;
    protected _clickAction(tuple: any): void;
    protected _isMultiDataSupported(): boolean;
    protected _getDataPoint(element: any): any;
    protected _getWidget(): any;
    private _raiseItemWidgetCreated;
    private _raiseItemWidgetUpdating;
    private _raiseItemWidgetUpdated;
    protected _raiseItemHover(element: any, state?: any): void;
    private _onClearMasterFilter;
    private _onToggleSelectionMode;
    private _onDrillUp;
    private _onContentElementSelection;
    protected _onExpandValue(expandValueParams: any): void;
    protected _onClientStateUpdate(clientState: any): void;
    protected _onDataRequest(): void;
    private _hasDrillUpButton;
    private _hasClearMasterFilterButton;
    private _hasClearSelectionButton;
    protected _hasToggleSelectionModeButton(): boolean;
    private _isDrillUpEnabled;
    private _canPerformAction;
    protected _canPerformDrillDown(): boolean;
    protected _canPerformDrillUp(): boolean;
    protected _canSetMasterFilter(): boolean;
    protected _canSetMultipleMasterFilter(): boolean;
    protected isInteractivityActionEnabled(): boolean;
    protected _selectionMode(): "none" | "multiple";
    protected _getHtml(text: any): any;
    protected _getAxisNames(): any;
    private _getDrillDownAxisName;
    private _getDrillDownValues;
}
export declare let cssClassNamesBaseItem: {
    item: string;
    groupItem: string;
    groupItemChild: string;
    simpleBorder: string;
    overlayContent: string;
    cardWihtoutBackground: string;
};