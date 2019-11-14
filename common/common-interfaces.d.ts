/**
* DevExpress Dashboard (common-interfaces.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { Dashboard } from '../model/dashboard';
import { ICustomItemMetaData } from '../model/items/custom-item/meta';
import { CustomItem } from '../model/items/custom-item/custom-item';
import { CustomItemViewer } from '../common/custom-viewer-item/custom-viewer-item';
import { dxElement } from 'devextreme/core/element';
export interface DashboardContainer {
    id: string;
    dashboard: Dashboard;
}
export declare type ErrorInfo = JQueryXHR | string;
export interface IExtension {
    name: string;
    start?(): void;
    stop?(): void;
    processKeyEvent?(keyEventType: KeyEventType, eventArgs: JQueryKeyEventObject): boolean;
    designerToViewerAction?: SequenceAction;
    viewerToDesignerAction?: SequenceAction;
}
export interface ICustomItemExtension extends IExtension {
    metaData: ICustomItemMetaData;
    createViewerItem: (item: CustomItem, element: dxElement, content: any) => CustomItemViewer;
}
export declare type KeyEventType = "keyup" | "keydown";
export interface KnockoutTemplate {
    name: string;
    data?: any;
}
export interface WorkingModeSwitchingOptions {
    surfaceLeft: number;
}
export interface SequenceAction {
    orderNo: number;
    action: (options: WorkingModeSwitchingOptions) => JQueryPromise<any>;
}
export interface IRemoteService {
    getFromServer: (url: any, data?: any, queryOptions?: any) => JQueryXHR;
    postToServer: (url: any, data?: any) => JQueryXHR;
    performPostback: (url: any, args: any) => void;
}
export interface AjaxRemoteServiceOptions {
    beforeSend?: (jqXHR: JQueryXHR, settings: JQueryAjaxSettings) => any;
    complete?: (jqXHR: JQueryXHR, textStatus: string) => any;
    headers?: {
        [key: string]: any;
    };
}
export interface DashboardInfo {
    id: string;
    name: string;
}
