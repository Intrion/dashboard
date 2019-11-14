/**
* DevExpress Dashboard (_minimized-hovered-toolbar.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { FloatingCaptionToolbarBase } from './_floating-toolbar-base';
import { DashboardItemCaptionToolbarOptions } from './caption-toolbar-options';
import { CaptionToolbar } from './_caption-toolbar-base';
export declare enum MinimizedToolbarState {
    Hidden = 0,
    Minimim = 1,
    Maximim = 2
}
export declare class MinimizedHoveredCaptionToolbar extends FloatingCaptionToolbarBase {
    private _previewFloatingPanel;
    private _previewToolbarDiv;
    private _toolbarState;
    private _containerHovered;
    private _onContainerHovered;
    private _onContainerLeave;
    private _onPreviewHovered;
    private _onToolbarLeave;
    private readonly hasItems;
    constructor(_container: HTMLElement, _controlContainer: HTMLElement, _popupContainer: HTMLElement, encodeHtml: boolean, isBottomPosition: boolean);
    calcMinWidth(options: DashboardItemCaptionToolbarOptions): number;
    dispose(): void;
    onResize(): void;
    protected _appendToContainer(toolbarDiv: HTMLElement): HTMLElement;
    protected _repaintFloatingPanel(): void;
    private _showPreviewFloatingPanel;
    private _hidePreviewFloatingPanel;
    protected _createInstance(): CaptionToolbar;
}
