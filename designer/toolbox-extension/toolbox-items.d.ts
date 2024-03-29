﻿/**
* DevExpress Dashboard (toolbox-items.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import * as ko from 'knockout';
export declare class DashboardMenuItem {
    id: string;
    title: string;
    index: number;
    hotKey: number;
    click: () => void;
    template: string;
    selected: ko.Subscribable<boolean>;
    disabled: ko.Subscribable<boolean>;
    hasSeparator: boolean;
    data: any;
    constructor(id: string, title: string, index: number, hotKey: number, click?: () => void);
}
export declare class DashboardToolboxItem {
    name: string;
    click: (itemTypeName: string) => void;
    icon: string;
    title: string;
    type: string;
    disabled: ko.Subscribable<boolean>;
    constructor(name: string, click: (itemTypeName: string) => void, icon: string, title?: string, type?: string);
}
export declare class DashboardToolbarItem {
    name: string;
    click: (itemTypeName: string) => void;
    icon: string;
    title: string;
    template: string;
    disabled: ko.Subscribable<boolean>;
    constructor(name: string, click: (itemTypeName: string) => void, icon?: string, title?: string);
}
export declare class DashboardToolboxGroup {
    name: string;
    title: string;
    index: number;
    items: ko.ObservableArray<DashboardToolboxItem>;
    constructor(name: string, title: string, index: number, ...items: Array<DashboardToolboxItem>);
}
export declare class DashboardToolbarGroup {
    name: string;
    title: string;
    index: number;
    items: ko.ObservableArray<DashboardToolbarItem>;
    constructor(name: string, title: string, index: number, ...items: Array<DashboardToolbarItem>);
}
