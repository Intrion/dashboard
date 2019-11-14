/**
* DevExpress Dashboard (_cards-viewer.js)
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
var dom_component_1 = require("devextreme/core/dom_component");
var _arrangement_strategy_1 = require("./_arrangement-strategy");
var _card_virtualization_controller_1 = require("./_card-virtualization-controller");
var _card_arrangement_table_generator_1 = require("./_card-arrangement-table-generator");
var _new_card_item_1 = require("./_new-card-item");
var _css_class_names_1 = require("../_css-class-names");
var $ = require("jquery");
var scroll_view_1 = require("devextreme/ui/scroll_view");
var _utils_1 = require("../../../../data/_utils");
var viewerCount = 0;
var cardsViewer = (function (_super) {
    __extends(cardsViewer, _super);
    function cardsViewer(element, options) {
        return _super.call(this, element, options) || this;
    }
    cardsViewer.prototype.redraw = function () {
        this._render();
    };
    cardsViewer.prototype._optionChanged = function (args) {
        switch (args.name) {
            case "viewer":
                this.createArranger();
                _super.prototype["_invalidate"].call(this);
                break;
            case "itemOptions":
            case "dataSource":
                _super.prototype["_invalidate"].call(this);
                break;
        }
        _super.prototype["_optionChanged"].call(this, args);
    };
    cardsViewer.prototype._refresh = function () {
        this.createItems();
        _super.prototype["_refresh"].call(this);
    };
    cardsViewer.prototype.getSelectedItems = function () {
        return this.itemsList.filter(function (item) { return item.selected(); });
    };
    cardsViewer.prototype.clearSelections = function () {
        this.itemsList.forEach(function (item) { return item.clearSelection(); });
    };
    cardsViewer.prototype.getSizeParams = function () {
        return this.virtualizer.getSizeParams();
    };
    cardsViewer.prototype.clear = function () {
        this.container.remove();
    };
    cardsViewer.prototype._init = function () {
        _super.prototype["_init"].call(this);
        this._viewerID = viewerCount++;
        this.tableStruct = $("<div>", { "class": _css_class_names_1.cssClassNames.widgetViewerTable + " " + _css_class_names_1.cssClassNames.widgetViewerIdPrefix + this._viewerID });
        this.initContainer();
        this.container.append(this.tableStruct);
        this.container.addClass(_css_class_names_1.cssClassNames.widgetViewerContainer);
        var scrollView = new scroll_view_1.default(_utils_1.$unwrap(this.container), {
            direction: "both",
            showScrollbar: "onHover"
        });
        this.virtualizer = new _card_virtualization_controller_1.CardVirtualizationController(this.tableStruct, scrollView);
        this.createArranger();
    };
    cardsViewer.prototype.initContainer = function () {
        this.container = $("<div>").appendTo(_utils_1.$wrap(this.element()));
        this.container.addClass(_css_class_names_1.layoutCardCssClassNames.cardScrollableHolder);
    };
    cardsViewer.prototype.createItems = function () {
        var that = this, data = that.option("dataSource");
        var viewer = this.option("viewer");
        var clickHandler = viewer.onclick, hoverHandler = viewer.onhover;
        that.itemsList = [];
        data.forEach(function (dataItem, index) {
            that.itemsList.push(new _new_card_item_1.newCardItem(dataItem, index, { clickHandler: clickHandler, hoverHandler: hoverHandler }));
        });
    };
    cardsViewer.prototype._render = function (drawOptions) {
        var _this = this;
        this.virtualizer.updateScrollableContent(function () {
            _this.invalidateContent();
            _this.drawCards();
        });
    };
    cardsViewer.prototype.invalidateContent = function () {
        this.createItems();
        this.tableStruct.empty();
    };
    cardsViewer.prototype.drawCards = function () {
        var _this = this;
        var parentWidth = this.container.width();
        var parentHeight = this.container.height();
        var layouts = this.option("itemOptions").layouts;
        var ignorePadding = this.option("viewer.ignorePadding");
        var cardArrangements = this.arranger.arrange(parentHeight, parentWidth, this.itemsList.length, layouts, ignorePadding);
        this.tableGenerator = new _card_arrangement_table_generator_1.cardArrangementTableGenerator();
        this.tableGenerator.generateTable(this.tableStruct, cardArrangements);
        this.virtualizer.init(cardArrangements, function (startIndex, endIndex) { _this.drawCardsByIndices(startIndex, endIndex); });
    };
    cardsViewer.prototype.drawCardsByIndices = function (startIndex, endIndex) {
        var _this = this;
        this.tableGenerator.drawCellContent(startIndex, endIndex, function (container, cardArrangements, index) {
            return _this.itemsList[index].draw(container, cardArrangements);
        });
    };
    cardsViewer.prototype.createArranger = function () {
        var viewerOptions = this.option("viewer");
        var method = viewerOptions.method;
        var count = viewerOptions.count;
        if (this.shouldRecreateArranger(method, count))
            this.arranger = _arrangement_strategy_1.ArrangementStrategy.createInstance(method, count);
    };
    cardsViewer.prototype.shouldRecreateArranger = function (newArrangement, lineCount) {
        if (this.arranger != null) {
            var currentArrangement = this.arranger.getArrangeMethod();
            if (currentArrangement === "auto")
                return newArrangement !== "auto";
            else
                return newArrangement !== currentArrangement || this.arranger.getLineCount() !== lineCount;
        }
        return true;
    };
    return cardsViewer;
}(dom_component_1.default));
exports.cardsViewer = cardsViewer;
