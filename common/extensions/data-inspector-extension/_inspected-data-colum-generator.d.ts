/**
* DevExpress Dashboard (_inspected-data-colum-generator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { itemData } from "../../../data/item-data/_item-data";
import { ItemDataAxisName, ItemDataMeasure } from "../../../data";
export declare function getSortedAxes(itemData: itemData, skipSparklineAxis?: boolean): ItemDataAxisName[];
export declare function getMeasureColumns(itemData: itemData): ItemDataMeasure[];
export declare function getSortedColumns(itemData: itemData): string[];
