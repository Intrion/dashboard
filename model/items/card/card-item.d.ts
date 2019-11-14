/**
* DevExpress Dashboard (card-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { KpiItem } from '../kpi/kpi-item';
import { Dimension } from '../../data-item/dimension';
import { Card } from './card';
import { MeasureCalculationWindowDefinition } from '../../data-item/window-definition/measure-calc-window-definition';
import * as ko from 'knockout';
export declare class CardItem extends KpiItem {
    private __sparklineArgument;
    sparklineArgument: ko.Observable<Dimension>;
    cards: ko.ObservableArray<Card>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _clearBindings(): void;
    protected _getDefaultItemType(): string;
    protected _getLayersCount(): number;
    protected _getLayerName(): string;
    _getDefaultCalculationWindowDefinition(): MeasureCalculationWindowDefinition;
    _itemInteractivityByColumnAxis(): boolean;
    _getInteractivityAxisDimensionCount(): number;
}
