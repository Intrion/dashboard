/**
* DevExpress Dashboard (export-extension.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _export_dialog_binder_1 = require("./_export-dialog-binder");
var control_options_1 = require("../control-options");
var _obsolete_helper_1 = require("../../model/internal/_obsolete-helper");
;
var name = "dashboard-export";
var DashboardExportExtension = (function () {
    function DashboardExportExtension(dashboardControl, options) {
        if (options === void 0) { options = {}; }
        this.dashboardControl = dashboardControl;
        this._exportInfoContoller = new _export_dialog_binder_1.ExportInfoManager();
        this.name = name;
        this._defaultOptions = {
            allowExportDashboard: true,
            allowExportDashboardItems: true
        };
        options = __assign({}, this._defaultOptions, options);
        this.allowExportDashboardItems = options.allowExportDashboardItems;
        this.allowExportDashboard = options.allowExportDashboard;
        this._dialogBinder = new _export_dialog_binder_1.ExportDialogBinder(dashboardControl.dashboard, dashboardControl._serviceClient, dashboardControl.getWidgetContainer, options, this._exportInfoContoller);
        defineObsoleteMethods(this);
    }
    DashboardExportExtension.prototype._initializeExportButton = function (localContext) {
        var _this = this;
        localContext.beforeApplyOptions.add(function (item, options, isCreation) {
            options.allowExport = _this.allowExportDashboardItems;
            options.showExportDialog = function (format) { return _this._dialogBinder.showItemDialog(item.componentName(), format); };
        });
    };
    DashboardExportExtension.prototype._initializePrimaryExportItem = function (localContext) {
        var _this = this;
        this._initializeExportButton(localContext);
        localContext.viewerItemCreated.add(function (item, viewerItem) {
            if (viewerItem.visualMode === 'caption') {
                _this._exportInfoContoller.registerCaptionExportItem(item.componentName(), function () { return viewerItem.getInfo(); });
            }
            else {
                _this._exportInfoContoller.registerPrimaryExportItem(item.componentName(), function () { return viewerItem.getInfo(); });
            }
        });
        localContext.viewerItemDispose.add(function (item, viewerItem) {
            if (viewerItem.visualMode === 'caption') {
                _this._exportInfoContoller.unregisterCaptionExportItem(item.componentName());
            }
            else {
                _this._exportInfoContoller.unregisterPrimaryExportItem(item.componentName());
            }
        });
    };
    DashboardExportExtension.prototype._initializeSecondaryExportItem = function (localContext) {
        var _this = this;
        this._initializeExportButton(localContext);
        localContext.viewerItemCreated.add(function (item, viewerItem) {
            _this._exportInfoContoller.registerSecondaryExportItem(item.componentName(), function () { return viewerItem.getInfo(); });
        });
        localContext.viewerItemDispose.add(function (item, viewerItem) {
            _this._exportInfoContoller.unregisterSecondaryExportItem(item.componentName());
        });
    };
    DashboardExportExtension.prototype.start = function () {
        var _this = this;
        this._dialogBinderSubscription = this.dashboardControl.dashboard.subscribe(function () { return _this._dialogBinder.reset(); });
    };
    DashboardExportExtension.prototype.stop = function () {
        this._dialogBinderSubscription.dispose();
        this._exportInfoContoller.dispose();
    };
    DashboardExportExtension.prototype.showExportDashboardDialog = function (format) {
        this._dialogBinder.showDashboardDialog(format);
    };
    DashboardExportExtension.prototype.showExportDashboardItemDialog = function (itemComponentName, format) {
        this._dialogBinder.showItemDialog(itemComponentName, format);
    };
    DashboardExportExtension.prototype.hideExportDialog = function () {
        this._dialogBinder.hide();
    };
    DashboardExportExtension.prototype.getPdfExportOptions = function () {
        return this._dialogBinder.exportOptions.pdfExportOptions;
    };
    DashboardExportExtension.prototype.getImageExportOptions = function () {
        return this._dialogBinder.exportOptions.imageExportOptions;
    };
    DashboardExportExtension.prototype.getExcelExportOptions = function () {
        return this._dialogBinder.exportOptions.excelExportOptions;
    };
    DashboardExportExtension.prototype.setPdfExportOptions = function (options) {
        this._dialogBinder.exportOptions.setPdfOptions(options);
    };
    DashboardExportExtension.prototype.setImageExportOptions = function (options) {
        this._dialogBinder.exportOptions.setImageOptions(options);
    };
    DashboardExportExtension.prototype.setExcelExportOptions = function (options) {
        this._dialogBinder.exportOptions.setExcelOptions(options);
    };
    DashboardExportExtension.prototype.exportToPdf = function (options, fileName) {
        this._dialogBinder.exportDashboardTo('PDF', options, fileName);
    };
    DashboardExportExtension.prototype.exportToImage = function (options, fileName) {
        this._dialogBinder.exportDashboardTo('Image', options, fileName);
    };
    DashboardExportExtension.prototype.exportToExcel = function (options, fileName) {
        this._dialogBinder.exportDashboardTo('Excel', options, fileName);
    };
    DashboardExportExtension.prototype.exportDashboardItemToPdf = function (itemName, options, fileName) {
        this._dialogBinder.exportDashboardItemTo(itemName, 'PDF', options, fileName);
    };
    DashboardExportExtension.prototype.exportDashboardItemToImage = function (itemName, options, fileName) {
        this._dialogBinder.exportDashboardItemTo(itemName, 'Image', options, fileName);
    };
    DashboardExportExtension.prototype.exportDashboardItemToExcel = function (itemName, options, fileName) {
        this._dialogBinder.exportDashboardItemTo(itemName, 'Excel', options, fileName);
    };
    return DashboardExportExtension;
}());
exports.DashboardExportExtension = DashboardExportExtension;
control_options_1.defaultExtensions[name] = function (dashboardControl, options) { return new DashboardExportExtension(dashboardControl, options); };
function defineObsoleteMethods(extension) {
    _obsolete_helper_1.defineObsoleteMethod({
        target: extension,
        memberName: "showDashboardDialog",
        oldMemberDisplayName: "DashboardExportExtension.showDashboardDialog",
        newMemberDisplayName: "DashboardExportExtension.showExportDashboardDialog",
        ignoreWarmMessage: true,
        action: function (format) { return extension.showExportDashboardDialog(format); }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: extension,
        memberName: "hide",
        oldMemberDisplayName: "DashboardExportExtension.hide",
        newMemberDisplayName: "DashboardExportExtension.hideExportDialog",
        ignoreWarmMessage: true,
        action: function () { return extension.hideExportDialog(); }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: extension,
        memberName: "showItemDialog",
        oldMemberDisplayName: "DashboardExportExtension.showItemDialog",
        newMemberDisplayName: "DashboardExportExtension.showExportDashboardItemDialog",
        ignoreWarmMessage: true,
        action: function (itemName, format) { return extension.showExportDashboardItemDialog(itemName, format); }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: extension,
        memberName: "showDashboardExportDialog",
        oldMemberDisplayName: "DashboardExportExtension.showDashboardExportDialog",
        newMemberDisplayName: "DashboardExportExtension.showExportDashboardDialog",
        ignoreWarmMessage: true,
        action: function (format) { return extension.showExportDashboardDialog(format); }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: extension,
        memberName: "showItemExportDialog",
        oldMemberDisplayName: "DashboardExportExtension.showItemExportDialog",
        newMemberDisplayName: "DashboardExportExtension.showExportDashboardItemDialog",
        ignoreWarmMessage: true,
        action: function (itemName, format) { return extension.showExportDashboardItemDialog(itemName, format); }
    });
    _obsolete_helper_1.defineObsoleteProperty({
        target: extension,
        memberName: "documentOptions",
        oldMemberDisplayName: "DashboardExportExtension.documentOptions",
        ignoreWarmMessage: true,
        action: function () {
            return extension._dialogBinder.exportOptions;
        }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: extension,
        memberName: "getExportOptions",
        oldMemberDisplayName: "DashboardExportExtension.getExportOptions",
        warmMessage: 'The DashboardExportExtension.getExportOptions method is obsolete.  Use the DashboardExportExtension.getPdfExportOptions, DashboardExportExtension.getImageExportOptions, or DashboardExportExtension.getExcelExportOptions method instead.',
        ignoreWarmMessage: true,
        action: function () { return extension._dialogBinder.exportOptions.convertToASPxClientDashboardExportOptions(); }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: extension,
        memberName: "setExportOptions",
        oldMemberDisplayName: "DashboardExportExtension.setExportOptions",
        warmMessage: 'The DashboardExportExtension.setExportOptions method is obsolete.  Use the DashboardExportExtension.setPdfExportOptions, DashboardExportExtension.setImageExportOptions, or DashboardExportExtension.setExcelExportOptions method instead.',
        ignoreWarmMessage: true,
        action: function (options) {
            var exportOptions = extension._dialogBinder.exportOptions.convertToExportOptions(options);
            extension._dialogBinder.exportOptions.setOptions(exportOptions);
        }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: extension,
        memberName: "exportDashboardTo",
        oldMemberDisplayName: 'DashboardExportExtension.exportDashboardTo',
        warmMessage: 'The DashboardExportExtension.exportDashboardTo method is obsolete.  Use the DashboardExportExtension.exportToPdf, DashboardExportExtension.exportToImage, or DashboardExportExtension.exportToExcel method instead.',
        ignoreWarmMessage: true,
        action: function (format, options, fileName) {
            if (format === 'PDF') {
                extension.exportToPdf(options, fileName);
            }
            else if (format === 'Image') {
                extension.exportToImage(options, fileName);
            }
            else if (format === 'Excel') {
                extension.exportToExcel(options, fileName);
            }
        }
    });
    _obsolete_helper_1.defineObsoleteMethod({
        target: extension,
        memberName: "exportDashboardItemTo",
        oldMemberDisplayName: 'DashboardExportExtension.exportDashboardItemTo',
        warmMessage: 'The DashboardExportExtension.exportDashboardItemTo method is obsolete.  Use the DashboardExportExtension.exportDashboardItemToPdf, DashboardExportExtension.exportDashboardItemToImage, or DashboardExportExtension.exportDashboardItemToExcel method instead.',
        ignoreWarmMessage: true,
        action: function (itemName, format, options, fileName) {
            if (format === 'PDF') {
                extension.exportDashboardItemToPdf(itemName, options, fileName);
            }
            else if (format === 'Image') {
                extension.exportDashboardItemToImage(itemName, options, fileName);
            }
            else if (format === 'Excel') {
                extension.exportDashboardItemToExcel(itemName, options, fileName);
            }
        }
    });
}
