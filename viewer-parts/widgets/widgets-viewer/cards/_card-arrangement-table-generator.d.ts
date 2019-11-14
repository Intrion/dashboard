/**
* DevExpress Dashboard (_card-arrangement-table-generator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { cardArrangementInfo } from './_card-arrangement-info';
export declare class cardArrangementTableGenerator {
    cells: JQuery[];
    cardArrangements: cardArrangementInfo;
    generateTable(container: JQuery, cardArrangements: cardArrangementInfo): void;
    drawCellContent(startIndex: any, endIndex: any, drawHandler: (container: JQuery, cardArrangements: cardArrangementInfo, cardIndex: number) => JQuery): void;
    private reset;
    private generateCells;
    private createRow;
    private createCell;
}
