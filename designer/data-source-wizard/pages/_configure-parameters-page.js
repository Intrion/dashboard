/**
* DevExpress Dashboard (_configure-parameters-page.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data_source_parameter_wrapper_1 = require("./_data-source-parameter-wrapper");
function createParametersViewModelConverter(parameters) {
    return {
        createParameterViewModel: function (parameter) {
            return new _data_source_parameter_wrapper_1.DataSourceParameterWrapper(parameter, parameters);
        },
        getParameterFromViewModel: function (parameterViewModel) {
            return parameterViewModel.parameter;
        }
    };
}
exports.createParametersViewModelConverter = createParametersViewModelConverter;
