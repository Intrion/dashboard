/**
* DevExpress Dashboard (serializable-model.js)
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
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var SerializableModel = (function () {
    function SerializableModel(model, serializer, info) {
        serializer = serializer || new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer();
        serializer.deserialize(this, model || {}, info);
    }
    return SerializableModel;
}());
exports.SerializableModel = SerializableModel;
var TypedSerializableModel = (function (_super) {
    __extends(TypedSerializableModel, _super);
    function TypedSerializableModel(model, serializer, info) {
        var _this = _super.call(this, model, serializer, info) || this;
        !_this.itemType() && _this.itemType(_this._getDefaultItemType());
        return _this;
    }
    TypedSerializableModel.prototype._getUniqueNamePrefix = function () {
        return this.itemType().charAt(0).toLowerCase() + this.itemType().slice(1);
    };
    return TypedSerializableModel;
}(SerializableModel));
exports.TypedSerializableModel = TypedSerializableModel;
exports.itemTypesMap = {};
