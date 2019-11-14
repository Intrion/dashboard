/**
* DevExpress Dashboard (geo-point-map-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { GeoPointMapItemBase } from './geo-point-map-item-base';
import { Measure } from '../../data-item/measure';
import * as ko from 'knockout';
export declare class GeoPointMapItem extends GeoPointMapItemBase {
    private __value;
    value: ko.Observable<Measure>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
