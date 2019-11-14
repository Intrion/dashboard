/**
* DevExpress Dashboard (_card-widget-implementation.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { CardWidget } from ".";
import { dxElement } from "devextreme/core/element";
export declare class CardWidgetImplementation implements CardWidget {
    private _cardBackColor;
    private _onCustomizeText;
    private _changed;
    _notifyChanged: () => void;
    _element: dxElement;
    constructor(notifyHandler?: any);
    onCustomizeText: (args: {
        getValue: () => any;
        getDefaultText: () => string;
    }) => string;
    cardBackColor: string;
    element: () => dxElement;
}
