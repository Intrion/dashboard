/**
* DevExpress Dashboard (resource-manager.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _resources_1 = require("../resources/_resources");
var _localization_initializer_1 = require("../data/localization/_localization-initializer");
var _obsolete_helper_1 = require("../model/internal/_obsolete-helper");
var resId = "dx-dashboard-control-resources";
var ResourceManager = (function () {
    function ResourceManager() {
    }
    ResourceManager.embedBundledResources = function () {
        if (!document.body)
            throw "HTML <body> element is not created yet.";
        if (!document.getElementById(resId)) {
            var res = '';
            for (var key in _resources_1.resources) {
                res += _resources_1.resources[key];
            }
            var div = document.createElement("div");
            div.style.display = "none";
            div.innerHTML = res;
            div.id = resId;
            document.body.insertBefore(div, document.body.childNodes[0]);
        }
    };
    ResourceManager.removeEmbeddedResources = function () {
        var resourceElement = document.getElementById(resId);
        if (resourceElement) {
            resourceElement.parentNode.removeChild(resourceElement);
        }
    };
    ResourceManager.setLocalizationMessages = function (localizationMessages) {
        _localization_initializer_1.setLocalization(localizationMessages);
    };
    ResourceManager.registerIcon = function (icon) {
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.visibility = "hidden";
        div.style.left = "-10px";
        div.style.top = "-10px";
        div.style.width = "1px";
        div.style.height = "1px";
        div.innerHTML = icon;
        document.body.insertBefore(div, document.body.childNodes[0]);
    };
    return ResourceManager;
}());
exports.ResourceManager = ResourceManager;
_obsolete_helper_1.defineObsoleteMethod({
    target: ResourceManager,
    memberName: "removeEmbededResources",
    oldMemberDisplayName: "ResourceManager.removeEmbededResources",
    newMemberDisplayName: "ResourceManager.removeEmbeddedResources",
    action: function () { return ResourceManager.removeEmbeddedResources(); }
});
