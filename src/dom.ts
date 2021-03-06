type COLOR_MAP_FN = (color: string) => string;

export const mapStyleColorRules = (fn: COLOR_MAP_FN) => {
    Array.from(document.styleSheets).forEach((sheet: StyleSheet) => {
        const cssSheet = sheet as CSSStyleSheet;
        try {
            Array.from(cssSheet.cssRules).forEach((rule: CSSRule) => {
                const cssRule = rule as CSSStyleRule;
                if (cssRule.style) {
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
                }
            });
        } catch (e) {}
    });
};
