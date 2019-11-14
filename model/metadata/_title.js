/**
* DevExpress Dashboard (_title.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("./_base-metadata");
exports.titleText = { propertyName: "text", modelName: "@Text", displayName: "DashboardWebStringId.Title.Text", editor: _base_metadata_1.editorTemplates.text };
exports.titleVisible = { propertyName: "visible", displayName: "DashboardWebStringId.Title.Visible", modelName: "@Visible", defaultVal: true, editor: _base_metadata_1.editorTemplates.checkBox, from: _base_metadata_1.parseBool };
exports.includeMasterFilter = { propertyName: "includeMasterFilter", displayName: "DashboardWebStringId.Title.IncludeMasterFilter", modelName: "@IncludeMasterFilterState", defaultVal: true, editor: _base_metadata_1.editorTemplates.checkBox, from: _base_metadata_1.parseBool };
exports.titleAlignment = {
    propertyName: "alignment", modelName: "@Alignment", defaultVal: "Center", displayName: "DashboardWebStringId.Title.Aligment", editor: _base_metadata_1.editorTemplates.list, values: {
        "Left": "DashboardWebStringId.Title.Aligment.Left",
        "Center": "DashboardWebStringId.Title.Aligment.Center",
    }
};
exports.titleImage64 = { propertyName: "image64", modelName: "#text", editor: _base_metadata_1.editorTemplates.image };
exports.titleImageUrl = { propertyName: "url", modelName: "@Url", editor: _base_metadata_1.editorTemplates.text };
exports.titleImageType = {
    propertyName: "imageType", displayName: "DashboardWebStringId.Title.Image", defaultVal: 'none', editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        'embedded': 'DashboardWebStringId.Title.ImageEmbedded',
        'linked': 'DashboardWebStringId.Title.ImageLinked',
        'none': 'DashboardWebStringId.Title.ImageNone'
    }
};
exports.dashboardTitleSerializationsInfo = [exports.titleText, exports.titleVisible, exports.titleAlignment, exports.includeMasterFilter, exports.titleImageType, exports.titleImage64, exports.titleImageUrl];
