/**
* DevExpress Dashboard (chorolpeth-map-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { MapItem } from './map-item';
import { ValueMap, DeltaMap, ChoroplethMap } from './chorolpeth-map';
import { DataItemLink } from '../../data-item/data-item';
import { Dimension } from '../../data-item/dimension';
import * as ko from 'knockout';
export declare class ChoroplethMapItem extends MapItem {
    static choroplethMapTypesMap: {
        "ValueMap": {
            constructor: typeof ValueMap;
            displayName: string;
            icon: string;
        };
        "DeltaMap": {
            constructor: typeof DeltaMap;
            displayName: string;
            icon: string;
        };
    };
    private __attributeDimension;
    attributeDimension: ko.Observable<Dimension>;
    maps: ko.ObservableArray<ChoroplethMap>;
    attributeName: ko.Observable<string>;
    tooltipAttributeName: ko.Observable<string>;
    includeSummaryValueToShapeTitle: ko.Observable<boolean>;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    _createMap(mapJSON: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer): ChoroplethMap;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    protected _getLayersCount(): number;
    protected _getLayerName(): string;
    protected _updateContentViewModel(content: any): void;
}
