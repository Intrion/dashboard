﻿/**
* DevExpress Dashboard (_field-chooser-surface.js)
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
var _data_field_1 = require("../../../model/data-sources/_data-field");
var _data_source_browser_1 = require("../../../common/_data-source-browser");
var _calc_field_editor_1 = require("../../calc-field-editor/_calc-field-editor");
require("devextreme/ui/text_box");
var text_box_1 = require("devextreme/ui/text_box");
require("devextreme/ui/scroll_view");
var scroll_view_1 = require("devextreme/ui/scroll_view");
var $ = require("jquery");
var ko = require("knockout");
var _utils_1 = require("../../../data/_utils");
var _default_1 = require("../../../data/localization/_default");
var commonSelectedFieldName;
var isListMode = ko.observable(_utils_1.LocalStorageHelper.getItem("dx-dashboard-field-chooser-is-list-mode") === "true");
var FieldChooserItem = (function () {
    function FieldChooserItem(data) {
        this.data = data;
    }
    FieldChooserItem.getName = function (data) {
        return data.nodeType && data.nodeType().toLowerCase().indexOf("olap") !== -1 ? data.dataMember() : data.name();
    };
    Object.defineProperty(FieldChooserItem.prototype, "displayName", {
        get: function () {
            return this.data.displayName();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "name", {
        get: function () {
            return FieldChooserItem.getName(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "isHierarchy", {
        get: function () {
            return this.data.nodeType && this.data.nodeType() === "OlapHierarchy";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "isLeaf", {
        get: function () {
            return this.data.isDataFieldNode();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "isGroup", {
        get: function () {
            return !this.isLeaf && !this.isList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "type", {
        get: function () {
            return this.data.isDataFieldNode() ? this.data.fieldType() : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "normalizedType", {
        get: function () {
            if (this.isList)
                return "list";
            if (!this.isLeaf || this.type === undefined) {
                return "";
            }
            switch (this.type) {
                case "Text":
                    return "string";
                case "Integer":
                    return "integer";
                case "Float":
                case "Double":
                case "Decimal":
                    return "float";
                case "DateTime":
                    return "datetime";
                case "Bool":
                case "Boolean":
                    return "boolean";
                case "Binary":
                case "ByteArray":
                    return "binary";
            }
            return "object";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "isCalcField", {
        get: function () {
            return this.data.nodeType && this.data.nodeType() === "CalculatedDataField";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "isOlap", {
        get: function () {
            return _data_field_1.DataField.isOlap(this.data.dataMember());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "isOlapDimension", {
        get: function () {
            return this.data.nodeType && this.data.nodeType() === "OlapDimension";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "isOlapDimensionHierarchy", {
        get: function () {
            return this.data.nodeType && this.data.nodeType() === "OlapHierarchy";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "isOlapMeasure", {
        get: function () {
            return this.data.nodeType && (this.data.nodeType() === "OlapMeasure" || this.data.nodeType() === "OlapMeasureFolder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "isList", {
        get: function () {
            return !_data_source_browser_1.isNonCollectionDataField(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "disabled", {
        get: function () {
            return this.isList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserItem.prototype, "typeTooltip", {
        get: function () {
            return this.isList ? _default_1.getLocalizationById('DashboardStringId.MessageCollectionTypesNotSupported') : this.data.fieldType();
        },
        enumerable: true,
        configurable: true
    });
    return FieldChooserItem;
}());
exports.FieldChooserItem = FieldChooserItem;
var TreeViewFieldChooserItem = (function (_super) {
    __extends(TreeViewFieldChooserItem, _super);
    function TreeViewFieldChooserItem(data, id, parentId) {
        var _this = _super.call(this, data) || this;
        _this.data = data;
        _this.id = id;
        _this.parentId = parentId;
        _this.selected = undefined;
        return _this;
    }
    return TreeViewFieldChooserItem;
}(FieldChooserItem));
exports.TreeViewFieldChooserItem = TreeViewFieldChooserItem;
var FieldChooserList = (function () {
    function FieldChooserList(owner, path, pathParts, _selectedField) {
        if (path === void 0) { path = ''; }
        var _this = this;
        this.owner = owner;
        this.path = path;
        this.pathParts = pathParts;
        this._selectedField = _selectedField;
        this.itemClick = function (args) {
            var item = args.itemData;
            if (!item.isLeaf) {
                _this.owner.slide(_this, item);
            }
            else {
                commonSelectedFieldName = item.data && item.data.dataMember();
                if (!_this._selectedField() || (_this._selectedField().dataMember() !== item.data.dataMember()) || ((item.data["dataSourceName"]))) {
                    _this._selectedField(item.data);
                }
            }
        };
        this.items = ko.observableArray();
        this.index = ko.observable(0);
        this.ready = ko.observable(false);
        this.selectedItemName = ko.observable();
        this.loading = ko.observable(true);
        var fieldSelector = function (field) {
            if (field && ((field.dataMember() !== _this.selectedItemName()) || field["dataSourceName"])) {
                _this.selectedItemName(field.dataMember());
            }
        };
        _selectedField.subscribe(fieldSelector);
        fieldSelector(_selectedField());
        this.reload();
        this.ancestors = pathParts && pathParts.length ? ["…"].concat(pathParts) : null;
    }
    FieldChooserList.prototype.reload = function () {
        var _this = this;
        this.items.removeAll();
        var loadingTimeout = setTimeout(function () { return _this.loading(true); }, 25);
        var _a = this.owner.dataSourceBrowser.splitFullPath(this.path), dataSource = _a.dataSource, dataMember = _a.dataMember, fieldPath = _a.fieldPath;
        this.owner.dataSourceBrowser.getDataFieldsArray(dataSource, dataMember, fieldPath, function () { return true; }).done(function (fields) {
            clearTimeout(loadingTimeout);
            fields
                .filter(function (field) { return !_this.owner.filter || _this.owner.filter(field); })
                .forEach(function (field) { return _this.items.push(new FieldChooserItem(field)); });
            _this.loading(false);
            setTimeout(function () {
                _this.owner.listChanged && _this.owner.listChanged();
            }, 1);
        });
    };
    return FieldChooserList;
}());
exports.FieldChooserList = FieldChooserList;
var SliderController = (function () {
    function SliderController(params) {
        var _this = this;
        this.lists = ko.observableArray();
        this.isSliding = false;
        this.backClick = function (pathItem, ancestors) {
            if (!_this.isSliding) {
                _this.isSliding = true;
                var pathIndex = ancestors.length - 1 - ancestors.indexOf(pathItem);
                _this.lists().forEach(function (list) { return list.index(list.index() + pathIndex); });
                setTimeout(function () {
                    _this.lists.splice(_this.lists().length - pathIndex);
                    _this.isSliding = false;
                    _this.listChanged && _this.listChanged();
                }, FieldChooserController.TRANSITION_TIME);
            }
        };
        this.rootPath = params.startPath;
        this.dataSourceBrowser = params.dataSourceBrowser;
        this.filter = params.filter;
        this.selectedField = params.selectedField;
        this.listChanged = params.listChanged;
        this.lists([new FieldChooserList(this, this.rootPath(), [], this.selectedField)]);
        this.lists()[0].ready(true);
    }
    SliderController.prototype.slide = function (list, item) {
        var _this = this;
        if (!this.isSliding) {
            this.isSliding = true;
            var newList = new FieldChooserList(this, list.path === '' ? item.name : list.path + '.' + item.name, list.pathParts.concat([item.name]), this.selectedField);
            newList.index(1);
            this.lists.push(newList);
            setTimeout(function () {
                newList.ready(true);
                _this.lists().forEach(function (list) { return list.index(list.index() - 1); });
                setTimeout(function () {
                    _this.isSliding = false;
                    _this.listChanged && _this.listChanged();
                }, FieldChooserController.TRANSITION_TIME);
            }, 1);
        }
    };
    SliderController.TRANSITION_TIME = 310;
    return SliderController;
}());
exports.SliderController = SliderController;
function getScrollViewUpdater(element) {
    return function () {
        var scrollView = element.querySelector(".dx-scrollview");
        var dxScrollViewInstance = scroll_view_1.default.getInstance(scrollView);
        if (!!dxScrollViewInstance) {
            var nodes = scrollView.querySelectorAll(".dx-field-chooser-list");
            var $list = $(nodes[nodes.length - 1]);
            $list.parent().height($list.height());
            dxScrollViewInstance.update();
            dxScrollViewInstance.scrollToElement(scrollView.querySelector(".dx-field-chooser-list-item.dx-state-focused"));
        }
    };
}
exports.getScrollViewUpdater = getScrollViewUpdater;
var FieldChooserController = (function (_super) {
    __extends(FieldChooserController, _super);
    function FieldChooserController(params) {
        var _this = _super.call(this, params) || this;
        _this.addCalcField = function () {
            var _a = _this.dataSourceBrowser.splitFullPath(_this.rootPath()), dataSource = _a.dataSource, dataMember = _a.dataMember, fieldPath = _a.fieldPath;
            _this.calcFieldEditor
                .showAddDialog(dataSource, dataMember)
                .then(function (cf) {
                _this.onCalcFieldSaveHandler(cf);
            });
        };
        _this.editCalcField = function () {
            var _a = _this.dataSourceBrowser.splitFullPath(_this.rootPath()), dataSource = _a.dataSource, dataMember = _a.dataMember, fieldPath = _a.fieldPath;
            var calcField = _this.getCurrentCalcField();
            _this.calcFieldEditor
                .showEditDialog(calcField, dataSource, dataMember)
                .then(function (cf) {
                _this.onCalcFieldSaveHandler(cf);
            });
        };
        _this.removeCalcField = function () {
            var _a = _this.dataSourceBrowser.splitFullPath(_this.rootPath()), dataSource = _a.dataSource, dataMember = _a.dataMember, fieldPath = _a.fieldPath;
            var calcField = _this.getCurrentCalcField();
            _this.calcFieldEditor
                .removeCalcField(calcField, dataSource)
                .then(function (cf) {
                _this.onCalcFieldSaveHandler(cf);
            });
        };
        _this.onCalcFieldSaveHandler = function (calcField) {
            var _a = _this.dataSourceBrowser.splitFullPath(_this.rootPath()), dataSource = _a.dataSource, dataMember = _a.dataMember, fieldPath = _a.fieldPath;
            var updateUI = function () {
                if (_this.isListMode.peek()) {
                    var list = _this.lists()[0];
                    list.reload();
                }
                else {
                    _this.treeViewInstanceResolver.then(function (treeViewInstance) { return treeViewInstance.option("dataSource", treeViewInstance.option("dataSource")); });
                }
            };
            updateUI();
            _this.dataSourceBrowser
                .findDataField(dataSource, dataMember, calcField.name())
                .then(function (field) {
                _this.selectedField(field);
                _this._navigateToSelection(field.dataMember());
                return field;
            })
                .then(updateUI);
        };
        _this.getCurrentCalcField = function () {
            if (!_this.selectedField())
                return null;
            var _a = _this.dataSourceBrowser.splitFullPath(_this.rootPath()), dataSource = _a.dataSource, dataMember = _a.dataMember, fieldPath = _a.fieldPath;
            var dataSourceInstance = _this.dataSourceBrowser.findDataSource(dataSource);
            if (!dataSourceInstance.hasCalculatedFields)
                return null;
            return dataSourceInstance.calculatedFields().filter(function (cf) { return cf.name() == _this.selectedField().name(); })[0];
        };
        _this.isCalcFieldSelected = ko.pureComputed(function () {
            return _this.selectedField() && _this.selectedField().nodeType && _this.selectedField().nodeType() === "CalculatedDataField";
        });
        _this.isSearchMode = ko.observable(false);
        _this.searchString = ko.observable().extend({ throttle: 300 });
        _this.searchResults = ko.observableArray();
        _this.hasSearchResults = ko.observable(false);
        _this.searchButtonClick = function (_, ev) {
            var newValue = !_this.isSearchMode();
            _this.isSearchMode(newValue);
            if (newValue) {
                var textBoxContainer = ev.currentTarget.parentElement.parentElement.querySelector('.dx-textbox');
                var textBox_1 = text_box_1.default.getInstance(textBoxContainer);
                setTimeout(function () {
                    textBox_1.focus();
                    textBox_1.reset();
                }, 100);
            }
            else {
                _this.searchString(null);
            }
        };
        _this.selectViaSearchResults = function (data) {
            var searchResultItem = data.itemData;
            if ((searchResultItem.item.data.dataMember != null) &&
                (!_this.selectedField() || (searchResultItem.item.data.dataMember() !== _this.selectedField().dataMember()))) {
                _this.selectedField(searchResultItem.item.data);
            }
        };
        _this.selectedSearchResult = ko.computed(function () {
            return _this.searchResults().filter(function (res) { return res.item.data.dataMember && _this.selectedField() && res.item.data.dataMember() === _this.selectedField().dataMember(); })[0];
        });
        _this.isListMode = isListMode;
        _this.setListMode = function () {
            isListMode(true);
            _utils_1.LocalStorageHelper.setItem("dx-dashboard-field-chooser-is-list-mode", "true");
            _this.lists().forEach(function (list, index) { return list.index.notifySubscribers(); });
            _this.listChanged();
        };
        _this.setTreeMode = function () {
            isListMode(false);
            _utils_1.LocalStorageHelper.setItem("dx-dashboard-field-chooser-is-list-mode", "false");
        };
        _this.hasGroups = ko.computed(function () { return !_this.lists()[0].items().every(function (item) { return item.isLeaf; }); });
        _this.treeViewInstanceResolver = $.Deferred();
        var selectedFieldName = _this.selectedField() && _this.selectedField().dataMember() || commonSelectedFieldName;
        _this._navigateToSelection(selectedFieldName);
        if (!_this.selectedField()) {
            var navigationSubscription = _this.selectedField.subscribe(function (newSelection) {
                if (newSelection) {
                    _this._navigateToSelection(newSelection.dataMember());
                    navigationSubscription.dispose();
                }
            });
        }
        _this.searchString.subscribe(function (searchFor) {
            _this.searchResults([]);
            _this.hasSearchResults(false);
            if (!!searchFor) {
                _this.dataSourceBrowser.fuzzyFindFields(_this.rootPath(), searchFor).done(function (res) {
                    _this.searchResults(res
                        .filter(function (item) { return item.field.isDataFieldNode() && (!_this.filter || _this.filter(item.field)); })
                        .map(function (item) { return ({
                        path: _this.dataSourceBrowser.splitFullPath(item.path).fieldPath,
                        item: new FieldChooserItem(item.field)
                    }); }));
                    _this.hasSearchResults(true);
                });
            }
        });
        ko.computed(function () {
            if (!_this.hasGroups() && !_this.isListMode.peek()) {
                _this.isListMode(true);
            }
        });
        _this.calcFieldEditor = new _calc_field_editor_1.CalcFieldEditor(_this.dataSourceBrowser);
        return _this;
    }
    Object.defineProperty(FieldChooserController.prototype, "dataSourceName", {
        get: function () {
            var _a = this.dataSourceBrowser.splitFullPath(this.rootPath()), dataSource = _a.dataSource, dataMember = _a.dataMember, fieldPath = _a.fieldPath;
            return dataSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldChooserController.prototype, "canAddCalculatedField", {
        get: function () {
            return this.calcFieldEditor.canAddCalculatedField(this.dataSourceName);
        },
        enumerable: true,
        configurable: true
    });
    FieldChooserController.prototype._navigateToSelection = function (selectedFieldName) {
        var _this = this;
        if (!selectedFieldName) {
            return;
        }
        var pathComponents = (this.rootPath() || "").split(".");
        var fieldChooserConstraint = function (field) { return !_this.filter || _this.filter(field); };
        this.dataSourceBrowser.findPathToFieldInTree(pathComponents.shift(), pathComponents.join("."), selectedFieldName, fieldChooserConstraint)
            .done(function (fieldPath) {
            if (_this.isListMode()) {
                if (fieldPath) {
                    if (_this.lists().length === 1) {
                        _this.lists()[0].ready(false);
                        var selectionList = fieldPath.split(".");
                        var currentPath = _this.rootPath(), currentPathParts = [];
                        selectionList.forEach(function (pathItem, index) {
                            currentPath = currentPath + '.' + pathItem;
                            if (_this.dataSourceBrowser.isFolder(currentPath)) {
                                currentPathParts = currentPathParts.concat(pathItem);
                                var newList = new FieldChooserList(_this, currentPath, currentPathParts, _this.selectedField);
                                newList.index(index + 1);
                                _this.lists.push(newList);
                            }
                        });
                    }
                    _this.isSliding = true;
                    _this.lists().forEach(function (list, index) { return list.index(index - _this.lists().length + 1); });
                    setTimeout(function () {
                        _this.lists().forEach(function (list) { return list.ready(true); });
                        _this.listChanged && _this.listChanged();
                        _this.isSliding = false;
                    }, 1);
                }
                else {
                    _this.isSliding = true;
                    _this.lists().forEach(function (list, index) { return list.index(index); });
                    setTimeout(function () {
                        _this.isSliding = false;
                        _this.lists([_this.lists()[0]]);
                        _this.lists().forEach(function (list) { return list.ready(true); });
                    }, SliderController.TRANSITION_TIME);
                }
            }
            else {
                _this.treeViewInstanceResolver.then(function (treeViewInstance) {
                    if (fieldPath) {
                        var keys = fieldPath.split(".");
                        var nextNodeKey = _this.rootPath(), num = 1;
                        while (keys.length) {
                            var keyparts = keys.splice(0, num);
                            var key = keyparts.join(".");
                            num++;
                            nextNodeKey = nextNodeKey + "." + key;
                            treeViewInstance.expandItem(nextNodeKey);
                        }
                    }
                });
            }
        });
    };
    Object.defineProperty(FieldChooserController.prototype, "dataSourceTreeOptions", {
        get: function () {
            var _this = this;
            return {
                dataSource: {
                    load: function (options) {
                        var parentId = options.filter && options.filter[1] || _this.rootPath();
                        var result = $.Deferred();
                        var _a = _this.dataSourceBrowser.splitFullPath(parentId), dataSource = _a.dataSource, dataMember = _a.dataMember, fieldPath = _a.fieldPath;
                        _this.dataSourceBrowser.getDataFieldsArray(dataSource, dataMember, fieldPath, function () { return true; }).then(function (fields) {
                            var data = fields
                                .filter(function (field) { return !_this.filter || _this.filter(field); })
                                .map(function (field) {
                                var name = FieldChooserItem.getName(field);
                                var item = new TreeViewFieldChooserItem(field, parentId + "." + name, parentId === _this.rootPath ? undefined : parentId);
                                item.selected = _this.selectedField() && (field.dataMember() === _this.selectedField().dataMember());
                                return item;
                            });
                            result.resolve(data);
                        });
                        return result.promise();
                    },
                },
                rootValue: this.rootPath(),
                dataStructure: "plain",
                keyExpr: "id",
                parentIdExpr: "parentId",
                hasItemsExpr: "isGroup",
                showCheckBoxesMode: "none",
                selectNodesRecursive: false,
                selectionMode: "single",
                onItemClick: function (args) {
                    var field = args.itemData.data;
                    if (field.isDataFieldNode()) {
                        args.component.selectItem(args.itemData);
                    }
                },
                onItemSelectionChanged: function (model) {
                    var field = model.itemData.data;
                    commonSelectedFieldName = field && field.dataMember();
                    if (!_this.selectedField() || (_this.selectedField().dataMember() !== field.dataMember())) {
                        _this.selectedField(field);
                    }
                },
                virtualModeEnabled: true,
                onInitialized: function (e) { return _this.treeViewInstanceResolver.resolve(e.component); }
            };
        },
        enumerable: true,
        configurable: true
    });
    return FieldChooserController;
}(SliderController));
exports.FieldChooserController = FieldChooserController;
ko.components.register('dx-field-chooser', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            params.listChanged = getScrollViewUpdater(componentInfo.element);
            return new FieldChooserController(params);
        }
    },
    template: { element: 'dx-field-chooser-slider' }
});
