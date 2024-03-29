﻿/**
* DevExpress Dashboard (_obsolete-helper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassMemberType = {
    method: 'method',
    property: 'property'
};
function obsoleteWarn(memberType, oldMemberName, newMemberName) {
    return "The " + oldMemberName + " " + memberType + " is obsolete." + (newMemberName ? " Use the " + newMemberName + " " + memberType + " instead." : "");
}
function defineObsoleteProperty(info) {
    Object.defineProperty(info.target, info.memberName, {
        get: function () {
            if (!info.ignoreWarmMessage) {
                var message = info.warmMessage ? info.warmMessage : obsoleteWarn(exports.ClassMemberType.property, info.oldMemberDisplayName, info.newMemberDisplayName);
                console.warn(message);
            }
            return info.action();
        },
        enumerable: false,
        configurable: true
    });
}
exports.defineObsoleteProperty = defineObsoleteProperty;
function defineClassMoved(className, sourceNamespace, destNamespace, sourceNamespaceName, destNamespaceName, additionalInfo) {
    defineObsoleteProperty({
        target: sourceNamespace,
        memberName: className,
        warmMessage: "The " + className + " class was moved from the " + sourceNamespaceName + " to the " + destNamespaceName + ". " + additionalInfo,
        action: function () { return destNamespace[className]; }
    });
}
exports.defineClassMoved = defineClassMoved;
function defineObsoleteMethod(info) {
    info.target[info.memberName] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!info.ignoreWarmMessage) {
            var message = info.warmMessage ? info.warmMessage : obsoleteWarn(exports.ClassMemberType.method, info.oldMemberDisplayName, info.newMemberDisplayName);
            console.warn(message);
        }
        return info.action.apply(info.target, args);
    };
}
exports.defineObsoleteMethod = defineObsoleteMethod;
