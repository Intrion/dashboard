/**
* DevExpress Dashboard (_list-element.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { filterElementBaseItem } from './_base-element';
import dxList from 'devextreme/ui/list';
export declare let cssListBoxClassNames: {
    borderVisible: string;
    separatorHidden: string;
    item: string;
};
export declare class listFilterElement extends filterElementBaseItem {
    constructor(container: HTMLElement, options: any);
    protected _setSelectionUnsafe(values: any): void;
    protected _clearSelectionUnsafe(): void;
    _generateInnerBorderClassesUnsafe(element: HTMLElement): string[];
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    _getWidgetName(): string;
    _createWidget(div: HTMLElement, opts: any): dxList;
    _getSelection(): any;
    _getOptions(includeActions: any): Object;
}
