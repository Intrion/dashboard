﻿/**
* DevExpress Dashboard (_dashboard-title-view.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardTitleToolbar } from '../widgets/caption-toolbar/_title-toolbar';
import { TitleViewModel } from './_title-view-model';
export interface DashboardTitleOptions {
    allowExport: boolean;
    showExportDialog: (format: any) => void;
    showParametersDialog: () => void;
}
export interface IDashboardTitle {
    onUpdated?: JQueryCallback;
    update: () => void;
}
export declare class DashboardTitleView {
    onUpdated: JQuery.Callbacks<Function>;
    protected _captionToolbar: DashboardTitleToolbar;
    private _options;
    protected _titleViewModel: TitleViewModel;
    protected readonly _visible: boolean;
    initialize(container: HTMLElement, controlContainer: HTMLElement, encodeHtml: boolean, options: DashboardTitleOptions, titleViewModel: TitleViewModel): void;
    calcHeight(masterFilterValues: Array<any>): number;
    update(masterFilterValues: Array<any>): void;
    resize(): void;
    private _convertToToolbarOptions;
    private _raiseUpdated;
}
