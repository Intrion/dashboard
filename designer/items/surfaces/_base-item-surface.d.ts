/**
* DevExpress Dashboard (_base-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { DisposableObject } from '../../../model/disposable-object';
import { AccordionTab } from '../../_accordion-tab';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { ConfirmDialogViewModel } from '../../_confirm-dialog';
import { IDetailsPropertiesComposer, ISectionSurface } from '../_interfaces';
import { SimpleFilterEditor } from '../../filtering/_filter';
import { PropertiesController } from '../../_properties-controller';
import * as ko from 'knockout';
export declare class BaseItemSurface<T extends DataDashboardItem> extends DisposableObject {
    dashboardItem: T;
    dashboardModel: Dashboard;
    _dataSourceBrowser: DataSourceBrowser;
    protected readonly showDefaultSections: boolean;
    protected fillSections(): void;
    protected extendHiddenDimensionsTabs(tabs: AccordionTab[], model: any): void;
    protected extendHiddenMeasuresTabs(tabs: AccordionTab[], model: any): void;
    constructor(dashboardItem: T, dashboardModel: Dashboard, _dataSourceBrowser: DataSourceBrowser);
    getPropertiesComposer(): IDetailsPropertiesComposer<T>;
    _createFilterEditor(): DxDesigner.Analytics.Widgets.FilterEditor | SimpleFilterEditor;
    showFilterEditor: () => void;
    readonly isOlap: boolean;
    changeDataSource(): void;
    private _changeDataSource;
    saveDataSourceChanges(): void;
    clearDataBindings(): void;
    readonly dataSourceBrowser: any;
    dataSourceName: ko.Observable<string>;
    dataMemberName: ko.Observable<string>;
    dataSourceDisplayText: ko.Computed<string>;
    needSetDataSource: ko.Computed<boolean>;
    changeDataSourcePanelVisible: ko.Observable<boolean>;
    template: string;
    confirmDialogViewModel: ConfirmDialogViewModel;
    propertiesController: PropertiesController;
    sections: ko.ObservableArray<ISectionSurface>;
    filterEditorModel: ko.Observable<DxDesigner.Analytics.Widgets.FilterEditor | SimpleFilterEditor>;
}
