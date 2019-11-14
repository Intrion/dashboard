/**
* DevExpress Dashboard (_edit-card-template-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IPropertiesHolder, PropertiesController } from '../../_properties-controller';
import { CardLayoutTemplate } from '../../../model/items/card/card-layout-template';
import { AccordionTab } from '../../_accordion-tab';
import { CollectionEditorEditItemArguments } from '../../ui-widgets/collection-editor/_collection-editor-viewmodel';
import * as ko from 'knockout';
import { IDisposable } from '../../../model/disposable-object';
export declare class EditCardTemplateSurface implements IDisposable, IPropertiesHolder {
    model: CardLayoutTemplate;
    propertiesController: PropertiesController;
    private dimensionNames;
    private applyTemplateToAllCards;
    private _disposables;
    constructor(model: CardLayoutTemplate, propertiesController: PropertiesController, dimensionNames: string[], applyTemplateToAllCards?: (template: CardLayoutTemplate) => void);
    propertiesTabs: ko.ObservableArray<AccordionTab>;
    updatePropertiesTabs(): void;
    startEditing(args: CollectionEditorEditItemArguments): void;
    dispose(): void;
}
