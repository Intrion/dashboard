/**
* DevExpress Dashboard (_format-rule-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IPropertiesHolder, PropertiesController } from '../../../_properties-controller';
import { AccordionTab } from '../../../_accordion-tab';
import { CellsItemFormatRule } from '../../../../model/format-rules/cells-item-format-rule';
import { DataDashboardItem } from '../../../../model/items/data-dashboard-item';
import { DataSourceBrowser } from '../../../../common/_data-source-browser';
import { CollectionEditorEditItemArguments } from '../../../ui-widgets/collection-editor/_collection-editor-viewmodel';
import * as ko from 'knockout';
import { IDisposable } from '../../../../model/disposable-object';
export declare class FormatRuleSurface implements IDisposable, IPropertiesHolder {
    model: CellsItemFormatRule;
    dashboardItem: DataDashboardItem;
    dataSourceBrowser: DataSourceBrowser;
    propertiesController: PropertiesController;
    private _disposables;
    propertiesTabs: ko.ObservableArray<AccordionTab>;
    constructor(model: CellsItemFormatRule, dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser, propertiesController: PropertiesController);
    updatePropertiesTabs(requestRecalculation: JQueryCallback): void;
    startEditing(args: CollectionEditorEditItemArguments): void;
    dispose(): void;
}
