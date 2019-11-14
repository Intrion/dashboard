/**
* DevExpress Dashboard (_dimension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DateTimeGroupInterval, DimensionTopNMode } from '../../enums';
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DashboardLocalizationId } from '../../../data/localization/_default';
export declare let dateTimeGroupIntervalsDict: {
    [key in DateTimeGroupInterval]: DashboardLocalizationId;
};
export declare let dimensionGroupIndex: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let dateTimeGroupInterval: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let rangeDateTimeGroupInterval: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let sortOrderBase: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let sortOrderOlap: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let sortOrderNonOlap: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let sortMode: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let textGroupInterval: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let isDiscreteNumericScale: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let groupChildValues: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let coloringMode: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let sortMeasure: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let realSortMode: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let topNOptionsEnabled: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let topNOptionsModeValues: {
    [key in DimensionTopNMode]: DashboardLocalizationId;
};
export declare let topNOptionsMode: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let topNOptionsCount: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let topNOptionsMeasure: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let topNOptionsShowOthers: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let topNOptionsSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
export declare let dimensionItemSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
