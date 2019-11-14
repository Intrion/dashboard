/**
* DevExpress Dashboard (_parameter-dialog-binder.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DisposableObject } from '../../model/disposable-object';
import { Parameter } from '../../model/parameters/parameter';
import { DynamicListLookUpSettings } from '../../model/parameters/dynamic-list-lookup-settings';
import { IParameterValueViewModel } from '../_data-source-browser';
import { ParametersCollection } from '../../data/_parameters';
import * as ko from 'knockout';
export declare class ParameterDialogViewModel extends DisposableObject {
    private _parameters;
    private _getDashboardParameterType;
    private _getParameterValues;
    private _getParameterDefaultValue;
    constructor(_parameters: ko.ObservableArray<Parameter>, getParameterValues: (parameterType: string, settings: DynamicListLookUpSettings) => ko.ObservableArray<IParameterValueViewModel>);
    setParameters: (newParameters: any) => void;
    parameterCollection: ko.Computed<ParametersCollection>;
}
