/**
* DevExpress Dashboard (_parameters-item-provider.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_item_1 = require("../../../model/data-item/data-item");
var $ = require("jquery");
var ParametersItemProvider = (function () {
    function ParametersItemProvider(dashboardParameters) {
        this.dashboardParameters = dashboardParameters;
    }
    ParametersItemProvider.prototype.getItems = function (pathRequest) {
        var items = [], fullPath = pathRequest.fullPath && pathRequest.fullPath.toLowerCase() || "";
        if (fullPath === "") {
            items = [{
                    displayName: "Parameters",
                    name: "Parameters",
                    isList: true,
                    specifics: "parameters"
                }];
        }
        else if (fullPath === "parameters") {
            items = (this.dashboardParameters() && this.dashboardParameters() || []).map(function (parameter) {
                return {
                    displayName: parameter.name(),
                    name: parameter.name(),
                    isList: false,
                    specifics: data_item_1.DataItem.typesMap[parameter.type().replace("System.", "")]
                };
            });
        }
        return $.Deferred().resolve(items).promise();
    };
    return ParametersItemProvider;
}());
exports.ParametersItemProvider = ParametersItemProvider;
