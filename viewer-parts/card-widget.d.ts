/**
* DevExpress Dashboard (card-widget.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export interface CardWidget {
    onCustomizeText: (args: {
        getValue: () => any;
        getDefaultText: () => string;
    }) => string;
    cardBackColor: string;
    element: () => JQuery;
}
