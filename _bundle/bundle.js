﻿/**
* DevExpress Dashboard (bundle.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var _obsolete_helper_1 = require("../model/internal/_obsolete-helper");
require("../index");
var Data = require("../data/index");
var DataInternal = require("../data/index.internal");
var ViewerInternal = require("../common/viewer/index.internal");
var Common = require("../common");
var CommonInternal = require("../common/index.internal");
var Metadata = require("../model/index.metadata");
var Model = require("../model");
var ModelInternal = require("../model/index.internal");
var Designer = require("../designer");
var DesignerInternal = require("../designer/index.internal");
var DevExpress = window.DevExpress || {};
DevExpress.Dashboard = Common;
DevExpress.Dashboard.Data = Data;
DevExpress.Dashboard.Model = Model;
DevExpress.Dashboard.Designer = Designer;
DevExpress.Dashboard.Metadata = Metadata;
DevExpress.Dashboard.Internal = CommonInternal;
DevExpress.Dashboard.Internal.Data = DataInternal;
DevExpress.Dashboard.Internal.Model = ModelInternal;
DevExpress.Dashboard.Internal.Designer = DesignerInternal;
DevExpress.Dashboard.Internal.Viewer = ViewerInternal;
if (!DevExpress["JS"]) {
    DevExpress["JS"] = {};
}
DevExpress["JS"]["Dashboard"] = DevExpress.Dashboard;
if (!DevExpress["Localization"]) {
    DevExpress["Localization"] = DevExpress.Analytics && DevExpress.Analytics.Localization;
}
function defineClassReplace(memberName) {
    _obsolete_helper_1.defineClassMoved(memberName, DevExpress.Dashboard, DevExpress.Dashboard.Designer, "DevExpress.Dashboard", "DevExpress.Dashboard.Designer", "See https://www.devexpress.com/bcid=BC4459 for details.");
}
defineClassReplace("DashboardItemMenuExtension");
defineClassReplace("DashboardColorSchemeEditorExtension");
defineClassReplace("DashboardCurrencyEditorExtension");
defineClassReplace("DataSourceBrowserExtension");
defineClassReplace("MultiQueryDataSourceWizardExtension");
defineClassReplace("DataSourceWizardExtension");
defineClassReplace("AvailableDataSourcesExtension");
defineClassReplace("BindingPanelExtension");
defineClassReplace("ConversionPanelExtension");
defineClassReplace("CreateDashboardExtension");
defineClassReplace("InteractivityPanelExtension");
defineClassReplace("OpenDashboardExtension");
defineClassReplace("OptionsPanelExtension");
defineClassReplace("SaveDashboardExtension");
defineClassReplace("DashboardTitleEditorExtension");
defineClassReplace("UndoRedoExtension");
defineClassReplace("DashboardParameterEditorExtension");
defineClassReplace("ToolboxExtension");
defineClassReplace("DashboardMenuItem");
defineClassReplace("DashboardToolboxItem");
defineClassReplace("DashboardToolbarItem");
defineClassReplace("DashboardToolboxGroup");
defineClassReplace("DashboardToolbarGroup");
module.exports = DevExpress["Dashboard"];
