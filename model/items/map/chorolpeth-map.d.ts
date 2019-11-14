/**
* DevExpress Dashboard (chorolpeth-map.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../../serializable-model';
import { IBindingModelProvider, IDataItemProvider } from '../_binding-model';
import { Measure } from '../../data-item/measure';
import { DeltaOptions } from '../options/delta-options';
import { AbsoluteVariationNumericFormat, PercentVariationNumericFormat, PercentOfTargetNumericFormat } from '../../data-item/data-item-format';
import * as ko from 'knockout';
import { DataDashboardItem } from '../../items/data-dashboard-item';
import { IBindingProperty } from '../binding-property';
export declare abstract class ChoroplethMap extends TypedSerializableModel implements IBindingModelProvider {
    name: ko.Observable<string>;
    _displayNameSeparator: string;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    abstract _getBindingModel(): Array<IBindingProperty>;
}
export declare class ValueMap extends ChoroplethMap {
    private __value;
    value: ko.Observable<Measure>;
    valueName: ko.Observable<string>;
    constructor(dataItemProvider: DataDashboardItem, modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getBindingModel(): Array<IBindingProperty>;
    protected _getDefaultItemType(): string;
}
export declare class DeltaMap extends ChoroplethMap {
    private __actualValue;
    private __targetValue;
    actualValue: ko.Observable<Measure>;
    targetValue: ko.Observable<Measure>;
    deltaOptions: DeltaOptions;
    absoluteVariationNumericFormat: AbsoluteVariationNumericFormat;
    percentVariationNumericFormat: PercentVariationNumericFormat;
    percentOfTargetNumericFormat: PercentOfTargetNumericFormat;
    actualValueName: ko.Observable<string>;
    deltaName: ko.Observable<string>;
    constructor(dataItemProvider: IDataItemProvider, modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getBindingModel(): Array<IBindingProperty>;
    protected _getDefaultItemType(): string;
}
