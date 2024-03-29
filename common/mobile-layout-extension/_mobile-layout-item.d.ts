﻿/**
* DevExpress Dashboard (_mobile-layout-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDashboardContext, DashboardItemContext } from '../viewer/_viewer-interfaces';
import { DashboardItem } from '../../model/items/dashboard-item';
import { FullscreenItemModel } from '../viewer/_viewer';
import { baseItem } from '../../viewer-parts/viewer-items/_base-item';
import * as ko from 'knockout';
export declare class MobileLayoutItemViewModel {
    dashboardContext: IDashboardContext;
    repaintRequest: JQueryCallback;
    dashboardItem: DashboardItem;
    private _fullscreenItemModel;
    _cachedItemWidth: number;
    _swipeToActionCoef: number;
    itemOffsetInPixels: ko.Observable<number>;
    actionReadyCoef: ko.Computed<number>;
    isReadyForAction: ko.Computed<boolean>;
    maximizeIconOpacity: ko.Computed<number>;
    readonly canMaximizeItem: boolean;
    _reset(): void;
    constructor(dashboardContext: IDashboardContext, repaintRequest: JQueryCallback, dashboardItem: DashboardItem, _fullscreenItemModel: FullscreenItemModel);
    _performShowFullscreenItem(): void;
    click: (data: any, args: any) => void;
    selectItem: (data: any, args: any) => void;
    unselectItem: (data: any, args: any) => void;
    swipestart: (data: any, args: any) => void;
    swipeupdate: (data: any, args: any) => void;
    swipeend: (data: any, args: any) => void;
    localContext: DashboardItemContext;
    _getStandaloneItemElement(element: HTMLElement): HTMLElement;
}
export declare function setCardAutoArrangementMode(item: DashboardItem, options: any): void;
export declare function customizeMobileViewerItems(viewerItem: baseItem): void;
