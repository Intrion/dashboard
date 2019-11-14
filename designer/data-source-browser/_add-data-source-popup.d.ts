/**
* DevExpress Dashboard (_add-data-source-popup.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IPopupContentViewModel } from './_data-source-browser-viewmodel';
import { AvailableDataSourcesExtension } from '../extensions/available-data-sources-extension';
import { DataSource } from '../../model/data-sources/data-source';
import * as ko from 'knockout';
import { KnockoutEntry } from '../../model/internal/_knockout-utils';
import { ToolbarItem } from 'devextreme/ui/popup';
export declare class AddDataSourcePopup implements IPopupContentViewModel {
    addButtonDisable: ko.Computed<boolean>;
    title: any;
    toolbarItems: Array<ToolbarItem>;
    template: any;
    bindingData: any;
    constructor(accessibleDataSourcesExtension: ko.Computed<AvailableDataSourcesExtension>, addDataSourcesCallback: (d: Array<DataSource>) => void, popupVisible: KnockoutEntry<boolean>);
}
