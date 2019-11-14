/**
* DevExpress Dashboard (card-layout.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { CardRow, CardSparklineRow, CardRowBase } from './card-row';
import * as ko from 'knockout';
export declare class CardLayout extends SerializableModel {
    static rowTypes: {
        "CardRow": {
            constructor: typeof CardRow;
        };
        "CardSparklineRow": {
            constructor: typeof CardSparklineRow;
        };
    };
    templateID: ko.Observable<number>;
    minWidth: ko.Observable<number>;
    maxWidth: ko.Observable<number>;
    rows: ko.ObservableArray<CardRowBase>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    createRow(elementJSON: any, serializer: DxDesigner.Analytics.Utils.ModelSerializer): CardRowBase;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    grabFrom(newLayout: CardLayout): void;
}
