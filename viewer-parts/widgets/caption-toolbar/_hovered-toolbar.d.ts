/**
* DevExpress Dashboard (_hovered-toolbar.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardCaptionToolbarBase, CaptionToolbar } from './_caption-toolbar-base';
import { DashboardItemCaptionToolbarOptions } from './caption-toolbar-options';
import { ViewerToolbarLocatedItem } from './_caption-toolbar-arranger';
export declare class HoveredDashboardCaptionToolbar extends DashboardCaptionToolbarBase {
    private _hasBorder;
    private _containerHovered;
    constructor(_container: HTMLElement, _controlContainer: HTMLElement, _popupContainer: HTMLElement, encodeHtml: boolean, _hasBorder: boolean);
    dispose(): void;
    protected _appendToContainer(toolbarDiv: HTMLElement): HTMLElement;
    update(options: DashboardItemCaptionToolbarOptions): boolean;
    protected _getVisibleItems(): Array<ViewerToolbarLocatedItem>;
    protected _createInstance(): CaptionToolbar;
    protected _processToolbarBeforeGettingSize(toolbar: CaptionToolbar): void;
    private setHoverState;
}
