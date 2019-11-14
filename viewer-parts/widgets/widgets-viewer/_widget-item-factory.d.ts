/**
* DevExpress Dashboard (_widget-item-factory.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DOMComponent from 'devextreme/core/dom_component';
export declare let widgetItemFactory: {
    createWidget: (widgetType: string, container: HTMLElement, options: any) => DOMComponent;
    getAdditionalOptions: (widgetType: any, container: any, options: any) => any;
};
