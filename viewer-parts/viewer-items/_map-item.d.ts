/**
* DevExpress Dashboard (_map-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import dxVectorMap from 'devextreme/viz/vector_map';
import { Options as dxVectorMapOptions } from 'devextreme/viz/vector_map';
import { IViewport } from '../../model/internal/_interfaces';
import { baseItem } from './_base-item';
import { ViewerToolbarItem } from '../widgets/caption-toolbar/caption-toolbar-options';
export interface IClientSize {
    width: number;
    height: number;
}
export interface IMapClientState {
    viewport: IViewport;
    clientSize: IClientSize;
}
export interface IViewportViewModel extends IViewport {
    CreateViewerPaddings: boolean;
}
export declare abstract class mapItem extends baseItem {
    mapViewer: dxVectorMap;
    clientState: IMapClientState;
    initialExtentChanged: (changed: any) => void;
    isInitialExtentChanged: boolean;
    previousViewportViewModel: IViewportViewModel;
    constructor($container: any, options: any);
    dispose(): void;
    protected _renderContentInternal(element: HTMLElement, changeExisting: boolean, options: any): void;
    protected resetClientViewport(): void;
    private _shouldResetClientViewport;
    private _viewportEquals;
    private _updatePreviousViewport;
    protected _clearSelectionUnsafe(): void;
    protected getInfoUnsafe(): any;
    protected _getSpecificStatePanelItems(): Array<ViewerToolbarItem>;
    protected _getMapViewerOptions(): dxVectorMapOptions;
    protected _getLabelSettings(viewModel: any): {
        label: {
            enabled: any;
            dataField: string;
        };
    };
    private _calculateZoomFactor;
    private _translateLon;
    private _translateLat;
    protected _getMapDataSource(mapItems: any, titleName: any): any[];
    protected _configureGeometryLayers(mapDataSource: any, areaSettings: any): any;
    protected _getLegend(legendModel: any): any;
    private _updateLegendPosition;
    protected _isSelected(current: any): boolean;
    protected _getToolTip(name: any, value: any): any;
    protected _getColors(colorModels: any): any;
    protected _updateRangeStops(rangeStops: any, min: any, max: any, percent: any): any[];
    private _updatePercentRangeStops;
    private _getViewport;
    protected _getClientContext(): {
        viewport: {
            LeftLongitude: number;
            TopLatitude: number;
            RightLongitude: number;
            BottomLatitude: number;
            CenterPointLongitude: number;
            CenterPointLatitude: number;
        };
        clientSize: {
            width: number;
            height: number;
        };
    };
    protected _updateClientStateUnsafe(clientState: any): void;
    protected _updateViewport(viewport: any): void;
    protected _updateContentSizeUnsafe(): void;
    viewportChangedCallback: (viewport: any) => void;
    protected _onViewPortChanged(): void;
    onInitialExtent(newViewport?: any): void;
    protected _onInitialExtentUnsafe(newViewport?: any): void;
    private _onInitialExtentBase;
    protected _getWidget(): dxVectorMap;
    private _subscribeItemEvents;
    private _unsubscribeItemEvents;
    private _toggleInitialExtentChanged;
}
