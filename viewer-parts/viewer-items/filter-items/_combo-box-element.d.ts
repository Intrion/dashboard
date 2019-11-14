/**
* DevExpress Dashboard (_combo-box-element.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { filterElementBaseItem } from './_base-element';
import dxSelectBox from 'devextreme/ui/select_box';
export declare let cssComboBoxClassNames: {
    item: string;
    multiText: string;
    margins: string;
};
export declare class comboBoxFilterElement extends filterElementBaseItem {
    constructor(container: HTMLElement, options: any);
    protected _setSelectionUnsafe(values: any): void;
    protected _clearSelectionUnsafe(): void;
    protected readonly _isBottomFloatingToolbarPosition: boolean;
    protected readonly _allowPreview: boolean;
    _getWidgetName(): "dxSelectBox" | "dxTagBox";
    protected _createWidgetDiv(): HTMLDivElement;
    _createWidget(div: HTMLElement, opts: any): dxSelectBox;
    _getMinContentHeight(): number;
    _generateInnerBorderClassesUnsafe(element: HTMLElement): string[];
    _getSelection(): any;
    _getOptions(includeActions: any): Object;
    protected _resizeUnsafe(): void;
}
