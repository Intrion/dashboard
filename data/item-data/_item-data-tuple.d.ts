﻿/**
* DevExpress Dashboard (_item-data-tuple.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ItemDataAxisPointTuple, ItemDataAxisName } from './item-data-definitions';
import { itemDataAxisPoint } from './_item-data-axis-point';
export declare class itemDataTuple implements ItemDataAxisPointTuple {
    private _axisPoints;
    constructor(axisPoints: Array<itemDataAxisPoint>);
    getAxisPoint(axisName?: ItemDataAxisName): itemDataAxisPoint;
}
