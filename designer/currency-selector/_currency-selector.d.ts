/**
* DevExpress Dashboard (_currency-selector.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import * as ko from 'knockout';
export declare class CurrencyInfo {
    name: string;
    displayText: string;
    previewText: string;
    constructor(name: string, displayText: string, previewText: string);
    cultures: Array<CultureInfo>;
}
export declare class CultureInfo {
    name: string;
    displayText: string;
}
export declare class CurrencySelector {
    disabled: ko.Observable<boolean>;
    constructor(currencyCultureName: ko.Observable<string>, disabled: ko.Observable<boolean>);
    _getDefaultCurrencyInfo: () => CurrencyInfo;
    getPreviewText: (value: number, currency: string) => any;
    currencies: ko.ObservableArray<CurrencyInfo>;
    selectedCurrency: ko.Observable<CurrencyInfo>;
    selectedCulture: ko.Observable<CultureInfo>;
    previewPositive: ko.PureComputed<any>;
    previewNegative: ko.PureComputed<any>;
}
