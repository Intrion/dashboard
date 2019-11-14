/**
* DevExpress Dashboard (parameter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../serializable-model';
import { StaticListLookUpSettings } from './static-list-lookup-settings';
import { LookUpValue } from './look-up-value';
import { DynamicListLookUpSettings } from './dynamic-list-lookup-settings';
import * as ko from 'knockout';
export interface IQueryParameter {
    name: string;
    value: any;
    type: string;
    allowMultiselect: boolean;
    selectAll: boolean;
}
export declare function _getParametersQuery(parameters: Parameter[]): IQueryParameter[];
export declare class Parameter extends TypedSerializableModel {
    private _allParameters?;
    static SelectAllValue: string;
    private _patchSerializationsInfo;
    type: ko.Computed<string>;
    parameterVisible: ko.Observable<boolean>;
    description: ko.Observable<string>;
    allowMultiselect: ko.Observable<boolean>;
    allowNull: ko.Observable<boolean>;
    name: ko.Observable<string>;
    defaultValue: ko.Observable<any>;
    _type: ko.Observable<string>;
    lookUpSourceType: ko.Subscribable;
    defaultValues: ko.ObservableArray<LookUpValue>;
    selectAllValues: ko.Observable<boolean>;
    containsDisplayMember: ko.Computed<boolean>;
    staticListLookUpSettings: ko.Observable<StaticListLookUpSettings>;
    dynamicListLookUpSettings: ko.Observable<DynamicListLookUpSettings>;
    _valuesOfDefaultValues: ko.Computed<string[]>;
    _actualValue: ko.Computed<any>;
    private _paramDialogValue;
    _value: ko.Computed<any>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer, _allParameters?: ko.ObservableArray<Parameter>);
    _isNameValid: (name: string) => boolean;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    isPropertyVisible(propertyName: string): boolean;
    isPropertyDisabled(propertyName: string): boolean;
    _resetDefaultValues(): void;
    grabFrom(another: Parameter): void;
    protected _getDefaultItemType(): string;
}
