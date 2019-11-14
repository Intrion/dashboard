/**
* DevExpress Dashboard (parameters-dialog-content.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import dxDataGrid from 'devextreme/ui/data_grid';
export interface ParameterDialogContent {
    grid: dxDataGrid;
    submitParameterValues: () => void;
    resetParameterValues: () => void;
    valueChanged: JQueryCallback;
    dispose: () => void;
}
