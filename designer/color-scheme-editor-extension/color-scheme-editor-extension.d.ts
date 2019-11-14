/**
* DevExpress Dashboard (color-scheme-editor-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IExtension } from '../../common/common-interfaces';
import { DashboardItem } from '../../model/items/dashboard-item';
import { DashboardControl } from '../../common/dashboard-control';
import { Color } from '../../model/color';
import { ColorSchemeModel } from './internal/_color-scheme-model';
import { ChartItemBase } from '../../model/items/chart-item-base';
import { ColorSchemeEntry } from '../../model/colorization/color-scheme-entry';
import { ObjectPropertiesWrapper } from '../_object-properties-wrapper';
import { DataDashboardItem } from '../../model/items/data-dashboard-item';
import { EntryEditorViewModel } from './internal/_entry-editor-model';
import { ColorPickerModel } from './internal/_color-picker-model';
import * as ko from 'knockout';
export declare class DashboardColorSchemeEditorExtension implements IExtension {
    private dashboardControl;
    name: string;
    private _menuItem;
    private _subscriptions;
    private selected;
    private _propertiesPanelExtension;
    private dataSourceBrowserExtension;
    static _isColoringSupported(item: DashboardItem): boolean;
    constructor(dashboardControl: DashboardControl);
    _updateExtensionModel(): void;
    start(): void;
    stop(): void;
    _getColorSchemeWrapper(model: ChartItemBase): ObjectPropertiesWrapper;
    _getColoringWrapper(model: DataDashboardItem): ObjectPropertiesWrapper;
    _colorSchemeModel: ko.Observable<ColorSchemeModel>;
    _colorPalette: ko.ObservableArray<Color>;
    _entryEditorModel: EntryEditorViewModel;
    _colorPickerModel: ko.Computed<ColorPickerModel>;
    _selectedEntry: ko.Observable<ColorSchemeEntry>;
    _createNewEntry: () => void;
}
