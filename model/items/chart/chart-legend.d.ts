/**
* DevExpress Dashboard (chart-legend.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { ChartLegendOutsidePosition, ChartLegendInsidePosition } from '../../enums';
import * as ko from 'knockout';
export declare class ChartLegend extends SerializableModel {
    outsidePosition: ko.Observable<ChartLegendOutsidePosition>;
    insidePosition: ko.Observable<ChartLegendInsidePosition>;
    isInsideDiagram: ko.Observable<boolean>;
    visible: ko.Observable<boolean>;
    constructor(JSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
