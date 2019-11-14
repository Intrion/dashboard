/**
* DevExpress Dashboard (_dashboard-component-name-generator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import * as ko from 'knockout';
import { IDisposable } from '../disposable-object';
export interface IDashboardComponent {
    getUniqueNamePrefix: () => string;
}
export declare class DashboardUniqueNameGenerator implements IDisposable {
    private _propertyName;
    private _startIndex;
    private _componentsCollections;
    private _disposables;
    constructor(_propertyName: string, _startIndex: number, ...collections: Array<ko.ObservableArray<IDashboardComponent>>);
    private _ensureUniqueName;
    dispose(): void;
}
