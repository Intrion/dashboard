/**
* DevExpress Dashboard (_model-subscriber.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { PropertyCategory } from '../../model/metadata/_base-metadata';
import { IDisposable } from '../../model/disposable-object';
export declare class ModelSubscriber implements IDisposable {
    private _model;
    private static dxSubscription;
    private static dxSubscriptionSuspend;
    static changePropertyQuietly(property: any, func: () => any): void;
    private handlers;
    constructor(_model: DxDesigner.Analytics.Utils.ISerializableModel);
    private _unsubscribe;
    private _subscribe;
    _propertyChanged(category: PropertyCategory, model: any, propertyName: string, status: PropertyChangedStatus): void;
    registerHandler(handler: (category: PropertyCategory, model?: any, propertyName?: string, status?: PropertyChangedStatus) => void): void;
    private _isPropertySerializeModel;
    dispose(): void;
}
export declare type PropertyChangedStatus = 'added' | 'deleted' | 'changed' | 'unknown';
