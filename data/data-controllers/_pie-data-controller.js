/**
* DevExpress Dashboard (_pie-data-controller.js)
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
var _chart_data_controller_base_1 = require("./_chart-data-controller-base");
var _formatter_1 = require("../_formatter");
var PieSettingsType = {
    SeriesOnly: 'SeriesOnly',
    ArgumentsOnly: 'ArgumentsOnly',
    ArgumentsAndSeries: 'ArgumentsAndSeries',
    ElementSelection: 'ElementSelection'
};
var pieDataController = (function (_super) {
    __extends(pieDataController, _super);
    function pieDataController(options) {
        var _this = _super.call(this, options) || this;
        if (_this.multiData && _this.viewModel) {
            _this._measures = _this.multiData ? _this.multiData.getMeasures() : [];
            _this._argumentAxisPoints = _this.getArgumentAxisPoints();
            if (_this.viewModel.ProvideValuesAsArguments) {
                _this.settingsType = PieSettingsType.SeriesOnly;
            }
            else if (!_this.viewModel.SummarySeriesMember) {
                _this.settingsType = PieSettingsType.ArgumentsOnly;
            }
            else if (_this.viewModel.ContentDescription && _this.viewModel.ContentDescription.ElementSelectionEnabled) {
                _this.settingsType = PieSettingsType.ElementSelection;
            }
            else {
                _this.settingsType = PieSettingsType.ArgumentsAndSeries;
            }
        }
        return _this;
    }
    pieDataController.prototype.getPointDisplayTexts = function (pointTag, value, percent) {
        var that = this, valueDataMember = pointTag.dataMembers[0], measure = this.multiData.getMeasureById(valueDataMember);
        return {
            argumentText: (this.settingsType === PieSettingsType.SeriesOnly) ? measure.name : that.getTitle(pointTag.axisPoint, '\n'),
            valueText: pointTag.valueText,
            percentText: _formatter_1.formatNumeric(percent, this.viewModel.PercentFormatViewModel)
        };
    };
    pieDataController.prototype.isDiscreteArgument = function () {
        return true;
    };
    pieDataController.prototype.createDataSource = function (seriesAxisPoint, valueDataMember) {
        var that = this, viewModel = that.viewModel, dataSource = [];
        if (that.settingsType === PieSettingsType.SeriesOnly) {
            var argumentAxisPoint = that._getArgumentAxis().getRootPoint();
            that._measures
                .filter(function (measure) { return viewModel.ValueDataMembers && viewModel.ValueDataMembers.indexOf(measure.id) !== -1; })
                .forEach(function (measure, index) {
                var dataMember = measure.id, valueInfo = that._getCrossSlice(argumentAxisPoint, seriesAxisPoint).getMeasureValue(dataMember);
                dataSource.push({
                    x: measure.name,
                    y: that._getCorrectZeroValue(valueInfo.getValue()),
                    tag: {
                        axisPoint: argumentAxisPoint,
                        dataMembers: [dataMember],
                        colorMeasureId: that._getColorDataMemberByIndex(index),
                        valueText: valueInfo.getDisplayText()
                    }
                });
            });
        }
        else {
            that._argumentAxisPoints.forEach(function (argumentAxisPoint) {
                var valueInfo = that._getCrossSlice(argumentAxisPoint, seriesAxisPoint).getMeasureValue(valueDataMember);
                dataSource.push({
                    x: that.getArgument(argumentAxisPoint),
                    y: that._getCorrectZeroValue(valueInfo.getValue()),
                    tag: {
                        axisPoint: argumentAxisPoint,
                        dataMembers: [valueDataMember],
                        colorMeasureId: that._getColorDataMemberByMeasureId(valueDataMember),
                        valueText: valueInfo.getDisplayText()
                    }
                });
            });
        }
        return dataSource;
    };
    pieDataController.prototype.getValueDataMembers = function () {
        var viewModel = this.viewModel;
        switch (this.settingsType) {
            case PieSettingsType.SeriesOnly:
                return ['SeriesOnlyInternalFakeValueDataMember'];
            case PieSettingsType.ArgumentsOnly:
            case PieSettingsType.ArgumentsAndSeries:
                return viewModel.ValueDataMembers;
            case PieSettingsType.ElementSelection:
                return [viewModel.ValueDataMembers[viewModel.ContentDescription.SelectedElementIndex]];
        }
    };
    pieDataController.prototype.getValueDisplayNames = function (seriesAxisPoint, valueDataMemberIndex) {
        var viewModel = this.viewModel;
        switch (this.settingsType) {
            case PieSettingsType.ArgumentsOnly:
                return viewModel.ValueDisplayNames[valueDataMemberIndex];
            case PieSettingsType.SeriesOnly:
            case PieSettingsType.ArgumentsAndSeries:
            case PieSettingsType.ElementSelection:
                return this.getTitle(seriesAxisPoint);
        }
    };
    pieDataController.prototype._getCorrectZeroValue = function (value) {
        return value === 0 || value == null ? null : Math.abs(value);
    };
    pieDataController.prototype._getColorDataMemberByMeasureId = function (valueDataMember) {
        var viewModel = this.viewModel;
        switch (this.settingsType) {
            case PieSettingsType.ArgumentsOnly:
                var index = viewModel.ValueDataMembers ? viewModel.ValueDataMembers.indexOf(valueDataMember) : -1;
                return this._getColorDataMemberByIndex(index);
            case PieSettingsType.ArgumentsAndSeries:
                return this._getColorDataMemberByIndex(0);
            case PieSettingsType.ElementSelection:
                return this._getColorDataMemberByIndex(viewModel.ContentDescription.SelectedElementIndex);
            default:
                return undefined;
        }
    };
    pieDataController.prototype._getColorDataMemberByIndex = function (index) {
        var colorDataMembers = this.viewModel.ColorDataMembers;
        return (colorDataMembers.length == 1) ? colorDataMembers[0] : colorDataMembers[index];
    };
    return pieDataController;
}(_chart_data_controller_base_1.chartDataControllerBase));
exports.pieDataController = pieDataController;
