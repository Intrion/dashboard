/**
* DevExpress Dashboard (_caption-toolbar-adapter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ViewerToolbarLocatedItem } from './_caption-toolbar-arranger';
import { ViewerToolbarItemTooltip, ViewerToolbarItem } from './caption-toolbar-options';
import { dxToolbarItem, dxToolbarItemOptions } from './_caption-toolbar-base';
import { Options as dxTooltipOptions } from 'devextreme/ui/tooltip';
import { dxElement } from 'devextreme/core/element';
export declare class DashboardCaptionToolbarAdapter {
    private _encodeHtml;
    constructor(_encodeHtml: boolean);
    createToolbarItem(item: ViewerToolbarLocatedItem, controlContainer?: HTMLElement, popupContainer?: HTMLElement, onMenuItemClick?: () => void): dxToolbarItem;
    _applyText(item: any, text: string): void;
    _createToolbarItemOptions(item: ViewerToolbarLocatedItem, controlContainer: HTMLElement, popupContainer: HTMLElement, onMenuItemClick: () => void): dxToolbarItemOptions;
    _createTooltipOptions(tooltip: ViewerToolbarItemTooltip | string, target: dxElement): dxTooltipOptions;
    _fillCssClasses(item: ViewerToolbarItem): Array<string>;
    _validate(item: ViewerToolbarItem): void;
    _createSeparatorItem(item: ViewerToolbarLocatedItem): dxToolbarItem;
}
