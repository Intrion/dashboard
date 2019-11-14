/**
* DevExpress Dashboard (_button-group.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var index_internal_1 = require("../data/index.internal");
ko.components.register('dx-dashboard-button-group', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var options = {
                keyExpr: 'value',
                width: '100%',
                items: ko.unwrap(params.values).map(function (val) { return { value: val.value, text: index_internal_1.getLocalizationById(val.displayValue) }; }),
                onItemClick: function (e) { params.value(e.itemData.value); },
                disabled: params.disabled,
                selectedItemKeys: [ko.unwrap(params.value.peek())]
            };
            return options;
        }
    },
    template: { element: 'dx-dashboard-button-group-template' }
});
ko.components.register('dx-dashboard-checked-button', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var key = "key";
            var options = {
                elementAttr: { class: params.icon ? 'dx-dashboard-button-with-icon' : undefined },
                keyExpr: 'key',
                width: '100%',
                items: ko.computed(function () {
                    var template = ko.unwrap(params.template);
                    var icon = ko.unwrap(params.icon);
                    if (!template && icon) {
                        template = '<svg><use xlink:href=#' + icon + '></use></svg>';
                    }
                    return [{
                            key: key,
                            disabled: ko.unwrap(params.disabled),
                            hint: ko.unwrap(params.hint),
                            text: ko.unwrap(params.text),
                            template: template
                        }];
                }),
                onItemClick: params.click,
                disabled: params.disabled,
                selectedItemKeys: ko.computed(function () { return ko.unwrap(params.isSelected) ? [key] : []; }),
            };
            return options;
        }
    },
    template: { element: 'dx-dashboard-button-group-template' }
});
