/**
* DevExpress Dashboard (dashboard-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../serializable-model';
import { IDashboardComponent } from '../internal/_dashboard-component-name-generator';
import { ItemState } from '../dashboard-state';
import { Notification } from '../internal/_interfaces';
import { PaneContentHolder } from './_pane-content-holder';
import { PropertyCategory } from '../metadata/_base-metadata';
import { DimensionFilterValues } from '../data-item/_dimension-filter-values';
import * as ko from 'knockout';
export declare type UiStateType = "live" | "empty" | "error" | "loading";
export declare abstract class DashboardItem extends TypedSerializableModel implements IDashboardComponent {
    static _getCommonItemType(itemType: string): string;
    getUniqueNamePrefix(): string;
    name: ko.Observable<string>;
    componentName: ko.Observable<string>;
    showCaption: ko.Observable<boolean>;
    parentContainer: ko.Observable<string>;
    _useNeutralFilterMode: ko.Observable<boolean>;
    _state: ko.Computed<ItemState>;
    _actions: ko.Computed<Array<string>>;
    _uiState: ko.Subscribable<UiStateType>;
    _errorState: ko.Observable<Notification>;
    _viewerItemCreated: ko.Observable<boolean>;
    _paneContentHolder: PaneContentHolder;
    _allowMultiselection: ko.Observable<boolean>;
    private _serverContent;
    protected _dataQueryParams: ko.Computed<any>;
    readonly _caption: string;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer, info?: DxDesigner.Analytics.Utils.ISerializationInfoArray);
    _isInteractivityAllowed(): boolean;
    protected _getLayersCount(): number;
    protected _getLayerName(): string;
    protected _updateContentViewModel(content: any): void;
    protected _updateContentData(content: any): void;
    protected _updateDataQueryParams(params: any): void;
    protected _validateSelection(selection: Array<Array<any>>): void;
    protected _extendContentState(content: any): void;
    _getDisplayFilterValues(limitCount?: number): Array<DimensionFilterValues>;
    _getDisplayFilterValuesExternal(): void;
    _getServerContent(): any;
    _getFullServerContent(): any;
    _subcribeServerContent(handler: (content: any) => void): ko.Subscription;
    _getContentCategories(): PropertyCategory[];
    _getDataQueryParams(): any;
    _subcribeDataQueryParams(handler: (content: any) => void): ko.Subscription;
    _getExportingSelection(): void;
    _setState(parameter: ItemState): void;
}
