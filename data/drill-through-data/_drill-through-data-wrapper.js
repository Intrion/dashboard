/**
* DevExpress Dashboard (_drill-through-data-wrapper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _list_source_1 = require("../_list-source");
var DrillThroughDataWrapper = (function () {
    function DrillThroughDataWrapper(drillThroughData) {
        this._drillThroughData = drillThroughData;
    }
    DrillThroughDataWrapper.prototype.initialize = function () {
        var that = this;
        that._errorMessage = this._drillThroughData.ErrorMessage;
        if (that.isDataReceived()) {
            that._data = {};
            that._data.dataMembers = that._drillThroughData.DataMembers;
            that._data.listSource = new _list_source_1.listSource(that._drillThroughData.Data, that._data.dataMembers);
        }
    };
    DrillThroughDataWrapper.prototype.getRowCount = function () {
        return this._data.listSource.getRowCount();
    };
    DrillThroughDataWrapper.prototype.getRowValue = function (rowIndex, columnName) {
        return this._data.listSource.getRowValue(rowIndex, columnName);
    };
    DrillThroughDataWrapper.prototype.getDataMembers = function () {
        return this._data.dataMembers;
    };
    DrillThroughDataWrapper.prototype.isDataReceived = function () {
        return this._drillThroughData && this._drillThroughData.Data != null;
    };
    DrillThroughDataWrapper.prototype.getRequestDataError = function () {
        return this._errorMessage;
    };
    return DrillThroughDataWrapper;
}());
exports.DrillThroughDataWrapper = DrillThroughDataWrapper;
