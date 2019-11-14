/**
* DevExpress Dashboard (_events-helper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _item_data_tuple_1 = require("../../data/item-data/_item-data-tuple");
var _interactivity_controller_1 = require("../viewer-items/_interactivity-controller");
var $ = require("jquery");
exports.eventsHelper = {
    createItemEventArgs: function (itemName, dataPoint, state, itemData, requestUnderlyingDataFunc) {
        var patchAxisName = function (axisName) {
            if (axisName === undefined)
                axisName = 'Default';
            return axisName;
        }, getAxis = function (axisName) {
            return itemData.getAxis(patchAxisName(axisName));
        }, getAxisPoint = function (axisName) {
            axisName = patchAxisName(axisName);
            return getAxis(axisName).getPointByUniqueValues(dataPoint.getValues(axisName));
        };
        return {
            itemName: itemName,
            state: state,
            getData: function () {
                return itemData;
            },
            getAxisPoint: getAxisPoint,
            getMeasures: function () {
                return itemData.getMeasuresByIds(dataPoint.getMeasureIds());
            },
            getDeltas: function () {
                var ids = dataPoint.getDeltaIds(), deltas = [];
                $.each(ids, function (i, id) {
                    deltas.push(itemData.getDeltaById(id));
                });
                return deltas;
            },
            getDimensions: function (axisName) {
                return getAxis(axisName).getDimensions();
            },
            requestUnderlyingData: function (onCompleted, dataMembers) {
                var axisPoints = [];
                $.each(itemData.getAxisNames(), function (_, axisName) {
                    axisPoints.push(getAxisPoint(axisName));
                });
                requestUnderlyingDataFunc(itemName, {
                    axisPoints: axisPoints,
                    dataMembers: dataMembers
                }, onCompleted);
            }
        };
    },
    createItemSelectionChangedEventArgs: function (name, tuples, itemData) {
        return {
            itemName: name,
            getCurrentSelection: function () {
                var axisPointTuples = [];
                $.each(tuples, function (index, tuple) {
                    axisPointTuples.push(itemData.createTuple(tuple));
                });
                return axisPointTuples;
            }
        };
    },
    createWidgetEventArgs: function (name, widget) {
        return {
            itemName: name,
            getWidget: function () { return widget; }
        };
    },
    createItemElementCustomColorEventArgs: function (itemName, eventArgs, itemData) {
        return {
            itemName: itemName,
            getTargetElement: function () {
                return new _item_data_tuple_1.itemDataTuple(eventArgs.targetElement);
            },
            getMeasures: function () {
                return itemData.getMeasuresByIds(eventArgs.measureIds);
            },
            getColor: function () {
                return eventArgs.color;
            },
            setColor: function (color) {
                eventArgs.color = color;
            }
        };
    },
    createDefaultCustomInteractivityOptions: function () {
        return {
            selectionMode: _interactivity_controller_1.dashboardSelectionMode.none,
            hoverEnabled: false,
            targetAxes: [],
            defaultSelectedValues: []
        };
    },
    ensureCustomInteractivityOptions: function (interactivityOptions, interactivityEnable, itemData) {
        var newOptions = {
            selectionMode: interactivityOptions.selectionMode,
            hoverEnabled: interactivityOptions.hoverEnabled,
            targetAxes: interactivityOptions.targetAxes,
            defaultSelectedValues: interactivityOptions.defaultSelectedValues
        };
        if (interactivityEnable && interactivityOptions.defaultSelectedValues.length == 0 && interactivityOptions.selectionMode == _interactivity_controller_1.dashboardSelectionMode.single) {
            var tuple = [];
            $.each(interactivityOptions.targetAxes, function (index, axisName) {
                tuple.push({
                    AxisName: axisName,
                    Value: itemData.getAxis(axisName).getPoints()[0].getUniquePath()
                });
            });
            newOptions.defaultSelectedValues = [tuple];
        }
        return newOptions;
    },
    createItemInteractivityEventArgs: function (itemName, interactivityOptions, itemData) {
        return {
            itemName: itemName,
            getSelectionMode: function () { return interactivityOptions.selectionMode; },
            setSelectionMode: function (value) { interactivityOptions.selectionMode = value; },
            isHighlightingEnabled: function () { return interactivityOptions.hoverEnabled; },
            enableHighlighting: function (value) { interactivityOptions.hoverEnabled = value; },
            getTargetAxes: function () { return interactivityOptions.targetAxes; },
            setTargetAxes: function (value) { interactivityOptions.targetAxes = value; },
            getDefaultSelection: function () {
                var realTuples = [];
                $.each(interactivityOptions.defaultSelectedValues, function (_, tuple) {
                    realTuples.push(itemData.createTuple(tuple));
                });
                return realTuples;
            },
            setDefaultSelection: function (realTuples) {
                var tuples = [], tuple;
                $.each(realTuples, function (_, realTuple) {
                    tuple = [];
                    $.each(interactivityOptions.targetAxes, function (__, axisName) {
                        tuple.push({
                            AxisName: axisName,
                            Value: realTuple.getAxisPoint(axisName).getUniquePath()
                        });
                    });
                    tuples.push(tuple);
                });
                interactivityOptions.defaultSelectedValues = tuples;
            }
        };
    }
};
