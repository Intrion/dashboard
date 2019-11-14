/**
* DevExpress Dashboard (_style-settings-provider.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("../../data/_utils");
var _appearance_settings_provider_1 = require("./_appearance-settings-provider");
var $ = require("jquery");
var browser = require("devextreme/core/utils/browser");
var Color = require("devextreme/color");
var tooltip_1 = require("devextreme/ui/tooltip");
var ICON_TYPE_NONE = 'None', APPEARANCE_TYPE_NONE = 'None', APPEARANCE_TYPE_CUSTOM = 'Custom', VERTICAL_AXIS_PADDING = 3, HIDDEN_TEXT_PREFIX = 'hiddenText', TOOLTIP_PREFIX = 'tooltip', GRID_BANDED_ROW_SELECTOR = '.dx-datagrid .dx-row-alt', PIVOT_AREA_SELECTOR = '.dx-pivotgrid .dx-pivotgrid-area';
var BarCacheItem = (function () {
    function BarCacheItem() {
    }
    return BarCacheItem;
}());
var styleSettingsProvider = (function () {
    function styleSettingsProvider() {
        this.wordWrap = false;
        this.FontStyle = {
            Bold: 1,
            Italic: 2,
            Underline: 4,
            Strikeout: 8
        };
        this.DataAttributes = {
            Bar: 'bar',
            Axis: 'axis',
            NormalizedValue: 'normalizedValue',
            ZeroPosition: 'zeroPosition',
            AllowNegativeAxis: 'allowNegativeAxis',
            DrawAxis: 'drawAxis'
        };
        this.cfModel = undefined;
        this.cssCustomClasses = {};
        this.cssCustomClassesLinks = [];
        this.id = styleSettingsProvider.inctanceCounter++;
        this.drawingLocked = true;
        this.barCache = {};
        this.padding = null;
        this.barPrefixes = [];
    }
    styleSettingsProvider.toIconCssClass = function (iconType) {
        return styleSettingsProvider.cssClassNames.iconConditionalFormatting + '-' + iconType.toLowerCase();
    };
    styleSettingsProvider.prototype.initialize = function (cfModel, wordWrap) {
        if (cfModel) {
            this.cfModel = cfModel;
            this._clearCssClasses();
            this._registerCssClasses();
            this.drawingLocked = true;
            this.barCache = {};
            this.padding = null;
            this.barPrefixes = [];
        }
        this.wordWrap = wordWrap !== undefined ? wordWrap : this.wordWrap;
    };
    styleSettingsProvider.prototype.draw = function () {
        var that = this;
        $.each(that.barCache, function (i, columnCacheItem) {
            $.each(columnCacheItem, function (i, barCacheItem) {
                barCacheItem.container.text('');
                var $barContainer = barCacheItem.barContainer;
                $barContainer.appendTo(barCacheItem.container);
                barCacheItem.barDiv.appendTo($barContainer);
                if (barCacheItem.drawAxis) {
                    barCacheItem.axisDiv.appendTo($barContainer);
                }
                if (!barCacheItem.showBarOnly) {
                    barCacheItem.textDiv.appendTo($barContainer);
                }
                else {
                    barCacheItem.textDiv.appendTo(barCacheItem.container);
                    barCacheItem.tooltipDiv.appendTo(barCacheItem.container);
                }
            });
        });
        this.drawingLocked = false;
        $.each(that.barPrefixes, function (_, barPrefix) {
            that.updateBarWidth(barPrefix);
        });
    };
    styleSettingsProvider.prototype.updateBarWidth = function (barPrefix) {
        if (!this.drawingLocked) {
            var that = this, barCacheItems = that.barCache[barPrefix], containerHeights;
            if (barCacheItems) {
                containerHeights = this._getContainerHeights(barCacheItems);
                $.each(barCacheItems, function (i, barCacheItem) {
                    var $bar = barCacheItem.barDiv, normalizedValue = $bar.data(that.DataAttributes.NormalizedValue), zeroPosition = $bar.data(that.DataAttributes.ZeroPosition), allowNegativeAxis = $bar.data(that.DataAttributes.AllowNegativeAxis), drawAxis = $bar.data(that.DataAttributes.DrawAxis), containerHeight = containerHeights[i], axisDivs = $bar.parent().find('.' + that.DataAttributes.Axis + '_' + barPrefix + ':first');
                    that._setBarBounds($bar, containerHeight, zeroPosition, normalizedValue, allowNegativeAxis, drawAxis);
                    if (axisDivs.length !== 0) {
                        that._setAxisBounds($(axisDivs[0]), containerHeight, zeroPosition);
                    }
                });
            }
        }
    };
    styleSettingsProvider.prototype.applyStyleSettings = function (container, styleSettingsInfo, ignoreImageSettings, barPrefix, forceLeftAlignment) {
        var $container = $(container);
        var that = this, styleSettingsModel, sortedStyleIndexes = styleSettingsInfo ? styleSettingsInfo.styleIndexes : undefined, condition, ruleIndex, barInfo, iconType, cssClassname;
        if (sortedStyleIndexes && sortedStyleIndexes.length > 0) {
            sortedStyleIndexes.sort(function (a, b) {
                return a - b;
            });
            $.each(sortedStyleIndexes, function (_, styleIndex) {
                styleSettingsModel = that.cfModel.FormatConditionStyleSettings[styleIndex];
                ruleIndex = styleSettingsInfo.styleAndRuleMappingTable[styleIndex];
                if (styleSettingsModel.IsBarStyle) {
                    condition = that.cfModel.RuleModels[ruleIndex].ConditionModel;
                    barInfo = that._getBarInfo(styleSettingsModel, styleIndex, condition);
                }
                else if (styleSettingsModel.RangeIndex || styleSettingsModel.AppearanceType !== APPEARANCE_TYPE_NONE) {
                    $container.addClass(that.cssCustomClasses[styleIndex]);
                }
                else if (styleSettingsModel.IconType !== ICON_TYPE_NONE)
                    iconType = styleSettingsModel.IconType;
            });
            if (barInfo) {
                barInfo.normalizedValue = styleSettingsInfo.normalizedValue;
                barInfo.zeroPosition = styleSettingsInfo.zeroPosition;
                this._createBarContent($container, barInfo, barPrefix, forceLeftAlignment);
            }
            else if (!ignoreImageSettings && iconType) {
                this._applyIconSettings($container, iconType, forceLeftAlignment);
            }
        }
    };
    styleSettingsProvider.prototype._getContainerHeights = function (barCacheItems) {
        var containerHeights = [];
        $.each(barCacheItems, function (_, barCacheItem) {
            var $container = barCacheItem.container, containerElement = $container.get(0), containerBounds = containerElement.getBoundingClientRect(), topBorderWidth = parseInt($container.css("border-top-width")) || 0, bottomBorderWidth = parseInt($container.css("border-bottom-width")) || 0, height = browser.webkit ? containerBounds.height - topBorderWidth : containerBounds.height - topBorderWidth - bottomBorderWidth;
            if (browser.msie)
                height = Math.floor(height);
            containerHeights.push(height);
        });
        return containerHeights;
    };
    styleSettingsProvider.prototype._createCssClassName = function (prefix, styleIndex) {
        return prefix + '-' + this.id + '-' + styleIndex;
    };
    styleSettingsProvider.prototype._applyIconSettings = function ($container, iconType, forceLeftAlignment) {
        if (!$container.hasClass('dx-white-space-column')) {
            var classes = styleSettingsProvider.cssClassNames;
            var textAlignmentIsLeft = this._textAlignmentIsLeft($container);
            var imageClasses = [classes.iconConditionalFormatting, styleSettingsProvider.toIconCssClass(iconType)];
            var textClasses = [this.wordWrap ? classes.wordWrap : classes.truncated,
                forceLeftAlignment ? '' : classes.stretched].join(' ');
            if ($container.children().length > 0) {
                $container.find('.dx-expand-icon-container').addClass(classes.fixed);
                $container.find('>:not(.dx-expand-icon-container)').addClass(textClasses);
            }
            else {
                $container.wrapInner($('<div/>').addClass(textClasses));
            }
            var marginClass = textAlignmentIsLeft ? classes.leftMargin : classes.rightMargin;
            imageClasses.push(classes.fixed, marginClass);
            $container[textAlignmentIsLeft ? 'append' : 'prepend']($('<div/>').addClass(imageClasses.join(' ')));
            $container.wrapInner($('<div/>').addClass(classes.flexParent));
        }
    };
    styleSettingsProvider.prototype._textAlignmentIsLeft = function ($container) {
        var textAlignment = $container.css('text-align');
        return textAlignment === 'left' || textAlignment === 'start' || textAlignment === 'center' || textAlignment === 'justify';
    };
    styleSettingsProvider.prototype._getBarInfo = function (styleSettingsModel, styleIndex, condition) {
        return {
            showBarOnly: condition.BarOptions.ShowBarOnly,
            allowNegativeAxis: condition.BarOptions.AllowNegativeAxis,
            drawAxis: condition.BarOptions.DrawAxis,
            cssClass: this.cssCustomClasses[styleIndex]
        };
    };
    styleSettingsProvider.prototype._createBarContent = function ($container, barInfo, barPrefix, forceLeftAlignment) {
        var displayText = $container.text(), $tooltipDiv, index, tooltipId, containerId, $barContainer, barCacheItem = new BarCacheItem();
        if (!this.padding)
            this.padding = $container.css('padding-top') + " " + $container.css('padding-left');
        if (!this.barCache[barPrefix])
            this.barCache[barPrefix] = [];
        this.barCache[barPrefix].push(barCacheItem);
        $container.addClass(styleSettingsProvider.cssClassNames.barContainer);
        $barContainer = $('<div/>').addClass(styleSettingsProvider.cssClassNames.relativePosition);
        barCacheItem.container = $container;
        barCacheItem.barContainer = $barContainer;
        if (!this.barPrefixes.some(function (prefix) { return prefix === barPrefix; }))
            this.barPrefixes.push(barPrefix);
        barCacheItem.barDiv = this._createBarDiv($barContainer, barInfo, barPrefix);
        barCacheItem.showBarOnly = barInfo.showBarOnly;
        barCacheItem.drawAxis = barInfo.drawAxis;
        if (barInfo.drawAxis) {
            barCacheItem.axisDiv = this._createAxisDiv($barContainer, barPrefix, barInfo.zeroPosition);
        }
        if (!barInfo.showBarOnly) {
            barCacheItem.textDiv = $('<div/>').addClass(styleSettingsProvider.cssClassNames.barValue).text(displayText);
        }
        else {
            barCacheItem.textDiv = $('<div/>').html("&nbsp;");
            index = styleSettingsProvider.hiddenTextCounter++;
            tooltipId = TOOLTIP_PREFIX + index;
            containerId = HIDDEN_TEXT_PREFIX + index;
            $container.attr("id", containerId);
            var tooltipDiv = document.createElement('div');
            tooltipDiv.innerText = displayText;
            tooltipDiv.id = tooltipId;
            new tooltip_1.default(tooltipDiv, {
                target: '#' + containerId,
                showEvent: "dxhoverstart",
                hideEvent: "dxhoverend",
            });
            barCacheItem.tooltipDiv = $(tooltipDiv);
            $container.unbind().hover(function () { $(tooltipDiv).toggle(); });
        }
    };
    styleSettingsProvider.prototype._createBarDiv = function ($container, barInfo, barPrefix) {
        var $barDiv = $('<div/>').addClass(styleSettingsProvider.cssClassNames.absolutePosition).addClass(barInfo.cssClass);
        $barDiv.html("&nbsp;");
        $barDiv.addClass(this.DataAttributes.Bar + '_' + barPrefix);
        $barDiv.data(this.DataAttributes.NormalizedValue, barInfo.normalizedValue);
        $barDiv.data(this.DataAttributes.ZeroPosition, barInfo.zeroPosition);
        $barDiv.data(this.DataAttributes.AllowNegativeAxis, barInfo.allowNegativeAxis);
        $barDiv.data(this.DataAttributes.DrawAxis, barInfo.drawAxis);
        return $barDiv;
    };
    styleSettingsProvider.prototype._createAxisDiv = function ($container, barPrefix, zeroPosition) {
        var $axisDiv = $('<div/>');
        $axisDiv.addClass(styleSettingsProvider.cssClassNames.absolutePosition).addClass(this.DataAttributes.Axis + '_' + barPrefix + ' ' + styleSettingsProvider.cssClassNames.barAxis);
        $axisDiv.data(this.DataAttributes.ZeroPosition, zeroPosition);
        return $axisDiv;
    };
    styleSettingsProvider.prototype._setBarBounds = function ($barDiv, containerHeight, zeroPosition, normalizedValue, allowNegativeAxis, drawAxis) {
        var barWidth = Math.abs(normalizedValue * 100), axisPosition = Math.abs(zeroPosition * 100), width = allowNegativeAxis && drawAxis && normalizedValue < 0 && zeroPosition > 0 ? 'calc(' + barWidth + '% + 1px)' : barWidth + '%';
        $barDiv.css({
            height: containerHeight + 'px',
            width: width
        });
        if (allowNegativeAxis && normalizedValue < 0 && zeroPosition > 0) {
            if (drawAxis) {
                $barDiv.css('right', 'calc(' + (100 - axisPosition) + '% - 1px)');
            }
            else {
                $barDiv.css('right', (100 - axisPosition) + '%');
            }
        }
        else
            $barDiv.css('left', axisPosition + '%');
    };
    styleSettingsProvider.prototype._setAxisBounds = function ($axisDiv, containerHeight, zeroPosition) {
        $axisDiv.css({
            left: Math.abs(zeroPosition * 100) + '%',
            height: Math.max(0, containerHeight - VERTICAL_AXIS_PADDING * 2) + 'px'
        });
    };
    styleSettingsProvider.prototype._getCustomBackColor = function (color) {
        if (color.toHex)
            return color.toHex();
        return _utils_1.toColor(color);
    };
    styleSettingsProvider.prototype._getRangeBackColorStyleSettings = function (styleSettings, ruleIndex) {
        var rangeIndex = styleSettings.RangeIndex, condition = this.cfModel.RuleModels[ruleIndex].ConditionModel, leftIndex = -1, rightIndex = -1, leftModel, rightModel, resultModel, leftColor, rightColor, color;
        $.each(condition.FixedColors, function (index, colorModel) {
            if (index < rangeIndex && (leftIndex === -1 || index > leftIndex))
                leftIndex = index;
            if (index > rangeIndex && (rightIndex === -1 || index < rightIndex))
                rightIndex = index;
        });
        leftModel = condition.FixedColors[leftIndex];
        rightModel = condition.FixedColors[rightIndex];
        leftColor = this._getBackColor(leftModel);
        rightColor = this._getBackColor(rightModel);
        return {
            AppearanceType: APPEARANCE_TYPE_CUSTOM,
            Color: leftColor.blend(rightColor, (rangeIndex - leftIndex) / (rightIndex - leftIndex)),
            ForeColor: leftModel.ForeColor,
            FontFamily: leftModel.FontFamily,
            FontSize: leftModel.FontSize,
            FontStyle: leftModel.FontStyle,
            IsBarStyle: leftModel.IsBarStyle
        };
    };
    styleSettingsProvider.prototype._getBackColor = function (colorModel) {
        var color;
        if (colorModel.AppearanceType === APPEARANCE_TYPE_CUSTOM) {
            color = _utils_1.toColor(colorModel.Color);
        }
        else if (colorModel.AppearanceType !== APPEARANCE_TYPE_NONE) {
            color = _appearance_settings_provider_1.appearanceSettingsProvider.backAndGradientColorGroupsToBackColor(colorModel.AppearanceType);
        }
        return new Color(color);
    };
    styleSettingsProvider.prototype._clearCssClasses = function () {
        var that = this;
        $.each(that.cssCustomClassesLinks, function (_, s) {
            s.remove();
        });
        that.cssCustomClassesLinks = [];
    };
    styleSettingsProvider.prototype._registerCssClasses = function () {
        var that = this, cssClassName, selector;
        if (that.cfModel != undefined) {
            $.each(that.cfModel.FormatConditionStyleSettings, function (i, styleSettingsModel) {
                cssClassName = that._createCssClassName(styleSettingsProvider.cssClassNames.customStyle, i);
                selector = that._getCssTdSelector(cssClassName);
                that.cssCustomClasses[i] = cssClassName;
                if (styleSettingsModel.RangeIndex) {
                    styleSettingsModel = that._getRangeBackColorStyleSettings(styleSettingsModel, styleSettingsModel.RuleIndex);
                    that._createCssClassFromCustomAppearanceType(styleSettingsModel, selector);
                }
                else if (styleSettingsModel.AppearanceType === APPEARANCE_TYPE_CUSTOM) {
                    that._createCssClassFromCustomAppearanceType(styleSettingsModel, selector);
                }
                else if (styleSettingsModel.AppearanceType !== APPEARANCE_TYPE_NONE) {
                    that._createCssClassFromPredefinedAppearanceType(selector, styleSettingsModel.AppearanceType);
                }
            });
        }
    };
    styleSettingsProvider.prototype._getCssTdSelector = function (cssClassname) {
        return '.' + styleSettingsProvider.cssClassNames.dashboardContainer + ' .' + cssClassname + ', '
            + GRID_BANDED_ROW_SELECTOR + ' .' + cssClassname + ', '
            + PIVOT_AREA_SELECTOR + ' .' + cssClassname;
    };
    styleSettingsProvider.prototype._createCssClassFromCustomAppearanceType = function (styleSettingsModel, cssSelector) {
        var isUnderline = (styleSettingsModel.FontStyle & this.FontStyle.Underline) !== 0, isStrikeout = (styleSettingsModel.FontStyle & this.FontStyle.Strikeout) !== 0, style = "<style type='text/css'> " + cssSelector + '{ ', $style;
        if (styleSettingsModel.ForeColor)
            style += 'color:' + _utils_1.toColor(styleSettingsModel.ForeColor) + ';';
        if (styleSettingsModel.Color)
            style += 'background-color:' + this._getCustomBackColor(styleSettingsModel.Color) + ';';
        if (styleSettingsModel.FontFamily)
            style += 'font-family:' + styleSettingsModel.FontFamily + ';';
        if (styleSettingsModel.FontSize && styleSettingsModel.FontSize > 0)
            style += 'font-size:' + styleSettingsModel.FontSize + ';';
        if ((styleSettingsModel.FontStyle & this.FontStyle.Bold) !== 0)
            style += 'font-weight:bold;';
        if ((styleSettingsModel.FontStyle & this.FontStyle.Italic) !== 0)
            style += 'font-style: italic;';
        if (isUnderline && isStrikeout)
            style += 'text-decoration: underline line-through;';
        else if (isUnderline)
            style += 'text-decoration: underline;';
        else if (isStrikeout)
            style += 'text-decoration: line-through;';
        style += "</style>";
        $style = $(style);
        $style.appendTo("head");
        this.cssCustomClassesLinks.push($style);
    };
    styleSettingsProvider.prototype._createCssClassFromPredefinedAppearanceType = function (selector, appearanceType) {
        var style = "<style type='text/css'> " + selector +
            _appearance_settings_provider_1.appearanceSettingsProvider.toCssClassBody(appearanceType) +
            "</style>", $style = $(style);
        $style.appendTo("head");
        this.cssCustomClassesLinks.push($style);
    };
    styleSettingsProvider.cssClassNames = {
        iconConditionalFormatting: 'dx-icon-dashboard-cf',
        barAxis: 'dx-dashboard-bar-axis',
        customStyle: 'dx-dashboard-cf-style',
        customGradientStyle: 'dx-dashboard-cf-gradient-style',
        dashboardContainer: 'dx-dashboard-container',
        absolutePosition: 'dx-dashboard-absolute-position',
        relativePosition: 'dx-dashboard-relative-position',
        flexParent: 'dx-dashboard-flex-parent',
        truncated: 'dx-dashboard-truncated',
        wordWrap: 'dx-dashboard-word-wrap',
        stretched: 'dx-dashboard-stretched',
        fixed: 'dx-dashboard-fixed',
        leftMargin: 'dx-dashboard-left-margin',
        rightMargin: 'dx-dashboard-right-margin',
        barContainer: 'dx-dashboard-cf-bar-container',
        barValue: 'dx-dashboard-cf-bar-value'
    };
    styleSettingsProvider.inctanceCounter = 0;
    styleSettingsProvider.hiddenTextCounter = 0;
    return styleSettingsProvider;
}());
exports.styleSettingsProvider = styleSettingsProvider;
