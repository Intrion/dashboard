/**
* DevExpress Dashboard (_helper-classes.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare class NameGenerator {
    static validateName(object: any, nameCollection: Array<any>, propertyName: string, startIndex?: number, addWhiteSpace?: boolean): void;
    static isValidName(name: string, nameCollection: Array<any>, propertyName: string): boolean;
    static generateName(namePrefix: string, nameCollection: Array<any>, propertyName: string, startIndex?: number, addWhiteSpace?: boolean): string;
}
export declare class Guard {
    static isNotNull(object: any, name: string): void;
}
export declare class EnumManager {
    static getNamesAndValues(enumType: any): {
        name: any;
        value: any;
    }[];
    static getNames(enumType: any): Array<any>;
    static getValues(enumType: any): Array<any>;
    private static _getObjectValues;
}
