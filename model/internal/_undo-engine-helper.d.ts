/**
* DevExpress Dashboard (_undo-engine-helper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
export declare class UndoEngineContainer {
    static undoEngine: DxDesigner.Analytics.Utils.UndoEngine;
}
export declare function wrapFuncWithUndoRedo<T extends (...a: any[]) => any>(func: T): T;
export declare function wrapWithUndoRedo(target: any, key: string, value: any): {
    value: any;
};
