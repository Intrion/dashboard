/**
* DevExpress Dashboard (resource-manager.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare class ResourceManager {
    static embedBundledResources(): void;
    static removeEmbeddedResources(): void;
    static setLocalizationMessages(localizationMessages: {
        [localizationStringId: string]: string;
    }): void;
    static registerIcon(icon: string): void;
}
