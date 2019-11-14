/**
* DevExpress Dashboard (_configure-parameters-page.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import { Parameter } from '../../../model/parameters/parameter';
import { DataSourceParameterWrapper } from './_data-source-parameter-wrapper';
import * as ko from 'knockout';
export declare function createParametersViewModelConverter(parameters: ko.Computed<Array<Parameter>>): {
    createParameterViewModel: (parameter: DxQueryBuilder.Analytics.Data.DataSourceParameter) => DataSourceParameterWrapper;
    getParameterFromViewModel: (parameterViewModel: any) => DxQueryBuilder.Analytics.Data.DataSourceParameter;
};
