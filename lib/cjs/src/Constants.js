"use strict";
//! Constant Values for using in generate values, validate, etc...
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantValues = exports.Constants = exports.INTERVAL_CHARS = exports.DURATION_CHARS = exports.COLOR_CODES = exports.COLOR_NAMES = exports.COLOR_CLASSNAMES = exports.SCALES = exports.NOTES_ALTERNATE = exports.NOTES = void 0;
//* Values for using in Music Useful Functions
exports.NOTES = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Fb', 'F', 'E', 'Gb', 'G', 'Ab'];
//* Values for using in Music Useful Functions
exports.NOTES_ALTERNATE = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'F', 'E', 'E#', 'G', 'G#'];
//* Values for using in Music Useful Functions
exports.SCALES = [
    'major',
    'minor',
    'ionian',
    'dorian',
    'phrygian',
    'lydian',
    'mixolydian',
    'aeolian',
    'locrian',
    'majorpentatonic',
    'minorpentatonic',
    'chromatic',
    'harmonicchromatic',
    'blues',
    'doubleharmonic',
    'flamenco',
    'harmonicminor',
    'melodicminor',
    'wholetone',
];
//* Values for using in Music Useful Functions
exports.COLOR_CLASSNAMES = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body',
    'white',
    'transparent',
];
//* Values for using in Music Useful Functions
exports.COLOR_NAMES = [
    'blue',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'cyan',
];
//* Values for using in Music Useful Functions
exports.COLOR_CODES = [
    '#ff0000',
    '#ff4e00',
    '#db7b00',
    '#ffcc00',
    '#e4ed00',
    '#81d700',
    '#00ffb4',
    '#00ffea',
    '#00baff',
    '#3c00ff',
    '#a800ff',
    '#ff00fd',
];
//* Values for using in Music Useful Functions
exports.DURATION_CHARS = ['n', 't', 'm', 'n'];
//* Values for using in Music Useful Functions
exports.INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'];
exports.Constants = {
    NOTES: exports.NOTES,
    NOTES_ALTERNATE: exports.NOTES_ALTERNATE,
    SCALES: exports.SCALES,
    COLOR_CLASSNAMES: exports.COLOR_CLASSNAMES,
    COLOR_NAMES: exports.COLOR_NAMES,
    COLOR_CODES: exports.COLOR_CODES,
    DURATION_CHARS: exports.DURATION_CHARS,
    INTERVAL_CHARS: exports.INTERVAL_CHARS,
};
exports.ConstantValues = {
    ...exports.Constants,
    Notes: exports.NOTES,
    NotesAlternate: exports.NOTES_ALTERNATE,
    Scales: exports.SCALES,
    ColorClassnames: exports.COLOR_CLASSNAMES,
    ColorNames: exports.COLOR_NAMES,
    ColorCodes: exports.COLOR_CODES,
    DurationChars: exports.DURATION_CHARS,
    IntervalChars: exports.INTERVAL_CHARS,
};
// For module exporting
exports.default = exports.ConstantValues;
