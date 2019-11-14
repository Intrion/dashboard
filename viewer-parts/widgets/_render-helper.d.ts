/**
* DevExpress Dashboard (_render-helper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import dxScrollView from 'devextreme/ui/scroll_view';
export declare class RenderHelper {
    static html(element: HTMLElement, content: string, encodeHtml: boolean): void;
    static rectangle(color: any, width: any, height: any): any;
    static getActualBorder($element: JQuery): {
        width: number;
        height: number;
    };
    static getActualSize($element: any, collapse?: boolean): {
        width: number;
        height: number;
    };
    static getDefaultPalette(): string[];
    static getScrollable(element: HTMLElement): dxScrollView;
    static updateScrollable(element: HTMLElement): void;
    static wrapScrollable(container: HTMLElement, useNativeScrolling: any, parentOverflow: any, direction: any): HTMLElement;
    static getThemeBaseElement: () => HTMLElement;
    static getElementBox(element: HTMLElement): {
        width: number;
        height: number;
    };
    static processElement($element: JQuery, processElement: () => any): any;
    static getElementBoxFloat(e: Element): {
        width: number;
        height: number;
    };
    static widgetIncidentOccurred(e: any): void;
    static getBorderSizeByClasses(classNames: string[]): {
        width: number;
        height: number;
    };
}
export declare function createFakeObjects(classNames: any, cssOptions: any): {
    firstElement: any;
    lastElement: any;
    remove: () => void;
};
