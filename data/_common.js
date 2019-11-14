/**
* DevExpress Dashboard (_common.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewerActions = {
    setMasterFilter: 'SetMasterFilter',
    setMultipleValuesMasterFilter: 'SetMultipleValuesMasterFilter',
    clearMasterFilter: 'ClearMasterFilter',
    drillDown: 'DrillDown',
    drillUp: 'DrillUp',
    setSelectedElementIndex: 'SetSelectedElementIndex',
    expandValue: 'ExpandValue',
    dataRequest: 'DataRequest',
    getDrillThroughData: 'GetDrillThroughData'
};
exports.contentType = {
    empty: 'Empty',
    viewModel: 'ViewModel',
    actionModel: 'ActionModel',
    completeDataSource: 'CompleteDataSource',
    partialDataSource: 'PartialDataSource',
    fullContent: 'FullContent'
};
var separator = ', ';
exports.parseFlagsEnumType = function (typeModel, defaultValue, dic) {
    var types = typeModel.split(separator);
    return Object.keys(dic).reduce(function (prev, curr) {
        return prev | (types.indexOf(curr) >= 0 ? dic[curr] : 0);
    }, defaultValue);
};
exports.serializeFlagsEnumType = function (val, defaultValue, dic) {
    return Object.keys(dic).reduce(function (prev, curr) {
        if (val & dic[curr]) {
            prev.push(curr);
        }
        return prev;
    }, []).join(separator) || defaultValue;
};
exports.getFlagsEnumTypeValues = function (val, dic, type) {
    var keys = [];
    Object.keys(dic).forEach(function (key) {
        if (dic[key] & val) {
            keys.push(type === 'value' ? dic[key] : key);
        }
    });
    return keys;
};
