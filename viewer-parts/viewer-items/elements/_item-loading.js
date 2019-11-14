/**
* DevExpress Dashboard (_item-loading.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("devextreme/ui/toast");
var overlay_1 = require("devextreme/ui/overlay");
var $ = require("jquery");
var _utils_1 = require("../../../data/_utils");
var _default_1 = require("../../../data/localization/_default");
var _z_index_1 = require("../../../data/_z-index");
var ItemLoadingElement = (function () {
    function ItemLoadingElement() {
    }
    ItemLoadingElement.prototype.show = function (container) {
        if (!this._overlay) {
            var overlayDiv = document.createElement('div');
            overlayDiv.classList.add('dx-dashboard-loading-indicator');
            var contentTemplate = document.createElement('div');
            contentTemplate.classList.add("dx-dashboard-item-loading-panel");
            var h1 = document.createElement('h1');
            h1.innerText = _default_1.getLocalizationById("DashboardStringId.MessageLoading");
            contentTemplate.appendChild(h1);
            this._overlay = new overlay_1.default(overlayDiv, {
                shading: true,
                animation: {
                    show: { type: 'fade', duration: 150, from: 0, to: 1, delay: 150 },
                    hide: { type: 'fade', duration: 150, to: 0, delay: 150 }
                },
                width: "auto",
                height: "auto",
                target: container,
                container: container,
                contentTemplate: contentTemplate,
                closeOnOutsideClick: false,
                propagateOutsideClick: true,
                position: {
                    boundary: container,
                    my: 'bottom right',
                    at: 'bottom right',
                    offset: '-10 -10',
                    of: container
                },
                onShowing: function (e) {
                    var wrapper = _utils_1.$unwrap(e.component._$wrapper);
                    wrapper.style.zIndex = (_z_index_1.zIndex.dashboardItemShield - 2).toString();
                    var overlayContent = wrapper.querySelector(".dx-overlay-content");
                    if (overlayContent) {
                        overlayContent.style.zIndex = (_z_index_1.zIndex.dashboardItemShield - 1).toString();
                    }
                }
            });
            overlayDiv.style.zIndex = _z_index_1.zIndex.dashboardItemShield.toString();
            $(container).prepend(overlayDiv);
        }
        this._overlay.show();
    };
    ItemLoadingElement.prototype.hide = function () {
        if (this._overlay) {
            this._overlay.hide();
        }
    };
    ItemLoadingElement.prototype.resize = function () {
        if (this._overlay) {
            this._overlay.repaint();
        }
    };
    return ItemLoadingElement;
}());
exports.ItemLoadingElement = ItemLoadingElement;
