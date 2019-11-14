/**
* DevExpress Dashboard (dashboard-tab-page.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DashboardItem } from '../dashboard-item';
import { DashboardItemGroupInteractivityOptions } from '../options/interactivity-options';
export declare class DashboardTabPage extends DashboardItem {
    showItemAsTabPage: ko.Observable<boolean>;
    private _uniqueNamePrefix;
    interactivityOptions: DashboardItemGroupInteractivityOptions;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getUniqueNamePrefix(): string;
    protected _getDefaultItemType(): string;
}
