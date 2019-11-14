/**
* DevExpress Dashboard (_window-definition-editor.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { MeasureCalculationWindowDefinition } from '../../model/data-item/window-definition/measure-calc-window-definition';
import { WindowDefinition } from '../../model/data-item/window-definition/window-definition';
import { SpecificWindowDefinition } from '../../model/data-item/window-definition/specific-calc-window-definition';
import { DataDashboardItem } from '../../model/items/data-dashboard-item';
import { DataSourceBrowser } from '../../common/_data-source-browser';
import { IDashboardSerializationInfo } from '../../model/metadata/_base-metadata';
import * as ko from 'knockout';
export declare enum WindowDefinitionMode {
    Predefined = 0,
    Specific = 1
}
export declare class WindowDefinitionEditor {
    private params;
    value: ko.Observable<MeasureCalculationWindowDefinition>;
    mode: ko.Observable<any>;
    constructor(params: {
        target: ko.Observable<WindowDefinition>;
        dataDashboardItem: ko.Observable<DataDashboardItem>;
        dataSourceBrowser: ko.Observable<DataSourceBrowser>;
    });
    readonly dataSource: {
        value: WindowDefinitionMode;
        displayValue: string;
    }[];
    setValue(newMode: WindowDefinitionMode): void;
    static createPatchSpecificWindowDimensionsInfo: (definition: SpecificWindowDefinition, dataDashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser) => (propertyInfo: IDashboardSerializationInfo) => any;
}
