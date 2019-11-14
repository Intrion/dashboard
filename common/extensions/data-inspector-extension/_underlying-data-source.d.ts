/**
* DevExpress Dashboard (_underlying-data-source.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataDashboardItem } from "../../../model";
import { GridDataSourceInfo } from "../data-inspector-extension/_data-inspector-view-model";
import { IUnderlyingDataProvider } from "../../data/_underlying-data-provider";
export declare function generateUnderlyingDataSource(underlyingDataProvider: IUnderlyingDataProvider, dashbordItem: DataDashboardItem): GridDataSourceInfo;
