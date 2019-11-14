/**
* DevExpress Dashboard (_pie-map-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { geoPointMapItemBase } from './_geo-point-map-item-base';
import DevExpress from 'devextreme/bundles/dx.all';
export declare class pieMapItem extends geoPointMapItemBase {
    _pieUniqueArguments: any;
    _pieArgumentDisplayTexts: any;
    _pieArgumentColors: any;
    itemElementCustomColor: JQuery.Callbacks<Function>;
    constructor(container: HTMLElement, options: any);
    _getMarkerLayers(): DevExpress.viz.MapLayer[];
    _configureMarkerLayers(viewModel: any): any[];
    _getPieMapMarker(viewModel: any, markerDataSource: any, pies: any): any;
    _getMarkerDataSource(pies: any, isWeighted: any): any[];
    _getColorLegend(viewModel: any): any;
    _getWeightLegend(viewModel: any): any;
    _getPieSegments(): any[];
    _fillArgumentParams(pieSegment: any): void;
    _getPiesData(pieSegments: any, viewModel: any): {};
    _getPieSegmentCount(pie: any): number;
    _getEmptyValues(length: any): any[];
    _getPieRangeStops(pies: any): any[];
    _getRangeStopIndex(value: any, rangeStops: any): number;
    _getDataPointMeasureIds(): any[];
    _elementCustomColor(eventArgs: any): void;
}
