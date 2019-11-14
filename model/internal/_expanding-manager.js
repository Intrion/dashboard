/**
* DevExpress Dashboard (_expanding-manager.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _date_utils_1 = require("./_date-utils");
var ExpandingManager = (function () {
    function ExpandingManager() {
        this._expandingParams = undefined;
        this._expandingState = undefined;
    }
    ExpandingManager.prototype.getPivotExpandViewState = function () {
        var state = this._expandingState;
        return state && {
            rows: _date_utils_1.toStringArray(state.rows),
            columns: _date_utils_1.toStringArray(state.columns)
        } || null;
    };
    ExpandingManager.prototype.setExpandingParams = function (expandingParams) {
        this._expandingParams = expandingParams;
    };
    ExpandingManager.prototype.onViewStateChanged = function (expandingState) {
        this._expandingState = expandingState;
    };
    ExpandingManager.prototype.canProvideExpandingState = function () {
        return this._expandingParams || this._expandingState;
    };
    ExpandingManager.prototype.calculateExpandingState = function () {
        var params = this._expandingParams;
        var state = this._expandingState;
        return {
            rows: state && _date_utils_1.toStringArray(state.rows) || [],
            columns: state && _date_utils_1.toStringArray(state.columns) || [],
            values: !!params ? _date_utils_1.toStringArray(params.values) : undefined,
            isColumn: !!params && params.isColumn
        };
    };
    ExpandingManager.prototype.resetExpandingParams = function () {
        this._expandingParams = undefined;
    };
    ExpandingManager.prototype.resetColumnViewState = function () {
        this._expandingState = { rows: this._expandingState.rows, columns: [] };
    };
    ExpandingManager.prototype.resetRowViewState = function () {
        this._expandingState = { rows: [], columns: this._expandingState.columns };
    };
    return ExpandingManager;
}());
exports.ExpandingManager = ExpandingManager;
