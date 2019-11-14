/**
* DevExpress Dashboard (_tag-values-provider.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagValuesProvider = {
    getTag: function (listSource, tagDataMembers, rowIndex) {
        var values = null;
        if (tagDataMembers === null)
            return values;
        values = [];
        for (var i = 0; i < tagDataMembers.length; i++) {
            values.push(listSource.getRowValue(rowIndex, tagDataMembers[i]));
        }
        return this.getTagByValues(values);
    },
    getTagByValues: function (values) {
        if (!values || values.length === 0)
            return null;
        return values;
    }
};
