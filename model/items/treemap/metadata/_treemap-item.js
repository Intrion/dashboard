/**
* DevExpress Dashboard (_treemap-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_dashboard_item_1 = require("../../metadata/_data-dashboard-item");
var interactivity_options_1 = require("../../options/interactivity-options");
var _coloring_options_1 = require("../../options/metadata/_coloring-options");
exports.treeMapvalues = { propertyName: _base_metadata_1.valuesPropertyName, modelName: 'Values', displayName: "DashboardWebStringId.Binding.Values", editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.treeMapArgumentsMeta = { propertyName: _base_metadata_1.argumentsPropertyName, modelName: 'Arguments', displayName: _base_metadata_1.BindingSectionTitles.Arguments, editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.layoutAlgorithm = {
    propertyName: 'layoutAlgorithm', modelName: '@LayoutAlgorithm', displayName: "DashboardWebStringId.TreemapLayoutAlgorithm", defaultVal: "Squarified", editor: _base_metadata_1.editorTemplates.list, values: {
        "SliceAndDice": "DashboardWebStringId.Treemap.SliceAndDiceLayoutAlgorithm",
        "Squarified": "DashboardWebStringId.Treemap.SquarifiedLayoutAlgorithm",
        "Striped": "DashboardWebStringId.Treemap.StripedLayoutAlgorithm"
    }
};
exports.layoutDirection = {
    propertyName: 'layoutDirection', modelName: '@LayoutDirection', displayName: "DashboardWebStringId.Treemap.LayoutDirection", defaultVal: "TopLeftToBottomRight", editor: _base_metadata_1.editorTemplates.list, values: {
        "BottomLeftToTopRight": "DashboardWebStringId.Treemap.BottomLeftToTopRightLayoutDirection",
        "BottomRightToTopLeft": "DashboardWebStringId.Treemap.BottomRightToTopLeftLayoutDirection",
        "TopLeftToBottomRight": "DashboardWebStringId.Treemap.TopLeftToBottomRightLayoutDirection",
        "TopRightToBottomLeft": "DashboardWebStringId.Treemap.TopRightToBottomLeftLayoutDirection"
    }
};
exports.tilesLabelContentType = {
    propertyName: 'tilesLabelContentType', modelName: '@TilesLabelContentType', displayName: "DashboardWebStringId.TilesLabelContentType", defaultVal: "Argument", editor: _base_metadata_1.editorTemplates.list, values: {
        "None": "DashboardWebStringId.Treemap.TileLabelsNone",
        "Argument": "DashboardWebStringId.Treemap.TileLabelsArgument",
        "Value": "DashboardWebStringId.Treemap.TileLabelsValue",
        "ArgumentAndValue": "DashboardWebStringId.Treemap.TileLabelsArgumentAndValue"
    }
};
exports.tilesTooltipContentType = {
    propertyName: 'tilesTooltipContentType', modelName: '@TilesTooltipContentType', displayName: "DashboardWebStringId.TilesTooltipContentType", defaultVal: "ArgumentAndValue", editor: _base_metadata_1.editorTemplates.list, values: {
        "None": "DashboardWebStringId.Treemap.TileTooltipsNone",
        "Argument": "DashboardWebStringId.Treemap.TileTooltipsArgument",
        "Value": "DashboardWebStringId.Treemap.TileTooltipsValue",
        "ArgumentAndValue": "DashboardWebStringId.Treemap.TileTooltipsArgumentAndValue"
    }
};
exports.groupsLabelContentType = {
    propertyName: 'groupsLabelContentType', modelName: '@GroupsLabelContentType', displayName: "DashboardWebStringId.GroupsLabelContentType", defaultVal: "Argument", editor: _base_metadata_1.editorTemplates.list, values: {
        "None": "DashboardWebStringId.Treemap.GroupLabelsNone",
        "Argument": "DashboardWebStringId.Treemap.GroupLabelsArgument",
        "Value": "DashboardWebStringId.Treemap.GroupLabelsValue",
        "ArgumentAndValue": "DashboardWebStringId.Treemap.GroupLabelsArgumentAndValue"
    }
};
exports.groupsTooltipContentType = {
    propertyName: 'groupsTooltipContentType', modelName: '@GroupsTooltipContentType', displayName: "DashboardWebStringId.GroupsTooltipContentType", defaultVal: "ArgumentAndValue", editor: _base_metadata_1.editorTemplates.list, values: {
        "None": "DashboardWebStringId.Treemap.GroupTooltipsNone",
        "Argument": "DashboardWebStringId.Treemap.GroupTooltipsArgument",
        "Value": "DashboardWebStringId.Treemap.GroupTooltipsValue",
        "ArgumentAndValue": "DashboardWebStringId.Treemap.GroupTooltipsArgumentAndValue"
    }
};
exports.treemapDashboardItemSerializationsInfo = _data_dashboard_item_1.dataDashboardItemSerializationsInfo.concat([exports.treeMapvalues, exports.treeMapArgumentsMeta, exports.layoutAlgorithm, exports.layoutDirection, exports.tilesLabelContentType, exports.tilesTooltipContentType, exports.groupsLabelContentType, exports.groupsTooltipContentType, interactivity_options_1._dashboardItemInteractivityOptionsMeta, _coloring_options_1.coloringOptions]);
