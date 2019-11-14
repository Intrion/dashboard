/**
* DevExpress Dashboard (notificator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IErrorHandler } from '../internal/_interfaces';
import { ErrorInfo } from '../common-interfaces';
import { NotificationControllerViewModel } from './_notificator-view-model';
export declare class NotificationController implements IErrorHandler {
    static _getErrorTextFromResponse(request: JQueryXHR): any;
    static _getDetailedErrorMessage(errorInfo: ErrorInfo): string;
    _viewModel: NotificationControllerViewModel;
    suspended(isSuspended: boolean): void;
    showState(message: string): void;
    showSuccess(message: string): void;
    showError(title: string, errorInfo?: ErrorInfo): void;
    reset(): void;
}
