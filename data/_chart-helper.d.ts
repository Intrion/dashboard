/**
* DevExpress Dashboard (_chart-helper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare let chartHelper: {
    SelectionMode: {
        Argument: string;
        Series: string;
        Points: string;
    };
    ChartLegendInsidePosition: {
        TopLeftVertical: string;
        TopLeftHorizontal: string;
        TopCenterVertical: string;
        TopCenterHorizontal: string;
        TopRightVertical: string;
        TopRightHorizontal: string;
        BottomLeftVertical: string;
        BottomLeftHorizontal: string;
        BottomCenterVertical: string;
        BottomCenterHorizontal: string;
        BottomRightVertical: string;
        BottomRightHorizontal: string;
    };
    ChartLegendOutsidePosition: {
        TopLeftVertical: string;
        TopLeftHorizontal: string;
        TopCenterHorizontal: string;
        TopRightVertical: string;
        TopRightHorizontal: string;
        BottomLeftVertical: string;
        BottomLeftHorizontal: string;
        BottomCenterHorizontal: string;
        BottomRightVertical: string;
        BottomRightHorizontal: string;
    };
    convertSeriesType: (viewSeriesType: any) => "area" | "line" | "bar" | "bubble" | "candlestick" | "fullstackedarea" | "fullstackedbar" | "fullstackedline" | "rangearea" | "rangebar" | "scatter" | "spline" | "splinearea" | "stackedarea" | "stackedbar" | "stackedline" | "steparea" | "stepline" | "stock" | "doughnut" | "pie" | "stackedSplineArea" | "fullStackedSplineArea";
    convertPresentationUnit: (argumentViewModel: any) => "day" | "hour" | "minute" | "month" | "second" | "quarter";
    convertLegendInsidePosition: (position: any) => {
        verticalAlignment: string;
        horizontalAlignment: string;
        orientation: string;
    };
    convertLegendOutsidePosition: (position: any) => {
        verticalAlignment: string;
        horizontalAlignment: string;
        orientation: string;
    };
    convertPointLabelRotationAngle: (orientation: any) => 0 | 90 | 270;
    convertPointLabelPosition: (position: any) => "inside" | "outside";
    allowArgumentAxisMargins: (panes: any) => any;
    isFinancialType: (type: any) => boolean;
    isTransparentColorType: (type: any) => boolean;
    isSeriesColorSupported: (type: any) => boolean;
    isStackedAreaType: (type: any) => boolean;
};
