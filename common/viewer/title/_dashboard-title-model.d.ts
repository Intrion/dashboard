/**
* DevExpress Dashboard (_dashboard-title-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardItemCaptionToolbarOptions, DashboardTitleToolbarOptions } from '../../../viewer-parts/widgets/caption-toolbar/caption-toolbar-options';
import { Dashboard } from '../../../model/dashboard';
import { DisposableObject } from '../../../model/disposable-object';
import { IDashboardTitle } from '../../../viewer-parts/title/_dashboard-title-view';
import { IDashboardTitleContext } from './_title-component';
import * as ko from 'knockout';
export declare let maxFilterValuesCount: number;
export interface TitleComponentOptions {
    toolbarOptions: DashboardItemCaptionToolbarOptions;
    centerAligned?: boolean;
    allowHideEmptyToolbar: boolean;
}
export declare function masterFilterValues(dashboard: Dashboard): any[];
export declare class DashboardTitleModel extends DisposableObject implements IDashboardTitle {
    private context;
    private dashboard;
    private customizeToolbarOptions?;
    onUpdated: JQuery.Callbacks<Function>;
    toolbarOptions: ko.Observable<TitleComponentOptions>;
    showTitle: ko.Computed<boolean>;
    private viewModel;
    private masterFilterValues;
    private parametersExtension;
    private exportExtension;
    private viewerApiExtension;
    private allowShowExportDialog;
    constructor(context: IDashboardTitleContext, dashboard: Dashboard, customizeToolbarOptions?: (options: DashboardTitleToolbarOptions) => void);
    update(): void;
    dispose(): void;
    private _raiseUpdated;
}
