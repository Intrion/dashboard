/**
* DevExpress Dashboard (_edit-json-data-source-wizard.js)
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
var $ = require("jquery");
var dx_querybuilder_1 = require("@devexpress/analytics-core/dx-querybuilder");
var _default_1 = require("../../../data/localization/_default");
var _choose_json_schema_page_1 = require("../pages/_choose-json-schema-page");
var EditJsonDataSourceWizardIterator = (function (_super) {
    __extends(EditJsonDataSourceWizardIterator, _super);
    function EditJsonDataSourceWizardIterator(factory, stateManager) {
        return _super.call(this, factory, stateManager) || this;
    }
    EditJsonDataSourceWizardIterator.prototype.getNextPageId = function (pageId) {
        return dx_querybuilder_1.default.Analytics.Wizard.JsonDataSourceWizardPageId.ChooseJsonSchemaPage;
    };
    return EditJsonDataSourceWizardIterator;
}(dx_querybuilder_1.default.Analytics.Wizard.PageIterator));
exports.EditJsonDataSourceWizardIterator = EditJsonDataSourceWizardIterator;
var EditJsonDataSourceWizard = (function (_super) {
    __extends(EditJsonDataSourceWizard, _super);
    function EditJsonDataSourceWizard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = _default_1.getLocalizationById("DashboardWebStringId.DataSources.DashboardDataSourceWizard");
        _this._container = function (element) {
            return $(element).closest(".dx-dashboard-widget-container");
        };
        _this._extendCssClass = "dxrd-sqldatasource-wizard";
        return _this;
    }
    return EditJsonDataSourceWizard;
}(dx_querybuilder_1.default.Analytics.Wizard.PopupWizard));
exports.EditJsonDataSourceWizard = EditJsonDataSourceWizard;
function createEditJsonDataSourceWizard(requestWrapper) {
    var factory = new dx_querybuilder_1.default.Analytics.Wizard.PageFactory();
    _choose_json_schema_page_1._registerChooseJsonSchemaPage(factory, requestWrapper);
    return new EditJsonDataSourceWizard(factory);
}
exports.createEditJsonDataSourceWizard = createEditJsonDataSourceWizard;
