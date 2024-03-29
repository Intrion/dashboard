﻿/**
* DevExpress Dashboard (enums.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _common_1 = require("../data/_common");
var PointLabelContentType;
(function (PointLabelContentType) {
    PointLabelContentType[PointLabelContentType["None"] = 0] = "None";
    PointLabelContentType[PointLabelContentType["Argument"] = 1] = "Argument";
    PointLabelContentType[PointLabelContentType["SeriesName"] = 2] = "SeriesName";
    PointLabelContentType[PointLabelContentType["Value"] = 4] = "Value";
    PointLabelContentType[PointLabelContentType["Percent"] = 8] = "Percent";
})(PointLabelContentType = exports.PointLabelContentType || (exports.PointLabelContentType = {}));
exports.parsePointLabelContentType = function (typeModel) {
    return _common_1.parseFlagsEnumType(typeModel, PointLabelContentType.None, exports.PointLabelContentTypeDictionary);
};
exports.serializePointLabelContentType = function (val) {
    return _common_1.serializeFlagsEnumType(val, 'None', exports.PointLabelContentTypeDictionary);
};
exports.getPointLabelContentTypeValues = function (val) {
    return _common_1.getFlagsEnumTypeValues(val, exports.PointLabelContentTypeDictionary, 'value');
};
exports.PointLabelContentTypeDictionary = {
    'Argument': PointLabelContentType.Argument,
    'SeriesName': PointLabelContentType.SeriesName,
    'Value': PointLabelContentType.Value,
    'Percent': PointLabelContentType.Percent
};
var FilterDateType;
(function (FilterDateType) {
    FilterDateType[FilterDateType["None"] = 0] = "None";
    FilterDateType[FilterDateType["BeyondThisYear"] = 2] = "BeyondThisYear";
    FilterDateType[FilterDateType["LaterThisYear"] = 4] = "LaterThisYear";
    FilterDateType[FilterDateType["LaterThisMonth"] = 8] = "LaterThisMonth";
    FilterDateType[FilterDateType["LaterThisWeek"] = 16] = "LaterThisWeek";
    FilterDateType[FilterDateType["NextWeek"] = 32] = "NextWeek";
    FilterDateType[FilterDateType["Tomorrow"] = 64] = "Tomorrow";
    FilterDateType[FilterDateType["Today"] = 128] = "Today";
    FilterDateType[FilterDateType["Yesterday"] = 256] = "Yesterday";
    FilterDateType[FilterDateType["EarlierThisWeek"] = 512] = "EarlierThisWeek";
    FilterDateType[FilterDateType["LastWeek"] = 1024] = "LastWeek";
    FilterDateType[FilterDateType["EarlierThisMonth"] = 2048] = "EarlierThisMonth";
    FilterDateType[FilterDateType["EarlierThisYear"] = 4096] = "EarlierThisYear";
    FilterDateType[FilterDateType["PriorThisYear"] = 8192] = "PriorThisYear";
    FilterDateType[FilterDateType["Empty"] = 16384] = "Empty";
    FilterDateType[FilterDateType["Beyond"] = 131072] = "Beyond";
    FilterDateType[FilterDateType["ThisWeek"] = 262144] = "ThisWeek";
    FilterDateType[FilterDateType["ThisMonth"] = 524288] = "ThisMonth";
    FilterDateType[FilterDateType["MonthAfter1"] = 1048576] = "MonthAfter1";
    FilterDateType[FilterDateType["MonthAfter2"] = 2097152] = "MonthAfter2";
    FilterDateType[FilterDateType["MonthAgo1"] = 4194304] = "MonthAgo1";
    FilterDateType[FilterDateType["MonthAgo2"] = 8388608] = "MonthAgo2";
    FilterDateType[FilterDateType["MonthAgo3"] = 16777216] = "MonthAgo3";
    FilterDateType[FilterDateType["MonthAgo4"] = 33554432] = "MonthAgo4";
    FilterDateType[FilterDateType["MonthAgo5"] = 67108864] = "MonthAgo5";
    FilterDateType[FilterDateType["MonthAgo6"] = 134217728] = "MonthAgo6";
    FilterDateType[FilterDateType["Earlier"] = 268435456] = "Earlier";
})(FilterDateType = exports.FilterDateType || (exports.FilterDateType = {}));
