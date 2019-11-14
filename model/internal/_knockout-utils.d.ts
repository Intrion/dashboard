/**
* DevExpress Dashboard (_knockout-utils.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import * as ko from 'knockout';
import { DisposableType, IDisposable } from '../disposable-object';
export declare type KnockoutEntry<T = any> = ko.Observable<T> | ko.Computed<T>;
export declare function subscribeArrayChange<T>(array: ko.ObservableArray<T>, handlers: {
    added?: (item: T, index?: number) => void;
    deleted?: (item: T) => void;
}): ko.Subscription;
export declare function subscribeWithPrev<T>(target: ko.Subscribable<T>, callback: (oldValue: T, newValue: T) => void): IDisposable[];
export declare function syncArrayHelper<T, U>(sourceArray: ko.ObservableArray<T>, destArray: ko.ObservableArray<U>, addHandler: (value: T) => U): ko.Subscription;
export declare function subscribeToArrayItemProperties<T>(array: ko.ObservableArray<T>, handler: (item: T) => DisposableType | DisposableType[]): {
    dispose: () => void;
};
export declare function subscribeAndPerform<T>(subscribable: ko.Subscribable<T>, action: (value: T) => void): ko.Subscription;
