/**
* DevExpress Dashboard (undo-engine-extension.js)
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
var disposable_object_1 = require("../../model/disposable-object");
var _obsolete_helper_1 = require("../../model/internal/_obsolete-helper");
var _interfaces_1 = require("../../common/internal/_interfaces");
var _undo_engine_helper_1 = require("../../model/internal/_undo-engine-helper");
var toolbox_items_1 = require("../toolbox-extension/toolbox-items");
var control_options_1 = require("../../common/control-options");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var name = "undo-redo";
var UndoRedoExtension = (function (_super) {
    __extends(UndoRedoExtension, _super);
    function UndoRedoExtension(dashboardControl) {
        var _this = _super.call(this) || this;
        _this.dashboardControl = dashboardControl;
        _this.name = name;
        _this._undoEngine = ko.observable();
        _this.isChanged = ko.computed({
            read: function () { return !!(_this._undoEngine() && _this._undoEngine().isDirty()); },
            write: function (value) { return _this._undoEngine() && _this._undoEngine().isDirty(value); }
        });
        _obsolete_helper_1.defineObsoleteProperty({
            target: _this,
            memberName: "undoEngine",
            oldMemberDisplayName: "UndoRedoExtension.undoEngine",
            warmMessage: 'The undoEngine property is obsolete.',
            action: function () {
                return _this._undoEngine;
            }
        });
        return _this;
    }
    UndoRedoExtension.prototype.reset = function () {
        if (this._undoEngine()) {
            this._undoEngine().reset();
        }
    };
    UndoRedoExtension.prototype.processKeyEvent = function (keyEventType, eventArgs) {
        if (keyEventType === "keyup" && eventArgs.ctrlKey) {
            if (eventArgs.keyCode === _interfaces_1.KeyCodes.Z && this._undoEngine().undoEnabled()) {
                this._undoEngine().undo();
                return true;
            }
            else if (eventArgs.keyCode === _interfaces_1.KeyCodes.Y && this._undoEngine().redoEnabled()) {
                this._undoEngine().redo();
                return true;
            }
        }
        else if (keyEventType === "keydown" && eventArgs.ctrlKey && [_interfaces_1.KeyCodes.Z, _interfaces_1.KeyCodes.Y].indexOf(eventArgs.keyCode) !== -1) {
            eventArgs.preventDefault();
            return true;
        }
        return false;
    };
    UndoRedoExtension.prototype.start = function () {
        var _this = this;
        this.toDispose(this.dashboardControl.dashboard.subscribe(function (prevDashboard) {
            _this.reset();
        }, null, 'beforeChange'));
        this.toDispose(this.dashboardControl.dashboard.subscribe(function (newDashboard) {
            var undoEngine = new DashboardUndoEngine(newDashboard, null, "getInfo");
            _undo_engine_helper_1.UndoEngineContainer.undoEngine = undoEngine;
            _this._undoEngine(undoEngine);
        }));
        if (this.dashboardControl.showConfirmationOnBrowserClosing !== false) {
            window.onbeforeunload = function (e) {
                if (_this.dashboardControl.isDesignMode() && _this.isChanged()) {
                    return _default_1.getLocalizationById('DashboardWebStringId.LayoutHasBeenChangedDialogMessage') + " " + _default_1.getLocalizationById('DashboardWebStringId.SaveConfirmationDialogMessage');
                }
            };
        }
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        if (!!toolboxExtension) {
            var undoItem = new toolbox_items_1.DashboardToolbarItem("undo", function () { return _this.undo(); }, "undo", "DashboardStringId.UndoText");
            undoItem.disabled = ko.pureComputed(function () { return !_this.undoEnabled(); });
            var redoItem = new toolbox_items_1.DashboardToolbarItem("redo", function () { return _this.redo(); }, "redo", "DashboardStringId.RedoText");
            redoItem.disabled = ko.pureComputed(function () { return !_this.redoEnabled(); });
            var toolbarGroup = new toolbox_items_1.DashboardToolbarGroup("undo-redo", "Undo/Redo", 50, undoItem, redoItem);
            toolboxExtension.toolbarGroups.push(toolbarGroup);
        }
    };
    UndoRedoExtension.prototype.undo = function () {
        this._undoEngine() && this._undoEngine().undo();
    };
    UndoRedoExtension.prototype.redo = function () {
        this._undoEngine() && this._undoEngine().redo();
    };
    UndoRedoExtension.prototype.undoEnabled = function () {
        return !!(this._undoEngine() && this._undoEngine().undoEnabled());
    };
    UndoRedoExtension.prototype.redoEnabled = function () {
        return !!(this._undoEngine() && this._undoEngine().redoEnabled());
    };
    UndoRedoExtension.prototype.stop = function () {
        this.reset();
        if (this.dashboardControl.showConfirmationOnBrowserClosing !== false) {
            window.onbeforeunload = null;
        }
    };
    return UndoRedoExtension;
}(disposable_object_1.DisposableObject));
exports.UndoRedoExtension = UndoRedoExtension;
var DashboardUndoEngine = (function (_super) {
    __extends(DashboardUndoEngine, _super);
    function DashboardUndoEngine(target, ignoredProperties, getInfoMethodName) {
        return _super.call(this, target, ignoredProperties, getInfoMethodName) || this;
    }
    DashboardUndoEngine.prototype.validatePropertyName = function (target, propertyName) {
        return propertyName;
    };
    return DashboardUndoEngine;
}(dx_analytics_core_1.default.Analytics.Utils.UndoEngine));
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new UndoRedoExtension(dashboardControl); };
