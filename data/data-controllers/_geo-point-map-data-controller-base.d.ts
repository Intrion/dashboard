/**
* DevExpress Dashboard (_geo-point-map-data-controller-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { dataControllerBase } from './_data-controller-base';
export declare class geoPointMapDataControllerBase extends dataControllerBase {
    axisPoints: any;
    constructor(options: any);
    getPoint(index: any, valueIndex?: any): {
        lat: any;
        lon: any;
        latSel: any;
        lonSel: any;
        pointsCount: any;
        tooltipDimensions: any[];
        tooltipMeasures: any[];
    };
    getCount(): any;
    _prepare(): void;
    _getAxisPointDimensionDescriptorId(): any;
    _getMeasure(index: any, measureName: any): any;
    _getMeasureValue(index: any, measureName: any): any;
    _getMeasureDisplayText(index: any, measureName: any): any;
    _getLatitude(index: any): any;
    _getLatitudeValue(index: any): any;
    _getLatitudeUniqueValue(index: any): any;
    _getLongitude(index: any): any;
    _getLongitudeValue(index: any): any;
    _getLongitudeUniqueValue(index: any): any;
    _getPointsCount(index: any): any;
    _getTooltipDimensions(index: any): any[];
    _getTooltipMeasures(index: any): any[];
    _getAxisPoint(index: any): any;
}
