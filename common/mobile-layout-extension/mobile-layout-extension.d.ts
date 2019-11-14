/**
* DevExpress Dashboard (mobile-layout-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IExtension } from '../common-interfaces';
import { DashboardControl } from '../dashboard-control';
import * as ko from 'knockout';
import { DisposableType } from '../../model/disposable-object';
export declare class MobileLayoutExtension implements IExtension {
    private dashboardControl;
    name: string;
    _disposables: DisposableType[];
    mobileLayoutEnabled: ko.Computed<boolean>;
    private _options;
    readonly _mobileLayoutTemplateName: string;
    constructor(dashboardControl: DashboardControl, options?: MobileLayoutExtensionOptions);
    _expectedMobileLayoutMode(): boolean;
    _canMobileLayoutBeEnabled: ko.Computed<boolean>;
    start(): void;
    _dashboardList: any[];
    stop(): void;
    private _originalHandlers;
}
export declare type MobileLayoutMode = "Always" | "Auto" | "Never";
export interface MobileLayoutExtensionOptions {
    mobileLayoutEnabled?: MobileLayoutMode;
}
