/**
* DevExpress Dashboard (_title-component.js)
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
var disposable_object_1 = require("../../../model/disposable-object");
var _title_toolbar_1 = require("../../../viewer-parts/widgets/caption-toolbar/_title-toolbar");
var $ = require("jquery");
var ko = require("knockout");
var DashboardTitleContext = (function (_super) {
    __extends(DashboardTitleContext, _super);
    function DashboardTitleContext(encodeHtml, findExtension, allowExport) {
        if (allowExport === void 0) { allowExport = true; }
        var _this = _super.call(this) || this;
        _this.parametersExtension = ko.pureComputed(function () { return findExtension('dashboard-parameter-dialog'); });
        _this.exportExtension = ko.pureComputed(function () { return allowExport ? findExtension('dashboard-export') : null; });
        _this.viewerApiExtension = ko.pureComputed(function () { return findExtension('viewer-api'); });
        _this.toDispose(_this.exportExtension);
        _this.toDispose(_this.parametersExtension);
        _this.toDispose(_this.viewerApiExtension);
        return _this;
    }
    return DashboardTitleContext;
}(disposable_object_1.DisposableObject));
exports.DashboardTitleContext = DashboardTitleContext;
var DashboardTitleComponent = (function (_super) {
    __extends(DashboardTitleComponent, _super);
    function DashboardTitleComponent(params, container, controlContainer) {
        var _this = _super.call(this) || this;
        _this.params = params;
        _this.container = container;
        _this.controlContainer = controlContainer;
        return _this;
    }
    DashboardTitleComponent.prototype.initialize = function () {
        var _this = this;
        var toolbar = new _title_toolbar_1.DashboardTitleToolbar(this.container, this.controlContainer, this.container, this.params.encodeHtml, this.params.options().allowHideEmptyToolbar, this.params.className);
        toolbar.update(this.params.options().toolbarOptions, this.params.options().centerAligned);
        this.params.height(toolbar.calcHeight(this.params.options().toolbarOptions));
        this.toDispose(toolbar);
        this.toDispose(this.params.options.subscribe(function (newOptions) {
            toolbar.update(newOptions.toolbarOptions, newOptions.centerAligned);
            _this.params.height(toolbar.calcHeight(newOptions.toolbarOptions));
        }));
        this.toDispose(this.params.width.subscribe(function (newValue) { return toolbar.onResize(); }));
    };
    return DashboardTitleComponent;
}(disposable_object_1.DisposableObject));
exports.DashboardTitleComponent = DashboardTitleComponent;
ko.components.register('dashboard-title', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var element = componentInfo.element;
            var titleComponent = new DashboardTitleComponent(params, element.querySelector(".dx-dsh-title"), $(element).closest(".dx-dashboard-widget-container")[0]);
            titleComponent.initialize();
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                titleComponent.dispose();
            });
        }
    },
    template: "<div class='dx-dsh-title'></div>"
});
