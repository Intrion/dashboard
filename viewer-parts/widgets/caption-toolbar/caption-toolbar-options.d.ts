﻿/**
* DevExpress Dashboard (caption-toolbar-options.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { dxElement } from "devextreme/core/element";
export interface DashboardTitleToolbarOptions {
    contentItems: Array<ViewerToolbarItem>;
    actionItems: Array<ViewerToolbarItem>;
    navigationItems: Array<ViewerToolbarItem>;
}
export interface DashboardItemCaptionToolbarOptions {
    actionItems: Array<ViewerToolbarItem>;
    staticItems: Array<ViewerToolbarItem>;
    stateItems: Array<ViewerToolbarItem>;
    navigationItems: Array<ViewerToolbarItem>;
}
export interface ViewerToolbarItem {
    type?: "button" | "menu" | "text";
    text?: string;
    icon?: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    menu?: ViewerToolbarItemMenu;
    tooltip?: ViewerToolbarItemTooltip | string;
    hint?: string;
    template?: () => JQuery | Element | string;
    click?: (element: dxElement) => void;
}
export interface ViewerToolbarItemTooltip {
    className?: string;
    template?: (contentElement: dxElement) => JQuery | Element | string;
}
export interface ViewerToolbarItemMenu {
    type: "list" | "icons";
    title?: string;
    items?: Array<string>;
    selectionMode?: 'none' | 'single' | 'multiple';
    selectedItems?: Array<string>;
    columnCount?: number;
    itemClick?: (itemData: Object, itemElement: dxElement, itemIndex: number) => void;
    itemTemplate?: (itemData: Object, itemElement: dxElement, itemIndex: number) => JQuery | Element | string;
}
export declare let dashboardToolbarItemNames: {
    titleFilterText: string;
    titleFilterIcon: string;
    exportMenu: string;
    dashboardTitleImage: string;
    dashboardTitle: string;
    parameters: string;
    itemCaption: string;
    limitVisibleData: string;
    clearMasterFilter: string;
    clearSelection: string;
    drillUp: string;
    values: string;
    multiselection: string;
    initialExtent: string;
    dateTimePeriodMenu: string;
    customDateTimePeriod: string;
    dashboardList: string;
    dashboardFilters: string;
    backButton: string;
    itemFilters: string;
    restoreItem: string;
    maximizeItem: string;
    dataInspector: string;
};
