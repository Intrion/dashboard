/**
* DevExpress Dashboard (_underlying-data-source.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _inspected_data_colum_generator_1 = require("./_inspected-data-colum-generator");
var data_source_1 = require("devextreme/data/data_source");
var custom_store_1 = require("devextreme/data/custom_store");
var notificator_1 = require("../../notification-controller/notificator");
function generateUnderlyingDataSource(underlyingDataProvider, dashbordItem) {
    var itemData = dashbordItem._getItemData();
    if (underlyingDataProvider && itemData && !itemData.isEmpty()) {
        return {
            columns: null,
            dataSource: new data_source_1.default({
                store: new custom_store_1.default({
                    loadMode: "raw",
                    load: function () {
                        return underlyingDataProvider.requestUnderlyingData(dashbordItem, {
                            dataMembers: _inspected_data_colum_generator_1.getSortedColumns(dashbordItem._getItemData())
                        }).then(function (underlyingData) {
                            if (underlyingData.ErrorMessage) {
                                new Error(underlyingData.ErrorMessage);
                            }
                            return underlyingData.Data.map(function (row) {
                                return underlyingData.DataMembers.reduce(function (acc, dataMember, index) {
                                    acc[dataMember] = row[index];
                                    return acc;
                                }, {});
                            });
                        }, function (result) {
                            throw new Error(notificator_1.NotificationController._getDetailedErrorMessage(result));
                        });
                    }
                })
            })
        };
    }
    else {
        return {
            columns: [],
            dataSource: new data_source_1.default([])
        };
    }
}
exports.generateUnderlyingDataSource = generateUnderlyingDataSource;
