/**
* DevExpress Dashboard (_kpi-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { widgetViewerItem } from './_widget-viewer-item';
import { widgetItemCore } from './_widget-viewer-item-core';
export declare class kpiItem extends widgetViewerItem {
    constructor(container: HTMLElement, options: any);
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    _showTitle(): boolean;
    _getElementsName(): any;
    protected selectTupleUnsafe(tuple: any, state: any): void;
    protected _setSelectionUnsafe(values: any): void;
    _getDataPoint(element: any): {
        getValues: (name: any) => any;
        getDeltaIds: () => any[];
        getMeasureIds: () => any[];
        getSelectionValues: () => any;
    };
    _isMultiDataSupported(): boolean;
    _setSourceItemProperties(sourceItem: widgetItemCore, elementModel: any, props: any): void;
    protected _applySelectionUnsafe(): void;
}
