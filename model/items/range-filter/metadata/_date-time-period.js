/**
* DevExpress Dashboard (_date-time-period.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var limit_container_1 = require("../limit-container");
var _base_metadata_1 = require("../../../metadata/_base-metadata");
function limitContainerFromJson(json, serializer) {
    if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
    return new limit_container_1.LimitContainer(json, serializer);
}
function limitContainerToJson(limitContainer, serializer) {
    if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
    var limitContainerJson = serializer.serialize(limitContainer);
    if (!limitContainer.fixed.isEmpty() && !limitContainerJson.hasOwnProperty("FixedDateTimePeriodLimit")) {
        limitContainerJson.FixedDateTimePeriodLimit = null;
    }
    if (!limitContainer.flow.isEmpty() && !limitContainerJson.hasOwnProperty("FlowDateTimePeriodLimit")) {
        limitContainerJson.FlowDateTimePeriodLimit = null;
    }
    return limitContainerJson;
}
exports.startLimit = { propertyName: 'start', modelName: 'StartLimit', type: limit_container_1.LimitContainer, from: limitContainerFromJson, toJsonObject: limitContainerToJson };
exports.endLimit = { propertyName: 'end', modelName: 'EndLimit', type: limit_container_1.LimitContainer, from: limitContainerFromJson, toJsonObject: limitContainerToJson };
exports.dateTimePeriodSerializationsInfo = [_base_metadata_1.itemType, _base_metadata_1.name, exports.startLimit, exports.endLimit];
exports.mode = {
    propertyName: 'mode', defaultVal: "None", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "None": "DashboardWebStringId.RangeFilter.None",
        "Fixed": "DashboardWebStringId.RangeFilter.Fixed",
        "Flow": "DashboardWebStringId.RangeFilter.Flow"
    }
};
exports.periodTextValue = {
    propertyName: '_getPeriodTextValue', editor: _base_metadata_1.editorTemplates.dateSample
};
