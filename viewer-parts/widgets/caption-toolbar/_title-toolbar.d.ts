/**
* DevExpress Dashboard (_title-toolbar.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardCaptionToolbarBase, CaptionToolbar } from './_caption-toolbar-base';
import { DashboardItemCaptionToolbarOptions } from './caption-toolbar-options';
import { ViewerToolbarLocatedItem } from './_caption-toolbar-arranger';
export declare class DashboardTitleToolbar extends DashboardCaptionToolbarBase {
    private allowHideEmptyToolbar;
    private _optionalClass?;
    private _showStaticItemsOnCenter;
    protected readonly _staticItemsClass: string;
    constructor(_container: HTMLElement, _controlContainer: HTMLElement, _popupContainer: HTMLElement, encodeHtml: boolean, allowHideEmptyToolbar?: boolean, _optionalClass?: any);
    calcHeight(options: DashboardItemCaptionToolbarOptions): number;
    update(options: DashboardItemCaptionToolbarOptions, showStaticItemsOnCenter?: boolean): boolean;
    protected _getVisibleItems(): Array<ViewerToolbarLocatedItem>;
    protected _createInstance(): CaptionToolbar;
    private _visible;
}
