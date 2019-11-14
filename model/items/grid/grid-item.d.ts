/**
* DevExpress Dashboard (grid-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataDashboardItem } from '../data-dashboard-item';
import { GridDimensionColumn, GridMeasureColumn, GridDeltaColumn, GridSparklineColumn, GridHyperlinkColumn, GridColumn } from './grid-columns';
import { DataItemLink, DataItem } from '../../data-item/data-item';
import { Dimension } from '../../data-item/dimension';
import { DashboardItemInteractivityOptions } from '../options/interactivity-options';
import { GridOptions } from './grid-options';
import { IWidthOptions } from '../../../viewer-parts/viewer-items/data-grid-item/_column-width-calculator';
import { MeasureCalculationWindowDefinition } from '../../data-item/window-definition/measure-calc-window-definition';
import * as ko from 'knockout';
export declare class GridItem extends DataDashboardItem {
    static _gridColumnTypesMap: {
        "GridDimensionColumn": {
            constructor: typeof GridDimensionColumn;
            displayName: string;
            icon: string;
        };
        "GridMeasureColumn": {
            constructor: typeof GridMeasureColumn;
            displayName: string;
            icon: string;
        };
        "GridDeltaColumn": {
            constructor: typeof GridDeltaColumn;
            displayName: string;
            icon: string;
        };
        "GridSparklineColumn": {
            constructor: typeof GridSparklineColumn;
            displayName: string;
            icon: string;
        };
        "GridHyperlinkColumn": {
            constructor: typeof GridHyperlinkColumn;
            displayName: string;
            icon: string;
        };
    };
    private __sparklineArgument;
    sparklineArgument: ko.Observable<Dimension>;
    interactivityOptions: DashboardItemInteractivityOptions;
    gridOptions: GridOptions;
    columns: ko.ObservableArray<GridColumn>;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    _createGridColumn(columnJSON: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer): GridColumn;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    protected _getMasterFilterMode(): string;
    protected _getDrillDownEnabled(): boolean;
    protected _getIgnoreMasterFilter(): boolean;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
    protected _cleanDataItemDependencies(): void;
    protected _updateContentViewModel(content: any): void;
    _isAttribute(dataItem: DataItem): boolean;
    _setColumnWidthOptions(clientState: {
        widthOptions: IWidthOptions;
    }): void;
    _getDefaultCalculationWindowDefinition(): MeasureCalculationWindowDefinition;
    _setClientState(clientState: any): void;
    _getInteractivityAxisDimensionCount(): number;
}
