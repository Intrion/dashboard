/**
* DevExpress Dashboard (_measure.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { ICollectionEditorSerializationInfo } from '../../metadata/_base-metadata';
import { DashboardLocalizationId } from '../../../data/localization/_default';
export declare let summaryTypeDict: {
    [key in string]: DashboardLocalizationId;
};
export declare let summaryTypeTemplate: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let summaryTypeNumericToAny: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let summaryTypeAttribute: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let summaryTypeNonNumericToNumeric: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let summaryTypeNonNumericToString: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let calculation: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let windowDefinition: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let expression: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let calculations: ICollectionEditorSerializationInfo;
export declare let measureItemSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
