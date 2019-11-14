/**
* DevExpress Dashboard (_list-element.js)
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
var _base_element_1 = require("./_base-element");
var _filter_element_data_controller_1 = require("../../../data/data-controllers/_filter-element-data-controller");
var _localizer_1 = require("../../../data/_localizer");
var _localizer_2 = require("../../../data/_localizer");
var _localization_ids_1 = require("../../../data/_localization-ids");
var list_1 = require("devextreme/ui/list");
var _utils_1 = require("../../../data/_utils");
exports.cssListBoxClassNames = {
    borderVisible: 'dx-list-border-visible',
    separatorHidden: 'dx-list-item-separator-hidden',
    item: 'dx-dashboard-list-item'
};
var listFilterElement = (function (_super) {
    __extends(listFilterElement, _super);
    function listFilterElement(container, options) {
        return _super.call(this, container, options) || this;
    }
    listFilterElement.prototype._setSelectionUnsafe = function (values) {
        _super.prototype._setSelectionUnsafe.call(this, values);
        this._lock();
        try {
            this.widget.option('selectedItems', this._getSelection());
        }
        finally {
            this._unlock();
        }
    };
    listFilterElement.prototype._clearSelectionUnsafe = function () {
        if (!!this.options.useNeutralFilterMode) {
            this._lock();
            try {
                this.widget.unselectAll();
            }
            finally {
                this._unlock();
            }
        }
    };
    listFilterElement.prototype._generateInnerBorderClassesUnsafe = function (element) {
        var classes = _super.prototype._generateInnerBorderClassesUnsafe.call(this, element);
        if (!this._isPaneEmpty()) {
            classes.push(exports.cssListBoxClassNames.item);
        }
        if (element) {
            if (this._isPaneEmpty()) {
                element.classList.remove(exports.cssListBoxClassNames.item);
            }
            else {
                element.classList.add(exports.cssListBoxClassNames.item);
            }
        }
        return classes;
    };
    listFilterElement.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        _super.prototype.renderContentUnsafe.call(this, element, changeExisting, afterRenderCallback);
        var widgetElement = _utils_1.$unwrap(this.widget.element());
        widgetElement.classList.add(exports.cssListBoxClassNames.separatorHidden);
        if (this._isPaneEmpty() && this.visualMode !== 'content') {
            widgetElement.classList.add(exports.cssListBoxClassNames.borderVisible);
        }
        else {
            widgetElement.classList.remove(exports.cssListBoxClassNames.borderVisible);
        }
        return false;
    };
    listFilterElement.prototype._getWidgetName = function () {
        return 'dxList';
    };
    listFilterElement.prototype._createWidget = function (div, opts) {
        return new list_1.default(div, opts);
    };
    listFilterElement.prototype._getSelection = function () {
        return !this.isMultiSelectable && this.dataController.selection.length > 1 ? [this.dataController.selection[0]] : this.dataController.selection;
    };
    listFilterElement.prototype._getOptions = function (includeActions) {
        var that = this;
        return {
            dataSource: that.getDataSource(),
            selectedItems: that._getSelection(),
            showSelectionControls: true,
            focusStateEnabled: false,
            hoverStateEnabled: true,
            keyExpr: _filter_element_data_controller_1.KEY_EXPR,
            searchEnabled: that._enableSearch,
            searchEditorOptions: {
                placeholder: _localizer_2.localizer.getString(_localization_ids_1.localizationId.SearchNullValuePrompt)
            },
            selectionMode: that.isMultiSelectable ? 'all' : 'single',
            selectAllMode: 'allPages',
            selectAllText: _localizer_1.ALL_ELEMENT.text,
            pageLoadMode: 'scrollBottom',
            onOptionChanged: function (e) {
                if (e.name == 'searchEnabled')
                    e.component.option('searchValue', undefined);
            },
            onSelectionChanged: !includeActions ? undefined : function (e) {
                if (that.isMultiSelectable && e.removedItems.length > 0) {
                    that._raiseItemClick(e.removedItems);
                }
                else {
                    that._raiseItemClick(e.addedItems);
                }
            }
        };
    };
    return listFilterElement;
}(_base_element_1.filterElementBaseItem));
exports.listFilterElement = listFilterElement;
