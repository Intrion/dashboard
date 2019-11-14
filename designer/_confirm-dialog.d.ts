/**
* DevExpress Dashboard (_confirm-dialog.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import * as ko from 'knockout';
export declare class ConfirmDialogViewModel {
    confirm(title: string, message: string, okButtonText: string, cancelButtonText: any): JQuery.Promise<any, any, any>;
    confirmTitle: ko.Observable<string>;
    confirmText: ko.Observable<string>;
    confirmVisible: ko.Observable<boolean>;
    confirmButtons: ko.Observable<any[]>;
}
