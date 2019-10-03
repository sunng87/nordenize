type VEC3 = [number, number, number];
type HSL = VEC3;
type HSL_DISTANCE_FN = (c1: HSL, c2: HSL) => number;

// create a function for calc weighted hsl distance between two hsl color value
// FIXME: when L is out of certain scope, h and s doesn't mean anything
// HUE range 0-360
export let weightedHslDistanceFn = (weight: VEC3) => (hsl1: HSL, hsl2: HSL) => {
    let hueWeight = weight[0] / 3.6;
    if (hsl1[2] > 80) {
        hueWeight = 0;
    }

    let hDist = Math.min(Math.abs(hsl1[0] - hsl2[0]), Math.abs(hsl1[0] - (hsl2[0] - 360))) * hueWeight;
    let sDist = Math.abs(hsl1[1] - hsl2[1]) * weight[1];
    let lDist = Math.abs(hsl1[2] - hsl2[2]) * weight[2];

    return hDist + sDist + lDist;
};

export let findBestMatchColor = (givenColor: HSL, presetColors: HSL[], distanceFn: HSL_DISTANCE_FN) => {
    let min: number = Infinity;
    let matchedColor: HSL = presetColors[0];

    presetColors.forEach(cur => {
        const distance = distanceFn(givenColor, cur);
        if (distance < min) {
            min = distance;
            matchedColor = cur;
        }
    });

    return matchedColor;
};
