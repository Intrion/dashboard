/**
* DevExpress Dashboard (_export-options-groups.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { Options as dxTextBoxOptions } from 'devextreme/ui/text_box';
import { Options as dxCheckBoxOptions } from 'devextreme/ui/check_box';
import { Options as dxNumberBoxOptions } from 'devextreme/ui/number_box';
import { Options as dxRadioGroupOptions } from 'devextreme/ui/radio_group';
import { Options as dxSelectBoxOptions } from 'devextreme/ui/select_box';
import DOMComponent from 'devextreme/core/dom_component';
export declare type ControlCreator = {
    name: string;
    create: (element: HTMLElement, options: Object) => DOMComponent;
};
export interface LabeledEditorOptions {
    controlCreator: ControlCreator;
    labelText: string;
    controlOptions?: dxTextBoxOptions | dxCheckBoxOptions | dxNumberBoxOptions | dxRadioGroupOptions | dxSelectBoxOptions;
    customText?: boolean;
    largeMargin?: boolean;
    values?: Array<any>;
}
export declare class labeledEditor {
    options: LabeledEditorOptions;
    valueName: any;
    enabled: any;
    largeMargin: boolean;
    customText: boolean;
    labelDiv: HTMLElement;
    editorDiv: HTMLElement;
    editor: DOMComponent;
    constructor(options: LabeledEditorOptions);
    _initialize(): void;
    setEnabled(enabled: any): void;
    setVisibility(visible: any): void;
    set(value: any): void;
    get(): void;
    dispose(): void;
    _getControlOptions(options: LabeledEditorOptions): any;
    _generateElementNameClassName(controlCreator: string, largeMargin: any): string;
    _getElementClassName(controlName: string, largeMargin: any): string;
}
export declare abstract class optionsGroup {
    enabled: boolean;
    constructor();
    setEnabled(enabled: any): void;
    abstract set(documentInfo: any): any;
    abstract apply(documentInfo: any): any;
    abstract getEditors(captionEditors?: any): labeledEditor[];
    dispose(): void;
}
export declare class dashboardStateOptionsGroup extends optionsGroup {
    exportFilters: any;
    exportParameters: any;
    dashboardStatePosition: any;
    constructor();
    _initialize(): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class captionOptionsGroup extends optionsGroup {
    showCaption: any;
    caption: any;
    constructor(showCaption: any);
    _initialize(showCaption: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class scaleModeOptionsGroup extends optionsGroup {
    scaleMode: any;
    scaleFactor: any;
    autoFitPageCount: any;
    visibilityUpdated: JQuery.Callbacks<Function>;
    constructor(scaleMode: any);
    _initialize(scaleModeValue: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
    _setScaleModeOptionsVisibility(scaleModeValue: any): void;
}
export declare class documentOptionsGroup extends optionsGroup {
    pageLayout: any;
    paperKind: any;
    captionOptionsGroup: any;
    constructor(includeCaption: any);
    _initialize(includeCaption: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class textItemOptionsGroup extends optionsGroup {
    fileName: any;
    documentOptionsGroup: documentOptionsGroup;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(showCaption: any);
    _initialize(showCaption: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class boundImageItemOptionsGroup extends optionsGroup {
    fileName: any;
    documentOptionsGroup: documentOptionsGroup;
    scaleModeOptionsGroup: scaleModeOptionsGroup;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(showCaption: any, scaleMode: any);
    _initialize(showCaption: any, scaleMode: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class imageItemOptionsGroup extends optionsGroup {
    pageLayout: any;
    paperKind: any;
    showCaption: any;
    caption: any;
    fileName: any;
    scaleModeOptionsGroup: scaleModeOptionsGroup;
    constructor(showCaption: any, scaleMode?: any);
    _initialize(showCaption: any, scaleMode?: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class groupItemOptionsGroup extends optionsGroup {
    dashboardOptionsGroup: dashboardOptionsGroup;
    captionOptionsGroup: captionOptionsGroup;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(showCaption: any, dashboardAutomaticPageLayout: any, scaleMode: any);
    _initialize(showCaption: any, dashboardAutomaticPageLayout: any, scaleMode: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class customItemOptionsGroup extends optionsGroup {
    dashboardOptionsGroup: dashboardOptionsGroup;
    captionOptionsGroup: captionOptionsGroup;
    constructor(showCaption: any, dashboardAutomaticPageLayout: any, scaleMode: any);
    _initialize(showCaption: any, dashboardAutomaticPageLayout: any, scaleMode: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class entireDashboardOptionsGroup extends optionsGroup {
    dashboardOptionsGroup: dashboardOptionsGroup;
    showTitle: any;
    title: any;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(showTitle: any, dashboardAutomaticPageLayout: any, scaleMode: any);
    _initialize(showTitle: any, dashboardAutomaticPageLayout: any, scaleMode: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class dashboardOptionsGroup extends optionsGroup {
    pageLayout: any;
    paperKind: any;
    scaleModeOptionsGroup: scaleModeOptionsGroup;
    fileName: any;
    constructor(dashboardAutomaticPageLayout: any, scaleMode: any);
    _initialize(dashboardAutomaticPageLayout: any, scaleMode: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(captionEditors: any): any[];
    _setScaleModeOptionsVisibility(pageLayoutValue: any): void;
}
export declare class gridOptionsGroup extends optionsGroup {
    documentOptionsGroup: any;
    printHeadersOnEveryPage: any;
    fitToPageWidth: any;
    scaleModeOptionsGroup: any;
    fileName: any;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(includeCaption: any, fitToPageWidth: any, scaleMode: any);
    _initialize(includeCaption: any, fitToPageWidth: any, scaleMode: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
    _setScaleModeOptionsVisibility(fitToPageWidth: any): void;
}
export declare class pivotOptionsGroup extends optionsGroup {
    documentOptionsGroup: any;
    printHeadersOnEveryPage: any;
    scaleModeOptionsGroup: any;
    fileName: any;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(includeCaption: any, scaleMode: any);
    _initialize(includeCaption: any, scaleMode: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class chartOptionsGroup extends optionsGroup {
    pageLayout: any;
    paperKind: any;
    captionOptionsGroup: any;
    sizeMode: any;
    fileName: any;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(includeCaption: any);
    _initialize(includeCaption: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class mapOptionsGroup extends optionsGroup {
    pageLayout: any;
    paperKind: any;
    captionOptionsGroup: any;
    sizeMode: any;
    fileName: any;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(includeCaption: any);
    _initialize(includeCaption: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class treemapOptionsGroup extends optionsGroup {
    pageLayout: any;
    paperKind: any;
    captionOptionsGroup: any;
    sizeMode: any;
    fileName: any;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(includeCaption: any);
    _initialize(includeCaption: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class rangeFilterOptionsGroup extends optionsGroup {
    pageLayout: any;
    paperKind: any;
    captionOptionsGroup: any;
    sizeMode: any;
    fileName: any;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(includeCaption: any);
    _initialize(includeCaption: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class pieOptionsGroup extends optionsGroup {
    documentOptionsGroup: any;
    autoArrangeContent: any;
    scaleModeOptionsGroup: any;
    fileName: any;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(includeCaption: any, autoArrangeContent: any, scaleMode: any);
    _initialize(includeCaption: any, autoArrangeContent: any, scaleMode: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
    _setScaleModeOptionsVisibility(autoArrangeContent: any): void;
}
export declare class gaugeOptionsGroup extends optionsGroup {
    documentOptionsGroup: any;
    autoArrangeContent: any;
    scaleModeOptionsGroup: any;
    fileName: any;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(includeCaption: any, autoArrangeContent: any, scaleMode: any);
    _initialize(includeCaption: any, autoArrangeContent: any, scaleMode: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
    _setScaleModeOptionsVisibility(autoArrangeContent: any): void;
}
export declare class cardOptionsGroup extends optionsGroup {
    documentOptionsGroup: any;
    autoArrangeContent: any;
    scaleModeOptionsGroup: any;
    fileName: any;
    dashboardStateOptionsGroup: dashboardStateOptionsGroup;
    constructor(includeCaption: any, autoArrangeContent: any, scaleMode: any);
    _initialize(includeCaption: any, autoArrangeContent: any, scaleMode: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
    _setScaleModeOptionsVisibility(autoArrangeContent: any): void;
}
export declare class imageOptionsGroup extends optionsGroup {
    imageFormat: any;
    showTitle: any;
    title: any;
    exportFilters: any;
    exportParameters: any;
    resolution: any;
    fileName: any;
    constructor(showTitle: any);
    _initialize(showTitle: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class dashboardExcelOptionsGroup extends optionsGroup {
    excelFormat: any;
    exportFilters: any;
    exportParameters: any;
    dashboardStatePosition: any;
    fileName: any;
    constructor(format: any);
    _checkExportFormat(format: any): boolean;
    _initialize(format: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class excelOptionsGroup extends optionsGroup {
    excelFormat: any;
    separator: any;
    exportFilters: any;
    exportParameters: any;
    dashboardStatePosition: any;
    fileName: any;
    constructor(format: any);
    _checkExportFormat(format: any): boolean;
    _initialize(format: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class simplyImageOptionsGroup extends optionsGroup {
    imageFormat: any;
    showTitle: any;
    title: any;
    resolution: any;
    fileName: any;
    constructor(showTitle: any);
    _initialize(showTitle: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
export declare class dashboardImageOptionsGroup extends optionsGroup {
    imageFormat: any;
    showTitle: any;
    title: any;
    exportFilters: any;
    exportParameters: any;
    resolution: any;
    fileName: any;
    constructor(showTitle: any);
    _initialize(showTitle: any): void;
    set(documentInfo: any): void;
    apply(documentInfo: any): void;
    getEditors(): any[];
}
