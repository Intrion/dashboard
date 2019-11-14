/**
* DevExpress Dashboard (image-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DashboardItem } from './dashboard-item';
import { ImageSizeMode, ImageHorizontalAlignment, ImageVerticalAlignment } from '../enums';
import * as ko from 'knockout';
export declare class ImageItem extends DashboardItem {
    urlPath: ko.Observable<string>;
    image64: ko.Observable<string>;
    sizeMode: ko.Observable<ImageSizeMode>;
    horizontalAlignment: ko.Observable<ImageHorizontalAlignment>;
    verticalAlignment: ko.Observable<ImageVerticalAlignment>;
    imageType: ko.Observable<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    protected _updateContentViewModel(content: any): void;
}
