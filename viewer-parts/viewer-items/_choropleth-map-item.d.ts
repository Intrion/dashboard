/**
* DevExpress Dashboard (_choropleth-map-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { mapItem } from './_map-item';
import { Options as dxVectorMapOptions } from 'devextreme/viz/vector_map';
export declare class choroplethMapItem extends mapItem {
    constructor(container: HTMLElement, options: any);
    selectTuple(tuple: any, state: any): void;
    protected _setSelectionUnsafe(values: any): void;
    protected updateContentStateUnsafe(): void;
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    _getChoroplethMapViewerOptions(): dxVectorMapOptions;
    _getColorLegend(legendViewModel: any, measureDescriptor: any): any;
    _fillMeasureToolTip(mapDataSourceItem: any, attribute: any, tooltipMeasures: any): void;
    _fillValueMapDataSourceAttrs(mapDataSource: any, choroplethColorizer: any, tooltipMeasures: any, mapItems: any): void;
    _fillDeltaMapDataSourceAttrs(mapDataSource: any, choroplethColorizer: any, tooltipMeasures: any, mapItems: any): void;
    _correctAttributesTitle(attributes: any, displayText: any): void;
    _getDeltaValue(deltaValue: any, deltaValueType: any): any;
    _findAttributeValueByName(attributes: any, attributeName: any): any;
    _getRangeStops(choroplethColorizer: any): any[];
    _convertIndicatorType(type: any): string;
    _getDeltaColorValue(indicatorType: any, isGood: any): -1 | 0.5 | 1.5 | 2.5;
    _getArea(viewModel: any, colors: any, rangeStops: any): {
        colorGroupingField: string;
        colorGroups: any;
        palette: any;
        customize: (items: any) => void;
        selectionMode: string;
        label: {
            enabled: any;
            dataField: string;
        };
    };
    _getDataPoint(element: any): {
        getValues: () => any[];
        getMeasureIds: () => any[];
        getDeltaIds: () => any[];
    };
    _getElementInteractionValue(element: any, viewModel?: any): any[];
}
