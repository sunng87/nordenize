import { weightedHslDistanceFn, findBestMatchColor } from '../transformer';
import { colorsHsl, palettes } from '../nord';
import * as colorConvert from 'color-convert';

test('findBestMatchcolor', () => {
    let distFn = weightedHslDistanceFn([3.6, 0.5, 2]);
    let red = colorConvert.hex.hsl('#FF1111');
    expect(findBestMatchColor(red, colorsHsl, distFn)).toStrictEqual(colorConvert.hex.hsl(palettes['Aurora'][0]));

    let white = colorConvert.hex.hsl('#FFFFFF');
    expect(findBestMatchColor(white, colorsHsl, distFn)).toStrictEqual(colorConvert.hex.hsl(palettes['Snow Storm'][2]));

    let darkgray = colorConvert.hex.hsl('#101010');
    expect(findBestMatchColor(darkgray, colorsHsl, distFn)).toStrictEqual(
        colorConvert.hex.hsl(palettes['Polar Night'][0]),
    );
});
