/**
* DevExpress Dashboard (_card-painter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IWidgetItemDataAccessor } from '../../../viewer-items/_widget-viewer-item-core';
import { cardArrangementInfo } from './_card-arrangement-info';
import { cardLayout, cardRow, cardRowElementBase, cardIndicatorElement, cardSparklineElement, cardRowElement } from './_card-layout';
export declare class cardPainter {
    private data;
    constructor(data: IWidgetItemDataAccessor);
    draw(cardArrangements: cardArrangementInfo, layout: cardLayout): JQuery;
    createCardContent(cardArrangements: cardArrangementInfo, layout: cardLayout): JQuery;
    createRows(rowModels: cardRow[], contentWidth: number): JQuery[];
    createRow(elementModels: cardRowElementBase[], rowDiv: JQuery, contentWidth: number): void;
    createElements(elements: cardRowElementBase[], contentWidth: number): JQuery[];
    createIndicatorElement(indicatorElement: cardIndicatorElement): JQuery;
    createSparklineElement(sparklineElement: cardSparklineElement, contentWidth: number): JQuery<HTMLElement>;
    createDataElement(textElement: cardRowElement): JQuery<HTMLElement>;
    setElementColor(element: cardRowElement, elementDiv: JQuery): void;
}
