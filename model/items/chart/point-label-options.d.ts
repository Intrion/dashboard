/**
* DevExpress Dashboard (point-label-options.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { PointLabelOrientation, PointLabelOverlappingMode, PointLabelPosition, PointLabelContentType } from '../../enums';
import * as ko from 'knockout';
export declare class PointLabelOptionsBase extends SerializableModel {
    showPointLabels: ko.Observable<boolean>;
    orientation: ko.Observable<PointLabelOrientation>;
    overlappingMode: ko.Observable<PointLabelOverlappingMode>;
    constructor(JSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    grabFrom(options: PointLabelOptionsBase): void;
}
export declare class PointLabelOptions extends PointLabelOptionsBase {
    showForZeroValues: ko.Observable<boolean>;
    position: ko.Observable<PointLabelPosition>;
    contentType: ko.Observable<PointLabelContentType>;
    constructor(JSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    grabFrom(options: PointLabelOptions): void;
}
