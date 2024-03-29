﻿/**
* DevExpress Dashboard (_grid-column-painter.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _delta_indicator_1 = require("../../widgets/indicators/_delta-indicator");
var _simple_indicator_1 = require("../../widgets/indicators/_simple-indicator");
var _render_helper_1 = require("../../widgets/_render-helper");
var _utils_1 = require("../../../data/_utils");
var $ = require("jquery");
var string_1 = require("devextreme/core/utils/string");
require("devextreme/viz/bullet");
var bullet_1 = require("devextreme/viz/bullet");
require("devextreme/viz/sparkline");
var sparkline_1 = require("devextreme/viz/sparkline");
var _z_index_1 = require("../../../data/_z-index");
var GridColumnPainter = (function () {
    function GridColumnPainter() {
    }
    GridColumnPainter.renderDelta = function (parentContainer, deltaValue, isDetail) {
        var container = document.createElement('div');
        container.classList.add(this.CssClasses.flexDeltaParent);
        container.classList.add(_delta_indicator_1.DeltaIndicator.getIndicatorColorType(deltaValue.type, deltaValue.hasPositiveMeaning, deltaValue.text.useDefaultColor));
        if (!isDetail) {
            container.classList.add(this.CssClasses.rightAlignment);
        }
        parentContainer.appendChild(container);
        var textDiv = document.createElement('div');
        textDiv.classList.add(this.CssClasses.truncated);
        textDiv.innerText = deltaValue.text.value;
        container.appendChild(textDiv);
        var indicatorDiv = document.createElement('div');
        indicatorDiv.classList.add(this.CssClasses.fixed);
        indicatorDiv.classList.add(this.CssClasses.deltaIndicator);
        indicatorDiv.innerHTML = _simple_indicator_1.SimpleIndicator.getIndicator(deltaValue.type, deltaValue.hasPositiveMeaning) || '';
        container.appendChild(indicatorDiv);
    };
    GridColumnPainter.renderSparkline = function (name, showStartEndValues, parentContainer, sparklineData) {
        var container = document.createElement('div');
        container.classList.add(name + '_sparkline-container');
        container.classList.add(this.CssClasses.flexParent);
        parentContainer.appendChild(container);
        var sparklineDiv = document.createElement('div');
        sparklineDiv.classList.add(name + '_sparkline');
        container.appendChild(sparklineDiv);
        if (showStartEndValues) {
            var startDiv = document.createElement('div');
            startDiv.classList.add(this.CssClasses.sparklineStartValue);
            startDiv.classList.add(name + '_startValue');
            startDiv.innerText = sparklineData.startText;
            $(startDiv).prependTo(container);
            var endDiv = document.createElement('div');
            endDiv.classList.add(name + '_endValue');
            endDiv.innerText = sparklineData.endText;
            container.appendChild(endDiv);
        }
        _utils_1.extend(sparklineData.sparkline, {
            size: {
                height: 20,
                width: 10
            },
            pointSize: 1
        });
        new sparkline_1.default(sparklineDiv, sparklineData.sparkline);
    };
    GridColumnPainter.renderBar = function (columnName, parentContainer, tooltipText, value, zeroValue) {
        var zerovalue = zeroValue;
        var barContainer = document.createElement('div');
        barContainer.classList.add(this.CssClasses.flexParent);
        barContainer.classList.add(columnName + '_bar-container');
        parentContainer.appendChild(barContainer);
        var barDiv = document.createElement('div');
        barDiv.classList.add(columnName + '_bar');
        barContainer.appendChild(barDiv);
        new bullet_1.default(barDiv, {
            startScaleValue: -zerovalue,
            endScaleValue: 1 - zerovalue,
            value: value,
            showZeroLevel: value !== 0 && zerovalue !== 0 && zerovalue !== 1,
            showTarget: false,
            onIncidentOccurred: _render_helper_1.RenderHelper.widgetIncidentOccurred,
            tooltip: {
                container: _utils_1.tooltipContainerSelector,
                customizeTooltip: function () {
                    return {
                        text: tooltipText
                    };
                },
                zIndex: _z_index_1.zIndex.dashboardItemTooltips
            },
            size: {
                height: 20,
                width: 10
            }
        });
    };
    GridColumnPainter.renderImage = function (container, imageData) {
        var img = document.createElement('img');
        img.src = 'data:image/png;base64,' + imageData.value;
        container.appendChild(img);
    };
    GridColumnPainter.renderHyperlink = function (container, uri, displayValue, isEncodeHtml) {
        if (uri) {
            var a = document.createElement('a');
            a.target = "_blank";
            a.onclick = function (event) { return event.stopPropagation(); };
            a.rel = "noopener noreferrer";
            a.href = _utils_1.isVulnerable(uri) ? '' : uri;
            _render_helper_1.RenderHelper.html(a, displayValue, isEncodeHtml);
            container.appendChild(a);
        }
        else {
            _render_helper_1.RenderHelper.html(container, displayValue, isEncodeHtml);
        }
    };
    GridColumnPainter.renderValue = function (container, text, isEncodeHtml) {
        if (string_1.isEmpty(text)) {
            _render_helper_1.RenderHelper.html(container, "&nbsp;", false);
        }
        else {
            _render_helper_1.RenderHelper.html(container, text, isEncodeHtml);
        }
    };
    GridColumnPainter.changeGridSparklineColumnsWidth = function (gridRootElement, columnName) {
        var that = this, startValues = gridRootElement.querySelectorAll('.' + columnName + '_startValue'), endValues = gridRootElement.querySelectorAll('.' + columnName + '_endValue'), maxStartWidth = that.calcMaxWidth(startValues), maxEndWidth = that.calcMaxWidth(endValues), sparklineDivs = gridRootElement.querySelectorAll('.' + columnName + '_sparkline'), firstsparklineContainer = $(gridRootElement.querySelectorAll('.' + columnName + '_sparkline-container')).filter(":visible").get(0), columnWidth = firstsparklineContainer ? $(firstsparklineContainer).width() : 0, sparklineWidth = columnWidth - (maxStartWidth + maxEndWidth);
        if (sparklineWidth >= 0) {
            $(startValues).width(maxStartWidth);
            $(endValues).width(maxEndWidth);
            $(startValues).show();
            $(endValues).show();
            for (var i = 0; i < sparklineDivs.length; i++) {
                var sparklineContainer = sparklineDivs[i];
                var sparkline = sparkline_1.default.getInstance(sparklineContainer);
                sparkline.option('size', { width: sparklineWidth });
                $(sparklineContainer).show();
            }
        }
        else {
            $.each(sparklineDivs, function (_, sparklineDiv) {
                $(sparklineDiv).hide();
            });
            if (columnWidth >= maxStartWidth + maxEndWidth) {
                $(startValues).show();
            }
            else {
                $(startValues).hide();
                if (columnWidth >= maxEndWidth) {
                    $(endValues).show();
                }
                else {
                    $(endValues).hide();
                }
            }
        }
    };
    GridColumnPainter.calcMaxWidth = function (values) {
        var maxWidth = 0;
        var nodeLen = values.length;
        for (var i = 0; i < nodeLen; ++i) {
            maxWidth = Math.max(maxWidth, values[i].offsetWidth);
        }
        return maxWidth;
    };
    GridColumnPainter.changeGridBarColumnsWidth = function (gridRootElement, columnName) {
        var that = this, bars = gridRootElement.querySelectorAll('.' + columnName + '_bar'), firstBarContainer = $(gridRootElement.querySelectorAll('.' + columnName + '_bar-container')).filter(":visible").get(0), columnWidth = firstBarContainer ? $(firstBarContainer).width() : 0;
        for (var i = 0; i < bars.length; ++i) {
            var barContainer = bars[i];
            if (columnWidth > 0) {
                $(barContainer).show();
                var bullet = bullet_1.default.getInstance(barContainer);
                bullet.option('size', {
                    width: columnWidth
                });
            }
            else {
                $(barContainer).hide();
            }
        }
    };
    GridColumnPainter.CssClasses = {
        flexParent: 'dx-dashboard-flex-parent',
        flexDeltaParent: 'dx-dashboard-flex-delta-parent',
        sparklineStartValue: 'dx-dashboard-sparkline-start-value',
        deltaIndicator: 'dx-dashboard-delta-indicator',
        truncated: 'dx-dashboard-truncated',
        fixed: 'dx-dashboard-fixed',
        rightAlignment: 'dx-dashboard-flex-right'
    };
    return GridColumnPainter;
}());
exports.GridColumnPainter = GridColumnPainter;
