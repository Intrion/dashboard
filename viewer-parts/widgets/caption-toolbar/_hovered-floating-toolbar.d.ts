﻿/**
* DevExpress Dashboard (_hovered-floating-toolbar.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { FloatingCaptionToolbarBase } from './_floating-toolbar-base';
import { DashboardItemCaptionToolbarOptions } from './caption-toolbar-options';
import { CaptionToolbar } from './_caption-toolbar-base';
export declare class HoveredFloatingCaptionToolbar extends FloatingCaptionToolbarBase {
    constructor(_container: HTMLElement, _controlContainer: HTMLElement, _popupContainer: HTMLElement, encodeHtml: boolean, isBottomPosition: boolean);
    calcMinWidth(options: DashboardItemCaptionToolbarOptions): number;
    dispose(): void;
    protected _appendToContainer(toolbarDiv: HTMLElement): HTMLElement;
    protected _createInstance(): CaptionToolbar;
}
