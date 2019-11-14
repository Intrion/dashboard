/**
* DevExpress Dashboard (_treemap-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from './_base-item';
import dxTreeMap from 'devextreme/viz/tree_map';
import { Options as dxTreeMapOptions } from 'devextreme/viz/tree_map';
export declare class treemapItem extends baseItem {
    itemElementCustomColor: JQuery.Callbacks<Function>;
    treemapViewer: dxTreeMap;
    constructor(container: HTMLElement, options: any);
    dispose(): void;
    protected _initializeData(newOptions: any): void;
    protected _clearSelectionUnsafe(): void;
    protected selectTupleUnsafe(tuples: any, state: any): void;
    protected _setSelectionUnsafe(values: any): void;
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    protected updateContentStateUnsafe(): void;
    _selectNodes(valueSet: any, state: any): void;
    _clickAction(tuples: any): void;
    _elementCustomColor(eventArgs: any): void;
    _getTreeMapViewerOptions(): dxTreeMapOptions;
    _getLayoutAlgorithm(): "squarified" | "strip" | "sliceAndDice" | "rotatedSliceAndDice";
    _getLayoutDirection(): "leftBottomRightTop" | "leftTopRightBottom" | "rightBottomLeftTop" | "rightTopLeftBottom";
    _getDataPoint(element: any): {
        getValues: () => any;
        getMeasureIds: () => any[];
        getDeltaIds: () => any[];
    };
    _getElementInteractionValue(element: any): any;
    _getDataPointMeasureIds(): any[];
    protected _updateContentSizeUnsafe(): void;
    _getWidget(): dxTreeMap;
    _isMultiDataSupported(): boolean;
    protected _applySelectionUnsafe(): void;
}
