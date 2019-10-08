import * as colorConvert from 'color-convert';
import { mapStyleColorRules } from './dom';
import * as nord from './nord';
import * as transform from './transformer';


export class Nordenize {
    public transform() {
        const distFn = transform.weightedHslDistanceFn([3, 0.5, 2]);

        mapStyleColorRules(color => {
            const inputHsl = colorConvert.hex.hsl(color);
            const hsl = transform.findBestMatchColor(inputHsl, nord.colorsHsl, distFn);
            return colorConvert.hsl.hex(hsl);
        });
    }

    public setup() {
        window.addEventListener('DOMContentLoaded', event => {
            this.transform();
        });
    }
}
