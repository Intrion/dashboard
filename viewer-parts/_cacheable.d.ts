﻿/**
* DevExpress Dashboard (_cacheable.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare function resetGlobalSizeCache(): void;
export declare function cacheable(cacheKey: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    value: (...args: any[]) => any;
};
