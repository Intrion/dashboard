/**
* DevExpress Dashboard (_flat-item-provider-wrapper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var FlatItemProviderWrapper = (function () {
    function FlatItemProviderWrapper(itemsProvider) {
        this.itemsProvider = itemsProvider;
    }
    FlatItemProviderWrapper.prototype.getItems = function (path) {
        var _this = this;
        var def = $.Deferred();
        this.itemsProvider.getItems(path).done(function (items) {
            if (!path.fullPath) {
                def.resolve(items);
            }
            else {
                var leafs = items.filter(function (i) { return !i.isList; });
                var nodePromises = items
                    .filter(function (i) { return i.isList; })
                    .map(function (node) {
                    var newPath = {
                        dataSource: path.dataSource,
                        fullPath: path.fullPath + "." + node.name,
                        path: path.path + "." + node.name,
                        id: path.id,
                        pathParts: path.pathParts && path.pathParts.concat(node.name) || undefined,
                        ref: path.ref
                    };
                    return _this.itemsProvider.getItems(newPath);
                });
                if (nodePromises.length) {
                    $.when.apply($, nodePromises).done(function () {
                        var itemArray = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            itemArray[_i] = arguments[_i];
                        }
                        var itemFlatList = itemArray.reduce(function (acc, items) { return acc.concat(items); }, []);
                        def.resolve(leafs.concat(itemFlatList));
                    });
                }
                else {
                    def.resolve(leafs);
                }
            }
        });
        return def.promise();
    };
    return FlatItemProviderWrapper;
}());
exports.FlatItemProviderWrapper = FlatItemProviderWrapper;
