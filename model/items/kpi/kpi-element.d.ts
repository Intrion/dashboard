/**
* DevExpress Dashboard (kpi-element.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { IBindingModelProvider } from '../_binding-model';
import { DataItemLink } from '../../data-item/data-item';
import { Measure } from '../../data-item/measure';
import { DeltaOptions } from '../options/delta-options';
import { AbsoluteVariationNumericFormat, PercentVariationNumericFormat, PercentOfTargetNumericFormat } from '../../data-item/data-item-format';
import * as ko from 'knockout';
import { DataDashboardItem } from '../../items/data-dashboard-item';
import { IBindingProperty } from '../binding-property';
export declare class KpiElement extends SerializableModel implements IBindingModelProvider {
    protected __actualValue: DataItemLink;
    protected __targetValue: DataItemLink;
    actualValue: ko.Observable<Measure>;
    targetValue: ko.Observable<Measure>;
    name: ko.Observable<string>;
    deltaOptions: DeltaOptions;
    itemType: ko.Observable<string>;
    absoluteVariationNumericFormat: AbsoluteVariationNumericFormat;
    percentVariationNumericFormat: PercentVariationNumericFormat;
    percentOfTargetNumericFormat: PercentOfTargetNumericFormat;
    _displayNameSeparator: string;
    constructor(dataItemProvider: DataDashboardItem, modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getBindingModel(): Array<IBindingProperty>;
}
