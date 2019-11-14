/**
* DevExpress Dashboard (_scatter-point-label-options.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _point_label_options_1 = require("../../chart/metadata/_point-label-options");
exports.content = {
    propertyName: 'content', modelName: '@Content', displayName: "DashboardWebStringId.Chart.Content", defaultVal: "Argument", editor: _base_metadata_1.editorTemplates.list, values: {
        "Argument": "DashboardWebStringId.Binding.Argument",
        "Weight": "DashboardWebStringId.Chart.Weight",
        "Values": "DashboardWebStringId.Binding.Values",
        "ArgumentAndWeight": "DashboardWebStringId.Chart.ArgumentAndWeight",
        "ArgumentAndValues": "DashboardWebStringId.Chart.ArgumentAndValues"
    }
};
exports.scatterPointLabelOptionsSerializationsInfo = _point_label_options_1.pointLabelOptionsBaseSerializationsInfo.concat([exports.content, _point_label_options_1.position]);
