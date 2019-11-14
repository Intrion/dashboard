/**
* DevExpress Dashboard (binding.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IBindingProperty } from "../binding-property";
export declare type DataType = 'Text' | 'DateTime' | 'Bool' | 'Integer' | 'Float' | 'Double' | 'Decimal';
export interface ICustomItemBinding extends IBindingProperty {
    displayName: string;
    array: boolean;
    enableInteractivity?: boolean;
    enableColoring?: boolean;
    constraints?: {
        allowedTypes: Array<DataType>;
    };
    slice?: string;
}
export interface ICustomItemBindingValue {
    displayName: () => string;
    uniqueName: () => string;
}
