/**
* DevExpress Dashboard (_condition-type-editor.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data_field_1 = require("../../model/data-sources/_data-field");
var range_converter_1 = require("../../model/format-rules/conditions/range/range-converter");
var _format_condition_value_1 = require("../../model/format-rules/conditions/metadata/_format-condition-value");
var _format_condition_top_bottom_1 = require("../../model/format-rules/conditions/metadata/_format-condition-top-bottom");
var _format_condition_average_1 = require("../../model/format-rules/conditions/metadata/_format-condition-average");
var _dashboard_item_format_rule_1 = require("../../model/format-rules/metadata/_dashboard-item-format-rule");
var _style_settings_provider_1 = require("../../viewer-parts/conditional-formatting/_style-settings-provider");
var _appearance_settings_provider_1 = require("../../viewer-parts/conditional-formatting/_appearance-settings-provider");
var range_generator_1 = require("../../model/format-rules/conditions/range/range-generator");
var _utils_1 = require("../../data/_utils");
var ko = require("knockout");
var conditionTypes = [{
        propertyName: 'conditionValue',
        constraint: function (dataType) { return dataType !== "Enum"; },
        specificTypes: Object
            .keys(_format_condition_value_1.conditionInCondition.values)
            .map(function (key) {
            return {
                value: key,
                displayText: _format_condition_value_1.conditionInCondition.values[key],
                constraint: ["Equal", "NotEqual", "ContainsText"].indexOf(key) !== -1 ? function () { return true; } : (function (dataType) { return dataType !== "Text"; })
            };
        })
    }, {
        propertyName: 'conditionTopBottom',
        constraint: function (dataType) { return _data_field_1.IsNumeric(dataType); },
        specificTypes: Object
            .keys(_format_condition_top_bottom_1.topBottom.values)
            .map(function (key) { return { value: key, displayText: _format_condition_top_bottom_1.topBottom.values[key] }; })
    }, {
        propertyName: 'conditionAverage',
        displayText: "DashboardStringId.CommandFormatRuleAboveBelowAverage",
        constraint: function (dataType) { return _data_field_1.IsNumeric(dataType); },
        specificTypes: Object
            .keys(_format_condition_average_1.averageType.values)
            .map(function (key) { return { value: key, displayText: _format_condition_average_1.averageType.values[key] }; })
    }, {
        propertyName: 'conditionDateOccuring',
        constraint: function (dataType) { return _data_field_1.IsDateTime(dataType); }
    }, {
        propertyName: 'conditionExpression',
        constraint: function (dataType) { return dataType !== "Enum"; }
    }, {
        propertyName: 'conditionRangeSet',
        displayText: "DashboardStringId.CommandFormatRuleRangeIcons",
        rangeStyleType: 'Icon',
        constraint: function (dataType) { return !_data_field_1.IsTextual(dataType); },
        subtype: "icons",
        specificTypes: [{
                key: "Ranges 2",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Arrows2, displayText: "Arrows 2" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ArrowsGray2, displayText: "Arrows Gray 2" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Circles2, displayText: "Circles 2" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Symbols2, displayText: "Symbols 2" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.SymbolsCircled2, displayText: "Symbols Circled 2" }
                ]
            }, {
                key: "Ranges 3",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Arrows3, displayText: "Arrows 3" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ArrowsGray3, displayText: "Arrows Gray 3" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.PositiveNegative3, displayText: "Positive Negative 3" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Circles3, displayText: "Circles 3" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.TrafficLights3, displayText: "Traffic Lights 3" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Signs3, displayText: "Signs 3" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Symbols3, displayText: "Symbols 3" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.SymbolsCircled3, displayText: "Symbols Circled 3" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Stars3, displayText: "Stars 3" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Flags3, displayText: "Flags 3" }
                ]
            }, {
                key: "Ranges 4",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Arrows4, displayText: "Arrows 4" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ArrowsGray4, displayText: "Arrows Gray 4" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Circles4, displayText: "Circles 4" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.CirclesRedToBlack4, displayText: "Circles Red To Black 4" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Bars4, displayText: "Bars 4" }
                ]
            }, {
                key: "Ranges 5",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Arrows5, displayText: "Arrows 5" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ArrowsGray5, displayText: "Arrows Gray 5" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Quarters5, displayText: "Quarters 5" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Bars5, displayText: "Bars 5" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.Boxes5, displayText: "Boxes 5" }
                ]
            }]
    }, {
        propertyName: 'conditionRangeSet',
        rangeStyleType: 'Color',
        constraint: function (dataType) { return !_data_field_1.IsTextual(dataType); },
        subtype: "colors",
        specificTypes: [{
                key: "Ranges 2",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsPaleRedGreen, displayText: "Pale Red Green" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsRedGreen, displayText: "Red Green" }
                ]
            }, {
                key: "Ranges 3",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsPaleRedGreenBlue, displayText: "Pale Red Green Blue" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsRedGreenBlue, displayText: "Red Green Blue" }
                ]
            }, {
                key: "Ranges 4",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsPaleRedYellowGreenBlue, displayText: "Pale Red Yellow Green Blue" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsRedYellowGreenBlue, displayText: "Red Yellow Green Blue" }
                ]
            }, {
                key: "Ranges 5",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsPaleRedOrangeYellowGreenBlue, displayText: "Pale Red Orange Yellow Green Blue" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsRedOrangeYellowGreenBlue, displayText: "Red Orange Yellow Green Blue" }
                ]
            }]
    }, {
        propertyName: 'conditionRangeGradient',
        rangeStyleType: 'Gradient',
        constraint: function (dataType) { return !_data_field_1.IsTextual(dataType); },
        specificTypes: [{
                key: "2 Color Gradient Ranges",
                items: [
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenWhite, displayText: "Green White" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.WhiteGreen, displayText: "White Green" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedWhite, displayText: "Red White" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.WhiteRed, displayText: "White Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenYellow, displayText: "Green Yellow" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.YellowGreen, displayText: "Yellow Green" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedYellow, displayText: "Red Yellow" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.YellowRed, displayText: "Yellow Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueWhite, displayText: "Blue White" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.WhiteBlue, displayText: "White Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueRed, displayText: "Blue Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedBlue, displayText: "Red Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.YellowBlue, displayText: "Yellow Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueYellow, displayText: "Blue Yellow" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenBlue, displayText: "Green Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueGreen, displayText: "Blue Green" }
                ]
            }, {
                key: "3 Color Gradient Ranges",
                items: [
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenWhiteBlue, displayText: "Green White Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueWhiteGreen, displayText: "Blue White Green" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueWhiteRed, displayText: "Blue White Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedWhiteBlue, displayText: "Red White Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenWhiteRed, displayText: "Green White Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedWhiteGreen, displayText: "Red White Green" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenYellowRed, displayText: "Green Yellow Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedYellowGreen, displayText: "Red Yellow Green" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueYellowRed, displayText: "Blue Yellow Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedYellowBlue, displayText: "Red Yellow Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenYellowBlue, displayText: "Green Yellow Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueYellowGreen, displayText: "Blue Yellow Green" }
                ]
            }]
    }, {
        propertyName: 'conditionBar',
        constraint: function (dataType) { return !_data_field_1.IsTextual(dataType); }
    }, {
        propertyName: 'conditionColorRangeBar',
        displayText: "DashboardStringId.CommandFormatRuleColorRangeBar",
        rangeStyleType: 'ColorBar',
        constraint: function (dataType) { return !_data_field_1.IsTextual(dataType); },
        specificTypes: [{
                key: "Ranges 2",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsPaleRedGreen, displayText: "Pale Red Green" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsRedGreen, displayText: "Red Green" }
                ]
            }, {
                key: "Ranges 3",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsPaleRedGreenBlue, displayText: "Pale Red Green Blue" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsRedGreenBlue, displayText: "Red Green Blue" }
                ]
            }, {
                key: "Ranges 4",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsPaleRedYellowGreenBlue, displayText: "Pale Red Yellow Green Blue" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsRedYellowGreenBlue, displayText: "Red Yellow Green Blue" }
                ]
            }, {
                key: "Ranges 5",
                items: [
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsPaleRedOrangeYellowGreenBlue, displayText: "Pale Red Orange Yellow Green Blue" },
                    { value: range_converter_1.FormatConditionRangeSetPredefinedType.ColorsRedOrangeYellowGreenBlue, displayText: "Red Orange Yellow Green Blue" }
                ]
            }]
    }, {
        propertyName: 'conditionGradientRangeBar',
        displayText: "DashboardStringId.CommandFormatRuleGradientRangeBar",
        rangeStyleType: 'GradientBar',
        constraint: function (dataType) { return !_data_field_1.IsTextual(dataType); },
        specificTypes: [{
                key: "2 Color Gradient Ranges",
                items: [
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenWhite, displayText: "Green White" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.WhiteGreen, displayText: "White Green" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedWhite, displayText: "Red White" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.WhiteRed, displayText: "White Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenYellow, displayText: "Green Yellow" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.YellowGreen, displayText: "Yellow Green" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedYellow, displayText: "Red Yellow" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.YellowRed, displayText: "Yellow Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueWhite, displayText: "Blue White" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.WhiteBlue, displayText: "White Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueRed, displayText: "Blue Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedBlue, displayText: "Red Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.YellowBlue, displayText: "Yellow Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueYellow, displayText: "Blue Yellow" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenBlue, displayText: "Green Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueGreen, displayText: "Blue Green" }
                ]
            }, {
                key: "3 Color Gradient Ranges",
                items: [
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenWhiteBlue, displayText: "Green White Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueWhiteGreen, displayText: "Blue White Green" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueWhiteRed, displayText: "Blue White Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedWhiteBlue, displayText: "Red White Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenWhiteRed, displayText: "Green White Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedWhiteGreen, displayText: "Red White Green" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenYellowRed, displayText: "Green Yellow Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedYellowGreen, displayText: "Red Yellow Green" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueYellowRed, displayText: "Blue Yellow Red" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.RedYellowBlue, displayText: "Red Yellow Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.GreenYellowBlue, displayText: "Green Yellow Blue" },
                    { value: range_converter_1.FormatConditionRangeGradientPredefinedType.BlueYellowGreen, displayText: "Blue Yellow Green" }
                ]
            }]
    },
].map(function (typeDescr) {
    typeDescr["displayText"] = typeDescr["displayText"] || _dashboard_item_format_rule_1.conditionTypes.filter(function (t) { return t.propertyName === typeDescr.propertyName; })[0].displayName;
    return typeDescr;
});
var FormatConditionTypeEditorSurface = (function () {
    function FormatConditionTypeEditorSurface(dataType, conditionType, specificType) {
        var _this = this;
        this.dataType = dataType;
        this.conditionType = conditionType;
        this.specificType = specificType;
        this.displayMode = ko.observable();
        this.ancestors = ko.observable([]);
        this.backClick = function () {
            _this.displayMode("conditionTypes");
        };
        this.updateItemAppearance = function (e) {
            var element = _utils_1.$unwrap(e.itemElement);
            e.itemData.hasSpecificTypes ? element.classList.add('dx-dashboard-has-children') : element.classList.remove('dx-dashboard-has-children');
        };
        this.displayMode.subscribe(function (mode) {
            if (mode === "conditionTypes") {
                _this.ancestors(['…']);
            }
            else {
                _this.ancestors(['…', _this.availableConditionTypes().filter(function (t) { return t.value === _this.conditionType(); })[0].displayText]);
            }
        });
        this.availableConditionTypes = ko.computed(function () {
            if (!_this.dataType())
                return;
            var types = conditionTypes
                .filter(function (ct) { return ct.constraint(dataType()); })
                .map(function (ct) { return ({
                value: ct.propertyName + (ct.subtype ? "_" + ct.subtype : ""),
                displayText: ct.displayText,
                hasSpecificTypes: !!ct.specificTypes
            }); });
            return types;
        });
        this.availableConditionTypes.subscribe(function (types) {
            if (!types.filter(function (t) { return t.value === _this.conditionType.peek(); })[0]) {
                _this.conditionType(null);
            }
        });
        this.availableSpecificTypes = ko.computed(function () {
            var conditionType = _this.conditionType(), dataType = _this.dataType(), types = [];
            conditionType = conditionType;
            if (dataType && conditionType) {
                var conditionTypeDesciptor = conditionTypes.filter(function (ct) { return !!ct.subtype
                    ? ct.propertyName + "_" + ct.subtype === conditionType
                    : ct.propertyName === conditionType; })[0];
                if (conditionTypeDesciptor && conditionTypeDesciptor.specificTypes) {
                    types = conditionTypeDesciptor.specificTypes.filter(function (st) { return !st.constraint || st.constraint(dataType); });
                    types["rangeStyleType"] = conditionTypeDesciptor.rangeStyleType || 'None';
                }
                else {
                    types = [{ value: conditionType, displayText: "-" }];
                    types["rangeStyleType"] = 'None';
                }
            }
            if (types && (types.length > 1)) {
                _this.displayMode("specificTypes");
            }
            else {
                _this.displayMode("conditionTypes");
            }
            return types;
        });
        this.availableSpecificTypes.subscribe(function (types) {
            if (types.length === 1)
                _this.specificType(types[0].value);
        });
        this.selectedSpecificTypes = ko.computed(function () {
            if (_this.availableSpecificTypes()["rangeStyleType"] === 'None') {
                return _this.availableSpecificTypes() && _this.availableSpecificTypes().filter(function (value) { return value.value === specificType(); }) || [];
            }
            else {
                var selection = null, key = null;
                _this.availableSpecificTypes().forEach(function (group) {
                    group.items.forEach(function (item) {
                        if (item.value === specificType()) {
                            key = group.key;
                            selection = item;
                            return false;
                        }
                    });
                    if (selection)
                        return false;
                });
                return selection && [{ key: key, items: [selection] }] || [];
            }
        });
    }
    FormatConditionTypeEditorSurface.prototype.getStyleList = function (rangeStyleType) {
        var _this = this;
        var styleList = range_converter_1.FormatConditionConverter.getStyleList(rangeStyleType).list.reverse();
        return styleList.map(function (styleType) {
            if (_this.availableSpecificTypes()["rangeStyleType"] === 'Icon') {
                return _style_settings_provider_1.styleSettingsProvider.toIconCssClass(styleType);
            }
            else {
                return _appearance_settings_provider_1.appearanceSettingsProvider.toCss(styleType);
            }
        });
    };
    FormatConditionTypeEditorSurface.prototype.getGradientColorsList = function (type) {
        return range_generator_1.FormatConditionRangeGenerator.generateGradientColors(type, 6).reverse();
    };
    return FormatConditionTypeEditorSurface;
}());
exports.FormatConditionTypeEditorSurface = FormatConditionTypeEditorSurface;
