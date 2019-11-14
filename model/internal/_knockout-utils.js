/**
* DevExpress Dashboard (_knockout-utils.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function subscribeArrayChange(array, handlers) {
    return array.subscribe(function (changes) {
        changes.forEach(function (arrayChange) {
            var change = arrayChange;
            if (change.status === 'added' && handlers.added) {
                handlers.added(change.value, change.index);
            }
            if (change.status === 'deleted' && handlers.deleted) {
                handlers.deleted(change.value);
            }
        });
    }, null, "arrayChange");
}
exports.subscribeArrayChange = subscribeArrayChange;
function subscribeWithPrev(target, callback) {
    var prevValue;
    var disposables = [];
    disposables.push(target.subscribe(function (value) {
        prevValue = value;
    }, null, 'beforeChange'));
    disposables.push(target.subscribe(function (value) {
        callback(prevValue, value);
        prevValue = undefined;
    }));
    return disposables;
}
exports.subscribeWithPrev = subscribeWithPrev;
function syncArrayHelper(sourceArray, destArray, addHandler) {
    destArray(sourceArray.peek().map(function (item) { return addHandler(item); }));
    return sourceArray.subscribe(function (changes) {
        changes.forEach(function (arrayChange) {
            var change = arrayChange;
            if (change.status === 'added') {
                destArray.splice(change.index, 0, addHandler(change.value));
            }
            else if (change.status === 'deleted') {
                destArray.splice(change.index, 1);
            }
        });
    }, null, "arrayChange");
}
exports.syncArrayHelper = syncArrayHelper;
function subscribeToArrayItemProperties(array, handler) {
    var subscriptionInfoList = [];
    var subscribe = function (item) {
        subscriptionInfoList.push({ object: item, subscriptions: [].concat(handler(item) || []) });
    };
    var unsubscribe = function (item) {
        var info = subscriptionInfoList.filter(function (info) { return info.object === item; })[0];
        if (info) {
            info.subscriptions.forEach(function (subscription) { return subscription.dispose(); });
            subscriptionInfoList.splice(subscriptionInfoList.indexOf(info), 1);
        }
    };
    array().forEach(subscribe);
    var arrayChangeSubscribtion = subscribeArrayChange(array, {
        added: subscribe,
        deleted: unsubscribe
    });
    return {
        dispose: function () {
            arrayChangeSubscribtion.dispose();
            arrayChangeSubscribtion = null;
            subscriptionInfoList.forEach(function (info) { return info.subscriptions.forEach(function (subscription) { return subscription.dispose(); }); });
            subscriptionInfoList.splice(0, subscriptionInfoList.length);
        }
    };
}
exports.subscribeToArrayItemProperties = subscribeToArrayItemProperties;
function subscribeAndPerform(subscribable, action) {
    action(subscribable());
    return subscribable.subscribe(action);
}
exports.subscribeAndPerform = subscribeAndPerform;
