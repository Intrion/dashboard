/**
* DevExpress Dashboard (title.js)
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
var serializable_model_1 = require("./serializable-model");
var _title_1 = require("./metadata/_title");
var _base_metadata_1 = require("./metadata/_base-metadata");
var ko = require("knockout");
var DashboardTitle = (function (_super) {
    __extends(DashboardTitle, _super);
    function DashboardTitle(model, serializer, info) {
        var _this = _super.call(this, model || {}, serializer, info) || this;
        _this.imageType = ko.observable('none');
        if (_this.image64()) {
            _this.imageType('embedded');
        }
        else if (_this.url()) {
            _this.imageType('linked');
        }
        else {
            _this.imageType('none');
        }
        _this.imageType.subscribe(function (imageType) {
            switch (imageType) {
                case 'embedded':
                    _this.url(null);
                    break;
                case 'linked':
                    _this.image64(null);
                    break;
                default:
                    _this.url(null);
                    _this.image64(null);
            }
        });
        return _this;
    }
    DashboardTitle.prototype.getInfo = function () {
        return _title_1.dashboardTitleSerializationsInfo;
    };
    DashboardTitle.prototype.isPropertyVisible = function (propertyName) {
        if (propertyName === _title_1.titleImage64.propertyName) {
            return this.imageType() === 'embedded';
        }
        if (propertyName === _base_metadata_1.url.propertyName) {
            return this.imageType() === 'linked';
        }
        return true;
    };
    return DashboardTitle;
}(serializable_model_1.SerializableModel));
exports.DashboardTitle = DashboardTitle;
