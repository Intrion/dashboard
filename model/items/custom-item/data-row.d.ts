/**
* DevExpress Dashboard (data-row.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export interface ICustomDataRow {
    getColor: (measureBindingName?: string) => Array<string>;
    getDisplayText: (property: string) => Array<string>;
    getValue: (property: string) => Array<any>;
    getUniqueValue: (property: string) => Array<any>;
}
