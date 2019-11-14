/**
* DevExpress Dashboard (scatter-point-label-options.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { PointLabelOptionsBase } from '../chart/point-label-options';
import { ScatterPointLabelContentType } from '../../enums';
import * as ko from 'knockout';
export declare class ScatterPointLabelOptions extends PointLabelOptionsBase {
    content: ko.Observable<ScatterPointLabelContentType>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
