/**
* DevExpress Dashboard (control-options.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardControl } from './dashboard-control';
import { IExtension, AjaxRemoteServiceOptions } from './common-interfaces';
import { Dashboard } from '../model/dashboard';
export declare type ExtensionCreator = (dashboardControl: DashboardControl, extensionOptions?: {
    [index: string]: {};
}) => IExtension;
export declare type ExtensionDictionary = {
    [index: string]: ExtensionCreator;
};
export declare type ExtensionOptions = {
    [index: string]: Object | false | ExtensionCreator;
};
export declare var defaultExtensions: ExtensionDictionary;
export declare var designerExtensions: ExtensionDictionary;
export declare type WorkingMode = "Designer" | "Viewer" | "ViewerOnly";
export declare type LimitVisibleDataMode = "Designer" | "DesignerAndViewer" | "None";
export interface DashboardControlOptions {
    workingMode?: WorkingMode;
    initialDashboardId?: string;
    initialDashboardState?: string;
    loadDefaultDashboard?: boolean;
    encodeHtml?: boolean;
    useNeutralFilterMode?: boolean;
    limitVisibleDataMode?: LimitVisibleDataMode;
    showConfirmationOnBrowserClosing?: boolean;
    resizeByTimer?: boolean;
    allowMaximizeItems?: boolean;
    endpoint?: string;
    ajaxRemoteService?: AjaxRemoteServiceOptions;
    onInitializing?: (args: {
        component: DashboardControl;
    }) => void;
    onDashboardInitializing?: (args: DashboardInitializingArgs) => void;
    onDashboardInitialized?: (args: DashboardInitializedArgs) => void;
    onDashboardStateChanged?: (args: DashboardStateChangedArgs) => void;
    onItemBeginUpdate?: (args: DashboardItemUpdateArgs) => void;
    onItemEndUpdate?: (args: DashboardItemUpdateArgs) => void;
    onDashboardBeginUpdate?: (args: DashboardUpdateArgs) => void;
    onDashboardEndUpdate?: (args: DashboardUpdateArgs) => void;
    dataRequestOptions?: DataRequestOptions;
    useCardLegacyLayout?: boolean;
    extensions?: ExtensionOptions | false;
}
export interface DataRequestOptions {
    itemDataRequestMode: ItemDataRequestMode;
}
export declare type ItemDataRequestMode = 'SeparateRequests' | 'BatchRequests';
export declare type RefreshItemsArgs = string | Array<string>;
export declare type DashboardUpdateArgs = {
    component: DashboardControl;
    dashboardId: string;
};
export declare type DashboardItemUpdateArgs = {
    component: DashboardControl;
    dashboardId: string;
    itemName: string;
};
export declare type DashboardInitializedArgs = {
    component: DashboardControl;
    dashboardId: string;
    dashboard: Dashboard;
};
export declare type DashboardStateChangedArgs = {
    component: DashboardControl;
    dashboardId: string;
    dashboard: Dashboard;
    stateString: string;
};
export declare type DashboardInitializingArgs = {
    component: DashboardControl;
    dashboardId: string;
    dashboard: Dashboard;
    ready: JQueryPromise<any>;
};
