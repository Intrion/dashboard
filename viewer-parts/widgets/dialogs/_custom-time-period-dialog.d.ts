/**
* DevExpress Dashboard (_custom-time-period-dialog.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import 'devextreme/ui/date_box';
import dxDateBox from 'devextreme/ui/date_box';
export declare class customTimePeriodDialog {
    options: {
        container: HTMLElement;
        setRange: (range: any) => void;
    };
    setRange: any;
    range: any;
    format: any;
    displayFormatFunc: any;
    maxZoomLevel: any;
    leftCalendar: dxDateBox;
    rightCalendar: dxDateBox;
    dialogForm: any;
    constructor(options: {
        container: HTMLElement;
        setRange: (range: any) => void;
    });
    _initialize(): void;
    show(options: any): void;
    dispose(): void;
}
