/**
* DevExpress Dashboard (_choose-json-schema-page.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_querybuilder_1 = require("@devexpress/analytics-core/dx-querybuilder");
function _registerChooseJsonSchemaPage(factory, requestWrapper) {
    dx_querybuilder_1.default.Analytics.Wizard._registerChooseJsonSchemaPage(factory, requestWrapper);
    var chooseJsonSchemaPageMeta = factory.getMetadata(dx_querybuilder_1.default.Analytics.Wizard.JsonDataSourceWizardPageId.ChooseJsonSchemaPage);
    chooseJsonSchemaPageMeta.create = function () { return new dx_querybuilder_1.default.Analytics.Wizard.ChooseJsonSchemaPage(requestWrapper, false); };
}
exports._registerChooseJsonSchemaPage = _registerChooseJsonSchemaPage;
