/**
* DevExpress Dashboard (_expression-editor.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import * as ko from 'knockout';
export declare class RuleExpressionEditor {
    editor: DxDesigner.Analytics.Widgets.FilterEditor;
    criteriaString: ko.Observable<string>;
    constructor(params: {
        options: ko.Observable<DxDesigner.Analytics.Widgets.IFilterEditorOptions>;
        fieldListProvider: ko.Observable<DxDesigner.Analytics.Utils.IItemsProvider>;
        displayNameProvider: DxDesigner.Analytics.Utils.IDisplayNameProvider;
    });
    show(): void;
}
