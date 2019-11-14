/**
* DevExpress Dashboard (_export-dialog-binder.js)
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
var dashboard_item_1 = require("../../model/items/dashboard-item");
var group_item_1 = require("../../model/items/group/group-item");
var _export_options_1 = require("../../viewer-parts/_export-options");
var _export_dialog_1 = require("../../viewer-parts/widgets/dialogs/export/_export-dialog");
var data_dashboard_item_1 = require("../../model/items/data-dashboard-item");
var _dashboard_title_view_constants_1 = require("../../viewer-parts/title/_dashboard-title-view-constants");
var _date_utils_1 = require("../../model/internal/_date-utils");
var disposable_object_1 = require("../../model/disposable-object");
var dashboard_tab_page_1 = require("../../model/items/tab-container-item/dashboard-tab-page");
var tab_container_item_1 = require("../../model/items/tab-container-item/tab-container-item");
var $ = require("jquery");
var ExportDialogBinder = (function () {
    function ExportDialogBinder(dashboard, _serviceClient, getContainer, extensionOptions, exportInfoProvider) {
        var _this = this;
        this.dashboard = dashboard;
        this._serviceClient = _serviceClient;
        this.getContainer = getContainer;
        this.extensionOptions = extensionOptions;
        this.exportInfoProvider = exportInfoProvider;
        this.availableExportFormats = ["PDF", "Image", "Excel"];
        this.showDashboardDialog = function (format) {
            _this._validateDashboardExport(format);
            _this.exportDialog.setExportFunction(function (documentInfo) {
                return _this.exportDashboardTo(format, documentInfo);
            });
            var title = _this.dashboard().title.visible() ? _this.dashboard().title.text() : "Dashboard";
            _this.exportDialog.showDialog("", null, format, {
                fileName: title,
                title: title
            });
        };
        this.showItemDialog = function (itemComponentName, format) {
            var item = _this.dashboard().findItem(itemComponentName);
            if (!item) {
                throw new Error("The item with the '" + itemComponentName + "' name does not exist");
            }
            _this._validateExportFormat(format);
            var exportCaption = item._caption;
            _this.exportDialog.setExportFunction(function (documentInfo) {
                return _this.exportDashboardItemTo(itemComponentName, format, documentInfo);
            });
            _this.exportDialog.showDialog(itemComponentName, _this._getExportItemType(item), format, {
                title: exportCaption,
                fileName: exportCaption,
                includeCaption: true
            });
        };
        this.hide = function () {
            if (!!_this._exportDialog) {
                _this._exportDialog.hideDialog();
            }
        };
        this.exportOptions = new _export_options_1.ExportOptions();
        this.exportOptions.setPdfOptions(extensionOptions.pdfExportOptions);
        this.exportOptions.setImageOptions(extensionOptions.imageExportOptions);
        this.exportOptions.setExcelOptions(extensionOptions.excelExportOptions);
    }
    ExportDialogBinder.prototype.reset = function () {
        this._exportDialog = undefined;
    };
    ExportDialogBinder.prototype._getClientSize = function (container, mode) {
        if (container) {
            var $container = $(container);
            return { width: $container.outerWidth(), height: $container.outerHeight() };
        }
        else {
            if (mode === "EntireDashboard") {
                return { width: 1920, height: 1080 };
            }
            else {
                return { width: window.outerWidth, height: window.outerHeight };
            }
        }
    };
    ExportDialogBinder.prototype._getActualComponentName = function (item) {
        return item instanceof tab_container_item_1.TabContainerItem ? item._activeTabPage().componentName() : item.componentName();
    };
    ExportDialogBinder.prototype._getExportHolderItem = function (item) {
        if (item instanceof tab_container_item_1.TabContainerItem) {
            return this.dashboard()._getDisplayDashboardItem(item._activeTabPage());
        }
        return item;
    };
    ExportDialogBinder.prototype._getInfo = function (items, titleHeight, mode, format) {
        var _this = this;
        var container = this.getContainer().querySelector(".dx-dashboard-viewer"), containerPosition = container ? $(container).offset() : { left: 0, top: 0 }, clientSize = this._getClientSize(container, mode);
        var elementsList = items
            .map(function (item) {
            var holderItem = _this._getExportHolderItem(item);
            var isTabContainer = item instanceof tab_container_item_1.TabContainerItem;
            var itemExportInfo = _this.exportInfoProvider.getItemExportInfo(holderItem.componentName(), mode, isTabContainer);
            if (itemExportInfo) {
                itemExportInfo.position = {
                    left: itemExportInfo.position.left - containerPosition.left,
                    top: itemExportInfo.position.top - containerPosition.top
                };
                if (isTabContainer) {
                    itemExportInfo.name = _this._getActualComponentName(item);
                    itemExportInfo.caption = holderItem.name();
                }
                return itemExportInfo;
            }
            else if (format === 'Excel') {
                return { name: _this._getActualComponentName(item) };
            }
            else {
                return null;
            }
        })
            .filter(function (itemExportInfo) { return !!itemExportInfo; });
        return {
            clientSize: clientSize,
            titleHeight: titleHeight,
            itemsState: elementsList
        };
    };
    ExportDialogBinder.prototype._getFilterFormattableValues = function (dashboard, exportGroupName, item, exportInfo) {
        var excelOptions = exportInfo.DocumentOptions.excelExportOptions;
        var isGroupExport = !!exportGroupName;
        if (exportInfo.Mode === "EntireDashboard") {
            if (!isGroupExport) {
                if (exportInfo.Format === 'Excel' && excelOptions && excelOptions.DashboardStatePosition === 'Below') {
                    return item._getDisplayFilterValuesExternal();
                }
                else {
                    if (item instanceof data_dashboard_item_1.DataDashboardItem && dashboard._masterFilterItems().indexOf(item) !== -1) {
                        return item._getDisplayFilterValues();
                    }
                    else {
                        return [];
                    }
                }
            }
            else {
                if (exportGroupName === item.componentName()) {
                    return this._getGroupExternalDisplayFilterValues(dashboard._dataDashboardItems(), exportGroupName);
                }
                else {
                    return item._getDisplayFilterValues();
                }
            }
        }
        else {
            return item._getDisplayFilterValuesExternal();
        }
    };
    ExportDialogBinder.prototype.exportDashboardTo = function (format, clientOptions, customFileName) {
        this._validateDashboardExport(format);
        var fileName = customFileName ? customFileName : (clientOptions == undefined || clientOptions.fileName == undefined) ? "Export" : clientOptions.fileName, dashboard = this.dashboard(), items = dashboard.items().concat(dashboard.groups());
        var exportOptions = this.exportOptions.convertToExportOptions(clientOptions);
        if (!exportOptions.pdfExportOptions.Title)
            exportOptions.pdfExportOptions.Title = this.dashboard().title.text();
        if (!exportOptions.imageExportOptions.Title)
            exportOptions.imageExportOptions.Title = this.dashboard().title.text();
        if (format === "Excel" && exportOptions.excelExportOptions.Format === "Csv")
            throw new Error("Cannot export an entire dashboard in the CSV format.");
        this._exportTo(items, {
            mode: 'EntireDashboard',
            format: format,
            clientState: this._getInfo(items, this.dashboard().title.visible() ? _dashboard_title_view_constants_1.titleHeight : 0, "EntireDashboard", format),
            fileName: fileName
        }, exportOptions);
    };
    ExportDialogBinder.prototype.exportDashboardItemTo = function (itemComponentName, format, clientOptions, customFileName) {
        var fileName = customFileName ? customFileName : (clientOptions == undefined || clientOptions.fileName == undefined) ? "Export" : clientOptions.fileName, dashboard = this.dashboard(), exportItem = dashboard.findItem(itemComponentName), isGroup = exportItem instanceof group_item_1.GroupItem || exportItem instanceof dashboard_tab_page_1.DashboardTabPage;
        var clientStateItems, dataQueryItems;
        if (isGroup) {
            var dashboardItems = dashboard.items().concat(dashboard.groups());
            var needExportItem = function (item) { return item.parentContainer() === exportItem.componentName(); };
            clientStateItems = dashboardItems.filter(function (item) { return needExportItem(item) || !!item.parentContainer() && needExportItem(dashboard.findItem(item.parentContainer())); });
            dataQueryItems = [exportItem].concat(clientStateItems);
        }
        else {
            clientStateItems = dataQueryItems = [exportItem];
        }
        this._validateExportFormat(format);
        var exportOptions = this.exportOptions.convertToExportOptions(clientOptions);
        if (!exportOptions.pdfExportOptions.Title)
            exportOptions.pdfExportOptions.Title = exportItem.name();
        if (!exportOptions.imageExportOptions.Title)
            exportOptions.imageExportOptions.Title = exportItem.name();
        this._exportTo(dataQueryItems, {
            mode: (isGroup ? 'EntireDashboard' : 'SingleItem'),
            format: format,
            clientState: this._getInfo(clientStateItems, 0, 'SingleItem', format),
            fileName: fileName,
            name: itemComponentName,
            itemType: this._getExportItemType(exportItem)
        }, exportOptions);
    };
    Object.defineProperty(ExportDialogBinder.prototype, "exportDialog", {
        get: function () {
            if (!this._exportDialog) {
                this._exportDialog = new _export_dialog_1.exportDialog({
                    container: this.getContainer(),
                    documentInfo: this.exportOptions,
                    onShown: this.extensionOptions.onExportDialogShown,
                    onShowing: this.extensionOptions.onExportDialogShowing,
                    onHidden: this.extensionOptions.onExportDialogHidden
                });
            }
            return this._exportDialog;
        },
        enumerable: true,
        configurable: true
    });
    ExportDialogBinder.prototype._getExportItemType = function (item) {
        return item ? dashboard_item_1.DashboardItem._getCommonItemType(item.itemType()) : undefined;
    };
    ExportDialogBinder.prototype._getGroupExternalDisplayFilterValues = function (dataDashboardItems, groupName) {
        var itemsInGroup = dataDashboardItems.filter(function (item) { return item.parentContainer() === groupName; });
        var externalMasters = itemsInGroup
            .reduce(function (acc, item) { return acc.concat(item._masterFilterItems()); }, [])
            .filter(function (master, index, array) { return array.indexOf(master) !== index; })
            .filter(function (master) { return itemsInGroup.indexOf(master) === -1; });
        return externalMasters.reduce(function (acc, master) { return acc.concat(master._getDisplayFilterValues()); }, []);
    };
    ExportDialogBinder.prototype._exportTo = function (items, modeInfo, documentOptions) {
        var _this = this;
        var fileName = modeInfo.fileName && modeInfo.fileName.trim() ? modeInfo.fileName.replace(/[\\/:*?"<>|]/g, '_') : "Export";
        var exportInfo = {
            Mode: modeInfo.mode,
            GroupName: modeInfo.name,
            FileName: fileName,
            ClientState: modeInfo.clientState,
            Format: modeInfo.format,
            DocumentOptions: documentOptions,
            ItemType: modeInfo.itemType
        };
        var dashboard = this.dashboard();
        var model = items.map(function (item) {
            var holderItem = _this._getExportHolderItem(item);
            return {
                name: _this._getActualComponentName(item),
                query: holderItem._getDataQueryParams(),
                drillDownFormattableValues: holderItem instanceof data_dashboard_item_1.DataDashboardItem ? _date_utils_1.toStringArray(holderItem._getDisplayDrillDownValues()) : undefined,
                filterFormattableValues: _date_utils_1.toStringArray(_this._getFilterFormattableValues(dashboard, exportInfo.GroupName, holderItem, exportInfo)),
                selectedValues: _date_utils_1.toStringArray(holderItem._getExportingSelection())
            };
        });
        this._serviceClient().performExport(exportInfo, model);
    };
    ExportDialogBinder.prototype._validateExportFormat = function (format) {
        if (this.availableExportFormats.indexOf(format) === -1) {
            throw new Error("A format is specified incorrectly. Use one of the following: 'PDF', 'Image' or 'Excel'.");
        }
    };
    ExportDialogBinder.prototype._validateDashboardExport = function (format) {
        this._validateExportFormat(format);
        if (!this.dashboard()) {
            throw new Error("Cannot perform exporting because the dashboard is not loaded.");
        }
    };
    return ExportDialogBinder;
}());
exports.ExportDialogBinder = ExportDialogBinder;
var ExportInfoManager = (function (_super) {
    __extends(ExportInfoManager, _super);
    function ExportInfoManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._primaryExportInfoProviders = {};
        _this._secondaryExportInfoProviders = {};
        _this._captionExportInfoProviders = {};
        return _this;
    }
    ExportInfoManager.prototype.getItemExportInfo = function (itemName, mode, isCaption) {
        if (mode === 'SingleItem' && this._secondaryExportInfoProviders[itemName]) {
            return this._secondaryExportInfoProviders[itemName]();
        }
        else if (isCaption && this._captionExportInfoProviders[itemName]) {
            return this._captionExportInfoProviders[itemName]();
        }
        else if (this._primaryExportInfoProviders[itemName]) {
            return this._primaryExportInfoProviders[itemName]();
        }
        else {
            return null;
        }
    };
    ExportInfoManager.prototype.registerPrimaryExportItem = function (itemName, getExportInfoFunc) {
        this._primaryExportInfoProviders[itemName] = getExportInfoFunc;
    };
    ExportInfoManager.prototype.unregisterPrimaryExportItem = function (itemName) {
        if (this._primaryExportInfoProviders[itemName]) {
            delete this._primaryExportInfoProviders[itemName];
        }
    };
    ExportInfoManager.prototype.registerSecondaryExportItem = function (itemName, getExportInfoFunc) {
        this._secondaryExportInfoProviders[itemName] = getExportInfoFunc;
    };
    ExportInfoManager.prototype.unregisterSecondaryExportItem = function (itemName) {
        if (this._secondaryExportInfoProviders[itemName]) {
            delete this._secondaryExportInfoProviders[itemName];
        }
    };
    ExportInfoManager.prototype.registerCaptionExportItem = function (itemName, getExportInfoFunc) {
        this._captionExportInfoProviders[itemName] = getExportInfoFunc;
    };
    ExportInfoManager.prototype.unregisterCaptionExportItem = function (itemName) {
        if (this._captionExportInfoProviders[itemName]) {
            delete this._captionExportInfoProviders[itemName];
        }
    };
    ExportInfoManager.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._primaryExportInfoProviders = {};
        this._secondaryExportInfoProviders = {};
        this._captionExportInfoProviders = {};
    };
    return ExportInfoManager;
}(disposable_object_1.DisposableObject));
exports.ExportInfoManager = ExportInfoManager;
