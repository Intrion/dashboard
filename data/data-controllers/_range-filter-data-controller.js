/**
* DevExpress Dashboard (_range-filter-data-controller.js)
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
var _chart_data_controller_1 = require("./_chart-data-controller");
var _localizer_1 = require("../_localizer");
var _localization_ids_1 = require("../_localization-ids");
var _chart_helper_1 = require("../_chart-helper");
var $ = require("jquery");
var rangeFilterDataController = (function (_super) {
    __extends(rangeFilterDataController, _super);
    function rangeFilterDataController(options) {
        return _super.call(this, options) || this;
    }
    rangeFilterDataController.prototype.getArgument = function (argumentAxisPoint) {
        if (argumentAxisPoint.getParent() != null) {
            return argumentAxisPoint.getValue();
        }
        else {
            return _localizer_1.localizer.getString(_localization_ids_1.localizationId.ChartTotalValue);
        }
    };
    rangeFilterDataController.prototype._iterateSeriesTemplates = function (proc) {
        $.each(this.viewModel.SeriesTemplates, function (_, seriesTemplate) {
            proc(undefined, seriesTemplate);
        });
    };
    rangeFilterDataController.prototype._isSelectionTagsRequired = function () {
        return false;
    };
    rangeFilterDataController.prototype._getLastSeriesType = function (colorMeasureId) {
        var seriesTemplates = this.viewModel.SeriesTemplates;
        for (var i = seriesTemplates.length - 1; i >= 0; i--) {
            if (colorMeasureId === seriesTemplates[i].ColorMeasureID) {
                return _chart_helper_1.chartHelper.convertSeriesType(seriesTemplates[i].SeriesType);
            }
        }
    };
    rangeFilterDataController.prototype.showPointLabels = function (pointLabelInfo) {
        return false;
    };
    return rangeFilterDataController;
}(_chart_data_controller_1.chartDataController));
exports.rangeFilterDataController = rangeFilterDataController;
