/**
* DevExpress Dashboard (_lookup-values-viewmodel.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { Parameter } from '../../model/parameters/parameter';
import { DataSourceBrowser, IParameterValueViewModel } from '../../common/_data-source-browser';
import * as ko from 'knockout';
export declare abstract class LookupValuesViewModel {
    protected _parameter: Parameter;
    protected _dataSourceBrowser: DataSourceBrowser;
    constructor(_parameter: Parameter, _dataSourceBrowser: DataSourceBrowser, _container: HTMLElement);
    private items;
    dataSource: any;
    parameterValues: ko.ObservableArray<IParameterValueViewModel>;
    disabled: any;
    searchEnabled: boolean;
    valueExpr: string;
    searchExpr: string[];
    displayExpr: string;
    noDataText: any;
    placeholder: any;
    value: ko.ObservableArray<any>;
    showClearButton: boolean;
    multiline: boolean;
    showSelectionControls: boolean;
    onValueChanged: (e: any) => void;
    dropDownOptions: any;
}
export declare class LookupDefaultValuesViewModel extends LookupValuesViewModel {
    constructor(_parameter: Parameter, _dataSourceBrowser: DataSourceBrowser, container: HTMLElement);
    onValueChanged: (e: any) => void;
}
export declare class LookupDefaultValueViewModel extends LookupValuesViewModel {
    constructor(_parameter: Parameter, _dataSourceBrowser: DataSourceBrowser, container: HTMLElement);
    onValueChanged: (e: any) => void;
}
