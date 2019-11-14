/**
* DevExpress Dashboard (_cards-item.js)
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
var _kpi_item_1 = require("./_kpi-item");
var _card_layout_1 = require("../widgets/widgets-viewer/cards/_card-layout");
var _cards_viewer_1 = require("../widgets/widgets-viewer/cards/_cards-viewer");
var _utils_1 = require("../../data/_utils");
var _base_item_1 = require("./_base-item");
var _card_widget_implementation_1 = require("../_card-widget-implementation");
var cardsItem = (function (_super) {
    __extends(cardsItem, _super);
    function cardsItem(container, options) {
        var _this = _super.call(this, container, options) || this;
        _this.useNewViewer = options.ViewModel.HasLayout;
        _this._hasSparkline = false;
        _this.apiHandlers = new _card_widget_implementation_1.CardWidgetImplementation(function () { _this.renderContentUnsafe(_this.contentRoot, true, function () { }); });
        return _this;
    }
    cardsItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        this._hasSparkline = false;
        if (this.options.ViewModel.HasLayout != this.useNewViewer && this.widgetsViewer != null) {
            this.widgetsViewer.clear();
            this.widgetsViewer = null;
        }
        this.useNewViewer = this.options.ViewModel.HasLayout;
        this.initializeLayoutCollection();
        _super.prototype.renderContentUnsafe.call(this, element, changeExisting, afterRenderCallback);
        this.apiHandlers._element = this.widgetsViewer.element();
        return false;
    };
    cardsItem.prototype.createWidgetViewer = function (element, options) {
        if (this.useNewViewer)
            return new _cards_viewer_1.cardsViewer(element, options);
        else
            return _super.prototype.createWidgetViewer.call(this, element, options);
    };
    cardsItem.prototype.initializeLayoutCollection = function () {
        var _this = this;
        this.layoutCollection = {};
        if (this.options.ViewModel.HasLayout) {
            var cards = this.options.ViewModel.Cards;
            cards.forEach(function (card) {
                var layout = new _card_layout_1.cardLayout(_this.apiHandlers);
                layout.fill(card.Layout);
                _this.layoutCollection[card.ID] = layout;
            });
        }
    };
    cardsItem.prototype._isPaneEmpty = function () {
        return _super.prototype._isPaneEmpty.call(this) || !this.hasCaption();
    };
    cardsItem.prototype._isBorderRequired = function () {
        return false;
    };
    cardsItem.prototype._isTransparentBackground = function () {
        return this._isPaneEmpty() && this.visualMode !== 'content';
    };
    cardsItem.prototype._getSpecificWidgetViewerOptions = function () {
        var that = this, specificOptions = {};
        specificOptions.viewer = {
            ignorePadding: this._getIgnorePadding()
        };
        var layoutsArray = [];
        for (var layoutKey in this.layoutCollection) {
            layoutsArray.push(this.layoutCollection[layoutKey]);
        }
        specificOptions.itemOptions = {
            hasSparkline: this._hasSparkline,
            layouts: layoutsArray
        };
        return _utils_1.deepExtend(specificOptions, _super.prototype._getSpecificWidgetViewerOptions.call(this));
    };
    cardsItem.prototype._getIgnorePadding = function () {
        return this._isPaneEmpty() && this.visualMode !== 'content';
    };
    cardsItem.prototype._getWidgetType = function () {
        return 'card';
    };
    cardsItem.prototype._getElementsName = function () {
        return 'Cards';
    };
    cardsItem.prototype.setOldCardProperties = function (sourceItem, cardModel, props) {
        var captions = props.getCaptions(), sparklineOptions, indicatorType, isGood;
        if (cardModel.DataItemType === _utils_1.KpiValueMode.Measure) {
            sourceItem.mainValue = {
                type: undefined,
                hasPositiveMeaning: undefined,
                text: {
                    value: props.getMeasureDisplayText(),
                    useDefaultColor: cardModel.IgnoreDeltaColor
                }
            };
        }
        else {
            indicatorType = props.getIndicatorType();
            isGood = props.getIsGood();
            sourceItem.mainValue = {
                type: indicatorType,
                hasPositiveMeaning: isGood,
                text: {
                    value: props.getMainValueText(),
                    useDefaultColor: cardModel.IgnoreDeltaColor
                }
            };
            sourceItem.variableValue1 = {
                type: indicatorType,
                hasPositiveMeaning: isGood,
                text: {
                    value: props.getSubValue1Text(),
                    useDefaultColor: cardModel.IgnoreSubValue1DeltaColor
                }
            };
            sourceItem.variableValue2 = {
                type: indicatorType,
                hasPositiveMeaning: isGood,
                text: {
                    value: props.getSubValue2Text(),
                    useDefaultColor: cardModel.IgnoreSubValue2DeltaColor
                }
            };
        }
        if (cardModel.ShowSparkline) {
            sparklineOptions = props.getSparklineOptions();
            this._hasSparkline = !!sparklineOptions;
            if (this._hasSparkline) {
                sourceItem.sparklineOptions = sparklineOptions;
            }
        }
        if (captions.length > 0) {
            sourceItem.title = captions.pop();
            sourceItem.subTitle = captions.length != 0 ? captions.join(' - ') : undefined;
        }
    };
    cardsItem.prototype.setNewCardProperties = function (sourceItem, cardModel, props) {
        sourceItem.layout = this.layoutCollection[cardModel.ID];
        sourceItem.dataAccessor = props;
    };
    cardsItem.prototype._setSourceItemProperties = function (sourceItem, cardModel, props) {
        _super.prototype._setSourceItemProperties.call(this, sourceItem, cardModel, props);
        if (this.useNewViewer)
            this.setNewCardProperties(sourceItem, cardModel, props);
        else
            this.setOldCardProperties(sourceItem, cardModel, props);
    };
    cardsItem.prototype._getWidget = function () {
        return this.useNewViewer ? this.apiHandlers : undefined;
    };
    cardsItem.prototype._generateInnerBorderClassesUnsafe = function (element) {
        var classes = _super.prototype._generateInnerBorderClassesUnsafe.call(this, element);
        var cardWithoutBackground = !this.hasParentContainer() && !this.hasCaption();
        if (cardWithoutBackground) {
            classes.push(_base_item_1.cssClassNamesBaseItem.cardWihtoutBackground);
        }
        if (element) {
            cardWithoutBackground ?
                element.classList.add(_base_item_1.cssClassNamesBaseItem.cardWihtoutBackground) :
                element.classList.remove(_base_item_1.cssClassNamesBaseItem.cardWihtoutBackground);
        }
        return classes;
    };
    return cardsItem;
}(_kpi_item_1.kpiItem));
exports.cardsItem = cardsItem;
