/**
* DevExpress Dashboard (_data-source-factory-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ObjectDataSource } from './object-data-source';
import { SqlDataSource } from './sql-data-source';
import { OlapDataSource } from './olap-data-source';
import { EFDataSource } from './ef-data-source';
import { ExcelDataSource } from './excel-data-source';
import { ExtractDataSource } from './extract-data-source';
import { JsonDataSource } from './json-data-source';
import { XpoDataSource } from './xpo-data-source';
export declare let _baseDataSourceTypesMap: {
    "ObjectDataSource": typeof ObjectDataSource;
    "SqlDataSource": typeof SqlDataSource;
    "OLAPDataSource": typeof OlapDataSource;
    "EFDataSource": typeof EFDataSource;
    "ExcelDataSource": typeof ExcelDataSource;
    "ExtractFileDataSource": typeof ExtractDataSource;
    "JsonDataSource": typeof JsonDataSource;
    "XPObjectSource": typeof XpoDataSource;
};
