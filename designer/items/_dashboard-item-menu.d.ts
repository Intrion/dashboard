/**
* DevExpress Dashboard (_dashboard-item-menu.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DisposableObject } from '../../model/disposable-object';
import { DashboardSurface } from '../../common/_dashboard-surface';
import { LayoutItem } from '../../common/viewer/layout/_layout';
import { PropertiesController } from '../_properties-controller';
import { SurfaceItemsFactory } from './_section-descriptors';
import { BaseItemSurface } from './surfaces/_base-item-surface';
import * as ko from 'knockout';
export declare var DashboardItemMenuSizes: {
    BindingPanelPanelWidth: number;
    OptionsPanelWidth: number;
};
export interface IContextPopupMenu {
    menuItemId: string;
    icon: string;
    title?: string;
    hint?: string;
    templateName: string;
    popoverClass?: string;
    panelWidth: ko.Observable<number> | number;
    detailVisible: ko.Observable<boolean>;
    detailData: any;
    customData?: any;
    index?: number;
}
export interface IDashboardItemMenu {
    contextMenuItems: ko.ObservableArray<IContextPopupMenu>;
}
export declare class ItemMenuViewModel extends DisposableObject implements IDashboardItemMenu {
    surface: DashboardSurface;
    layoutItem: LayoutItem;
    private _positionCalculator;
    propertiesController: PropertiesController;
    surfaceItemsFactory: SurfaceItemsFactory;
    constructor(surface: DashboardSurface, layoutItem: LayoutItem, _positionCalculator: ItemMenuPositionCalculator, propertiesController: PropertiesController, surfaceItemsFactory: SurfaceItemsFactory);
    menuItemClick: (menuItem: IContextPopupMenu) => void;
    selectedItemSurface: BaseItemSurface<any>;
    contextMenuItems: ko.ObservableArray<IContextPopupMenu>;
    contextMenuItemsSorted: ko.PureComputed<IContextPopupMenu[]>;
    menuItemDetailVisible: ko.PureComputed<boolean>;
    propertiesPanelStyle: ko.Computed<{
        width: string;
        marginLeft: string;
    }>;
    verticalPosition: ko.Observable<"center" | "top" | "bottom">;
    isLeft: ko.Observable<boolean>;
    positionMy: ko.Computed<"left" | "right">;
    positionAt: ko.Computed<"left" | "right">;
    _recalculateVerticalPosition: () => void;
    _recalculateIsLeft: () => void;
    deleteCurrentItem(): void;
    hideBindingProperties: () => void;
    hideBindingPanel: () => void;
    isSecondaryPanelVisible: ko.Observable<boolean>;
    __secondaryPanelVisibleTimeout: number;
    initForFirstShown: (options: any) => void;
    repaintHandlers: any[];
    popupInitialized: (args: any) => void;
    _addRepaintHandler(handler: any): void;
    dispose(): void;
}
export declare class ItemMenuPositionCalculator {
    $element: JQuery;
    $layoutRoot: JQuery;
    private _isValidElement;
    constructor(element: HTMLElement);
    calculateIsLeft(): boolean;
    calculateVPosition(): ItemMenuPosition;
}
export declare type ItemMenuPosition = "center" | "top" | "bottom";
