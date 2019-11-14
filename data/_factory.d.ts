/**
* DevExpress Dashboard (_factory.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { dataControllerBase } from './data-controllers/_data-controller-base';
export declare class DataControllerFactory {
    createDataController(type: any, options: any): dataControllerBase;
}
export declare let defaultDataControllerFactory: DataControllerFactory;
