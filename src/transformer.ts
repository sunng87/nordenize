type VEC3 = [number, number, number];
type HSL = VEC3;
type HSL_DISTANCE_FN = (c1: HSL, c2: HSL) => number;

// create a function for calc weighted hsl distance between two hsl color value
// FIXME: when L is out of certain scope, h and s doesn't mean anything
export let weightedHslDistanceFn = (weight: VEC3) => (hsl1: HSL, hsl2: HSL) =>
    [1, 2, 3].map(i => Math.abs(hsl1[i] - hsl2[i]) * weight[i]).reduce((itm, acc) => acc + itm);

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
