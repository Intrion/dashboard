/**
* DevExpress Dashboard (_dashboard-title-toolbar-adapter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { TitleViewModel } from './_title-view-model';
import { DashboardTitleToolbarOptions } from '../widgets/caption-toolbar/caption-toolbar-options';
export declare class DashboardTitleToolbarAdapter {
    static getTitleOptions(titleViewModel: TitleViewModel, masterFilterValues: Array<any>, showExportDialog: (format: any) => void, showParametersDialog: () => void, allowExport: boolean): DashboardTitleToolbarOptions;
    private static _getMasterFilterText;
}
