﻿/**
* DevExpress Dashboard (chart-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { ChartItemBase } from '../chart-item-base';
import { ChartAxisX } from './chart-axis';
import { ChartLegend } from './chart-legend';
import { ChartPane } from './chart-pane';
import { Dimension } from '../../data-item/dimension';
import { MeasureCalculationWindowDefinition } from '../../data-item/window-definition/measure-calc-window-definition';
import * as ko from 'knockout';
import { TargetDimensions } from '../..';
export declare class ChartItem extends ChartItemBase {
    rotated: ko.Observable<boolean>;
    axisX: ChartAxisX;
    legend: ChartLegend;
    panes: ko.ObservableArray<ChartPane>;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfo[];
    protected _getDefaultItemType(): string;
    protected _updateContentViewModel(content: any): void;
    protected _getTargetDimensions(): TargetDimensions;
    protected _getMasterFilterMode(): string;
    protected _getDrillDownEnabled(): boolean;
    protected _getIgnoreMasterFilter(): boolean;
    protected _getCanColorByDimensions(): boolean;
    protected _getAreMeasuresColoredByDefault(): boolean;
    protected _getIsDimensionColoredByDefault(dimension: Dimension): boolean;
    private _addNewPane;
    private _coloredSeries;
    _getDefaultCalculationWindowDefinition(): MeasureCalculationWindowDefinition;
}
