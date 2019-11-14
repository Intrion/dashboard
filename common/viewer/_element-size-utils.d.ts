/**
* DevExpress Dashboard (_element-size-utils.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { baseItem } from "../../viewer-parts/viewer-items/_base-item";
import { ISizeController } from "./layout/_layout";
import { IDisposable } from "../../model";
export declare function createItemSizeUpdater(item: baseItem, sizeController: ISizeController): IDisposable;
export declare function createElementSizeUpdater(element: HTMLElement, sizeController: ISizeController): {
    dispose: () => JQueryCallback;
};
export declare function setElementSize(element: HTMLElement, sizeController: ISizeController): void;
