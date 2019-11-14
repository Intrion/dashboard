/**
* DevExpress Dashboard (_delta-options.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.valueType = {
    propertyName: 'valueType', modelName: '@ValueType', displayName: "DashboardWebStringId.Delta.ValueType", defaultVal: "AbsoluteVariation", editor: _base_metadata_1.editorTemplates.list, values: {
        "ActualValue": "DashboardStringId.DeltaValueTypeActualValueCaption",
        "AbsoluteVariation": "DashboardStringId.DeltaValueTypeAbsoluteVariationCaption",
        "PercentVariation": "DashboardStringId.DeltaValueTypePercentVariationCaption",
        "PercentOfTarget": "DashboardStringId.DeltaValueTypePercentOfTargetCaption"
    }
};
exports.resultIndicationMode = {
    propertyName: 'resultIndicationMode', modelName: '@ResultIndicationMode', displayName: "DashboardWebStringId.Delta.ResultIndication", defaultVal: "GreaterIsGood", editor: _base_metadata_1.editorTemplates.list, values: {
        "GreaterIsGood": "DashboardStringId.DeltaIndicationModeGreaterIsGoodCaption",
        "LessIsGood": "DashboardStringId.DeltaIndicationModeLessIsGoodCaption",
        "WarningIfGreater": "DashboardStringId.DeltaIndicationModeWarningIfGreaterCaption",
        "WarningIfLess": "DashboardStringId.DeltaIndicationModeWarningIfLessCaption",
        "NoIndication": "DashboardStringId.DeltaIndicationModeNoIndicationCaption"
    }
};
exports.resultIndicationThresholdType = {
    propertyName: 'resultIndicationThresholdType', modelName: '@ResultIndicationThresholdType', displayName: "DashboardWebStringId.Delta.ThresholdType", defaultVal: "Percent", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Absolute": "DashboardStringId.DeltaThresholdTypeAbsolute",
        "Percent": "DashboardStringId.DeltaThresholdTypePercent"
    }
};
exports.resultIndicationThreshold = { propertyName: 'resultIndicationThreshold', modelName: '@ResultIndicationThreshold', displayName: "DashboardWebStringId.Delta.ThresholdValue", defaultVal: 0, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel };
exports.cardDeltaOptionsSerializationsInfo = [exports.resultIndicationMode, exports.resultIndicationThresholdType, exports.resultIndicationThreshold];
exports.deltaOptionsSerializationsInfo = [exports.valueType].concat(exports.cardDeltaOptionsSerializationsInfo);
