﻿/**
* DevExpress Dashboard (_pane-content-holder.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../metadata/_base-metadata");
var ko = require("knockout");
var categoriesCompatibilityInfo = {};
categoriesCompatibilityInfo[_base_metadata_1.PropertyCategory.Initialize] = [_base_metadata_1.PropertyCategory.Data, _base_metadata_1.PropertyCategory.Initialize, _base_metadata_1.PropertyCategory.Interactivity, _base_metadata_1.PropertyCategory.ClientState, _base_metadata_1.PropertyCategory.Coloring];
categoriesCompatibilityInfo[_base_metadata_1.PropertyCategory.Data] = [_base_metadata_1.PropertyCategory.Data, _base_metadata_1.PropertyCategory.Initialize, _base_metadata_1.PropertyCategory.Interactivity, _base_metadata_1.PropertyCategory.ClientState, _base_metadata_1.PropertyCategory.Coloring];
categoriesCompatibilityInfo[_base_metadata_1.PropertyCategory.Interactivity] = [_base_metadata_1.PropertyCategory.Data, _base_metadata_1.PropertyCategory.Initialize, _base_metadata_1.PropertyCategory.Interactivity, _base_metadata_1.PropertyCategory.ClientState, _base_metadata_1.PropertyCategory.Coloring];
categoriesCompatibilityInfo[_base_metadata_1.PropertyCategory.ClientState] = [_base_metadata_1.PropertyCategory.Data, _base_metadata_1.PropertyCategory.Initialize, _base_metadata_1.PropertyCategory.Interactivity, _base_metadata_1.PropertyCategory.ClientState, _base_metadata_1.PropertyCategory.Coloring];
categoriesCompatibilityInfo[_base_metadata_1.PropertyCategory.Coloring] = [_base_metadata_1.PropertyCategory.Data, _base_metadata_1.PropertyCategory.Initialize, _base_metadata_1.PropertyCategory.Interactivity, _base_metadata_1.PropertyCategory.ClientState, _base_metadata_1.PropertyCategory.Coloring];
var localProcessedCategories = [_base_metadata_1.PropertyCategory.ViewModel];
var categoryContentNames = {
    Data: "data",
    Initialize: "data",
    Interactivity: "data",
    ClientState: "data",
    Map: "map",
    ViewModel: "viewModel",
};
function getCategoryContentName(category) {
    var catName = _base_metadata_1.PropertyCategory[category];
    return categoryContentNames[catName] || "data";
}
exports.getCategoryContentName = getCategoryContentName;
var PaneContentHolder = (function () {
    function PaneContentHolder() {
        var _this = this;
        this._content = ko.observableArray();
        this.valid = ko.computed(function () {
            return _this._content().length && _this._content().filter(function (content) { return content.requestsInProgress() !== 0 || !content.content(); }).length === 0;
        });
    }
    PaneContentHolder.prototype._getContentInfo = function (category) {
        var compatibleCategories = this.getCompatibleCategories(category);
        var catName = getCategoryContentName(compatibleCategories[0]);
        var content = this._content().filter(function (contentItem) { return contentItem.category === catName; })[0];
        if (!content) {
            content = {
                category: catName,
                content: ko.observable(),
                requestsInProgress: ko.observable(0),
                needAnotherRequest: false
            };
            this._content.push(content);
        }
        return content;
    };
    PaneContentHolder.prototype.getContent = function (category) {
        return this._getContentInfo(category).content();
    };
    PaneContentHolder.prototype.isValid = function (category) {
        var content = this._getContentInfo(category);
        return content.requestsInProgress() === 0 && !!content.content();
    };
    PaneContentHolder.prototype.isWaitingForContent = function (category) {
        var contents = category ? [this._getContentInfo(category)] : this._content();
        return contents.some(function (content) { return content.requestsInProgress() !== 0; });
    };
    PaneContentHolder.prototype.getCompatibleCategories = function (category) {
        return categoriesCompatibilityInfo[category] || [category];
    };
    PaneContentHolder.prototype.needRequestContentFromServer = function (category) {
        return localProcessedCategories.indexOf(category) === -1;
    };
    PaneContentHolder.prototype.itemChanged = function (category) {
        var content = this._getContentInfo(category);
        content.needAnotherRequest = this.isWaitingForContent(category);
        content.content(undefined);
    };
    PaneContentHolder.prototype.beginRequest = function (category) {
        var content = this._getContentInfo(category);
        content.requestsInProgress(content.requestsInProgress() + 1);
    };
    PaneContentHolder.prototype.endRequest = function (args) {
        var content = this._getContentInfo(args.category);
        if (!content.needAnotherRequest) {
            content.content(args.response);
        }
        content.needAnotherRequest = false;
        content.requestsInProgress(content.requestsInProgress() - 1);
    };
    return PaneContentHolder;
}());
exports.PaneContentHolder = PaneContentHolder;
