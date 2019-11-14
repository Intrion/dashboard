/**
* DevExpress Dashboard (_ui-widgets.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import * as ko from 'knockout';
export interface ISlidableListsNavigable {
    backClick: (item: string, pathParts: string[]) => void;
    hasSearchResults?: ko.Observable<boolean>;
    isListMode?: ko.Observable<boolean>;
}
