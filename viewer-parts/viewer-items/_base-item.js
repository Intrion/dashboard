﻿/**
* DevExpress Dashboard (_base-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _caption_toolbar_css_classes_1 = require("../widgets/caption-toolbar/_caption-toolbar-css-classes");
var _dashboard_layout_mode_helper_1 = require("../_dashboard-layout-mode-helper");
var _static_toolbar_1 = require("../widgets/caption-toolbar/_static-toolbar");
var _clickable_floating_toolbar_1 = require("../widgets/caption-toolbar/_clickable-floating-toolbar");
var _hovered_toolbar_1 = require("../widgets/caption-toolbar/_hovered-toolbar");
var _hovered_floating_toolbar_1 = require("../widgets/caption-toolbar/_hovered-floating-toolbar");
var _minimized_clickable_toolbar_1 = require("../widgets/caption-toolbar/_minimized-clickable-toolbar");
var _minimized_hovered_toolbar_1 = require("../widgets/caption-toolbar/_minimized-hovered-toolbar");
var _hidden_caption_toolbar_1 = require("../widgets/caption-toolbar/_hidden-caption-toolbar");
var _item_loading_1 = require("./elements/_item-loading");
var _interactivity_controller_1 = require("./_interactivity-controller");
var _common_1 = require("../../data/_common");
var _factory_1 = require("../../data/_factory");
var _utils_1 = require("../../data/_utils");
var _utils_layout_1 = require("../layout/_utils.layout");
var _dashboard_viewer_constants_1 = require("../viewer/_dashboard-viewer-constants");
var caption_toolbar_options_1 = require("../widgets/caption-toolbar/caption-toolbar-options");
var _localizer_1 = require("../../data/_localizer");
var _localization_ids_1 = require("../../data/_localization-ids");
var _formatter_1 = require("../../data/_formatter");
var $ = require("jquery");
var _default_1 = require("../../data/localization/_default");
var _render_helper_1 = require("../widgets/_render-helper");
var _z_index_1 = require("../../data/_z-index");
exports.createDefaultToolbar = function (viewerItem, container, controlContainer, popupContainer, viewOptions) {
    if (viewOptions.hiddenToolbar) {
        return new _hidden_caption_toolbar_1.HiddenCaptionToolbar();
    }
    else if (_dashboard_layout_mode_helper_1.DashboardLayoutModeHelper.isTouch) {
        if (viewOptions.hasCaption) {
            return new _static_toolbar_1.StaticCaptionToolbar(container, controlContainer, popupContainer, viewOptions.encodeHtml, _caption_toolbar_css_classes_1.cssClasses.caption, viewOptions.captionToolbarSeparatorRequired, false);
        }
        else {
            if (viewOptions.allowPreview) {
                return new _minimized_clickable_toolbar_1.MinimizedClickableCaptionToolbar(container, controlContainer, popupContainer, viewOptions.encodeHtml, viewOptions.isBottomFloatingToolbarPosition);
            }
            else {
                return new _clickable_floating_toolbar_1.ClickableFloatingCaptionToolbar(container, controlContainer, popupContainer, viewOptions.encodeHtml, viewOptions.isBottomFloatingToolbarPosition);
            }
        }
    }
    else {
        if (viewOptions.hasCaption) {
            return new _hovered_toolbar_1.HoveredDashboardCaptionToolbar(container, controlContainer, popupContainer, viewOptions.encodeHtml, viewOptions.captionToolbarSeparatorRequired);
        }
        else {
            if (viewOptions.allowPreview) {
                return new _minimized_hovered_toolbar_1.MinimizedHoveredCaptionToolbar(container, controlContainer, popupContainer, viewOptions.encodeHtml, viewOptions.isBottomFloatingToolbarPosition);
            }
            else {
                return new _hovered_floating_toolbar_1.HoveredFloatingCaptionToolbar(container, controlContainer, popupContainer, viewOptions.encodeHtml, viewOptions.isBottomFloatingToolbarPosition);
            }
        }
    }
};
function getControlContainer(element) {
    return $(element).closest(".dx-dashboard-widget-container")[0];
}
exports.getControlContainer = getControlContainer;
var baseItem = (function () {
    function baseItem($container, options) {
        this._lockCount = 0;
        this._isFixedHeight = false;
        this.customHoverEnabled = false;
        this._allowMultiselection = false;
        this.dateToString = function (date) { return date.toJSON(); };
        this.selected = $.Callbacks();
        this.clearMasterFilter = $.Callbacks();
        this.drillUp = $.Callbacks();
        this.contentElementSelection = $.Callbacks();
        this.expandValue = $.Callbacks();
        this.clientStateUpdate = $.Callbacks();
        this.dataRequest = $.Callbacks();
        this.itemClick = $.Callbacks();
        this.itemHover = $.Callbacks();
        this.itemSelectionChanged = $.Callbacks();
        this.itemWidgetCreated = $.Callbacks();
        this.itemWidgetUpdating = $.Callbacks();
        this.itemWidgetUpdated = $.Callbacks();
        this.itemCaptionToolbarUpdated = $.Callbacks();
        this.constraintsUpdated = $.Callbacks();
        this.customTargetAxes = [];
        this.customDefaultSelectedValues = [];
        this.itemLoadingElement = new _item_loading_1.ItemLoadingElement();
        this.visualMode = 'full';
        this._hasWidget = false;
        this.deferredToolbarRenderingPromise = undefined;
        this.createCaptionToolbar = exports.createDefaultToolbar;
        this._initializeData(options);
        this.container = $container;
        this.controlContainer = options.controlContainer;
        this._boundaryContainer = options.boundaryContainer;
        this.interactivityController = new _interactivity_controller_1.interactivityController($.proxy(this.getSelectedTuples, this));
        this.interactivityController.selectionChanged.add($.proxy(this._onSelectionChanged, this));
        this.customSelectionMode = _interactivity_controller_1.dashboardSelectionMode.none;
    }
    Object.defineProperty(baseItem.prototype, "hasWidget", {
        get: function () {
            return this._hasWidget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(baseItem.prototype, "_captionToolbarSeparatorRequired", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(baseItem.prototype, "_isBottomFloatingToolbarPosition", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(baseItem.prototype, "_allowPreview", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    baseItem.prototype._initializeData = function (newOptions) {
        if (!this.options) {
            this.options = newOptions;
        }
        else {
            this.options = {
                Name: newOptions.Name,
                Type: newOptions.Type,
                ParentContainer: newOptions.ParentContainer,
                ContentType: newOptions.ContentType,
                SelectedValues: newOptions.SelectedValues,
                ViewModel: newOptions.ViewModel || this.options.ViewModel,
                ActionModel: newOptions.ActionModel || this.options.ActionModel,
                CaptionViewModel: newOptions.CaptionViewModel || this.options.CaptionViewModel,
                ConditionalFormattingModel: newOptions.ConditionalFormattingModel || this.options.ConditionalFormattingModel,
                Parameters: newOptions.Parameters,
                DrillDownValues: newOptions.DrillDownValues,
                DrillDownUniqueValues: newOptions.DrillDownUniqueValues,
                AxisNames: newOptions.AxisNames,
                DimensionIds: newOptions.DimensionIds,
                multiData: newOptions.multiData,
                encodeHtml: newOptions.encodeHtml !== undefined ? newOptions.encodeHtml : this.options.encodeHtml,
                allowExport: newOptions.allowExport !== undefined ? newOptions.allowExport : this.options.allowExport,
                showExportDialog: newOptions.showExportDialog !== undefined ? newOptions.showExportDialog : this.options.showExportDialog,
                isDataReduced: !!newOptions.ItemData ? newOptions.ItemData.Reduced : this.options.isDataReduced,
                useNeutralFilterMode: newOptions.useNeutralFilterMode !== undefined ? newOptions.useNeutralFilterMode : this.options.useNeutralFilterMode,
                FullViewport: newOptions.FullViewport,
                LimitDataState: newOptions.LimitDataState
            };
        }
        if (!this.dataController || (newOptions.ContentType != _common_1.contentType.actionModel)) {
            var drillDownState = {}, axisPointHash = this.dataController ? this.dataController.getAxisPointsHash() : undefined;
            drillDownState[this._getDrillDownAxisName()] = this.options.DrillDownUniqueValues;
            this.dataController = _factory_1.defaultDataControllerFactory.createDataController(this.options.Type, {
                multiData: this.options.multiData,
                viewModel: this.options.ViewModel,
                cfModel: this.options.ConditionalFormattingModel,
                useNeutralFilterMode: this.options.useNeutralFilterMode,
                drillDownState: drillDownState,
                axisPointHash: axisPointHash
            });
            if (this.dataController) {
                this.dataController.update(this.options.SelectedValues, this._isEncodeHtml());
            }
        }
        this.customSelectedTuples = [];
    };
    baseItem.prototype.initialDataRequest = function () {
        if (this.hasWidget) {
            this.initialDataRequestUnsafe();
        }
    };
    baseItem.prototype.initialDataRequestUnsafe = function () {
    };
    Object.defineProperty(baseItem.prototype, "allowMultiselection", {
        get: function () {
            return this._allowMultiselection;
        },
        set: function (value) {
            this._allowMultiselection = value;
        },
        enumerable: true,
        configurable: true
    });
    baseItem.prototype.forceUpdateInteractivity = function () {
        this.updateCaptionToolbar();
        this.updateInteractivityOptions();
    };
    baseItem.prototype.clearSelection = function () {
        if (this.hasWidget) {
            this._clearSelectionUnsafe();
        }
        else {
            this._clearSelectionBase();
        }
    };
    baseItem.prototype._clearSelectionUnsafe = function () {
        this._clearSelectionBase();
    };
    baseItem.prototype._clearSelectionBase = function () {
    };
    baseItem.prototype.performClearSelection = function () {
        this._setSelectedValues(null);
        this.clearSelection();
    };
    baseItem.prototype.selectTuple = function (tuple, state) {
        if (this.hasWidget) {
            this.selectTupleUnsafe(tuple, state);
        }
    };
    baseItem.prototype.selectTupleUnsafe = function (tuple, state) {
    };
    baseItem.prototype.setSelection = function (values) {
        if (this.hasWidget) {
            this._setSelectionUnsafe(values);
        }
        else {
            this.setSelectionBase(values);
        }
    };
    baseItem.prototype._setSelectionUnsafe = function (values) {
        this.setSelectionBase(values);
    };
    baseItem.prototype.setSelectionBase = function (values) {
        this._setSelectedValues(values);
    };
    baseItem.prototype._applySelection = function () {
        if (this.hasWidget) {
            this._applySelectionUnsafe();
        }
    };
    baseItem.prototype._applySelectionUnsafe = function () {
    };
    baseItem.prototype._isEncodeHtml = function () {
        return (!this.options || this.options.encodeHtml == undefined) ? true : this.options.encodeHtml;
    };
    baseItem.prototype._isSupportDataAwareExport = function () {
        return this.options && this.options.allowExport && this.options.ViewModel && this.options.ViewModel.SupportDataAwareExport;
    };
    baseItem.prototype._isLocked = function () {
        if (this._lockCount < 0)
            throw new Error("Unresolved locker state (looks like 'unlock' method is called without 'lock')");
        return this._lockCount > 0;
    };
    baseItem.prototype._lock = function () {
        this._lockCount++;
    };
    baseItem.prototype._unlock = function () {
        this._lockCount--;
    };
    baseItem.prototype._getCustomSelectionMode = function () {
        return this.customSelectionMode;
    };
    baseItem.prototype._setCustomSelectionMode = function (value) {
        this.customSelectionMode = value;
    };
    baseItem.prototype._getCustomHoverEnabled = function () {
        return this.customHoverEnabled;
    };
    baseItem.prototype._setCustomHoverEnabled = function (value) {
        this.customHoverEnabled = value;
    };
    baseItem.prototype._getCustomTargetAxes = function () {
        return this.customTargetAxes;
    };
    baseItem.prototype._setCustomTargetAxes = function (value) {
        this.customTargetAxes = value;
    };
    baseItem.prototype._getTargetAxes = function () {
        if (!this.isInteractivityActionEnabled()) {
            return this._getCustomTargetAxes();
        }
        else {
            return this._getAxisNames();
        }
    };
    baseItem.prototype.getSelectedTuples = function () {
        var that = this, multiData = that.options.multiData, axisNames = that._getAxisNames(), dimensionByAxis = {}, tupleValues, axisValues, valueIndex;
        if (that._canSetMasterFilter() || that._canSetMultipleMasterFilter() || that._canPerformDrillDown()) {
            var tuples = [];
            if (that.options.SelectedValues == null)
                return tuples;
            if (axisNames.length > 1) {
                $.each(axisNames, function (_, axisName) {
                    dimensionByAxis[axisName] = multiData.getAxis(axisName).getDimensions();
                });
                $.each(that.options.SelectedValues, function (_, selection) {
                    tupleValues = [];
                    valueIndex = 0;
                    $.each(axisNames, function (_, axisName) {
                        axisValues = [];
                        $.each(dimensionByAxis[axisName], function () {
                            axisValues.push(selection[valueIndex++]);
                        });
                        tupleValues.push({ AxisName: axisName, Value: axisValues });
                    });
                    tuples.push(tupleValues);
                });
            }
            else {
                var drillDownValues = that._getDrillDownValues();
                $.each(that.options.SelectedValues, function (indexd, value) {
                    tuples.push([{ AxisName: axisNames[0], Value: drillDownValues.concat(value) }]);
                });
            }
            return tuples;
        }
        else {
            return that.customSelectedTuples;
        }
    };
    baseItem.prototype.updateItem = function (options) {
        var that = this;
        this._setCustomSelectionMode(options.selectionMode);
        this._setCustomTargetAxes(options.targetAxes);
        this._setCustomHoverEnabled(options.hoverEnabled);
        this.customDefaultSelectedValues = options.defaultSelectedValues;
        that.updateInteractivityOptions();
        if (!this.isInteractivityActionEnabled()) {
            var customDefaultSelectedValues = options.selectionMode == _interactivity_controller_1.dashboardSelectionMode.single ? that.customDefaultSelectedValues.slice(0, 1) : that.customDefaultSelectedValues;
            that.interactivityController.clickAction(customDefaultSelectedValues);
        }
        this.updateCaptionToolbar();
    };
    baseItem.prototype.forceUpdateItem = function () {
        this.forceCreateCaptionToolbar();
        this.updateContentSize();
    };
    baseItem.prototype._changeTuple = function (tuple) {
        var that = this, newTuple = [];
        $.each(tuple, function (index, axisValue) {
            var axisName = axisValue.AxisName, value = axisValue.Value;
            newTuple.push({ AxisName: axisName, Value: (axisName == that._getDrillDownAxisName()) ? value.slice(-1) : value });
        });
        return newTuple;
    };
    baseItem.prototype._onSelectionChanged = function (tuples) {
        var that = this, currentSelectedValues = this.options.SelectedValues, singleSelection = !!currentSelectedValues && currentSelectedValues.length === 1 ? currentSelectedValues[0] : null, newSelection = [], tupleValues, selectedTuples = this.getSelectedTuples(), actionName, selectedDrillDownValue;
        this._selectTuples(tuples, selectedTuples, true);
        this._selectTuples(selectedTuples, tuples, false);
        if (this.itemSelectionChanged) {
            this.itemSelectionChanged.fire(this.getName(), tuples);
        }
        if (this.isInteractivityActionEnabled()) {
            $.each(tuples, function (index, tuple) {
                tupleValues = [];
                $.each(that._getAxisNames(), function (_, axisName) {
                    tupleValues.push.apply(tupleValues, _utils_1.getAxisPointValue(tuple, axisName).slice());
                });
                newSelection.push(tupleValues);
            });
            newSelection = this._deductDrillDownValues(newSelection);
            this._setSelectedValues(newSelection);
            actionName = this._getSelectionCallbackType(newSelection.length === 1 && singleSelection && _utils_1.checkValuesAreEqual(newSelection[0], singleSelection));
            if (actionName === _common_1.viewerActions.drillDown) {
                newSelection = newSelection[0];
            }
            if (this._mustSelectingFired(newSelection)) {
                this.selected.fire(this.getName(), actionName, newSelection);
            }
            else {
                this._onClearMasterFilter();
            }
        }
        else {
            this.customSelectedTuples = [];
            $.each(tuples, function (index, tuple) {
                that.customSelectedTuples.push(tuple);
            });
        }
        if (this.customSelectionMode == _interactivity_controller_1.dashboardSelectionMode.multiple) {
            this.updateCaptionToolbar();
        }
    };
    baseItem.prototype._mustSelectingFired = function (values) {
        return values.length > 0;
    };
    baseItem.prototype._patchTroughDrillDownValues = function (values) {
        var drillDownValues = this._getDrillDownValues(), filterValues = [];
        if (values) {
            $.each(values, function (_, value) {
                filterValues.push(drillDownValues.concat(value));
            });
        }
        return filterValues;
    };
    baseItem.prototype._deductDrillDownValues = function (values) {
        var drillDownValues = this._getDrillDownValues(), drillDownValuesLength = drillDownValues.length, cutValue;
        $.each(values, function (_, value) {
            cutValue = value.slice(0, drillDownValuesLength);
            if (_utils_1.checkValuesAreEqual(cutValue, drillDownValues))
                value.splice(0, drillDownValuesLength);
        });
        return values;
    };
    baseItem.prototype._getSelectionCallbackType = function (performDrillDown) {
        var actionName = undefined;
        if (this._canSetMultipleMasterFilter() && this.allowMultiselection) {
            actionName = _common_1.viewerActions.setMultipleValuesMasterFilter;
        }
        else if (this._canSetMasterFilter()) {
            if (performDrillDown) {
                if (this._canPerformDrillDown())
                    actionName = _common_1.viewerActions.drillDown;
            }
            else {
                actionName = _common_1.viewerActions.setMasterFilter;
            }
        }
        else if (this._canPerformDrillDown()) {
            actionName = _common_1.viewerActions.drillDown;
        }
        return actionName;
    };
    baseItem.prototype._selectTuples = function (tuplesToSelect, unaffectedTuples, isSelect) {
        var that = this;
        var updateTuple = function (tuple) {
            if (_utils_1.checkArrayContainsTuple(unaffectedTuples, tuple) == undefined) {
                return that._hasDrillUpButton() && !that._isMultiDataSupported() ? that._changeTuple(tuple) : tuple;
            }
            return undefined;
        };
        this._selectTuplesCore(tuplesToSelect, updateTuple, isSelect);
    };
    baseItem.prototype._selectTuplesCore = function (tuples, updateTupleDelegate, state) {
        var that = this;
        $.each(tuples, function (index, tuple) {
            var updatedTuple = updateTupleDelegate(tuple);
            if (!!updatedTuple) {
                that.selectTuple(updatedTuple, state);
            }
        });
    };
    baseItem.prototype._renderContent = function (element, changeExisting, afterRenderCallback) {
        if (this.visualMode !== 'caption') {
            this._hasWidget = true;
            return this.renderContentUnsafe(element, changeExisting, afterRenderCallback);
        }
        return false;
    };
    baseItem.prototype.renderContentUnsafe = function ($element, changeExisting, afterRenderCallback) {
        return false;
    };
    baseItem.prototype.renderPartialContent = function () {
        if (this.hasWidget) {
            this.renderPartialContentUnsafe();
        }
    };
    baseItem.prototype.renderPartialContentUnsafe = function () {
    };
    baseItem.prototype.updateContentState = function () {
        if (this.hasWidget) {
            this.updateContentStateUnsafe();
        }
    };
    baseItem.prototype.updateContentStateUnsafe = function () {
    };
    baseItem.prototype.getInfo = function () {
        if (this.hasWidget) {
            return this.getInfoUnsafe();
        }
        else {
            return this.getInfoBase();
        }
    };
    baseItem.prototype.getInfoUnsafe = function () {
        return this.getInfoBase();
    };
    baseItem.prototype.getInfoBase = function () {
        var that = this, container = this._getBoundaryContainer();
        return {
            name: that.getName(),
            headerHeight: this.hasCaption() ? this.captionToolbar.calcHeight(this.getCaptionToolbarOptions()) : 0,
            position: $(container).offset(),
            width: $(container).outerWidth(),
            height: $(container).outerHeight(),
            virtualSize: undefined,
            scroll: undefined
        };
    };
    baseItem.prototype.getName = function () {
        return this.options.Name;
    };
    baseItem.prototype.getCaption = function () {
        return this.options.CaptionViewModel && this.options.CaptionViewModel.Text ? this.options.CaptionViewModel.Text.concat(this._getParametersTitle() || '') : undefined;
    };
    baseItem.prototype.hasCaption = function (options) {
        var opts = options || this.options;
        return opts && opts.CaptionViewModel && opts.CaptionViewModel.ShowCaption;
    };
    baseItem.prototype.hasParentContainer = function () {
        return this.options && _utils_1.type.isDefined(this.options.ParentContainer);
    };
    baseItem.prototype._isPaneEmpty = function () {
        return this.hasParentContainer();
    };
    baseItem.prototype._isTransparentBackground = function () {
        return false;
    };
    baseItem.prototype.render = function (container) {
        this.container = this.container || container;
        this.container.setAttribute('data-layout-item-name', this.getName());
        this.contentRoot = document.createElement('div');
        _utils_1.moveContent(this.container, this.contentRoot, true);
        if (!this.captionToolbar) {
            this.captionToolbar = this._createCaptionToolbar(this.container, this.controlContainer, this._getBoundaryContainer());
            this.updateCaptionToolbar();
        }
        else if (container) {
            this.forceCreateCaptionToolbar();
        }
        this.container.appendChild(this.contentRoot);
        this.updateContentSize();
        this._changeContent(false);
    };
    baseItem.prototype.dispose = function () {
        this._removeShildElement();
        this.itemLoadingElement.hide();
        if (this.captionToolbar) {
            this.captionToolbar.dispose();
        }
    };
    baseItem.prototype.updateContent = function (newOptions) {
        var isPrevShowCaption = this.hasCaption(this.options), isNewShowCaption = this.hasCaption(newOptions), showCaptionChanged = isPrevShowCaption !== isNewShowCaption;
        this._initializeData(newOptions);
        if (_utils_1.type.isDefined(isNewShowCaption) && showCaptionChanged) {
            this.forceCreateCaptionToolbar();
        }
        else {
            this.updateCaptionToolbar();
        }
        switch (newOptions.ContentType) {
            case _common_1.contentType.partialDataSource:
            case _common_1.contentType.completeDataSource:
                if (newOptions.DataSource || (newOptions.ItemData && newOptions.ItemData.DataStorageDTO))
                    this.renderPartialContent();
                break;
            case _common_1.contentType.actionModel:
                if (!this.isInteractivityActionEnabled()) {
                    this.updateContentState();
                }
                break;
            default:
                this._changeContent(true);
                break;
        }
    };
    baseItem.prototype.updateClientState = function (clientState) {
        if (this.hasWidget && this.options.ContentType !== _common_1.contentType.partialDataSource && this.options.ContentType !== _common_1.contentType.completeDataSource)
            this._updateClientStateUnsafe(clientState);
    };
    baseItem.prototype._removeShildElement = function () {
        var shieldingElement = this.shieldingElement;
        if (shieldingElement) {
            shieldingElement.parentNode.removeChild(shieldingElement);
            delete this.shieldingElement;
        }
    };
    baseItem.prototype.updateState = function (state) {
        if (!this.container)
            return;
        var shieldingElement = this.shieldingElement;
        var container = this._getBoundaryContainer();
        if (this.visualMode !== 'caption') {
            if (!!state.loading) {
                this.itemLoadingElement.show(container);
            }
            else {
                this.itemLoadingElement.hide();
            }
        }
        if (!!state.operations.actions) {
            this._removeShildElement();
        }
        else {
            if (!shieldingElement) {
                var position = this._getContainerPosition();
                shieldingElement = document.createElement('div');
                shieldingElement.classList.add('dx-dashboard-item-shield');
                shieldingElement.style.left = position.left.toString() + 'px';
                shieldingElement.style.top = position.top.toString() + 'px';
                shieldingElement.style.width = position.width.toString() + 'px';
                shieldingElement.style.height = position.height.toString() + 'px';
                shieldingElement.style.zIndex = _z_index_1.zIndex.dashboardItemShield.toString();
                this.shieldingElement = shieldingElement;
                $(container).prepend(shieldingElement);
            }
        }
    };
    baseItem.prototype.width = function (width) {
        var that = this;
        if ($.isNumeric(width)) {
            that.setSize(width, undefined);
        }
        else {
            return $(that.container).outerWidth();
        }
    };
    baseItem.prototype.height = function (height) {
        var that = this;
        if ($.isNumeric(height)) {
            that.setSize(undefined, height);
        }
        else {
            return $(that.container).outerHeight();
        }
    };
    baseItem.prototype.setSize = function (width, height) {
        var that = this, oldSize = { width: that.width(), height: that.height() }, newSize = { width: width, height: height };
        if (width) {
            $(that.container).outerWidth(width);
        }
        if (height) {
            $(that.container).outerHeight(height);
        }
        that._resize();
    };
    baseItem.prototype.getConstraints = function (includeBorders) {
        var borderSize = includeBorders ? _render_helper_1.RenderHelper.getBorderSizeByClasses(this._generateOuterBorderClasses().concat(this._generateInnerBorderClasses())) : { width: 0, height: 0 }, headerHeight = this._calcHeaderAndFooterHeight(), contentMinHeight = this._getMinContentHeight(), height = borderSize.height + headerHeight + contentMinHeight;
        return _utils_layout_1.constraints(_utils_layout_1.size(_dashboard_viewer_constants_1.MIN_PANE_WIDTH + borderSize.width, height), _utils_layout_1.size(Number.MAX_VALUE, this._isFixedHeight ? height : Number.MAX_VALUE));
    };
    baseItem.prototype.getOffset = function () {
        return {
            width: 0,
            height: 0
        };
    };
    baseItem.prototype.updateInteractivityOptions = function () {
        var that = this, selectionMode = _interactivity_controller_1.dashboardSelectionMode.none;
        if (!that.isInteractivityActionEnabled()) {
            that.updateContentState();
            selectionMode = this.customSelectionMode;
            if (selectionMode == _interactivity_controller_1.dashboardSelectionMode.multiple && !this.allowMultiselection)
                selectionMode = _interactivity_controller_1.dashboardSelectionMode.single;
        }
        else {
            if (this._canSetMultipleMasterFilter() && this.allowMultiselection) {
                selectionMode = _interactivity_controller_1.dashboardSelectionMode.multiple;
            }
            else {
                if (that.isInteractivityActionEnabled()) {
                    selectionMode = _interactivity_controller_1.dashboardSelectionMode.single;
                }
            }
        }
        that.interactivityController.setOptions(selectionMode);
    };
    baseItem.prototype.getCaptionToolbarOptions = function () {
        var actionAtems = this._getActionToolbarItems();
        var staticItems = this._getStaticToolbarItems();
        var stateItems = this._getStateToolbarItems();
        var toolbarOptions = {
            staticItems: staticItems,
            actionItems: actionAtems,
            stateItems: stateItems,
            navigationItems: []
        };
        this.addContextCaptionToolbarOptions && this.addContextCaptionToolbarOptions(toolbarOptions);
        this.itemCaptionToolbarUpdated.fire(this.getName(), toolbarOptions);
        return toolbarOptions;
    };
    baseItem.prototype.updateConstraints = function () {
        this.constraintsUpdated.fire(this.getName());
    };
    baseItem.prototype.updateCaptionToolbar = function () {
        var _this = this;
        var options = this.getCaptionToolbarOptions();
        if (this.deferredToolbarRenderingPromise) {
            this.deferredToolbarRenderingPromise(this.getName(), this.captionToolbar.calcMinWidth(options), this.captionToolbar.calcHeight(options)).done(function () {
                _this._updateCaptionToolbarAndSize(options);
            });
        }
        else {
            this._updateCaptionToolbarAndSize(options);
        }
    };
    baseItem.prototype._createCaptionToolbar = function (container, controlContainer, popupContainer) {
        return this.createCaptionToolbar(this, container, controlContainer, popupContainer, {
            encodeHtml: this._isEncodeHtml(),
            hasCaption: this.hasCaption(),
            isBottomFloatingToolbarPosition: this._isBottomFloatingToolbarPosition,
            captionToolbarSeparatorRequired: this._captionToolbarSeparatorRequired,
            allowPreview: this._allowPreview,
            hiddenToolbar: this.visualMode === 'content'
        });
    };
    baseItem.prototype._updateCaptionToolbarAndSize = function (options) {
        var heightChanded = this.captionToolbar.update(options);
        if (heightChanded) {
            this.updateContentSize();
        }
    };
    baseItem.prototype.forceCreateCaptionToolbar = function () {
        this.captionToolbar.dispose();
        this.captionToolbar = this._createCaptionToolbar(this.container, this.controlContainer, this._getBoundaryContainer());
        this.updateCaptionToolbar();
    };
    baseItem.prototype._updateClientStateUnsafe = function (clientState) {
    };
    baseItem.prototype._changeContent = function (updateExisting) {
        var _this = this;
        if (this.visualMode === 'caption')
            return;
        var afterRenderCallback = function () {
            if (updateExisting) {
                _this._raiseItemWidgetUpdated();
            }
            else {
                _this._raiseItemWidgetCreated();
            }
            _this._applySelection();
        };
        if (updateExisting) {
            this._raiseItemWidgetUpdating();
        }
        if (!this._renderContent(this.contentRoot, updateExisting, afterRenderCallback)) {
            afterRenderCallback();
        }
    };
    baseItem.prototype._calcHeaderAndFooterHeight = function () {
        var headerAndFooterHeight = 0;
        var toolbar = this._createCaptionToolbar(undefined, undefined, undefined);
        headerAndFooterHeight += toolbar.calcHeight(this.getCaptionToolbarOptions());
        return headerAndFooterHeight;
    };
    baseItem.prototype._getReducedDataTooltip = function () {
        if (this.options.LimitDataState) {
            if (this.options.LimitDataState.isReduced)
                return _default_1.getLocalizationById('DashboardWebStringId.LimitVisibleData.DisplayAllDataTooltip');
            return _default_1.getLocalizationById('DashboardWebStringId.LimitVisibleData.IncreasePerformanceTooltip');
        }
        return undefined;
    };
    baseItem.prototype._getStaticToolbarItems = function () {
        var items = [];
        if (this.hasCaption()) {
            var caption = this.getCaption();
            if (caption) {
                items.push({
                    name: caption_toolbar_options_1.dashboardToolbarItemNames.itemCaption,
                    type: 'text',
                    text: caption
                });
            }
            if (this.allowLimitDataCallback && this.options.LimitDataState.isReduceMode)
                items.push(this._getReduceDataToolbarItem());
        }
        return items;
    };
    baseItem.prototype._getReduceDataToolbarItem = function () {
        var _this = this;
        return {
            name: caption_toolbar_options_1.dashboardToolbarItemNames.limitVisibleData,
            checked: this.options.LimitDataState.isReduced,
            click: function (element) { _this.allowLimitDataCallback(); },
            icon: _caption_toolbar_css_classes_1.cssClasses.iconLimitVisibleData,
            type: 'button',
            tooltip: {
                className: _caption_toolbar_css_classes_1.cssClasses.tooltipLimitVisibleData,
                template: function () {
                    var div = document.createElement('div');
                    div.innerText = _this._getReducedDataTooltip();
                    return div;
                }
            }
        };
    };
    baseItem.prototype._getStateToolbarItems = function () {
        var _this = this;
        var items = this._getSpecificStatePanelItems();
        var actionModel = this.options.ActionModel;
        if (this._hasClearMasterFilterButton()) {
            items.push({
                name: caption_toolbar_options_1.dashboardToolbarItemNames.clearMasterFilter,
                click: function (element) { _this._onClearMasterFilter(); },
                icon: _caption_toolbar_css_classes_1.cssClasses.iconClearMasterFilter,
                type: 'button',
                hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ClearMasterFilter)
            });
        }
        if (this.options.useNeutralFilterMode && actionModel && actionModel.ClearMasterFilterButtonState === 'Disabled') {
            items.push({
                name: caption_toolbar_options_1.dashboardToolbarItemNames.clearMasterFilter,
                icon: _caption_toolbar_css_classes_1.cssClasses.iconClearMasterFilter,
                type: 'button',
                disabled: true,
                hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ClearMasterFilter)
            });
        }
        if (this._hasClearSelectionButton())
            items.push({
                name: caption_toolbar_options_1.dashboardToolbarItemNames.clearSelection,
                click: function (element) { _this._onClearSelection(); },
                icon: _caption_toolbar_css_classes_1.cssClasses.iconClearSelection,
                type: 'button',
                hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ClearSelection)
            });
        if (this._hasDrillUpButton() && this._isDrillUpEnabled())
            items.push({
                name: caption_toolbar_options_1.dashboardToolbarItemNames.drillUp,
                click: function (element) { _this._onDrillUp(); },
                icon: _caption_toolbar_css_classes_1.cssClasses.iconDrillUp,
                type: 'button',
                hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.DrillUp)
            });
        if (!this.hasCaption() && this.allowLimitDataCallback && this.options.LimitDataState.isReduceMode)
            items.push(this._getReduceDataToolbarItem());
        return items;
    };
    baseItem.prototype._getActionToolbarItems = function () {
        var _this = this;
        var items = this._getSpecificActionToolbarItems(), contentDescription = this.options.ViewModel ? this.options.ViewModel.ContentDescription : undefined;
        if (this.options.allowExport)
            items.push({
                name: caption_toolbar_options_1.dashboardToolbarItemNames.exportMenu,
                menu: this._getExportMenuModel(),
                icon: _caption_toolbar_css_classes_1.cssClasses.iconItemExport,
                type: 'menu',
                hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ExportTo)
            });
        if (contentDescription && contentDescription.ElementSelectionEnabled)
            items.push({
                name: caption_toolbar_options_1.dashboardToolbarItemNames.values,
                menu: {
                    items: contentDescription.ElementNames,
                    selectedItems: [contentDescription.ElementNames[contentDescription.SelectedElementIndex]],
                    selectionMode: 'single',
                    itemClick: function (itemData, itemElement, index) { _this._onContentElementSelection(index); },
                    type: "list"
                },
                icon: _caption_toolbar_css_classes_1.cssClasses.iconContentSelection,
                type: 'menu',
                hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ElementSelection)
            });
        if (this._hasToggleSelectionModeButton())
            items.push({
                name: caption_toolbar_options_1.dashboardToolbarItemNames.multiselection,
                checked: this.allowMultiselection,
                click: function (element) { _this._onToggleSelectionMode(); },
                icon: _caption_toolbar_css_classes_1.cssClasses.iconMultiselection,
                type: 'button',
                hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.AllowMultiselection)
            });
        return items;
    };
    baseItem.prototype._getExportMenuModel = function () {
        var _this = this;
        var items = [_caption_toolbar_css_classes_1.cssClasses.iconExportToPDF];
        if (_caption_toolbar_css_classes_1.Settings.allowExportToImage)
            items.push(_caption_toolbar_css_classes_1.cssClasses.iconExportToImage);
        if (this._isSupportDataAwareExport()) {
            items.push(_caption_toolbar_css_classes_1.cssClasses.iconExportToExcel);
        }
        return {
            title: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ExportTo),
            items: items,
            itemClick: function (itemData, itemElement, index) { _this.showExportDialog(_caption_toolbar_css_classes_1._convertToExportFormat(itemData)); },
            type: "icons"
        };
    };
    baseItem.prototype._getParametersTitle = function () {
        if (!this.hasCaption())
            return undefined;
        var parameters = [], separator = ' - ', drillDownValues = this.options.DrillDownValues, contentDescription = this.options.ViewModel.ContentDescription;
        if (contentDescription && contentDescription.ElementSelectionEnabled) {
            parameters.push(contentDescription.ElementNames[contentDescription.SelectedElementIndex || 0]);
        }
        if (drillDownValues && drillDownValues.length > 0) {
            parameters = parameters.concat(drillDownValues.map(function (drillDownValue) { return _formatter_1.format(drillDownValue.Value, drillDownValue.Format); }));
        }
        return parameters.length > 0 ? separator + parameters.join(separator) : undefined;
    };
    baseItem.prototype.showExportDialog = function (exportFormat) {
        this.options.showExportDialog(exportFormat);
    };
    baseItem.prototype._getSpecificActionToolbarItems = function () {
        return [];
    };
    baseItem.prototype._getSpecificStatePanelItems = function () {
        return [];
    };
    baseItem.prototype._getMinContentHeight = function () {
        return _dashboard_viewer_constants_1.MIN_PANE_HEIGHT;
    };
    baseItem.prototype._generateInnerBorderClasses = function (element) {
        if (this.visualMode === 'caption') {
            return [];
        }
        else {
            return this._generateInnerBorderClassesUnsafe(element);
        }
    };
    baseItem.prototype._generateInnerBorderClassesUnsafe = function (element) {
        var classes = [exports.cssClassNamesBaseItem.item];
        if (this._isBorderRequired()) {
            classes.push(exports.cssClassNamesBaseItem.simpleBorder);
        }
        if (element) {
            element.classList.add(exports.cssClassNamesBaseItem.item);
            if (this._isBorderRequired()) {
                element.classList.add(exports.cssClassNamesBaseItem.simpleBorder);
            }
            else {
                element.classList.remove(exports.cssClassNamesBaseItem.simpleBorder);
            }
        }
        return classes;
    };
    baseItem.prototype._generateOuterBorderClasses = function (element) {
        if (this.visualMode === 'caption')
            return;
        if (element) {
            if (this.hasParentContainer() && this.visualMode === 'full') {
                element.classList.add(exports.cssClassNamesBaseItem.groupItemChild);
            }
            else {
                element.classList.remove(exports.cssClassNamesBaseItem.groupItemChild);
            }
        }
        return this.hasParentContainer() && this.visualMode === 'full' ? [exports.cssClassNamesBaseItem.groupItemChild] : [];
    };
    baseItem.prototype._isBorderRequired = function () {
        return this._isPaneEmpty() && this.visualMode === 'full';
    };
    baseItem.prototype._resize = function () {
        if (this.hasWidget) {
            this._resizeUnsafe();
        }
        else {
            this._resizeBase();
        }
    };
    baseItem.prototype._resizeUnsafe = function () {
        this._resizeBase();
    };
    baseItem.prototype._resizeBase = function () {
        this.updateContentSize();
        this._allocatePreloader();
        this.captionToolbar.onResize();
    };
    baseItem.prototype.updateContentSize = function () {
        if (this.hasWidget) {
            this._updateContentSizeUnsafe();
        }
        else {
            this._updateContentSizeBase();
        }
    };
    baseItem.prototype._updateContentSizeUnsafe = function () {
        this._updateContentSizeBase();
    };
    baseItem.prototype._updateContentSizeBase = function () {
        var that = this;
        that._generateOuterBorderClasses(that.container);
        that._generateInnerBorderClasses(that.contentRoot);
        var contentHeight = Math.floor($(that.container).height() - that._calcHeaderAndFooterHeight());
        $(that.contentRoot).outerHeight(contentHeight);
    };
    baseItem.prototype._allocatePreloader = function () {
        var shieldingElement = this.container.querySelector('.dx-dashboard-item-shield'), position = this._getContainerPosition();
        this.itemLoadingElement.resize();
        if (shieldingElement) {
            shieldingElement.style.left = position.left.toString() + 'px';
            shieldingElement.style.top = position.top.toString() + 'px';
            shieldingElement.style.width = position.width.toString() + 'px';
            shieldingElement.style.height = position.height.toString() + 'px';
        }
    };
    baseItem.prototype._getButtonOffset = function (useToolbarOffset) {
        var defaultButtonSize = 28;
        var hoverDiv = useToolbarOffset ? this.container.querySelector('.' + exports.cssClassNamesBaseItem.overlayContent) : undefined;
        return {
            left: !!hoverDiv ? $(hoverDiv).outerWidth(true) : defaultButtonSize,
            top: !!hoverDiv ? $(hoverDiv).outerHeight(true) : defaultButtonSize
        };
    };
    baseItem.prototype._getAnimationOptions = function () {
        return {
            enabled: !!this.options.animate,
            duration: 300
        };
    };
    baseItem.prototype._getContainerPosition = function () {
        if (this.hasWidget) {
            return this._getContainerPositionUnsafe();
        }
        else {
            return this._getContainerPositionBase();
        }
    };
    baseItem.prototype._getContainerPositionUnsafe = function () {
        return this._getContainerPositionBase();
    };
    baseItem.prototype._getContainerPositionBase = function () {
        var container = this._getBoundaryContainer(), position = $(container).position(), width = $(container).outerWidth(), height = $(container).outerHeight(), marginX = $(container).css('margin-left'), marginY = $(container).css('margin-top'), border = this._isPaneEmpty() ? 0 : 1, parseMargin = function (margin) { return margin == 'auto' ? 0 : parseInt(margin); };
        return {
            left: position.left,
            top: position.top,
            width: width,
            height: height,
            offsetX: width + parseMargin(marginX) - border,
            offsetY: parseMargin(marginY) - border
        };
    };
    baseItem.prototype._getBoundaryContainer = function () {
        return this.visualMode === 'caption' ? this._boundaryContainer : this.container;
    };
    baseItem.prototype._getSelectedValues = function () {
        var selectedValues = this.options.SelectedValues;
        return this._isMultiDataSupported() ? this._patchTroughDrillDownValues(selectedValues) : selectedValues;
    };
    baseItem.prototype._onClearSelection = function () {
        this.clearSelection();
        this.customSelectedTuples = [];
        if (this.customSelectionMode == _interactivity_controller_1.dashboardSelectionMode.multiple)
            this.updateCaptionToolbar();
        this.itemSelectionChanged.fire(this.getName(), []);
    };
    baseItem.prototype._getElementInteractionValue = function (element, viewModel) {
    };
    baseItem.prototype._setSelectedValues = function (values) {
        this.options.SelectedValues = values;
        return this.options.SelectedValues;
    };
    baseItem.prototype._raiseItemClick = function (element) {
        var that = this, tuple = [], dataPoint = that._getDataPoint(element), drillDownValues = that._getDrillDownValues(), targetAxes = that._getTargetAxes(), drillDownAxis = drillDownValues && targetAxes.length == 1 ? targetAxes[0] : undefined;
        $.each(targetAxes, function (_, axisName) {
            var values;
            if (dataPoint.getSelectionValues) {
                values = dataPoint.getSelectionValues(axisName);
            }
            else {
                values = dataPoint.getValues(axisName);
            }
            if (values.length > 0) {
                if (drillDownAxis && axisName === drillDownAxis && !that._isMultiDataSupported()) {
                    values = drillDownValues.concat(values);
                }
                tuple.push({ AxisName: axisName, Value: values });
            }
        });
        if ((targetAxes.length != 0) && (targetAxes.length == tuple.length)) {
            that._clickAction(tuple);
        }
        if (that.itemClick) {
            that.itemClick.fire(that.getName(), dataPoint);
        }
    };
    baseItem.prototype._clickAction = function (tuple) {
        this.interactivityController.clickAction([tuple]);
    };
    baseItem.prototype._isMultiDataSupported = function () {
        return false;
    };
    baseItem.prototype._getDataPoint = function (element) {
        return null;
    };
    baseItem.prototype._getWidget = function () {
        return null;
    };
    baseItem.prototype._raiseItemWidgetCreated = function () {
        var widget = this._getWidget();
        if (widget) {
            this.itemWidgetCreated.fire(this.getName(), widget);
        }
    };
    baseItem.prototype._raiseItemWidgetUpdating = function () {
        var widget = this._getWidget();
        if (widget) {
            this.itemWidgetUpdating.fire(this.getName(), widget);
        }
    };
    baseItem.prototype._raiseItemWidgetUpdated = function () {
        var widget = this._getWidget();
        if (widget) {
            this.itemWidgetUpdated.fire(this.getName(), widget);
        }
    };
    baseItem.prototype._raiseItemHover = function (element, state) {
        if (this.itemHover) {
            var dataPoint = this._getDataPoint(element);
            this.itemHover.fire(this.getName(), dataPoint, state);
        }
    };
    baseItem.prototype._onClearMasterFilter = function () {
        var name = this.getName();
        this._setSelectedValues(null);
        if (!this.options || !this.options.useNeutralFilterMode) {
            this.clearSelection();
        }
        this.clearMasterFilter.fire(name);
    };
    baseItem.prototype._onToggleSelectionMode = function () {
        this._allowMultiselection = !this._allowMultiselection;
        this.allowMultiselectionChanged && this.allowMultiselectionChanged(this._allowMultiselection);
        this.updateCaptionToolbar();
        this.updateInteractivityOptions();
    };
    baseItem.prototype._onDrillUp = function () {
        this.drillUp.fire(this.getName(), !!this._getSelectedValues());
    };
    baseItem.prototype._onContentElementSelection = function (index) {
        this.contentElementSelection.fire(this.getName(), {
            index: index,
            caption: this.options.ViewModel.ContentDescription.ElementNames[index]
        });
    };
    baseItem.prototype._onExpandValue = function (expandValueParams) {
        this.expandValue.fire(this.getName(), expandValueParams);
    };
    baseItem.prototype._onClientStateUpdate = function (clientState) {
        this.clientStateUpdate.fire(this.getName(), clientState);
    };
    baseItem.prototype._onDataRequest = function () {
        this.dataRequest.fire(this.getName());
    };
    baseItem.prototype._hasDrillUpButton = function () {
        var actionModel = this.options.ActionModel;
        return actionModel && actionModel.DrillUpButtonState && actionModel.DrillUpButtonState !== 'Hidden';
    };
    baseItem.prototype._hasClearMasterFilterButton = function () {
        var actionModel = this.options.ActionModel;
        return actionModel && actionModel.ClearMasterFilterButtonState && actionModel.ClearMasterFilterButtonState === 'Enabled';
    };
    baseItem.prototype._hasClearSelectionButton = function () {
        return !this.isInteractivityActionEnabled() && this.customSelectionMode == _interactivity_controller_1.dashboardSelectionMode.multiple && this.customSelectedTuples.length > 0;
    };
    baseItem.prototype._hasToggleSelectionModeButton = function () {
        return this._canSetMultipleMasterFilter() || (!this.isInteractivityActionEnabled() && this.customSelectionMode == _interactivity_controller_1.dashboardSelectionMode.multiple);
    };
    baseItem.prototype._isDrillUpEnabled = function () {
        var actionModel = this.options.ActionModel;
        return actionModel && actionModel.DrillUpButtonState && actionModel.DrillUpButtonState === 'Enabled';
    };
    baseItem.prototype._canPerformAction = function (action) {
        var actionModel = this.options.ActionModel;
        return actionModel && actionModel.Actions && actionModel.Actions.indexOf(action) !== -1;
    };
    baseItem.prototype._canPerformDrillDown = function () {
        return this._canPerformAction(_common_1.viewerActions.drillDown);
    };
    baseItem.prototype._canPerformDrillUp = function () {
        return this._canPerformAction(_common_1.viewerActions.drillUp);
    };
    baseItem.prototype._canSetMasterFilter = function () {
        return this._canPerformAction(_common_1.viewerActions.setMasterFilter);
    };
    baseItem.prototype._canSetMultipleMasterFilter = function () {
        return this._canPerformAction(_common_1.viewerActions.setMultipleValuesMasterFilter);
    };
    baseItem.prototype.isInteractivityActionEnabled = function () {
        return this._canSetMasterFilter() || this._canSetMultipleMasterFilter() || this._canPerformDrillDown();
    };
    baseItem.prototype._selectionMode = function () {
        return this.isInteractivityActionEnabled() ? 'multiple' : 'none';
    };
    baseItem.prototype._getHtml = function (text) {
        return this._isEncodeHtml() ? _utils_1.encodeHtml(text) : text;
    };
    baseItem.prototype._getAxisNames = function () {
        return this.options.AxisNames || [];
    };
    baseItem.prototype._getDrillDownAxisName = function () {
        return this._getAxisNames().length > 0 ? this._getAxisNames()[0] : undefined;
    };
    baseItem.prototype._getDrillDownValues = function () {
        var drillDownValues = this.options.DrillDownUniqueValues;
        return drillDownValues != null ? drillDownValues : [];
    };
    return baseItem;
}());
exports.baseItem = baseItem;
exports.cssClassNamesBaseItem = {
    item: 'dx-dashboard-item',
    groupItem: 'dx-dashboard-group-item',
    groupItemChild: 'dx-dashboard-group-item-child',
    simpleBorder: 'dx-dashboard-simple-border',
    overlayContent: 'dx-overlay-content',
    cardWihtoutBackground: 'dx-dashboard-card-without-background'
};
