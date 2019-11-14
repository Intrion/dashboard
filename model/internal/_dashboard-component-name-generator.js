/**
* DevExpress Dashboard (_dashboard-component-name-generator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _helper_classes_1 = require("./_helper-classes");
var DashboardUniqueNameGenerator = (function () {
    function DashboardUniqueNameGenerator(_propertyName, _startIndex) {
        var collections = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            collections[_i - 2] = arguments[_i];
        }
        var _this = this;
        this._propertyName = _propertyName;
        this._startIndex = _startIndex;
        this._disposables = [];
        this._componentsCollections = collections;
        this._componentsCollections.map(function (collection) {
            collection().forEach(function (item) { return _this._ensureUniqueName(item); });
            _this._disposables.push(collection.subscribe(function (changes) {
                changes.forEach(function (itemChange) {
                    var change = itemChange;
                    if (change.status === 'added') {
                        _this._ensureUniqueName(change.value);
                    }
                });
            }, null, 'arrayChange'));
        });
    }
    DashboardUniqueNameGenerator.prototype._ensureUniqueName = function (item) {
        var affectedItems = this._componentsCollections.reduce(function (result, collection) { return result.concat(collection()); }, []), itemIndex = affectedItems.indexOf(item), uniqueName = item[this._propertyName]();
        affectedItems.splice(itemIndex, 1);
        if (!!uniqueName && !_helper_classes_1.NameGenerator.isValidName(uniqueName, affectedItems, this._propertyName))
            throw new Error("Invalid Name \"" + uniqueName + "\": An item with the same name already exists. Check the name or set it to 'undefined' to generate a unique name automatically.");
        if (!uniqueName) {
            item[this._propertyName](_helper_classes_1.NameGenerator.generateName(item.getUniqueNamePrefix(), affectedItems, this._propertyName, this._startIndex));
        }
    };
    DashboardUniqueNameGenerator.prototype.dispose = function () {
        this._disposables.map(function (disposable) { return disposable.dispose(); });
    };
    return DashboardUniqueNameGenerator;
}());
exports.DashboardUniqueNameGenerator = DashboardUniqueNameGenerator;
