/**
* DevExpress Dashboard (_draggable.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _draggable_1 = require("../common/viewer/layout/_draggable");
var _dashboard_item_helper_1 = require("../model/internal/_dashboard-item_helper");
var ko = require("knockout");
var events_1 = require("devextreme/events");
ko.bindingHandlers["toolboxitemdraggable"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var model = ko.unwrap(valueAccessor());
        events_1.on(element, "dragstart", function (ev) {
            var originalEvent = ev.originalEvent, item = ko.dataFor(originalEvent.target);
            originalEvent.dataTransfer.effectAllowed = "move";
            _draggable_1.DragDataProvider.dragData = { "type": "NewLayoutItem", itemJson: _dashboard_item_helper_1.getItemJson(model.type) };
            originalEvent.dataTransfer.setData("text", JSON.stringify(_draggable_1.DragDataProvider.dragData));
            return true;
        });
        events_1.on(element, "dragend", function (ev) {
            _draggable_1.DragDataProvider.dragData = null;
        });
    }
};
