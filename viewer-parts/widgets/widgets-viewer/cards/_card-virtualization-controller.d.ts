/**
* DevExpress Dashboard (_card-virtualization-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { cardArrangementInfo } from './_card-arrangement-info';
export interface ICardScrollable {
    option: (name: string, value: any) => void;
    scrollOffset: () => {
        top?: number;
        left?: number;
    };
    scrollTo: (args: any) => void;
}
export declare class CardVirtualizationController {
    private table;
    private scrollView;
    private scrollTimeout;
    drawHandler: (startIndex: number, endIndex: number) => void;
    cardArrangements: cardArrangementInfo;
    constructor(table: JQuery, scrollView: ICardScrollable);
    init(cardArrangements: cardArrangementInfo, drawHandler: (startIndex: number, endIndex: number) => void): void;
    drawByScroll(offset: number): void;
    onScroll(args: any): void;
    getSizeParams(): {
        virtualSize: {
            width: number;
            height: number;
        };
        scroll: {
            top: number;
            left: number;
            size: number;
            horizontal: boolean;
            vertical: boolean;
        };
        itemMargin: {
            width: number;
            height: number;
        };
        layoutMeasurement: {
            margin: number;
            contentPadding: number;
        };
    };
    updateScrollableContent(action: () => void): void;
}
