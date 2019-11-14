﻿/**
* DevExpress Dashboard (card-calc-window-definition.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { MeasureCalculationWindowDefinition } from './measure-calc-window-definition';
import { CardWindowDefinitionMode } from '../../enums';
import * as ko from 'knockout';
export declare class CardWindowDefinition extends MeasureCalculationWindowDefinition {
    definitionMode: ko.Observable<CardWindowDefinitionMode>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    equals(def: any): boolean;
}
