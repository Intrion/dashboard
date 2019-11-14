/**
* DevExpress Dashboard (_collection-editor-viewmodel.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { KnockoutTemplate } from '../../../common/common-interfaces';
import * as ko from 'knockout';
export interface ICollectionEditorOptions<T> extends DxDesigner.Analytics.Utils.ISerializationInfo {
    addHandler: () => T;
    allowAdd?: ko.Observable<boolean>;
    editHandler?: (T: any, CollectionEditorEditItemArguments: any) => void;
    customTemplate?: string;
    buttonsVisibility?: {
        add?: ko.Observable<boolean>;
        edit?: ko.Observable<boolean>;
        updown?: ko.Observable<boolean>;
        remove?: ko.Observable<boolean>;
    };
    customActions?: Array<{
        name: string;
        icon: string;
        action: any;
    }>;
}
export declare class CollectionEditorEditItemArguments {
    requestRecalculation: JQuery.Callbacks<Function>;
    createImmediately: boolean;
}
export declare class CollectionEditor<T> {
    private params;
    constructor(params: {
        target: ko.Observable<ko.ObservableArray<T>>;
        info: ko.Observable<ICollectionEditorOptions<T>>;
        getInfo?: ko.Observable<(model: T) => ICollectionEditorOptions<T>>;
        filter?: ko.Observable<(T: any) => boolean>;
        selectedItem?: ko.Observable<T>;
        headerVisible?: ko.Observable<boolean>;
        getDisplayText?: ko.Observable<(item: T) => string>;
        editorOptions?: any;
        noDataText?: string;
    });
    readonly info: ICollectionEditorOptions<T>;
    originalValues: ko.Observable<ko.ObservableArray<T>>;
    values: ko.Computed<Array<T>>;
    addEnabled: ko.Computed<boolean>;
    upEnabled: ko.Computed<boolean>;
    downEnabled: ko.Computed<boolean>;
    addVisible: ko.Observable<boolean>;
    editVisible: ko.Observable<boolean>;
    updownVisible: ko.Observable<boolean>;
    removeVisible: ko.Observable<boolean>;
    customActions: ko.ObservableArray<{
        name: string;
        icon: string;
        action: any;
    }>;
    editorOptions: any;
    selection: ko.Computed<T>;
    internalSelection: ko.Observable<any>;
    item2Edit: ko.Observable<T>;
    headerVisible: ko.Observable<boolean>;
    noDataText: string;
    readonly propertyName: string;
    getDisplayText: (item: T) => string;
    getItemText: (item: T) => any;
    createEditor(): DxDesigner.Analytics.Widgets.Editor;
    createTemplate(itemModel: any): KnockoutTemplate;
    select: (model: {
        itemData: any;
    }) => void;
    add: () => void;
    edit: () => void;
    remove: () => void;
    up: () => void;
    down: () => void;
    dispose(): void;
}
