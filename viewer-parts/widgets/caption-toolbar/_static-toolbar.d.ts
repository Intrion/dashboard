/**
* DevExpress Dashboard (_static-toolbar.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardCaptionToolbarBase, CaptionToolbar } from './_caption-toolbar-base';
import { DashboardItemCaptionToolbarOptions } from './caption-toolbar-options';
import { ViewerToolbarLocatedItem } from './_caption-toolbar-arranger';
export declare class StaticCaptionToolbar extends DashboardCaptionToolbarBase {
    protected _className: string;
    private _hasBorder;
    private allowHideEmptyToolbar;
    constructor(_container: HTMLElement, _controlContainer: HTMLElement, _popupContainer: HTMLElement, encodeHtml: boolean, _className: string, _hasBorder: boolean, allowHideEmptyToolbar: any);
    calcHeight(options: DashboardItemCaptionToolbarOptions): number;
    calcMinWidth(options: DashboardItemCaptionToolbarOptions): any;
    update(options: DashboardItemCaptionToolbarOptions): boolean;
    protected _getVisibleItems(): Array<ViewerToolbarLocatedItem>;
    protected _createInstance(): CaptionToolbar;
    private _visible;
}
