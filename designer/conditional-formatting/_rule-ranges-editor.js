/**
* DevExpress Dashboard (_rule-ranges-editor.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var range_generator_1 = require("../../model/format-rules/conditions/range/range-generator");
var bar_style_settings_1 = require("../../model/format-rules/style-settings/bar-style-settings");
var appearance_settings_1 = require("../../model/format-rules/style-settings/appearance-settings");
var color_1 = require("../../model/color");
var _style_settings_container_1 = require("./_style-settings-container");
var _range_info_1 = require("../../model/format-rules/conditions/range/metadata/_range-info");
var _style_settings_base_1 = require("../../model/format-rules/style-settings/metadata/_style-settings-base");
var _format_rules_common_1 = require("../../model/format-rules/metadata/_format-rules-common");
var ko = require("knockout");
var _utils_1 = require("../../data/_utils");
var dataGridColumnTypes = {
    Text: 'string',
    DateTime: 'date',
    Bool: 'boolean',
    Integer: 'number',
    Float: 'number',
    Double: 'number',
    Decimal: 'number',
    Enum: 'string',
    Custom: 'object',
    Unknown: 'object'
};
var RuleRangesEditor = (function (_super) {
    __extends(RuleRangesEditor, _super);
    function RuleRangesEditor(params) {
        var _this = _super.call(this, params.condition().isRange(), params.condition().isGradient(), false) || this;
        _this.selection = ko.observable(null);
        _this.value = ko.observableArray([]);
        _this.closeEditCell = function () {
            _this._closeEditCell && _this._closeEditCell();
        };
        _this._closeEditCell = null;
        _this.condition = params.condition();
        _this.dataType = _this.condition.dataType;
        _this.isPercent = ko.computed({
            read: function () { return _this.condition.valueType() !== 'Number'; },
            write: function (isPercent) {
                if (isPercent) {
                    _this.condition.setValues(range_generator_1.FormatConditionRangeGenerator.calculateRangePercentValues(_this.condition.rangeSet.ranges.peek().length));
                }
            }
        });
        _this._updateValue();
        _this.condition.rangeSet.ranges.subscribe(function () { return _this._updateValue(); }, null, "arrayChange");
        return _this;
    }
    RuleRangesEditor.prototype.isLabel = function (type) {
        return _super.prototype.isLabel.call(this, type) && !this.isEmpty(type);
    };
    RuleRangesEditor.prototype.isRangeEmptyAllowed = function (range) {
        if (this.isGradient) {
            var ranges = this.value.peek();
            var index = ranges.indexOf(range);
            return (index != 0) && (index != ranges.length - 1);
        }
        else {
            return true;
        }
    };
    RuleRangesEditor.prototype.getLabelText = function (type) {
        return !this.isEmpty(type) ? _super.prototype.getLabelText.call(this, type) : '';
    };
    Object.defineProperty(RuleRangesEditor.prototype, "dataGridOptions", {
        get: function () {
            var _this = this;
            var valueType = dataGridColumnTypes[this.dataType()];
            return {
                dataSource: this.value,
                twoWayBindingEnabled: false,
                hoverStateEnabled: false,
                showRowLines: true,
                showColumnHeaders: false,
                rowAlternationEnabled: false,
                selection: undefined,
                paging: {
                    enabled: false
                },
                editing: {
                    mode: "cell",
                    allowFiltering: false,
                    allowSorting: false,
                    allowUpdating: true
                },
                onInitialized: function (e) {
                    e.component.getController('editorFactory')._showRevertButton = function () { };
                    _this._closeEditCell = function () {
                        e.component.closeEditCell();
                        _this._updateValue();
                    };
                },
                onCellHoverChanged: function (e) {
                    var cellElement = _utils_1.$unwrap(e.cellElement);
                    if (e.eventType === 'mouseover') {
                        cellElement.classList.add('dx-dashboard-range-editor-state-hover');
                    }
                    else {
                        cellElement.classList.remove('dx-dashboard-range-editor-state-hover');
                    }
                },
                onRowPrepared: function (e) {
                    if (e.data === this.selection()) {
                        var selectedRow = _utils_1.$unwrap(e.element).querySelector("tr.dx-selection");
                        if (selectedRow) {
                            selectedRow.classList.remove("dx-selection");
                        }
                        _utils_1.$unwrap(e.rowElement).classList.add("dx-selection");
                    }
                },
                onEditingStart: function (e) {
                    if (e.data.leftValue &&
                        (e.data.leftValue() === "∞" && e.column.dataField === "leftValue") ||
                        (e.data.rightValue() === "-∞" && e.column.dataField === "rightValue")) {
                        e.cancel = true;
                    }
                },
                onCellPrepared: function (e) {
                    var cellElement = _utils_1.$unwrap(e.cellElement);
                    if (cellElement.classList.contains("dx-editor-cell")) {
                        this.selection(e.data);
                        var selectedRow = _utils_1.$unwrap(e.element).querySelector("tr.dx-selection");
                        if (selectedRow) {
                            selectedRow.classList.remove("dx-selection");
                        }
                        cellElement.parentElement.classList.add("dx-selection");
                    }
                },
                onRowValidating: function (e) {
                    if (!!e.newData.sign || e.brokenRules.length > 0)
                        return;
                    var dataGrid = e.component, value = e.newData.leftValue || e.newData.rightValue, rowIndex = dataGrid.getRowIndexByKey(e.key), bottomValue = undefined, upperValue = undefined;
                    if (!!e.newData.leftValue) {
                        bottomValue = dataGrid.getKeyByRowIndex(rowIndex).rightValue();
                        upperValue = rowIndex - 1 >= 0 ? dataGrid.getKeyByRowIndex(rowIndex - 1).leftValue() : undefined;
                    }
                    else if (!!e.newData.rightValue) {
                        var count = dataGrid.option('dataSource').length;
                        var minBottomValue = this.isPercent() && (rowIndex + 1 == count) ? 0 : undefined;
                        bottomValue = rowIndex + 1 < count ? dataGrid.getKeyByRowIndex(rowIndex + 1).rightValue() : minBottomValue;
                        upperValue = dataGrid.getKeyByRowIndex(rowIndex).leftValue();
                    }
                    if (value == undefined || (bottomValue !== undefined && value < bottomValue) || (upperValue !== undefined && value > upperValue)) {
                        e.isValid = false;
                        e.errorText = "Invalid value: value should be between [" + bottomValue + ", " + upperValue + "]";
                    }
                },
                columns: [{
                        dataField: 'style',
                        alignment: 'center',
                        width: 52,
                        cellTemplate: 'dx-dashboard-range-style-template',
                        lookup: {
                            dataSource: []
                        },
                        editCellTemplate: 'dx-dashboard-range-style-editor-template'
                    }, {
                        dataField: 'leftValue',
                        dataType: valueType,
                        width: 74,
                        alignment: 'center',
                        cellTemplate: 'dx-dashboard-range-cell-template',
                        cssClass: 'dx-dashboard-range-value',
                        validationRules: [{ type: "required" }]
                    }, {
                        dataField: 'sign',
                        alignment: 'center',
                        cellTemplate: 'dx-dashboard-range-cell-template',
                        cssClass: 'dx-dashboard-range-sign',
                        showEditorAlways: false,
                        editorOptions: {
                            searchEnabled: false,
                            showDropDownButton: false
                        },
                        lookup: {
                            dataSource: [{
                                    name: _range_info_1.rangeValueComparison.values['GreaterOrEqual'],
                                    id: 'GreaterOrEqual'
                                }, {
                                    name: _range_info_1.rangeValueComparison.values['Greater'],
                                    id: 'Greater'
                                }],
                            displayExpr: 'name',
                            valueExpr: 'id'
                        }
                    }, {
                        dataField: 'rightValue',
                        dataType: valueType,
                        alignment: 'center',
                        width: 74,
                        cellTemplate: 'dx-dashboard-range-cell-template',
                        cssClass: 'dx-dashboard-range-value',
                        validationRules: [{ type: "required" }]
                    }
                ]
            };
        },
        enumerable: true,
        configurable: true
    });
    RuleRangesEditor.prototype.add = function () {
        var index = !!this.selection() ? this.condition.rangeSet.ranges.indexOf(this.selection().rangeInfo) : this.condition.rangeSet.ranges().length - 1;
        var rangeInfo = this.condition.rangeSet.ranges()[index];
        this.condition.rangeSet.ranges.splice(index, 0, rangeInfo.clone());
    };
    RuleRangesEditor.prototype.remove = function () {
        if (!!this.selection() && this.condition.rangeSet.ranges().length > 2) {
            var rangeInfo = this.selection().rangeInfo;
            var index = this.condition.rangeSet.ranges.indexOf(rangeInfo);
            this.condition.rangeSet.ranges.splice(index, 1);
            this.selection(this.value()[this.value().indexOf(this.selection())]);
        }
    };
    RuleRangesEditor.prototype.getSelectedStyleChangedHandler = function (range) {
        var _this = this;
        return function (oldType, newType) {
            if (_this.isGradient && newType != oldType) {
                if (newType == _style_settings_base_1.emptyStyleType) {
                    range.rangeInfo.styleSettings(new appearance_settings_1.AppearanceSettings({}));
                }
                else if (oldType == _style_settings_base_1.emptyStyleType) {
                    range.rangeInfo.styleSettings(range.style());
                }
            }
        };
    };
    RuleRangesEditor.prototype._updateValue = function () {
        this.value(generateRanges(this.condition.rangeSet.ranges.peek(), this.isGradient, this.isPercent()));
    };
    return RuleRangesEditor;
}(_style_settings_container_1.StyleSettingsContainer));
exports.RuleRangesEditor = RuleRangesEditor;
ko.components.register("dx-dashboard-rule-ranges-editor", {
    viewModel: RuleRangesEditor,
    template: { element: 'dx-dashboard-rule-ranges-editor' }
});
var generateRanges = function (ranges, isGradient, isPercent) {
    var value = [];
    var prevIndex = -1, nextIndex = ranges.length;
    var getAppearanceType = function (s) {
        return s instanceof bar_style_settings_1.BarStyleSettings ? s.predefinedColor() : s.appearanceType();
    };
    var isStyleEmpty = function (s) {
        return !s || getAppearanceType(s) == _style_settings_base_1.emptyStyleType;
    };
    var generateStyleSettings = function (currentIndex) {
        var color = color_1.Color.fromAppearance(getAppearanceType(ranges[prevIndex].styleSettings())), nextColor = color_1.Color.fromAppearance(getAppearanceType(ranges[nextIndex].styleSettings()));
        var a = new appearance_settings_1.AppearanceSettings({});
        a.backColor(color_1.Color.fromDxColor(nextColor.blend(color, (currentIndex - nextIndex) / (prevIndex - nextIndex))));
        return ko.observable(a);
    };
    var getRangeValue = function (index) {
        var rangeInfo = ranges[index];
        var value = rangeInfo.value.value;
        return value() === _format_rules_common_1.negativeInfinity ? ko.observable('-∞') : value;
    };
    for (var i = ranges.length - 1; i >= 0; i--) {
        var styleSettings = ranges[i].styleSettings;
        if (isGradient) {
            if (isStyleEmpty(styleSettings())) {
                if (nextIndex > i) {
                    for (var j = i - 1; j >= 0; j--) {
                        if (!isStyleEmpty(ranges[j].styleSettings())) {
                            nextIndex = j;
                            break;
                        }
                    }
                }
                styleSettings = generateStyleSettings(i);
            }
            else {
                prevIndex = i;
            }
        }
        value.push({
            style: styleSettings,
            sign: ranges[i].valueComparison,
            leftValue: (i < ranges.length - 1) ? getRangeValue(i + 1) : (isPercent ? ko.observable(100) : ko.observable('∞')),
            rightValue: (i == 0 && isPercent && getRangeValue(i)() < 0) ? ko.observable(0) : getRangeValue(i),
            rangeInfo: ranges[i]
        });
    }
    return value;
};
