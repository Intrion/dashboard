/**
* DevExpress Dashboard (_data-item-viewer-adapter.js)
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
var _item_viewer_adapter_base_1 = require("./_item-viewer-adapter-base");
var _events_helper_1 = require("../../../viewer-parts/viewer/_events-helper");
var _common_1 = require("../../../data/_common");
var _utils_1 = require("../../../data/_utils");
var DataItemViewerAdapter = (function (_super) {
    __extends(DataItemViewerAdapter, _super);
    function DataItemViewerAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataItemViewerAdapter.prototype.attachToModel = function (viewerItem, dataDashboardItem) {
        var _this = this;
        _super.prototype.attachToModel.call(this, viewerItem, dataDashboardItem);
        this.modelSubscriptions.push(dataDashboardItem._actions.subscribe(function (actions) {
            _this.updateActionsModel(viewerItem, actions);
        }));
        this.modelSubscriptions.push(dataDashboardItem._actualSelectionValues.subscribe(function (newSelection) {
            var selection = dataDashboardItem._actualSelectionValues();
            if (!!selection && selection.length) {
                viewerItem.setSelection(selection);
            }
            else {
                viewerItem.performClearSelection();
            }
        }));
        viewerItem.selected.add(dataDashboardItem._processItemSelectionChange);
        viewerItem.drillUp.add(dataDashboardItem._processItemDrillUp);
        viewerItem.clearMasterFilter.add(dataDashboardItem._processItemClearMasterFilter);
        viewerItem.contentElementSelection.add(dataDashboardItem._processContentElementSelection);
        viewerItem.allowLimitDataCallback = function () {
            dataDashboardItem._limitDataState.toggle();
            _this.context.refresh(dataDashboardItem.componentName());
        };
    };
    DataItemViewerAdapter.prototype.dettachFromModel = function (viewerItem, dataDashboardItem) {
        viewerItem.selected.remove(dataDashboardItem._processItemSelectionChange);
        viewerItem.drillUp.remove(dataDashboardItem._processItemDrillUp);
        viewerItem.clearMasterFilter.remove(dataDashboardItem._processItemClearMasterFilter);
        viewerItem.contentElementSelection.remove(dataDashboardItem._processContentElementSelection);
        viewerItem.allowLimitDataCallback = null;
        _super.prototype.dettachFromModel.call(this, viewerItem, dataDashboardItem);
    };
    DataItemViewerAdapter.prototype.ensureViewerItemCore = function (onlyCreation, content) {
        var customInteractivityOptions = _events_helper_1.eventsHelper.createDefaultCustomInteractivityOptions();
        _super.prototype.ensureViewerItemCore.call(this, onlyCreation, content, customInteractivityOptions);
        this.item.updateItem(_events_helper_1.eventsHelper.ensureCustomInteractivityOptions(customInteractivityOptions, this.dashboardItem._actions().length > 0, this.dashboardItem._getItemData()));
        this.updateActionsModel(this.item, this.dashboardItem._actions());
    };
    DataItemViewerAdapter.prototype.updateItemContent = function (content) {
        if (!this.dashboardItem._actualSelectionValues() && this.item.visualMode !== 'caption') {
            this.item.clearSelection();
        }
        _super.prototype.updateItemContent.call(this, content);
        this.item.updateInteractivityOptions();
    };
    DataItemViewerAdapter.prototype.createDashboardViewerItem = function (element, content, dashboardItem) {
        var actions = dashboardItem._actions();
        content.ActionModel = content.ActionModel || {};
        content.ActionModel.Actions = actions;
        content.ActionModel.DrillUpButtonState = this.getDrillUpState(actions);
        content.ActionModel.ClearMasterFilterButtonState = this.dashboardItem._getClearMasterFilterState();
        var viewerItem = _super.prototype.createDashboardViewerItem.call(this, element, content, dashboardItem);
        viewerItem.updateInteractivityOptions();
        return viewerItem;
    };
    DataItemViewerAdapter.prototype.getDrillUpState = function (actions) {
        if (actions.indexOf(_common_1.viewerActions.drillUp) !== -1) {
            return 'Enabled';
        }
        else {
            if (actions.indexOf(_common_1.viewerActions.drillDown) !== -1) {
                return 'Disabled';
            }
            else {
                return 'Hidden';
            }
        }
    };
    DataItemViewerAdapter.prototype.updateActionsModel = function (item, actions) {
        var actionModel = _utils_1.deepExtend({}, item.options.ActionModel);
        actionModel.Actions = actions;
        actionModel.DrillUpButtonState = this.getDrillUpState(actions);
        actionModel.ClearMasterFilterButtonState = this.dashboardItem._getClearMasterFilterState();
        var newOptions = _utils_1.deepExtend({}, item.options);
        newOptions.ActionModel = actionModel;
        newOptions.ContentType = "ActionModel";
        item.updateContent(newOptions);
    };
    return DataItemViewerAdapter;
}(_item_viewer_adapter_base_1.ItemViewerAdapterBase));
exports.DataItemViewerAdapter = DataItemViewerAdapter;
