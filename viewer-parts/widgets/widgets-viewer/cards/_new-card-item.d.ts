/**
* DevExpress Dashboard (_new-card-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { widgetItemCore } from '../../../viewer-items/_widget-viewer-item-core';
import { cardArrangementInfo } from './_card-arrangement-info';
export declare let newCardMeasurements: {
    margin: number;
    padding: number;
    borderWidth: number;
};
export declare class newCardItem {
    private cardPainter;
    private clickHandler;
    private hoverHandler;
    private itemDiv;
    private properties;
    private tag;
    index: number;
    constructor(properties: widgetItemCore, cardIndex: number, viewerOptions: {
        clickHandler: any;
        hoverHandler: any;
    });
    dispose(): void;
    selected(): boolean;
    setHoverEnabledState(hoverEnabled: boolean): void;
    draw(container: JQuery, cardArrangements: cardArrangementInfo): JQuery;
    clearSelection(): void;
    select(): void;
    private hover;
    private setClickHandler;
    private setHoverHandler;
    private afterDraw;
    private applyExtraStyles;
}
