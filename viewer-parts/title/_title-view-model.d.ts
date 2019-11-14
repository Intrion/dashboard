/**
* DevExpress Dashboard (_title-view-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export interface TitleViewModel {
    Text: string;
    Visible: boolean;
    ShowParametersButton: boolean;
    IncludeMasterFilterValues: boolean;
    LayoutModel: {
        Alignment: string;
        ImageViewModel: ImageViewModel;
    };
}
export interface ImageViewModel {
    SourceBase64String: string;
    MimeType?: string;
    Url: string;
}
