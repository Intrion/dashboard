/**
* DevExpress Dashboard (undo-engine-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DisposableObject } from '../../model/disposable-object';
import { DashboardControl } from '../../common/dashboard-control';
import { KeyEventType } from '../../common/common-interfaces';
import * as ko from 'knockout';
export declare class UndoRedoExtension extends DisposableObject {
    private dashboardControl;
    name: string;
    private _undoEngine;
    constructor(dashboardControl: DashboardControl);
    reset(): void;
    processKeyEvent(keyEventType: KeyEventType, eventArgs: JQueryKeyEventObject): boolean;
    start(): void;
    undo(): void;
    redo(): void;
    undoEnabled(): boolean;
    redoEnabled(): boolean;
    stop(): void;
    isChanged: ko.Computed<boolean>;
}
