/**
* DevExpress Dashboard (remote-service.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IRemoteService, AjaxRemoteServiceOptions } from './common-interfaces';
export declare class AjaxRemoteService implements IRemoteService {
    beforeSend: (jqXHR: JQueryXHR, settings: JQueryAjaxSettings) => any;
    complete?: (jqXHR: JQueryXHR, textStatus: string) => any;
    headers: {
        [key: string]: any;
    };
    constructor(options?: AjaxRemoteServiceOptions);
    getFromServer(url: string, data?: Object, queryOptions?: JQueryAjaxSettings): JQueryXHR;
    postToServer(url: string, data?: Object): JQueryXHR;
    performPostback(url: string, args: string): void;
}
