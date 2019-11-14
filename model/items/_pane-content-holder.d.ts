/**
* DevExpress Dashboard (_pane-content-holder.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { PropertyCategory } from '../metadata/_base-metadata';
import * as ko from 'knockout';
export declare function getCategoryContentName(category: PropertyCategory): string;
export declare class PaneContentHolder {
    private _content;
    _getContentInfo(category: PropertyCategory): {
        category: string;
        content: ko.Observable<any>;
        requestsInProgress: ko.Observable<number>;
        needAnotherRequest: boolean;
    };
    getContent(category: PropertyCategory): any;
    valid: ko.Computed<boolean>;
    isValid(category: PropertyCategory): boolean;
    isWaitingForContent(category?: PropertyCategory): boolean;
    getCompatibleCategories(category: PropertyCategory): any;
    needRequestContentFromServer(category: PropertyCategory): boolean;
    itemChanged(category?: PropertyCategory): void;
    beginRequest(category: PropertyCategory): void;
    endRequest(args: {
        category?: PropertyCategory;
        response?: any;
    }): void;
}
