﻿/**
* DevExpress Dashboard (_list-source.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _formatter_1 = require("./_formatter");
var listSource = (function () {
    function listSource(dataSource, dataMembers) {
        this.dataSource = this._wrapIfRequired(dataSource, dataMembers);
        this.dataMembers = dataMembers;
        if (this.dataSource && this.dataMembers) {
            this.rowCount = this.dataSource.length;
            this.columnCount = this.dataMembers.length;
        }
        else {
            this.dataSource = [];
            this.dataMembers = [];
            this.rowCount = 0;
            this.columnCount = 0;
        }
    }
    listSource.prototype._wrapIfRequired = function (dataSource, dataMembers) {
        var dataRow, dataSourceWrapper = [], isWrapRequired = dataSource && dataSource.length > 0 && Array.isArray(dataSource) && Array.isArray(dataSource[0]);
        if (isWrapRequired) {
            for (var i = 0; i < dataSource.length; i++) {
                dataRow = dataSource[i];
                if (dataMembers && dataRow && dataRow.length === dataMembers.length) {
                    dataSourceWrapper[i] = {};
                    for (var j = 0; j < dataRow.length; j++) {
                        dataSourceWrapper[i][dataMembers[j]] = dataRow[j];
                    }
                }
                else {
                    isWrapRequired = false;
                    break;
                }
            }
        }
        return isWrapRequired ? dataSourceWrapper : dataSource;
    };
    listSource.prototype.getRowValue = function (rowIndex, dataMember) {
        return this.dataSource[rowIndex][dataMember];
    };
    listSource.prototype.getFormattedRowValue = function (rowIndex, dataMember, formatInfo) {
        var value = this.getRowValue(rowIndex, dataMember);
        return _formatter_1.formatNumeric(value, formatInfo);
    };
    listSource.prototype.getFormattedArgumentRowValue = function (rowIndex, dataMember, formatInfo) {
        var value = this.getRowValue(rowIndex, dataMember);
        return _formatter_1.format(value, formatInfo);
    };
    listSource.prototype.getColumnIndex = function (dataMember) {
        return this.dataMembers.indexOf(dataMember);
    };
    listSource.prototype.getRowCount = function () {
        return this.rowCount;
    };
    return listSource;
}());
exports.listSource = listSource;
