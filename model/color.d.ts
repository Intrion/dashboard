/**
* DevExpress Dashboard (color.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import * as ko from 'knockout';
export declare class Color {
    static fromArgb(alpha: number, red: number, green: number, blue: number): Color;
    static fromRgbaString(rgbaColor: string): Color;
    static fromJSON(jsonValue: string): Color;
    static fromAppearance(appearanceType: string): Color;
    static fromDxColor(dxColor: any): Color;
    static toNumber(alpha: number, red: number, green: number, blue: number): number;
    static toJSON(color: Color): number;
    static contrastColor(baseColor: Color): Color;
    static _colorFromModel(value: string): ko.Observable<Color>;
    static _colorToModel(value: Color): number;
    toNumber(): number;
    static toHex(colorValue: number): string;
    readonly A: any;
    readonly R: any;
    readonly G: any;
    readonly B: any;
    readonly css: string;
    private _dxColor;
    constructor(colorValue: number);
    blend(blendColor: any, opacity: any): Color;
    toHex(): any;
    private _toRgbaString;
}
