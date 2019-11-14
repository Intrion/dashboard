/**
* DevExpress Dashboard (_pie-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { chartDataControllerBase } from './_chart-data-controller-base';
export declare class pieDataController extends chartDataControllerBase {
    _measures: any;
    _argumentAxisPoints: any;
    settingsType: any;
    constructor(options: any);
    getPointDisplayTexts(pointTag: any, value: any, percent: any): {
        argumentText: any;
        valueText: any;
        percentText: any;
    };
    isDiscreteArgument(): boolean;
    createDataSource(seriesAxisPoint: any, valueDataMember: any): any[];
    getValueDataMembers(): any;
    getValueDisplayNames(seriesAxisPoint: any, valueDataMemberIndex: any): any;
    _getCorrectZeroValue(value: any): number;
    _getColorDataMemberByMeasureId(valueDataMember: any): any;
    _getColorDataMemberByIndex(index: any): any;
}
