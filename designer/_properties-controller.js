/**
* DevExpress Dashboard (_properties-controller.js)
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
var _accordion_tab_1 = require("./_accordion-tab");
var ko = require("knockout");
var PropertiesController = (function () {
    function PropertiesController() {
        var _this = this;
        this._disposables = [];
        this.mainModel = ko.observable();
        this.secondaryModel = ko.observable();
        this.currentTab = ko.observable("");
        this.accordionDataSource = ko.observable([]);
        this.secondaryAccordionDataSource = ko.observable([]);
        this.computator = ko.computed(function () {
            var newTabs = [];
            var oldTabs = _this.accordionDataSource;
            if (_this.secondaryModel() && _this.secondaryModel().data) {
                newTabs = newTabs.concat(ko.unwrap(_this.secondaryModel().data.propertiesTabs));
                oldTabs = _this.secondaryAccordionDataSource;
            }
            else if (_this.mainModel() && _this.mainModel().data) {
                newTabs = newTabs.concat(ko.unwrap(_this.mainModel().data.propertiesTabs));
            }
            newTabs.forEach(function (tab, index) { if (!tab.orderNo)
                tab.orderNo = 100 + index; });
            newTabs = newTabs
                .sort(function (a, b) { return (a.orderNo) - (b.orderNo); });
            if ((newTabs.length === oldTabs().length)
                && newTabs.every(function (t) { return t instanceof _accordion_tab_1.AccordionTab; })
                && oldTabs().every(function (t) { return t instanceof _accordion_tab_1.AccordionTab; })) {
                var thesame = true;
                for (var i = 0; i < newTabs.length; i++) {
                    thesame = thesame && oldTabs()[i].name === newTabs[i].name;
                }
                if (thesame) {
                    for (var i = 0; i < newTabs.length; i++) {
                        oldTabs()[i].grabData(newTabs[i]);
                    }
                }
                else {
                    oldTabs(newTabs);
                }
            }
            else {
                oldTabs(newTabs);
            }
        });
        this.selectedIndex = ko.computed({
            read: function () {
                var newTabs = _this.accordionDataSource();
                var theSameTab = newTabs.filter(function (tab) { return (tab.category === _this.currentTab()) && tab.visible(); })[0];
                if (!theSameTab) {
                    theSameTab = newTabs.filter(function (tab) { return !tab.headerTemplate && tab.visible(); })[0];
                    theSameTab = theSameTab || newTabs[0];
                }
                return newTabs.indexOf(theSameTab);
            },
            write: function (index) {
                var newSelectedItem = _this.accordionDataSource()[index];
                if (!!newSelectedItem) {
                    _this.currentTab(newSelectedItem.category);
                }
                _this.secondaryModel(undefined);
            }
        }).extend({ notify: 'always', deferred: true });
        this.secondarySelectedIndex = ko.observable(0);
        this.processDataItemClick = function (data) {
            var model = data.item;
            if (!_this.mainModel() || !_this.mainModel().data || ko.unwrap(_this.mainModel().data.model) !== model) {
                data.click(model);
            }
            else {
                _this.mainModel(null);
            }
        };
        this._disposables.push(this.mainModel.subscribe(function () {
            var oldValue = _this.mainModel.peek();
            if (oldValue && oldValue.data && oldValue.data.dispose) {
                oldValue.data.dispose();
            }
            _this.secondaryModel(null);
        }, this, "beforeChange"));
        this._disposables.push(this.mainModel.subscribe(function () {
            var newValue = _this.mainModel.peek();
            if (newValue && newValue.data && newValue.containingCollection) {
                _this._disposables.push(newValue.containingCollection.subscribe(function (changes) {
                    var propertiesController = _this;
                    changes.forEach(function (arrayChange) {
                        var change = arrayChange;
                        if (change.status === "deleted"
                            && propertiesController.mainModel()
                            && ko.unwrap(propertiesController.mainModel().data.model) === change.value) {
                            propertiesController.mainModel(null);
                        }
                    });
                }, null, "arrayChange"));
            }
            _this.secondaryModel(null);
        }));
        this._disposables.push(this.secondaryModel.subscribe(function () {
            var oldValue = _this.secondaryModel.peek();
            if (oldValue && oldValue.data && oldValue.data.dispose) {
                oldValue.data.dispose();
            }
            _this.secondarySelectedIndex(0);
        }, this, "beforeChange"));
        this._disposables.push(this.secondaryModel.subscribe(function () {
            var newValue = _this.secondaryModel.peek();
            if (newValue && newValue.data && newValue.containingCollection) {
                _this._disposables.push(newValue.containingCollection.subscribe(function (changes) {
                    var propertiesController = _this;
                    changes.forEach(function (arrayChange) {
                        var change = arrayChange;
                        if (change.status === "deleted"
                            && propertiesController.secondaryModel()
                            && ko.unwrap(propertiesController.secondaryModel().data.model) === change.value) {
                            propertiesController.secondaryModel(null);
                        }
                    });
                }, null, "arrayChange"));
            }
        }));
        this._disposables.push(this.computator);
    }
    PropertiesController.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
        this.selectedIndex.dispose();
    };
    return PropertiesController;
}());
exports.PropertiesController = PropertiesController;
var PropertiesViewModel = (function (_super) {
    __extends(PropertiesViewModel, _super);
    function PropertiesViewModel(params) {
        return _super.call(this, !ko.isObservable(params.target) ? ko.observable(params.target) : params.target, undefined, undefined, undefined, params.recreateEditors) || this;
    }
    PropertiesViewModel.prototype.dispose = function () {
        this.cleanSubscriptions();
    };
    return PropertiesViewModel;
}(dx_analytics_core_1.default.Analytics.Widgets.ObjectProperties));
ko.components.register("dx-dashboard-properties", {
    viewModel: PropertiesViewModel,
    template: dx_analytics_core_1.default.Analytics.Widgets.Internal.getTemplate('dx-propertieseditor')
});
