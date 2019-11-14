/**
* DevExpress Dashboard (_item-meta-data.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _formatter_1 = require("../../_formatter");
var _item_data_axis_names_1 = require("../../../viewer-parts/viewer/_item-data-axis-names");
var $ = require("jquery");
exports.deltaValueNames = {
    actualValue: 'actualValue',
    targetValue: 'targetValue',
    absoluteVariation: 'absoluteVariation',
    percentVariation: 'percentVariation',
    percentOfTarget: 'percentOfTarget',
    mainValue: 'mainValue',
    subValue1: 'subValue1',
    subValue2: 'subValue2',
    isGood: 'isGood',
    indicatorType: 'indicatorType'
};
exports.deltaValueTypes = {
    actualValue: 'ActualValue',
    absoluteVariation: 'AbsoluteVariation',
    percentVariation: 'PercentVariation',
    percentOfTarget: 'PercentOfTarget'
};
var itemMetaData = (function () {
    function itemMetaData(metaData) {
        this._metaData = metaData;
        this._data = {};
    }
    itemMetaData.prototype.initialize = function () {
        var data = this._data, metaData = this._metaData;
        data.measuresInfo = this._createMeasureInfo(metaData.MeasureDescriptors);
        data.colorMeasuresInfo = this._createMeasureInfo(metaData.ColorMeasureDescriptors);
        data.conditionalFormattingMeasuresInfo = this._createMeasureInfo(metaData.FormatConditionMeasureDescriptors);
        data.deltaInfo = this._createDeltaInfo();
        data.axesInfo = this._createAxesInfo();
        data.dataSourceColumns = this._metaData.DataSourceColumns;
    };
    itemMetaData.prototype._createMeasureInfo = function (descriptors) {
        var measures = [], formatByMeasureId = {};
        if (descriptors) {
            $.each(descriptors, function (_, _measure) {
                var measure = {
                    id: _measure.ID,
                    name: _measure.Name,
                    dataMember: _measure.DataMember,
                    finalDataType: _measure.FinalDataType,
                    summaryType: _measure.SummaryType,
                    format: function (value) {
                        var format = _measure.Format, text = undefined;
                        if (format)
                            text = _formatter_1.format(value, format);
                        return text;
                    }
                };
                measures.push(measure);
                formatByMeasureId[measure.id] = _measure.Format;
            });
        }
        return {
            measures: measures,
            formatByMeasureId: formatByMeasureId
        };
    };
    itemMetaData.prototype._createDeltaInfo = function () {
        var metaData = this._metaData, names = exports.deltaValueNames, deltas = [], valueIdsByDeltaId = {}, formatsByDeltaId = {};
        if (metaData.DeltaDescriptors) {
            $.each(metaData.DeltaDescriptors, function (_, _delta) {
                var delta = {
                    id: _delta.ID,
                    name: _delta.Name,
                    actualMeasureId: _delta.ActualMeasureID,
                    targetMeasureId: _delta.TargetMeasureID
                }, ids = {}, formats = {};
                deltas.push(delta);
                ids[names.actualValue] = _delta.ActualValueID;
                ids[names.targetValue] = _delta.TargetValueID;
                ids[names.absoluteVariation] = _delta.AbsoluteVariationID;
                ids[names.percentVariation] = _delta.PercentVariationID;
                ids[names.percentOfTarget] = _delta.PercentOfTargetID;
                ids[names.isGood] = _delta.IsGoodID;
                ids[names.indicatorType] = _delta.IndicatorTypeID;
                formats[names.actualValue] = _delta.ActualValueFormat;
                formats[names.targetValue] = _delta.TargetValueFormat;
                formats[names.absoluteVariation] = _delta.AbsoluteVariationFormat;
                formats[names.percentVariation] = _delta.PercentVariationFormat;
                formats[names.percentOfTarget] = _delta.PercentOfTargetFormat;
                switch (_delta.DeltaValueType) {
                    case exports.deltaValueTypes.actualValue:
                        ids[names.mainValue] = ids[names.actualValue];
                        ids[names.subValue1] = ids[names.absoluteVariation];
                        ids[names.subValue2] = ids[names.percentVariation];
                        formats[names.mainValue] = formats[names.actualValue];
                        formats[names.subValue1] = formats[names.absoluteVariation];
                        formats[names.subValue2] = formats[names.percentVariation];
                        break;
                    case exports.deltaValueTypes.absoluteVariation:
                        ids[names.mainValue] = ids[names.absoluteVariation];
                        ids[names.subValue1] = ids[names.actualValue];
                        ids[names.subValue2] = ids[names.percentVariation];
                        formats[names.mainValue] = formats[names.absoluteVariation];
                        formats[names.subValue1] = formats[names.actualValue];
                        formats[names.subValue2] = formats[names.percentVariation];
                        break;
                    case exports.deltaValueTypes.percentVariation:
                        ids[names.mainValue] = ids[names.percentVariation];
                        ids[names.subValue1] = ids[names.actualValue];
                        ids[names.subValue2] = ids[names.absoluteVariation];
                        formats[names.mainValue] = formats[names.percentVariation];
                        formats[names.subValue1] = formats[names.actualValue];
                        formats[names.subValue2] = formats[names.absoluteVariation];
                        break;
                    case exports.deltaValueTypes.percentOfTarget:
                        ids[names.mainValue] = ids[names.percentOfTarget];
                        ids[names.subValue1] = ids[names.actualValue];
                        ids[names.subValue2] = ids[names.absoluteVariation];
                        formats[names.mainValue] = formats[names.percentOfTarget];
                        formats[names.subValue1] = formats[names.actualValue];
                        formats[names.subValue2] = formats[names.absoluteVariation];
                        break;
                }
                valueIdsByDeltaId[delta.id] = ids;
                formatsByDeltaId[delta.id] = formats;
            });
        }
        return {
            deltas: deltas,
            valueIdsByDeltaId: valueIdsByDeltaId,
            formatsByDeltaId: formatsByDeltaId
        };
    };
    itemMetaData.prototype._createAxesInfo = function () {
        var metaData = this._metaData, axes = {}, dimensionDescriptors = metaData.DimensionDescriptors || {}, levelByDimensionId = {}, formatByDimensionId = {}, pivotAreaByAxisName = {};
        $.each(dimensionDescriptors, function (_name, _dimensions) {
            var dimensions = [];
            if (_dimensions) {
                $.each(_dimensions, function (_, _dimension) {
                    var dimension = {
                        id: _dimension.ID,
                        name: _dimension.Name,
                        dataMember: _dimension.DataMember,
                        finalDataType: _dimension.FinalDataType,
                        dateTimeGroupInterval: _dimension.DateTimeGroupInterval,
                        textGroupInterval: _dimension.TextGroupInterval,
                        getFormat: function () {
                            return _formatter_1.convertToFormat(_dimension.Format);
                        },
                        format: function (value) {
                            var format = _dimension.Format, text = undefined;
                            if (format)
                                text = _formatter_1.format(value, format);
                            return text;
                        }
                    };
                    levelByDimensionId[dimension.id] = _dimension.Level;
                    formatByDimensionId[dimension.id] = _dimension.Format;
                    dimensions.push(dimension);
                });
            }
            axes[_name] = dimensions;
        });
        if (metaData.ColumnHierarchy)
            pivotAreaByAxisName[metaData.ColumnHierarchy] = 'Columns';
        if (metaData.RowHierarchy)
            pivotAreaByAxisName[metaData.RowHierarchy] = 'Rows';
        return {
            axes: axes,
            levelByDimensionId: levelByDimensionId,
            formatByDimensionId: formatByDimensionId,
            pivotAreaByAxisName: pivotAreaByAxisName
        };
    };
    itemMetaData.prototype.getAxes = function () {
        return this._data.axesInfo.axes;
    };
    itemMetaData.prototype.getAxisNames = function () {
        var names = [];
        $.each(this.getAxes(), function (name) {
            names.push(name);
        });
        return names;
    };
    itemMetaData.prototype.getPivotAreaByAxisName = function (name) {
        return this._data.axesInfo.pivotAreaByAxisName[name];
    };
    itemMetaData.prototype.getColorMeasures = function () {
        return this._data.colorMeasuresInfo.measures;
    };
    itemMetaData.prototype.getConditionalFormattingMeasures = function () {
        return this._data.conditionalFormattingMeasuresInfo.measures;
    };
    itemMetaData.prototype.getDimensions = function (axisName) {
        return this.getAxes()[axisName === undefined ? _item_data_axis_names_1.itemDataAxisNames.defaultAxis : axisName];
    };
    itemMetaData.prototype.getMeasures = function () {
        return this._data.measuresInfo.measures;
    };
    itemMetaData.prototype.getDeltas = function () {
        return this._data.deltaInfo.deltas;
    };
    itemMetaData.prototype.getMeasureById = function (id) {
        var measures = this.getMeasures(), foundMeasures = $.grep(measures, function (measure, i) {
            return measure.id == id;
        });
        return foundMeasures[0];
    };
    itemMetaData.prototype.getDeltaById = function (id) {
        var deltas = this.getDeltas(), foundDeltas = $.grep(deltas, function (delta, i) {
            return delta.id == id;
        });
        return foundDeltas[0];
    };
    itemMetaData.prototype.getMeasureFormat = function (measureId) {
        return this._data.measuresInfo.formatByMeasureId[measureId];
    };
    itemMetaData.prototype.getDeltaValueIds = function (deltaId) {
        return this._data.deltaInfo.valueIdsByDeltaId[deltaId];
    };
    itemMetaData.prototype.getDeltaFormats = function (deltaId) {
        return this._data.deltaInfo.formatsByDeltaId[deltaId];
    };
    itemMetaData.prototype.getDeltaValueType = function (deltaId) {
    };
    itemMetaData.prototype.getDimensionLevel = function (dimensionId) {
        return this._data.axesInfo.levelByDimensionId[dimensionId];
    };
    itemMetaData.prototype.getDimensionFormat = function (dimensionId) {
        return this._data.axesInfo.formatByDimensionId[dimensionId];
    };
    itemMetaData.prototype.getDataMembers = function () {
        return this._data.dataSourceColumns;
    };
    itemMetaData.prototype.getFinalDataType = function (dataItemId) {
        var dataItem = this.getMeasureById(dataItemId);
        if (!dataItem) {
            $.each(this.getAxes(), function (axisName, dimensions) {
                dataItem = dimensions.filter(function (d) { return d.id == dataItemId; })[0];
                if (!!dataItem) {
                    return false;
                }
            });
        }
        return !!dataItem ? dataItem.finalDataType : undefined;
    };
    return itemMetaData;
}());
exports.itemMetaData = itemMetaData;
