/**
* DevExpress Dashboard (_events-helper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { itemData } from '../../data/item-data/_item-data';
import { ItemClickEventArgs, ItemSelectionChangedEventArgs, ItemWidgetEventArgs, ItemElementCustomColorEventArgs, ItemVisualInteractivityEventArgs } from './events-arguments';
export declare let eventsHelper: {
    createItemEventArgs: (itemName: any, dataPoint: any, state: any, itemData: itemData, requestUnderlyingDataFunc: any) => ItemClickEventArgs;
    createItemSelectionChangedEventArgs: (name: any, tuples: any, itemData: any) => ItemSelectionChangedEventArgs;
    createWidgetEventArgs: (name: any, widget: any) => ItemWidgetEventArgs;
    createItemElementCustomColorEventArgs: (itemName: any, eventArgs: any, itemData: any) => ItemElementCustomColorEventArgs;
    createDefaultCustomInteractivityOptions: () => {
        selectionMode: string;
        hoverEnabled: boolean;
        targetAxes: any[];
        defaultSelectedValues: any[];
    };
    ensureCustomInteractivityOptions: (interactivityOptions: any, interactivityEnable: any, itemData: any) => {
        selectionMode: any;
        hoverEnabled: any;
        targetAxes: any;
        defaultSelectedValues: any;
    };
    createItemInteractivityEventArgs: (itemName: any, interactivityOptions: any, itemData: any) => ItemVisualInteractivityEventArgs;
};
