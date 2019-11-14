/**
* DevExpress Dashboard (geo-point-map-item-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { MapItem } from './map-item';
import { DataItemLink } from '../../data-item/data-item';
import { Dimension } from '../../data-item/dimension';
import { PrimitiveType } from '../../../data/types';
import { DimensionFilterValues } from '../../data-item/_dimension-filter-values';
import * as ko from 'knockout';
import { KnockoutEntry } from '../../internal/_knockout-utils';
export declare abstract class GeoPointMapItemBase extends MapItem {
    readonly _actualSelectionValues: KnockoutEntry<Array<Array<any>>>;
    private __latitude;
    private __longitude;
    latitude: ko.Observable<Dimension>;
    longitude: ko.Observable<Dimension>;
    private __tooltipDimensions;
    tooltipDimensions: ko.ObservableArray<Dimension>;
    enableClustering: ko.Observable<boolean>;
    private _selectedClusters;
    _clustersContent: ko.Observable<{
        Cluster: {
            Latitude: number;
            Longitude: number;
        };
        Points: PrimitiveType[][];
    }[]>;
    _processDataRequest: () => void;
    _actualSelectedValues: ko.Computed<PrimitiveType[][]>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
    _getExportingSelection(): any[];
    _getDisplayFilterValues(limitCount?: number): Array<DimensionFilterValues>;
    protected _getSliceDimensions(): Array<DataItemLink>;
    protected _updateContentViewModel(content: any): void;
    _setSelectionData(selection: Array<Array<number>>): void;
    _isTopNEnabled(dataItem: Dimension): boolean;
}
