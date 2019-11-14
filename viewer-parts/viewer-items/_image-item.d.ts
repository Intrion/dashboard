/**
* DevExpress Dashboard (_image-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from './_base-item';
export declare class imageItem extends baseItem {
    imgSrc: any;
    img: JQuery;
    _initialHeight: any;
    _initialWidth: any;
    constructor(container: HTMLElement, options: any);
    protected _initializeData(newOptions: any): void;
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    _loadImage(): void;
    _clearImgTag(): void;
    _loadedImgProcessing(): void;
    _setHorizontalAlignment($img: any, horizontalAlignment: any): void;
    _setVerticalAlignment($img: any, verticalAlignment: any): void;
    _setImgSizeWithProportions($img: any, containerProportion: any): "horizontalCentering" | "verticalCentering";
    _getImageSource(imageViewModel: any): any;
    protected _resizeUnsafe(): void;
    _getWidget(): JQuery<HTMLElement> & Element;
}
