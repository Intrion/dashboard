/**
* DevExpress Dashboard (_data-item-link.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardSurface } from '../../../common/_dashboard-surface';
import { PropertiesController } from '../../_properties-controller';
import { SurfaceItemsFactory } from '../_section-descriptors';
export declare class DataItemLinkComponent {
    surface: DashboardSurface;
    $element: JQuery;
    propertiesController: PropertiesController;
    surfaceItemsFactory: SurfaceItemsFactory;
    constructor(surface: DashboardSurface, $element: JQuery, propertiesController: PropertiesController, surfaceItemsFactory: SurfaceItemsFactory);
}
