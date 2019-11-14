/**
* DevExpress Dashboard (_aggregated-data-source.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { itemData } from "../../../data/item-data/_item-data";
import { GridDataSourceInfo } from "./_data-inspector-view-model";
export interface AggregatedDataSourceArgs {
    addSparklineTotal: boolean;
    sparklineMeasures: string[];
}
export declare function generateAggregatedSource(itemData: itemData, args: AggregatedDataSourceArgs): GridDataSourceInfo;
