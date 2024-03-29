﻿/**
* DevExpress Dashboard (_item-data-tuple.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itemDataTuple = (function () {
    function itemDataTuple(axisPoints) {
        this._axisPoints = axisPoints;
    }
    itemDataTuple.prototype.getAxisPoint = function (axisName) {
        if (axisName) {
            return this._axisPoints.filter(function (axisPoint) {
                return axisPoint.getAxisName() == axisName;
            })[0];
        }
        else {
            return this._axisPoints[0];
        }
    };
    return itemDataTuple;
}());
exports.itemDataTuple = itemDataTuple;
