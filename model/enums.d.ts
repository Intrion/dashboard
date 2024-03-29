﻿/**
* DevExpress Dashboard (enums.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare type CardRowDataElementType = 'ActualValue' | 'AbsoluteVariation' | 'PercentVariation' | 'PercentOfTarget' | 'TargetValue' | 'DimensionValue' | 'CardName' | 'Title' | 'Subtitle';
export declare type CardWindowDefinitionMode = 'Cards' | 'SparklineArgument' | 'CardsAndSparklineArgument' | 'SparklineArgumentAndCards';
export declare type ChartLegendInsidePosition = 'TopLeftVertical' | 'TopLeftHorizontal' | 'TopCenterHorizontal' | 'TopCenterVertical' | 'TopRightVertical' | 'TopRightHorizontal' | 'BottomLeftVertical' | 'BottomLeftHorizontal' | 'BottomCenterHorizontal' | 'BottomCenterVertical' | 'BottomRightVertical' | 'BottomRightHorizontal';
export declare type ChartLegendOutsidePosition = 'TopLeftVertical' | 'TopLeftHorizontal' | 'TopCenterHorizontal' | 'TopRightVertical' | 'TopRightHorizontal' | 'BottomLeftVertical' | 'BottomLeftHorizontal' | 'BottomCenterHorizontal' | 'BottomRightVertical' | 'BottomRightHorizontal';
export declare type ChartWindowDefinitionMode = 'Arguments' | 'Series' | 'ArgumentsAndSeries' | 'SeriesAndArguments';
export declare type ColoringMode = 'Default' | 'None' | 'Hue';
export declare type ComboBoxDashboardItemType = 'Standard' | 'Checked';
export declare type ContentArrangementMode = 'Auto' | 'FixedRowCount' | 'FixedColumnCount';
export declare type DateFilterType = 'Between' | 'After' | 'Before' | 'Exact';
export declare type DateFilterArrangementMode = 'AutoHeight' | 'Horizontal' | 'Vertical';
export declare type DatePickerLocation = 'Far' | 'Near' | 'Hidden';
export declare type DashboardFormatCondition = 'Greater' | 'GreaterOrEqual' | 'Less' | 'LessOrEqual' | 'Equal' | 'NotEqual' | 'Between' | 'NotBetween' | 'BetweenOrEqual' | 'NotBetweenOrEqual' | 'ContainsText';
export declare type DashboardFormatConditionAboveBelowType = 'Above' | 'AboveOrEqual' | 'Below' | 'BelowOrEqual';
export declare type DashboardFormatConditionComparisonType = 'Greater' | 'GreaterOrEqual';
export declare type DashboardFormatConditionTopBottomType = 'Top' | 'Bottom';
export declare type DashboardFormatConditionValueType = 'Number' | 'Percent' | 'Automatic';
export declare type DashboardLayoutGroupOrientation = 'Vertical' | 'Horizontal';
export declare type DashboardTitleAlignment = 'Left' | 'Center';
export declare type DashboardTreemapLayoutAlgorithm = 'SliceAndDice' | 'Squarified' | 'Striped';
export declare type DashboardTreemapLayoutDirection = 'BottomLeftToTopRight' | 'BottomRightToTopLeft' | 'TopLeftToBottomRight' | 'TopRightToBottomLeft';
export declare type DataFieldType = 'Text' | 'DateTime' | 'Bool' | 'Integer' | 'Float' | 'Double' | 'Decimal' | 'Enum' | 'Custom' | 'Unknown';
export declare type DataItemNumericFormatType = 'Auto' | 'General' | 'Number' | 'Currency' | 'Scientific' | 'Percent';
export declare type DataItemNumericUnit = 'Auto' | 'Ones' | 'Thousands' | 'Millions' | 'Billions';
export declare type DateFormat = 'Default' | 'Long' | 'Short';
export declare type DateTimeFormat = 'Default' | 'Long' | 'Short' | 'TimeOnly';
export declare type DateTimeGroupInterval = 'Year' | 'Quarter' | 'Month' | 'Day' | 'Hour' | 'Minute' | 'Second' | 'DayOfYear' | 'DayOfWeek' | 'WeekOfYear' | 'WeekOfMonth' | 'MonthYear' | 'QuarterYear' | 'DayMonthYear' | 'DateHour' | 'DateHourMinute' | 'DateHourMinuteSecond' | 'None';
export declare type DateTimeInterval = 'Year' | 'Quarter' | 'Month' | 'Day' | 'Hour' | 'Minute' | 'Second';
export declare type DayOfWeekFormat = 'Default' | 'Full' | 'Abbreviated' | 'Numeric';
export declare type DeltaIndicationMode = 'GreaterIsGood' | 'LessIsGood' | 'WarningIfGreater' | 'WarningIfLess' | 'NoIndication';
export declare type DeltaIndicationThresholdType = 'Absolute' | 'Percent';
export declare type DeltaValueType = 'ActualValue' | 'AbsoluteVariation' | 'PercentVariation' | 'PercentOfTarget';
export declare type DifferenceTarget = 'Previous' | 'Next' | 'First' | 'Last';
export declare type DifferenceType = 'Absolute' | 'Percentage';
export declare type DimensionSortMode = 'Value' | 'DisplayText' | 'Key' | 'ID';
export declare type DimensionSortOrder = 'Ascending' | 'Descending' | 'None';
export declare type DimensionTopNMode = 'Top' | 'Bottom';
export declare type ExactDateFormat = 'Year' | 'Quarter' | 'Month' | 'Day' | 'Hour' | 'Minute' | 'Second';
export declare type DateOccurringFilterDateType = 'BeyondThisYear' | 'LaterThisYear' | 'LaterThisMonth' | 'LaterThisWeek' | 'NextWeek' | 'Tomorrow' | 'Today' | 'Yesterday' | 'EarlierThisWeek' | 'LastWeek' | 'EarlierThisMonth' | 'EarlierThisYear' | 'PriorThisYear' | 'Empty' | 'Beyond' | 'ThisWeek' | 'ThisMonth' | 'MonthAfter1' | 'MonthAfter2' | 'MonthAgo1' | 'MonthAgo2' | 'MonthAgo3' | 'MonthAgo4' | 'MonthAgo5' | 'MonthAgo6' | 'Earlier';
export declare type FontStyle = 'Regular' | 'Bold' | 'Italic' | 'Underline' | 'Strikeout';
export declare type FormatConditionAppearanceType = 'None' | 'Custom' | 'PaleRed' | 'PaleYellow' | 'PaleGreen' | 'PaleBlue' | 'PalePurple' | 'PaleCyan' | 'PaleOrange' | 'PaleGray' | 'Red' | 'Yellow' | 'Green' | 'Blue' | 'Purple' | 'Cyan' | 'Orange' | 'Gray' | 'GradientRed' | 'GradientYellow' | 'GradientGreen' | 'GradientBlue' | 'GradientPurple' | 'GradientCyan' | 'GradientOrange' | 'GradientTransparent' | 'FontBold' | 'FontItalic' | 'FontUnderline' | 'FontGrayed' | 'FontRed' | 'FontYellow' | 'FontGreen' | 'FontBlue';
export declare type FormatConditionIconType = 'None' | 'DirectionalGreenArrowUp' | 'DirectionalYellowUpInclineArrow' | 'DirectionalYellowSideArrow' | 'DirectionalYellowDownInclineArrow' | 'DirectionalRedDownArrow' | 'DirectionalGrayArrowUp' | 'DirectionalGrayUpInclineArrow' | 'DirectionalGraySideArrow' | 'DirectionalGrayDownInclineArrow' | 'DirectionalGrayDownArrow' | 'DirectionalYellowDash' | 'DirectionalRedTriangleDown' | 'DirectionalGreenTriangleUp' | 'RatingFullGrayStar' | 'RatingHalfGrayStar' | 'RatingEmptyGrayStar' | 'RatingFullGrayCircle' | 'Rating1QuarterGrayCircle' | 'Rating2QuartersGrayCircle' | 'Rating3QuartersGrayCircle' | 'RatingEmptyGrayCircle' | 'Rating4Bars' | 'Rating3Bars' | 'Rating2Bars' | 'Rating1Bar' | 'Rating0Bars' | 'Rating4FilledBoxes' | 'Rating3FilledBoxes' | 'Rating2FilledBoxes' | 'Rating1FilledBox' | 'Rating0FilledBoxes' | 'ShapeGreenTrafficLight' | 'ShapeYellowTrafficLight' | 'ShapeRedTrafficLight' | 'ShapeGreenCircle' | 'ShapeYellowCircle' | 'ShapeRedCircle' | 'ShapeLightRedCircle' | 'ShapeLightGrayCircle' | 'ShapeYellowTriangle' | 'ShapeRedDiamond' | 'IndicatorGreenCheck' | 'IndicatorYellowExclamation' | 'IndicatorRedCross' | 'IndicatorCircledGreenCheck' | 'IndicatorCircledYellowExclamation' | 'IndicatorCircledRedCross' | 'IndicatorGreenFlag' | 'IndicatorYellowFlag' | 'IndicatorRedFlag';
export declare type FormatConditionIntersectionLevelMode = 'Auto' | 'FirstLevel' | 'LastLevel' | 'AllLevels' | 'SpecificLevel';
export declare type GaugeViewType = 'CircularFull' | 'CircularHalf' | 'CircularQuarterRight' | 'CircularQuarterLeft' | 'CircularThreeFourth' | 'LinearHorizontal' | 'LinearVertical';
export declare type GridColumnFixedWidthType = 'Weight' | 'FitToContent' | 'FixedWidth';
export declare type GridColumnTotalType = 'Auto' | 'Count' | 'Min' | 'Max' | 'Avg' | 'Sum';
export declare type GridColumnValueBarDisplayMode = 'Value' | 'Bar';
export declare type GridColumnWidthMode = 'Manual' | 'AutoFitToContents' | 'AutoFitToGrid';
export declare type GridDimensionColumnDisplayMode = 'Text' | 'Image';
export declare type GridMeasureColumnDisplayMode = 'Value' | 'Bar';
export declare type GridWindowDefinitionMode = 'Rows' | 'SparklineArgument' | 'RowsAndSparklineArgument' | 'SparklineArgumentAndRows';
export declare type HourFormat = 'Default' | 'Short' | 'Long';
export declare type ImageDataBindingMode = 'BinaryArray' | 'Uri';
export declare type ImageHorizontalAlignment = 'Left' | 'Center' | 'Right';
export declare type ImageSizeMode = 'Clip' | 'Stretch' | 'Zoom' | 'Squeeze';
export declare type ImageVerticalAlignment = 'Top' | 'Center' | 'Bottom';
export declare type ListBoxDashboardItemType = 'Checked' | 'Radio';
export declare type LogarithmicBase = 'Base2' | 'Base5' | 'Base10';
export declare type MapLegendOrientation = 'Vertical' | 'Horizontal';
export declare type MapLegendPosition = 'TopLeft' | 'TopCenter' | 'TopRight' | 'BottomLeft' | 'BottomCenter' | 'BottomRight';
export declare type MonthFormat = 'Default' | 'Full' | 'Abbreviated' | 'Numeric';
export declare type OpenHighLowCloseSeriesType = 'CandleStick' | 'Stock';
export declare type PieValueType = 'None' | 'Argument' | 'Percent' | 'ArgumentAndPercent' | 'Value' | 'ArgumentAndValue' | 'ValueAndPercent' | 'ArgumentValueAndPercent';
export declare type PieWindowDefinitionMode = 'Arguments' | 'Series' | 'ArgumentsAndSeries' | 'SeriesAndArguments';
export declare type PivotColumnTotalsPosition = 'Near' | 'Far';
export declare type PivotLayoutType = 'Compact' | 'Tabular';
export declare type PivotRowTotalsPosition = 'Top' | 'Bottom';
export declare type PivotValuesPosition = 'Columns' | 'Rows';
export declare type PivotWindowDefinitionMode = 'Columns' | 'Rows' | 'ColumnsAndRows' | 'RowsAndColumns' | 'GroupsInColumns' | 'GroupsInRows' | 'GroupsInColumnsAndRows' | 'GroupsInRowsAndColumns';
export declare type PointLabelOrientation = 'Default' | 'RotateRight' | 'RotateLeft';
export declare type PointLabelOverlappingMode = 'Hide' | 'None' | 'Reposition';
export declare type PointLabelPosition = 'Outside' | 'Inside';
export declare type QuarterFormat = 'Default' | 'Numeric' | 'Full';
export declare type RangeFilterWindowDefinitionMode = 'Argument' | 'Series' | 'ArgumentAndSeries' | 'SeriesAndArgument';
export declare type RangeSeriesType = 'SideBySideRangeBar' | 'RangeArea';
export declare type RankOrder = 'Ascending' | 'Descending';
export declare type RankType = 'Unique' | 'Competition' | 'Dense' | 'Modified' | 'Percentile';
export declare type ScatterPointLabelContentType = 'Argument' | 'Weight' | 'Values' | 'ArgumentAndWeight' | 'ArgumentAndValues';
export declare type ShapefileArea = 'Custom' | 'WorldCountries' | 'Europe' | 'Asia' | 'NorthAmerica' | 'SouthAmerica' | 'Africa' | 'USA' | 'Canada';
export declare type SimpleSeriesType = 'Bar' | 'StackedBar' | 'FullStackedBar' | 'Point' | 'Line' | 'StackedLine' | 'FullStackedLine' | 'StepLine' | 'Spline' | 'Area' | 'StackedArea' | 'FullStackedArea' | 'StepArea' | 'SplineArea' | 'StackedSplineArea' | 'FullStackedSplineArea';
export declare type SparklineViewType = 'Line' | 'Area' | 'Bar' | 'WinLoss';
export declare type SummaryType = 'Count' | 'Sum' | 'Min' | 'Max' | 'Average' | 'StdDev' | 'StdDevp' | 'Var' | 'Varp' | 'CountDistinct' | 'Median' | 'Mode';
export declare type TargetDimensions = 'Arguments' | 'Series' | 'Points';
export declare type TextGroupInterval = 'None' | 'Alphabetical';
export declare type TreemapValueType = 'None' | 'Argument' | 'Value' | 'ArgumentAndValue';
export declare type WeightedLegendType = 'Linear' | 'Nested';
export declare type YearFormat = 'Default' | 'Full' | 'Abbreviated';
export declare enum PointLabelContentType {
    None = 0,
    Argument = 1,
    SeriesName = 2,
    Value = 4,
    Percent = 8
}
export declare let parsePointLabelContentType: (typeModel: any) => PointLabelContentType;
export declare let serializePointLabelContentType: (val: PointLabelContentType) => string;
export declare let getPointLabelContentTypeValues: (val: PointLabelContentType) => PointLabelContentType[];
export declare let PointLabelContentTypeDictionary: {
    'Argument': PointLabelContentType;
    'SeriesName': PointLabelContentType;
    'Value': PointLabelContentType;
    'Percent': PointLabelContentType;
};
export declare enum FilterDateType {
    None = 0,
    BeyondThisYear = 2,
    LaterThisYear = 4,
    LaterThisMonth = 8,
    LaterThisWeek = 16,
    NextWeek = 32,
    Tomorrow = 64,
    Today = 128,
    Yesterday = 256,
    EarlierThisWeek = 512,
    LastWeek = 1024,
    EarlierThisMonth = 2048,
    EarlierThisYear = 4096,
    PriorThisYear = 8192,
    Empty = 16384,
    Beyond = 131072,
    ThisWeek = 262144,
    ThisMonth = 524288,
    MonthAfter1 = 1048576,
    MonthAfter2 = 2097152,
    MonthAgo1 = 4194304,
    MonthAgo2 = 8388608,
    MonthAgo3 = 16777216,
    MonthAgo4 = 33554432,
    MonthAgo5 = 67108864,
    MonthAgo6 = 134217728,
    Earlier = 268435456
}
