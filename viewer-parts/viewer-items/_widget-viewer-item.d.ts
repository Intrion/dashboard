/**
* DevExpress Dashboard (_widget-viewer-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from './_base-item';
import { IWidgetsViewer } from '../widgets/widgets-viewer/_widgets-viewer';
import { IWidgetItemDataAccessor, widgetItemCore } from './_widget-viewer-item-core';
export declare class widgetViewerItem extends baseItem {
    widgetsViewer: IWidgetsViewer;
    $headerDiv: JQuery;
    constructor(container: HTMLElement, options: any);
    protected _clearSelectionUnsafe(): void;
    protected getInfoUnsafe(): any;
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    protected createWidgetViewer(element: HTMLElement, options: any): IWidgetsViewer;
    protected _getContainerPositionUnsafe(): {
        left: number;
        top: number;
        width: number;
        height: number;
        offsetX: number;
        offsetY: number;
    };
    _getSpecificWidgetViewerOptions(): {
        itemOptions: {
            encodeHtml: any;
        };
    };
    _getWidgetType(): void;
    _isHoverEnabled(): boolean;
    _configureHover(selectionValues: any): {
        hoverEnabled: boolean;
        cursor: string;
    };
    _getWidgetViewerOptions(): any;
    _supportAnimation(): boolean;
    _getDataSource(): any;
    _getElementInteractionValue(element: any, viewModel?: any): any;
    _getOnClickHandler(): (e: any) => void;
    _getOnHoverHandler(): (e: any) => void;
    _convertContentArrangementMode(contentArrangementMode: any): "auto" | "column" | "row";
    protected _resizeUnsafe(): void;
    protected updateContentStateUnsafe(): void;
    _setSourceItemProperties(sourceItem: widgetItemCore, elementModel: any, props: IWidgetItemDataAccessor): void;
    _isMultiDataSupported(): boolean;
    _ensureOptions(options: any): void;
}
