/**
* DevExpress Dashboard (_cards-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { kpiItem } from './_kpi-item';
import { cardLayout } from '../widgets/widgets-viewer/cards/_card-layout';
import { IWidgetsViewer } from '../widgets/widgets-viewer/_widgets-viewer';
import { widgetItemCore } from './_widget-viewer-item-core';
import { CardWidgetImplementation } from '../_card-widget-implementation';
export interface ICardModel {
    Layout?: ICardLayoutModel;
}
export interface ICardLayoutModel {
    MinWidth?: number;
    MaxWidth?: number;
    Rows?: Array<ICardLayoutRowModel>;
}
export interface ICardLayoutRowModel {
    VAlignment?: string;
    Indent?: number;
    Elements?: Array<ICardLayoutElementModel>;
}
export interface ICardLayoutElementModel {
    Type?: string;
    Color?: number;
    PredefinedColor?: string;
    HAlignment?: string;
    FontSize?: number;
    FontFamily?: string;
    FontStyle?: string;
    DataId?: string;
    Text?: string;
    Size?: number;
    Id?: string;
    IndicatorWidthRatio?: number;
    SparklineOptions?: SparklineOptionsModel;
}
export interface SparklineOptionsModel {
    ViewType: string;
    HighlightMinMaxPoints: boolean;
    HighlightStartEndPoints: boolean;
}
export declare class cardsItem extends kpiItem {
    _hasSparkline: boolean;
    useNewViewer: boolean;
    layoutCollection: {
        [id: string]: cardLayout;
    };
    apiHandlers: CardWidgetImplementation;
    constructor(container: HTMLElement, options: any);
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    protected createWidgetViewer(element: HTMLElement, options: any): IWidgetsViewer;
    private initializeLayoutCollection;
    protected _isPaneEmpty(): boolean;
    _isBorderRequired(): boolean;
    _isTransparentBackground(): boolean;
    _getSpecificWidgetViewerOptions(): any;
    _getIgnorePadding(): boolean;
    _getWidgetType(): string;
    _getElementsName(): string;
    private setOldCardProperties;
    private setNewCardProperties;
    _setSourceItemProperties(sourceItem: widgetItemCore, cardModel: any, props: any): void;
    _getWidget(): CardWidgetImplementation;
    _generateInnerBorderClassesUnsafe(element?: HTMLElement): string[];
}
