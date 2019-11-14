/**
* DevExpress Dashboard (_item-filter-display-name-provider.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _display_name_provider_1 = require("../_display-name-provider");
var $ = require("jquery");
var ItemFilterDisplayNameProvider = (function () {
    function ItemFilterDisplayNameProvider(dashboardItem, dataSourceBrowser) {
        this.dashboardItem = dashboardItem;
        this.dataSourceBrowser = dataSourceBrowser;
    }
    ItemFilterDisplayNameProvider.prototype._mapDataItemProperties = function (getSourceProperty, getTargetProperty, value) {
        var dataItem = this.dashboardItem.dataItems().filter(function (di) { return getSourceProperty(di) === value; })[0];
        var result = "";
        if (dataItem) {
            result = getTargetProperty(dataItem);
        }
        else {
            result = value;
        }
        return $.Deferred().resolve(result).promise();
    };
    ItemFilterDisplayNameProvider.prototype.getDisplayNameByPath = function (path, dataMember) {
        var _this = this;
        return this._mapDataItemProperties(function (dataItem) { return dataItem.uniqueName(); }, function (dataItem) { return _display_name_provider_1.getDataItemDisplayName(_this.dataSourceBrowser, _this.dashboardItem, dataItem); }, dataMember);
    };
    ItemFilterDisplayNameProvider.prototype.getRealName = function (path, displayDataMember) {
        var _this = this;
        return this._mapDataItemProperties(function (dataItem) { return _display_name_provider_1.getDataItemDisplayName(_this.dataSourceBrowser, _this.dashboardItem, dataItem); }, function (dataItem) { return dataItem.uniqueName(); }, displayDataMember);
    };
    return ItemFilterDisplayNameProvider;
}());
exports.ItemFilterDisplayNameProvider = ItemFilterDisplayNameProvider;
