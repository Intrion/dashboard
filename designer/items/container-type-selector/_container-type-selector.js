/**
* DevExpress Dashboard (_container-type-selector.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var MAX_ICON_NUMBER = 7;
var ContainerTypeSelector = (function () {
    function ContainerTypeSelector(_containersMap, containerType, _containerGroupLocalization, _highlightedTypes) {
        var _this = this;
        this._containersMap = _containersMap;
        this.containerType = containerType;
        this._containerGroupLocalization = _containerGroupLocalization;
        this._highlightedTypes = _highlightedTypes;
        this.headerClick = function (data, event) {
            if (!_this.hasFullList) {
                event.stopPropagation();
                return false;
            }
        };
        this.itemClick = function (data, event) {
            _this.containerType(ko.unwrap(data.value));
            event.stopPropagation();
            event.originalEvent && event.originalEvent.stopPropagation();
            return false;
        };
    }
    Object.defineProperty(ContainerTypeSelector.prototype, "shortAvailableContainerTypes", {
        get: function () {
            var _this = this;
            var iconNumber = MAX_ICON_NUMBER - (this.hasFullList ? 1 : 0);
            var highlightedTypes = this.availableContainerTypes
                .filter(function (type) {
                if (_this._highlightedTypes) {
                    return _this._highlightedTypes.indexOf(type.value) !== -1;
                }
                else {
                    return true;
                }
            })
                .slice(0, iconNumber);
            var selected = this.availableContainerTypes.filter(function (t) { return t.selected; })[0];
            if (selected) {
                if (!highlightedTypes.filter(function (containerType) { return containerType.value === selected.value; })[0]) {
                    highlightedTypes.pop();
                    highlightedTypes.unshift(selected);
                }
            }
            return highlightedTypes;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ContainerTypeSelector.prototype, "hasFullList", {
        get: function () {
            var length = Object.keys(this._containersMap).length;
            return (length > MAX_ICON_NUMBER);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerTypeSelector.prototype, "availableContainerTypes", {
        get: function () {
            var _this = this;
            var containerTypes = Object.keys(this._containersMap || {}).map(function (name) {
                var info = _this._containersMap[name];
                return {
                    value: name,
                    group: info.group,
                    displayName: info.displayName,
                    icon: info.icon,
                    selected: name === _this.containerType()
                };
            });
            return containerTypes;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ContainerTypeSelector.prototype, "availableContainerTypeGroups", {
        get: function () {
            var _this = this;
            return Object.keys(this._containersMap).reduce(function (groups, value) {
                var info = _this._containersMap[value];
                if (!groups.filter(function (group) { return group.name === info.group; })[0]) {
                    groups.push({
                        name: info.group,
                        displayName: _this._containerGroupLocalization && _this._containerGroupLocalization[info.group] || info.group
                    });
                }
                return groups;
            }, []);
        },
        enumerable: true,
        configurable: true
    });
    return ContainerTypeSelector;
}());
exports.ContainerTypeSelector = ContainerTypeSelector;
ko.components.register('dx-dashboard-icon-type-selector', {
    viewModel: {
        createViewModel: function (params) {
            var editorOptions = params.editorOptions;
            var containerMap = params.values().reduce(function (acc, cur) {
                acc[cur.value] = {
                    displayName: cur.displayValue,
                    icon: editorOptions && editorOptions.valuesInfo[cur.value] && editorOptions.valuesInfo[cur.value].icon || null
                };
                return acc;
            }, {});
            return new ContainerTypeSelector(containerMap, params.value, editorOptions && editorOptions.groupLocalizationDictionary || undefined);
        }
    },
    template: { element: 'dx-dashboard-container-type-selector-full' }
});
