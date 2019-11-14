/**
* DevExpress Dashboard (_geo-point-map-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { geoPointMapItemBase } from './_geo-point-map-item-base';
import DevExpress from 'devextreme/bundles/dx.all';
export declare class geoPointMapItem extends geoPointMapItemBase {
    constructor(container: HTMLElement, options: any);
    _getMarkerLayers(): DevExpress.viz.MapLayer[];
    _configureMarkerLayers(viewModel: any): any[];
    _getMarkerDataSource(): {
        dotDataSource: any[];
        bubbleDataSource: any[];
    };
    _getDorMarker(viewModel: any, markerDataSource: any): any;
    _getBubbleMarker(viewModel: any, markerDataSource: any): any;
    _getColorLegend(viewModel: any): void;
    _getWeightLegend(viewModel: any): void;
    _getClusterBubbleColor(value: any): "rgb(27, 73, 165)" | "rgb(63, 136, 48)" | "rgb(228, 124, 2)" | "rgb(214, 5, 5)";
    _getClusterBubbleSizeIndex(value: any): number;
    _getDataPointMeasureIds(): any[];
}
