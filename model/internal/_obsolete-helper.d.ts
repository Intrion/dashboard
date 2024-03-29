﻿/**
* DevExpress Dashboard (_obsolete-helper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export interface ObsoleteMemberInfo {
    target: Object;
    memberName: string;
    oldMemberDisplayName?: string;
    newMemberDisplayName?: string;
    warmMessage?: string;
    ignoreWarmMessage?: boolean;
    action: (...args: any[]) => any;
}
export declare let ClassMemberType: {
    method: string;
    property: string;
};
export declare function defineObsoleteProperty(info: ObsoleteMemberInfo): void;
export declare function defineClassMoved(className: string, sourceNamespace: any, destNamespace: any, sourceNamespaceName: string, destNamespaceName: string, additionalInfo: string): void;
export declare function defineObsoleteMethod(info: ObsoleteMemberInfo): void;
