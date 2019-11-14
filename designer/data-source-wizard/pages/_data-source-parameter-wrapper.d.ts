/**
* DevExpress Dashboard (_data-source-parameter-wrapper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import { Parameter } from '../../../model/parameters/parameter';
import * as ko from 'knockout';
export declare class DataSourceParameterWrapper {
    parameter: DxQueryBuilder.Analytics.Data.DataSourceParameter;
    constructor(parameter: DxQueryBuilder.Analytics.Data.DataSourceParameter, dashboardParameters: ko.Computed<Array<Parameter>>);
    isPropertyVisible(name: string): boolean;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    readonly specifics: any;
    expressionEditable: any;
    name: ko.Subscribable<string>;
    value: ko.Subscribable<any>;
    type: ko.Subscribable<string>;
    resultType: ko.Subscribable<string>;
    isValid: ko.Subscribable<boolean>;
}
