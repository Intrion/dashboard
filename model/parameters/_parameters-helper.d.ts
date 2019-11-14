/**
* DevExpress Dashboard (_parameters-helper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare function validateGuid(guid: any): boolean;
export declare let guidValidationRules: {
    type: string;
    validationCallback: (options: any) => boolean;
    message: string;
}[];
export declare class ParameterHelper {
    static getInfoPerType(valueType: any): any[];
    static getEditorType(typeString: string): {
        header?: any;
        content?: any;
        custom?: any;
    };
    static typeValues: any[];
    private static _getTypeValue;
    private static _tryConvertValue;
    static getDefaultTypeValue(type: string): any;
    static convertSingleValue(value: any, type: string, allowNull?: boolean): any;
}
