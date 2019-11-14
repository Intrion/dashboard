/**
* DevExpress Dashboard (pie-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { ChartItemBase } from '../chart-item-base';
import { Measure } from '../../data-item/measure';
import { PieValueType, PointLabelPosition, TargetDimensions } from '../../enums';
import { Dimension } from '../../data-item/dimension';
import { MeasureCalculationWindowDefinition } from '../../data-item/window-definition/measure-calc-window-definition';
import * as ko from 'knockout';
export declare class PieItem extends ChartItemBase {
    private __values;
    values: ko.ObservableArray<Measure>;
    labelContentType: ko.Observable<PieValueType>;
    tooltipContentType: ko.Observable<PieValueType>;
    labelPosition: ko.Observable<PointLabelPosition>;
    pieType: ko.Observable<string>;
    showPieCaptions: ko.Observable<boolean>;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _clearBindings(): void;
    protected _getDefaultItemType(): string;
    protected _getTargetDimensions(): TargetDimensions;
    protected _getMasterFilterMode(): string;
    protected _getDrillDownEnabled(): boolean;
    protected _getIgnoreMasterFilter(): boolean;
    protected _getAreMeasuresColoredByDefault(): boolean;
    protected _getIsDimensionColoredByDefault(dimension: Dimension): boolean;
    protected _getLayersCount(): number;
    protected _getLayerName(): string;
    _getDefaultCalculationWindowDefinition(): MeasureCalculationWindowDefinition;
}
