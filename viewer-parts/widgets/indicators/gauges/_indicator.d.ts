/**
* DevExpress Dashboard (_indicator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare class GaugeDeltaIndicator {
    _renderer: any;
    _root: any;
    _getOptions: Function;
    constructor(parameters: any);
    dispose(): this;
    draw(): any[];
    layoutOptions(): {
        horizontalAlignment: any;
        verticalAlignment: any;
    };
    measure(): any[];
    move(rect: any): void;
    freeSpace(): void;
}
