/**
* DevExpress Dashboard (events-arguments.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import 'devextreme/ui/widget/ui.widget';
import Widget from 'devextreme/ui/widget/ui.widget';
import { ItemDataAxisPointTuple, ItemDataMeasure, ItemData, ItemDataAxisPoint, ItemDataDelta, ItemDataDimension, ItemUnderlyingData } from '../../data/item-data/item-data-definitions';
import { PrimitiveType } from '../../data/types';
export interface ItemWidgetEventArgs {
    itemName: string;
    getWidget: () => Widget | Element;
}
export interface ItemElementCustomColorEventArgs {
    itemName: string;
    getTargetElement: () => ItemDataAxisPointTuple;
    getMeasures: () => Array<ItemDataMeasure>;
    getColor: () => string;
    setColor: (color: string) => void;
}
export declare type DashboardSelectionMode = 'None' | 'Single' | 'Multiple';
export interface ItemVisualInteractivityEventArgs {
    itemName: string;
    getSelectionMode: () => DashboardSelectionMode;
    setSelectionMode: (value: DashboardSelectionMode) => void;
    isHighlightingEnabled: () => boolean;
    enableHighlighting: (value: boolean) => void;
    getTargetAxes: () => string;
    setTargetAxes: (value: boolean) => void;
    getDefaultSelection(): Array<ItemDataAxisPointTuple>;
    setDefaultSelection(selection: Array<ItemDataAxisPointTuple>): void;
}
export interface ItemClickEventArgs {
    itemName: string;
    getData: () => ItemData;
    getAxisPoint: () => ItemDataAxisPoint;
    getMeasures: () => ItemDataMeasure;
    getDeltas: () => Array<ItemDataDelta>;
    getDimensions: () => Array<ItemDataDimension>;
    requestUnderlyingData: (onCompleted: (data: ItemUnderlyingData) => void, dataMembers: string[]) => void;
}
export interface ItemMasterFilterStateChangedEventArgs {
    itemName: string;
    values: Array<Array<PrimitiveType>>;
}
export interface ItemDrillDownStateChangedEventArgs {
    itemName: string;
    values: Array<PrimitiveType>;
    action: "Down" | "Up";
}
export interface ItemActionAvailabilityChangedEventArgs {
    itemName: string;
}
export interface ItemSelectionChangedEventArgs {
    itemName: string;
    getCurrentSelection: () => Array<ItemDataAxisPointTuple>;
}
export interface SelectedTabPageChangedEventArgs {
    tabContainerName: string;
    selectedPage: string;
    previousPage: string;
}
