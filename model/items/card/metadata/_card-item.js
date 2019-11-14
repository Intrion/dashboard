/**
* DevExpress Dashboard (_card-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_item_1 = require("../../../data-item/metadata/_data-item");
var _kpi_item_1 = require("../../kpi/metadata/_kpi-item");
exports.cards = { propertyName: 'cards', modelName: 'Cards', displayName: 'DashboardStringId.DefaultNameCardItem', editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.cardSparklineArgument = { propertyName: _base_metadata_1.sparklineArgumentPropertyName, modelName: "SparklineArgument", displayName: "DashboardStringId.CardCalculationAlongSparklineArgument", info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor, visible: false };
exports.cardDashboardItemSerializationsInfo = _kpi_item_1.kpiDashboardItemSerializationsInfo.concat([exports.cards, exports.cardSparklineArgument]);
