/**
* DevExpress Dashboard (theme-builder.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
const path = require('path');
const fs = require('fs');

const colorSchemeFile = "__color-scheme";
const sizeSchemeFile = "__size-scheme";
const devextremeThemeVars = "__devextreme-theme-vars";
const dashboardCustomVars = "__dashboard-custom-vars";

const indexFile = 'styles/index.scss';
var defaultThemes = {
    "generic": {
        colorSchemes: {
            "light": { path: "styles/generic/color-schemes/light/generic.light.devextreme.scss" },
            "dark": { path: "styles/generic/color-schemes/dark/generic.dark.devextreme.scss" },

            "carmine": { path: "styles/generic/color-schemes/light/generic.carmine.devextreme.scss" },
            "greenmist": { path: "styles/generic/color-schemes/light/generic.green.mist.devextreme.scss" },
            "softblue": { path: "styles/generic/color-schemes/light/generic.soft.blue.devextreme.scss" },

            "darkmoon": { path: "styles/generic/color-schemes/dark/generic.dark.moon.devextreme.scss" },
            "darkviolet": { path: "styles/generic/color-schemes/dark/generic.dark.violet.devextreme.scss" }
        },
        sizeSchemes: {
            "": { name: "", path: "styles/generic/size-schemes/default.scss" },
            "compact": { name: "compact", path: "styles/generic/size-schemes/compact.scss" }
        }
    }
};


const readInput = options => new Promise(resolve => {
    const fileName = options.inputFile;
    if(!fileName) resolve(options);

    fs.readFile(fileName, (error, data) => {
        if(error) {
            console.error(`Unable to read the ${fileName} file.`);
        } else {
            const extension = path.extname(fileName);
            if(extension !== '.json') {
                options.data = data;
            } else {
                const inputObject = JSON.parse(data);
                Object.assign(options, inputObject);
            }
        }
        resolve(options);
    });
});

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if(fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

const readFile = fileName => new Promise((resolve, reject) => {
    fs.readFile(require.resolve(fileName), 'utf8', (error, data) => {
        error ? reject(error) : resolve(data);
    });
});
const scssCompilerWrapper = (nodeSass) => {
    render: (scss) => {
        return new Promise((resolve, reject) => {
            nodeSass.render({
                data: scss
            }, (error, result) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(result.css.toString());
                }
            });
        });
    }
};


function buildDashboardTheme(baseTheme, dashboardBaseTheme, dashboardColorVariables, devextremeMetadata, resolvePath, nodeSass) {
    var baseTheme = dashboardBaseTheme || baseTheme || "generic.light";
    var themeComponents = baseTheme.split(".");
    var themeType = themeComponents[0] || "";
    var colorScheme = themeComponents[1] || "";
    var sizeScheme = themeComponents[2] || "";

    var colorSchemeScss = defaultThemes[themeType].colorSchemes[colorScheme];
    var sizeSchemeScss = defaultThemes[themeType].sizeSchemes[sizeScheme];

   
    var devextremeVarsFile = Object.keys(devextremeMetadata)
        .reduce((acc, key) => acc + `${key.replace('@', '$')}: ${devextremeMetadata[key]};\n`, '');
    var customDashboardVarsFile = (dashboardColorVariables || [])
        .reduce((acc, value) => {
            return acc + `${value.key.replace('@', '$')}: ${value.value};\n`
        }, "");


    var dashboardThemeResult = nodeSass.renderSync({
        file: resolvePath(indexFile),
        importer: function(url, prev, done) {
            if(url.indexOf(colorSchemeFile) !== -1) {
                return { file: resolvePath(colorSchemeScss.path) };
            } else if(url.indexOf(sizeSchemeFile) !== -1) {
                return { file: resolvePath(sizeSchemeScss.path) };
            } else if(url.indexOf(devextremeThemeVars) !== -1) {
                return { contents: devextremeVarsFile };
            } else if(url.indexOf(dashboardCustomVars) !== -1) {
                return { contents: customDashboardVarsFile };
            } else {
                return { file: url };
            }
        }
    });

    return new Promise((resolve) => resolve(dashboardThemeResult));
}

function writeResult(CleanCSS, devextremeResult, analyticsResult, dashboardResult, getDashboardCssHeader, outputColorScheme, outDir, saveDevExtremeCss = false, saveAnalyticsCss = false, createMinFile = false) {
    var outFileName = path.join(outDir, `dx-dashboard.${outputColorScheme}.css`);
    ensureDirectoryExistence(outFileName);

    if(saveDevExtremeCss) {
        let getFileName = (isMin) => path.join(outDir, `dx.${outputColorScheme}${isMin ? '.min' : ''}.css`);

        fs.writeFileSync(getFileName(false), devextremeResult.css); // TODO: ensure devextreme file name
        if(createMinFile) {
            let minFile = new CleanCSS().minify(devextremeResult.css);
            fs.writeFileSync(getFileName(true), minFile.styles);
        }
    }
    if(saveAnalyticsCss) {
        let getFileName = (isMin) => path.join(outDir, `dx-analytics.${outputColorScheme}${isMin ? '.min' : ''}.css`);

        fs.writeFileSync(getFileName(false), analyticsResult.css); // TODO: ensure devextreme file name
        if(createMinFile) {
            let minFile = new CleanCSS().minify(analyticsResult.css);
            fs.writeFileSync(getFileName(true), minFile.styles);
        }
    }

    fs.writeFileSync(outFileName, getDashboardCssHeader(outputColorScheme) + dashboardResult.css.toString());
    if(createMinFile) {
        let minFile = new CleanCSS().minify(dashboardResult.css);
        let outMinFileName = path.join(outDir, `dx-dashboard.${outputColorScheme}.min.css`);
        fs.writeFileSync(outMinFileName, minFile.styles);
    }
}


async function buildTheme(options, devExtremeThemeBuilder, analyticsThemeBuilder, nodeSass, nodeLess, cleanCSS, getCssHeader = () => '') {
    var resolvePath = (p) => path.resolve(path.join(__dirname, "../scss"), p)
    
    var processedOptions = await readInput(options);
    var devextremeOptions = { ...processedOptions }; // devextremeOptions object will be changed on devextreme theme builder working
    devextremeOptions.reader = readFile;
    devextremeOptions.scssCompiler = scssCompilerWrapper(nodeSass);
    devextremeOptions.lessCompiler = nodeLess;

    var devextremeResult = await devExtremeThemeBuilder.buildTheme(devextremeOptions)

    if(analyticsThemeBuilder) {
        var analyticsResult = await analyticsThemeBuilder(nodeLess, options.baseTheme, options.analyticsItems);
    }

    var dashboardResult = await buildDashboardTheme(options.baseTheme, options.dashboardBaseTheme, options.dashboardItems, devextremeResult.compiledMetadata, resolvePath, nodeSass);

    return await writeResult(
        cleanCSS,
        devextremeResult,
        analyticsResult,
        dashboardResult,
        getCssHeader,
        options.outputColorScheme,
        options.outputDir,
        options.createDevextremeCss,
        options.createAnalyticsCss,
        options.createMinifiedCss);
}

module.exports.buildTheme = buildTheme;
