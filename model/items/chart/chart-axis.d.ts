/**
* DevExpress Dashboard (chart-axis.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { LogarithmicBase } from '../../enums';
import * as ko from 'knockout';
import { DataItemDateTimeFormat, DataItemNumericFormat } from '../..';
export declare class ChartAxis extends SerializableModel {
    reverse: ko.Observable<boolean>;
    visible: ko.Observable<boolean>;
    titleVisible: ko.Observable<boolean>;
    title: ko.Observable<string>;
    numericFormat: DataItemNumericFormat;
    constructor(JSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class ChartAxisX extends ChartAxis {
    enableZooming: ko.Observable<boolean>;
    limitVisiblePoints: ko.Observable<boolean>;
    visiblePointsCount: ko.Observable<number>;
    dateTimeFormat: DataItemDateTimeFormat;
    constructor(JSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class ChartAxisY extends ChartAxis {
    alwaysShowZeroLevel: ko.Observable<boolean>;
    showGridLines: ko.Observable<boolean>;
    logarithmic: ko.Observable<boolean>;
    logarithmicBase: ko.Observable<LogarithmicBase>;
    constructor(JSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class ScatterChartAxisY extends ChartAxisY {
    constructor(JSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class ChartSecondaryAxisY extends ChartAxisY {
    constructor(JSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
