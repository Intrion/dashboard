/**
* DevExpress Dashboard (_point-label-options.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var enums_1 = require("../../../enums");
var ko = require("knockout");
exports.showPointLabels = { propertyName: 'showPointLabels', modelName: '@Visible', displayName: "DashboardWebStringId.Chart.ShowPointLablels", defaultVal: false, editor: _base_metadata_1.editorTemplates.boolYesNo, from: _base_metadata_1.parseBool };
exports.pointLabelOrientation = {
    propertyName: 'orientation', modelName: '@Orientation', displayName: "DashboardWebStringId.Chart.Orientation", defaultVal: "Default", editor: _base_metadata_1.editorTemplates.list, values: {
        "Default": "DashboardWebStringId.Chart.Orientation.Default",
        "RotateRight": "DashboardWebStringId.Chart.Orientation.RotateRight",
        "RotateLeft": "DashboardWebStringId.Chart.Orientation.RotateLeft"
    }
};
exports.overlappingMode = {
    propertyName: 'overlappingMode', modelName: '@OverlappingMode', displayName: "DashboardWebStringId.Chart.OverlappingMode", defaultVal: "Hide", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Hide": "DashboardWebStringId.Chart.OverlappingMode.Hide",
        "None": "DashboardWebStringId.Chart.OverlappingMode.None"
    }
};
exports.pointLabelOptionsBaseSerializationsInfo = [exports.showPointLabels, exports.pointLabelOrientation, exports.overlappingMode];
exports.showForZeroValues = { propertyName: 'showForZeroValues', modelName: '@ShowForZeroValues', displayName: "DashboardWebStringId.Chart.ShowZeroValues", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.position = {
    propertyName: 'position', modelName: '@Position', displayName: "DashboardWebStringId.Chart.Position", defaultVal: "Outside", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Outside": "DashboardWebStringId.Chart.Position.Outside",
        "Inside": "DashboardWebStringId.Chart.Position.Inside"
    }
};
exports.contentType = {
    propertyName: 'contentType', modelName: '@ContentType', displayName: "DashboardWebStringId.Chart.Content", defaultVal: "None",
    editor: _base_metadata_1.editorTemplates.pointLabelContentTypeSelector, editorOptions: { getPointLabelContentTypeValues: enums_1.getPointLabelContentTypeValues },
    from: function (st) { return ko.observable(enums_1.parsePointLabelContentType(st)); }, toJsonObject: enums_1.serializePointLabelContentType
};
exports.pointLabelOptionsSerializationsInfo = exports.pointLabelOptionsBaseSerializationsInfo.concat([exports.showForZeroValues, exports.position, exports.contentType]);
