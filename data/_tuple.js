/**
* DevExpress Dashboard (_tuple.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var tuple = (function () {
    function tuple(axisPoints) {
        var that = this;
        that.axisPoints = axisPoints;
    }
    tuple.prototype.getAxisPoint = function (axisName) {
        var that = this;
        return $.grep(that.axisPoints, function (axisPoint) {
            return axisPoint.AxisName == axisName;
        })[0];
    };
    return tuple;
}());
exports.tuple = tuple;
