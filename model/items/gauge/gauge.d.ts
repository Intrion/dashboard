/**
* DevExpress Dashboard (gauge.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { KpiElement } from '../kpi/kpi-element';
import * as ko from 'knockout';
import { DataItemNumericFormat } from '../../data-item/data-item-format';
import { DataDashboardItem } from '../data-dashboard-item';
export declare class Gauge extends KpiElement {
    minimum: ko.Observable<number>;
    maximum: ko.Observable<number>;
    scaleLabelNumericFormat: DataItemNumericFormat;
    constructor(dataItemProvider: DataDashboardItem, modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
