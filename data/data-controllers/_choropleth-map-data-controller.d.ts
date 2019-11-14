/**
* DevExpress Dashboard (_choropleth-map-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { dataControllerBase } from './_data-controller-base';
export declare class choroplethMapDataController extends dataControllerBase {
    axisHash: any;
    isEmpty: any;
    constructor(options: any);
    _prepare(): void;
    hasRecords(): boolean;
    getDeltaValue(attribute: any, deltaId: any): any;
    getValue(attribute: any, measureName: any): any;
    getDisplayText(attribute: any, measureName: any): any;
    getUniqueValue(attribute: any): any;
    getMinMax(measureName: any): {
        min: any;
        max: any;
    };
    getMeasureDescriptorById(valueId: any): any;
    _getMeasureValue(attribute: any, measureName: any): any;
}
