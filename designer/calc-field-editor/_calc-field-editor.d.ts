/**
* DevExpress Dashboard (_calc-field-editor.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { CalculatedField } from '../../model/data-sources/calculated-field';
import { DataSourceBrowser } from '../../common/_data-source-browser';
import * as ko from 'knockout';
export declare class CalcFieldEditor {
    private dataSourceBrowser;
    viewModel: ko.Observable<CalcFieldEditorViewModel>;
    constructor(dataSourceBrowser: DataSourceBrowser);
    canAddCalculatedField(dataSourceName: string): boolean;
    showAddDialog(dataSourceName: string, dataMemberName: string): JQuery.Promise<CalculatedField, any, any>;
    showEditDialog(calculatedField: CalculatedField, dataSourceName: string, dataMemberName: string): JQueryPromise<CalculatedField>;
    removeCalcField(calculatedField: CalculatedField, dataSourceName: string): JQueryPromise<CalculatedField>;
    private show;
}
export declare class CalcFieldEditorViewModel {
    toolbarItems: any[];
    expressionEditable: any;
    getInfo: Function;
    nameValidationRules: Array<any>;
    calculatedField: CalculatedField;
    dataMember: ko.Observable<string>;
    fieldType: ko.Observable<string>;
    availableTypes: Array<string>;
    name: ko.Observable<string>;
    expression: ko.Observable<string>;
    isCalcFieldNameValid: ko.Observable<boolean>;
    popupVisible: ko.Observable<boolean>;
    constructor(calculatedField: CalculatedField, dataSourceBrowser: DataSourceBrowser, dataSourceName: string, onSave: (calcField: CalculatedField) => void, onBeforeSave?: () => void);
}
