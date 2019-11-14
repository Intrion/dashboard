/**
* DevExpress Dashboard (_base-metadata.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import * as ko from 'knockout';
export interface IDashboardSerializationInfo extends DxDesigner.Analytics.Utils.ISerializationInfo {
    category?: PropertyCategory;
}
export interface ITypedDashboardSerializationInfo<T> extends DxDesigner.Analytics.Utils.ISerializationInfo {
    propertyName: Extract<keyof T, string>;
}
export interface ICollectionEditorSerializationInfo extends DxDesigner.Analytics.Utils.ISerializationInfo {
    collectionItemDefaultPropertyInfo: DxDesigner.Analytics.Utils.ISerializationInfo;
    filter?: (...arg: any[]) => boolean;
}
export declare enum PropertyCategory {
    ClientState = 0,
    Data = 1,
    Interactivity = 2,
    ViewModel = 3,
    Map = 4,
    Initialize = 5,
    Coloring = 6,
    NoUpdate = 7,
    NoUpdateByObservableValue = 8
}
export declare let editorTemplates: {
    text: any;
    bool: {
        header: string;
    };
    boolYesNo: {
        header: string;
    };
    boolVisibleHidden: {
        header: string;
    };
    boolDiscreteContinuous: {
        header: string;
    };
    checkBox: any;
    list: {
        header: string;
    };
    numeric: {
        header: string;
    };
    gaugeScale: {
        header: string;
    };
    toggleNumeric: {
        header: string;
    };
    date: {
        header: string;
    };
    combobox: {
        header: string;
    };
    multiValueSelect: {
        header: string;
    };
    singleValueSelect: {
        header: string;
    };
    commonCollection: any;
    objecteditor: any;
    image: any;
    textFile: {
        header: string;
    };
    mapShapeFile: {
        header: string;
    };
    mapAttributeFile: {
        header: string;
    };
    expression: {
        header: string;
    };
    cardTemplateCollection: any;
    deltaFormats: {
        header: string;
    };
    calculationWindowDataItems: any;
    calculationWindowDefinition: any;
    totals: any;
    formatRules: any;
    calculations: any;
    styleSettings: {
        header: string;
    };
    ruleRanges: any;
    ruleExpression: any;
    calculationExpression: any;
    containerTypeSelector: any;
    guid: {
        header: string;
        editorType: typeof DxDesigner.Analytics.Widgets.GuidEditor;
    };
    itemDataSource: {
        header: string;
    };
    itemDataMember: {
        header: string;
    };
    itemFieldChooser: {
        header: string;
    };
    itemFieldPicker: {
        header: string;
    };
    shapeFileAttributes: {
        header: string;
    };
    buttonGroup: {
        header: string;
    };
    radioGroup: {
        header: string;
    };
    iconTypeSelector: {
        header: string;
    };
    colorSchemeTreeViewEditor: {
        header: string;
    };
    dateSample: {
        header: string;
    };
    flowModeSettings: {
        header: string;
    };
    currency: {
        header: string;
    };
    actionButtons: {
        custom: string;
    };
    collectionEditorValuesBased: {
        header: string;
    };
    pointLabelContentTypeSelector: {
        header: string;
    };
    enumFlagsTypeSelector: {
        header: string;
    };
    numericFormatEditor: any;
};
export declare function parseBool(value: any): ko.Observable<any>;
export declare function floatFromModel(value: string): ko.Observable<number>;
export declare function fromStringToDate(val: string): ko.Observable<Date>;
export declare function fromDateToString(date: Date): string;
export declare function nullableFloatToModel(value: any): {};
export declare let integerValidationRule: {
    type: string;
    validationCallback: (e: any) => boolean;
};
export declare let itemType: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let componentName: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let url: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let name: IDashboardSerializationInfo;
export declare let name_ViewModel: IDashboardSerializationInfo;
export declare let nameTag: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let dataMember: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let filter: DxDesigner.Analytics.Utils.ISerializationInfo;
export interface IconTypeSelectorOptions {
    valuesInfo: {
        [key: string]: {
            icon: string;
            group?: string;
        };
    };
    groupLocalizationDictionary?: {
        [grougName: string]: string;
    };
}
export declare let contentArrangementMode: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let contentLineCount: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let BindingSectionTitles: {
    Arguments: string;
    SingleArgument: string;
    SeriesDimension: string;
};
export declare let columnsPropertyName: string;
export declare let rowsPropertyName: string;
export declare let argumentsPropertyName: string;
export declare let valuesPropertyName: string;
export declare let argumentPropertyName: string;
export declare let valuePropertyName: string;
export declare let actualValuePropertyName: string;
export declare let targetValuePropertyName: string;
export declare let sparklineArgumentPropertyName: string;
export declare let weightPropertyName: string;
export declare let colorPropertyName: string;
