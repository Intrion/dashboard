/**
* DevExpress Dashboard (_flat-item-provider-wrapper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
export declare class FlatItemProviderWrapper implements DxDesigner.Analytics.Utils.IItemsProvider {
    private itemsProvider;
    constructor(itemsProvider: DxDesigner.Analytics.Utils.IItemsProvider);
    getItems(path: DxDesigner.Analytics.Utils.IPathRequest): JQueryPromise<DxDesigner.Analytics.Utils.IDataMemberInfo[]>;
}
