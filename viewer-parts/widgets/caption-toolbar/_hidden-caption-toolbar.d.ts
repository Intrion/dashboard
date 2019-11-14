/**
* DevExpress Dashboard (_hidden-caption-toolbar.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { CaptionToolbar } from '../caption-toolbar/_caption-toolbar-base';
import { DashboardItemCaptionToolbarOptions } from '../caption-toolbar/caption-toolbar-options';
export declare class HiddenCaptionToolbar implements CaptionToolbar {
    element: HTMLElement;
    disabled: boolean;
    calcHeight(options: DashboardItemCaptionToolbarOptions): number;
    calcMinWidth(options: DashboardItemCaptionToolbarOptions): number;
    update(options: DashboardItemCaptionToolbarOptions): boolean;
    onResize(): void;
    dispose(): void;
}
