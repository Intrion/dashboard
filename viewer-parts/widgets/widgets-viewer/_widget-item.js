/**
* DevExpress Dashboard (_widget-item.js)
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
var _base_widget_item_1 = require("./_base-widget-item");
var _widget_item_factory_1 = require("./_widget-item-factory");
var _utils_1 = require("../../../data/_utils");
var $ = require("jquery");
var WidgetItem = (function (_super) {
    __extends(WidgetItem, _super);
    function WidgetItem(itemData, options) {
        var _this = _super.call(this, WidgetItem.ensureOptions(options)) || this;
        _this._widgetType = String(_this._options.widgetType || "").toLowerCase();
        _this._itemData = itemData || {};
        _this._itemData.encodeHtml = _this._options.encodeHtml;
        _this._itemData.redrawOnResize = false;
        return _this;
    }
    WidgetItem.ensureOptions = function (options) {
        options = options || {};
        options.type = 'widgetItem';
        return options;
    };
    WidgetItem.prototype.dispose = function () {
        var that = this;
        _base_widget_item_1.BaseWidgetItem.prototype.dispose.apply(that, arguments);
        that._itemData = null;
        this._disposeWidget();
    };
    WidgetItem.prototype._disposeWidget = function () {
        if (this._widget) {
            this._widget.dispose();
            this._widget = null;
        }
    };
    WidgetItem.prototype._getDefaultOptions = function () {
        return _utils_1.deepExtend({}, _base_widget_item_1.BaseWidgetItem.prototype._getDefaultOptions.apply(this, arguments), {
            style: {
                borderStyle: 'solid',
                borderColor: '#ffffff'
            }
        });
    };
    WidgetItem.prototype.detachItem = function () {
        var itemDiv = this._itemDiv;
        if (itemDiv && itemDiv.parentElement) {
            itemDiv.parentElement.removeChild(itemDiv);
        }
    };
    WidgetItem.prototype.initDraw = function (width, height, index) {
        this._disposeWidget();
        return _super.prototype.initDraw.call(this, width, height, index);
    };
    WidgetItem.prototype.draw = function (width, height, index) {
        _super.prototype.draw.call(this, width, height, index);
        var that = this, itemDiv;
        itemDiv = that._itemDiv;
        itemDiv.style.margin = 'auto';
        that._widget = _widget_item_factory_1.widgetItemFactory.createWidget(that._widgetType, itemDiv, that._itemData);
        return itemDiv;
    };
    WidgetItem.prototype.resize = function (width, height, index) {
        if (!this._itemDiv.childNodes.length) {
            return this.draw(width, height, index);
        }
    };
    WidgetItem.prototype.rerender = function (drawOptions) {
        var that = this, options;
        if (that._widget) {
            options = _widget_item_factory_1.widgetItemFactory.getAdditionalOptions(that._widgetType, that._itemDiv, that._itemData);
            options && _utils_1.deepExtend(that._widget._options, options);
            if ($(that._itemDiv).is(":visible")) {
                that._widget.render(drawOptions);
            }
        }
    };
    WidgetItem.prototype.getWidget = function () {
        return this._widget;
    };
    return WidgetItem;
}(_base_widget_item_1.BaseWidgetItem));
exports.WidgetItem = WidgetItem;
