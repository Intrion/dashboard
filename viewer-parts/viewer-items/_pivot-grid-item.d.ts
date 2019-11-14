/**
* DevExpress Dashboard (_pivot-grid-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from './_base-item';
import { styleSettingsProvider } from '../conditional-formatting/_style-settings-provider';
import dxPivotGrid from 'devextreme/ui/pivot_grid';
import { dxElement } from 'devextreme/core/element';
import DevExpress from 'devextreme/bundles/dx.all';
export declare class pivotGridItem extends baseItem {
    _collapseStateCache: any;
    _conditionalFormattingInfoCache: any[];
    _styleSettingsProvider: styleSettingsProvider;
    pivotGridViewer: dxPivotGrid;
    expandStateChanged: JQuery.Callbacks<Function>;
    protected readonly _captionToolbarSeparatorRequired: boolean;
    constructor(container: HTMLElement, options: any);
    dispose(): void;
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    protected renderPartialContentUnsafe(): void;
    protected getInfoUnsafe(): any;
    getExpandingState(isRowsExpanding?: boolean, isColumnsExpanding?: boolean): {
        rows: any;
        columns: any;
    };
    private _onExpandStateChanged;
    private _getExpandedPaths;
    private _getCollapsedPaths;
    protected _initializeData(newOptions: any): void;
    _getPivotGridOptions(): DevExpress.ui.dxPivotGridOptions;
    _getShowColumnGrandTotals(fields: any): any;
    _showRowGrandTotals(fields: any): any;
    _createHeaderHierarchy(list: any): any[];
    _createCells(list: any): any[];
    _getExpandValueChangingHandler(): (args: any) => void;
    onCollapseStateChanged(isColumn: any, values: any, collapse: any): void;
    protected _resizeUnsafe(): void;
    _getDataPoint(element: any): {
        getValues(name: any): any;
        getDeltaIds: () => any[];
        getMeasureIds: () => any[];
    };
    _getWidget(): dxPivotGrid;
    _onCellPrepared(element: {
        component?: dxPivotGrid;
        element?: dxElement;
        area?: string;
        cellElement?: dxElement;
        cell?: DevExpress.ui.dxPivotGridPivotGridCell;
        rowIndex?: number;
        columnIndex?: number;
    }): void;
}
