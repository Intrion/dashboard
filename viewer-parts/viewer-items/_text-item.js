/**
* DevExpress Dashboard (_text-item.js)
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
var _base_item_1 = require("./_base-item");
var _render_helper_1 = require("../widgets/_render-helper");
var _dashboard_viewer_constants_1 = require("../viewer/_dashboard-viewer-constants");
var $ = require("jquery");
var _utils_1 = require("../../data/_utils");
var textItem = (function (_super) {
    __extends(textItem, _super);
    function textItem(container, options) {
        var _this = _super.call(this, container, options) || this;
        _this.div = undefined;
        return _this;
    }
    textItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        var that = this;
        if (!changeExisting || !that.div) {
            that.div = $('<div>');
            that.$textContent = $(_render_helper_1.RenderHelper.wrapScrollable(that.div.get(0), _dashboard_viewer_constants_1.USE_NATIVE_SCROLLING, 'auto', 'vertical'));
            that.$textContent.addClass('dx-dashboard-textbox-content');
            $(element).append(that.div);
        }
        that._setContent();
        return false;
    };
    textItem.prototype._getWidget = function () {
        return this.div && _utils_1.wrapPublicElement(this.div[0]) || null;
    };
    textItem.prototype._setContent = function () {
        var itemName = this.options.Name, sheetColor, preWrapper = $('<pre>'), parsedHtml = $('<div>'), originalHtmlText = this.options.ViewModel.Html;
        originalHtmlText = originalHtmlText.replace('<body', '<div class="' + itemName + '"').replace('</body>', '</div>');
        originalHtmlText = this._updateDocvariableValues(originalHtmlText);
        var contentDiv = $(originalHtmlText).get().filter(function (c) { return c.className === itemName; })[0];
        sheetColor = contentDiv && contentDiv.getAttribute("bgcolor");
        sheetColor && this.div.css({ 'backgroundColor': sheetColor });
        parsedHtml.html(originalHtmlText);
        preWrapper.addClass("dx-dashboard-textbox-content-pre-wrapper");
        preWrapper.attr("id", itemName);
        preWrapper.append(parsedHtml.find("style"));
        if (contentDiv)
            preWrapper.append(contentDiv.children);
        this.$textContent.empty();
        this.$textContent.append(preWrapper);
    };
    textItem.prototype._updateDocvariableValues = function (htmlText) {
        var _this = this;
        return htmlText.replace(/02539CA4-7628-4F5D-9940-ED09C7EE7414\(([^()]+)\)/g, function (placeholder) {
            var match = placeholder.match(/\((.*?)\)/g);
            var id = match && match.length > 0 ? match[0].replace("(", "").replace(")", "") : null;
            if (id) {
                return _this._getHtml(_this.dataController.getDisplayText(id) || "");
            }
        });
    };
    return textItem;
}(_base_item_1.baseItem));
exports.textItem = textItem;
