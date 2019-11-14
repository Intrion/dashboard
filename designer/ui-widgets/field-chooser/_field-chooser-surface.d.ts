/**
* DevExpress Dashboard (_field-chooser-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDataField } from '../../../model/data-sources/_data-field';
import { ISlidableListsNavigable } from '../_ui-widgets';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { CalcFieldEditor } from '../../calc-field-editor/_calc-field-editor';
import { CalculatedField } from '../../../model/data-sources/calculated-field';
import 'devextreme/ui/text_box';
import 'devextreme/ui/scroll_view';
import dxTreeView from 'devextreme/ui/tree_view';
import dxList from 'devextreme/ui/list';
import { Options as dxTreeViewOptions } from 'devextreme/ui/tree_view';
import * as ko from 'knockout';
export declare class FieldChooserItem {
    data: IDataField;
    static getName(data: IDataField): string;
    constructor(data: IDataField);
    readonly displayName: string;
    readonly name: string;
    readonly isHierarchy: boolean;
    readonly isLeaf: boolean;
    readonly isGroup: boolean;
    readonly type: string;
    readonly normalizedType: string;
    readonly isCalcField: boolean;
    readonly isOlap: boolean;
    readonly isOlapDimension: boolean;
    readonly isOlapDimensionHierarchy: boolean;
    readonly isOlapMeasure: boolean;
    readonly isList: boolean;
    readonly disabled: boolean;
    readonly typeTooltip: string;
}
export declare class TreeViewFieldChooserItem extends FieldChooserItem {
    data: IDataField;
    id: string;
    parentId: string;
    constructor(data: IDataField, id: string, parentId: string);
    selected: boolean;
}
export interface SearchResultItem {
    path: string;
    item: FieldChooserItem;
}
export declare class FieldChooserList {
    private owner;
    path: string;
    pathParts: string[];
    private _selectedField;
    constructor(owner: SliderController, path: string, pathParts: string[], _selectedField: ko.Observable<IDataField>);
    ancestors: string[];
    itemClick: (args: {
        itemData: FieldChooserItem;
        component: dxList;
    }) => void;
    reload(): void;
    items: ko.ObservableArray<FieldChooserItem>;
    index: ko.Observable<number>;
    ready: ko.Observable<boolean>;
    selectedItemName: ko.Observable<string>;
    loading: ko.Observable<boolean>;
}
export declare class SliderController implements ISlidableListsNavigable {
    static TRANSITION_TIME: number;
    constructor(params: {
        startPath: ko.Observable<string>;
        dataSourceBrowser: DataSourceBrowser;
        filter: (dataField: IDataField) => boolean;
        selectedField: ko.Observable<IDataField>;
        listChanged: () => void;
    });
    rootPath: ko.Observable<string>;
    selectedField: ko.Observable<IDataField>;
    dataSourceBrowser: DataSourceBrowser;
    filter: (dataField: IDataField) => boolean;
    lists: ko.ObservableArray<FieldChooserList>;
    isSliding: boolean;
    listChanged: () => void;
    slide(list: FieldChooserList, item: FieldChooserItem): void;
    backClick: (pathItem: string, ancestors: string[]) => void;
}
export declare function getScrollViewUpdater(element: HTMLElement): () => void;
export declare class FieldChooserController extends SliderController {
    calcFieldEditor: CalcFieldEditor;
    readonly dataSourceName: string;
    readonly canAddCalculatedField: boolean;
    addCalcField: () => void;
    editCalcField: () => void;
    removeCalcField: () => void;
    onCalcFieldSaveHandler: (calcField: CalculatedField) => void;
    getCurrentCalcField: () => CalculatedField;
    isCalcFieldSelected: ko.PureComputed<boolean>;
    private _navigateToSelection;
    constructor(params: {
        startPath: ko.Observable<string>;
        dataSourceBrowser: DataSourceBrowser;
        filter: (dataField: IDataField) => boolean;
        selectedField: ko.Observable<IDataField>;
        listChanged: () => void;
    });
    isSearchMode: ko.Observable<boolean>;
    searchString: ko.Observable<string>;
    searchResults: ko.ObservableArray<SearchResultItem>;
    hasSearchResults: ko.Observable<boolean>;
    searchButtonClick: (_: any, ev: JQueryEventObject) => void;
    selectViaSearchResults: (data: {
        itemData: SearchResultItem;
    }) => void;
    selectedSearchResult: ko.Computed<SearchResultItem>;
    isListMode: ko.Observable<boolean>;
    setListMode: () => void;
    setTreeMode: () => void;
    hasGroups: ko.Computed<boolean>;
    treeViewInstanceResolver: JQuery.Deferred<dxTreeView, any, any>;
    readonly dataSourceTreeOptions: dxTreeViewOptions;
}
