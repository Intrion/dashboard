/**
* DevExpress Dashboard (_text-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from './_base-item';
export declare class textItem extends baseItem {
    div: JQuery;
    $textContent: JQuery;
    constructor(container: HTMLElement, options: any);
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    _getWidget(): JQuery<HTMLElement> & Element;
    _setContent(): void;
    _updateDocvariableValues(htmlText: any): any;
}
