/**
* DevExpress Dashboard (grid-column-total.js)
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
var serializable_model_1 = require("../../serializable-model");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var GridColumnTotal = (function (_super) {
    __extends(GridColumnTotal, _super);
    function GridColumnTotal(modelJson, serializer) {
        return _super.call(this, modelJson, serializer) || this;
    }
    GridColumnTotal.prototype.getInfo = function () {
        return exports._gridColumnTotalSerializationsInfo;
    };
    GridColumnTotal.prototype._getDefaultItemType = function () {
        return "Total";
    };
    return GridColumnTotal;
}(serializable_model_1.TypedSerializableModel));
exports.GridColumnTotal = GridColumnTotal;
exports._totalTypeTemplate = {
    propertyName: 'totalType', modelName: '@Type', displayName: "DashboardWebStringId.Grid.TotalType", defaultVal: "Count", editor: _base_metadata_1.editorTemplates.combobox,
    addHandler: function () { return new GridColumnTotal({}); }
};
exports._gridColumnTotalSerializationsInfo = [_base_metadata_1.itemType, exports._totalTypeTemplate];
