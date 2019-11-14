/**
* DevExpress Dashboard (pie-map-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { GeoPointMapItemBase } from './geo-point-map-item-base';
import { DataItemLink } from '../../data-item/data-item';
import { Dimension } from '../../data-item/dimension';
import { Measure } from '../../data-item/measure';
import { MapLegend, WeightedLegend } from './map-legend';
import * as ko from 'knockout';
export declare class PieMapItem extends GeoPointMapItemBase {
    private __argument;
    argument: ko.Observable<Dimension>;
    private __values;
    values: ko.ObservableArray<Measure>;
    isWeighted: ko.Observable<boolean>;
    legend: MapLegend;
    weightedLegend: WeightedLegend;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    protected _getLayersCount(): number;
    protected _getLayerName(): string;
    protected _getSliceDimensions(): Array<DataItemLink>;
    protected _getIsDimensionColoredByDefault(dimension: Dimension): boolean;
    protected _getAreMeasuresColoredByDefault(): boolean;
    protected _getCanColorByMeasures(): boolean;
    protected _getCanColorByDimensions(): boolean;
    _getColorizableDataItemsInfo(): Array<{
        items: Array<DataItemLink>;
        prefixId: string;
    }>;
}
