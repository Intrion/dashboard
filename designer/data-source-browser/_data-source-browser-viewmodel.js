/**
* DevExpress Dashboard (_data-source-browser-viewmodel.js)
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
var sql_data_source_1 = require("../../model/data-sources/sql-data-source");
var _data_source_browser_1 = require("../../common/_data-source-browser");
var disposable_object_1 = require("../../model/disposable-object");
var _calc_field_editor_1 = require("../calc-field-editor/_calc-field-editor");
var _field_list_item_provider_1 = require("./item-providers/_field-list-item-provider");
var _helper_classes_1 = require("../../model/internal/_helper-classes");
var _add_data_source_popup_1 = require("./_add-data-source-popup");
var _undo_engine_helper_1 = require("../../model/internal/_undo-engine-helper");
var _filter_utils_1 = require("../filtering/_filter-utils");
var _expression_editor_item_provider_1 = require("../expression-editor/_expression-editor-item-provider");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var json_data_source_1 = require("../../model/data-sources/json-data-source");
var DataSourceBrowserViewModel = (function (_super) {
    __extends(DataSourceBrowserViewModel, _super);
    function DataSourceBrowserViewModel(dataSourceBrowser, dataSourceWizardExtension, accessibleDataSourcesExtension, updateHub) {
        var _this = _super.call(this) || this;
        _this.dataSourceBrowser = dataSourceBrowser;
        _this.dataSourceWizardExtension = dataSourceWizardExtension;
        _this.accessibleDataSourcesExtension = accessibleDataSourcesExtension;
        _this.editDataSourceActions = ko.observableArray();
        _this.addDataSources = function (dataSources) {
            dataSources.forEach(function (dataSource) {
                if (!dataSource.name() || !_helper_classes_1.NameGenerator.isValidName(dataSource.name(), _this.dataSourceBrowser._dataSources(), 'name')) {
                    var prefix = !dataSource.name() ? _default_1.getLocalizationById(dataSource.getDisplayNamePrefix()) : dataSource.name();
                    dataSource.name(_helper_classes_1.NameGenerator.generateName(prefix + " ", _this.dataSourceBrowser._dataSources(), 'name', 1));
                }
                _this.dataSourceBrowser._dataSources.push(dataSource);
                _this.selectedDataSource(dataSource);
            });
        };
        _this.addQuery = function () {
            _this.editQuery(null);
        };
        _this.dataSourceActions = ko.observableArray();
        _this.removeDataSource = function (dataSource) {
            _this._removeDataSource(dataSource);
        };
        _this.usedDataSourcesExist = function () {
            return _this.dataSourceBrowser._dataSources().length > 0;
        };
        _this.availableDataSourcesExist = function () {
            return _this.accessibleDataSourcesExtension() && _this.accessibleDataSourcesExtension().dataSources().length > 0;
        };
        _this.popupContent = ko.observable();
        _this.popupVisible = ko.computed({
            read: function () {
                return !!_this.popupContent();
            },
            write: function (val) {
                if (!val) {
                    _this.popupContent(undefined);
                }
            }
        });
        _this.addCalculatedField = function () {
            if (_this.canAddCalculatedField) {
                var dataSource = _this.selectedDataSource();
                var _a = _data_source_browser_1.findDataMember(dataSource, _data_source_browser_1.trimLeadingPathElement(_this.selectedPath(), dataSource.componentName())), dataMember = _a.dataMember, fieldPath = _a.fieldPath;
                if (!dataMember && dataSource.supportDataMembers) {
                    dataMember = _data_source_browser_1.getFirstDataMember(dataSource);
                }
                var pathInCache = [_this.selectedDataSourceComponentName()].concat(dataMember ? [dataMember] : []);
                _this.calcFieldEditor.showAddDialog(dataSource.componentName(), dataMember)
                    .then(function (calcField) {
                    var newCalculatedFieldPath = pathInCache.concat([calcField.name()]);
                    _this.selectedPath(newCalculatedFieldPath.join("."));
                });
            }
        };
        _this.editCalcField = function (field) {
            _this.calcFieldEditor.showEditDialog(field, _this.selectedDataSourceComponentName(), field.dataMember());
        };
        _this.removeCalcField = function (field) {
            _this.calcFieldEditor.removeCalcField(field, _this.selectedDataSource().componentName());
        };
        _this.treeListController = new DashboardTreeListController();
        _this.selectedPath = ko.observable();
        _this.selectedDataSource = ko.observable();
        _this.filterEditorModel = ko.computed(function () {
            if (_this.selectedDataSource() && _this.selectedDataSource().hasFilter) {
                var filterString = _this.selectedDataSource().filter;
                var options = _filter_utils_1.createItemFilterOptions(filterString, undefined, _this.dataSourceBrowser);
                options().path(_this.selectedDataSource().componentName());
                var filterEditorItemsProvider = new _expression_editor_item_provider_1.ExpressionEditorItemsProvider(_this.dataSourceBrowser, _this.dataSourceBrowser.parameters(), _this.selectedDataSource().componentName, ko.observable(""), function (field) { return !field.isAggregate(); });
                return new dx_analytics_core_1.default.Analytics.Widgets.FilterEditor(options, ko.observable(filterEditorItemsProvider));
            }
            return null;
        });
        _this.editFilter = function () {
            _this.filterEditorModel() && _this.filterEditorModel().popupVisible(true);
        };
        var getFieldsCallback = function (dataSourceName, dataMember, fieldPath) { return _this.dataSourceBrowser.getDataFieldsArray(dataSourceName, dataMember, fieldPath, function () { return true; }); };
        _this.itemsProvider = new _field_list_item_provider_1.FieldListItemProvider(_this, getFieldsCallback);
        _this.calcFieldEditor = new _calc_field_editor_1.CalcFieldEditor(_this.dataSourceBrowser);
        if (dataSourceBrowser._dataSources().length > 0) {
            _this.selectedDataSource(dataSourceBrowser._dataSources()[0]);
        }
        _this.selectedDataSourceComponentName = ko.computed(function () {
            return _this.selectedDataSource() && _this.selectedDataSource().componentName() || "";
        });
        _this.allowAddQuery = ko.computed(function () {
            return _this.selectedDataSource() instanceof sql_data_source_1.SqlDataSource;
        });
        _this.allowEditDataSource = ko.computed(function () {
            return _this.selectedDataSource() instanceof json_data_source_1.JsonDataSource;
        });
        _this.toDispose(_this.allowAddQuery);
        _this.toDispose(_this.allowEditDataSource);
        _this.toDispose(updateHub.dataSourcePropertyChanged.add(function (args) { return _this._onDataSourcePropertyChanged(args); }));
        _this.toDispose(_this.selectedDataSource.subscribe(function (dataSource) {
            _this.selectedPath("");
            if (dataSource instanceof sql_data_source_1.SqlDataSource) {
                var sqlDataSource = dataSource;
                if (sqlDataSource.queries.length > 0)
                    _this._expandQuery(sqlDataSource, sqlDataSource.queries()[0].name());
            }
        }));
        if (_this.accessibleDataSourcesExtension()) {
            _this.dataSourceActions.push({
                click: function () { return _this.showAddDataSourceForm(); },
                text: _default_1.getLocalizationById('DashboardWebStringId.Add'),
                disabled: ko.computed(function () { return !_this.availableDataSourcesExist(); })
            });
        }
        _this.editDataSourceActions.push({
            click: function () { return _this.addCalculatedField(); },
            text: _default_1.getLocalizationById('DashboardWebStringId.DataSources.AddCalculatedField'),
            visible: ko.computed(function () { return _this.canAddCalculatedField; })
        });
        if (_this.canEditDataSource) {
            _this.editDataSourceActions.push({
                click: function () { return _this.addQuery(); },
                text: _default_1.getLocalizationById('DashboardWebStringId.DataSources.AddQuery'),
                visible: ko.computed(function () { return _this.allowAddQuery(); })
            });
            _this.editDataSourceActions.push({
                click: function () { return _this.editDataSource(); },
                text: _default_1.getLocalizationById('DashboardWebStringId.DataSources.Edit'),
                visible: ko.computed(function () { return _this.allowEditDataSource(); })
            });
        }
        _this.editDataSourceActions.push({
            click: function () { return _this.editFilter(); },
            text: _default_1.getLocalizationById('DashboardWebStringId.DataSources.Filter'),
            visible: ko.computed(function () { return _this.filterEditorModel() !== null; })
        });
        return _this;
    }
    DataSourceBrowserViewModel.prototype._expandQuery = function (dataSource, queryName) {
        var _this = this;
        this.dataSourceBrowser.getDataFieldsArray(dataSource.componentName(), queryName, "", _data_source_browser_1.isNonCollectionDataField).done(function (dataFields) {
            if (dataFields.length > 0) {
                _this.selectedPath([dataSource.componentName(), queryName, dataFields[0].name()].join('.'));
            }
        });
    };
    Object.defineProperty(DataSourceBrowserViewModel.prototype, "canEditDataSource", {
        get: function () {
            return !!this.dataSourceWizardExtension();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceBrowserViewModel.prototype, "canEditCustomSqlQueries", {
        get: function () {
            return this.dataSourceWizardExtension() && this.dataSourceWizardExtension().isCustomSqlEnabled || false;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceBrowserViewModel.prototype.refreshFieldList = function () {
        this.dataSourceBrowser.clearFieldsCache(this.selectedDataSourceComponentName());
        this.dataSourceBrowser.initDataSource(this.selectedDataSource());
        this.itemsProvider.triggerItemsChanged();
    };
    DataSourceBrowserViewModel.prototype.showAddDataSourceForm = function () {
        this.popupContent(new _add_data_source_popup_1.AddDataSourcePopup(this.accessibleDataSourcesExtension, this.addDataSources, this.popupVisible));
    };
    DataSourceBrowserViewModel.prototype.editQuery = function (queryName) {
        if (this.canEditDataSource) {
            this.dataSourceWizardExtension().showSqlQueryEditingDialog(this.selectedDataSource(), queryName);
        }
    };
    DataSourceBrowserViewModel.prototype.removeQuery = function (queryName) {
        var sqlDataSource = this.selectedDataSource();
        if (sqlDataSource) {
            var queryToRemove = sqlDataSource.queries().filter(function (query) { return query.name() === queryName; })[0];
            if (queryToRemove) {
                sqlDataSource.queries.remove(queryToRemove);
                sqlDataSource.calculatedFields.remove(function (calcFiled) { return calcFiled.dataMember() === queryName; });
            }
        }
    };
    DataSourceBrowserViewModel.prototype.editDataSource = function () {
        if (this.canEditDataSource) {
            var selectedDataSource = this.selectedDataSource();
            if (selectedDataSource instanceof json_data_source_1.JsonDataSource)
                this.dataSourceWizardExtension()._showEditJsonDataSourceDialog(selectedDataSource);
        }
    };
    DataSourceBrowserViewModel.prototype._removeDataSource = function (dataSource) {
        this.selectedDataSource(null);
        this.dataSourceBrowser.removeDataSource(dataSource);
        if (this.dataSourceBrowser._dataSources().length > 0) {
            this.selectedDataSource(this.dataSourceBrowser._dataSources()[0]);
        }
    };
    Object.defineProperty(DataSourceBrowserViewModel.prototype, "canAddCalculatedField", {
        get: function () {
            return this.calcFieldEditor.canAddCalculatedField(this.selectedDataSourceComponentName());
        },
        enumerable: true,
        configurable: true
    });
    DataSourceBrowserViewModel.prototype._onDataSourcePropertyChanged = function (args) {
        if (!args.propertyName)
            this.refreshFieldList();
        else {
            if (args.dataSource instanceof sql_data_source_1.SqlDataSource) {
                var sqlDataSource = args.dataSource;
                switch (args.propertyName) {
                    case "queries":
                        if (args.status === 'added') {
                            var queryName = args.model.name();
                            this._expandQuery(sqlDataSource, queryName);
                            this.refreshFieldList();
                        }
                        else if (args.status === 'deleted') {
                            this.refreshFieldList();
                        }
                }
            }
            else if (args.dataSource instanceof json_data_source_1.JsonDataSource) {
                switch (args.propertyName) {
                    case "rootElement":
                    case "schema":
                        this.refreshFieldList();
                        break;
                }
            }
            if (args.dataSource.hasCalculatedFields) {
                switch (args.propertyName) {
                    case "fieldType":
                    case "expression":
                        this.refreshFieldList();
                        break;
                    case "calculatedFields":
                        if (args.status === 'added' || args.status === 'deleted')
                            this.refreshFieldList();
                        break;
                }
            }
        }
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DataSourceBrowserViewModel.prototype, "_removeDataSource", null);
    return DataSourceBrowserViewModel;
}(disposable_object_1.DisposableObject));
exports.DataSourceBrowserViewModel = DataSourceBrowserViewModel;
var DashboardTreeListController = (function (_super) {
    __extends(DashboardTreeListController, _super);
    function DashboardTreeListController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardTreeListController.prototype.hasItems = function (item) {
        return item['hasItems'];
    };
    DashboardTreeListController.prototype.canSelect = function (value) {
        return !value.data.isList;
    };
    return DashboardTreeListController;
}(dx_analytics_core_1.default.Analytics.Widgets.Internal.TreeListController));
