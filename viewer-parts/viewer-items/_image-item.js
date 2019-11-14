/**
* DevExpress Dashboard (_image-item.js)
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
var _base_item_1 = require("./_base-item");
var $ = require("jquery");
var _utils_1 = require("../../data/_utils");
var BASE64_STRING_PREFIX = 'data:image/png;base64,';
var imageItem = (function (_super) {
    __extends(imageItem, _super);
    function imageItem(container, options) {
        return _super.call(this, container, options) || this;
    }
    imageItem.prototype._initializeData = function (newOptions) {
        _super.prototype._initializeData.call(this, newOptions);
        this.imgSrc = this._getImageSource(this.options.ViewModel ? this.options.ViewModel.ImageViewModel : undefined);
    };
    imageItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        var that = this;
        if (!changeExisting || !that.img) {
            that.img = $('<img>').bind('load', function () {
                that._loadImage();
            });
            $(element).append(that.img);
        }
        that.img.attr('src', that.imgSrc);
        return false;
    };
    imageItem.prototype._loadImage = function () {
        this._clearImgTag();
        this._initialWidth = this.img.width();
        this._initialHeight = this.img.height();
        this._loadedImgProcessing();
    };
    imageItem.prototype._clearImgTag = function () {
        var that = this, $contentRoot = $(that.contentRoot), $img = $contentRoot.find('img');
        $contentRoot.css({ overflow: '' });
        $img.removeAttr('style');
        $img.removeAttr('align');
    };
    imageItem.prototype._loadedImgProcessing = function () {
        var that = this, $contentRoot = $(that.contentRoot), containerWidth = $contentRoot.width(), containerHeight = $contentRoot.height(), img = $contentRoot.find('img'), viewModel = that.options.ViewModel, sizeMode = viewModel.SizeMode, horizontalAlignment = viewModel.HorizontalAlignment || 'Right', verticalAlignment = viewModel.VerticalAlignment || 'Top', centeringDirect, curImgHeight, curImgWidth;
        switch (sizeMode) {
            case 'Clip':
                $contentRoot.css({ overflow: 'hidden' });
                that._setHorizontalAlignment(img, horizontalAlignment);
                that._setVerticalAlignment(img, verticalAlignment);
                break;
            case 'Stretch':
                img.css({ width: '100%', height: '100%' });
                break;
            case 'Squeeze':
                {
                    curImgHeight = img.height();
                    curImgWidth = img.width();
                    if ((curImgHeight >= containerHeight && curImgHeight <= that._initialHeight) || (curImgWidth >= containerWidth && curImgWidth <= that._initialWidth)) {
                        centeringDirect = that._setImgSizeWithProportions(img, containerHeight / containerWidth);
                        img.css({ marginTop: 0, marginLeft: 0 });
                    }
                    else {
                        img.css({
                            width: '',
                            height: ''
                        });
                        that._setHorizontalAlignment(img, horizontalAlignment);
                        that._setVerticalAlignment(img, verticalAlignment);
                    }
                    break;
                }
                ;
            case 'Zoom':
                {
                    centeringDirect = that._setImgSizeWithProportions(img, containerHeight / containerWidth);
                    break;
                }
                ;
            default: break;
        }
        if (centeringDirect === 'horizontalCentering') {
            that._setHorizontalAlignment(img, horizontalAlignment);
        }
        if (centeringDirect === 'verticalCentering') {
            that._setVerticalAlignment(img, verticalAlignment);
        }
    };
    imageItem.prototype._setHorizontalAlignment = function ($img, horizontalAlignment) {
        if (horizontalAlignment === 'Center') {
            $img.css({ marginLeft: ($(this.contentRoot).width() - $img.width()) / 2 });
            return;
        }
        $img.attr('align', horizontalAlignment.toLowerCase());
    };
    imageItem.prototype._setVerticalAlignment = function ($img, verticalAlignment) {
        var verticalOffsetCoeff, differenceTop = $(this.contentRoot).height() - $img.height();
        switch (verticalAlignment) {
            case 'Bottom':
                verticalOffsetCoeff = 1;
                break;
            case 'Center':
                verticalOffsetCoeff = 0.5;
                break;
            case 'Top':
                verticalOffsetCoeff = 0;
                break;
        }
        $img.css({ marginTop: Math.floor(differenceTop * verticalOffsetCoeff) + 'px' });
    };
    imageItem.prototype._setImgSizeWithProportions = function ($img, containerProportion) {
        var imgProportion = this._initialHeight / this._initialWidth;
        if (imgProportion > containerProportion) {
            $img.height('100%');
            $img.width(Math.floor($img.height() / imgProportion));
            return 'horizontalCentering';
        }
        else {
            $img.width('100%');
            $img.height(Math.floor($img.width() * imgProportion));
            return 'verticalCentering';
        }
    };
    imageItem.prototype._getImageSource = function (imageViewModel) {
        if (imageViewModel) {
            var url = imageViewModel.Url, sourceBase64String = imageViewModel.SourceBase64String, mimeType = imageViewModel.MimeType || '';
            if (sourceBase64String) {
                return 'data:' + mimeType + ';base64,' + sourceBase64String;
            }
            if (url) {
                return url;
            }
        }
        return '';
    };
    imageItem.prototype._resizeUnsafe = function () {
        _super.prototype._resizeUnsafe.call(this);
        this._loadImage();
    };
    imageItem.prototype._getWidget = function () {
        return this.img && _utils_1.wrapPublicElement(this.img[0]) || null;
    };
    return imageItem;
}(_base_item_1.baseItem));
exports.imageItem = imageItem;
