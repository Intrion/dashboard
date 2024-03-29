﻿/**
* DevExpress Dashboard (_card-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { BaseWidgetItem } from '../_base-widget-item';
import { Options as dxSparklineOptions } from 'devextreme/viz/sparkline';
export declare let cardValue1Counter: number;
export declare class CardItem extends BaseWidgetItem {
    data: any;
    title: any;
    subTitle: any;
    sparklineOptions: dxSparklineOptions;
    variableValue1: any;
    variableValue2: any;
    mainValue: any;
    indicator: any;
    subtitleDotsIndex: any;
    _subtitleDotsIndex: any;
    static ensureOptions(options: any): any;
    constructor(item: any, options: any);
    draw(widthCard: any, heightCard: any, cardIndex: any, commonItemsOptions: any): HTMLElement;
    resize(width: any, height: any, index: any, commonItemsOptions: any): HTMLElement;
    getCssStyle(width: any, height: any, commonItemsOptions: any, prefix: any): string;
    private static calcFonts;
    calcCommonItemSpecificOptions(width: any, height: any): {
        paddings: any;
        sparklineHeight: number;
        fontSizes: {
            title: number;
            subTitle: number;
            mainValue: number;
            variableValue1: number;
            variableValue2: number;
        };
        oneRowHeight: any;
    };
    dispose(): void;
    _addTooltip(itemDiv: HTMLElement, containerId: any, tooltipPrefix: any, text: any, index: any): void;
    _getDefaultOptions(): any;
    _getText(classText: any): any;
    _getClassFromIndicator(type: any, hasPositiveMeaning: any, useDefaultColor: any): any;
    _getCardStyle(isSelected: any): any;
    _getValueClassName(classText: any): any;
    _setSubtitleDotsIndex(index: any): void;
    _getEllipsisText(inputText: any, commonItemsOptions: any, containerWidth: any): any;
}
