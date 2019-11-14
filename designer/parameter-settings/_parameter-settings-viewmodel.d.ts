/**
* DevExpress Dashboard (_parameter-settings-viewmodel.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { Parameter } from '../../model/parameters/parameter';
import { DisposableObject } from '../../model/disposable-object';
import { LookupDefaultValuesViewModel, LookupDefaultValueViewModel } from './_lookup-values-viewmodel';
import { Dashboard } from '../../model/dashboard';
import { DataSourceBrowser } from '../../common/_data-source-browser';
import * as ko from 'knockout';
export declare class ParameterEditorViewModel extends DisposableObject {
    dashboard: ko.Computed<Dashboard>;
    private _dataSourceBrowserGetter?;
    readonly dataSourceBrowser: DataSourceBrowser;
    getLookupDefaultValuesViewModel: (parameter: any, container: HTMLElement) => LookupDefaultValuesViewModel;
    getLookupDefaultValueViewModel: (parameter: any, container: HTMLElement) => LookupDefaultValueViewModel;
    constructor(dashboard: ko.Computed<Dashboard>, _dataSourceBrowserGetter?: () => DataSourceBrowser);
    initialize(): void;
    validationGroup: any;
    selectedParameters: ko.Observable<Parameter[]>;
    selectedParameter: ko.Computed<Parameter>;
    selectedParameterClone: ko.Observable<Parameter>;
    allowReordering: ko.Observable<boolean>;
    toggleReordering: () => void;
    addParameter: () => void;
    removeParameter: () => void;
    reorderParameters: (e: any) => void;
    validationGroupInitialized: (e: any) => void;
}
