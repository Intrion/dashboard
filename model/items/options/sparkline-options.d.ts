/**
* DevExpress Dashboard (sparkline-options.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import * as ko from 'knockout';
import { SparklineViewType } from '../../enums';
export declare class SparklineOptions extends SerializableModel {
    viewType: ko.Observable<SparklineViewType>;
    highlightMinMaxPoints: ko.Observable<boolean>;
    highlightStartEndPoints: ko.Observable<boolean>;
    constructor(JSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
