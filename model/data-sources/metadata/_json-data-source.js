/**
* DevExpress Dashboard (_json-data-source.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_querybuilder_1 = require("@devexpress/analytics-core/dx-querybuilder");
var _data_source_1 = require("./_data-source");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var ko = require("knockout");
exports.jsonDataSourceSerializationsInfo = _data_source_1.dataSourceSerializationsInfo.concat([
    _base_metadata_1.filter,
    { propertyName: "connectionName", modelName: "@ConnectionName" },
    { propertyName: "rootElement", modelName: "@RootElement", defaultVal: "root" },
    {
        propertyName: "schema", modelName: "Schema",
        from: function (model, serializer) { return ko.observable(dx_querybuilder_1.default.Analytics.Data.JsonSchemaRootNode.from(model, serializer)); },
        toJsonObject: dx_querybuilder_1.default.Analytics.Data.JsonSchemaRootNode.toJson,
        category: _base_metadata_1.PropertyCategory.NoUpdateByObservableValue
    }
]);
