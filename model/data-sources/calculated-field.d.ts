﻿/**
* DevExpress Dashboard (calculated-field.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../serializable-model';
import * as ko from 'knockout';
export declare class CalculatedField extends SerializableModel {
    dataMember: ko.Observable<string>;
    fieldType: ko.Observable<string>;
    name: ko.Observable<string>;
    expression: ko.Observable<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
