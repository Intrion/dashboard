/**
* DevExpress Dashboard (map-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataDashboardItem } from '../data-dashboard-item';
import { ShapefileArea } from '../../enums';
import { CustomShapefile } from './custom-shape-file';
import { DashboardItemMasterFilterInteractivityOptions } from '../options/interactivity-options';
import { MapViewport } from './map-viewport';
import { Measure } from '../../data-item/measure';
import { PropertyCategory } from '../../metadata/_base-metadata';
import * as ko from 'knockout';
export declare abstract class MapItem extends DataDashboardItem {
    area: ko.Observable<ShapefileArea>;
    customShapefile: CustomShapefile;
    interactivityOptions: DashboardItemMasterFilterInteractivityOptions;
    viewport: MapViewport;
    private __tooltipMeasures;
    tooltipMeasures: ko.ObservableArray<Measure>;
    lockNavigation: ko.Observable<boolean>;
    shapeTitleAttributeName: ko.Observable<string>;
    private _isGeometryChanged;
    _shapeFilesAttributeNameList: ko.ObservableArray<string>;
    _initialExtentChanged: ko.Observable<boolean>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _isGeometryChangedCallback: () => void;
    _clearBindings(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _isCalculationSupported(): boolean;
    protected _getMasterFilterMode(): string;
    protected _getDrillDownEnabled(): boolean;
    protected _getIgnoreMasterFilter(): boolean;
    _setClientState(clientState: any): void;
    _getContentCategories(): PropertyCategory[];
    protected _updateContentViewModel(content: any): void;
    _isSortingEnabled(): boolean;
}
