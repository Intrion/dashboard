/**
* DevExpress Dashboard (_arrangement-info.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare let positioningDirection: {
    Vertical: string;
    Horizontal: string;
};
export declare class ArrangementInfo {
    totalItemCount: any;
    itemsOnRowCount: any;
    itemWidth: any;
    itemHeight: any;
    direction: any;
    itemMargin: any;
    options: any;
    itemsOnColumnCount: any;
    constructor(totalItemCount: any, itemsOnRowCount: any, itemWidth: any, itemHeight: any, itemMargin: any, direction: any, options: any);
    getHeight(useMargin: any): number;
    getWidth(useMargin: any): number;
}
