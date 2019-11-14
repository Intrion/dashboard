/**
* DevExpress Dashboard (_data-controller-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { RenderHelper } from '../../viewer-parts/widgets/_render-helper';
export declare let DATA_POSTFIX: string;
export declare let DEFAULT_SUBTITLE_SEPARATOR: string;
export declare class dataControllerBase {
    deltaIndicatorTypes: any;
    multiData: any;
    viewModel: any;
    cfModel: any;
    drillDownState: any;
    useNeutralFilterMode: boolean;
    constructor(options: any);
    isMultiselectable(): boolean;
    update(selectedValues: any, encodeHtml: any): void;
    getTitle(axisPoint: any, separator?: any, saveOrder?: any): any;
    getAxisPointsHash(): void;
    _getMeasureValueByAxisPoints(axisPoints: any, cfMeasureId: any): any;
    _getSlice(axisPoints: any): any;
    _getZeroPosition(zeroPositionMeasureId: any, columnAxisName: any, rowAxisName: any): any;
    protected _getStyleIndexes(rule: any, cellInfo: any, points: any): any;
    _getStyleSettingsInfoCore(cellInfo: any, rules: any, columnAxisName: any, rowAxisName: any): any;
    _generateSparklineOptions(data: any, options: any, format: any): {
        dataSource: any;
        type: any;
        onIncidentOccurred: typeof RenderHelper.widgetIncidentOccurred;
        showMinMax: any;
        showFirstLast: any;
        tooltip: {
            _justify: boolean;
            container: string;
            customizeTooltip: () => {
                html: string;
            };
            zIndex: number;
        };
    };
    _convertIndicatorType(type: any): any;
}
