/**
* DevExpress Dashboard (_notificator-view-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { Notification } from '../../model/internal/_interfaces';
import * as ko from 'knockout';
export declare class NotificationControllerViewModel {
    private _visible;
    visible: ko.Observable<boolean>;
    type: ko.Observable<string>;
    notifications: ko.ObservableArray<Notification>;
    suspended: ko.Observable<boolean>;
    displayTime: ko.Computed<number>;
    reset(): void;
    updateNotification(type: string, title: string, detail?: any): void;
}
