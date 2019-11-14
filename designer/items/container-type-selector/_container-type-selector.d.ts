/**
* DevExpress Dashboard (_container-type-selector.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import * as ko from 'knockout';
export declare type ContainerTypeMap = {
    [key: string]: {
        icon: string;
        displayName?: string;
        group?: string;
    };
};
export declare class ContainerTypeSelector {
    private _containersMap;
    containerType: ko.Observable<string>;
    private _containerGroupLocalization?;
    private _highlightedTypes?;
    constructor(_containersMap: ContainerTypeMap, containerType: ko.Observable<string>, _containerGroupLocalization?: {
        [groupName: string]: string;
    }, _highlightedTypes?: string[]);
    readonly shortAvailableContainerTypes: any[];
    readonly hasFullList: boolean;
    readonly availableContainerTypes: any[];
    readonly availableContainerTypeGroups: {
        name: string;
        displayName: string;
    }[];
    headerClick: (data: any, event: any) => boolean;
    itemClick: (data: any, event: any) => boolean;
}
