/**
* DevExpress Dashboard (_dialog-form.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import dxPopup from 'devextreme/ui/popup';
export declare let dialogClasses: {
    form: string;
    simpleDialog: string;
    element: string;
    elementOffset: string;
    name: string;
    disabledName: string;
    box: string;
    buttons: string;
    elementTextBox: string;
    elementNumberBox: string;
    elementLargeMarginTop: string;
};
export declare let dialogSizes: {
    width: number;
    height: number;
    minWidth: number;
    minHeight: number;
    elementsHeight: number;
};
export interface DialogFormOptions {
    allowScrolling: boolean;
    fullScreenMode?: boolean;
    dialogContainer: HTMLElement;
    title?: string;
    width: number | string;
    height: number | string;
    deferredRendering: boolean;
    buttons: Array<{
        className?: string;
        name?: string;
        hide?: boolean;
        func?: (...args: any[]) => void;
        isDefault?: boolean;
    }>;
    setActualState: (width: number) => void;
    onShowing?: (args: any) => void;
    onHidden?: (args: any) => void;
    onShown?: (args: any) => void;
    renderContent: (args: any) => HTMLElement;
    disposeContent: () => void;
}
export declare class dialogForm {
    options: DialogFormOptions;
    popupInstance: dxPopup;
    scrollableContent: HTMLElement;
    controlCreationCallbacks: JQuery.Callbacks<Function>;
    constructor(options: DialogFormOptions);
    showDialog(): void;
    hideDialog(): void;
    dispose(): void;
    _initialize(): void;
    _renderPopupContent(component: dxPopup): void;
    _setLabelsWidth(): number;
}
