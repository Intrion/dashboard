/**
* DevExpress Dashboard (_limit-data-state.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export interface LimitDataViewModel {
    isReduceMode: boolean;
    isReduced: boolean;
}
export declare class LimitDataState {
    _visible: boolean;
    _enabled: boolean;
    readonly enabled: boolean;
    setReduced(): void;
    getViewModel(): LimitDataViewModel;
    toggle(): void;
    reset(): void;
}
