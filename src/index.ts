import * as nord from './nord';
import { mapStyleColorRules } from './dom';
import * as transform from './transformer';
import * as colorConvert from 'color-convert';

export const setup = () => {
    window.addEventListener('DOMContentLoaded', event => {
        const distFn = transform.weightedHslDistanceFn([3, 0.5, 2]);

        mapStyleColorRules(color => {
            const inputHsl = colorConvert.hex.hsl(color);
            const hsl = transform.findBestMatchColor(inputHsl, nord.colorsHsl, distFn);
            return colorConvert.hsl.hex(hsl);
        });
    });
};
