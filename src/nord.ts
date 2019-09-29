import * as colorConvert from 'color-convert';

export const palettes: { [key: string]: string[] } = {
    Aurora: ['#bf616a', '#d08770', '#ebcb8b', '#a3be8c', '#b48ead'],
    Frost: ['#8fbcbb', '#88c0d0', '#81a1c1', '#5e81ac'],
    'Polar Night': ['#2e3440', '#3b4252', '#434c5e', '#4c566a'],
    'Snow Storm': ['#d8dee9', '#e5e9f0', '#eceff4'],
};

export const colors = Object.values(palettes).flat();
export const colorsHsl = colors.map(colorConvert.hex.hsl);
