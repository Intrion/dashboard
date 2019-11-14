/**
* DevExpress Dashboard (_card-layout-template.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _card_layout_1 = require("./_card-layout");
var card_layout_1 = require("../card-layout");
var card_layout_template_element_1 = require("../card-layout-template-element");
exports.type = { propertyName: "type", modelName: "@Type" };
exports.templateSerializationInfo = [_card_layout_1.minWidth, _card_layout_1.maxWidth, exports.type];
exports.cardLayout = { propertyName: "layout", modelName: "Layout", displayName: "Layout", type: card_layout_1.CardLayout };
exports.customTemplateSerializationInfo = exports.templateSerializationInfo.concat([exports.cardLayout]);
exports.mainValue = { propertyName: "mainValue", modelName: "MainValue", type: card_layout_template_element_1.CardLayoutTemplateDataElement };
exports.subValue = { propertyName: "subValue", modelName: "SubValue", type: card_layout_template_element_1.CardLayoutTemplateDataElement };
exports.deltaIndicator = { propertyName: "deltaIndicator", modelName: "DeltaIndicator", type: card_layout_template_element_1.CardLayoutTemplateDeltaElement };
exports.cardLayoutSparkline = { propertyName: "sparkline", modelName: "Sparkline", type: card_layout_template_element_1.CardLayoutTemplateSparklineElement };
exports.bottomValue = { propertyName: "bottomValue", modelName: "BottomValue", type: card_layout_template_element_1.CardLayoutTemplateDataElement };
exports.bottomSubValue1 = { propertyName: "bottomSubValue1", modelName: "BottomSubValue1", type: card_layout_template_element_1.CardLayoutTemplateDataElement };
exports.bottomSubValue2 = { propertyName: "bottomSubValue2", modelName: "BottomSubValue2", type: card_layout_template_element_1.CardLayoutTemplateDataElement };
exports.deltaCompactTemplateSerializationInfo = exports.templateSerializationInfo.concat([exports.mainValue, exports.subValue, exports.bottomValue, exports.bottomSubValue1, exports.bottomSubValue2, exports.deltaIndicator, exports.cardLayoutSparkline]);
exports.topValue = { propertyName: "topValue", modelName: "TopValue", type: card_layout_template_element_1.CardLayoutTemplateDataElement };
exports.bottomValue1 = { propertyName: "bottomValue1", modelName: "BottomValue1", type: card_layout_template_element_1.CardLayoutTemplateDataElement };
exports.bottomValue2 = { propertyName: "bottomValue2", modelName: "BottomValue2", type: card_layout_template_element_1.CardLayoutTemplateDataElement };
exports.autofitTemplateSerializationInfo = exports.templateSerializationInfo.concat([exports.topValue, exports.mainValue, exports.subValue, exports.bottomValue1, exports.bottomValue2, exports.deltaIndicator, exports.cardLayoutSparkline]);
exports.nameValueTemplateSerializationInfo = exports.templateSerializationInfo.concat([exports.mainValue, exports.subValue, exports.bottomValue, exports.deltaIndicator, exports.cardLayoutSparkline]);
exports.ultraCompactTemplateSerializationInfo = exports.templateSerializationInfo.concat([exports.mainValue, exports.subValue, exports.bottomValue, exports.bottomSubValue1, exports.bottomSubValue2, exports.deltaIndicator, exports.cardLayoutSparkline]);
