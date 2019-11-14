/**
* DevExpress Dashboard (_minimized-clickable-toolbar.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ClickableFloatingCaptionToolbar } from './_clickable-floating-toolbar';
import { CaptionToolbar } from './_caption-toolbar-base';
export declare class MinimizedClickableCaptionToolbar extends ClickableFloatingCaptionToolbar {
    private _previewFloatingPanel;
    private _previewToolbarDiv;
    constructor(_container: HTMLElement, _controlContainer: HTMLElement, _popupContainer: HTMLElement, encodeHtml: boolean, isBottomPosition: boolean);
    showPreviewFloatingPanel(): void;
    hideFloatingPanel(): void;
    dispose(): void;
    protected _createInstance(): CaptionToolbar;
    protected _appendToContainer(toolbarDiv: HTMLElement): HTMLElement;
    protected _subscribeOnShieldEvents(): void;
}
