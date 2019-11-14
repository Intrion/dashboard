/**
* DevExpress Dashboard (title.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from './serializable-model';
import { DashboardTitleAlignment } from './enums';
import * as ko from 'knockout';
export declare class DashboardTitle extends SerializableModel {
    imageType: ko.Observable<string>;
    text: ko.Observable<string>;
    visible: ko.Observable<boolean>;
    includeMasterFilter: ko.Observable<boolean>;
    alignment: ko.Observable<DashboardTitleAlignment>;
    image64: ko.Observable<string>;
    url: ko.Observable<string>;
    constructor(model: any, serializer?: DxDesigner.Analytics.Utils.IModelSerializer, info?: DxDesigner.Analytics.Utils.ISerializationInfoArray);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    isPropertyVisible(propertyName: string): boolean;
}
