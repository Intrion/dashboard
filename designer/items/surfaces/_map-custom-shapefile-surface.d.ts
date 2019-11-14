/**
* DevExpress Dashboard (_map-custom-shapefile-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IPropertiesHolder, PropertiesController } from '../../_properties-controller';
import { CustomShapefile } from '../../../model/items/map/custom-shape-file';
import { AccordionTab } from '../../_accordion-tab';
import { CollectionEditorEditItemArguments } from '../../ui-widgets/collection-editor/_collection-editor-viewmodel';
import * as ko from 'knockout';
import { IDisposable } from '../../../model/disposable-object';
export declare class MapCustomShapeFileSurface implements IDisposable, IPropertiesHolder {
    model: CustomShapefile;
    propertiesController: PropertiesController;
    private _disposables;
    constructor(model: CustomShapefile, propertiesController: PropertiesController);
    propertiesTabs: ko.ObservableArray<AccordionTab>;
    startEditing(args: CollectionEditorEditItemArguments): void;
    dispose(): void;
}
