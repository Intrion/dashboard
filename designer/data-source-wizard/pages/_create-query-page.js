/**
* DevExpress Dashboard (_create-query-page.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _parameters_item_provider_1 = require("./_parameters-item-provider");
function createQueryPageCallback(requestWrapper, parameters, customQueriesPreset) {
    if (customQueriesPreset === void 0) { customQueriesPreset = undefined; }
    return {
        customQueriesPreset: customQueriesPreset,
        customizeQBInitData: function (initData) {
            initData.data.parametersItemsProvider = new _parameters_item_provider_1.ParametersItemProvider(parameters);
            initData.data.requestWrapper = requestWrapper;
            return initData;
        },
        selectStatement: function (connection, query) { return requestWrapper.getSelectStatement(connection, query); }
    };
}
exports.createQueryPageCallback = createQueryPageCallback;
