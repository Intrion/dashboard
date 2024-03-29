﻿/**
* DevExpress Dashboard (_treemap-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { dataControllerBase } from './_data-controller-base';
export declare class treemapDataController extends dataControllerBase {
    elementCustomColor: any;
    last_dimension_id: any;
    nodeHash: any;
    constructor(options: any);
    _prepare(): void;
    getDataSource(): any[];
    getLabel(node: any, encodeHtml?: boolean): any;
    getTooltip(node: any, encodeHtml?: boolean): any;
    getChildrenNodesUniqueValues(value: any): any[];
    _fillChildrenNodesUniqueValues(res: any, node: any): void;
    _getChildren(currentPoint: any, measureIndex: any, groupArgumentDataMembers: any, prevArgumentDataMember: any): any[];
    _createNode(point: any, measureIndex: any, prevArgumentDataMember: any): {
        name: any;
        value: any;
        valueText: any;
        uniqueValue: any;
        format: (value: any) => any;
    };
    _getNodeText(node: any, tileType: any, groupType: any, encodeHtml: any): any;
    _getTextByContentType(contentType: any, argumentText: any, valueText: any, encodeHtml: any): any;
    _getArgumentString(point: any, prevArgumentDataMember: any): any;
    _getColor(point: any, measureIndex: any): any;
    _getElementCustomColor(point: any, color: any, valueId: any): any;
}
