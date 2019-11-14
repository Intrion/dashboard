/**
* DevExpress Dashboard (_widget-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { BaseWidgetItem } from './_base-widget-item';
import { widgetItemCore } from '../../viewer-items/_widget-viewer-item-core';
export declare class WidgetItem extends BaseWidgetItem {
    static ensureOptions(options: any): any;
    _widgetType: any;
    _itemData: any;
    _widget: any;
    constructor(itemData?: widgetItemCore, options?: any);
    dispose(): void;
    _disposeWidget(): void;
    _getDefaultOptions(): any;
    detachItem(): void;
    initDraw(width?: any, height?: any, index?: any): HTMLElement;
    draw(width?: any, height?: any, index?: any): HTMLElement;
    resize(width: any, height: any, index?: any): HTMLElement;
    rerender(drawOptions: any): void;
    getWidget(): any;
}
