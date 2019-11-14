/**
* DevExpress Dashboard (_parameters.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardParameter, DashboardParameterCollection } from '../common/parameters-definitions';
export declare class Parameter implements DashboardParameter {
    _name: string;
    _value: any;
    _defaultValue: any;
    _description: any;
    _type: any;
    _visible: boolean;
    _allowNull: boolean;
    _allowmultiselect: boolean;
    parameterChanged: JQuery.Callbacks<Function>;
    _values: any;
    constructor(parameterViewModel: any);
    getName(): string;
    getAllowNull(): boolean;
    getAllowMultiselect(): boolean;
    getValue(): any;
    setValue(value: any): void;
    getDefaultValue(): any;
    getDescription(): any;
    getType(): any;
    getLookUpValues(): any;
    setLookUpValues(values: any, containsDisplayMember: any): void;
    isVisible(): boolean;
}
export declare class ParametersCollection implements DashboardParameterCollection {
    collectionChanged: JQuery.Callbacks<Function>;
    _parameters: any[];
    constructor(parametersViewModel: any);
    updateParameterValues(parametersViewModel: any): void;
    setParameters(newParameters: any): void;
    getParameterValues(): any[];
    getParameterDefaultValue(name: any): any;
    getParameterValue(name: any): any;
    setParameterValue(name: any, value: any): void;
    getParameters(): any[];
    getVisibleParameters(): any[];
    getParameterList(): any[];
    getParameterByName(name: any): any;
    getParameterByIndex(index: any): any;
}
