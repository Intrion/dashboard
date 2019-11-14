/**
* DevExpress Dashboard (_tree-element.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { filterElementBaseItem } from './_base-element';
import dxTreeView from 'devextreme/ui/tree_view';
import dxTreeList from 'devextreme/ui/tree_list';
export declare let cssTreeViewClassNames: {
    borderVisible: string;
    topBorder: string;
    item: string;
};
export declare class treeViewFilterElement extends filterElementBaseItem {
    protected _setSelectionUnsafe(values: any): void;
    _generateInnerBorderClassesUnsafe(element: HTMLElement): string[];
    protected _clearSelectionUnsafe(): void;
    protected renderContentUnsafe(element: HTMLElement, changeExisting: boolean, afterRenderCallback?: any): boolean;
    _getWidgetName(): "dxTreeView" | "dxTreeList";
    _createWidget(div: HTMLElement, opts: any): dxTreeList | dxTreeView;
    _getOptions(includeActions: any): Object;
    private _onScrollChanged;
}
