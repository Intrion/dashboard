/**
* DevExpress Dashboard (_date-filter-element.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from "../_base-item";
import { IDateTimePeriod } from '../range-selector-item/_datetime-period-converter';
import { DateFilterWidget } from "./date-filter-widget";
import { DateFilterWidgetOptions } from "./_date-filter-widget-options";
export declare let cssDateFilterClassNames: {
    item: string;
};
export declare class dateFilterElement extends baseItem {
    widget: DateFilterWidget;
    timePeriodMenuSelectedIndex: number;
    predefinedRangeChanged: (rangeName: any) => void;
    protected readonly _allowPreview: boolean;
    constructor(container: HTMLElement, options: any);
    _getMinContentHeight(): number;
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    _setDefaultDateTimePeriod(): void;
    protected getInfoUnsafe(): {
        selectedPeriodName: any;
        name: any;
        headerHeight: number;
        position: JQuery.Coordinates;
        width: number;
        height: number;
        virtualSize: any;
        scroll: any;
    };
    protected _setSelectionUnsafe(values: any): void;
    protected _applySelectionUnsafe(): void;
    protected _clearSelectionUnsafe(): void;
    protected _initializeData(newOptions: any): void;
    _clearSelectedValues(): void;
    _clearPeriodsSelection(): void;
    getWidgetOptions(): DateFilterWidgetOptions;
    _mobileLayout(): boolean;
    _convertSelectedValues(value: any): Date;
    _setTimePeriodMenuSelectedIndex(index: number): void;
    _getCurrentPredefinedRange(): any;
    _setPredefinedPeriod(period: IDateTimePeriod, index: number, filterDate?: boolean): void;
    _setPredefinedRange(dateTimePeriodName: string): void;
    setFilter(values: Date[]): void;
    _ensureYearValue(value: any): any;
    _updateContentSizeUnsafe(): void;
    protected _getWidget(): DateFilterWidget;
    _isBorderRequired(): boolean;
    protected _isPaneEmpty(): boolean;
    _isTransparentBackground(): boolean;
    _generateInnerBorderClassesUnsafe(element: HTMLElement): string[];
}
