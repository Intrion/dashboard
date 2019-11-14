/**
* DevExpress Dashboard (_dialog-form.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _dashboard_layout_mode_helper_1 = require("../../_dashboard-layout-mode-helper");
var popup_1 = require("devextreme/ui/popup");
var button_1 = require("devextreme/ui/button");
var _render_helper_1 = require("../_render-helper");
var _dashboard_viewer_constants_1 = require("../../viewer/_dashboard-viewer-constants");
var _utils_1 = require("../../../data/_utils");
var $ = require("jquery");
var resizeCallbacks = require("devextreme/core/utils/resize_callbacks");
exports.dialogClasses = {
    form: 'dx-dashboard-form',
    simpleDialog: 'dx-dashboard-simple-dialog',
    element: 'dx-dashboard-dialog-element',
    elementOffset: 'dx-dashboard-dialog-element-offset',
    name: 'dx-dashboard-dialog-element-name',
    disabledName: 'dx-dashboard-dialog-element-name-disabled',
    box: 'dx-dashboard-dialog-element-box',
    buttons: 'dx-dashboard-dialog-buttons',
    elementTextBox: 'dx-dashboard-dialog-element-text-box',
    elementNumberBox: 'dx-dashboard-dialog-element-number-box',
    elementLargeMarginTop: 'dx-dashboard-dialog-element-margin-top'
};
exports.dialogSizes = {
    width: 500,
    height: 500,
    minWidth: 350,
    minHeight: 200,
    elementsHeight: 172
};
var widgetMargin = 1;
var dialogForm = (function () {
    function dialogForm(options) {
        this.controlCreationCallbacks = $.Callbacks();
        this.options = options;
        this._initialize();
    }
    dialogForm.prototype.showDialog = function () {
        this.popupInstance.show();
    };
    dialogForm.prototype.hideDialog = function () {
        this.popupInstance.hide();
    };
    dialogForm.prototype.dispose = function () {
        if (this.popupInstance) {
            this.popupInstance.dispose();
        }
        if (this.options && this.options.disposeContent) {
            this.options.disposeContent();
        }
    };
    dialogForm.prototype._initialize = function () {
        var that = this, options = that.options, getMaxSize = function () {
            var windowHeight = _dashboard_layout_mode_helper_1.DashboardLayoutModeHelper.isMobile ? window.innerHeight : undefined;
            var height = $(options.dialogContainer).height();
            return !!windowHeight && (windowHeight > height) ? windowHeight : height;
        }, correctMaxSize = function () {
            that.popupInstance.option('maxHeight', getMaxSize());
            var popupContent = _utils_1.$unwrap(that.popupInstance.content());
            var scrollableContent = popupContent.querySelector(".dx-scrollable-container");
            if (scrollableContent) {
                scrollableContent.style.maxHeight = _utils_1.$unwrap(that.popupInstance.content()).style.maxHeight;
            }
        }, resizeHandler = function () {
            correctMaxSize();
        };
        var popupOptions = {
            title: options.title,
            showCloseButton: true,
            toolbarItems: [{ toolbar: 'bottom' }],
            animation: {
                show: {
                    type: 'fade',
                    from: 0, to: 1
                },
                hide: {
                    type: 'fade',
                    from: 1, to: 0
                }
            },
            position: {
                my: 'center',
                at: 'center',
                of: _dashboard_layout_mode_helper_1.DashboardLayoutModeHelper.isMobile ? window : options.dialogContainer
            },
            width: options.width,
            height: options.height,
            maxHeight: getMaxSize(),
            minWidth: exports.dialogSizes.minWidth,
            minHeight: exports.dialogSizes.minHeight,
            resizeEnabled: !options.allowScrolling,
            onInitialized: function (e) {
                resizeCallbacks.add(resizeHandler);
            },
            onDisposing: function (e) {
                resizeCallbacks.remove(resizeHandler);
            },
            onResize: function (e) {
                var dataGrid = e.component.content().children().data("dxDataGrid");
                if (!!dataGrid) {
                    dataGrid.updateDimensions();
                }
            },
            onContentReady: function (args) {
                if (that.options.buttons) {
                    var buttons = document.createElement('div');
                    buttons.classList.add(exports.dialogClasses.buttons);
                    that.options.buttons.forEach(function (button) {
                        var element = document.createElement('div');
                        element.classList.add(button.className);
                        buttons.appendChild(element);
                        new button_1.default(element, {
                            text: button.name,
                            onClick: function () {
                                button.func();
                                if (button.hide)
                                    that.popupInstance.hide();
                            },
                            type: button.isDefault ? 'default' : 'normal'
                        });
                    });
                    _utils_1.$unwrap(that.popupInstance.bottomToolbar()).appendChild(buttons);
                    var buttonsDeltaWidth = -$(buttons).width();
                    for (var i = 0; i < buttons.children.length; i++) {
                        buttonsDeltaWidth += _render_helper_1.RenderHelper.getElementBoxFloat(buttons.children[i]).width;
                    }
                    if (buttonsDeltaWidth > 0) {
                        this.option('minWidth', this.option('minWidth') + Math.ceil(buttonsDeltaWidth));
                    }
                }
                if (!options.deferredRendering) {
                    that._renderPopupContent(args.component);
                }
            },
            onShowing: function (args) {
                if (options.deferredRendering) {
                    that._renderPopupContent(args.component);
                }
                var formWidth = that._setLabelsWidth();
                that.options.setActualState(formWidth);
                options.onShowing && options.onShowing(args);
            },
            onHidden: options.onHidden,
            onShown: function (args) {
                correctMaxSize();
                options.onShown && options.onShown(args);
            }
        };
        popupOptions["bottomTemplate"] = function () { };
        popupOptions["container"] = options.dialogContainer;
        var popup = document.createElement('div');
        if (!options.allowScrolling) {
            popup.classList.add(exports.dialogClasses.simpleDialog);
        }
        options.dialogContainer.appendChild(popup);
        that.popupInstance = new popup_1.default(popup, popupOptions);
    };
    dialogForm.prototype._renderPopupContent = function (component) {
        this.options.disposeContent();
        var content = this.options.renderContent(this.controlCreationCallbacks);
        if (this.scrollableContent) {
            this.scrollableContent.innerHTML = '';
            this.scrollableContent.appendChild(content);
            this.controlCreationCallbacks.fire(component);
        }
        else {
            _utils_1.$unwrap(this.popupInstance.content()).appendChild(content);
            this.controlCreationCallbacks.fire(component);
            if (this.options.allowScrolling) {
                this.scrollableContent = _render_helper_1.RenderHelper.wrapScrollable(_utils_1.$unwrap(this.popupInstance.content()), _dashboard_viewer_constants_1.USE_NATIVE_SCROLLING, 'auto', 'both');
            }
        }
    };
    dialogForm.prototype._setLabelsWidth = function () {
        var that = this, width = 0, maxWidth = 400, minWidth = 100, leftOffset = 10, $div = undefined, $span = undefined, $label = undefined, $labelsContainer = $('<div/>', {
            'class': 'dx-dashboard-labels-container'
        }).appendTo($('.dx-dashboard-container')), $controlContainer, boxWidth = 0;
        $.each(_utils_1.$wrap(that.popupInstance.content()).find('.' + exports.dialogClasses.form).children(), function (index, div) {
            $div = $(div);
            $span = $('<span/>').append($div.find('.' + exports.dialogClasses.name).text());
            $labelsContainer.append($span).append('<br/>');
            $controlContainer = $div.find('.' + exports.dialogClasses.box);
            boxWidth = Math.max(boxWidth, $controlContainer.outerWidth());
        });
        $.each($labelsContainer.children(), function (index, label) {
            $label = $(label);
            width = Math.max(width, $label.width());
        });
        width = Math.max(minWidth, Math.min(maxWidth, width)) + leftOffset;
        $labelsContainer.remove();
        $('.' + exports.dialogClasses.name).css('width', width);
        return width + boxWidth + _utils_1.pxToNumber($('.' + exports.dialogClasses.name).css("margin-right")) + 2 * widgetMargin;
    };
    return dialogForm;
}());
exports.dialogForm = dialogForm;
