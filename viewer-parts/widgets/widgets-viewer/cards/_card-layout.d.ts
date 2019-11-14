/**
* DevExpress Dashboard (_card-layout.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ICardLayoutModel, ICardLayoutElementModel, SparklineOptionsModel } from '../../../viewer-items/_cards-item';
import { IWidgetItemDataAccessor } from '../../../viewer-items/_widget-viewer-item-core';
import { CardWidgetImplementation } from '../../../_card-widget-implementation';
export declare class cardLayout {
    private apiHandlers?;
    rows: Array<cardRow>;
    minWidth: number;
    maxWidth: number;
    getCardBackgroundColor(): string;
    constructor(apiHandlers?: CardWidgetImplementation);
    fill(layoutModel: ICardLayoutModel): void;
    private isDeltaType;
    private convertElementColor;
    getElementValue(data: IWidgetItemDataAccessor, elementModel: ICardLayoutElementModel): {
        getValue: () => any;
        getDefaultText: () => string;
    };
    private convertVAlignment;
    private convertHAlignment;
}
export declare class cardRow {
    vAlignment: verticalAlignment;
    indent: number;
    elements: Array<cardRowElementBase>;
}
export declare abstract class cardRowElementBase {
    hAlignment: horizontalAlignment;
}
export declare class cardRowElement extends cardRowElementBase {
    fontFamily: string;
    color: string;
    predefinedColor: string;
    fontSize: number;
    getValueArgs: (data: IWidgetItemDataAccessor) => {
        getValue: () => any;
        getDefaultText: () => string;
    };
    getText: (data: IWidgetItemDataAccessor) => string;
    getIndicatorType: (data: IWidgetItemDataAccessor) => string;
    getIsGood: (data: IWidgetItemDataAccessor) => boolean;
}
export declare class cardIndicatorElement extends cardRowElementBase {
    height: number;
    width: number;
    getIndicatorType: (data: IWidgetItemDataAccessor) => string;
    getIsGood: (data: IWidgetItemDataAccessor) => boolean;
}
export declare class cardSparklineElement extends cardRowElementBase {
    height: number;
    getSparklineOptions: (data: IWidgetItemDataAccessor) => any;
}
export declare class sparklineOptions {
    viewType: string;
    highlightMinMaxPoints: boolean;
    highlightStartEndPoints: boolean;
    constructor(sparklineOptionsModel: SparklineOptionsModel);
}
export declare enum horizontalAlignment {
    left = 0,
    right = 1,
    center = 2
}
export declare enum verticalAlignment {
    top = 0,
    center = 1,
    bottom = 2
}
