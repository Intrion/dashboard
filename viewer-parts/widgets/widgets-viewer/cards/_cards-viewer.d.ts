/**
* DevExpress Dashboard (_cards-viewer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DOMComponent from 'devextreme/core/dom_component';
import { Options as DOMComponentOptions } from 'devextreme/core/dom_component';
import { IWidgetsViewer } from '../_widgets-viewer';
import { newCardItem } from './_new-card-item';
export declare class cardsViewer extends DOMComponent implements IWidgetsViewer {
    private content;
    private _viewerID;
    private arranger;
    private tableStruct;
    private virtualizer;
    private tableGenerator;
    private container;
    itemsList: newCardItem[];
    constructor(element: HTMLElement, options: DOMComponentOptions);
    redraw(): void;
    _optionChanged(args: any): void;
    _refresh(): void;
    getSelectedItems(): newCardItem[];
    clearSelections(): void;
    getSizeParams(): {
        virtualSize: {
            width: number;
            height: number;
        };
        scroll: {
            top: number;
            left: number;
            size: number;
            horizontal: boolean;
            vertical: boolean;
        };
        itemMargin: {
            width: number;
            height: number;
        };
        layoutMeasurement: {
            margin: number;
            contentPadding: number;
        };
    };
    clear(): void;
    private _init;
    private initContainer;
    private createItems;
    protected _render(drawOptions?: any): void;
    private invalidateContent;
    private drawCards;
    private drawCardsByIndices;
    private createArranger;
    private shouldRecreateArranger;
}
