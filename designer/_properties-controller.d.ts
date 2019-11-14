/**
* DevExpress Dashboard (_properties-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { AccordionTab } from './_accordion-tab';
import * as ko from 'knockout';
import { IDisposable } from '../model/disposable-object';
export interface IPropertiesHolder {
    model: any;
    propertiesTabs: ko.ObservableArray<AccordionTab>;
    propertiesController?: PropertiesController;
    dispose?: () => void;
}
export declare class PropertiesController implements IDisposable {
    private _disposables;
    constructor();
    mainModel: ko.Observable<{
        name: string;
        containingCollection?: ko.ObservableArray<any>;
        data: IPropertiesHolder;
    }>;
    secondaryModel: ko.Observable<{
        name: string;
        containingCollection?: ko.ObservableArray<any>;
        displayText: string;
        data: IPropertiesHolder;
    }>;
    private currentTab;
    accordionDataSource: ko.Observable<Array<AccordionTab>>;
    secondaryAccordionDataSource: ko.Observable<Array<AccordionTab>>;
    computator: ko.Computed<void>;
    selectedIndex: ko.Computed<number>;
    secondarySelectedIndex: ko.Observable<number>;
    processDataItemClick: (data: any) => void;
    dispose(): void;
}
