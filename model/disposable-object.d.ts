/**
* DevExpress Dashboard (disposable-object.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import * as ko from 'knockout';
export interface IDisposable {
    dispose(): void;
}
export declare type DisposableType = IDisposable | ko.Subscription | ko.ComputedFunctions;
export declare class DisposableObject implements IDisposable {
    protected _disposables: Array<DisposableType>;
    protected disposed: boolean;
    protected toDispose(...disposables: DisposableType[]): void;
    dispose(): void;
}
