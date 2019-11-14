/**
* DevExpress Dashboard (_parameters-item-provider.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { Parameter } from '../../../model/parameters/parameter';
import * as ko from 'knockout';
export declare class ParametersItemProvider {
    private dashboardParameters;
    constructor(dashboardParameters: ko.Computed<Array<Parameter>>);
    getItems(pathRequest: DxDesigner.Analytics.Utils.PathRequest): JQuery.Promise<any, any, any>;
}
