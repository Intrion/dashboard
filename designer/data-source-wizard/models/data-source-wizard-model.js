/**
* DevExpress Dashboard (data-source-wizard-model.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_querybuilder_1 = require("@devexpress/analytics-core/dx-querybuilder");
var OlapDataSourceType = 3099;
function ToDataSourceTypeNumber(dashboardType) {
    switch (dashboardType) {
        case 'Sql': return dx_querybuilder_1.default.Analytics.Wizard.DataSourceType.Sql;
        case 'Json': return dx_querybuilder_1.default.Analytics.Wizard.DataSourceType.Json;
        case 'Olap': return OlapDataSourceType;
    }
    throw new Error('Unknown dashboard datasource type: ' + dashboardType);
}
exports.ToDataSourceTypeNumber = ToDataSourceTypeNumber;
function ToDashboardDataSourceType(typeNumber) {
    switch (typeNumber) {
        case dx_querybuilder_1.default.Analytics.Wizard.DataSourceType.Sql: return 'Sql';
        case dx_querybuilder_1.default.Analytics.Wizard.DataSourceType.Json: return 'Json';
        case OlapDataSourceType: return 'Olap';
    }
    throw new Error('Unknown datasource type number: ' + typeNumber);
}
exports.ToDashboardDataSourceType = ToDashboardDataSourceType;
