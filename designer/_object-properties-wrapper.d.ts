/**
* DevExpress Dashboard (_object-properties-wrapper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { IDashboardSerializationInfo, ICollectionEditorSerializationInfo } from '../model/metadata/_base-metadata';
import * as ko from 'knockout';
export interface IWrapperPropertyInfo extends DxDesigner.Analytics.Utils.ISerializationInfo {
    replacementPropertyName?: string;
    sourceObject?: any;
}
export interface IPropertyDesciptors extends Array<DxDesigner.Analytics.Utils.ISerializationInfo | ICollectionEditorSerializationInfo | IWrapperPropertyInfo | {
    container: DxDesigner.Analytics.Utils.ISerializationInfo;
    properties: IPropertyDesciptors;
}> {
}
export interface IObjectPropertiesRules {
    [key: string]: Array<any> | ((model: any) => boolean);
}
export declare class ObjectPropertiesWrapper {
    private _serializationInfo;
    model: any;
    visibilityFilterRules: IObjectPropertiesRules;
    disabledFilterRules: IObjectPropertiesRules;
    summary: ko.Computed<string>;
    constructor(options: {
        model: any;
        properties: IPropertyDesciptors;
        visibilityFilterRules?: IObjectPropertiesRules;
        disabledFilterRules?: IObjectPropertiesRules;
        modelExtention?: any;
        summary?: ko.Computed<string>;
    });
    getPropertiesFromContainer(cur: any, properties: IPropertyDesciptors): void;
    addProperty(propertyValue: any, info: IDashboardSerializationInfo): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    isEmpty(): boolean;
    isPropertyVisible: (name: string) => boolean;
    isPropertyDisabled: (name: string) => boolean;
}
