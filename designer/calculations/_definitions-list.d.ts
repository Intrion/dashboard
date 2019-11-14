/**
* DevExpress Dashboard (_definitions-list.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ICollectionEditorOptions } from '../ui-widgets/collection-editor/_collection-editor-viewmodel';
import * as ko from 'knockout';
export declare class DefinitionsList<T> {
    private params;
    constructor(params: {
        target: ko.Observable<ko.ObservableArray<T>>;
        info: ko.Observable<ICollectionEditorOptions<T>>;
        filter?: ko.Observable<(T: any) => boolean>;
        selectedItem?: ko.Observable<T>;
        editHandler?: ko.Observable<(model: any) => void>;
        enableEdit?: ko.Observable<(model: any) => boolean>;
        disabled?: ko.Observable<boolean>;
    });
    info: ko.Observable<ICollectionEditorOptions<T>>;
    originalValues: ko.ObservableArray<T>;
    values: ko.Computed<Array<T>>;
    editEnabled: ko.Computed<boolean>;
    selection: ko.Observable<T>;
    disabled: ko.Observable<boolean>;
    edit: () => void;
    readonly propertyName: string;
}
