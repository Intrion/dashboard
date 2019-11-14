/**
* DevExpress Dashboard (_data-grid-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from '../_base-item';
import { ColumnWidthCalculator, IBestFitProvider, ColumnWidthMode } from './_column-width-calculator';
import { Options as dxDataGridOptions } from 'devextreme/ui/data_grid';
import dxDataGrid from 'devextreme/ui/data_grid';
import { styleSettingsProvider } from '../../conditional-formatting/_style-settings-provider';
import { CellValue } from '../../../data/data-controllers/_grid-data-controller';
import { GridColumnTotalType } from '../../../model/enums';
export declare class dataGridItem extends baseItem {
    _calculator: ColumnWidthCalculator;
    _styleSettingsProvider: styleSettingsProvider;
    _dataGrid: dxDataGrid;
    _updateLocked: boolean;
    _digits_string: string;
    charWidth: number;
    resetClientStateOnUpdate: boolean;
    manualyResetClientState: boolean;
    protected readonly _captionToolbarSeparatorRequired: boolean;
    constructor(container: HTMLElement, options: any);
    TextAlignment: {
        [key: string]: 'left' | 'right' | 'center';
    };
    DisplayMode: {
        Value: string;
        Delta: string;
        Bar: string;
        Sparkline: string;
        Image: string;
        Hyperlink: string;
    };
    SummaryType: {
        Count: string;
        Min: string;
        Max: string;
        Avg: string;
        Sum: string;
    };
    CssClasses: {
        wordWrap: string;
        gridAdaptiveCellValue: string;
    };
    dispose(): void;
    protected _clearSelectionUnsafe(): void;
    protected _setSelectionUnsafe(values: any): void;
    protected _selectTuplesCore(tuples: any, updateTupleDelegate: any, state: any): void;
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    protected getInfoUnsafe(): any;
    _parseFilter(filterItems: any, columnIndex: any): string;
    _parseFilterOperatorPart(filterItemPart: any, exprColumnIndex: any): any;
    _getSortInfo(): any[];
    protected _initializeData(newOptions: any): void;
    getValueItem(columnName: string, index: number): CellValue;
    _bestFitProvider: IBestFitProvider;
    _resetColumnWidths(): void;
    _updateColumnsWidth(columnWidths: Array<number>): void;
    _getColumnWidthProperty(): string;
    _getColumnWidthMode(): ColumnWidthMode;
    _getDefaultBestCharacterCount(index: number): number;
    _beginResize(): void;
    _endResize(): void;
    _updateCharWidth(): void;
    gridWidthOptionsChanged: (args: {
        widthOptions: any;
    }) => void;
    _clientStateUpdateDebounced: (...args: any[]) => void;
    _onColumnsChanging(e: {
        component: dxDataGrid;
        optionNames: any;
    }): void;
    _getViewOptions(): dxDataGridOptions;
    _customizeViewOptions: (opts: dxDataGridOptions) => void;
    _getCommonOptions(): dxDataGridOptions;
    _getRowsValues(data: {
        index: number;
    }): any;
    _getSelectedRowIndices(): any;
    _getTotalCaptionTemplate(totalType: GridColumnTotalType): any;
    _getTotals(): any[];
    _calculateCustomSummary(options: any): void;
    _getColumns(): any[];
    _isDetail(rowType: string): boolean;
    protected _applySelectionUnsafe(): void;
    protected _resizeUnsafe(): void;
    _getDataPoint(element: any): {
        getValues: (name: any) => any;
        getDeltaIds: () => any[];
        getMeasureIds: () => any[];
        getSelectionValues: (name: any) => any;
    };
    _getColumnsByColumnType(columnType: any): any[];
    _getColumnDataIdsByColumnType(columnType: any): any[];
    _getElementInteractionValue(element: any, viewModel: any): any;
    _getWidget(): dxDataGrid;
    _setGridSelection(values: any, keyProcessingDelegate?: any): void;
    _selectRows(data: any): void;
    _isMultiDataSupported(): boolean;
}
