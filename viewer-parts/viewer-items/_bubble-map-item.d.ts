/**
* DevExpress Dashboard (_bubble-map-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { geoPointMapItemBase } from './_geo-point-map-item-base';
import DevExpress from 'devextreme/bundles/dx.all';
export declare class bubbleMapItem extends geoPointMapItemBase {
    constructor(container: HTMLElement, options: any);
    _getMarkerLayers(): DevExpress.viz.MapLayer[];
    _configureMarkerLayers(viewModel: any): any[];
    _getMarkerDataSource(): any[];
    _getMarker(viewModel: any, markerDataSource: any): any;
    _getColorLegend(viewModel: any): any;
    _getWeightLegend(viewModel: any): any;
    _getBubbleTooltip(viewModel: any, weight: any, color: any, pointsCount: any): string;
    _getBubbleRangeStops(colorizer: any, markerDataSource: any): any[];
    _getBubbleWeightRangeStops(markerDataSource: any): any[];
    _getBubbleColors(colorModels: any, defaultColorsCount: any): any;
    _getDefaultBubbleColorizerColors(count: any): any[];
    _getDataPointMeasureIds(): any[];
}
