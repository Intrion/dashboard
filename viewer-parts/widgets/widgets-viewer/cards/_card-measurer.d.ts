/**
* DevExpress Dashboard (_card-measurer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { cardLayout } from './_card-layout';
export interface ICardSizeProvider {
    calcMinHeight(layout: cardLayout): any;
}
export declare class cardMeasurer implements ICardSizeProvider {
    readonly DEFAULT_MIN_HEIGHT: number;
    static readonly DIGITS_STRING: string;
    static _getImageSpanHeight(width: string, height: string): number;
    static _getTextSpanHeight(fontSize: string, fontFamily: string): number;
    calcMinHeight(layout: cardLayout): number;
}
