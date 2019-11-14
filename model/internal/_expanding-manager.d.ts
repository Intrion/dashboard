/**
* DevExpress Dashboard (_expanding-manager.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export interface IExpandingState {
    rows: Array<Array<any>>;
    columns: Array<Array<any>>;
}
export interface IExpandingParams {
    values: Array<any>;
    isColumn: boolean;
}
export declare class ExpandingManager {
    getPivotExpandViewState(): any;
    setExpandingParams(expandingParams: IExpandingParams): any;
    onViewStateChanged(expandingState: IExpandingState): void;
    canProvideExpandingState(): IExpandingState | IExpandingParams;
    calculateExpandingState(): any;
    resetExpandingParams(): void;
    resetColumnViewState(): void;
    resetRowViewState(): void;
    private _expandingParams;
    private _expandingState;
}
