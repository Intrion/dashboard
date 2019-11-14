/**
* DevExpress Dashboard (_layout-item-placeholder.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DashboardLayoutNode, LayoutItemInsertPosition } from './dashboard-layout-node';
import { DashboardLayoutGroup } from './dashboard-layout-group';
import { ILayoutItemViewModel } from '../../common/viewer/layout/_layout';
export declare class DashboardLayoutItemPlaceholder extends DashboardLayoutNode {
    protected readonly _template: string;
    constructor(parent?: DashboardLayoutGroup, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    moveTo(itemModel: DashboardLayoutNode, location: string): void;
    _delete(): void;
    _createViewModel(): ILayoutItemViewModel;
    protected _insertItemCore(layoutNodeToInsert: DashboardLayoutNode, position: LayoutItemInsertPosition): void;
    protected _getDefaultItemType(): string;
}
