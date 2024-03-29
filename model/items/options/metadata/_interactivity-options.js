﻿/**
* DevExpress Dashboard (_interactivity-options.js)
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
exports.ignoreMasterFiltersDefaultFalse = { propertyName: 'ignoreMasterFilters', modelName: '@IgnoreMasterFilters', displayName: 'DashboardWebStringId.InteractivityOptions.IgnoreMasterFilters', defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.Interactivity };
exports.ignoreMasterFiltersDefaultTrue = { propertyName: 'ignoreMasterFilters', modelName: '@IgnoreMasterFilters', displayName: 'DashboardWebStringId.InteractivityOptions.IgnoreMasterFilters', defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.Interactivity };
exports.isMasterFilterDefaultFalse = { propertyName: 'isMasterFilter', modelName: '@IsMasterFilter', displayName: "DashboardWebStringId.InteractivityOptions.IsMasterFilter", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.isMasterFilterDefaultTrue = { propertyName: 'isMasterFilter', modelName: '@IsMasterFilter', displayName: "DashboardWebStringId.InteractivityOptions.IsMasterFilter", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.masterFilterMode = {
    propertyName: 'masterFilterMode', modelName: '@MasterFilterMode', displayName: "DashboardWebStringId.MasterFilterMode", defaultVal: "None", editor: _base_metadata_1.editorTemplates.buttonGroup, category: _base_metadata_1.PropertyCategory.Interactivity, values: {
        "None": "DashboardWebStringId.InteractivityOptions.MasterFilterMode.None",
        "Single": "DashboardWebStringId.InteractivityOptions.MasterFilterMode.Single",
        "Multiple": "DashboardWebStringId.InteractivityOptions.MasterFilterMode.Multiple"
    }
};
exports.isDrillDownEnabled = { propertyName: 'isDrillDownEnabled', modelName: '@IsDrillDownEnabled', displayName: 'DashboardWebStringId.InteractivityOptions.DrillDown', defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.Data };
exports.targetDimensions = {
    propertyName: 'targetDimensions', modelName: '@TargetDimensions', displayName: "DashboardWebStringId.InteractivityOptions.TargetDimensions", defaultVal: "Arguments", editor: _base_metadata_1.editorTemplates.buttonGroup, category: _base_metadata_1.PropertyCategory.Interactivity, values: {
        "Arguments": "DashboardWebStringId.InteractivityOptions.TargetDimensions.Arguments",
        "Series": "DashboardWebStringId.InteractivityOptions.TargetDimensions.Series",
        "Points": "DashboardWebStringId.InteractivityOptions.TargetDimensions.Points"
    }
};
exports.commonInteractivityOptions = { propertyName: 'interactivityOptions', modelName: 'InteractivityOptions', displayName: "DashboardWebStringId.InteractivityOptions", editor: _base_metadata_1.editorTemplates.objecteditor };
function getInteractivityOptionsPropertyInfo(type) { return __assign({ type: type }, exports.commonInteractivityOptions); }
exports.getInteractivityOptionsPropertyInfo = getInteractivityOptionsPropertyInfo;
