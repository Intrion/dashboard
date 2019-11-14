/**
* DevExpress Dashboard (map-viewport.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { IViewport } from '../../internal/_interfaces';
import * as ko from 'knockout';
export declare class MapViewport extends SerializableModel {
    topLatitude: ko.Observable<number>;
    bottomLatitude: ko.Observable<number>;
    leftLongitude: ko.Observable<number>;
    rightLongitude: ko.Observable<number>;
    centerPointLatitude: ko.Observable<number>;
    centerPointLongitude: ko.Observable<number>;
    createViewerPaddings: ko.Observable<boolean>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _set(viewport: IViewport, paddings?: boolean): void;
}
