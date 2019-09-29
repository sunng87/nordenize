import * as colorConvert from 'color-convert';

const weightedHslDistanceFn = (weight: [number, number, number]) => (
    hsl1: [number, number, number],
    hsl2: [number, number, number],
) => [1, 2, 3].map(i => (hsl1[i] - hsl2[i]) * weight[i]).reduce((itm, acc) => acc + itm);
