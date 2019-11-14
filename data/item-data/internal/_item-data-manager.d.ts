/**
* DevExpress Dashboard (_item-data-manager.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { itemMetaData } from './_item-meta-data';
export declare class itemDataManager {
    _dataStorage: any;
    _metaData: any;
    _itemData: any;
    _items: any;
    initialize(itemDataDTO: any): void;
    updateExpandedData(expandedItemDataDTO: any, expandInfo: any): void;
    getDataStorage(): any;
    getItemData(): any;
    getMetaData(): any;
    _createMetaData(metaDataDTO: any): itemMetaData;
}
