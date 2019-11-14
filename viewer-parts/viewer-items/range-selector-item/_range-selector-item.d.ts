/**
* DevExpress Dashboard (_range-selector-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from '../_base-item';
import { customTimePeriodDialog } from '../../widgets/dialogs/_custom-time-period-dialog';
import { IRange, IDateTimePeriod, IEntireRange } from './_datetime-period-converter';
import dxRangeSelector from 'devextreme/viz/range_selector';
import { Options as dxRangeSelectorOptions } from 'devextreme/viz/range_selector';
import { ViewerToolbarItem } from '../../widgets/caption-toolbar/caption-toolbar-options';
export declare class rangeSelectorItem extends baseItem {
    itemElementCustomColor: any;
    timePeriodMenuSelectedIndex: number | undefined;
    rangeSelectorViewer: dxRangeSelector;
    _customTimePeriodDialog: customTimePeriodDialog;
    timePeriodMenu: any;
    timePeriodSingle: any;
    private _periodUpdatingLocked;
    protected readonly _isBottomFloatingToolbarPosition: boolean;
    constructor(container: HTMLElement, options: any);
    private _getCustomTimePeriodDialog;
    protected _initializeData(newOptions: any): void;
    protected _clearSelectionUnsafe(): void;
    protected _clearSelectionBase(): void;
    protected _setSelectionUnsafe(values: Array<Array<any>>): void;
    _getCurrentRange(): rangeFilterSelection;
    getEntireRange(): rangeFilterSelection;
    dispose(): void;
    _setRange(range: IRange): void;
    _setPredefinedRange(dateTimePeriodName: string): void;
    _getAvailablePredefinedRanges(): any;
    _getCurrentPredefinedRange(): any;
    predefinedRangeChanged: (rangeName: any) => void;
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    _setDefaultDateTimePeriod(): void;
    _isBorderRequired(): boolean;
    protected _getContainerPositionUnsafe(): {
        left: number;
        top: number;
        width: number;
        height: number;
        offsetX: number;
        offsetY: number;
    };
    _getRangeSelectorViewerOptions(): dxRangeSelectorOptions;
    protected _getEntireRange(): IRange;
    protected _getSelectedValues(): any;
    _isValidValues(values: Array<any>): boolean;
    _getSliderMarkerFormat(): any;
    _isDiscreteDateTimeScale(argument: any): any;
    _getSelectedRangeChangedHandler(): (e: any) => void;
    protected _resizeUnsafe(): void;
    _getWidget(): dxRangeSelector;
    _elementCustomColor(eventArgs: any): void;
    _hasTimePeriods(): boolean;
    _isDateTimePeriodSupported(): any;
    _getSpecificActionToolbarItems(): Array<ViewerToolbarItem>;
    _setPredefinedPeriod(period: IDateTimePeriod, index: number | undefined): void;
    _showCustomTimePeriodDialog(): void;
    _setTimePeriodMenuSelectedIndex(index: number | undefined): void;
    _isIntYearGroupInterval(): boolean;
}
export declare class rangeFilterSelection implements IEntireRange {
    minimum: number;
    maximum: number;
    constructor(range: IRange);
    getMaximum(): number;
    setMaximum(value: any): void;
    getMinimum(): number;
    setMinimum(value: any): void;
}
