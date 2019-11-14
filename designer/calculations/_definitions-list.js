/**
* DevExpress Dashboard (_definitions-list.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var DefinitionsList = (function () {
    function DefinitionsList(params) {
        var _this = this;
        this.params = params;
        this.selection = ko.observable();
        this.edit = function () {
            _this.params.editHandler && _this.params.editHandler() && _this.params.editHandler()(_this.selection());
        };
        this.info = params.info;
        this.originalValues = params.target();
        this.values = ko.computed(function () { return _this.originalValues().filter(function (v) { return params.filter && params.filter() ? params.filter()(v) : true; }); });
        this.disabled = params.disabled;
        if (params.selectedItem) {
            this.selection = params.selectedItem;
        }
        this.editEnabled = ko.computed(function () {
            if (!_this.params.enableEdit || !_this.params.enableEdit()) {
                return true;
            }
            return _this.params.enableEdit()(_this.selection());
        });
    }
    Object.defineProperty(DefinitionsList.prototype, "propertyName", {
        get: function () {
            return this.info().propertyName;
        },
        enumerable: true,
        configurable: true
    });
    return DefinitionsList;
}());
exports.DefinitionsList = DefinitionsList;
ko.components.register("dx-dashboard-definitions-list", {
    viewModel: DefinitionsList,
    template: { element: 'dx-dashboard-definitions-list' }
});
