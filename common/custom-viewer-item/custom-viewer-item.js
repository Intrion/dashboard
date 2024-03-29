﻿/**
* DevExpress Dashboard (custom-viewer-item.js)
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
var _base_item_1 = require("../../viewer-parts/viewer-items/_base-item");
var _utils_1 = require("../../data/_utils");
var _common_1 = require("../../data/_common");
var _utils_2 = require("../../data/_utils");
var ko = require("knockout");
var $ = require("jquery");
var CustomItemViewer = (function (_super) {
    __extends(CustomItemViewer, _super);
    function CustomItemViewer(model, container, options) {
        var _this = _super.call(this, _utils_1.$unwrap(container), options) || this;
        _this.iterateData = function (action) {
            _this.model.iterateData(action);
        };
        _this.canMasterFilter = function (row) {
            if (!_this.model._isMasterFilter())
                return false;
            if (!!row) {
                var preparedRow = _this._prepareRow(_this._getUniqueValues(row));
                if (!_utils_1.allowSelectValue(preparedRow))
                    return false;
            }
            return true;
        };
        _this.canDrillDown = function (row) {
            if (!_this.model._isDrillDownEnabled() || !_this._canPerformDrillDown())
                return false;
            if (!_this.model._isMasterFilter())
                return true;
            if (_this._canSetMultipleMasterFilter() && _this.allowMultiselection)
                return false;
            if (!!row) {
                var values = _this._getUniqueValues(row), level = values.length;
                if (level >= _this.model.interactivityTargets().length)
                    return false;
                return _this.isSelected(row);
            }
            return true;
        };
        _this.setMasterFilter = function (row) {
            if (_this.model._isMasterFilter()) {
                var selection = [];
                if (!!row) {
                    var preparedRow = _this._prepareRow(_this._getUniqueValues(row));
                    if (!_utils_1.allowSelectValue(preparedRow))
                        return false;
                    selection.push(preparedRow);
                    if (_this._canSetMultipleMasterFilter() && _this.allowMultiselection) {
                        var currentSelection = _this.model._actualSelectionValues() || [];
                        if (_utils_1.arrayContains(currentSelection, preparedRow))
                            selection = currentSelection.filter(function (row) { return !_utils_1.arrayEquals(row, preparedRow); });
                        else
                            selection = currentSelection.concat(selection);
                    }
                }
                var name = _this.model.componentName();
                if (selection.length > 0) {
                    var action = _this._canSetMultipleMasterFilter() ? _common_1.viewerActions.setMultipleValuesMasterFilter : _common_1.viewerActions.setMasterFilter;
                    _this.selected.fire(name, action, selection);
                }
                else {
                    _this.clearMasterFilter.fire(name);
                }
                return true;
            }
            return false;
        };
        _this.drillDown = function (row) {
            if (_this.model._isDrillDownEnabled() && _this._canPerformDrillDown()) {
                var values = _this._getUniqueValues(row);
                var level = values.length;
                if (level < _this.model.interactivityTargets().length) {
                    _this.selected.fire(_this.model.componentName(), _common_1.viewerActions.drillDown, _this._prepareRow(values));
                    return true;
                }
            }
            return false;
        };
        _this.model = model;
        return _this;
    }
    CustomItemViewer.prototype.contentWidth = function () {
        return $(this.contentRoot).width();
    };
    CustomItemViewer.prototype.contentHeight = function () {
        return $(this.contentRoot).height();
    };
    CustomItemViewer.prototype.setSize = function (width, height) {
        _super.prototype.setSize.call(this, width, height);
    };
    CustomItemViewer.prototype._renderContent = function (element, changeExisting, afterRenderCallback) {
        this.renderContent(_utils_1.wrapPublicElement(element), changeExisting, afterRenderCallback);
        return false;
    };
    CustomItemViewer.prototype.renderContent = function (element, changeExisting, afterRenderCallback) {
    };
    CustomItemViewer.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    CustomItemViewer.prototype.clearSelection = function () {
        _super.prototype.clearSelection.call(this);
    };
    CustomItemViewer.prototype.setSelection = function (values) {
        _super.prototype.setSelection.call(this, values);
    };
    CustomItemViewer.prototype.allowExportSingleItem = function () {
        return false;
    };
    CustomItemViewer.prototype.getExportInfo = function () {
        return null;
    };
    CustomItemViewer.prototype.getMasterFilterMode = function () {
        return this.model._masterFilterMode();
    };
    CustomItemViewer.prototype.getBindingValue = function (propertyName, index) {
        return this.model.getBindingValue(propertyName, index);
    };
    CustomItemViewer.prototype.getPropertyValue = function (propertyName) {
        return ko.unwrap(this.model[propertyName]);
    };
    CustomItemViewer.prototype.subscribe = function (propertyName, callback) {
        return this.model[propertyName].subscribe(callback);
    };
    CustomItemViewer.prototype.isSelected = function (row) {
        var actualSelectionValues = this.model._actualSelectionValues();
        return actualSelectionValues && _utils_1.arrayContains(actualSelectionValues, this._prepareRow(this._getUniqueValues(row)));
    };
    CustomItemViewer.prototype.getInfo = function () {
        var info = _super.prototype.getInfo.call(this), exportInfo = this.getExportInfo();
        return exportInfo ? _utils_2.deepExtend(info, {
            customItemExportInfo: exportInfo
        }) : info;
    };
    CustomItemViewer.prototype.initializeData = function (newOptions) {
    };
    CustomItemViewer.prototype._initializeData = function (newOptions) {
        _super.prototype._initializeData.call(this, newOptions);
        this.initializeData(newOptions);
        if (this.options) {
            this.options.allowExport = this.options.allowExport && this.allowExportSingleItem();
        }
    };
    CustomItemViewer.prototype._prepareRow = function (row) {
        if (this.model._isDrillDownEnabled() && (this._canPerformDrillDown() || this._canPerformDrillUp()))
            return [row[row.length - 1]];
        return row;
    };
    CustomItemViewer.prototype._getUniqueValues = function (row) {
        var res = [];
        this.model.customBindings.filter(function (binding) { return binding.enableInteractivity; }).forEach(function (binding) {
            var current = row.getUniqueValue(binding.propertyName);
            if (current) {
                res = res.concat(current);
            }
        });
        return res;
    };
    CustomItemViewer.prototype._isSupportDataAwareExport = function () {
        return false;
    };
    return CustomItemViewer;
}(_base_item_1.baseItem));
exports.CustomItemViewer = CustomItemViewer;
var customViewerItem = (function (_super) {
    __extends(customViewerItem, _super);
    function customViewerItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return customViewerItem;
}(CustomItemViewer));
exports.customViewerItem = customViewerItem;
