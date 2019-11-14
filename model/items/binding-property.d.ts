/**
* DevExpress Dashboard (binding-property.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare type DataItemType = 'Measure' | 'Dimension';
export interface IBindingProperty {
    propertyName: string;
    dataItemType: DataItemType;
    emptyPlaceholder: string;
    selectedPlaceholder?: string;
}
