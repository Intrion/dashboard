﻿/**
* DevExpress Dashboard (_item-change-subscriber.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../model/metadata/_base-metadata");
var disposable_object_1 = require("../../model/disposable-object");
var _model_subscriber_1 = require("./_model-subscriber");
var _knockout_utils_1 = require("../../model/internal/_knockout-utils");
var calculated_field_1 = require("../../model/data-sources/calculated-field");
var ItemChangeSubscriber = (function (_super) {
    __extends(ItemChangeSubscriber, _super);
    function ItemChangeSubscriber(dashboardItem, itemChanged) {
        var _this = _super.call(this) || this;
        _this.dashboardItem = dashboardItem;
        var subscriber = new _model_subscriber_1.ModelSubscriber(_this.dashboardItem);
        subscriber.registerHandler(function (category) { return itemChanged(category); });
        _this.toDispose(subscriber);
        _this.toDispose(_this.dashboardItem._subcribeDataQueryParams(function (newValue) { return itemChanged(_base_metadata_1.PropertyCategory.ClientState); }));
        return _this;
    }
    return ItemChangeSubscriber;
}(disposable_object_1.DisposableObject));
exports.ItemChangeSubscriber = ItemChangeSubscriber;
var ComponentArraySubscriber = (function (_super) {
    __extends(ComponentArraySubscriber, _super);
    function ComponentArraySubscriber(_items, _propertyUniqueName) {
        if (_propertyUniqueName === void 0) { _propertyUniqueName = 'componentName'; }
        var _this = _super.call(this) || this;
        _this._items = _items;
        _this._propertyUniqueName = _propertyUniqueName;
        _this._subscribers = [];
        _this.toDispose(_knockout_utils_1.subscribeArrayChange(_this._items, {
            added: function (item) {
                _this._subscribe(item);
                _this.itemAdded(item);
            },
            deleted: function (item) {
                _this._unsubscribe(item);
                _this.itemDeleted(item);
            }
        }));
        _this._items().forEach(function (item) { return _this._subscribe(item); });
        return _this;
    }
    ComponentArraySubscriber.prototype.itemAdded = function (item) { };
    ComponentArraySubscriber.prototype.itemDeleted = function (item) { };
    ComponentArraySubscriber.prototype._subscribe = function (item) {
        this._subscribers[item[this._propertyUniqueName]()] = this.createSubscriber(item);
    };
    ComponentArraySubscriber.prototype._unsubscribe = function (item) {
        var propertyValue = item[this._propertyUniqueName]();
        !!this._subscribers[propertyValue] && this._subscribers[propertyValue].dispose();
        delete this._subscribers[propertyValue];
    };
    ComponentArraySubscriber.prototype.dispose = function () {
        var _this = this;
        this._items().forEach(function (item) { return _this._unsubscribe(item); });
        _super.prototype.dispose.call(this);
    };
    return ComponentArraySubscriber;
}(disposable_object_1.DisposableObject));
exports.ComponentArraySubscriber = ComponentArraySubscriber;
var ItemsChangeSubscriber = (function (_super) {
    __extends(ItemsChangeSubscriber, _super);
    function ItemsChangeSubscriber(items, _options) {
        var _this = _super.call(this, items) || this;
        _this._options = _options;
        return _this;
    }
    ItemsChangeSubscriber.prototype.itemAdded = function (item) {
        this._options.itemAdded && this._options.itemAdded(item);
    };
    ItemsChangeSubscriber.prototype.itemDeleted = function (item) {
        this._options.itemDeleted && this._options.itemDeleted(item);
    };
    ItemsChangeSubscriber.prototype.createSubscriber = function (item) {
        var _this = this;
        return new ItemChangeSubscriber(item, function (category) { return _this._options.itemChanged(item, category); });
    };
    return ItemsChangeSubscriber;
}(ComponentArraySubscriber));
exports.ItemsChangeSubscriber = ItemsChangeSubscriber;
var ColorSchemeSubscriber = (function (_super) {
    __extends(ColorSchemeSubscriber, _super);
    function ColorSchemeSubscriber(entries, _changed) {
        var _this = _super.call(this, entries) || this;
        _this._changed = _changed;
        return _this;
    }
    ColorSchemeSubscriber.prototype.createSubscriber = function (item) {
        var _this = this;
        var subscriber = new _model_subscriber_1.ModelSubscriber(item);
        subscriber.registerHandler(function (category, model) {
            _this._changed();
        });
        return subscriber;
    };
    ColorSchemeSubscriber.prototype.itemAdded = function (item) {
        this._changed();
    };
    ColorSchemeSubscriber.prototype.itemDeleted = function (item) {
        this._changed();
    };
    return ColorSchemeSubscriber;
}(ComponentArraySubscriber));
exports.ColorSchemeSubscriber = ColorSchemeSubscriber;
var DataSourcesSubscriber = (function (_super) {
    __extends(DataSourcesSubscriber, _super);
    function DataSourcesSubscriber(dataSources, _onDataSourceChanged) {
        var _this = _super.call(this, dataSources) || this;
        _this._onDataSourceChanged = _onDataSourceChanged;
        return _this;
    }
    DataSourcesSubscriber.prototype.createSubscriber = function (dataSource) {
        var _this = this;
        var subscriber = new _model_subscriber_1.ModelSubscriber(dataSource);
        subscriber.registerHandler(function (category, model, propertyName, status) {
            if (model instanceof calculated_field_1.CalculatedField) {
                var calcField = model;
                _this._onDataSourceChanged({
                    dataSource: dataSource,
                    model: model,
                    propertyName: propertyName,
                    status: status,
                    queryName: calcField.dataMember(),
                    fieldName: calcField.name()
                });
            }
            else {
                _this._onDataSourceChanged({
                    dataSource: dataSource,
                    model: model,
                    propertyName: propertyName,
                    status: status
                });
            }
        });
        return subscriber;
    };
    DataSourcesSubscriber.prototype.itemAdded = function (dataSource) {
        this._onDataSourceChanged({
            dataSource: dataSource,
            status: 'added'
        });
    };
    DataSourcesSubscriber.prototype.itemDeleted = function (dataSource) {
        this._onDataSourceChanged({
            dataSource: dataSource,
            status: 'deleted'
        });
    };
    return DataSourcesSubscriber;
}(ComponentArraySubscriber));
exports.DataSourcesSubscriber = DataSourcesSubscriber;
