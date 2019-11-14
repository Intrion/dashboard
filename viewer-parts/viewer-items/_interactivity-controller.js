/**
* DevExpress Dashboard (_interactivity-controller.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("../../data/_utils");
var $ = require("jquery");
var Class = require("devextreme/core/class");
exports.dashboardSelectionMode = {
    none: 'None',
    single: 'Single',
    multiple: 'Multiple'
};
exports.interactivityController = Class.inherit({
    ctor: function ctor(getTuples) {
        var that = this;
        that._getTuples = getTuples;
        that.selectionChanged = $.Callbacks();
    },
    clickAction: function (tuples, isEmpty) {
        if (isEmpty === void 0) { isEmpty = false; }
        if (isEmpty) {
            this.selectionChanged.fire(null);
        }
        else if (this.selectionMode !== exports.dashboardSelectionMode.none) {
            var that = this, isMultipleMode = that.selectionMode === exports.dashboardSelectionMode.multiple, currentTuples = isMultipleMode ? that._getTuples().slice() : [], selectedTuples = [], changed = false;
            $.each(tuples, function (index, tuple) {
                if (that._allowSelectTuple(tuple)) {
                    var arrayIndex = isMultipleMode ? _utils_1.checkArrayContainsTuple(currentTuples, tuple) : undefined;
                    if (arrayIndex == undefined) {
                        selectedTuples.push(tuple);
                    }
                    else {
                        currentTuples.splice(arrayIndex, 1);
                    }
                    changed = true;
                }
            });
            if (changed) {
                that.selectionChanged.fire(currentTuples.concat(selectedTuples));
            }
        }
    },
    setOptions: function (selectionMode) {
        this.selectionMode = selectionMode;
    },
    _allowSelectTuple: function (tuple) {
        var allowSelect = true;
        $.each(tuple, function (_, axisValue) {
            if (!_utils_1.allowSelectValue(axisValue.Value)) {
                allowSelect = false;
                return false;
            }
        });
        return allowSelect;
    }
});
