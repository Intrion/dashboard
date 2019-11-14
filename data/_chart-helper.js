/**
* DevExpress Dashboard (_chart-helper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chartHelper = {
    SelectionMode: {
        Argument: 'Argument',
        Series: 'Series',
        Points: 'Points'
    },
    ChartLegendInsidePosition: {
        TopLeftVertical: 'TopLeftVertical',
        TopLeftHorizontal: 'TopLeftHorizontal',
        TopCenterVertical: 'TopCenterVertical',
        TopCenterHorizontal: 'TopCenterHorizontal',
        TopRightVertical: 'TopRightVertical',
        TopRightHorizontal: 'TopRightHorizontal',
        BottomLeftVertical: 'BottomLeftVertical',
        BottomLeftHorizontal: 'BottomLeftHorizontal',
        BottomCenterVertical: 'BottomCenterVertical',
        BottomCenterHorizontal: 'BottomCenterHorizontal',
        BottomRightVertical: 'BottomRightVertical',
        BottomRightHorizontal: 'BottomRightHorizontal'
    },
    ChartLegendOutsidePosition: {
        TopLeftVertical: 'TopLeftVertical',
        TopLeftHorizontal: 'TopLeftHorizontal',
        TopCenterHorizontal: 'TopCenterHorizontal',
        TopRightVertical: 'TopRightVertical',
        TopRightHorizontal: 'TopRightHorizontal',
        BottomLeftVertical: 'BottomLeftVertical',
        BottomLeftHorizontal: 'BottomLeftHorizontal',
        BottomCenterHorizontal: 'BottomCenterHorizontal',
        BottomRightVertical: 'BottomRightVertical',
        BottomRightHorizontal: 'BottomRightHorizontal'
    },
    convertSeriesType: function (viewSeriesType) {
        switch (viewSeriesType) {
            case 'Bar': return 'bar';
            case 'StackedBar': return 'stackedbar';
            case 'FullStackedBar': return 'fullstackedbar';
            case 'Point': return 'scatter';
            case 'Line': return 'line';
            case 'StackedLine': return 'stackedline';
            case 'FullStackedLine': return 'fullstackedline';
            case 'StepLine': return 'stepline';
            case 'Spline': return 'spline';
            case 'Area': return 'area';
            case 'StackedArea': return 'stackedarea';
            case 'FullStackedArea': return 'fullstackedarea';
            case 'StepArea': return 'steparea';
            case 'SplineArea': return 'splinearea';
            case 'StackedSplineArea': return 'stackedSplineArea';
            case 'FullStackedSplineArea': return 'fullStackedSplineArea';
            case 'SideBySideRangeBar': return 'rangebar';
            case 'RangeArea': return 'rangearea';
            case 'CandleStick': return 'candlestick';
            case 'Stock': return 'stock';
            case 'Donut': return 'doughnut';
            case 'Pie': return 'pie';
            case 'HighLowClose': return 'stock';
            case 'Weighted': return 'bubble';
            default:
                return 'area';
        }
    },
    convertPresentationUnit: function (argumentViewModel) {
        if (argumentViewModel && argumentViewModel.Type === 'DateTime') {
            switch (argumentViewModel.DateTimePresentationUnit) {
                case 'Second':
                    return 'second';
                case 'Minute':
                    return 'minute';
                case 'Hour':
                    return 'hour';
                case 'Day':
                    return 'day';
                case 'Month':
                    return 'month';
                case 'Quarter':
                    return 'quarter';
                default:
                    return null;
            }
        }
        return null;
    },
    convertLegendInsidePosition: function (position) {
        var legendPosition = this.ChartLegendInsidePosition;
        switch (position) {
            case legendPosition.TopLeftVertical:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'left',
                    orientation: 'vertical'
                };
            case legendPosition.TopLeftHorizontal:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'left',
                    orientation: 'horizontal'
                };
            case legendPosition.TopCenterVertical:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'center',
                    orientation: 'vertical'
                };
            case legendPosition.TopCenterHorizontal:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'center',
                    orientation: 'horizontal'
                };
            case legendPosition.TopRightVertical:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'right',
                    orientation: 'vertical'
                };
            case legendPosition.TopRightHorizontal:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'right',
                    orientation: 'horizontal'
                };
            case legendPosition.BottomLeftVertical:
                return {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'left',
                    orientation: 'vertical'
                };
            case legendPosition.BottomLeftHorizontal:
                return {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'left',
                    orientation: 'horizontal'
                };
            case legendPosition.BottomCenterVertical:
                return {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'center',
                    orientation: 'vertical'
                };
            case legendPosition.BottomCenterHorizontal:
                return {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'center',
                    orientation: 'horizontal'
                };
            case legendPosition.BottomRightVertical:
                return {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'right',
                    orientation: 'vertical'
                };
            case legendPosition.BottomRightHorizontal:
                return {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'right',
                    orientation: 'horizontal'
                };
            default:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'center',
                    orientation: 'horizontal'
                };
        }
    },
    convertLegendOutsidePosition: function (position) {
        var legendPosition = this.ChartLegendOutsidePosition;
        switch (position) {
            case legendPosition.TopLeftVertical:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'left',
                    orientation: 'vertical'
                };
            case legendPosition.TopLeftHorizontal:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'left',
                    orientation: 'horizontal'
                };
            case legendPosition.TopCenterHorizontal:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'center',
                    orientation: 'horizontal'
                };
            case legendPosition.TopRightVertical:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'right',
                    orientation: 'vertical'
                };
            case legendPosition.TopRightHorizontal:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'right',
                    orientation: 'horizontal'
                };
            case legendPosition.BottomLeftVertical:
                return {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'left',
                    orientation: 'vertical'
                };
            case legendPosition.BottomLeftHorizontal:
                return {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'left',
                    orientation: 'horizontal'
                };
            case legendPosition.BottomCenterHorizontal:
                return {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'center',
                    orientation: 'horizontal'
                };
            case legendPosition.BottomRightVertical:
                return {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'right',
                    orientation: 'vertical'
                };
            case legendPosition.BottomRightHorizontal:
                return {
                    verticalAlignment: 'bottom',
                    horizontalAlignment: 'right',
                    orientation: 'horizontal'
                };
            default:
                return {
                    verticalAlignment: 'top',
                    horizontalAlignment: 'center',
                    orientation: 'horizontal'
                };
        }
    },
    convertPointLabelRotationAngle: function (orientation) {
        switch (orientation) {
            case "RotateRight":
                return 90;
            case "RotateLeft":
                return 270;
            default:
                return 0;
        }
    },
    convertPointLabelPosition: function (position) {
        if (position == "Inside")
            return "inside";
        else
            return "outside";
    },
    allowArgumentAxisMargins: function (panes) {
        var seriesType = undefined, seriesEqual = true, marginsArgsEnabled;
        if (panes.length == 1) {
            panes[0].SeriesTemplates.forEach(function (seriesTemplate) {
                seriesType = (seriesType == undefined) ? seriesTemplate.SeriesType : seriesType;
                seriesEqual = seriesEqual && (seriesType === seriesTemplate.SeriesType);
            });
            marginsArgsEnabled = !(seriesEqual &&
                (['Area', 'StackedArea', 'FullStackedArea', 'StepArea', 'SplineArea', 'StackedSplineArea', 'RangeArea', 'FullStackedSplineArea'].indexOf(seriesType) !== -1));
        }
        else
            marginsArgsEnabled = true;
        return marginsArgsEnabled;
    },
    isFinancialType: function (type) {
        switch (type) {
            case 'candlestick':
            case 'stock':
                return true;
            default:
                return false;
        }
    },
    isTransparentColorType: function (type) {
        switch (type) {
            case 'area':
            case 'steparea':
            case 'splinearea':
            case 'rangearea':
            case 'bubble':
                return true;
            default:
                return false;
        }
    },
    isSeriesColorSupported: function (type) {
        switch (type) {
            case 'line':
            case 'stackedLine':
            case 'fullstackedLine':
            case 'stepline':
            case 'spline':
            case 'area':
            case 'fullstackedarea':
            case 'spline':
            case 'stackedarea':
            case 'stackedsplineArea':
            case 'steparea':
            case 'rangearea':
                return true;
            default:
                return false;
        }
    },
    isStackedAreaType: function (type) {
        switch (type) {
            case 'stackedarea':
            case 'fullstackedarea':
            case 'stackedSplineArea':
            case 'fullStackedSplineArea':
                return true;
            default:
                return false;
        }
    }
};
