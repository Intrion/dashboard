/**
* DevExpress Dashboard (_draggable.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IItemsCollection } from './_interfaces';
import * as ko from 'knockout';
export declare class DragProcessor {
    rootElement: HTMLElement;
    CSS_DRAG_IN_PROGRESS: string;
    CSS_HIGHLIGHT_PLACEHOLDER: string;
    COLLECTION_SELECTOR: string;
    TARGET_SELECTOR: string;
    EVENT_NAMESPACE: string;
    currentDrag: {
        clonedElement: HTMLElement;
        itemPosition: number;
        originalEvent: DragEvent;
        itemElement: HTMLElement;
        sourceCollection: IItemsCollection;
    };
    constructor(rootElement: HTMLElement);
    state: "pending" | "dragging";
    startDrag(ev: JQueryEventObject): boolean;
    setDataItemsPositions: (sourceCollectionRoot: HTMLElement) => void;
    processHtmlDragEvent: () => void;
    finishDrag: () => void;
    checkItemIsDraggableToPosition(itemIndex: number, placeholderIndex: number): boolean;
    interchange(items: ko.ObservableArray<any>, newOwner: {
        relocateItem: (item: any, placeholderIndex: number) => void;
    }, sourceIndex: number, placeholderIndex: number, groupSize: number): void;
}
