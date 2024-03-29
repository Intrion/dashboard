﻿/**
* DevExpress Dashboard (_base-widget-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare class BaseWidgetItem {
    _options: any;
    _type: any;
    _isSelected: any;
    tag: any;
    _hoverEnabled: any;
    _itemDiv: HTMLElement;
    index: any;
    constructor(options?: any);
    _getDefaultOptions(): {
        cursor: string;
        isSelected: boolean;
        hoverEnabled: boolean;
        style: {
            backgroundColor: string;
            borderStyle: string;
            borderColor: string;
        };
        selectionStyle: {
            backgroundColor: string;
            borderStyle: string;
            borderColor: string;
        };
        hoverStyle: {
            backgroundColor: string;
            borderStyle: string;
            borderColor: string;
        };
    };
    dispose(): void;
    _getStyle(isSelected: any): any;
    select(): void;
    _hover(isHover: any): void;
    clearSelection(): void;
    _disposeClickEvent(): void;
    _disposeHoverEvent(): void;
    setClickHandler(handler: any): void;
    setHoverHandler(handler: any): void;
    draw(width: any, height: any, index: any, commonItemsOptions?: any): HTMLElement;
    initDraw(width?: any, height?: any, index?: any): HTMLElement;
    _applyExtraStyles(): void;
    toggleSelection(): void;
    getWidget(): any;
    finishRender(params?: any): void;
    getItemContainer(): HTMLElement;
    _formStyle(selector: any, cssProperties: any): string;
    getCssStyle(width: any, height: any, _commonItemsOptions: any, prefix: any): string;
    calcCommonItemSpecificOptions(width: any, height: any): any;
    resize(width: any, height: any, index: any, commonItemsOptions?: any): any;
    rerender(drawOptions: any): any;
    detachItem(): any;
    setHoverEnabledState(hoverEnabled: boolean): void;
}
