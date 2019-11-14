/**
* DevExpress Dashboard (_base-element.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from '../_base-item';
import DataSource from 'devextreme/data/data_source';
export declare class filterElementBaseItem extends baseItem {
    widget: any;
    constructor(container: HTMLElement, options: any);
    dispose(): void;
    protected _setSelectionUnsafe(values: any): void;
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    protected _createWidgetDiv(): HTMLDivElement;
    protected _initializeData(newOptions: any): void;
    allowMultiselection: boolean;
    protected readonly isMultiSelectable: boolean;
    protected _isPaneEmpty(): boolean;
    updateInteractivityOptions(): void;
    getDataSource(): DataSource;
    protected readonly _enableSearch: boolean;
    protected readonly _isBottomFloatingToolbarPosition: boolean;
    _isBorderRequired(): boolean;
    _getDisplayExpr(): 'text' | 'html';
    _getOptions(includeActions: any): void;
    _hasToggleSelectionModeButton(): boolean;
    protected _resizeUnsafe(): void;
    _raiseItemClick(elements: any): void;
    _mustSelectingFired(values: any): boolean;
    _isUpdating(widget: any): boolean;
    protected _applySelectionUnsafe(): void;
    _selectTuples(tuplesToSelect: any, unaffectedTuples: any, isSelect: any): void;
    _getWidget(): any;
    _getWidgetName(): string;
    _createWidget(div: HTMLElement, opts: any): any;
}
