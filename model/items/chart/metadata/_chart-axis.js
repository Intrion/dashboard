/**
* DevExpress Dashboard (_chart-axis.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_item_1 = require("../../../data-item/metadata/_data-item");
exports.reverse = { propertyName: 'reverse', modelName: '@Reverse', displayName: "DashboardWebStringId.Chart.Reverse", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.axisVisible = { propertyName: 'visible', modelName: '@Visible', displayName: "DashboardWebStringId.Chart.Visible", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.titleVisibleBaseInfo = { propertyName: 'titleVisible', modelName: '@TitleVisible', displayName: "DashboardWebStringId.Chart.Title", editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
function getInfoTitleVisible(defaultVal) { return __assign({ defaultVal: defaultVal }, exports.titleVisibleBaseInfo); }
;
exports.title = { propertyName: 'title', modelName: '@Title', displayName: "DashboardWebStringId.Chart.TitleText", editor: _base_metadata_1.editorTemplates.text };
exports.chartAxisSerializationsInfo = [exports.axisVisible, exports.reverse, exports.title, _data_item_1.numericFormat];
exports.enableZooming = { propertyName: 'enableZooming', modelName: '@EnableZooming', displayName: "DashboardWebStringId.Chart.EnableZooming", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.limitVisiblePoints = { propertyName: 'limitVisiblePoints', modelName: '@LimitVisiblePoints', displayName: "DashboardWebStringId.Chart.LimitVisiblePoints", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.visiblePointsCount = { propertyName: 'visiblePointsCount', modelName: '@VisiblePointsCount', displayName: "DashboardWebStringId.Chart.VisiblePointsCount", defaultVal: 10, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, validationRules: [{ type: "range", min: 1 }, _base_metadata_1.integerValidationRule] };
exports.chartAxisXSerializationsInfo = exports.chartAxisSerializationsInfo.concat([getInfoTitleVisible(false), exports.enableZooming, exports.limitVisiblePoints, exports.visiblePointsCount, _data_item_1.dateTimeFormat]);
exports.alwaysShowZeroLevelTemplate = { propertyName: 'alwaysShowZeroLevel', modelName: '@AlwaysShowZeroLevel', displayName: "DashboardWebStringId.Chart.AlwaysShowZeroLevel", editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.chartAlwaysShowZeroLevel = __assign({ defaultVal: true }, exports.alwaysShowZeroLevelTemplate);
exports.alwaysShowZeroLevelScatter = __assign({ defaultVal: false }, exports.alwaysShowZeroLevelTemplate);
exports.showGridLinesBaseInfo = { propertyName: 'showGridLines', modelName: '@ShowGridLines', displayName: "DashboardWebStringId.Chart.GridLines", editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
function getInfoShowGridLines(defaultVal) { return __assign({ defaultVal: defaultVal }, exports.showGridLinesBaseInfo); }
exports.logarithmic = { propertyName: 'logarithmic', modelName: '@Logarithmic', displayName: "DashboardWebStringId.Chart.LogarithmicScale", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.logarithmicBase = {
    propertyName: 'logarithmicBase', modelName: '@LogarithmicBase', displayName: "DashboardWebStringId.Chart.LogarithmicScaleBase", defaultVal: "Base10", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Base2": "Base2",
        "Base5": "Base5",
        "Base10": "Base10"
    }
};
exports.chartAxisYBaseSerializationsInfo = exports.chartAxisSerializationsInfo.concat([exports.logarithmic, exports.logarithmicBase]);
exports.chartAxisYSerializationsInfo = exports.chartAxisYBaseSerializationsInfo.concat([exports.chartAlwaysShowZeroLevel, getInfoTitleVisible(true), getInfoShowGridLines(true)]);
exports.chartSecondaryAxisYSerializationsInfo = exports.chartAxisYBaseSerializationsInfo.concat([exports.chartAlwaysShowZeroLevel, getInfoTitleVisible(true), getInfoShowGridLines(false)]);
exports.scatterChartAxisYSerializationsInfo = exports.chartAxisYBaseSerializationsInfo.concat([exports.alwaysShowZeroLevelScatter, getInfoTitleVisible(true), getInfoShowGridLines(true)]);
