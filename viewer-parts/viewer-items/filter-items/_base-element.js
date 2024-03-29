﻿/**
* DevExpress Dashboard (_base-element.js)
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
var _base_item_1 = require("../_base-item");
var data_source_1 = require("devextreme/data/data_source");
var array_store_1 = require("devextreme/data/array_store");
var _interactivity_controller_1 = require("../_interactivity-controller");
var _filter_element_data_controller_1 = require("../../../data/data-controllers/_filter-element-data-controller");
var PAGE_SIZE = 100;
var filterElementBaseItem = (function (_super) {
    __extends(filterElementBaseItem, _super);
    function filterElementBaseItem(container, options) {
        return _super.call(this, container, options) || this;
    }
    filterElementBaseItem.prototype.dispose = function () {
        this.widget && this.widget.dispose();
    };
    filterElementBaseItem.prototype._setSelectionUnsafe = function (values) {
        _super.prototype._setSelectionUnsafe.call(this, values);
        this.dataController.update(values, this._isEncodeHtml(), true);
    };
    filterElementBaseItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        var opts = this._getOptions(true);
        this._lock();
        try {
            if (changeExisting && this.widget && this.widget.NAME === this._getWidgetName()) {
                this.widget.option(opts);
            }
            else {
                var div = this._createWidgetDiv();
                element.innerHTML = '';
                element.appendChild(div);
                this.widget = this._createWidget(div, opts);
            }
        }
        finally {
            this._unlock();
        }
        return false;
    };
    filterElementBaseItem.prototype._createWidgetDiv = function () {
        return document.createElement('div');
    };
    filterElementBaseItem.prototype._initializeData = function (newOptions) {
        _super.prototype._initializeData.call(this, newOptions);
        if (this.options) {
            this.options.allowExport = false;
        }
    };
    Object.defineProperty(filterElementBaseItem.prototype, "allowMultiselection", {
        get: function () {
            return true;
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(filterElementBaseItem.prototype, "isMultiSelectable", {
        get: function () {
            return this.dataController ? this.dataController.isMultiselectable() : false;
        },
        enumerable: true,
        configurable: true
    });
    filterElementBaseItem.prototype._isPaneEmpty = function () {
        return _super.prototype._isPaneEmpty.call(this) || !this.hasCaption();
    };
    filterElementBaseItem.prototype.updateInteractivityOptions = function () {
        this.interactivityController.setOptions(this.isMultiSelectable ? _interactivity_controller_1.dashboardSelectionMode.multiple : _interactivity_controller_1.dashboardSelectionMode.single);
        this.interactivityController._allowSelectTuple = function (tuple) { return true; };
    };
    filterElementBaseItem.prototype.getDataSource = function () {
        return new data_source_1.default({
            paginate: true,
            pageSize: PAGE_SIZE,
            requireTotalCount: true,
            store: new array_store_1.default({
                data: this.dataController.dataSource,
                key: _filter_element_data_controller_1.KEY_EXPR
            }),
            searchOperation: 'contains',
            searchExpr: this._getDisplayExpr()
        });
    };
    Object.defineProperty(filterElementBaseItem.prototype, "_enableSearch", {
        get: function () {
            return !!this.options && !!this.options.ViewModel && this.options.ViewModel.EnableSearch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(filterElementBaseItem.prototype, "_isBottomFloatingToolbarPosition", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    filterElementBaseItem.prototype._isBorderRequired = function () {
        return false;
    };
    filterElementBaseItem.prototype._getDisplayExpr = function () {
        return this._isEncodeHtml() ? 'text' : 'html';
    };
    filterElementBaseItem.prototype._getOptions = function (includeActions) {
    };
    filterElementBaseItem.prototype._hasToggleSelectionModeButton = function () {
        return false;
    };
    filterElementBaseItem.prototype._resizeUnsafe = function () {
        _super.prototype._resizeUnsafe.call(this);
        if (this.widget.updateDimensions) {
            this.widget.updateDimensions();
        }
    };
    filterElementBaseItem.prototype._raiseItemClick = function (elements) {
        if (this._isLocked()) {
            return;
        }
        var axisName = this._getAxisNames()[0], newSelectedValues = this.dataController.getInteractionValues(elements, this._getSelectedValues()), tuples = !newSelectedValues ? null : newSelectedValues.map(function (v) { return [{ AxisName: axisName, Value: v }]; });
        this.interactivityController.clickAction(tuples, !newSelectedValues);
    };
    filterElementBaseItem.prototype._mustSelectingFired = function (values) {
        return true;
    };
    filterElementBaseItem.prototype._isUpdating = function (widget) {
        return !widget || widget._updateLockCount > 0;
    };
    filterElementBaseItem.prototype._applySelectionUnsafe = function () {
        if (!!this.options.useNeutralFilterMode)
            _super.prototype._applySelectionUnsafe.call(this);
        var selectedValues = this._getSelectedValues();
        if (!!selectedValues) {
            this.setSelection(selectedValues);
        }
    };
    filterElementBaseItem.prototype._selectTuples = function (tuplesToSelect, unaffectedTuples, isSelect) {
    };
    filterElementBaseItem.prototype._getWidget = function () {
        return this.widget;
    };
    filterElementBaseItem.prototype._getWidgetName = function () {
        return "";
    };
    filterElementBaseItem.prototype._createWidget = function (div, opts) {
        return null;
    };
    return filterElementBaseItem;
}(_base_item_1.baseItem));
exports.filterElementBaseItem = filterElementBaseItem;
