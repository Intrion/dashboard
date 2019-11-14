/**
* DevExpress Dashboard (_chart-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _chart_item_1 = require("../../../model/items/chart/metadata/_chart-item");
var _display_name_provider_1 = require("../../_display-name-provider");
var _chart_axis_1 = require("../../../model/items/chart/metadata/_chart-axis");
var ko = require("knockout");
var _data_field_1 = require("../../../model/data-sources/_data-field");
var _default_1 = require("../../../data/localization/_default");
var ChartItemPropertiesComposer = (function () {
    function ChartItemPropertiesComposer() {
        this.argumentDataField = ko.observable();
    }
    ChartItemPropertiesComposer.prototype._getAxisXTabModel = function (model, dataSourceBrowser, argumentDataField) {
        var groupInterval = model.arguments()[0] ? model.arguments()[0].dateTimeGroupInterval() : "None";
        var isOlap = argumentDataField && _data_field_1.DataField.isOlap(argumentDataField.dataMember());
        return _shared_composers_1.SharedComposers.getAxisWrapper(model.axisX, ko.computed(function () {
            var argumentsNumber = model.arguments().length;
            if (!argumentsNumber) {
                return "";
            }
            else if (argumentsNumber === 1) {
                return model.arguments()[0] && _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, model, model.arguments()[0]);
            }
            else
                return "Arguments";
        }), null, _data_field_1.DataField.isDateTime(argumentDataField) && !isOlap, _data_field_1.DataField.isNumeric(argumentDataField) && !isOlap, groupInterval);
    };
    ChartItemPropertiesComposer.prototype.composeTabs = function (model, dataSourceBrowser) {
        var _this = this;
        if (model.arguments().length == 1) {
            var dimension = model.arguments()[0];
            if (!this.argumentDataField.peek()) {
                dataSourceBrowser.findDataField(model.dataSource(), model.dataMember(), dimension.dataMember()).done(function (dataField) {
                    _this.argumentDataField(dataField);
                });
            }
        }
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model, [_chart_item_1.chartRotated])),
        ];
        var axisXTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.AxisX, "DashboardWebStringId.Chart.AxisX");
        axisXTab.tabModel(this._getAxisXTabModel(model, dataSourceBrowser, this.argumentDataField.peek()));
        this.argumentDataField.subscribe(function (dataField) { axisXTab.tabModel(_this._getAxisXTabModel(model, dataSourceBrowser, dataField)); });
        result.push(axisXTab);
        if (model) {
            model.panes().forEach(function (pane) {
                var numberPostfix = model.panes().length === 1 ? "" : " (" + pane.name() + ")";
                result.push(new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.AxisY + numberPostfix, _default_1.getLocalizationById("DashboardWebStringId.Chart.AxisY") + numberPostfix, _shared_composers_1.SharedComposers.getAxisWrapper(pane.primaryAxisY, ko.computed(function () {
                    var series = pane.series().filter(function (s) { return !s.plotOnSecondaryAxis(); });
                    if (!series.length) {
                        return "";
                    }
                    var dataItems = series.reduce(function (array, singleSeries) {
                        return array.concat(singleSeries
                            ._getBindingModel()
                            .map(function (b) { return singleSeries[b.propertyName]; })
                            .filter(function (dil) { return !!dil.dataItem(); })
                            .map(function (dil) { return dil.dataItem(); }));
                    }, []);
                    if (dataItems.length === 1) {
                        return _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, model, dataItems[0]);
                    }
                    else
                        return "Values";
                }), _chart_axis_1.chartAlwaysShowZeroLevel)));
                if (pane.series().filter(function (s) { return s.plotOnSecondaryAxis(); }).length > 0) {
                    result.push(new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.AxisY + "secondary" + numberPostfix, _default_1.getLocalizationById("DashboardWebStringId.Chart.AxisYSecondary") + numberPostfix, _shared_composers_1.SharedComposers.getAxisWrapper(pane.secondaryAxisY, ko.computed(function () {
                        var series = pane.series().filter(function (s) { return s.plotOnSecondaryAxis(); });
                        if (!series.length) {
                            return "";
                        }
                        else if (series.length === 1) {
                            return _display_name_provider_1.getDataItemContainerDisplayName(dataSourceBrowser, model, series[0]);
                        }
                        else
                            return "Values";
                    }), _chart_axis_1.chartAlwaysShowZeroLevel)));
                }
            });
        }
        result.push(new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Legend, "DashboardWebStringId.AccordionTab.ChartLegend", _shared_composers_1.SharedComposers.getLegendWrapper(model)));
        return result;
    };
    return ChartItemPropertiesComposer;
}());
exports.ChartItemPropertiesComposer = ChartItemPropertiesComposer;
