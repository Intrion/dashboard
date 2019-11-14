/**
* DevExpress Dashboard (meta.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ICustomItemBinding } from './binding';
import { ICustomItemProperty } from './property';
export interface ICustomItemMetaData {
    bindings?: Array<ICustomItemBinding>;
    properties?: Array<ICustomItemProperty>;
    interactivity?: {
        filter?: boolean;
        drillDown?: boolean;
    };
    index?: number;
    groupName?: string;
    icon: string;
    title: string;
}
