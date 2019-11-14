/**
* DevExpress Dashboard (map-legend.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { MapLegendPosition, WeightedLegendType, MapLegendOrientation } from '../../enums';
import * as ko from 'knockout';
export declare class MapLegendBase extends SerializableModel {
    visible: ko.Observable<boolean>;
    position: ko.Observable<MapLegendPosition>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class WeightedLegend extends MapLegendBase {
    type: ko.Observable<WeightedLegendType>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class MapLegend extends MapLegendBase {
    orientation: ko.Observable<MapLegendOrientation>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
