/**
* DevExpress Dashboard (_clickable-floating-toolbar.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { FloatingCaptionToolbarBase } from './_floating-toolbar-base';
import { DashboardItemCaptionToolbarOptions } from './caption-toolbar-options';
import { CaptionToolbar } from './_caption-toolbar-base';
export declare class ClickableFloatingCaptionToolbar extends FloatingCaptionToolbarBase {
    private static _toolbars;
    protected static registerToolbar(toolbar: ClickableFloatingCaptionToolbar): void;
    protected static unregisterToolbar(toolbar: ClickableFloatingCaptionToolbar): void;
    protected static activateToolbar(toolbar: ClickableFloatingCaptionToolbar): void;
    protected _shieldDiv: HTMLElement;
    constructor(_container: HTMLElement, _controlContainer: HTMLElement, _popupContainer: HTMLElement, encodeHtml: boolean, isBottomPosition: boolean);
    update(options: DashboardItemCaptionToolbarOptions): boolean;
    showFloatingPanel(): void;
    hideFloatingPanel(): void;
    dispose(): void;
    protected _createInstance(): CaptionToolbar;
    protected _appendToContainer(toolbarDiv: HTMLElement): HTMLElement;
    protected _subscribeOnShieldEvents(): void;
    protected _disableShield(): void;
    protected _enableShield(): void;
}
