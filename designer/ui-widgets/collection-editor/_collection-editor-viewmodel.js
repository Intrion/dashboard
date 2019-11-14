/**
* DevExpress Dashboard (_collection-editor-viewmodel.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var $ = require("jquery");
var ko = require("knockout");
var CollectionEditorEditItemArguments = (function () {
    function CollectionEditorEditItemArguments() {
        this.requestRecalculation = $.Callbacks();
        this.createImmediately = true;
    }
    return CollectionEditorEditItemArguments;
}());
exports.CollectionEditorEditItemArguments = CollectionEditorEditItemArguments;
var CollectionEditor = (function () {
    function CollectionEditor(params) {
        var _this = this;
        this.params = params;
        this.internalSelection = ko.observable();
        this.item2Edit = ko.observable();
        this.headerVisible = ko.observable(true);
        this.getItemText = function (item) {
            if (_this.getDisplayText) {
                return _this.getDisplayText(item);
            }
            return ko.unwrap(item[_this.propertyName]) || 'Enter the value...';
        };
        this.select = function (model) {
            var forceEditing = model.itemData && model.itemData.forceEdit && model.itemData.forceEdit();
            if (_this.selection() !== model.itemData) {
                _this.item2Edit(undefined);
                _this.selection(model.itemData);
                if (!forceEditing)
                    return;
            }
            if (_this.info.editHandler) {
                if (!_this.selection().allowEdit || _this.selection().allowEdit())
                    _this.info.editHandler(model.itemData, new CollectionEditorEditItemArguments());
            }
            else if (_this.item2Edit() !== model.itemData) {
                _this.item2Edit(model.itemData);
            }
        };
        this.add = function () {
            var newItem = _this.info.addHandler();
            if (!!newItem) {
                _this.selection(newItem);
                var addToArray = function () {
                    if (_this.originalValues().indexOf(newItem) === -1) {
                        _this.originalValues().push(newItem);
                    }
                };
                if (_this.info.editHandler) {
                    var args = new CollectionEditorEditItemArguments();
                    _this.info.editHandler(newItem, args);
                    if (args.createImmediately) {
                        addToArray();
                    }
                    else {
                        args.requestRecalculation.add(addToArray);
                    }
                }
                else {
                    addToArray();
                    _this.item2Edit(newItem);
                }
            }
        };
        this.edit = function () {
            _this.select({ itemData: _this.selection() });
        };
        this.remove = function () {
            var index = _this.originalValues().indexOf(_this.selection());
            _this.originalValues().remove(_this.selection());
            _this.item2Edit(undefined);
            _this.selection(_this.originalValues()()[index < _this.originalValues()().length ? index : index - 1]);
        };
        this.up = function () {
            if (_this.upEnabled()) {
                var index = _this.originalValues().indexOf(_this.selection());
                _this.originalValues().splice(index, 1);
                _this.originalValues().splice(index - 1, 0, _this.selection());
            }
        };
        this.down = function () {
            if (_this.downEnabled()) {
                var index = _this.originalValues().indexOf(_this.selection());
                _this.originalValues().splice(index, 1);
                _this.originalValues().splice(index + 1, 0, _this.selection());
            }
        };
        this.editorOptions = ko.unwrap(params.editorOptions) || {};
        this.getDisplayText = ko.unwrap(params.getDisplayText);
        if (params.headerVisible !== undefined) {
            this.headerVisible(ko.unwrap(params.headerVisible));
        }
        this.originalValues = params.target;
        this.values = ko.computed(function () { return _this.originalValues()().filter(function (v) { return params.filter && params.filter() ? params.filter()(v) : true; }); });
        this.selection = ko.computed({
            read: function () {
                return ko.unwrap(params.selectedItem) || _this.internalSelection();
            },
            write: function (val) {
                if (params.selectedItem) {
                    params.selectedItem(val);
                }
                _this.internalSelection(val);
            }
        });
        this.addEnabled = ko.computed(function () { return !_this.info.allowAdd || _this.info.allowAdd(); });
        this.upEnabled = ko.computed(function () { return _this.values().indexOf(_this.selection()) > 0; });
        this.downEnabled = ko.computed(function () {
            var index = _this.values().indexOf(_this.selection());
            return index !== -1 && index < _this.values().length - 1;
        });
        var buttonsVisibility = this.info.buttonsVisibility;
        this.addVisible = ko.observable(!buttonsVisibility || !buttonsVisibility.add || buttonsVisibility.add());
        this.editVisible = ko.observable(!buttonsVisibility || !buttonsVisibility.edit || buttonsVisibility.edit());
        this.updownVisible = ko.observable(!buttonsVisibility || !buttonsVisibility.updown || buttonsVisibility.updown());
        this.removeVisible = ko.observable(!buttonsVisibility || !buttonsVisibility.remove || buttonsVisibility.remove());
        this.customActions = ko.observableArray(this.info.customActions);
        this.noDataText = !!params.noDataText ? params.noDataText : "DashboardWebStringId.CollectionEditor.NoItems";
    }
    Object.defineProperty(CollectionEditor.prototype, "info", {
        get: function () {
            if (!!this.params.getInfo && !!this.params.getInfo()) {
                return this.params.getInfo()(this.selection());
            }
            return this.params.info();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionEditor.prototype, "propertyName", {
        get: function () {
            return this.info.propertyName;
        },
        enumerable: true,
        configurable: true
    });
    CollectionEditor.prototype.createEditor = function () {
        var editorType = this.info.editor && this.info.editor.editorType || dx_analytics_core_1.default.Analytics.Widgets.Editor;
        var editor = new editorType(this.info, 0);
        editor._model(this.selection());
        return editor;
    };
    CollectionEditor.prototype.createTemplate = function (itemModel) {
        return {
            name: this.info.customTemplate || "dx-dashboard-collection-editor-default-item-editor",
            data: {
                itemModel: itemModel,
                parent: this
            }
        };
    };
    CollectionEditor.prototype.dispose = function () {
        this.values.dispose();
        this.selection.dispose();
        this.addEnabled.dispose();
        this.upEnabled.dispose();
        this.downEnabled.dispose();
    };
    return CollectionEditor;
}());
exports.CollectionEditor = CollectionEditor;
ko.components.register("dx-dashboard-collection-editor", {
    viewModel: CollectionEditor,
    template: { element: 'dx-dashboard-collection-editor' }
});
ko.components.register("dx-dashboard-collection-item-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var collectionEditor = params.collectionEditor;
            var editor = collectionEditor.createEditor();
            return {
                name: editor.templateName,
                data: editor,
                afterRender: function () {
                    var $input = $(componentInfo.element).children().find("input");
                    $input.keydown(function (e) {
                        if (e.keyCode == 13 || e.keyCode == 27) {
                            $input.parents(".dx-dashboard-collection-editor-items").focus();
                            collectionEditor.item2Edit(undefined);
                        }
                    });
                    $input.focus();
                }
            };
        }
    },
    template: { element: 'dx-dashboard-collection-item-editor' }
});
ko.components.register("dx-dashboard-collection-editor-item-editor", {
    viewModel: {
        createViewModel: function (params) {
            var itemModel = params.itemModel;
            var collectionEditor = params.parent;
            var template = collectionEditor.createTemplate(itemModel);
            return template;
        }
    },
    template: { element: "dx-dashboard-collection-editor-item-editor" }
});
