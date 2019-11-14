/**
* DevExpress Dashboard (_limit-container.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var period_limit_1 = require("../period-limit");
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.fixedDateTimePeriodLimitProperty = {
    propertyName: 'fixed', modelName: 'FixedDateTimePeriodLimit', type: period_limit_1.FixedDateTimePeriodLimit
};
exports.flowDateTimePeriodLimitProperty = {
    propertyName: 'flow', modelName: 'FlowDateTimePeriodLimit', type: period_limit_1.FlowDateTimePeriodLimit, editor: _base_metadata_1.editorTemplates.flowModeSettings
};
exports.limitContainer = [exports.fixedDateTimePeriodLimitProperty, exports.flowDateTimePeriodLimitProperty];
