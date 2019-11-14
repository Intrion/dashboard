/**
* DevExpress Dashboard (_section-descriptors.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ISectionInfo } from './_interfaces';
import { DashboardItem } from '../../model/items/dashboard-item';
import { Dashboard } from '../../model/dashboard';
import { DataSourceBrowser } from '../../common/_data-source-browser';
import { DataDashboardItem } from '../../model/items/data-dashboard-item';
import { BaseItemSurface } from './surfaces/_base-item-surface';
export declare var SectionDescriptors: {
    HiddenDimensions: ISectionInfo;
    HiddenMeasures: ISectionInfo;
    SeriesDimension: ISectionInfo;
    Arguments: ISectionInfo;
    Values: ISectionInfo;
    FilterDimensions: ISectionInfo;
    SparklineArgument: ISectionInfo;
    SingleArgument: ISectionInfo;
    Value: ISectionInfo;
    Latitude: ISectionInfo;
    Longitude: ISectionInfo;
    TooltipDimensions: ISectionInfo;
    TooltipMeasures: ISectionInfo;
    Columns: ISectionInfo;
    Rows: ISectionInfo;
    Weight: ISectionInfo;
    Color: ISectionInfo;
    AttributeDimension: ISectionInfo;
    Argument: ISectionInfo;
    AxisXMeasure: ISectionInfo;
    AxisYMeasure: ISectionInfo;
};
export interface ISurfaceConstructor {
    new (dashboardItem: DashboardItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser): any;
}
export declare class SurfaceItemsFactory {
    private _itemsMap;
    register(dashboardItemType: string, surfaceTypeConstructor: ISurfaceConstructor): void;
    createSurfaceItem<T extends DataDashboardItem>(dashboardItem: T, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser): BaseItemSurface<T>;
}
export declare var surfaceItemsFactory: SurfaceItemsFactory;
