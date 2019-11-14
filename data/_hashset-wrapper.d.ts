/**
* DevExpress Dashboard (_hashset-wrapper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare class HashsetWrapper {
    private FNV_prime_32;
    private FNV_offset_basis_32;
    private hashSet;
    constructor(array: any[]);
    contains(item: any): boolean;
    getIntersection(array: any[]): any[];
    indexOf(item: any): number;
    private getItem;
    private getHash;
    private toHash;
}
