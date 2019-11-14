/**
* DevExpress Dashboard (_rank-calculation.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _measure_calculation_1 = require("./_measure-calculation");
exports.calculationRankType = {
    propertyName: 'rankType', modelName: '@RankType', displayName: "DashboardWebStringId.Calculations.RankType", defaultVal: "Competition", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Unique": "DashboardStringId.RankTypeUnique",
        "Competition": "DashboardStringId.RankTypeCompetition",
        "Dense": "DashboardStringId.RankTypeDense",
        "Modified": "DashboardStringId.RankTypeModified",
        "Percentile": "DashboardStringId.RankTypePercentile"
    }
};
exports.calculationRankOrder = {
    propertyName: 'rankOrder', modelName: '@RankOrder', displayName: "DashboardWebStringId.Calculations.RankOrder", defaultVal: "Ascending", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Ascending": "DashboardStringId.RankOrderAscending",
        "Descending": "DashboardStringId.RankOrderDescending"
    }
};
exports.rankCalculationSerializationsInfo = _measure_calculation_1.measureCalculationSerializationsInfo.concat([exports.calculationRankType, exports.calculationRankOrder]);
