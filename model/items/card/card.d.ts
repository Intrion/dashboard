/**
* DevExpress Dashboard (card.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { CardLayoutTemplate } from './card-layout-template';
import { KpiElement } from '../kpi/kpi-element';
import { CardDeltaOptions } from '../options/delta-options';
import { SparklineOptions } from '../options/sparkline-options';
import * as ko from 'knockout';
import { DataDashboardItem } from '../..';
export declare class Card extends KpiElement {
    private static templateTypes;
    private static _createTemplate;
    type: ko.Observable<string>;
    cardDeltaOptions: CardDeltaOptions;
    sparklineOptions: SparklineOptions;
    showSparkline: ko.Observable<boolean>;
    layoutTemplate: ko.Observable<CardLayoutTemplate>;
    constructor(dataItemProvider: DataDashboardItem, modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _isTypeEmpty(): boolean;
    _setTemplateSwitchingOptions(newTemplate: any): void;
    private _switchToCardDeltaOptions;
    private _switchToKpiDeltaOptions;
}
