/**
* DevExpress Dashboard (_tab-header-calculator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export interface TabHeadersViewModel {
    widths: Array<number>;
    leftVisibleIndex: number;
    rightVisibleIndex: number;
}
export declare function calcTabHeadersWidth(tabsWidth: Array<number>, containerWidth: number, leftIndex: number, showCaption: boolean): TabHeadersViewModel;
