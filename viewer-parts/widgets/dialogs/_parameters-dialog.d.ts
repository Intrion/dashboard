/**
* DevExpress Dashboard (_parameters-dialog.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { dialogForm } from './_dialog-form';
import { Column as dxDataGridColumn } from "devextreme/ui/data_grid";
import 'devextreme/ui/check_box';
import dxDataGrid from 'devextreme/ui/data_grid';
import dxCheckBox from 'devextreme/ui/check_box';
import DOMComponent from 'devextreme/core/dom_component';
import { ParameterDialogContent } from './parameters-dialog-content';
import { ParametersCollection } from '../../../data/_parameters';
export declare let parameterTypes: {
    string: string;
    int: string;
    float: string;
    bool: string;
    dateTime: string;
    selector: string;
    multiselector: string;
    guid: string;
};
export declare class parametersDialog {
    options: any;
    getParametersCollection: () => ParametersCollection;
    submitParameters: any;
    dialogForm: dialogForm;
    valueChanged: JQuery.Callbacks<Function>;
    _dataGrid: dxDataGrid;
    setActualState: () => void;
    submitParameterValues: () => void;
    resetParameterValues: () => void;
    constructor(options: any);
    _initialize(): void;
    _disposeGrid(): void;
    appendNullGridColumn(gridColumns: Array<dxDataGridColumn>): void;
    allowNullColumn(): any;
    createNullColumn(): dxDataGridColumn;
    createGridColumns(): Array<dxDataGridColumn>;
    private _generateContent;
    generateContent(element: HTMLElement, disposeCallback?: () => void): ParameterDialogContent;
    show(): void;
    hide(): void;
    dispose(): void;
    _getParameterEntity(parameter: any, controlCreationCallbacks: any): ParameterEntity;
}
export interface ParameterEntityOptions {
    name: string;
    type: any;
    description?: any;
    defaultValue: any;
    value: any;
    lookUpValues: Array<any>;
    allowNull: boolean;
    allowMultiselect: boolean;
    createControl: (element: HTMLElement) => DOMComponent;
    valueName: any;
    controlCreationCallbacks: JQueryCallback;
}
export declare class ParameterEntity {
    name: string;
    type: any;
    description: any;
    defaultValue: any;
    value: any;
    lookUpValues: any[];
    allowNull: boolean;
    allowMultiselect: boolean;
    createControl: (element: HTMLElement) => DOMComponent;
    valueName: any;
    controlCreationCallbacks: any;
    divValueEditor: HTMLElement;
    divAllowNull: HTMLElement;
    allowNullControl: dxCheckBox;
    control: DOMComponent;
    valueChanged: JQuery.Callbacks<Function>;
    dispose(): void;
    constructor(options: ParameterEntityOptions);
    getValue(): void;
    setValue(value: any): void;
    setLookUpValues(values: any): void;
    wrapParameter(): {
        Name: string;
        Value: void;
    };
    _addControl(): void;
}
