/**
* DevExpress Dashboard (_base-item-surface.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var disposable_object_1 = require("../../../model/disposable-object");
var _data_source_browser_1 = require("../../../common/_data-source-browser");
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var _confirm_dialog_1 = require("../../_confirm-dialog");
var _filter_1 = require("../../filtering/_filter");
var _filter_utils_1 = require("../../filtering/_filter-utils");
var _item_filter_items_provider_1 = require("../../filtering/_item-filter-items-provider");
var dimension_1 = require("../../../model/data-item/dimension");
var _item_filter_display_name_provider_1 = require("../../filtering/_item-filter-display-name-provider");
var olap_data_source_1 = require("../../../model/data-sources/olap-data-source");
var _undo_engine_helper_1 = require("../../../model/internal/_undo-engine-helper");
var $ = require("jquery");
var ko = require("knockout");
var _default_1 = require("../../../data/localization/_default");
var BaseItemSurface = (function (_super) {
    __extends(BaseItemSurface, _super);
    function BaseItemSurface(dashboardItem, dashboardModel, _dataSourceBrowser) {
        var _this = _super.call(this) || this;
        _this.dashboardItem = dashboardItem;
        _this.dashboardModel = dashboardModel;
        _this._dataSourceBrowser = _dataSourceBrowser;
        _this.showFilterEditor = function () {
            _this.filterEditorModel(_this._createFilterEditor());
            _this.filterEditorModel().popupVisible(true);
        };
        _this.dataSourceName = ko.observable();
        _this.dataMemberName = ko.observable();
        _this.dataSourceDisplayText = ko.computed(function () {
            var dsName = _this.dashboardItem.dataSource();
            if (!!dsName) {
                var dataSource = _this._dataSourceBrowser.findDataSource(dsName);
                if (!!dataSource) {
                    if (dataSource.supportDataMembers && _this._dataSourceBrowser.isLoading()) {
                        return "DashboardStringId.MessageLoading";
                    }
                    return _this.dashboardItem.dataMember() ? dataSource.name() + "/" + _this.dashboardItem.dataMember() : dataSource.name();
                }
            }
            return "DashboardWebStringId.DashboardItemMenu.Bindings.SelectDataSourceButton";
        });
        _this.needSetDataSource = ko.computed(function () {
            var dsName = _this.dashboardItem.dataSource();
            if (!!dsName) {
                var dataSource = _this._dataSourceBrowser.findDataSource(dsName);
                if (!!dataSource && dataSource.supportDataMembers) {
                    return !_this.dashboardItem.dataMember();
                }
                return !dataSource;
            }
            return true;
        });
        _this.changeDataSourcePanelVisible = ko.observable(false);
        _this.template = "dx-dashboard-base-item-surface";
        _this.sections = ko.observableArray([]);
        _this.filterEditorModel = ko.observable(null);
        _this.fillSections();
        if (_this.showDefaultSections) {
            _this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(_this, _section_descriptors_1.SectionDescriptors.HiddenDimensions, _this.extendHiddenDimensionsTabs.bind(_this)));
            _this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(_this, _section_descriptors_1.SectionDescriptors.HiddenMeasures, _this.extendHiddenMeasuresTabs.bind(_this)));
        }
        _this.confirmDialogViewModel = new _confirm_dialog_1.ConfirmDialogViewModel();
        _this.toDispose(_this.dataSourceDisplayText);
        _this.sections().forEach(function (section) { return _this.toDispose(section); });
        return _this;
    }
    Object.defineProperty(BaseItemSurface.prototype, "showDefaultSections", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    BaseItemSurface.prototype.fillSections = function () {
    };
    BaseItemSurface.prototype.extendHiddenDimensionsTabs = function (tabs, model) {
    };
    BaseItemSurface.prototype.extendHiddenMeasuresTabs = function (tabs, model) {
    };
    BaseItemSurface.prototype.getPropertiesComposer = function () {
        throw "'getPropertiesComposer' method is not implemented.";
    };
    BaseItemSurface.prototype._createFilterEditor = function () {
        if (this.isOlap) {
            return new _filter_1.SimpleFilterEditor(this.dashboardItem, this._dataSourceBrowser);
        }
        else {
            var filterOptions = _filter_utils_1.createItemFilterOptions(this.dashboardItem.filterString, this, this._dataSourceBrowser);
            return new dx_analytics_core_1.default.Analytics.Widgets.FilterEditor(filterOptions, ko.observable(new _item_filter_items_provider_1.ItemFilterItemsProvider(this._dataSourceBrowser, this._dataSourceBrowser.parameters, this.dashboardItem, function (di) { return di instanceof dimension_1.Dimension; })), false, new _item_filter_display_name_provider_1.ItemFilterDisplayNameProvider(this.dashboardItem, this._dataSourceBrowser));
        }
    };
    Object.defineProperty(BaseItemSurface.prototype, "isOlap", {
        get: function () {
            return this._dataSourceBrowser.findDataSource(this.dashboardItem.dataSource()) instanceof olap_data_source_1.OlapDataSource;
        },
        enumerable: true,
        configurable: true
    });
    BaseItemSurface.prototype.changeDataSource = function () {
        if (!this.changeDataSourcePanelVisible()) {
            this.dataSourceName(this.dashboardItem.dataSource());
            this.dataMemberName(this.dashboardItem.dataMember());
        }
        this.changeDataSourcePanelVisible(!this.changeDataSourcePanelVisible());
    };
    BaseItemSurface.prototype._changeDataSource = function () {
        this.clearDataBindings();
        this.dashboardItem.dataSource(this.dataSourceName());
        this.dashboardItem.dataMember(this.dataMemberName());
    };
    BaseItemSurface.prototype.saveDataSourceChanges = function () {
        var _this = this;
        if (this.dataSourceName() != this.dashboardItem.dataSource() || this.dataMemberName() != this.dashboardItem.dataMember()) {
            var saveAction = function () {
                if (!!_this.propertiesController) {
                    _this.propertiesController.mainModel(null);
                }
                _this._changeDataSource();
                _this.changeDataSourcePanelVisible(false);
            };
            if (this.dashboardItem.dataItems().length > 0) {
                var result = this.confirmDialogViewModel.confirm(_default_1.getLocalizationById("DashboardWebStringId.Dialog.ConfirmChanges"), _default_1.getLocalizationById("DashboardWebStringId.Dialog.ChangeDataMemberMessage")
                    + "<br/>" + _default_1.getLocalizationById("DashboardWebStringId.Dialog.RemovedDataItemsMessage"), _default_1.getLocalizationById("DashboardWebStringId.Dialog.ButtonYes"), _default_1.getLocalizationById("DashboardWebStringId.Dialog.ButtonDontChange"));
                result.done(function (dialogResult) {
                    if (dialogResult)
                        saveAction();
                });
            }
            else
                saveAction();
        }
        else {
            this.changeDataSourcePanelVisible(false);
        }
    };
    BaseItemSurface.prototype.clearDataBindings = function () {
        this.sections().forEach(function (section) {
            if (section.items) {
                var array = [].concat(section.items());
                array.forEach(function (item) {
                    section.removeDataItem(item);
                });
            }
        });
    };
    Object.defineProperty(BaseItemSurface.prototype, "dataSourceBrowser", {
        get: function () {
            var _this = this;
            return {
                getDataFieldsArray: function (dataSourceName) {
                    var deferred = $.Deferred();
                    if (!dataSourceName) {
                        return deferred.resolve(_this.dashboardModel.dataSources().map(function (ds) {
                            return {
                                dataSourceName: ds.componentName(),
                                dataMemberName: "",
                                dataMember: ds.componentName,
                                name: ds.componentName,
                                displayName: ds.name,
                                fieldType: ko.observable('Unknown'),
                                isDataFieldNode: ko.observable(!ds.supportDataMembers)
                            };
                        })).promise();
                    }
                    _this._dataSourceBrowser.getDataFieldsArray(dataSourceName, "", "", _data_source_browser_1.isNonCollectionDataField).done(function (dataMembers) {
                        deferred.resolve(dataMembers.map(function (dm) {
                            return {
                                dataSourceName: dataSourceName,
                                dataMemberName: dm.dataMember(),
                                dataMember: dm.dataMember,
                                name: dm.name,
                                displayName: dm.displayName,
                                fieldType: dm.fieldType,
                                isDataFieldNode: ko.observable(true)
                            };
                        }));
                    });
                    return deferred.promise();
                },
                splitFullPath: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return _this._dataSourceBrowser.splitFullPath.apply(_this._dataSourceBrowser, args);
                },
                findDataSource: function (dataSourceName) { return _this._dataSourceBrowser.findDataSource(dataSourceName); }
            };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], BaseItemSurface.prototype, "_changeDataSource", null);
    return BaseItemSurface;
}(disposable_object_1.DisposableObject));
exports.BaseItemSurface = BaseItemSurface;
