/**
* DevExpress Dashboard (_calculation-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _measure_1 = require("../../../model/data-item/metadata/_measure");
var measure_calculation_1 = require("../../../model/data-item/calculations/measure-calculation");
var _expression_editor_item_provider_1 = require("../../expression-editor/_expression-editor-item-provider");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var _utils_1 = require("../../../data/_utils");
var ko = require("knockout");
var CalculationPropertiesComposer = (function () {
    function CalculationPropertiesComposer() {
    }
    CalculationPropertiesComposer.prototype.composeTabs = function (model, dashboardItem, dataSourceBrowser) {
        var commonTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common"), expressionTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Expression, "DashboardStringId.CalculationTypeExpression");
        this.fillCommonWrapper(commonTab, model, dashboardItem, dataSourceBrowser);
        return [commonTab];
    };
    CalculationPropertiesComposer.prototype.fillCommonWrapper = function (tab, model, dashboardItem, dataSourceBrowser) {
        var p = [];
        var visibilityRules = {};
        p.push(_utils_1.extend({ dataDashboardItem: dashboardItem, dataSourceBrowser: dataSourceBrowser }, _measure_1.windowDefinition));
        if (!model.expression()) {
            p.push({
                container: _measure_1.calculation,
                properties: [{
                        container: model.calculation.getInfo()[0],
                        properties: model.calculation.calculation().getInfo()
                    }]
            });
        }
        var wrapper = new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: p,
            visibilityFilterRules: visibilityRules
        });
        var getExpression = function () {
            if (!!model.expression()) {
                return model.expression();
            }
            return !!model.calculation.calculation() ? model.calculation.calculation()._getExpression(expressionArgument) : '';
        };
        var expressionArgument = measure_calculation_1.MeasureCalculation._getSummaryExpression(model.dataMember(), model.summaryType());
        var expression = ko.computed({
            read: getExpression,
            write: function (val) {
                if (val !== getExpression()) {
                    model.expression(val);
                }
            }
        });
        var expressionOptions = {
            value: expression,
            path: ko.observable(dashboardItem.dataMember() ? [dashboardItem.dataSource(), dashboardItem.dataMember()].join(".") : dashboardItem.dataSource()),
            patchFieldName: function (fieldPath) {
                if (fieldPath.indexOf("Parameters.Parameters.") === 0) {
                    return "Parameters." + fieldPath.split(".")[2];
                }
                return fieldPath;
            },
            itemsProvider: new _expression_editor_item_provider_1.ExpressionEditorItemsProvider(dataSourceBrowser, dataSourceBrowser.parameters && dataSourceBrowser.parameters(), dashboardItem.dataSource, dashboardItem.dataMember)
        };
        wrapper.addProperty(ko.observable(expressionOptions), { propertyName: "expressionOptions", displayName: "Expression", editor: _base_metadata_1.editorTemplates.calculationExpression });
        tab.tabModel(wrapper);
    };
    return CalculationPropertiesComposer;
}());
exports.CalculationPropertiesComposer = CalculationPropertiesComposer;
