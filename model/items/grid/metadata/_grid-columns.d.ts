/**
* DevExpress Dashboard (_grid-columns.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
export declare let columnType: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let displayMode: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let columnWeight: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let fixedWidth: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let widthType: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let totalsTemplate: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let gridColumnBaseSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
export declare let dimension: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let dimensionDisplayMode: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let gridDimensionColumnSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
export declare let alwaysShowZeroLevel: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let measure: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let gridMeasureColumnSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
export declare let gridColumnDeltaOptions: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let gridColumnActualValue: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let gridColumnTargetValue: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let gridDeltaColumnSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
export declare let showStartEndValues: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let sparkline: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let sparklineOptions: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let gridSparklineColumnSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
export declare let uri: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let displayValue: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare function checkGridUriPattern(value: any): string;
export declare function validateGridUriPattern(value: any): boolean;
export declare function gridValidateUriPattern(uriPattern: any): boolean;
export declare let uriPatternValidationRules: {
    type: string;
    validationCallback: (options: any) => boolean;
    message: string;
}[];
export declare let gridColumnUriPattern: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let gridHyperlinkColumnSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
