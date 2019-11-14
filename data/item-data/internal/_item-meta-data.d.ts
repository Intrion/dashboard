/**
* DevExpress Dashboard (_item-meta-data.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ItemDataDelta } from '../item-data-definitions';
export declare let deltaValueNames: {
    actualValue: string;
    targetValue: string;
    absoluteVariation: string;
    percentVariation: string;
    percentOfTarget: string;
    mainValue: string;
    subValue1: string;
    subValue2: string;
    isGood: string;
    indicatorType: string;
};
export declare let deltaValueTypes: {
    actualValue: string;
    absoluteVariation: string;
    percentVariation: string;
    percentOfTarget: string;
};
export declare class itemMetaData {
    _metaData: any;
    _data: any;
    constructor(metaData: any);
    initialize(): void;
    _createMeasureInfo(descriptors: any): {
        measures: any[];
        formatByMeasureId: {};
    };
    _createDeltaInfo(): {
        deltas: any[];
        valueIdsByDeltaId: {};
        formatsByDeltaId: {};
    };
    _createAxesInfo(): {
        axes: {};
        levelByDimensionId: {};
        formatByDimensionId: {};
        pivotAreaByAxisName: {};
    };
    getAxes(): any;
    getAxisNames(): any[];
    getPivotAreaByAxisName(name: any): any;
    getColorMeasures(): any;
    getConditionalFormattingMeasures(): any;
    getDimensions(axisName: any): any;
    getMeasures(): any;
    getDeltas(): any;
    getMeasureById(id: any): any;
    getDeltaById(id: any): ItemDataDelta;
    getMeasureFormat(measureId: any): any;
    getDeltaValueIds(deltaId: any): any;
    getDeltaFormats(deltaId: any): any;
    getDeltaValueType(deltaId: any): void;
    getDimensionLevel(dimensionId: any): any;
    getDimensionFormat(dimensionId: any): any;
    getDataMembers(): any;
    getFinalDataType(dataItemId: any): any;
}
