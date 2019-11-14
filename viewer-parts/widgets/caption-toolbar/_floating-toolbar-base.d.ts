/**
* DevExpress Dashboard (_floating-toolbar-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardCaptionToolbarBase, CaptionToolbar, dxToolbarItem } from './_caption-toolbar-base';
import { DashboardItemCaptionToolbarOptions } from './caption-toolbar-options';
import dxOverlay from 'devextreme/ui/overlay';
import { ViewerToolbarLocatedItem } from './_caption-toolbar-arranger';
export declare class FloatingCaptionToolbarBase extends DashboardCaptionToolbarBase {
    protected _isBottomPosition: boolean;
    protected _floatingPanel: dxOverlay;
    private PREVIEW_TOOLBAR_WIDTH;
    private _maxWidth;
    constructor(_container: HTMLElement, _controlContainer: HTMLElement, _popupContainer: HTMLElement, encodeHtml: boolean, _isBottomPosition: boolean);
    isBottomFloatingTypePosition: boolean;
    update(options: DashboardItemCaptionToolbarOptions): boolean;
    calcHeight(): number;
    onResize(): void;
    showFloatingPanel(): void;
    hideFloatingPanel(): void;
    dispose(): void;
    protected _appendToContainer(toolbarDiv: HTMLElement): HTMLElement;
    protected _updateToolbar(): void;
    protected _repaintFloatingPanel(): void;
    protected _getVisibleItems(): Array<ViewerToolbarLocatedItem>;
    protected _createInstance(): CaptionToolbar;
    protected _getToolbarItems(items: Array<ViewerToolbarLocatedItem>): Array<dxToolbarItem>;
    protected _getToolbarWidth(floadingPanelDiv: HTMLElement): number;
    protected _createFloatingPanel(toolbarDiv: HTMLElement, floadingPanelDiv: HTMLElement, preview: boolean): dxOverlay;
}
