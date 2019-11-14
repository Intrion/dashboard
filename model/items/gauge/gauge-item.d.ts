/**
* DevExpress Dashboard (gauge-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { KpiItem } from '../kpi/kpi-item';
import { Gauge } from './gauge';
import { MeasureCalculationWindowDefinition } from '../../data-item/window-definition/measure-calc-window-definition';
import * as ko from 'knockout';
import { GaugeViewType } from '../../enums';
export declare class GaugeItem extends KpiItem {
    gauges: ko.ObservableArray<Gauge>;
    viewType: ko.Observable<GaugeViewType>;
    showGaugeCaptions: ko.Observable<boolean>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    protected _getLayersCount(): number;
    protected _getLayerName(): string;
    _getDefaultCalculationWindowDefinition(): MeasureCalculationWindowDefinition;
}
