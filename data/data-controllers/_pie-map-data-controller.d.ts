/**
* DevExpress Dashboard (_pie-map-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { geoPointMapDataControllerBase } from './_geo-point-map-data-controller-base';
export declare class pieMapDataController extends geoPointMapDataControllerBase {
    elementCustomColor: any;
    constructor(options: any);
    getPoint(index: any, valueIndex: any): any;
    _getAxisPointDimensionDescriptorId(): any;
    formatValue(value: any): any;
}
