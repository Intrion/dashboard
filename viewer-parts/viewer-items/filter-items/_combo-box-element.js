/**
* DevExpress Dashboard (_combo-box-element.js)
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _base_element_1 = require("./_base-element");
var _render_helper_1 = require("../../widgets/_render-helper");
var _filter_element_data_controller_1 = require("../../../data/data-controllers/_filter-element-data-controller");
var _localizer_1 = require("../../../data/_localizer");
var _localizer_2 = require("../../../data/_localizer");
var _localization_ids_1 = require("../../../data/_localization-ids");
var tag_box_1 = require("devextreme/ui/tag_box");
var select_box_1 = require("devextreme/ui/select_box");
var _utils_1 = require("../../../data/_utils");
var MULTITAG_COUNT = 9;
exports.cssComboBoxClassNames = {
    item: 'dx-dashboard-combobox-filter-item',
    multiText: 'dx-dashboard-filter-item-multitext',
    margins: 'dx-dashboard-combobox-margins'
};
var comboBoxFilterElement = (function (_super) {
    __extends(comboBoxFilterElement, _super);
    function comboBoxFilterElement(container, options) {
        var _this = _super.call(this, container, options) || this;
        _this._isFixedHeight = true;
        return _this;
    }
    comboBoxFilterElement.prototype._setSelectionUnsafe = function (values) {
        _super.prototype._setSelectionUnsafe.call(this, values);
        this._lock();
        try {
            this.widget.option('value', this._getSelection());
        }
        finally {
            this._unlock();
        }
    };
    comboBoxFilterElement.prototype._clearSelectionUnsafe = function () {
        if (!!this.options.useNeutralFilterMode) {
            this._lock();
            try {
                this.widget.option('value', null);
            }
            finally {
                this._unlock();
            }
        }
    };
    Object.defineProperty(comboBoxFilterElement.prototype, "_isBottomFloatingToolbarPosition", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(comboBoxFilterElement.prototype, "_allowPreview", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    comboBoxFilterElement.prototype._getWidgetName = function () {
        return this.isMultiSelectable ? 'dxTagBox' : 'dxSelectBox';
    };
    comboBoxFilterElement.prototype._createWidgetDiv = function () {
        var div = _super.prototype._createWidgetDiv.call(this);
        if (this.visualMode === 'content')
            div.classList.add(exports.cssComboBoxClassNames.margins);
        return div;
    };
    comboBoxFilterElement.prototype._createWidget = function (div, opts) {
        return this.isMultiSelectable ? new tag_box_1.default(div, opts) : new select_box_1.default(div, opts);
    };
    comboBoxFilterElement.prototype._getMinContentHeight = function () {
        var element = document.createElement('div');
        this._createWidget(element, this._getOptions(false));
        return _render_helper_1.RenderHelper.getElementBox(element).height;
    };
    comboBoxFilterElement.prototype._generateInnerBorderClassesUnsafe = function (element) {
        var classes = _super.prototype._generateInnerBorderClassesUnsafe.call(this, element);
        if (!this._isPaneEmpty()) {
            classes.push(exports.cssComboBoxClassNames.item);
        }
        if (element) {
            if (this._isPaneEmpty()) {
                element.classList.remove(exports.cssComboBoxClassNames.item);
            }
            else {
                element.classList.add(exports.cssComboBoxClassNames.item);
            }
        }
        return classes;
    };
    comboBoxFilterElement.prototype._getSelection = function () {
        if (this.isMultiSelectable) {
            return this.dataController.selection;
        }
        else {
            return !this.dataController.selection || !this.dataController.selection.length ? null : this.dataController.selection[0];
        }
    };
    comboBoxFilterElement.prototype._getOptions = function (includeActions) {
        var that = this;
        var addtionalOptions = that.isMultiSelectable ?
            {
                value: that._getSelection(),
                onSelectionChanged: !includeActions ? undefined : function (e) {
                    that._raiseItemClick(e.removedItems.length > 0 ? e.removedItems : e.addedItems);
                },
                placeholder: '',
                showSelectionControls: that.isMultiSelectable,
                showDropDownButton: true,
                multiline: false
            }
            : {
                value: that._getSelection(),
                placeholder: _localizer_2.localizer.getString(_localization_ids_1.localizationId.FilterElementRadioComboBoxNoDataCaption),
                onValueChanged: !includeActions ? undefined : function (e) {
                    if (e.value != null)
                        that._raiseItemClick([e.value]);
                }
            };
        var options = {
            dataSource: that.getDataSource(),
            displayExpr: that._getDisplayExpr(),
            valueExpr: 'this',
            noDataText: _localizer_2.localizer.getString(_localization_ids_1.localizationId.FilterElementNoDataToDisplay),
            itemTemplate: function (item, _, element) {
                var node = _utils_1.$unwrap(element);
                var expr = that._getDisplayExpr();
                if (expr === 'html') {
                    node.innerHTML = item[expr];
                }
                else {
                    node.innerText = item[expr];
                }
            },
            onMultiTagPreparing: function (args) {
                if (that.dataController.dataSource.length === args.selectedItems.length)
                    args.text = _localizer_1.ALL_ELEMENT.text;
                else if (args.selectedItems.length < MULTITAG_COUNT)
                    args.cancel = true;
            },
            maxDisplayedTags: 1,
            selectAllMode: 'allPages',
            searchEnabled: this._enableSearch
        };
        return __assign({}, options, addtionalOptions, { keyExpr: _filter_element_data_controller_1.KEY_EXPR, multiSelectEnabled: that.isMultiSelectable, selectAllText: _localizer_1.ALL_ELEMENT.text, pageLoadMode: 'scrollBottom', dropDownOptions: {
                container: this.controlContainer
            } });
    };
    comboBoxFilterElement.prototype._resizeUnsafe = function () {
        _super.prototype._resizeUnsafe.call(this);
        this.widget.repaint();
    };
    return comboBoxFilterElement;
}(_base_element_1.filterElementBaseItem));
exports.comboBoxFilterElement = comboBoxFilterElement;
