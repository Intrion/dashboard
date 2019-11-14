﻿/**
* DevExpress Dashboard (_calculation-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IPropertiesHolder, PropertiesController } from '../../../_properties-controller';
import { Measure } from '../../../../model/data-item/measure';
import { DataDashboardItem } from '../../../../model/items/data-dashboard-item';
import { DataSourceBrowser } from '../../../../common/_data-source-browser';
import { AccordionTab } from '../../../_accordion-tab';
import { CollectionEditorEditItemArguments } from '../../../ui-widgets/collection-editor/_collection-editor-viewmodel';
import * as ko from 'knockout';
import { IDisposable } from '../../../../model/disposable-object';
export declare class CalculationSurface implements IDisposable, IPropertiesHolder {
    model: any;
    measure: Measure;
    dashboardItem: DataDashboardItem;
    dataSourceBrowser: DataSourceBrowser;
    propertiesController: PropertiesController;
    private _disposables;
    constructor(model: any, measure: Measure, dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser, propertiesController: PropertiesController);
    propertiesTabs: ko.ObservableArray<AccordionTab>;
    updatePropertiesTabs(): void;
    startEditing(args: CollectionEditorEditItemArguments): void;
    dispose(): void;
}
