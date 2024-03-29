﻿/**
* DevExpress Dashboard (_model-subscriber.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../model/metadata/_base-metadata");
var ko = require("knockout");
var ModelSubscriber = (function () {
    function ModelSubscriber(_model) {
        this._model = _model;
        this.handlers = [];
        this._subscribe(_model);
    }
    ModelSubscriber.changePropertyQuietly = function (property, func) {
        try {
            property[ModelSubscriber.dxSubscriptionSuspend] = true;
            func();
        }
        finally {
            delete property[ModelSubscriber.dxSubscriptionSuspend];
        }
    };
    ModelSubscriber.prototype._unsubscribe = function (model) {
        var _this = this;
        var serializationsInfo = model.getInfo();
        serializationsInfo
            .filter(function (serializationInfo) { return !!serializationInfo.modelName; })
            .forEach(function (serializationInfo) {
            var property = model[serializationInfo.propertyName];
            var propertyValue = ko.unwrap(property);
            if (property[ModelSubscriber.dxSubscription]) {
                var subscription = property[ModelSubscriber.dxSubscription];
                subscription.dispose();
                delete property[ModelSubscriber.dxSubscription];
            }
            if (_this._isPropertySerializeModel(propertyValue)) {
                _this._unsubscribe(propertyValue);
            }
        });
    };
    ModelSubscriber.prototype._subscribe = function (model) {
        var _this = this;
        if (!model.getInfo) {
            return;
        }
        var serializationsInfo = model.getInfo();
        serializationsInfo
            .filter(function (serializationInfo) { return !!serializationInfo.modelName; })
            .forEach(function (serializationInfo) {
            var property = model[serializationInfo.propertyName];
            var category = !!serializationInfo["category"] ? serializationInfo["category"] : _base_metadata_1.PropertyCategory.Data;
            var propertyValue = ko.unwrap(property);
            if (Array.isArray(property)) {
                throw new Error("Non-observable arrays are not supported.");
            }
            if (category === _base_metadata_1.PropertyCategory.NoUpdate)
                return;
            if (Array.isArray(propertyValue) && !property[ModelSubscriber.dxSubscription]) {
                propertyValue.forEach(function (item) { return _this._subscribe(item); });
                property[ModelSubscriber.dxSubscription] = property.subscribe(function (arrayChanges) {
                    arrayChanges.forEach(function (arrayChange) {
                        var changedStatus = 'unknown';
                        if (arrayChange.status === 'added') {
                            _this._subscribe(arrayChange.value);
                            changedStatus = 'added';
                        }
                        if (arrayChange.status === 'deleted') {
                            _this._unsubscribe(arrayChange.value);
                            changedStatus = 'deleted';
                        }
                        if (property[ModelSubscriber.dxSubscriptionSuspend] !== true)
                            _this._propertyChanged(category, arrayChange.value, serializationInfo.propertyName, changedStatus);
                    });
                }, null, "arrayChange");
            }
            else if (ko.isObservable(property) && !property[ModelSubscriber.dxSubscription]) {
                var getSubscribeHandler = function (prevModel) { return function (model) {
                    if (_this._isPropertySerializeModel(prevModel)) {
                        _this._unsubscribe(prevModel);
                    }
                    if (_this._isPropertySerializeModel(model)) {
                        _this._subscribe(model);
                    }
                }; };
                var subscriberHandler = getSubscribeHandler(propertyValue);
                property[ModelSubscriber.dxSubscription] = property.subscribe(function (val) {
                    if (property[ModelSubscriber.dxSubscriptionSuspend] !== true) {
                        _this._propertyChanged(category, model, serializationInfo.propertyName, 'changed');
                    }
                    if (category !== _base_metadata_1.PropertyCategory.NoUpdateByObservableValue) {
                        subscriberHandler(val);
                        subscriberHandler = getSubscribeHandler(val);
                    }
                });
                if (category !== _base_metadata_1.PropertyCategory.NoUpdateByObservableValue && _this._isPropertySerializeModel(propertyValue)) {
                    _this._subscribe(propertyValue);
                }
            }
            else if (!ko.isObservable(property) && _this._isPropertySerializeModel(propertyValue)) {
                _this._subscribe(propertyValue);
            }
        });
    };
    ModelSubscriber.prototype._propertyChanged = function (category, model, propertyName, status) {
        this.handlers.forEach(function (handler) { return handler(category, model, propertyName, status); });
    };
    ModelSubscriber.prototype.registerHandler = function (handler) {
        this.handlers.push(handler);
    };
    ModelSubscriber.prototype._isPropertySerializeModel = function (propertyValue) {
        return propertyValue && propertyValue["getInfo"];
    };
    ModelSubscriber.prototype.dispose = function () {
        this._unsubscribe(this._model);
    };
    ModelSubscriber.dxSubscription = "__dx_notifier_subscription";
    ModelSubscriber.dxSubscriptionSuspend = "__dx_notifier_subscription_suspend";
    return ModelSubscriber;
}());
exports.ModelSubscriber = ModelSubscriber;
