/**
* DevExpress Dashboard (_caption-toolbar-arranger.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ViewerToolbarItem, DashboardItemCaptionToolbarOptions } from './caption-toolbar-options';
export interface ViewerToolbarLocatedItem extends ViewerToolbarItem {
    location: 'before' | 'center' | 'after';
    isSeparator?: boolean;
    disabled?: boolean;
}
export declare function arrangeFloatingToolbarItems(itemOptions: DashboardItemCaptionToolbarOptions): Array<ViewerToolbarLocatedItem>;
export declare function arrangeHoveredToolbarItems(itemOptions: DashboardItemCaptionToolbarOptions, containerHovered: boolean, disabled: boolean): Array<ViewerToolbarLocatedItem>;
export declare function arrangeTitleToolbarItems(itemOptions: DashboardItemCaptionToolbarOptions, showStaticItemsOnCenter: boolean): Array<ViewerToolbarLocatedItem>;
export declare function arrangeStaticToolbarItems(itemOptions: DashboardItemCaptionToolbarOptions, disabled: boolean): Array<ViewerToolbarLocatedItem>;
