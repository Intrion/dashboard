/**
* DevExpress Dashboard (_item-loading.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import 'devextreme/ui/toast';
import dxToast from 'devextreme/ui/toast';
export interface IItemLoadingElement {
    show(container: HTMLElement): any;
    hide(): any;
    resize(): any;
}
export declare class ItemLoadingElement implements IItemLoadingElement {
    _overlay: dxToast;
    show(container: HTMLElement): void;
    hide(): void;
    resize(): void;
}
