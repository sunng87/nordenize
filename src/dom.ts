type COLOR_MAP_FN = (color: string) => string;

export const mapStyleColorRules = (fn: COLOR_MAP_FN) => {
    Array.from(document.styleSheets).forEach((sheet: StyleSheet) => {
        let cssSheet = sheet as CSSStyleSheet;
        Array.from(cssSheet.cssRules).forEach((rule: CSSRule) => {
            let cssRule = rule as CSSStyleRule;

            // color
            if (cssRule.style.color) {
                cssRule.style.color = fn(cssRule.style.color);
            }

            // background color
            if (cssRule.style.backgroundColor) {
                cssRule.style.backgroundColor = fn(cssRule.style.backgroundColor);
            }

            // border color
            if (cssRule.style.borderColor) {
                cssRule.style.borderColor = fn(cssRule.style.borderColor);
            }
        });
    });
};
