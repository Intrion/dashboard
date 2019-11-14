/**
* DevExpress Dashboard (coloring-options.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { ColoringMode } from '../../enums';
import * as ko from 'knockout';
export declare class DashboardItemColoringOptions extends SerializableModel {
    useGlobalColors: ko.Observable<boolean>;
    measuresColoringMode: ko.Observable<ColoringMode>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
