/**
* DevExpress Dashboard (_bound-image-item.js)
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
var _image_item_1 = require("./_image-item");
var BASE64_STRING_PREFIX = 'data:image/png;base64,';
var boundImageItem = (function (_super) {
    __extends(boundImageItem, _super);
    function boundImageItem(container, options) {
        return _super.call(this, container, options) || this;
    }
    boundImageItem.prototype._initializeData = function (newOptions) {
        _super.prototype._initializeData.call(this, newOptions);
        var viewModel = this.options.ViewModel, value = this.dataController ? this.dataController.getImageData() : undefined;
        if (viewModel) {
            if (viewModel.DataBindingMode === 'Uri' && viewModel.UriPattern)
                value = viewModel.UriPattern.replace('{0}', value);
            else
                value = BASE64_STRING_PREFIX + (value || viewModel.DefaultImageBase64String);
        }
        this.imgSrc = value || this._getImageSource(viewModel ? viewModel.ImageViewModel : undefined);
    };
    return boundImageItem;
}(_image_item_1.imageItem));
exports.boundImageItem = boundImageItem;
