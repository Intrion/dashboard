/**
* DevExpress Dashboard (_color-scheme-entry-creator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ColorSchemeEntry } from '../../../model/colorization/color-scheme-entry';
import { MeasureDefinition } from '../../../model/colorization/measure-definition';
import { DimensionKey } from '../../../model/colorization/dimension-key';
import { Measure } from '../../../model/data-item/measure';
import { Color } from '../../../model/color';
export declare class ColorSchemeEntryCreator {
    constructor();
    static createMeasureKey(dataMember: string, summaryType: string): MeasureDefinition;
    static createMeasureDefinitionFromMeasure(measure: Measure): MeasureDefinition;
    static createMeasureDefinitionCopy(measureKey: MeasureDefinition): MeasureDefinition;
    static createDimensionKey(dataMember: string, groupInterval: string, valueType: string, value: any): DimensionKey;
    addColor(color: Color): ColorSchemeEntryCreator;
    addItemComponentName(name: string): ColorSchemeEntryCreator;
    addPaletteIndex(paletteIndex: number): ColorSchemeEntryCreator;
    addDataSourceName(dataSourceName: string): ColorSchemeEntryCreator;
    addDataMemberName(dataMember: string): ColorSchemeEntryCreator;
    addMeasureKey(dataMember: string, summaryType: string): ColorSchemeEntryCreator;
    addDimensionKey(dataMember: string, groupInterval: string, valueType: string, value: any): ColorSchemeEntryCreator;
    getEntry(): ColorSchemeEntry;
    private _entry;
}
