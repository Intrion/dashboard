/**
* DevExpress Dashboard (_title-component.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DisposableObject } from '../../../model/disposable-object';
import { IExtension } from '../../common-interfaces';
import { DashboardParameterDialogExtension } from '../../extensions/parameter-dialog-extension';
import { DashboardExportExtension } from '../../extensions/export-extension';
import { ViewerApiExtension } from '../../extensions/viewer-api-extension';
import { TitleComponentOptions } from './_dashboard-title-model';
import * as ko from 'knockout';
export declare class DashboardTitleContext extends DisposableObject implements IDashboardTitleContext {
    constructor(encodeHtml: boolean, findExtension: (name: string) => IExtension, allowExport?: boolean);
    encodeHtml: boolean;
    parametersExtension: ko.Computed<DashboardParameterDialogExtension>;
    exportExtension: ko.Computed<DashboardExportExtension>;
    viewerApiExtension: ko.Computed<ViewerApiExtension>;
}
export interface IDashboardTitleContext {
    encodeHtml: boolean;
    parametersExtension: ko.Computed<DashboardParameterDialogExtension>;
    exportExtension: ko.Computed<DashboardExportExtension>;
    viewerApiExtension: ko.Computed<ViewerApiExtension>;
}
export declare class DashboardTitleComponent extends DisposableObject {
    private params;
    private container;
    private controlContainer;
    constructor(params: {
        options: ko.Computed<TitleComponentOptions>;
        width: ko.Observable<number>;
        height: ko.Observable<number>;
        encodeHtml: boolean;
        className: string;
    }, container: HTMLElement, controlContainer: HTMLElement);
    initialize(): void;
}
