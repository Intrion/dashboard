/**
* DevExpress Dashboard (_datasource-chooser-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { SliderController } from './_field-chooser-surface';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import * as ko from 'knockout';
export declare class DataSourceChooserController extends SliderController {
    constructor(params: {
        dataSourceBrowser: DataSourceBrowser;
        dataSource: ko.Observable<string>;
        dataMember: ko.Observable<string>;
        active: ko.Observable<boolean>;
        listChanged: () => void;
    });
}
