/**
* DevExpress Dashboard (_mobile-layout-master-filters-editor.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ViewerToolbarItem } from '../../viewer-parts/widgets/caption-toolbar/caption-toolbar-options';
import { IMasterFilterItemsProvider } from '../../model/internal/_interfaces';
import { DataDashboardItem } from '../../model/items/data-dashboard-item';
import { IDashboardContext } from '../viewer/_viewer-interfaces';
import { IStandaloneItemBindings } from './_dashboard-standalone-item';
import * as ko from 'knockout';
export declare class MasterFiltersEditorModel {
    addFilterButton(toolbarItems: Array<ViewerToolbarItem>, filterableItem: IMasterFilterItemsProvider): any;
    _target: ko.Observable<IMasterFilterItemsProvider>;
    _visible: ko.Observable<boolean>;
    visible: ko.Computed<boolean>;
    masterItems: ko.Computed<any>;
    show(target: IMasterFilterItemsProvider): void;
    hide(): void;
}
export interface IDisplayFilterValue {
    name: string;
    valuesString: string;
}
export declare class ItemMasterFilterInfo {
    private dashboardItem;
    click: () => void;
    static maxFilterValuesCount: 10;
    constructor(dashboardItem: DataDashboardItem, click: () => void);
    name: ko.Computed<string>;
    filterValues: ko.Computed<Array<IDisplayFilterValue>>;
}
declare class ItemMasterFilterPopupViewModel {
    constructor(heightOffset: number, visible: ko.Subscribable<boolean>, repaintRequest: JQueryCallback);
    visible: ko.Subscribable<boolean>;
    width: () => number;
    height: () => number;
    onInitializing: (e: any) => void;
    onDisposing: (e: any) => void;
}
export declare class ItemMasterFiltersViewModel {
    private model;
    constructor(model: MasterFiltersEditorModel, dashboardContext: IDashboardContext, repaintRequest: JQueryCallback);
    masterItems: ko.Computed<Array<ItemMasterFilterInfo>>;
    masterFilterItem: ko.Observable<IStandaloneItemBindings>;
    showMasterFilterItem: (dashboardItem: DataDashboardItem, dashboardContext: IDashboardContext, repaintRequest: JQueryCallback) => void;
    closeMasterFilterItemPopup: () => void;
    closeMasterFiltersPopup: () => void;
    maximizeFiltersPopup: ko.Observable<boolean>;
    masterFiltersPopup: ItemMasterFilterPopupViewModel;
    masterFilterMaximizedItemPopup: ItemMasterFilterPopupViewModel;
}
export {};
