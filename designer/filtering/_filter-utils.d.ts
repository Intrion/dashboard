/**
* DevExpress Dashboard (_filter-utils.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataSourceBrowser } from '../../common/_data-source-browser';
import * as ko from 'knockout';
export declare var createItemFilterOptions: (expression: ko.Observable<string>, item: any, _dataSourceBrowser: DataSourceBrowser, title?: {
    text: string;
    localizationId?: string;
}) => ko.Computed<DxDesigner.Analytics.Widgets.FilterStringOptions>;
