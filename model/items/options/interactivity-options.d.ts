/**
* DevExpress Dashboard (interactivity-options.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { TargetDimensions } from '../../enums';
import * as ko from 'knockout';
export declare class FilterableDashboardItemInteractivityOptions extends SerializableModel {
    ignoreMasterFilters: ko.Observable<boolean>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class DashboardItemGroupInteractivityOptions extends FilterableDashboardItemInteractivityOptions {
    isMasterFilter: ko.Observable<boolean>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class DashboardItemBaseInteractivityOptions extends SerializableModel {
    ignoreMasterFilters: ko.Observable<boolean>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class DashboardTabItemInteractivityOptions extends DashboardItemBaseInteractivityOptions {
    isMasterFilter: ko.Observable<boolean>;
    ignoreMasterFilters: ko.Observable<boolean>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class DashboardItemMasterFilterInteractivityOptions extends DashboardItemBaseInteractivityOptions {
    masterFilterMode: ko.Observable<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class DashboardItemDrillDownInteractivityOptions extends DashboardItemBaseInteractivityOptions {
    isDrillDownEnabled: ko.Observable<boolean>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class DashboardItemInteractivityOptions extends DashboardItemMasterFilterInteractivityOptions {
    isDrillDownEnabled: ko.Observable<boolean>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class ChartInteractivityOptions extends DashboardItemInteractivityOptions {
    targetDimensions: ko.Observable<TargetDimensions>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare let _filterItemInteractivityOptionsMeta: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let _groupItemInteractivityOptionsMeta: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let _tabItemInteractivityOptions: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let _baseInteractivityOptionsMeta: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let _dashboardItemInteractivityOptionsMeta: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let _masterFilterInteractivityOptionsMeta: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let _drillDownInteractivityOptionsMeta: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let _chartItemInteractivityOptionsMeta: DxDesigner.Analytics.Utils.ISerializationInfo;
