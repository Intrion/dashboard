/**
* DevExpress Dashboard (color-scheme-definition.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDimensionDefinition } from './dimension-key';
import * as ko from 'knockout';
export declare class ColorSchemeDefinition {
    dataSource: string;
    dataMember: string;
    dimensionDefinitions: IDimensionDefinition[];
    colorByMeasures: boolean;
    componentName: string;
    private name;
    key: ko.Computed<string>;
    typeText: ko.Computed<string>;
    dataSourceText: ko.Computed<string>;
    dataItems: ko.Computed<string[]>;
    constructor(dataSource: string, dataMember: string, dimensionDefinitions: IDimensionDefinition[], colorByMeasures?: boolean, componentName?: string, name?: string);
    equals(definition: ColorSchemeDefinition): boolean;
}
