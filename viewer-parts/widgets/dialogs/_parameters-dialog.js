/**
* DevExpress Dashboard (_parameters-dialog.js)
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
var _localizer_1 = require("../../../data/_localizer");
var _localization_ids_1 = require("../../../data/_localization-ids");
var _dialog_form_1 = require("./_dialog-form");
var _dialog_form_2 = require("./_dialog-form");
require("devextreme/ui/check_box");
var data_source_1 = require("devextreme/data/data_source");
var tag_box_1 = require("devextreme/ui/tag_box");
var select_box_1 = require("devextreme/ui/select_box");
var data_grid_1 = require("devextreme/ui/data_grid");
var text_box_1 = require("devextreme/ui/text_box");
var check_box_1 = require("devextreme/ui/check_box");
var number_box_1 = require("devextreme/ui/number_box");
var date_box_1 = require("devextreme/ui/date_box");
var _dashboard_viewer_constants_1 = require("../../viewer/_dashboard-viewer-constants");
var _dashboard_layout_mode_helper_1 = require("../../_dashboard-layout-mode-helper");
var _utils_1 = require("../../../data/_utils");
var $ = require("jquery");
var PARAMETERDIALOG_GRID_ROW_HEIGHT = 34;
var dialogClasses = {
    allowNullCheckBox: 'dx-parameter-allownull-checkbox',
    allowNullCheckBoxSize: 'dx-datagrid-checkbox-size',
    valueEditor: 'dx-parameter-value-editor',
    multiselectValuePart: 'dx-dashboard-dialog-parameters-tag',
    theme: 'dx-dashboard-theme'
};
exports.parameterTypes = {
    string: 'String',
    int: 'Int',
    float: 'Float',
    bool: 'Bool',
    dateTime: 'DateTime',
    selector: 'Selector',
    multiselector: 'Multiselector',
    guid: 'Guid'
};
var parametersDialog = (function () {
    function parametersDialog(options) {
        this.valueChanged = $.Callbacks();
        this.options = options;
        if (this.options.getParametersCollection) {
            this.getParametersCollection = this.options.getParametersCollection;
        }
        if (this.options.submitParameters) {
            this.submitParameters = this.options.submitParameters;
        }
        this._initialize();
    }
    parametersDialog.prototype._initialize = function () {
        var _this = this;
        var that = this, options = that.options, numberOfParameters = that.getParametersCollection().getVisibleParameters().length, scroll = numberOfParameters > 8, dataGridActualHeight = (numberOfParameters + 1) * PARAMETERDIALOG_GRID_ROW_HEIGHT, allowNullColumn = that.allowNullColumn(), submitParameters = that.submitParameters, parameterEntities = [];
        that.dialogForm = new _dialog_form_1.dialogForm({
            title: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ParametersFormCaption),
            fullScreenMode: options.fullScreenMode,
            dialogContainer: options.parametersDialogContainer,
            width: allowNullColumn ? _dialog_form_1.dialogSizes.width : _dialog_form_1.dialogSizes.minWidth,
            height: scroll ? _dialog_form_1.dialogSizes.height : dataGridActualHeight + _dialog_form_1.dialogSizes.elementsHeight,
            allowScrolling: false,
            deferredRendering: false,
            onShowing: options.onShowing,
            onShown: options.onShown,
            onHidden: options.onHidden,
            buttons: [{
                    name: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonReset), func: function () { return that.resetParameterValues(); }
                }, {
                    name: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonSubmit), hide: true, func: function () { return that.submitParameterValues(); }, isDefault: true
                }, {
                    name: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonCancel), hide: true, func: function () { }
                }],
            renderContent: function (controlCreationCallbacks) {
                var parametersForm = document.createElement('div');
                parametersForm.classList.add(_dialog_form_2.dialogClasses.form);
                _this._dataGrid = that._generateContent(parametersForm, controlCreationCallbacks);
                return parametersForm;
            },
            disposeContent: function () {
                _this._disposeGrid();
            },
            setActualState: function () {
                that.setActualState();
            }
        });
    };
    parametersDialog.prototype._disposeGrid = function () {
        if (this._dataGrid) {
            this._dataGrid.option('dataSource').forEach(function (entry) { return entry.dispose(); });
            this._dataGrid.dispose();
        }
    };
    parametersDialog.prototype.appendNullGridColumn = function (gridColumns) {
        if (this.allowNullColumn())
            gridColumns.push(this.createNullColumn());
    };
    parametersDialog.prototype.allowNullColumn = function () {
        var allowNullValues;
        this.getParametersCollection().getVisibleParameters().forEach(function (parameter) {
            if (parameter.getAllowNull())
                allowNullValues = true;
        });
        return allowNullValues;
    };
    parametersDialog.prototype.createNullColumn = function () {
        return {
            dataField: 'divAllowNull',
            caption: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ParametersFormAllowNullColumnCaption),
            width: '20%',
            alignment: 'center',
            cellTemplate: function (container, options) {
                _utils_1.$unwrap(container).appendChild(_utils_1.$unwrap(options.value));
            }
        };
    };
    parametersDialog.prototype.createGridColumns = function () {
        var allowNullColumn = this.allowNullColumn();
        var gridColumns = [{
                dataField: 'description',
                caption: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ParametersFormNameColumnCaption),
                dataType: 'string',
                width: allowNullColumn ? '40%' : '50%'
            }, {
                dataField: 'divValueEditor',
                caption: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ParametersFormValueColumnCaption),
                width: allowNullColumn ? '40%' : '50%',
                cssClass: 'dx-parameter-value-editor',
                showEditorAlways: true,
                editCellTemplate: function (cellElement, cellInfo) {
                    _utils_1.$unwrap(cellElement).appendChild(_utils_1.$unwrap(cellInfo.data.divValueEditor));
                }
            }];
        this.appendNullGridColumn(gridColumns);
        return gridColumns;
    };
    parametersDialog.prototype._generateContent = function (element, controlCreationCallbacks, subscribeValueChanged) {
        if (subscribeValueChanged === void 0) { subscribeValueChanged = false; }
        var that = this, parameterEntities = that.getParametersCollection().getVisibleParameters().map(function (parameter) {
            var parameterEntity = that._getParameterEntity(parameter, controlCreationCallbacks);
            if (subscribeValueChanged) {
                parameterEntity.valueChanged.add(function (e) { return that.valueChanged.fire(); });
            }
            return parameterEntity;
        });
        this.submitParameterValues = function () {
            that.submitParameters(parameterEntities.map(function (parameterEntity) { return parameterEntity.wrapParameter(); }));
        };
        this.resetParameterValues = function () {
            var parametersCollection = that.getParametersCollection();
            parameterEntities.forEach(function (parameterEntity) {
                parameterEntity.setValue(parametersCollection.getParameterDefaultValue(parameterEntity.name));
            });
        };
        this.setActualState = function () {
            var parametersCollection = that.getParametersCollection();
            parameterEntities.forEach(function (parameterEntity) {
                var parameter = parametersCollection.getParameterByName(parameterEntity.name);
                if (parameter) {
                    var lookUpValues = parameter.getLookUpValues();
                    if (lookUpValues !== null)
                        parameterEntity.setLookUpValues(lookUpValues);
                    parameterEntity.setValue(parameter.getValue());
                }
            });
        };
        return new data_grid_1.default(element, {
            dataSource: parameterEntities,
            columns: that.createGridColumns(),
            width: '100%',
            height: '100%',
            showColumnLines: true,
            showRowLines: true,
            allowColumnResizing: true,
            loadPanel: {
                enabled: false
            },
            paging: { enabled: false },
            sorting: { mode: 'none' },
            scrolling: {
                mode: 'standard',
                useNative: _dashboard_viewer_constants_1.USE_NATIVE_SCROLLING
            }
        });
    };
    parametersDialog.prototype.generateContent = function (element, disposeCallback) {
        var _this = this;
        var controlCreationCallbacks = $.Callbacks();
        this._disposeGrid();
        this._dataGrid = this._generateContent(element, controlCreationCallbacks, true);
        var prepareActualValues = function (controlCreationCallbacks) {
            controlCreationCallbacks.fire();
            _this.setActualState();
        };
        this._dataGrid.option("onContentReady", function (e) {
            prepareActualValues(controlCreationCallbacks);
        });
        prepareActualValues(controlCreationCallbacks);
        return {
            grid: this._dataGrid,
            submitParameterValues: function () { return _this.submitParameterValues(); },
            resetParameterValues: function () { return _this.resetParameterValues(); },
            valueChanged: this.valueChanged,
            dispose: function () {
                _this.dispose();
                disposeCallback && disposeCallback();
            }
        };
    };
    parametersDialog.prototype.show = function () {
        this.dialogForm.showDialog();
    };
    parametersDialog.prototype.hide = function () {
        this.dialogForm.hideDialog();
    };
    parametersDialog.prototype.dispose = function () {
        this.dialogForm && this.dialogForm.dispose();
        this._disposeGrid();
    };
    parametersDialog.prototype._getParameterEntity = function (parameter, controlCreationCallbacks) {
        var _this = this;
        var that = this, entityOptions = {
            name: parameter.getName(),
            description: parameter.getDescription(),
            defaultValue: parameter.getDefaultValue(),
            controlCreationCallbacks: controlCreationCallbacks,
            allowNull: parameter.getAllowNull(),
            allowMultiselect: parameter.getAllowMultiselect(),
            type: parameter.getType(),
            value: parameter.getValue()
        };
        if (parameter.getLookUpValues() !== null) {
            if (entityOptions.allowMultiselect) {
                return new ParameterEntity(__assign({}, entityOptions, { valueName: 'value', createControl: function (element) { return new tag_box_1.default(element, {
                        showDropDownButton: true,
                        showSelectionControls: true,
                        selectAllMode: 'allPages',
                        itemTemplate: function (item) { return item.displayValue; },
                        multiline: false,
                        tagTemplate: function (data, $element) {
                            var element = _utils_1.$unwrap($element);
                            if (element) {
                                element.innerText = $(element).is(':first-child') ? data.displayValue : ', ' + data.displayValue;
                                element.classList.add(dialogClasses.multiselectValuePart);
                                return element;
                            }
                            return undefined;
                        },
                        searchEnabled: true,
                        displayExpr: 'displayValue',
                        valueExpr: 'value',
                        searchExpr: 'displayValue',
                        placeholder: _localizer_1.localizer.getString(_localization_ids_1.localizationId.ParametersSelectorText),
                        dropDownOptions: {
                            container: _this.options.parametersDialogContainer
                        }
                    }); } }));
            }
            else {
                return new ParameterEntity(__assign({}, entityOptions, { valueName: 'value', createControl: function (element) { return new select_box_1.default(element, {
                        itemTemplate: function (item) { return item.displayValue; },
                        searchEnabled: true,
                        displayExpr: 'displayValue',
                        valueExpr: 'value',
                        searchExpr: 'displayValue',
                        placeholder: _localizer_1.localizer.getString(_localization_ids_1.localizationId.ParametersSelectorText),
                        dropDownOptions: {
                            container: _this.options.parametersDialogContainer
                        }
                    }); } }));
            }
        }
        else {
            switch (parameter.getType()) {
                case exports.parameterTypes.string:
                    return new ParameterEntity(__assign({}, entityOptions, { valueName: 'value', createControl: function (element) { return new text_box_1.default(element); } }));
                case exports.parameterTypes.int:
                    return new ParameterEntity(__assign({}, entityOptions, { valueName: 'value', createControl: function (element) { return new number_box_1.default(element, {
                            showSpinButtons: true,
                            step: 1
                        }); } }));
                case exports.parameterTypes.float:
                    return new ParameterEntity(__assign({}, entityOptions, { valueName: 'value', createControl: function (element) { return new number_box_1.default(element, {
                            showSpinButtons: true,
                            step: 0.1
                        }); } }));
                case exports.parameterTypes.bool:
                    return new ParameterEntity(__assign({}, entityOptions, { valueName: 'value', createControl: function (element) { return new check_box_1.default(element, {
                            width: "100%"
                        }); } }));
                case exports.parameterTypes.dateTime:
                    return new ParameterEntity(__assign({}, entityOptions, { valueName: 'value', createControl: function (element) { return new date_box_1.default(element, {
                            pickerType: _dashboard_layout_mode_helper_1.DashboardLayoutModeHelper.isTouch ? 'rollers' : 'calendar',
                            width: '100%',
                            applyButtonText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonOK),
                            cancelButtonText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonCancel),
                            placeholder: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.SelectDate),
                            dropDownOptions: {
                                container: _this.options.parametersDialogContainer
                            },
                            onPopupInitialized: function (e) {
                                var popup = e.popup;
                                if (popup) {
                                    var todayBtn = {
                                        widget: "dxButton", toolbar: "bottom", location: "center",
                                        options: {
                                            text: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.ParametersFormCalendarTodayButton),
                                            onClick: function () {
                                                var dateBox = e.component;
                                                if (dateBox) {
                                                    var todate = new Date();
                                                    todate.setHours(0, 0, 0, 0);
                                                    dateBox.option("value", todate);
                                                }
                                            }
                                        }
                                    };
                                    if (_dashboard_layout_mode_helper_1.DashboardLayoutModeHelper.isTouch) {
                                        popup.option('toolbarItems').push(todayBtn);
                                    }
                                    else {
                                        popup.option("toolbarItems", [todayBtn]);
                                    }
                                }
                            }
                        }); } }));
                case exports.parameterTypes.guid:
                    return new ParameterEntity(__assign({}, entityOptions, { valueName: 'value', createControl: function (element) { return new text_box_1.default(element, {
                            mask: 'hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhhh',
                            maskRules: { 'h': /[0-9A-Fa-f]/ },
                            useMaskedValue: true
                        }); } }));
            }
        }
    };
    return parametersDialog;
}());
exports.parametersDialog = parametersDialog;
var ParameterEntity = (function () {
    function ParameterEntity(options) {
        this.lookUpValues = [];
        this.valueChanged = $.Callbacks();
        this.name = options.name;
        this.type = options.type;
        this.description = options.description ? options.description : this.name;
        this.defaultValue = options.defaultValue;
        this.value = options.value;
        this.lookUpValues = [];
        this.allowNull = options.allowNull;
        this.allowMultiselect = options.allowMultiselect;
        this.createControl = options.createControl;
        this.valueName = options.valueName;
        this.controlCreationCallbacks = options.controlCreationCallbacks;
        this.divValueEditor = document.createElement('div');
        this.divValueEditor.classList.add(dialogClasses.valueEditor);
        this.divValueEditor.classList.add(dialogClasses.valueEditor + "-" + this.type.toLowerCase());
        this.divValueEditor.classList.add(dialogClasses.allowNullCheckBoxSize);
        if (this.allowNull) {
            this.divAllowNull = document.createElement('div');
            this.divAllowNull.classList.add(dialogClasses.allowNullCheckBox);
            this.divAllowNull.classList.add(dialogClasses.allowNullCheckBoxSize);
        }
        else {
            this.divAllowNull = document.createElement('center');
            this.divAllowNull.innerText = 'n/a';
        }
        this._addControl();
    }
    ParameterEntity.prototype.dispose = function () {
        if (this.allowNullControl) {
            this.allowNullControl.dispose();
        }
        if (this.control) {
            this.control.dispose();
        }
    };
    ParameterEntity.prototype.getValue = function () {
        if (this.allowNull && this.allowNullControl.option('value') === true)
            return null;
        else
            return this.control.option(this.valueName);
    };
    ParameterEntity.prototype.setValue = function (value) {
        if (this.allowMultiselect) {
            if ((value === null) || (value === undefined)) {
                value = [];
            }
            else if (!Array.isArray(value)) {
                value = [{ displayValue: value, value: value }];
            }
        }
        this.control.option("value", value);
    };
    ParameterEntity.prototype.setLookUpValues = function (values) {
        var newValues = [];
        values.forEach(function (value) {
            newValues.push({
                value: value.getValue(),
                displayValue: value.getDisplayText()
            });
        });
        this.lookUpValues = newValues;
        this.control.option("dataSource", new data_source_1.default(newValues));
    };
    ParameterEntity.prototype.wrapParameter = function () {
        return {
            Name: this.name,
            Value: this.getValue()
        };
    };
    ParameterEntity.prototype._addControl = function () {
        var _this = this;
        this.controlCreationCallbacks.add(function (component) {
            if (!_this.control) {
                _this.control = _this.createControl(_this.divValueEditor);
                _this.control.option("onValueChanged", _this.allowNull ?
                    function (e) {
                        var passNull = _this.allowNullControl.option('value'), value = _this.control.option('value');
                        if (_this.allowMultiselect) {
                            if (passNull === true && value.length > 0)
                                _this.allowNullControl.option('value', false);
                            else if (passNull === false && value.length === 0)
                                _this.allowNullControl.option('value', true);
                        }
                        else if (passNull === false && value === null)
                            _this.allowNullControl.option('value', true);
                        else if (passNull === true && value !== null)
                            _this.allowNullControl.option('value', false);
                        _this.valueChanged.fire();
                    } :
                    function (e) {
                        _this.valueChanged.fire();
                    });
                if (_this.allowNull) {
                    _this.allowNullControl = new check_box_1.default(_this.divAllowNull, {
                        value: _this.value === null,
                        onValueChanged: function (e) {
                            var value = _this.control.option('value');
                            if (e.value) {
                                _this.value = value;
                                if (_this.allowMultiselect && value !== [])
                                    _this.control.option('value', []);
                                else if (value !== null)
                                    _this.control.option('value', null);
                            }
                            else if (value === null || value.length === 0)
                                _this.control.option('value', _this.value);
                        }
                    });
                }
            }
        });
    };
    return ParameterEntity;
}());
exports.ParameterEntity = ParameterEntity;
