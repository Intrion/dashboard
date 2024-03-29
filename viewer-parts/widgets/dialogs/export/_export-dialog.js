﻿/**
* DevExpress Dashboard (_export-dialog.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _export_options_cache_1 = require("./_export-options-cache");
var _dialog_form_1 = require("../_dialog-form");
var _export_options_1 = require("../../../_export-options");
var _localizer_1 = require("../../../../data/_localizer");
var _localization_ids_1 = require("../../../../data/_localization-ids");
var _export_localization_1 = require("./_export-localization");
var _export_options_groups_1 = require("./_export-options-groups");
var _viewer_item_types_1 = require("../../../_viewer-item-types");
var browser = require("devextreme/core/utils/browser");
var string_1 = require("devextreme/core/utils/string");
var exportDialog = (function () {
    function exportDialog(options) {
        this.defaultTitle = _export_options_1.ExportOptions.DefaultTitle;
        this.options = options;
        this._initialize();
    }
    exportDialog.prototype._initialize = function () {
        var _this = this;
        var that = this, options = that.options;
        exportDialog._initializeExportLocalizedStrings();
        that.exportOptionsCache = new _export_options_cache_1.exportOptionsCache();
        that.dialogForm = new _dialog_form_1.dialogForm({
            dialogContainer: options.container,
            fullScreenMode: options.fullScreenMode,
            width: 'auto',
            height: 'auto',
            allowScrolling: true,
            deferredRendering: true,
            buttons: [{
                    name: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonReset),
                    func: function (type, typeExportEntities) {
                        that.group.set(options.documentInfo);
                    },
                    hide: false
                }, {
                    name: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonExport),
                    hide: true,
                    func: function () {
                        var actualDocumentInfo = that.exportOptionsCache.getActualDocumentInfo(that.name, options.documentInfo);
                        that.group.apply(actualDocumentInfo);
                        that.exportOptionsCache.add(that.name, options.documentInfo, actualDocumentInfo);
                        that.exportFunction(actualDocumentInfo);
                    },
                    isDefault: true
                }, {
                    name: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonCancel),
                    hide: true,
                    func: function () { }
                }
            ],
            renderContent: function (controlCreationCallbacks) {
                var exportForm = document.createElement('div');
                exportForm.classList.add(_dialog_form_1.dialogClasses.form);
                that._createGroup();
                var editors = that.group.getEditors();
                editors.forEach(function (editor) {
                    var element = document.createElement('div');
                    element.classList.add(_dialog_form_1.dialogClasses.element);
                    exportForm.appendChild(element);
                    element.appendChild(editor.labelDiv);
                    element.appendChild(editor.editorDiv);
                });
                return exportForm;
            },
            disposeContent: function () {
                if (_this.group) {
                    var editors = that.group.getEditors();
                    editors.forEach(function (editor) { return editor.dispose(); });
                }
            },
            setActualState: function (width) {
            },
            onShown: options.onShown,
            onShowing: options.onShowing,
            onHidden: options.onHidden
        });
    };
    exportDialog.prototype.showDialog = function (name, type, format, options) {
        this.defaultTitle = options.title;
        this.options.documentInfo.fileName = options.fileName;
        this.name = name;
        this.type = type;
        this.format = format;
        this.dialogForm.popupInstance.option('title', this._getLocalizedTitle(options.fileName, format));
        this.dialogForm.showDialog();
    };
    exportDialog.prototype.hideDialog = function () {
        this.dialogForm.hideDialog();
    };
    exportDialog.prototype.dispose = function () {
        this.dialogForm && this.dialogForm.dispose();
    };
    exportDialog.prototype._getLocalizedTitle = function (name, format) {
        var isIE8orIE9 = (browser.msie && (browser.version == "8.0" || browser.version == "9.0")), exportString;
        switch (format) {
            case _export_options_1.exportFormats.pdf:
                exportString = _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ExportToPdf);
                break;
            case _export_options_1.exportFormats.image:
                exportString = _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ExportToImage);
                break;
            default:
                exportString = _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ExportToExcel);
                break;
        }
        return isIE8orIE9 || !name ? exportString : string_1.format(_localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ExportTemplate), exportString, name);
    };
    exportDialog.prototype.setExportFunction = function (exportFunction) {
        if (exportFunction)
            this.exportFunction = exportFunction;
    };
    exportDialog.prototype._createImageGroup = function (type, documentInfo) {
        switch (type) {
            case null:
                return new _export_options_groups_1.dashboardImageOptionsGroup(documentInfo.imageExportOptions.ShowTitle);
            case _viewer_item_types_1.types.image:
                return new _export_options_groups_1.simplyImageOptionsGroup(documentInfo.imageExportOptions.ShowTitle);
            default:
                return new _export_options_groups_1.imageOptionsGroup(documentInfo.imageExportOptions.ShowTitle);
        }
    };
    exportDialog.prototype._createExcelGroup = function (type, documentInfo) {
        switch (type) {
            case null:
                return new _export_options_groups_1.dashboardExcelOptionsGroup(documentInfo.excelExportOptions.Format);
            default:
                return new _export_options_groups_1.excelOptionsGroup(documentInfo.excelExportOptions.Format);
        }
    };
    exportDialog.prototype._createPdfGroup = function (type, documentInfo) {
        switch (type) {
            case null:
                return new _export_options_groups_1.entireDashboardOptionsGroup(documentInfo.pdfExportOptions.showTitle, documentInfo.pdfExportOptions.DashboardAutomaticPageLayout, documentInfo.pdfExportOptions.DocumentScaleMode);
            case _viewer_item_types_1.types.group:
            case _viewer_item_types_1.types.page:
                return new _export_options_groups_1.groupItemOptionsGroup(documentInfo.pdfExportOptions.ShowTitle, documentInfo.pdfExportOptions.DashboardAutomaticPageLayout, documentInfo.pdfExportOptions.DocumentScaleMode);
            case _viewer_item_types_1.types.grid:
                return new _export_options_groups_1.gridOptionsGroup(documentInfo.pdfExportOptions.ShowTitle, documentInfo.pdfExportOptions.GridFitToPageWidth, documentInfo.pdfExportOptions.DocumentScaleMode);
            case _viewer_item_types_1.types.chart:
            case _viewer_item_types_1.types.scatter:
                return new _export_options_groups_1.chartOptionsGroup(documentInfo.pdfExportOptions.ShowTitle);
            case _viewer_item_types_1.types.pie:
                return new _export_options_groups_1.pieOptionsGroup(documentInfo.pdfExportOptions.ShowTitle, documentInfo.pdfExportOptions.PieAutoArrangeContent, documentInfo.pdfExportOptions.DocumentScaleMode);
            case _viewer_item_types_1.types.gauge:
                return new _export_options_groups_1.gaugeOptionsGroup(documentInfo.pdfExportOptions.ShowTitle, documentInfo.pdfExportOptions.GaugeAutoArrangeContent, documentInfo.pdfExportOptions.DocumentScaleMode);
            case _viewer_item_types_1.types.card:
                return new _export_options_groups_1.cardOptionsGroup(documentInfo.pdfExportOptions.ShowTitle, documentInfo.pdfExportOptions.CardAutoArrangeContent, documentInfo.pdfExportOptions.DocumentScaleMode);
            case _viewer_item_types_1.types.pivot:
                return new _export_options_groups_1.pivotOptionsGroup(documentInfo.pdfExportOptions.ShowTitle, documentInfo.pdfExportOptions.DocumentScaleMode);
            case _viewer_item_types_1.types.treemap:
                return new _export_options_groups_1.treemapOptionsGroup(documentInfo.pdfExportOptions.ShowTitle);
            case _viewer_item_types_1.types.choroplethMap:
            case _viewer_item_types_1.types.geoPointMap:
            case _viewer_item_types_1.types.bubbleMap:
            case _viewer_item_types_1.types.pieMap:
                return new _export_options_groups_1.mapOptionsGroup(documentInfo.pdfExportOptions.ShowTitle);
            case _viewer_item_types_1.types.rangeFilter:
                return new _export_options_groups_1.rangeFilterOptionsGroup(documentInfo.pdfExportOptions.ShowTitle);
            case _viewer_item_types_1.types.text:
                return new _export_options_groups_1.textItemOptionsGroup(documentInfo.pdfExportOptions.ShowTitle);
            case _viewer_item_types_1.types.boundImage:
                return new _export_options_groups_1.boundImageItemOptionsGroup(documentInfo.pdfExportOptions.ShowTitle, documentInfo.pdfExportOptions.DocumentScaleMode);
            case _viewer_item_types_1.types.image:
                return new _export_options_groups_1.imageItemOptionsGroup(documentInfo.pdfExportOptions.ShowTitle, documentInfo.pdfExportOptions.DocumentScaleMode);
            case _viewer_item_types_1.types.custom:
                return new _export_options_groups_1.customItemOptionsGroup(documentInfo.pdfExportOptions.ShowTitle, documentInfo.pdfExportOptions.DashboardAutomaticPageLayout, documentInfo.pdfExportOptions.DocumentScaleMode);
        }
    };
    exportDialog.prototype._createGroup = function () {
        var _this = this;
        var that = this, documentInfo = that.exportOptionsCache.getActualDocumentInfo(that.name, that.options.documentInfo);
        if (that.group) {
            that.group.dispose();
        }
        switch (that.format) {
            case _export_options_1.exportFormats.image:
                that.group = that._createImageGroup(that.type, documentInfo);
                break;
            case _export_options_1.exportFormats.excel:
                that.group = that._createExcelGroup(that.type, documentInfo);
                break;
            default:
                that.group = that._createPdfGroup(that.type, documentInfo);
                break;
        }
        if (documentInfo.pdfExportOptions && documentInfo.pdfExportOptions.Title === _export_options_1.ExportOptions.DefaultTitle)
            documentInfo.pdfExportOptions.Title = this.defaultTitle;
        if (documentInfo.imageExportOptions && documentInfo.imageExportOptions.Title === _export_options_1.ExportOptions.DefaultTitle)
            documentInfo.imageExportOptions.Title = this.defaultTitle;
        that.group.set(documentInfo);
        var scaleModeGroup = !!that.group["dashboardOptionsGroup"] ? that.group["dashboardOptionsGroup"].scaleModeOptionsGroup : that.group["scaleModeOptionsGroup"];
        if (!!scaleModeGroup) {
            scaleModeGroup.visibilityUpdated.add(function () { _this.dialogForm.popupInstance.repaint(); });
        }
    };
    exportDialog._initializeExportLocalizedStrings = function () {
        _export_localization_1.paperKind.letter = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKindLetter), value: _export_options_1.dashboardExportPaperKind.letter };
        _export_localization_1.paperKind.legal = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKindLegal), value: _export_options_1.dashboardExportPaperKind.legal };
        _export_localization_1.paperKind.executive = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKindExecutive), value: _export_options_1.dashboardExportPaperKind.executive };
        _export_localization_1.paperKind.a5 = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKindA5), value: _export_options_1.dashboardExportPaperKind.a5 };
        _export_localization_1.paperKind.a4 = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKindA4), value: _export_options_1.dashboardExportPaperKind.a4 };
        _export_localization_1.paperKind.a3 = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKindA3), value: _export_options_1.dashboardExportPaperKind.a3 };
        _export_localization_1.pageLayout.auto = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PageLayoutAuto), value: _export_options_1.dashboardExportPageLayout.auto };
        _export_localization_1.pageLayout.portrait = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PageLayoutPortrait), value: _export_options_1.dashboardExportPageLayout.portrait };
        _export_localization_1.pageLayout.landscape = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PageLayoutLandscape), value: _export_options_1.dashboardExportPageLayout.landscape };
        _export_localization_1.scaleMode.none = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ScaleModeNone), value: _export_options_1.dashboardExportDocumentScaleMode.none };
        _export_localization_1.scaleMode.useScaleFactor = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ScaleModeUseScaleFactor), value: _export_options_1.dashboardExportDocumentScaleMode.useScaleFactor };
        _export_localization_1.scaleMode.autoFitToPageWidth = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ScaleModeAutoFitToPagesWidth), value: _export_options_1.dashboardExportDocumentScaleMode.autoFitToPagesWidth };
        _export_localization_1.dashboardStatePosition.below = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FilterStatePresentationAfter), value: _export_options_1.dashboardStateExportPosition.below };
        _export_localization_1.dashboardStatePosition.separatePage = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FilterStatePresentationAfterAndSplitPage), value: _export_options_1.dashboardStateExportPosition.separatePage };
        _export_localization_1.excelDashboardStatePosition.below = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FilterStatePresentationAfter), value: _export_options_1.dashboardStateExcelExportPosition.below };
        _export_localization_1.excelDashboardStatePosition.separateSheet = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FilterStatePresentationSplitSheet), value: _export_options_1.dashboardStateExcelExportPosition.separateSheet };
        _export_localization_1.imageFormat.png = { displayValue: "PNG", value: _export_options_1.dashboardExportImageFormat.png };
        _export_localization_1.imageFormat.gif = { displayValue: "GIF", value: _export_options_1.dashboardExportImageFormat.gif };
        _export_localization_1.imageFormat.jpg = { displayValue: "JPG", value: _export_options_1.dashboardExportImageFormat.jpg };
        _export_localization_1.excelFormat.csv = { displayValue: "CSV", value: _export_options_1.dashboardExportExcelFormat.csv };
        _export_localization_1.excelFormat.xls = { displayValue: "XLS", value: _export_options_1.dashboardExportExcelFormat.xls };
        _export_localization_1.excelFormat.xlsx = { displayValue: "XLSX", value: _export_options_1.dashboardExportExcelFormat.xlsx };
        _export_localization_1.sizeMode.none = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.SizeModeNone), value: _export_options_1.dashboardExportSizeMode.none };
        _export_localization_1.sizeMode.stretch = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.SizeModeStretch), value: _export_options_1.dashboardExportSizeMode.stretch };
        _export_localization_1.sizeMode.zoom = { displayValue: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.SizeModeZoom), value: _export_options_1.dashboardExportSizeMode.zoom };
    };
    return exportDialog;
}());
exports.exportDialog = exportDialog;
