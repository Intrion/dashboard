/**
* DevExpress Dashboard (_export-options-groups.js)
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
var _dialog_form_1 = require("../_dialog-form");
var array_store_1 = require("devextreme/data/array_store");
var tag_box_1 = require("devextreme/ui/tag_box");
var select_box_1 = require("devextreme/ui/select_box");
var radio_group_1 = require("devextreme/ui/radio_group");
var text_box_1 = require("devextreme/ui/text_box");
var check_box_1 = require("devextreme/ui/check_box");
var number_box_1 = require("devextreme/ui/number_box");
var date_box_1 = require("devextreme/ui/date_box");
var _localizer_1 = require("../../../../data/_localizer");
var _localization_ids_1 = require("../../../../data/_localization-ids");
var _export_localization_1 = require("./_export-localization");
var _export_options_1 = require("../../../_export-options");
var _utils_1 = require("../../../../data/_utils");
var $ = require("jquery");
var DXNUMBERBOX_MIN = 1, DXNUMBERBOX_MAX = 999;
var dialogEditorFactory = {
    dxTagBox: { name: 'dxTagBox', create: function (element, options) { return new tag_box_1.default(element, options); } },
    dxSelectBox: { name: 'dxSelectBox', create: function (element, options) { return new select_box_1.default(element, options); } },
    dxRadioGroup: { name: 'dxRadioGroup', create: function (element, options) { return new radio_group_1.default(element, options); } },
    dxNumberBox: { name: 'dxNumberBox', create: function (element, options) { return new number_box_1.default(element, options); } },
    dxTextBox: { name: 'dxTextBox', create: function (element, options) { return new text_box_1.default(element, options); } },
    dxCheckBox: { name: 'dxCheckBox', create: function (element, options) { return new check_box_1.default(element, options); } },
    dxDateBox: { name: 'dxDateBox', create: function (element, options) { return new date_box_1.default(element, options); } }
};
var labeledEditor = (function () {
    function labeledEditor(options) {
        this.options = options;
        this._initialize();
    }
    labeledEditor.prototype._initialize = function () {
        var that = this;
        var controlOptions = _utils_1.deepExtend(that._getControlOptions(that.options), that.options.controlOptions || {});
        that.valueName = controlOptions.valueName;
        var labelText = that.options.labelText;
        if (!that.options.customText)
            labelText += ':';
        that.labelDiv = document.createElement('div');
        that.labelDiv.classList.add(_dialog_form_1.dialogClasses.name);
        that.labelDiv.classList.add(that._generateElementNameClassName(that.options.controlCreator.name, that.options.largeMargin));
        that.labelDiv.innerText = labelText;
        that.editorDiv = document.createElement('div');
        that.editorDiv.classList.add(_dialog_form_1.dialogClasses.box);
        var elementClass = that._getElementClassName(that.options.controlCreator.name, that.options.largeMargin);
        if (elementClass)
            that.editorDiv.classList.add(elementClass);
        this.editor = that.options.controlCreator.create(that.editorDiv, controlOptions);
        that.enabled = true;
    };
    labeledEditor.prototype.setEnabled = function (enabled) {
        var that = this;
        that.enabled = enabled;
        if (enabled) {
            that.labelDiv.classList.remove(_dialog_form_1.dialogClasses.disabledName);
        }
        else {
            that.labelDiv.classList.add(_dialog_form_1.dialogClasses.disabledName);
        }
        that.editor.option("disabled", !enabled);
    };
    labeledEditor.prototype.setVisibility = function (visible) {
        var that = this;
        that.enabled = visible;
        if (visible) {
            that.labelDiv.style.display = 'inline-block';
            that.editorDiv.style.display = 'inline-block';
        }
        else {
            that.labelDiv.style.display = 'none';
            that.editorDiv.style.display = 'none';
        }
    };
    labeledEditor.prototype.set = function (value) {
        var that = this;
        that.editor.option(that.valueName, value);
    };
    labeledEditor.prototype.get = function () {
        var that = this;
        return that.editor.option(that.valueName);
    };
    labeledEditor.prototype.dispose = function () {
        if (this.editor)
            this.editor.dispose();
    };
    labeledEditor.prototype._getControlOptions = function (options) {
        switch (options.controlCreator.name) {
            case dialogEditorFactory.dxSelectBox.name:
                return {
                    dataSource: {
                        store: new array_store_1.default(options.values),
                        paginate: false
                    },
                    itemTemplate: function (item) { return item.displayValue; },
                    displayExpr: 'displayValue',
                    valueExpr: 'value',
                    valueName: 'value',
                    placeholder: _localizer_1.localizer.getString(_localization_ids_1.localizationId.FilterElementCheckedComboBoxNoDataCaption),
                    noDataText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.FilterElementNoDataToDisplay),
                    dropDownOptions: {
                        container: '.dx-dashboard-viewer'
                    }
                };
            case dialogEditorFactory.dxRadioGroup.name:
                var dataSource = options.values.map(function (value) { return value.value; });
                return {
                    dataSource: dataSource,
                    itemTemplate: function (item) {
                        return options.values.filter(function (value) {
                            return value.value === item;
                        })[0].displayValue;
                    },
                    valueName: 'value'
                };
            case dialogEditorFactory.dxNumberBox.name:
                return {
                    valueName: 'value',
                    min: DXNUMBERBOX_MIN,
                    max: DXNUMBERBOX_MAX
                };
            case dialogEditorFactory.dxCheckBox.name:
                return {
                    valueName: 'value'
                };
            case dialogEditorFactory.dxTextBox.name:
                return {
                    valueName: 'value'
                };
        }
    };
    labeledEditor.prototype._generateElementNameClassName = function (controlCreator, largeMargin) {
        if (largeMargin)
            return _dialog_form_1.dialogClasses.name + '-margin-top';
        if ((controlCreator == dialogEditorFactory.dxRadioGroup.name) || (controlCreator == dialogEditorFactory.dxCheckBox.name)) {
            return _dialog_form_1.dialogClasses.name + '-top';
        }
        return _dialog_form_1.dialogClasses.name + '-middle';
    };
    labeledEditor.prototype._getElementClassName = function (controlName, largeMargin) {
        if (largeMargin)
            return _dialog_form_1.dialogClasses.elementLargeMarginTop;
        switch (controlName) {
            case dialogEditorFactory.dxSelectBox.name:
            case dialogEditorFactory.dxTextBox.name:
                return _dialog_form_1.dialogClasses.elementTextBox;
            case dialogEditorFactory.dxNumberBox.name:
                return _dialog_form_1.dialogClasses.elementNumberBox;
            default:
                return "";
        }
    };
    return labeledEditor;
}());
exports.labeledEditor = labeledEditor;
var optionsGroup = (function () {
    function optionsGroup() {
    }
    optionsGroup.prototype.setEnabled = function (enabled) {
        var that = this;
        that.enabled = enabled;
        that.getEditors().forEach(function (editor) {
            editor.setEnabled(enabled);
        });
    };
    optionsGroup.prototype.dispose = function () {
        this.getEditors().forEach(function (editor) { return editor.dispose(); });
    };
    return optionsGroup;
}());
exports.optionsGroup = optionsGroup;
var dashboardStateOptionsGroup = (function (_super) {
    __extends(dashboardStateOptionsGroup, _super);
    function dashboardStateOptionsGroup() {
        var _this = _super.call(this) || this;
        _this._initialize();
        return _this;
    }
    dashboardStateOptionsGroup.prototype._initialize = function () {
        var that = this;
        this.exportFilters = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.IncludeExportDashboardState),
            controlCreator: dialogEditorFactory.dxCheckBox,
            largeMargin: true,
            controlOptions: {
                text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExportFilters),
                onValueChanged: function (args) {
                    that.dashboardStatePosition.setEnabled(that.exportParameters.get() || args.component.option('value'));
                }
            }
        });
        this.exportParameters = new labeledEditor({
            labelText: " ",
            customText: true,
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExportParameters),
                onValueChanged: function (args) {
                    that.dashboardStatePosition.setEnabled(that.exportFilters.get() || args.component.option('value'));
                }
            }
        });
        this.dashboardStatePosition = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.DashboardStatePosition),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.dashboardStatePosition.below, _export_localization_1.dashboardStatePosition.separatePage]
        });
        that.dashboardStatePosition.setEnabled(that.exportFilters.get() || that.exportParameters.get());
    };
    dashboardStateOptionsGroup.prototype.set = function (documentInfo) {
        this.exportFilters.set(documentInfo.pdfExportOptions.ExportFilters);
        this.exportParameters.set(documentInfo.pdfExportOptions.ExportParameters);
        this.dashboardStatePosition.set(documentInfo.pdfExportOptions.DashboardStatePosition);
    };
    dashboardStateOptionsGroup.prototype.apply = function (documentInfo) {
        documentInfo.pdfExportOptions.ExportFilters = this.exportFilters.get();
        documentInfo.pdfExportOptions.ExportParameters = this.exportParameters.get();
        documentInfo.pdfExportOptions.DashboardStatePosition = this.dashboardStatePosition.get();
    };
    dashboardStateOptionsGroup.prototype.getEditors = function () {
        return [this.exportFilters, this.exportParameters, this.dashboardStatePosition];
    };
    return dashboardStateOptionsGroup;
}(optionsGroup));
exports.dashboardStateOptionsGroup = dashboardStateOptionsGroup;
var captionOptionsGroup = (function (_super) {
    __extends(captionOptionsGroup, _super);
    function captionOptionsGroup(showCaption) {
        var _this = _super.call(this) || this;
        _this._initialize(showCaption);
        return _this;
    }
    captionOptionsGroup.prototype._initialize = function (showCaption) {
        var that = this;
        this.showCaption = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ShowTitle),
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                onValueChanged: function (args) {
                    that.caption.setEnabled(args.component.option('value'));
                }
            }
        });
        this.caption = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.Title),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        that.caption.setEnabled(showCaption);
    };
    captionOptionsGroup.prototype.set = function (documentInfo) {
        this.showCaption.set(documentInfo.pdfExportOptions.ShowTitle);
        this.caption.set(documentInfo.pdfExportOptions.Title);
    };
    captionOptionsGroup.prototype.apply = function (documentInfo) {
        documentInfo.pdfExportOptions.ShowTitle = this.showCaption.get();
        documentInfo.pdfExportOptions.Title = this.caption.get();
    };
    captionOptionsGroup.prototype.getEditors = function () {
        return [this.showCaption, this.caption];
    };
    return captionOptionsGroup;
}(optionsGroup));
exports.captionOptionsGroup = captionOptionsGroup;
var scaleModeOptionsGroup = (function (_super) {
    __extends(scaleModeOptionsGroup, _super);
    function scaleModeOptionsGroup(scaleMode) {
        var _this = _super.call(this) || this;
        _this.visibilityUpdated = $.Callbacks();
        _this._initialize(scaleMode);
        return _this;
    }
    scaleModeOptionsGroup.prototype._initialize = function (scaleModeValue) {
        var that = this;
        this.scaleMode = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ScaleMode),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.scaleMode.none, _export_localization_1.scaleMode.useScaleFactor, _export_localization_1.scaleMode.autoFitToPageWidth],
            controlOptions: {
                onValueChanged: function (args) {
                    that._setScaleModeOptionsVisibility(args.component.option('value'));
                }
            }
        });
        this.scaleFactor = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ScaleFactor),
            controlCreator: dialogEditorFactory.dxNumberBox
        });
        this.autoFitPageCount = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.AutoFitPageCount),
            controlCreator: dialogEditorFactory.dxNumberBox
        });
        that._setScaleModeOptionsVisibility(scaleModeValue);
    };
    scaleModeOptionsGroup.prototype.set = function (documentInfo) {
        this.scaleMode.set(documentInfo.pdfExportOptions.DocumentScaleMode);
        this.scaleFactor.set(documentInfo.pdfExportOptions.ScaleFactor);
        this.autoFitPageCount.set(documentInfo.pdfExportOptions.AutoFitPageCount);
        this._setScaleModeOptionsVisibility(this.scaleMode.get());
    };
    scaleModeOptionsGroup.prototype.apply = function (documentInfo) {
        if (this.scaleMode.enabled) {
            documentInfo.pdfExportOptions.DocumentScaleMode = this.scaleMode.get();
            documentInfo.pdfExportOptions.ScaleFactor = this.scaleFactor.get();
            documentInfo.pdfExportOptions.AutoFitPageCount = this.autoFitPageCount.get();
        }
        else {
            documentInfo.pdfExportOptions.ScaleFactor = 1;
            documentInfo.pdfExportOptions.AutoFitPageCount = 1;
        }
    };
    scaleModeOptionsGroup.prototype.getEditors = function () {
        return [this.scaleMode, this.scaleFactor, this.autoFitPageCount];
    };
    scaleModeOptionsGroup.prototype._setScaleModeOptionsVisibility = function (scaleModeValue) {
        var that = this;
        switch (scaleModeValue) {
            case _export_localization_1.scaleMode.none.value:
                that.scaleFactor.setVisibility(false);
                that.autoFitPageCount.setVisibility(false);
                break;
            case _export_localization_1.scaleMode.useScaleFactor.value:
                that.scaleFactor.setVisibility(true);
                that.autoFitPageCount.setVisibility(false);
                break;
            case _export_localization_1.scaleMode.autoFitToPageWidth.value:
                that.scaleFactor.setVisibility(false);
                that.autoFitPageCount.setVisibility(true);
                break;
        }
        that.visibilityUpdated.fire();
    };
    return scaleModeOptionsGroup;
}(optionsGroup));
exports.scaleModeOptionsGroup = scaleModeOptionsGroup;
var documentOptionsGroup = (function (_super) {
    __extends(documentOptionsGroup, _super);
    function documentOptionsGroup(includeCaption) {
        var _this = _super.call(this) || this;
        _this._initialize(includeCaption);
        return _this;
    }
    documentOptionsGroup.prototype._initialize = function (includeCaption) {
        this.pageLayout = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PageLayout),
            controlCreator: dialogEditorFactory.dxRadioGroup,
            values: [_export_localization_1.pageLayout.portrait, _export_localization_1.pageLayout.landscape]
        });
        this.paperKind = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKind),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.paperKind.letter, _export_localization_1.paperKind.legal, _export_localization_1.paperKind.executive, _export_localization_1.paperKind.a5, _export_localization_1.paperKind.a4, _export_localization_1.paperKind.a3]
        });
        this.captionOptionsGroup = new captionOptionsGroup(includeCaption);
    };
    documentOptionsGroup.prototype.set = function (documentInfo) {
        this.pageLayout.set(documentInfo.pdfExportOptions.PageLayout);
        this.paperKind.set(documentInfo.pdfExportOptions.PaperKind);
        this.captionOptionsGroup.set(documentInfo);
    };
    documentOptionsGroup.prototype.apply = function (documentInfo) {
        documentInfo.pdfExportOptions.PageLayout = this.pageLayout.get();
        documentInfo.pdfExportOptions.PaperKind = this.paperKind.get();
        this.captionOptionsGroup.apply(documentInfo);
    };
    documentOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [this.pageLayout, this.paperKind];
        that.captionOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    return documentOptionsGroup;
}(optionsGroup));
exports.documentOptionsGroup = documentOptionsGroup;
var textItemOptionsGroup = (function (_super) {
    __extends(textItemOptionsGroup, _super);
    function textItemOptionsGroup(showCaption) {
        var _this = _super.call(this) || this;
        _this._initialize(showCaption);
        return _this;
    }
    textItemOptionsGroup.prototype._initialize = function (showCaption) {
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.documentOptionsGroup = new documentOptionsGroup(showCaption);
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
    };
    textItemOptionsGroup.prototype.set = function (documentInfo) {
        this.fileName.set(documentInfo.fileName);
        this.documentOptionsGroup.set(documentInfo);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    textItemOptionsGroup.prototype.apply = function (documentInfo) {
        documentInfo.fileName = this.fileName.get();
        this.documentOptionsGroup.apply(documentInfo);
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    textItemOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [this.fileName];
        that.documentOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    return textItemOptionsGroup;
}(optionsGroup));
exports.textItemOptionsGroup = textItemOptionsGroup;
var boundImageItemOptionsGroup = (function (_super) {
    __extends(boundImageItemOptionsGroup, _super);
    function boundImageItemOptionsGroup(showCaption, scaleMode) {
        var _this = _super.call(this) || this;
        _this._initialize(showCaption, scaleMode);
        return _this;
    }
    boundImageItemOptionsGroup.prototype._initialize = function (showCaption, scaleMode) {
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.documentOptionsGroup = new documentOptionsGroup(showCaption);
        this.scaleModeOptionsGroup = new scaleModeOptionsGroup(scaleMode);
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
    };
    boundImageItemOptionsGroup.prototype.set = function (documentInfo) {
        this.fileName.set(documentInfo.fileName);
        this.documentOptionsGroup.set(documentInfo);
        this.scaleModeOptionsGroup.set(documentInfo);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    boundImageItemOptionsGroup.prototype.apply = function (documentInfo) {
        documentInfo.fileName = this.fileName.get();
        this.documentOptionsGroup.apply(documentInfo);
        this.scaleModeOptionsGroup.apply(documentInfo);
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    boundImageItemOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [that.fileName];
        that.documentOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        that.scaleModeOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    return boundImageItemOptionsGroup;
}(optionsGroup));
exports.boundImageItemOptionsGroup = boundImageItemOptionsGroup;
var imageItemOptionsGroup = (function (_super) {
    __extends(imageItemOptionsGroup, _super);
    function imageItemOptionsGroup(showCaption, scaleMode) {
        var _this = _super.call(this) || this;
        _this._initialize(showCaption, scaleMode);
        return _this;
    }
    imageItemOptionsGroup.prototype._initialize = function (showCaption, scaleMode) {
        var that = this;
        this.pageLayout = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PageLayout),
            controlCreator: dialogEditorFactory.dxRadioGroup,
            values: [_export_localization_1.pageLayout.portrait, _export_localization_1.pageLayout.landscape]
        });
        this.paperKind = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKind),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.paperKind.letter, _export_localization_1.paperKind.legal, _export_localization_1.paperKind.executive, _export_localization_1.paperKind.a5, _export_localization_1.paperKind.a4, _export_localization_1.paperKind.a3]
        });
        this.showCaption = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ShowTitle),
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                onValueChanged: function (args) {
                    that.caption.setEnabled(args.component.option('value'));
                }
            }
        });
        this.caption = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.Title),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        that.caption.setEnabled(showCaption);
        this.scaleModeOptionsGroup = new scaleModeOptionsGroup(scaleMode);
    };
    imageItemOptionsGroup.prototype.set = function (documentInfo) {
        this.pageLayout.set(documentInfo.pdfExportOptions.PageLayout);
        this.paperKind.set(documentInfo.pdfExportOptions.PaperKind);
        this.showCaption.set(documentInfo.pdfExportOptions.ShowTitle);
        this.caption.set(documentInfo.pdfExportOptions.Title);
        this.fileName.set(documentInfo.fileName);
        this.scaleModeOptionsGroup.set(documentInfo);
    };
    imageItemOptionsGroup.prototype.apply = function (documentInfo) {
        documentInfo.pdfExportOptions.PageLayout = this.pageLayout.get();
        documentInfo.pdfExportOptions.PaperKind = this.paperKind.get();
        documentInfo.pdfExportOptions.ShowTitle = this.showCaption.get();
        documentInfo.pdfExportOptions.Title = this.caption.get();
        documentInfo.fileName = this.fileName.get();
        this.scaleModeOptionsGroup.apply(documentInfo);
    };
    imageItemOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [this.fileName, this.pageLayout, this.paperKind, this.showCaption, this.caption];
        that.scaleModeOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    return imageItemOptionsGroup;
}(optionsGroup));
exports.imageItemOptionsGroup = imageItemOptionsGroup;
var groupItemOptionsGroup = (function (_super) {
    __extends(groupItemOptionsGroup, _super);
    function groupItemOptionsGroup(showCaption, dashboardAutomaticPageLayout, scaleMode) {
        var _this = _super.call(this) || this;
        _this._initialize(showCaption, dashboardAutomaticPageLayout, scaleMode);
        return _this;
    }
    groupItemOptionsGroup.prototype._initialize = function (showCaption, dashboardAutomaticPageLayout, scaleMode) {
        this.dashboardOptionsGroup = new dashboardOptionsGroup(dashboardAutomaticPageLayout, scaleMode);
        this.captionOptionsGroup = new captionOptionsGroup(showCaption);
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
    };
    groupItemOptionsGroup.prototype.set = function (documentInfo) {
        this.dashboardOptionsGroup.set(documentInfo);
        this.captionOptionsGroup.set(documentInfo);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    groupItemOptionsGroup.prototype.apply = function (documentInfo) {
        this.dashboardOptionsGroup.apply(documentInfo);
        this.captionOptionsGroup.apply(documentInfo);
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    groupItemOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = this.dashboardOptionsGroup.getEditors(that.captionOptionsGroup.getEditors());
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    return groupItemOptionsGroup;
}(optionsGroup));
exports.groupItemOptionsGroup = groupItemOptionsGroup;
var customItemOptionsGroup = (function (_super) {
    __extends(customItemOptionsGroup, _super);
    function customItemOptionsGroup(showCaption, dashboardAutomaticPageLayout, scaleMode) {
        var _this = _super.call(this) || this;
        _this._initialize(showCaption, dashboardAutomaticPageLayout, scaleMode);
        return _this;
    }
    customItemOptionsGroup.prototype._initialize = function (showCaption, dashboardAutomaticPageLayout, scaleMode) {
        this.dashboardOptionsGroup = new dashboardOptionsGroup(dashboardAutomaticPageLayout, scaleMode);
        this.captionOptionsGroup = new captionOptionsGroup(showCaption);
    };
    customItemOptionsGroup.prototype.set = function (documentInfo) {
        this.dashboardOptionsGroup.set(documentInfo);
        this.captionOptionsGroup.set(documentInfo);
    };
    customItemOptionsGroup.prototype.apply = function (documentInfo) {
        this.dashboardOptionsGroup.apply(documentInfo);
        this.captionOptionsGroup.apply(documentInfo);
    };
    customItemOptionsGroup.prototype.getEditors = function () {
        var that = this;
        return this.dashboardOptionsGroup.getEditors(that.captionOptionsGroup.getEditors());
    };
    return customItemOptionsGroup;
}(optionsGroup));
exports.customItemOptionsGroup = customItemOptionsGroup;
var entireDashboardOptionsGroup = (function (_super) {
    __extends(entireDashboardOptionsGroup, _super);
    function entireDashboardOptionsGroup(showTitle, dashboardAutomaticPageLayout, scaleMode) {
        var _this = _super.call(this) || this;
        _this._initialize(showTitle, dashboardAutomaticPageLayout, scaleMode);
        return _this;
    }
    entireDashboardOptionsGroup.prototype._initialize = function (showTitle, dashboardAutomaticPageLayout, scaleMode) {
        var that = this;
        this.dashboardOptionsGroup = new dashboardOptionsGroup(dashboardAutomaticPageLayout, scaleMode);
        this.showTitle = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ShowTitle),
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                onValueChanged: function (args) {
                    that.title.setEnabled(args.component.option('value'));
                }
            }
        });
        this.title = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.Title),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        that.title.setEnabled(showTitle);
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
    };
    entireDashboardOptionsGroup.prototype.set = function (documentInfo) {
        this.dashboardOptionsGroup.set(documentInfo);
        this.showTitle.set(documentInfo.pdfExportOptions.ShowTitle);
        this.title.set(documentInfo.pdfExportOptions.Title);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    entireDashboardOptionsGroup.prototype.apply = function (documentInfo) {
        this.dashboardOptionsGroup.apply(documentInfo);
        documentInfo.pdfExportOptions.ShowTitle = this.showTitle.get();
        documentInfo.pdfExportOptions.Title = this.title.get();
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    entireDashboardOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = this.dashboardOptionsGroup.getEditors([this.showTitle, this.title]);
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    return entireDashboardOptionsGroup;
}(optionsGroup));
exports.entireDashboardOptionsGroup = entireDashboardOptionsGroup;
var dashboardOptionsGroup = (function (_super) {
    __extends(dashboardOptionsGroup, _super);
    function dashboardOptionsGroup(dashboardAutomaticPageLayout, scaleMode) {
        var _this = _super.call(this) || this;
        _this._initialize(dashboardAutomaticPageLayout, scaleMode);
        return _this;
    }
    dashboardOptionsGroup.prototype._initialize = function (dashboardAutomaticPageLayout, scaleMode) {
        var that = this;
        this.pageLayout = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PageLayout),
            controlCreator: dialogEditorFactory.dxRadioGroup,
            values: [_export_localization_1.pageLayout.portrait, _export_localization_1.pageLayout.landscape, _export_localization_1.pageLayout.auto],
            controlOptions: {
                onValueChanged: function (args) {
                    that._setScaleModeOptionsVisibility(args.value);
                }
            }
        });
        this.paperKind = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKind),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.paperKind.letter, _export_localization_1.paperKind.legal, _export_localization_1.paperKind.executive, _export_localization_1.paperKind.a5, _export_localization_1.paperKind.a4, _export_localization_1.paperKind.a3]
        });
        this.scaleModeOptionsGroup = new scaleModeOptionsGroup(scaleMode);
        if (dashboardAutomaticPageLayout)
            that._setScaleModeOptionsVisibility(_export_localization_1.pageLayout.auto.value);
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
    };
    dashboardOptionsGroup.prototype.set = function (documentInfo) {
        this.pageLayout.set(documentInfo.pdfExportOptions.DashboardAutomaticPageLayout ? _export_localization_1.pageLayout.auto.value : documentInfo.pdfExportOptions.PageLayout);
        this.paperKind.set(documentInfo.pdfExportOptions.PaperKind);
        this.scaleModeOptionsGroup.set(documentInfo);
        this.fileName.set(documentInfo.fileName);
    };
    dashboardOptionsGroup.prototype.apply = function (documentInfo) {
        if (this.pageLayout.get() != _export_localization_1.pageLayout.auto.value)
            documentInfo.pdfExportOptions.PageLayout = this.pageLayout.get();
        documentInfo.pdfExportOptions.DashboardAutomaticPageLayout = this.pageLayout.get() == _export_localization_1.pageLayout.auto.value;
        documentInfo.pdfExportOptions.PaperKind = this.paperKind.get();
        this.scaleModeOptionsGroup.apply(documentInfo);
        documentInfo.fileName = this.fileName.get();
    };
    dashboardOptionsGroup.prototype.getEditors = function (captionEditors) {
        var that = this;
        var editors = [this.fileName, this.pageLayout, this.paperKind];
        captionEditors.forEach(function (editor) {
            editors.push(editor);
        });
        that.scaleModeOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    dashboardOptionsGroup.prototype._setScaleModeOptionsVisibility = function (pageLayoutValue) {
        this.scaleModeOptionsGroup.setEnabled(pageLayoutValue != _export_localization_1.pageLayout.auto.value);
    };
    return dashboardOptionsGroup;
}(optionsGroup));
exports.dashboardOptionsGroup = dashboardOptionsGroup;
var gridOptionsGroup = (function (_super) {
    __extends(gridOptionsGroup, _super);
    function gridOptionsGroup(includeCaption, fitToPageWidth, scaleMode) {
        var _this = _super.call(this) || this;
        _this._initialize(includeCaption, fitToPageWidth, scaleMode);
        return _this;
    }
    gridOptionsGroup.prototype._initialize = function (includeCaption, fitToPageWidth, scaleMode) {
        var that = this;
        this.documentOptionsGroup = new documentOptionsGroup(includeCaption);
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
        this.printHeadersOnEveryPage = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PrintHeadersOnEveryPage),
            controlCreator: dialogEditorFactory.dxCheckBox
        });
        this.fitToPageWidth = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FitToPageWidth),
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                onValueChanged: function (args) {
                    that._setScaleModeOptionsVisibility(args.component.option('value'));
                }
            }
        });
        this.scaleModeOptionsGroup = new scaleModeOptionsGroup(scaleMode);
        this._setScaleModeOptionsVisibility(fitToPageWidth);
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
    };
    gridOptionsGroup.prototype.set = function (documentInfo) {
        this.documentOptionsGroup.set(documentInfo);
        this.dashboardStateOptionsGroup.set(documentInfo);
        this.printHeadersOnEveryPage.set(documentInfo.pdfExportOptions.GridPrintHeadersOnEveryPage);
        this.fitToPageWidth.set(documentInfo.pdfExportOptions.GridFitToPageWidth);
        this.scaleModeOptionsGroup.set(documentInfo);
        this.fileName.set(documentInfo.fileName);
    };
    gridOptionsGroup.prototype.apply = function (documentInfo) {
        this.documentOptionsGroup.apply(documentInfo);
        this.dashboardStateOptionsGroup.apply(documentInfo);
        documentInfo.pdfExportOptions.GridPrintHeadersOnEveryPage = this.printHeadersOnEveryPage.get();
        documentInfo.pdfExportOptions.GridFitToPageWidth = this.fitToPageWidth.get();
        this.scaleModeOptionsGroup.apply(documentInfo);
        documentInfo.fileName = this.fileName.get();
    };
    gridOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [];
        editors.push(that.fileName);
        that.documentOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        editors.push(that.printHeadersOnEveryPage);
        editors.push(that.fitToPageWidth);
        that.scaleModeOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    gridOptionsGroup.prototype._setScaleModeOptionsVisibility = function (fitToPageWidth) {
        var that = this;
        that.scaleModeOptionsGroup.setEnabled(!fitToPageWidth);
    };
    return gridOptionsGroup;
}(optionsGroup));
exports.gridOptionsGroup = gridOptionsGroup;
var pivotOptionsGroup = (function (_super) {
    __extends(pivotOptionsGroup, _super);
    function pivotOptionsGroup(includeCaption, scaleMode) {
        var _this = _super.call(this) || this;
        _this._initialize(includeCaption, scaleMode);
        return _this;
    }
    pivotOptionsGroup.prototype._initialize = function (includeCaption, scaleMode) {
        var that = this;
        this.documentOptionsGroup = new documentOptionsGroup(includeCaption);
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
        this.printHeadersOnEveryPage = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PrintHeadersOnEveryPage),
            controlCreator: dialogEditorFactory.dxCheckBox
        });
        this.scaleModeOptionsGroup = new scaleModeOptionsGroup(scaleMode);
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
    };
    pivotOptionsGroup.prototype.set = function (documentInfo) {
        this.documentOptionsGroup.set(documentInfo);
        this.printHeadersOnEveryPage.set(documentInfo.pdfExportOptions.PivotPrintHeadersOnEveryPage);
        this.scaleModeOptionsGroup.set(documentInfo);
        this.fileName.set(documentInfo.fileName);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    pivotOptionsGroup.prototype.apply = function (documentInfo) {
        this.documentOptionsGroup.apply(documentInfo);
        documentInfo.pdfExportOptions.PivotPrintHeadersOnEveryPage = this.printHeadersOnEveryPage.get();
        this.scaleModeOptionsGroup.apply(documentInfo);
        documentInfo.fileName = this.fileName.get();
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    pivotOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [];
        editors.push(that.fileName);
        that.documentOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        editors.push(that.printHeadersOnEveryPage);
        that.scaleModeOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    return pivotOptionsGroup;
}(optionsGroup));
exports.pivotOptionsGroup = pivotOptionsGroup;
var chartOptionsGroup = (function (_super) {
    __extends(chartOptionsGroup, _super);
    function chartOptionsGroup(includeCaption) {
        var _this = _super.call(this) || this;
        _this._initialize(includeCaption);
        return _this;
    }
    chartOptionsGroup.prototype._initialize = function (includeCaption) {
        var that = this;
        this.pageLayout = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PageLayout),
            controlCreator: dialogEditorFactory.dxRadioGroup,
            values: [_export_localization_1.pageLayout.portrait, _export_localization_1.pageLayout.landscape, _export_localization_1.pageLayout.auto]
        });
        this.paperKind = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKind),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.paperKind.letter, _export_localization_1.paperKind.legal, _export_localization_1.paperKind.executive, _export_localization_1.paperKind.a5, _export_localization_1.paperKind.a4, _export_localization_1.paperKind.a3]
        });
        this.captionOptionsGroup = new captionOptionsGroup(includeCaption);
        this.sizeMode = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.SizeMode),
            controlCreator: dialogEditorFactory.dxRadioGroup,
            values: [_export_localization_1.sizeMode.none, _export_localization_1.sizeMode.stretch, _export_localization_1.sizeMode.zoom]
        });
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
    };
    chartOptionsGroup.prototype.set = function (documentInfo) {
        this.pageLayout.set(documentInfo.pdfExportOptions.ChartAutomaticPageLayout ? _export_localization_1.pageLayout.auto.value : documentInfo.pdfExportOptions.PageLayout);
        this.paperKind.set(documentInfo.pdfExportOptions.PaperKind);
        this.captionOptionsGroup.set(documentInfo);
        this.sizeMode.set(documentInfo.pdfExportOptions.ChartSizeMode);
        this.fileName.set(documentInfo.fileName);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    chartOptionsGroup.prototype.apply = function (documentInfo) {
        if (this.pageLayout.get() != _export_localization_1.pageLayout.auto.value)
            documentInfo.pdfExportOptions.PageLayout = this.pageLayout.get();
        documentInfo.pdfExportOptions.ChartAutomaticPageLayout = this.pageLayout.get() == _export_localization_1.pageLayout.auto.value;
        documentInfo.pdfExportOptions.PaperKind = this.paperKind.get();
        this.captionOptionsGroup.apply(documentInfo);
        documentInfo.pdfExportOptions.ChartSizeMode = this.sizeMode.get();
        documentInfo.fileName = this.fileName.get();
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    chartOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [this.fileName, this.pageLayout, this.paperKind];
        that.captionOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        editors.push(that.sizeMode);
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    return chartOptionsGroup;
}(optionsGroup));
exports.chartOptionsGroup = chartOptionsGroup;
var mapOptionsGroup = (function (_super) {
    __extends(mapOptionsGroup, _super);
    function mapOptionsGroup(includeCaption) {
        var _this = _super.call(this) || this;
        _this._initialize(includeCaption);
        return _this;
    }
    mapOptionsGroup.prototype._initialize = function (includeCaption) {
        var that = this;
        this.pageLayout = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PageLayout),
            controlCreator: dialogEditorFactory.dxRadioGroup,
            values: [_export_localization_1.pageLayout.portrait, _export_localization_1.pageLayout.landscape, _export_localization_1.pageLayout.auto]
        });
        this.paperKind = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKind),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.paperKind.letter, _export_localization_1.paperKind.legal, _export_localization_1.paperKind.executive, _export_localization_1.paperKind.a5, _export_localization_1.paperKind.a4, _export_localization_1.paperKind.a3]
        });
        this.captionOptionsGroup = new captionOptionsGroup(includeCaption);
        this.sizeMode = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.SizeMode),
            controlCreator: dialogEditorFactory.dxRadioGroup,
            values: [_export_localization_1.sizeMode.none, _export_localization_1.sizeMode.zoom]
        });
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
    };
    mapOptionsGroup.prototype.set = function (documentInfo) {
        this.pageLayout.set(documentInfo.pdfExportOptions.MapAutomaticPageLayout ? _export_localization_1.pageLayout.auto.value : documentInfo.pdfExportOptions.PageLayout);
        this.paperKind.set(documentInfo.pdfExportOptions.PaperKind);
        this.captionOptionsGroup.set(documentInfo);
        this.sizeMode.set(documentInfo.pdfExportOptions.MapSizeMode);
        this.fileName.set(documentInfo.fileName);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    mapOptionsGroup.prototype.apply = function (documentInfo) {
        if (this.pageLayout.get() != _export_localization_1.pageLayout.auto.value)
            documentInfo.pdfExportOptions.PageLayout = this.pageLayout.get();
        documentInfo.pdfExportOptions.MapAutomaticPageLayout = this.pageLayout.get() == _export_localization_1.pageLayout.auto.value;
        documentInfo.pdfExportOptions.PaperKind = this.paperKind.get();
        this.captionOptionsGroup.apply(documentInfo);
        documentInfo.pdfExportOptions.MapSizeMode = this.sizeMode.get();
        documentInfo.fileName = this.fileName.get();
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    mapOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [this.fileName, this.pageLayout, this.paperKind];
        that.captionOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        editors.push(that.sizeMode);
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    return mapOptionsGroup;
}(optionsGroup));
exports.mapOptionsGroup = mapOptionsGroup;
var treemapOptionsGroup = (function (_super) {
    __extends(treemapOptionsGroup, _super);
    function treemapOptionsGroup(includeCaption) {
        var _this = _super.call(this) || this;
        _this._initialize(includeCaption);
        return _this;
    }
    treemapOptionsGroup.prototype._initialize = function (includeCaption) {
        var that = this;
        this.pageLayout = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PageLayout),
            controlCreator: dialogEditorFactory.dxRadioGroup,
            values: [_export_localization_1.pageLayout.portrait, _export_localization_1.pageLayout.landscape, _export_localization_1.pageLayout.auto]
        });
        this.paperKind = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKind),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.paperKind.letter, _export_localization_1.paperKind.legal, _export_localization_1.paperKind.executive, _export_localization_1.paperKind.a5, _export_localization_1.paperKind.a4, _export_localization_1.paperKind.a3]
        });
        this.captionOptionsGroup = new captionOptionsGroup(includeCaption);
        this.sizeMode = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.SizeMode),
            controlCreator: dialogEditorFactory.dxRadioGroup,
            values: [_export_localization_1.sizeMode.none, _export_localization_1.sizeMode.zoom]
        });
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
    };
    treemapOptionsGroup.prototype.set = function (documentInfo) {
        this.pageLayout.set(documentInfo.pdfExportOptions.TreemapAutomaticPageLayout ? _export_localization_1.pageLayout.auto.value : documentInfo.pdfExportOptions.PageLayout);
        this.paperKind.set(documentInfo.pdfExportOptions.PaperKind);
        this.captionOptionsGroup.set(documentInfo);
        this.sizeMode.set(documentInfo.pdfExportOptions.TreemapSizeMode);
        this.fileName.set(documentInfo.fileName);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    treemapOptionsGroup.prototype.apply = function (documentInfo) {
        if (this.pageLayout.get() != _export_localization_1.pageLayout.auto.value)
            documentInfo.pdfExportOptions.PageLayout = this.pageLayout.get();
        documentInfo.pdfExportOptions.TreemapAutomaticPageLayout = this.pageLayout.get() == _export_localization_1.pageLayout.auto.value;
        documentInfo.pdfExportOptions.PaperKind = this.paperKind.get();
        this.captionOptionsGroup.apply(documentInfo);
        documentInfo.pdfExportOptions.TreemapSizeMode = this.sizeMode.get();
        documentInfo.fileName = this.fileName.get();
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    treemapOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [this.fileName, this.pageLayout, this.paperKind];
        that.captionOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        editors.push(that.sizeMode);
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    return treemapOptionsGroup;
}(optionsGroup));
exports.treemapOptionsGroup = treemapOptionsGroup;
var rangeFilterOptionsGroup = (function (_super) {
    __extends(rangeFilterOptionsGroup, _super);
    function rangeFilterOptionsGroup(includeCaption) {
        var _this = _super.call(this) || this;
        _this._initialize(includeCaption);
        return _this;
    }
    rangeFilterOptionsGroup.prototype._initialize = function (includeCaption) {
        var that = this;
        this.pageLayout = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PageLayout),
            controlCreator: dialogEditorFactory.dxRadioGroup,
            values: [_export_localization_1.pageLayout.portrait, _export_localization_1.pageLayout.landscape, _export_localization_1.pageLayout.auto]
        });
        this.paperKind = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.PaperKind),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.paperKind.letter, _export_localization_1.paperKind.legal, _export_localization_1.paperKind.executive, _export_localization_1.paperKind.a5, _export_localization_1.paperKind.a4, _export_localization_1.paperKind.a3]
        });
        this.captionOptionsGroup = new captionOptionsGroup(includeCaption);
        this.sizeMode = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.SizeMode),
            controlCreator: dialogEditorFactory.dxRadioGroup,
            values: [_export_localization_1.sizeMode.none, _export_localization_1.sizeMode.stretch, _export_localization_1.sizeMode.zoom]
        });
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
    };
    rangeFilterOptionsGroup.prototype.set = function (documentInfo) {
        this.pageLayout.set(documentInfo.pdfExportOptions.RangeFilterAutomaticPageLayout ? _export_localization_1.pageLayout.auto.value : documentInfo.pdfExportOptions.PageLayout);
        this.paperKind.set(documentInfo.pdfExportOptions.PaperKind);
        this.captionOptionsGroup.set(documentInfo);
        this.sizeMode.set(documentInfo.pdfExportOptions.RangeFilterSizeMode);
        this.fileName.set(documentInfo.fileName);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    rangeFilterOptionsGroup.prototype.apply = function (documentInfo) {
        if (this.pageLayout.get() != _export_localization_1.pageLayout.auto.value)
            documentInfo.pdfExportOptions.PageLayout = this.pageLayout.get();
        documentInfo.pdfExportOptions.RangeFilterAutomaticPageLayout = this.pageLayout.get() == _export_localization_1.pageLayout.auto.value;
        documentInfo.pdfExportOptions.PaperKind = this.paperKind.get();
        this.captionOptionsGroup.apply(documentInfo);
        documentInfo.pdfExportOptions.RangeFilterSizeMode = this.sizeMode.get();
        documentInfo.fileName = this.fileName.get();
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    rangeFilterOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [this.fileName, this.pageLayout, this.paperKind];
        that.captionOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        editors.push(that.sizeMode);
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    return rangeFilterOptionsGroup;
}(optionsGroup));
exports.rangeFilterOptionsGroup = rangeFilterOptionsGroup;
var pieOptionsGroup = (function (_super) {
    __extends(pieOptionsGroup, _super);
    function pieOptionsGroup(includeCaption, autoArrangeContent, scaleMode) {
        var _this = _super.call(this) || this;
        _this._initialize(includeCaption, autoArrangeContent, scaleMode);
        return _this;
    }
    pieOptionsGroup.prototype._initialize = function (includeCaption, autoArrangeContent, scaleMode) {
        var that = this;
        this.documentOptionsGroup = new documentOptionsGroup(includeCaption);
        this.autoArrangeContent = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.AutoArrangeContent),
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                onValueChanged: function (args) {
                    that._setScaleModeOptionsVisibility(args.component.option('value'));
                }
            }
        });
        this.scaleModeOptionsGroup = new scaleModeOptionsGroup(scaleMode);
        that._setScaleModeOptionsVisibility(autoArrangeContent);
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
    };
    pieOptionsGroup.prototype.set = function (documentInfo) {
        this.documentOptionsGroup.set(documentInfo);
        this.autoArrangeContent.set(documentInfo.pdfExportOptions.PieAutoArrangeContent);
        this.scaleModeOptionsGroup.set(documentInfo);
        this.fileName.set(documentInfo.fileName);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    pieOptionsGroup.prototype.apply = function (documentInfo) {
        this.documentOptionsGroup.apply(documentInfo);
        documentInfo.pdfExportOptions.PieAutoArrangeContent = this.autoArrangeContent.get();
        this.scaleModeOptionsGroup.apply(documentInfo);
        documentInfo.fileName = this.fileName.get();
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    pieOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [];
        editors.push(that.fileName);
        that.documentOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        editors.push(that.autoArrangeContent);
        that.scaleModeOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    pieOptionsGroup.prototype._setScaleModeOptionsVisibility = function (autoArrangeContent) {
        var that = this;
        that.scaleModeOptionsGroup.setEnabled(!autoArrangeContent);
    };
    return pieOptionsGroup;
}(optionsGroup));
exports.pieOptionsGroup = pieOptionsGroup;
var gaugeOptionsGroup = (function (_super) {
    __extends(gaugeOptionsGroup, _super);
    function gaugeOptionsGroup(includeCaption, autoArrangeContent, scaleMode) {
        var _this = _super.call(this) || this;
        _this._initialize(includeCaption, autoArrangeContent, scaleMode);
        return _this;
    }
    gaugeOptionsGroup.prototype._initialize = function (includeCaption, autoArrangeContent, scaleMode) {
        var that = this;
        this.documentOptionsGroup = new documentOptionsGroup(includeCaption);
        this.autoArrangeContent = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.AutoArrangeContent),
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                onValueChanged: function (args) {
                    that._setScaleModeOptionsVisibility(args.component.option('value'));
                }
            }
        });
        this.scaleModeOptionsGroup = new scaleModeOptionsGroup(scaleMode);
        that._setScaleModeOptionsVisibility(autoArrangeContent);
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
    };
    gaugeOptionsGroup.prototype.set = function (documentInfo) {
        this.documentOptionsGroup.set(documentInfo);
        this.autoArrangeContent.set(documentInfo.pdfExportOptions.GaugeAutoArrangeContent);
        this.scaleModeOptionsGroup.set(documentInfo);
        this.fileName.set(documentInfo.fileName);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    gaugeOptionsGroup.prototype.apply = function (documentInfo) {
        this.documentOptionsGroup.apply(documentInfo);
        documentInfo.pdfExportOptions.GaugeAutoArrangeContent = this.autoArrangeContent.get();
        this.scaleModeOptionsGroup.apply(documentInfo);
        documentInfo.fileName = this.fileName.get();
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    gaugeOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [];
        editors.push(that.fileName);
        that.documentOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        editors.push(that.autoArrangeContent);
        that.scaleModeOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    gaugeOptionsGroup.prototype._setScaleModeOptionsVisibility = function (autoArrangeContent) {
        var that = this;
        that.scaleModeOptionsGroup.setEnabled(!autoArrangeContent);
    };
    return gaugeOptionsGroup;
}(optionsGroup));
exports.gaugeOptionsGroup = gaugeOptionsGroup;
var cardOptionsGroup = (function (_super) {
    __extends(cardOptionsGroup, _super);
    function cardOptionsGroup(includeCaption, autoArrangeContent, scaleMode) {
        var _this = _super.call(this) || this;
        _this._initialize(includeCaption, autoArrangeContent, scaleMode);
        return _this;
    }
    cardOptionsGroup.prototype._initialize = function (includeCaption, autoArrangeContent, scaleMode) {
        var that = this;
        this.documentOptionsGroup = new documentOptionsGroup(includeCaption);
        this.autoArrangeContent = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.AutoArrangeContent),
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                onValueChanged: function (args) {
                    that._setScaleModeOptionsVisibility(args.component.option('value'));
                }
            }
        });
        this.scaleModeOptionsGroup = new scaleModeOptionsGroup(scaleMode);
        that._setScaleModeOptionsVisibility(autoArrangeContent);
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.dashboardStateOptionsGroup = new dashboardStateOptionsGroup();
    };
    cardOptionsGroup.prototype.set = function (documentInfo) {
        this.documentOptionsGroup.set(documentInfo);
        this.autoArrangeContent.set(documentInfo.pdfExportOptions.CardAutoArrangeContent);
        this.scaleModeOptionsGroup.set(documentInfo);
        this.fileName.set(documentInfo.fileName);
        this.dashboardStateOptionsGroup.set(documentInfo);
    };
    cardOptionsGroup.prototype.apply = function (documentInfo) {
        this.documentOptionsGroup.apply(documentInfo);
        documentInfo.pdfExportOptions.CardAutoArrangeContent = this.autoArrangeContent.get();
        this.scaleModeOptionsGroup.apply(documentInfo);
        documentInfo.fileName = this.fileName.get();
        this.dashboardStateOptionsGroup.apply(documentInfo);
    };
    cardOptionsGroup.prototype.getEditors = function () {
        var that = this;
        var editors = [];
        editors.push(that.fileName);
        that.documentOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        editors.push(that.autoArrangeContent);
        that.scaleModeOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        that.dashboardStateOptionsGroup.getEditors().forEach(function (editor) {
            editors.push(editor);
        });
        return editors;
    };
    cardOptionsGroup.prototype._setScaleModeOptionsVisibility = function (autoArrangeContent) {
        var that = this;
        that.scaleModeOptionsGroup.setEnabled(!autoArrangeContent);
    };
    return cardOptionsGroup;
}(optionsGroup));
exports.cardOptionsGroup = cardOptionsGroup;
var imageOptionsGroup = (function (_super) {
    __extends(imageOptionsGroup, _super);
    function imageOptionsGroup(showTitle) {
        var _this = _super.call(this) || this;
        _this._initialize(showTitle);
        return _this;
    }
    imageOptionsGroup.prototype._initialize = function (showTitle) {
        var that = this;
        this.imageFormat = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ImageFormat),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.imageFormat.png, _export_localization_1.imageFormat.gif, _export_localization_1.imageFormat.jpg]
        });
        this.showTitle = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ShowTitle),
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                onValueChanged: function (args) {
                    that.title.setEnabled(args.component.option('value'));
                }
            }
        });
        this.title = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.Title),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.exportFilters = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.IncludeExportDashboardState),
            controlCreator: dialogEditorFactory.dxCheckBox,
            largeMargin: true,
            controlOptions: {
                text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExportFilters)
            }
        });
        this.exportParameters = new labeledEditor({
            labelText: " ",
            customText: true,
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExportParameters)
            }
        });
        this.title.setEnabled(showTitle);
        this.resolution = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.Resolution),
            controlCreator: dialogEditorFactory.dxNumberBox
        });
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
    };
    imageOptionsGroup.prototype.set = function (documentInfo) {
        this.showTitle.set(documentInfo.imageExportOptions.ShowTitle);
        this.title.set(documentInfo.imageExportOptions.Title);
        this.exportFilters.set(documentInfo.imageExportOptions.ExportFilters);
        this.exportParameters.set(documentInfo.imageExportOptions.ExportParameters);
        this.imageFormat.set(documentInfo.imageExportOptions.Format);
        this.resolution.set(documentInfo.imageExportOptions.Resolution);
        this.fileName.set(documentInfo.fileName);
    };
    imageOptionsGroup.prototype.apply = function (documentInfo) {
        documentInfo.imageExportOptions.ShowTitle = this.showTitle.get();
        documentInfo.imageExportOptions.Title = this.title.get();
        documentInfo.imageExportOptions.ExportFilters = this.exportFilters.get();
        documentInfo.imageExportOptions.ExportParameters = this.exportParameters.get();
        documentInfo.imageExportOptions.Format = this.imageFormat.get();
        documentInfo.imageExportOptions.Resolution = this.resolution.get();
        documentInfo.fileName = this.fileName.get();
    };
    imageOptionsGroup.prototype.getEditors = function () {
        return [this.fileName, this.showTitle, this.title, this.imageFormat, this.resolution, this.exportFilters, this.exportParameters];
    };
    return imageOptionsGroup;
}(optionsGroup));
exports.imageOptionsGroup = imageOptionsGroup;
var dashboardExcelOptionsGroup = (function (_super) {
    __extends(dashboardExcelOptionsGroup, _super);
    function dashboardExcelOptionsGroup(format) {
        var _this = _super.call(this) || this;
        _this._initialize(format);
        return _this;
    }
    dashboardExcelOptionsGroup.prototype._checkExportFormat = function (format) {
        return format === _export_localization_1.excelFormat.csv.value;
    };
    dashboardExcelOptionsGroup.prototype._initialize = function (format) {
        var that = this;
        this.excelFormat = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExcelFormat),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.excelFormat.xlsx, _export_localization_1.excelFormat.xls],
            controlOptions: {
                onValueChanged: function (args) {
                    var isCsv = that._checkExportFormat(args.component.option('value'));
                    that.dashboardStatePosition.setEnabled(!isCsv && (that.exportFilters.get() || that.exportParameters.get()));
                }
            }
        });
        this.exportFilters = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.IncludeExportDashboardState),
            controlCreator: dialogEditorFactory.dxCheckBox,
            largeMargin: true,
            controlOptions: {
                text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExportFilters),
                onValueChanged: function (args) {
                    that.dashboardStatePosition.setEnabled((that.exportParameters.get() || args.component.option('value')) && !that._checkExportFormat(that.excelFormat.get()));
                }
            }
        });
        this.exportParameters = new labeledEditor({
            labelText: " ",
            customText: true,
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExportParameters),
                onValueChanged: function (args) {
                    that.dashboardStatePosition.setEnabled((that.exportFilters.get() || args.component.option('value')) && !that._checkExportFormat(that.excelFormat.get()));
                }
            }
        });
        this.dashboardStatePosition = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.DashboardStatePosition),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.excelDashboardStatePosition.below, _export_localization_1.excelDashboardStatePosition.separateSheet]
        });
        this.dashboardStatePosition.setEnabled((that.exportParameters.get() || that.exportFilters.get()) && !that._checkExportFormat(format));
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
    };
    dashboardExcelOptionsGroup.prototype.set = function (documentInfo) {
        this.fileName.set(documentInfo.fileName);
        var format = documentInfo.excelExportOptions.Format === _export_options_1.dashboardExportExcelFormat.csv ? _export_options_1.dashboardExportExcelFormat.xlsx : documentInfo.excelExportOptions.Format;
        this.excelFormat.set(format);
        this.exportFilters.set(documentInfo.excelExportOptions.ExportFilters);
        this.exportParameters.set(documentInfo.excelExportOptions.ExportParameters);
        this.dashboardStatePosition.set(documentInfo.excelExportOptions.DashboardStatePosition);
    };
    dashboardExcelOptionsGroup.prototype.apply = function (documentInfo) {
        documentInfo.fileName = this.fileName.get();
        documentInfo.excelExportOptions.Format = this.excelFormat.get();
        documentInfo.excelExportOptions.ExportFilters = this.exportFilters.get();
        documentInfo.excelExportOptions.ExportParameters = this.exportParameters.get();
        documentInfo.excelExportOptions.DashboardStatePosition = this.dashboardStatePosition.get();
    };
    dashboardExcelOptionsGroup.prototype.getEditors = function () {
        return [this.fileName, this.excelFormat, this.exportFilters, this.exportParameters, this.dashboardStatePosition];
    };
    return dashboardExcelOptionsGroup;
}(optionsGroup));
exports.dashboardExcelOptionsGroup = dashboardExcelOptionsGroup;
var excelOptionsGroup = (function (_super) {
    __extends(excelOptionsGroup, _super);
    function excelOptionsGroup(format) {
        var _this = _super.call(this) || this;
        _this._initialize(format);
        return _this;
    }
    excelOptionsGroup.prototype._checkExportFormat = function (format) {
        return format === _export_localization_1.excelFormat.csv.value;
    };
    excelOptionsGroup.prototype._initialize = function (format) {
        var that = this;
        this.excelFormat = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExcelFormat),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.excelFormat.xlsx, _export_localization_1.excelFormat.xls, _export_localization_1.excelFormat.csv],
            controlOptions: {
                onValueChanged: function (args) {
                    var isCsv = that._checkExportFormat(args.component.option('value'));
                    that.separator.setEnabled(isCsv);
                    that.dashboardStatePosition.setEnabled(!isCsv && (that.exportFilters.get() || that.exportParameters.get()));
                }
            }
        });
        this.separator = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.CsvValueSeparator),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.separator.setEnabled(that._checkExportFormat(format));
        this.exportFilters = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.IncludeExportDashboardState),
            controlCreator: dialogEditorFactory.dxCheckBox,
            largeMargin: true,
            controlOptions: {
                text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExportFilters),
                onValueChanged: function (args) {
                    that.dashboardStatePosition.setEnabled((that.exportParameters.get() || args.component.option('value')) && !that._checkExportFormat(that.excelFormat.get()));
                }
            }
        });
        this.exportParameters = new labeledEditor({
            labelText: " ",
            customText: true,
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExportParameters),
                onValueChanged: function (args) {
                    that.dashboardStatePosition.setEnabled((that.exportFilters.get() || args.component.option('value')) && !that._checkExportFormat(that.excelFormat.get()));
                }
            }
        });
        this.dashboardStatePosition = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.DashboardStatePosition),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.excelDashboardStatePosition.below, _export_localization_1.excelDashboardStatePosition.separateSheet]
        });
        this.dashboardStatePosition.setEnabled((that.exportParameters.get() || that.exportFilters.get()) && !that._checkExportFormat(format));
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
    };
    excelOptionsGroup.prototype.set = function (documentInfo) {
        this.fileName.set(documentInfo.fileName);
        this.excelFormat.set(documentInfo.excelExportOptions.Format);
        this.separator.set(documentInfo.excelExportOptions.CsvValueSeparator);
        this.exportFilters.set(documentInfo.excelExportOptions.ExportFilters);
        this.exportParameters.set(documentInfo.excelExportOptions.ExportParameters);
        this.dashboardStatePosition.set(documentInfo.excelExportOptions.DashboardStatePosition);
    };
    excelOptionsGroup.prototype.apply = function (documentInfo) {
        documentInfo.fileName = this.fileName.get();
        documentInfo.excelExportOptions.Format = this.excelFormat.get();
        documentInfo.excelExportOptions.CsvValueSeparator = this.separator.get();
        documentInfo.excelExportOptions.ExportFilters = this.exportFilters.get();
        documentInfo.excelExportOptions.ExportParameters = this.exportParameters.get();
        documentInfo.excelExportOptions.DashboardStatePosition = this.dashboardStatePosition.get();
    };
    excelOptionsGroup.prototype.getEditors = function () {
        return [this.fileName, this.excelFormat, this.separator, this.exportFilters, this.exportParameters, this.dashboardStatePosition];
    };
    return excelOptionsGroup;
}(optionsGroup));
exports.excelOptionsGroup = excelOptionsGroup;
var simplyImageOptionsGroup = (function (_super) {
    __extends(simplyImageOptionsGroup, _super);
    function simplyImageOptionsGroup(showTitle) {
        var _this = _super.call(this) || this;
        _this._initialize(showTitle);
        return _this;
    }
    simplyImageOptionsGroup.prototype._initialize = function (showTitle) {
        var that = this;
        this.imageFormat = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ImageFormat),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.imageFormat.png, _export_localization_1.imageFormat.gif, _export_localization_1.imageFormat.jpg]
        });
        this.showTitle = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ShowTitle),
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                onValueChanged: function (args) {
                    that.title.setEnabled(args.component.option('value'));
                }
            }
        });
        this.title = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.Title),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.title.setEnabled(showTitle);
        this.resolution = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.Resolution),
            controlCreator: dialogEditorFactory.dxNumberBox
        });
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
    };
    simplyImageOptionsGroup.prototype.set = function (documentInfo) {
        this.showTitle.set(documentInfo.imageExportOptions.ShowTitle);
        this.title.set(documentInfo.imageExportOptions.Title);
        this.imageFormat.set(documentInfo.imageExportOptions.Format);
        this.resolution.set(documentInfo.imageExportOptions.Resolution);
        this.fileName.set(documentInfo.fileName);
    };
    simplyImageOptionsGroup.prototype.apply = function (documentInfo) {
        documentInfo.imageExportOptions.ShowTitle = this.showTitle.get();
        documentInfo.imageExportOptions.Title = this.title.get();
        documentInfo.imageExportOptions.Format = this.imageFormat.get();
        documentInfo.imageExportOptions.Resolution = this.resolution.get();
        documentInfo.fileName = this.fileName.get();
    };
    simplyImageOptionsGroup.prototype.getEditors = function () {
        return [this.fileName, this.showTitle, this.title, this.imageFormat, this.resolution];
    };
    return simplyImageOptionsGroup;
}(optionsGroup));
exports.simplyImageOptionsGroup = simplyImageOptionsGroup;
var dashboardImageOptionsGroup = (function (_super) {
    __extends(dashboardImageOptionsGroup, _super);
    function dashboardImageOptionsGroup(showTitle) {
        var _this = _super.call(this) || this;
        _this._initialize(showTitle);
        return _this;
    }
    dashboardImageOptionsGroup.prototype._initialize = function (showTitle) {
        var that = this;
        this.imageFormat = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ImageFormat),
            controlCreator: dialogEditorFactory.dxSelectBox,
            values: [_export_localization_1.imageFormat.png, _export_localization_1.imageFormat.gif, _export_localization_1.imageFormat.jpg]
        });
        this.showTitle = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ShowTitle),
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                onValueChanged: function (args) {
                    that.title.setEnabled(args.component.option('value'));
                }
            }
        });
        this.title = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.Title),
            controlCreator: dialogEditorFactory.dxTextBox
        });
        this.exportFilters = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.IncludeExportDashboardState),
            controlCreator: dialogEditorFactory.dxCheckBox,
            largeMargin: true,
            controlOptions: {
                text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExportFilters)
            }
        });
        this.exportParameters = new labeledEditor({
            labelText: " ",
            customText: true,
            controlCreator: dialogEditorFactory.dxCheckBox,
            controlOptions: {
                text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ExportParameters)
            }
        });
        this.title.setEnabled(showTitle);
        this.resolution = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.Resolution),
            controlCreator: dialogEditorFactory.dxNumberBox
        });
        this.fileName = new labeledEditor({
            labelText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.FileName),
            controlCreator: dialogEditorFactory.dxTextBox
        });
    };
    dashboardImageOptionsGroup.prototype.set = function (documentInfo) {
        this.showTitle.set(documentInfo.imageExportOptions.ShowTitle);
        this.title.set(documentInfo.imageExportOptions.Title);
        this.exportFilters.set(documentInfo.imageExportOptions.ExportFilters);
        this.exportParameters.set(documentInfo.imageExportOptions.ExportParameters);
        this.imageFormat.set(documentInfo.imageExportOptions.Format);
        this.resolution.set(documentInfo.imageExportOptions.Resolution);
        this.fileName.set(documentInfo.fileName);
    };
    dashboardImageOptionsGroup.prototype.apply = function (documentInfo) {
        documentInfo.imageExportOptions.ShowTitle = this.showTitle.get();
        documentInfo.imageExportOptions.Title = this.title.get();
        documentInfo.imageExportOptions.ExportFilters = this.exportFilters.get();
        documentInfo.imageExportOptions.ExportParameters = this.exportParameters.get();
        documentInfo.imageExportOptions.Format = this.imageFormat.get();
        documentInfo.imageExportOptions.Resolution = this.resolution.get();
        documentInfo.fileName = this.fileName.get();
    };
    dashboardImageOptionsGroup.prototype.getEditors = function () {
        return [this.fileName, this.showTitle, this.title, this.imageFormat, this.resolution, this.exportFilters, this.exportParameters];
    };
    return dashboardImageOptionsGroup;
}(optionsGroup));
exports.dashboardImageOptionsGroup = dashboardImageOptionsGroup;
