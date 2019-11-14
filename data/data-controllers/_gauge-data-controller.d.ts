/**
* DevExpress Dashboard (_gauge-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { kpiDataController } from './_kpi-data-controller';
export declare class gaugeDataController extends kpiDataController {
    _gaugeRanges: any;
    _gaugeViewType: any;
    constructor(options: any);
    _iterateKpiItems(delegate: any): void;
    _getGaugeRange(element: any): any;
    _getGaugeValues(element: any): any[];
    _initialize(): void;
}
