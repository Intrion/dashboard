/**
* DevExpress Dashboard (dashboard-layout-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DashboardLayoutNode } from './dashboard-layout-node';
export declare class DashboardLayoutItem extends DashboardLayoutNode {
    protected readonly _template: string;
    constructor(modelJson?: Object, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    protected _getDefaultItemType(): string;
    _deleteDashbordItem(): void;
}
