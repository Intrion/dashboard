/**
* DevExpress Dashboard (_popup-menu-creator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import 'devextreme/ui/tile_view';
import { ViewerToolbarItemMenu } from './caption-toolbar-options';
import { Options as dxTileViewOptions } from 'devextreme/ui/tile_view';
import { Options as dxListOptions } from 'devextreme/ui/list';
export declare class PopupMenuCreator {
    private static _icon_menu_element_size;
    static toggleMenu(element: HTMLElement, menu: ViewerToolbarItemMenu, container: HTMLElement, controlContainer: HTMLElement, onMenuItemClick?: () => void): void;
    private static _createPopoverOptions;
    static _createTileViewOptions(menu: ViewerToolbarItemMenu, onItemClick: (data: any) => void): dxTileViewOptions;
    static _createListOptions(menu: ViewerToolbarItemMenu, onItemClick: (data: any) => void): dxListOptions;
    private static _iconItemTemplate;
    private static _getPopupContainer;
}
