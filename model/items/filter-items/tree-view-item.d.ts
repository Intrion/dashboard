﻿/**
* DevExpress Dashboard (tree-view-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { FilterElementItemBase } from './filter-element-item-base';
import * as ko from 'knockout';
export declare class TreeViewItem extends FilterElementItemBase {
    autoExpand: ko.Observable<boolean>;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    protected _allowAllValue(): boolean;
    protected _isMultiselectable(): boolean;
}
