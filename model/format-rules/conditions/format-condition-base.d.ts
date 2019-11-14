/**
* DevExpress Dashboard (format-condition-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import * as ko from 'knockout';
export declare abstract class FormatConditionBase extends SerializableModel {
    dataType: ko.Observable<string>;
    dateTimeGroupInterval: ko.Observable<any>;
    private _empty;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    isValid(): boolean;
    isRange(): boolean;
    isGradient(): boolean;
    isEmpty: ko.Observable<boolean>;
    getSpecificType: () => any;
    setSpecificType: (type: any) => void;
    init(): void;
}
