/**
* DevExpress Dashboard (_color-tree-view-model.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var ColorEntryTreeItem = (function () {
    function ColorEntryTreeItem(value, entry, editColor, entryComputedColor) {
        this.value = value;
        this.entry = entry;
        this.items = [];
        this.expanded = true;
        this.custom = false;
        if (editColor) {
            this.editColor = function (_, ev) {
                editColor(entry, ev);
            };
            this.custom = entry.custom;
        }
        var entryColor = !!editColor && entryComputedColor;
        this.color = !!entryColor ? entryColor.css : null;
    }
    return ColorEntryTreeItem;
}());
exports.ColorEntryTreeItem = ColorEntryTreeItem;
var ColorTreeViewModel = (function () {
    function ColorTreeViewModel(params) {
        var _this = this;
        this.removeItem = function (item) {
            _this.removeEntry(item.entry);
            _this.selectedEntry(null);
        };
        this.selectedTreeItems = ko.observable([]);
        this.onItemSelectionChanged = function (e) {
            _this.selectedEntry(e.node.itemData.entry);
        };
        this.dataSource = ko.computed(function () {
            var tree = [];
            params.dataSource().forEach(function (entry) {
                var plainValues = entry.dimensionKeys().map(function (dim) { return dim.displayText(); }).concat(entry.measureKeys().map(function (m) { return m.displayText(); }));
                var entryComputedColor = entry.paletteIndex() === null ? entry.color() : params.colorPalette()[entry.paletteIndex()];
                ColorTreeViewModel.construct(plainValues, tree, entry, ko.unwrap(params.editColor), entryComputedColor);
            });
            return tree;
        });
        this.isTreeMode = ko.computed(function () {
            return params.dataSource().length > 0 && (params.dataSource()[0].dimensionKeys().length + params.dataSource()[0].measureKeys().length) > 1;
        });
        this.allowModify = params.allowModify;
        this.selectedEntry = params.selectedEntry;
        this.addNewEntry = params.addNewEntry;
        this.removeEntry = ko.unwrap(params.removeEntry);
    }
    ColorTreeViewModel.construct = function (values, children, entry, editColor, entryComputedColor) {
        if (editColor === void 0) { editColor = function () { }; }
        var value = values.shift();
        var foundChild = children.filter(function (item) { return item.value === value; })[0];
        if (!foundChild && !!value) {
            foundChild = new ColorEntryTreeItem(value, entry, values.length === 0 ? editColor : null, entryComputedColor);
            children.push(foundChild);
        }
        if (foundChild && values.length > 0) {
            ColorTreeViewModel.construct(values, foundChild.items, entry, editColor, entryComputedColor);
        }
    };
    return ColorTreeViewModel;
}());
exports.ColorTreeViewModel = ColorTreeViewModel;
ko.components.register("dx-dashboard-colors-component", {
    viewModel: ColorTreeViewModel,
    template: { element: 'dx-dashboard-colors-view' }
});
