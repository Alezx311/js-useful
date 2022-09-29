import { N } from './types';
export declare const STR = "Some string value";
export declare const RND = 0.311;
export declare const BLN = false;
export declare const NUM = 237563390;
export declare const ARR: (string | number)[];
export declare const OBJ: {
    STR: string;
    NUM: number;
};
export declare const ERR: Error;
export declare const BIG: number;
export declare const FUNC: (v: any) => number;
declare const PRIVATE_MUSIC_NOTES_CHARS: readonly ["A", "B", "C", "D", "F", "E", "G"];
declare const PRIVATE_MUSIC_NOTES_BEMOLE: readonly ["A", "B", "C", "D", "F", "E", "G", "Bb", "Db", "Fb", "Gb", "Ab"];
declare const PRIVATE_MUSIC_NOTES_SHARP: readonly ["A", "B", "C", "D", "F", "E", "G", "A#", "C#", "D#", "E#", "G#"];
declare const PRIVATE_MUSIC_DURATION_CHARS: readonly ["n", "t", "m", "n"];
declare const PRIVATE_MUSIC_INTERVAL_CHARS: readonly ["P1", "M2", "M3", "P4", "P5", "M6", "M7"];
declare const PRIVATE_MUSIC_SCALES: readonly ["major", "minor", "ionian", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian", "majorpentatonic", "minorpentatonic", "chromatic", "harmonicchromatic", "blues", "doubleharmonic", "flamenco", "harmonicminor", "melodicminor", "wholetone"];
declare const PRIVATE_COLOR_CLASS: readonly ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "body", "white", "transparent"];
declare const PRIVATE_COLOR_NAMES: readonly ["blue", "indigo", "purple", "pink", "red", "orange", "yellow", "green", "teal", "cyan"];
declare const PRIVATE_COLOR_CODES: readonly ["#ff0000", "#ff4e00", "#db7b00", "#ffcc00", "#e4ed00", "#81d700", "#00ffb4", "#00ffea", "#00baff", "#3c00ff", "#a800ff", "#ff00fd"];
declare const PRIVATE_TYPEOF: string[];
export declare const TYPEOF: string[];
export declare const MUSIC_NOTES_CHARS: ("A" | "B" | "C" | "D" | "F" | "E" | "G")[];
export declare const MUSIC_NOTES_BEMOLE: ("A" | "B" | "C" | "D" | "F" | "E" | "G" | "Bb" | "Db" | "Fb" | "Gb" | "Ab")[];
export declare const MUSIC_NOTES_SHARP: ("A" | "B" | "C" | "D" | "F" | "E" | "G" | "A#" | "C#" | "D#" | "E#" | "G#")[];
export declare const MUSIC_DURATION_CHARS: ("n" | "t" | "m")[];
export declare const MUSIC_INTERVAL_CHARS: ("P1" | "M2" | "M3" | "P4" | "P5" | "M6" | "M7")[];
export declare const MUSIC_SCALES: ("major" | "minor" | "ionian" | "dorian" | "phrygian" | "lydian" | "mixolydian" | "aeolian" | "locrian" | "majorpentatonic" | "minorpentatonic" | "chromatic" | "harmonicchromatic" | "blues" | "doubleharmonic" | "flamenco" | "harmonicminor" | "melodicminor" | "wholetone")[];
export declare const COLOR_CLASS: ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "body" | "white" | "transparent")[];
export declare const COLOR_NAMES: ("blue" | "indigo" | "purple" | "pink" | "red" | "orange" | "yellow" | "green" | "teal" | "cyan")[];
export declare const COLOR_CODES: ("#ff0000" | "#ff4e00" | "#db7b00" | "#ffcc00" | "#e4ed00" | "#81d700" | "#00ffb4" | "#00ffea" | "#00baff" | "#3c00ff" | "#a800ff" | "#ff00fd")[];
export declare type tTypeOf = typeof PRIVATE_TYPEOF[N];
export declare type tMusicNoteChar = typeof PRIVATE_MUSIC_NOTES_CHARS[N];
export declare type tMusicNoteBemole = typeof PRIVATE_MUSIC_NOTES_BEMOLE[N];
export declare type tMusicNoteSharp = typeof PRIVATE_MUSIC_NOTES_SHARP[N];
export declare type tMusicScale = typeof PRIVATE_MUSIC_DURATION_CHARS[N];
export declare type tMusicDuration = typeof PRIVATE_MUSIC_INTERVAL_CHARS[N];
export declare type tMusicInterval = typeof PRIVATE_MUSIC_SCALES[N];
export declare type tColorClass = typeof PRIVATE_COLOR_CLASS[N];
export declare type tColorName = typeof PRIVATE_COLOR_NAMES[N];
export declare type tColorCode = typeof PRIVATE_COLOR_CODES[N];
export {};
