/**
* DevExpress Dashboard (_viewer-item-factory.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from './viewer-items/_base-item';
export declare class ViewerItemFactory {
    createItem(container: HTMLElement, options: any): baseItem;
}
export declare let defaultViewerItemFactory: ViewerItemFactory;
