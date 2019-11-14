/**
* DevExpress Dashboard (_list-source.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare class listSource {
    dataSource: any;
    dataMembers: any;
    rowCount: any;
    columnCount: any;
    constructor(dataSource: any, dataMembers: any);
    _wrapIfRequired(dataSource: any, dataMembers: any): any;
    getRowValue(rowIndex: any, dataMember: any): any;
    getFormattedRowValue(rowIndex: any, dataMember: any, formatInfo: any): any;
    getFormattedArgumentRowValue(rowIndex: any, dataMember: any, formatInfo: any): any;
    getColumnIndex(dataMember: any): any;
    getRowCount(): any;
}
