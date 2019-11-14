/**
* DevExpress Dashboard (_card-layout.js)
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
var _utils_1 = require("../../../../data/_utils");
var cardLayout = (function () {
    function cardLayout(apiHandlers) {
        this.apiHandlers = apiHandlers;
        this.rows = [];
    }
    cardLayout.prototype.getCardBackgroundColor = function () {
        return this.apiHandlers && this.apiHandlers.cardBackColor;
    };
    ;
    cardLayout.prototype.fill = function (layoutModel) {
        var _this = this;
        this.minWidth = layoutModel.MinWidth;
        this.maxWidth = layoutModel.MaxWidth;
        layoutModel.Rows.forEach(function (rowModel, i) {
            var row = new cardRow();
            row.vAlignment = _this.convertVAlignment(rowModel.VAlignment);
            row.indent = rowModel.Indent;
            rowModel.Elements.forEach(function (elementModel, j) {
                if (elementModel.Type === "Indicator") {
                    var indicatorElement = new cardIndicatorElement();
                    indicatorElement.getIndicatorType = function (data) {
                        return _this.isDeltaType(elementModel.Type) && data.getIndicatorType();
                    };
                    indicatorElement.getIsGood = function (data) {
                        return _this.isDeltaType(elementModel.Type) && data.getIsGood();
                    };
                    indicatorElement.height = elementModel.Size;
                    indicatorElement.width = elementModel.Size * elementModel.IndicatorWidthRatio;
                    indicatorElement.hAlignment = _this.convertHAlignment(elementModel.HAlignment);
                    row.elements.push(indicatorElement);
                }
                else if (elementModel.Type === "Sparkline") {
                    var sparklineElement = new cardSparklineElement();
                    sparklineElement.height = elementModel.Size;
                    sparklineElement.getSparklineOptions = function (data) {
                        return data.getSparklineOptions();
                    };
                    row.elements.push(sparklineElement);
                }
                else {
                    var rowElement = new cardRowElement();
                    rowElement.predefinedColor = elementModel.PredefinedColor;
                    rowElement.color = _this.convertElementColor(elementModel.Color);
                    rowElement.hAlignment = _this.convertHAlignment(elementModel.HAlignment);
                    rowElement.fontSize = elementModel.FontSize;
                    rowElement.fontFamily = elementModel.FontFamily;
                    rowElement.getValueArgs = function (data) {
                        return _this.getElementValue(data, elementModel);
                    };
                    rowElement.getText = function (data) {
                        var text;
                        var valueArgs = _this.getElementValue(data, elementModel);
                        if (_this.apiHandlers && _this.apiHandlers.onCustomizeText) {
                            text = _this.apiHandlers.onCustomizeText(valueArgs);
                        }
                        return text || valueArgs.getDefaultText();
                    };
                    rowElement.getIndicatorType = function (data) {
                        return _this.isDeltaType(elementModel.Type) ? data.getIndicatorType() : undefined;
                    };
                    rowElement.getIsGood = function (data) {
                        return _this.isDeltaType(elementModel.Type) && data.getIsGood();
                    };
                    row.elements.push(rowElement);
                }
            });
            _this.rows.push(row);
        });
    };
    cardLayout.prototype.isDeltaType = function (elementType) {
        return elementType === "AbsoluteVariation" ||
            elementType === "PercentVariation" ||
            elementType === "PercentOfTarget" ||
            elementType === "ActualValue" ||
            elementType === "TargetValue" ||
            elementType === "Indicator";
    };
    cardLayout.prototype.convertElementColor = function (color) {
        return color ? _utils_1.toColor(color) : null;
    };
    cardLayout.prototype.getElementValue = function (data, elementModel) {
        var valueGetter = function () { return ""; };
        var displayTextGetter = function () { return ""; };
        switch (elementModel.Type) {
            case "Title":
                valueGetter = data.getTitle;
                displayTextGetter = data.getTitle;
                break;
            case "Subtitle":
                valueGetter = data.getSubtitle;
                displayTextGetter = data.getSubtitle;
                break;
            case "Text":
                valueGetter = function (s) { return elementModel.Text; };
                displayTextGetter = function (s) { return elementModel.Text; };
                break;
            case "ActualValue":
                valueGetter = data.getActualValue;
                displayTextGetter = data.getActualValueText;
                break;
            case "AbsoluteVariation":
                valueGetter = data.getAbsoluteVariationValue;
                displayTextGetter = data.getAbsoluteVariationText;
                break;
            case "PercentVariation":
                valueGetter = data.getPercentVariationValue;
                displayTextGetter = data.getPercentVariationText;
                break;
            case "PercentOfTarget":
                valueGetter = data.getPercentOfTargetValue;
                displayTextGetter = data.getPercentOfTargetText;
                break;
            case "TargetValue":
                valueGetter = data.getTargetValue;
                displayTextGetter = data.getTargetValueText;
                break;
            case "Dimension":
                valueGetter = data.getDimensionValue;
                displayTextGetter = data.getDimensionValueText;
                break;
            case "Measure":
                valueGetter = data.getMeasureValue;
                displayTextGetter = data.getMeasureDisplayText;
                break;
            case "CardName":
                valueGetter = data.getCardName;
                displayTextGetter = data.getCardName;
                break;
        }
        return {
            getValue: function () {
                return valueGetter(elementModel.DataId);
            },
            getDefaultText: function () {
                return displayTextGetter(elementModel.DataId);
            }
        };
    };
    cardLayout.prototype.convertVAlignment = function (value) {
        switch (value) {
            case "Top":
                return verticalAlignment.top;
            case "Bottom":
                return verticalAlignment.bottom;
            case "Center":
            default:
                return verticalAlignment.center;
        }
    };
    cardLayout.prototype.convertHAlignment = function (value) {
        switch (value) {
            case "Center":
                return horizontalAlignment.center;
            case "Right":
                return horizontalAlignment.right;
            case "Left":
            default:
                return horizontalAlignment.left;
        }
    };
    return cardLayout;
}());
exports.cardLayout = cardLayout;
var cardRow = (function () {
    function cardRow() {
        this.elements = [];
    }
    return cardRow;
}());
exports.cardRow = cardRow;
var cardRowElementBase = (function () {
    function cardRowElementBase() {
    }
    return cardRowElementBase;
}());
exports.cardRowElementBase = cardRowElementBase;
var cardRowElement = (function (_super) {
    __extends(cardRowElement, _super);
    function cardRowElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cardRowElement;
}(cardRowElementBase));
exports.cardRowElement = cardRowElement;
var cardIndicatorElement = (function (_super) {
    __extends(cardIndicatorElement, _super);
    function cardIndicatorElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cardIndicatorElement;
}(cardRowElementBase));
exports.cardIndicatorElement = cardIndicatorElement;
var cardSparklineElement = (function (_super) {
    __extends(cardSparklineElement, _super);
    function cardSparklineElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cardSparklineElement;
}(cardRowElementBase));
exports.cardSparklineElement = cardSparklineElement;
var sparklineOptions = (function () {
    function sparklineOptions(sparklineOptionsModel) {
        this.viewType = sparklineOptionsModel.ViewType;
        this.highlightMinMaxPoints = sparklineOptionsModel.HighlightMinMaxPoints;
        this.highlightStartEndPoints = sparklineOptionsModel.HighlightStartEndPoints;
    }
    return sparklineOptions;
}());
exports.sparklineOptions = sparklineOptions;
var horizontalAlignment;
(function (horizontalAlignment) {
    horizontalAlignment[horizontalAlignment["left"] = 0] = "left";
    horizontalAlignment[horizontalAlignment["right"] = 1] = "right";
    horizontalAlignment[horizontalAlignment["center"] = 2] = "center";
})(horizontalAlignment = exports.horizontalAlignment || (exports.horizontalAlignment = {}));
var verticalAlignment;
(function (verticalAlignment) {
    verticalAlignment[verticalAlignment["top"] = 0] = "top";
    verticalAlignment[verticalAlignment["center"] = 1] = "center";
    verticalAlignment[verticalAlignment["bottom"] = 2] = "bottom";
})(verticalAlignment = exports.verticalAlignment || (exports.verticalAlignment = {}));
