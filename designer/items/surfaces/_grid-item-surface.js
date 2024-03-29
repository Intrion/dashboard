﻿/**
* DevExpress Dashboard (_grid-item-surface.js)
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
var grid_item_1 = require("../../../model/items/grid/grid-item");
var _data_field_1 = require("../../../model/data-sources/_data-field");
var _base_item_surface_1 = require("./_base-item-surface");
var _accordion_tab_1 = require("../../_accordion-tab");
var _collection_editor_viewmodel_1 = require("../../ui-widgets/collection-editor/_collection-editor-viewmodel");
var _format_rule_surface_1 = require("../../conditional-formatting/items/surfaces/_format-rule-surface");
var measure_1 = require("../../../model/data-item/measure");
var grid_columns_1 = require("../../../model/items/grid/grid-columns");
var _data_item_properties_composer_1 = require("../properties-composers/_data-item-properties-composer");
var _grid_item_1 = require("../../../model/items/grid/metadata/_grid-item");
var dimension_1 = require("../../../model/data-item/dimension");
var _grid_column_properties_composer_1 = require("../properties-composers/_grid-column-properties-composer");
var _data_item_container_collection_surface_1 = require("../sections/_data-item-container-collection-surface");
var _single_data_item_surface_1 = require("../sections/_single-data-item-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var _grid_item_properties_composer_1 = require("../properties-composers/_grid-item-properties-composer");
var ko = require("knockout");
var _delta_numeric_format_surface_1 = require("./_delta-numeric-format-surface");
var GridItemSurface = (function (_super) {
    __extends(GridItemSurface, _super);
    function GridItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    GridItemSurface.prototype.addConditionalFormattingOptions = function (tabs, dataItem) {
        var _this = this;
        if (dataItem && dataItem.uniqueName()) {
            var editRuleHandler = function (selection, args) {
                var surface = new _format_rule_surface_1.FormatRuleSurface(selection, _this.dashboardItem, _this._dataSourceBrowser, _this.propertiesController);
                surface.startEditing(args);
            };
            var dataItemApplyTo = dataItem;
            if (dataItemApplyTo instanceof measure_1.Measure && this.dashboardItem.hiddenMeasures().indexOf(dataItemApplyTo) !== -1) {
                var valueApplyTo = this.dashboardItem.columns().filter(function (column) { return !(column instanceof grid_columns_1.GridDeltaColumn); })[0];
                dataItemApplyTo = valueApplyTo && valueApplyTo.actualDataItem;
            }
            tabs.push(new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ConditionalFormatting, "DashboardWebStringId.ConditionalFormatting", _data_item_properties_composer_1.DataItemsPropertiesComposer.getFormatRulesForDataItemWrapper(this.dashboardItem, dataItem, dataItemApplyTo, "GridItemFormatRule", this._dataSourceBrowser, editRuleHandler)));
        }
    };
    GridItemSurface.prototype.extendHiddenMeasuresTabs = function (tabs, model) {
        this.addConditionalFormattingOptions(tabs, model);
    };
    GridItemSurface.prototype.fillSections = function () {
        var _this = this;
        var editRuleHandler = function (selection, args) {
            var surface = new _format_rule_surface_1.FormatRuleSurface(selection, _this.dashboardItem, _this._dataSourceBrowser, _this.propertiesController);
            surface.startEditing(args);
        };
        this.editRuleHandler = editRuleHandler;
        var editDeltaFormatHandler = function (model) {
            var surface = new _delta_numeric_format_surface_1.DeltaNumericFormatSurface(model, _this.propertiesController);
            surface.startEditing(new _collection_editor_viewmodel_1.CollectionEditorEditItemArguments());
        };
        var sectionInfo = {
            title: "DashboardWebStringId.Binding.Columns",
            bindingProperty: {
                propertyName: _grid_item_1.gridColumns.propertyName,
                emptyPlaceholder: "DashboardWebStringId.Binding.AddColumn",
                selectedPlaceholder: "DashboardWebStringId.Binding.ConfigureColumn",
                groupName: "Column",
                creator: function (itemType, dataField, existingDataItem) {
                    if (!itemType) {
                        var dimensionDisplayMode = null;
                        if (existingDataItem) {
                            if (existingDataItem instanceof dimension_1.Dimension) {
                                itemType = "GridDimensionColumn";
                            }
                            else if (existingDataItem instanceof measure_1.Measure) {
                                itemType = "GridMeasureColumn";
                            }
                        }
                        else if (_data_field_1.DataField.isMeasure(dataField)) {
                            itemType = "GridMeasureColumn";
                        }
                        else {
                            itemType = "GridDimensionColumn";
                            if (dataField.fieldType() === "Custom") {
                                dimensionDisplayMode = "Image";
                            }
                        }
                    }
                    var columnJson = { "@ItemType": itemType };
                    if (dimensionDisplayMode) {
                        columnJson["@DisplayMode"] = dimensionDisplayMode;
                    }
                    return _this.dashboardItem._createGridColumn(columnJson);
                },
                containersMap: grid_item_1.GridItem._gridColumnTypesMap,
                dataItemType: undefined
            },
            detailsPropertiesComposer: new _grid_column_properties_composer_1.GridColumnPropertiesComposer(editRuleHandler, editDeltaFormatHandler)
        };
        this.sections.push(new _data_item_container_collection_surface_1.DataItemContainerCollectionSurface(this, this.dashboardItem, sectionInfo, ko.computed(function () { return _this.dashboardItem.columns().length === 0 && !!_this.dashboardItem.sparklineArgument() && !!_this.dashboardItem.sparklineArgument().uniqueName(); })));
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: _section_descriptors_1.SectionDescriptors.SparklineArgument,
            warning: ko.computed(function () {
                return !(_this.dashboardItem.sparklineArgument() && _this.dashboardItem.sparklineArgument().uniqueName())
                    && _this.dashboardItem.columns().some(function (column) { return column.itemType() === "GridSparklineColumn"; });
            }),
            fieldConstraint: function (dataField) {
                return _data_field_1.DataField.isContinous(dataField);
            }
        }));
    };
    GridItemSurface.prototype.getPropertiesComposer = function () {
        return new _grid_item_properties_composer_1.GridItemPropertiesComposer(this.editRuleHandler);
    };
    return GridItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.GridItemSurface = GridItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("Grid", GridItemSurface);
