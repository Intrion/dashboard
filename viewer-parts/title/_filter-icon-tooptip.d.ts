/**
* DevExpress Dashboard (_filter-icon-tooptip.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare let titleTooltipClasses: {
    root: string;
    list: string;
    listText: string;
    subList: string;
    subListItem: string;
};
export declare class FilterIconTooltip {
    private static FILTER_LIST_SPACE;
    private static DEFAULT_LINE_HEIGHT;
    static getTooltipContent(contentElement: JQuery, masterFilterValues: Array<any>): JQuery<HTMLElement>;
    private static _calcMaxFilterListValues;
    private static _calcMaxFilterValues;
    private static _calcMaxHeight;
}
