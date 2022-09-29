const { JsUseful } = require('../lib/src')

describe('Is Module Defined', () => {
	it('Is Module Defined', () => {
		expect(JsUseful).toBeDefined()
	})
})

const cb = v => (v ? true : false)
const getValue = desc => JsUseful?.[desc]
const getType = desc => typeof JsUseful?.[desc]
const getValues = desc => ({ desc, value: getValue(desc), type: getType(desc), cb: cb })

const mapper = (src, index = 0) => {
	return { index, ...getValues(src.desc), ...src }
}

const vModule = () =>
	describe('Is Module Defined', () => {
		it('Is Module Defined', () => {
			expect(JsUseful).toBeDefined()
		})
	})

const vDesc = ({ desc }) =>
	it(desc, () => {
		expect(desc).toBeDefined()
		expect(desc).not.toBeNull()
		expect(JsUseful).toHaveProperty(desc)
	})
const vValue = ({ desc, value }) =>
	it(`${desc} -> value`, () => {
		expect(value).toBeDefined()
		expect(value).not.toBeNull()
	})

const vCallback = ({ desc, cb, value }) =>
	it(`${desc} -> callback`, () => {
		if (typeof cb === 'function') {
			const result = cb(value)
			expect(result).toBe(true)
		}
	})

const vArr = ({ desc, value }) =>
	it(`${desc} -> array tests`, () => {
		expect(typeof value).toBe('object')
		expect(Array.isArray(value)).toBe(true)
		expect(value.length).toBeGreaterThanOrEqual(0)
	})

// const run = arr => {
// 	describe('asdasd', () => {
// 		arr.map(src => {
// 			vDesc(src)
// 			vValue(src)
// 		})
// 	})
// }

const run = (arr, ...cbArr) => {
	describe('asdasd', () => {
		const fnArr = [...new Set([vDesc, vValue, ...cbArr])]
		arr.map(src => fnArr.map(f => f(src)))
	})
}

const CONSTANT_VALUES = [
	{ desc: 'STR', cb: v => typeof v === 'string' },
	{ desc: 'BLN', cb: v => typeof v === 'boolean' },
	{ desc: 'NUM', cb: v => typeof v === 'number' },
	{ desc: 'RND', cb: v => typeof v === 'number' },
	{ desc: 'ARR', cb: v => typeof v === 'object' },
	{ desc: 'OBJ', cb: v => typeof v === 'object' },
	{ desc: 'ERR', cb: v => v instanceof Error },
	{ desc: 'BIG' },
	{ desc: 'FUNC', cb: v => typeof v === 'function' && typeof v() === 'number' },
].map(mapper)

const CONSTANTS_ARRAYS = [
	{ desc: 'TYPEOF' },
	{ desc: 'MUSIC_NOTES_CHARS' },
	{ desc: 'MUSIC_NOTES_BEMOLE' },
	{ desc: 'MUSIC_NOTES_SHARP' },
	{ desc: 'MUSIC_DURATION_CHARS' },
	{ desc: 'MUSIC_INTERVAL_CHARS' },
	{ desc: 'MUSIC_SCALES' },
	{ desc: 'COLOR_CLASS' },
	{ desc: 'COLOR_NAMES' },
	{ desc: 'COLOR_CODES' },
].map(mapper)

const MESSAGE_KEYS = [
	{ desc: 'validate' },
	{ desc: 'toInfo' },
	{ desc: 'toJson' },
	{ desc: 'toTextBlock' },
	{ desc: 'matchChars' },
	{ desc: 'isConstantStyle' },
	{ desc: 'isStringLength' },
	{ desc: 'strToArray' },
	{ desc: 'toTextValues' },
	{ desc: 'toTitleCase' },
	{ desc: 'toValidChars' },
	{ desc: 'matchWords' },
	{ desc: 'replaceInvalidChars' },
	{ desc: 'isUpperCase' },
	{ desc: 'rxpFromChars' },
	{ desc: 'rxpFromChars2' },
	{ desc: 'dictionaryMapper' },
	{ desc: 'dictionaryCreate' },
	{ desc: 'dictionaryReplace' },
	{ desc: 'toRomanNumeral' },
].map(mapper)

const RANDOM_CONSTANTS = [
	{ desc: 'RANDOM_ARRAY_SIZE' },
	{ desc: 'RANDOM_MIN' },
	{ desc: 'RANDOM_MAX' },
	{ desc: 'RANDOM_CONSTANTS_SOURCES' },
	{ desc: 'RANDOM_NUM' },
	{ desc: 'RANDOM_BOOL' },
	{ desc: 'RANDOM_INT' },
	{ desc: 'RANDOM_STR' },
	{ desc: 'RANDOM_SRC' },
	{ desc: 'RANDOM_ARR' },
	{ desc: 'RANDOM_OBJ' },
	{ desc: 'RANDOM_TEXT' },
	{ desc: 'RANDOM_VALUES_SOURCES' },
	{ desc: 'random' },
	{ desc: 'randomBool' },
	{ desc: 'randomNum' },
	{ desc: 'randomInt' },
	{ desc: 'randomCoin' },
	{ desc: 'randomStr' },
	{ desc: 'randomArr' },
	{ desc: 'randomMany' },
	{ desc: 'randomIndex' },
	{ desc: 'randomElement' },
	{ desc: 'randomSort' },
	{ desc: 'randomShuffle' },
	{ desc: 'randomSource' },
	{ desc: 'randomObject' },
	{ desc: 'randomKey' },
	{ desc: 'randomValue' },
	{ desc: 'randomEntry' },
	{ desc: 'RANDOM_EXAMPLES_SOURCES' },
	{ desc: 'genArr' },
	{ desc: 'genNums' },
	{ desc: 'genSources' },
	{ desc: 'randomTypeOf' },
	{ desc: 'randomSourceByType' },
	{ desc: 'randomMusicNoteChar' },
	{ desc: 'randomMusicNoteBemole' },
	{ desc: 'randomMusicNoteSharp' },
	{ desc: 'randomMusicScale' },
	{ desc: 'randomMusicDurationChar' },
	{ desc: 'randomMusicIntervalChar' },
	{ desc: 'randomMusicOctave' },
	{ desc: 'randomMusicMidiIndex' },
	{ desc: 'randomMusicValues' },
	{ desc: 'randomColorClassname' },
	{ desc: 'randomColorName' },
	{ desc: 'randomColorCode' },
	{ desc: 'randomColorValues' },
	{ desc: 'float' },
	{ desc: 'number' },
	{ desc: 'powerOfTwo' },
	{ desc: 'numbersDeep' },
	{ desc: 'values' },
	{ desc: 'boolean' },
	{ desc: 'array' },
	{ desc: 'numbers' },
	{ desc: 'arrays' },
	{ desc: 'arrayGrow' },
	{ desc: 'arraySequence' },
	{ desc: 'arrayChange' },
	{ desc: 'arrayMerge' },
	{ desc: 'arrayDouble' },
	{ desc: 'arrayRepeats' },
	{ desc: 'arrayIndex' },
	{ desc: 'arrayElement' },
	{ desc: 'arrayElements' },
	{ desc: 'arrayUnicals' },
	{ desc: 'arrayShuffle' },
	{ desc: 'arrayPart' },
	{ desc: 'arrayDeepSomeValues' },
	{ desc: 'joinedStrings' },
	{ desc: 'objectKey' },
	{ desc: 'objectValue' },
	{ desc: 'objectEntry' },
	{ desc: 'RANDOM_ARRAY_SIZE' },
	{ desc: 'RANDOM_MIN' },
	{ desc: 'RANDOM_MAX' },
	{ desc: 'RANDOM_CONSTANTS_SOURCES' },
	{ desc: 'RANDOM_NUM' },
	{ desc: 'RANDOM_BOOL' },
	{ desc: 'RANDOM_INT' },
	{ desc: 'RANDOM_STR' },
	{ desc: 'RANDOM_SRC' },
	{ desc: 'RANDOM_ARR' },
	{ desc: 'RANDOM_OBJ' },
	{ desc: 'RANDOM_TEXT' },
	{ desc: 'RANDOM_VALUES_SOURCES' },
	{ desc: 'RANDOM_EXAMPLES_SOURCES' },
].map(mapper)

const USEFUL_CONSTANTS = [
	{ desc: 'is' },
	{ desc: 'isF' },
	{ desc: 'isO' },
	{ desc: 'isN' },
	{ desc: 'isS' },
	{ desc: 'isA' },
	{ desc: 'isB' },
	{ desc: 'isE' },
	{ desc: 'isNull' },
	{ desc: 'isUndefined' },
	{ desc: 'isRegExp' },
	{ desc: 'isError' },
	{ desc: 'isDate' },
	{ desc: 'isSymbol' },
	{ desc: 'isLen' },
	{ desc: 'isTruthy' },
	{ desc: 'isOdd' },
	{ desc: 'isPalindrome' },
	{ desc: 'toS' },
	{ desc: 'toA' },
	{ desc: 'toO' },
	{ desc: 'toL' },
	{ desc: 'toJson' },
	{ desc: 'toTypeOf' },
	{ desc: 'toCallback' },
	{ desc: 'arrLastIndex' },
	{ desc: 'arrLast' },
	{ desc: 'arrFlat' },
	{ desc: 'arrUnical' },
	{ desc: 'arrUnicals' },
	{ desc: 'arrMax' },
	{ desc: 'arrMin' },
	{ desc: 'arrayQuickSort' },
	{ desc: 'arrShuffle' },
	{ desc: 'arrQuickSort' },
	{ desc: 'objAssign' },
	{ desc: 'objKeys' },
	{ desc: 'objValues' },
	{ desc: 'objEntries' },
	{ desc: 'objFrom' },
	{ desc: 'objCreate' },
	{ desc: 'getTimePerformance' },
	{ desc: 'timeStamp' },
	{ desc: 'timeISO' },
	{ desc: 'timeUTC' },
	{ desc: 'getSourceValues' },
].map(mapper)

const JSUSEFUL_KEYS = [
	...new Set([
		...CONSTANT_VALUES,
		...CONSTANTS_ARRAYS,
		...MESSAGE_KEYS,
		...RANDOM_CONSTANTS,
		...USEFUL_CONSTANTS,
		{ desc: 'errBasic' },
		{ desc: 'errType' },
		{ desc: 'errEval' },
		{ desc: 'errRange' },
		{ desc: 'errSyntax' },
		{ desc: 'errReference' },
		{ desc: 'ERROR_BASIC' },
		{ desc: 'ERROR_TYPE' },
		{ desc: 'ERROR_EVAL' },
		{ desc: 'ERROR_RANGE' },
		{ desc: 'ERROR_SYNTAX' },
		{ desc: 'ERROR_REFERENCE' },
		{ desc: 'ERROR_TYPE_NOT_STRING' },
		{ desc: 'ERROR_TYPE_NOT_ARRAY' },
		{ desc: 'ERROR_VALUE' },
		{ desc: 'ERROR_VALUE_NOT_DEFINED' },
		{ desc: 'ERROR_VALUE_NOT_TRUTHY' },
		{ desc: 'ERROR_LENGTH' },
		{ desc: 'ERROR_LENGTH_SHORT' },
		{ desc: 'ERROR_LENGTH_LARGE' },
		{ desc: 'STR' },
		{ desc: 'RND' },
		{ desc: 'BLN' },
		{ desc: 'NUM' },
		{ desc: 'ARR' },
		{ desc: 'OBJ' },
		{ desc: 'ERR' },
		{ desc: 'BIG' },
		{ desc: 'FUNC' },
		{ desc: 'TYPEOF' },
		{ desc: 'MUSIC_NOTES_CHARS' },
		{ desc: 'MUSIC_NOTES_BEMOLE' },
		{ desc: 'MUSIC_NOTES_SHARP' },
		{ desc: 'MUSIC_DURATION_CHARS' },
		{ desc: 'MUSIC_INTERVAL_CHARS' },
		{ desc: 'MUSIC_SCALES' },
		{ desc: 'COLOR_CLASS' },
		{ desc: 'COLOR_NAMES' },
		{ desc: 'COLOR_CODES' },
		{ desc: 'RANDOM_ARRAY_SIZE' },
		{ desc: 'RANDOM_MIN' },
		{ desc: 'RANDOM_MAX' },
		{ desc: 'RANDOM_CONSTANTS_SOURCES' },
		{ desc: 'RANDOM_NUM' },
		{ desc: 'RANDOM_BOOL' },
		{ desc: 'RANDOM_INT' },
		{ desc: 'RANDOM_STR' },
		{ desc: 'RANDOM_SRC' },
		{ desc: 'RANDOM_ARR' },
		{ desc: 'RANDOM_OBJ' },
		{ desc: 'RANDOM_TEXT' },
		{ desc: 'RANDOM_VALUES_SOURCES' },
		{ desc: 'random' },
		{ desc: 'randomBool' },
		{ desc: 'randomNum' },
		{ desc: 'randomInt' },
		{ desc: 'randomCoin' },
		{ desc: 'randomStr' },
		{ desc: 'randomArr' },
		{ desc: 'randomMany' },
		{ desc: 'randomIndex' },
		{ desc: 'randomElement' },
		{ desc: 'randomSort' },
		{ desc: 'randomShuffle' },
		{ desc: 'randomSource' },
		{ desc: 'randomObject' },
		{ desc: 'randomKey' },
		{ desc: 'randomValue' },
		{ desc: 'randomEntry' },
		{ desc: 'RANDOM_EXAMPLES_SOURCES' },
		{ desc: 'genArr' },
		{ desc: 'genNums' },
		{ desc: 'genSources' },
		{ desc: 'randomTypeOf' },
		{ desc: 'randomSourceByType' },
		{ desc: 'randomMusicNoteChar' },
		{ desc: 'randomMusicNoteBemole' },
		{ desc: 'randomMusicNoteSharp' },
		{ desc: 'randomMusicScale' },
		{ desc: 'randomMusicDurationChar' },
		{ desc: 'randomMusicIntervalChar' },
		{ desc: 'randomMusicOctave' },
		{ desc: 'randomMusicMidiIndex' },
		{ desc: 'randomMusicValues' },
		{ desc: 'randomColorClassname' },
		{ desc: 'randomColorName' },
		{ desc: 'randomColorCode' },
		{ desc: 'randomColorValues' },
		{ desc: 'float' },
		{ desc: 'number' },
		{ desc: 'powerOfTwo' },
		{ desc: 'numbersDeep' },
		{ desc: 'values' },
		{ desc: 'boolean' },
		{ desc: 'array' },
		{ desc: 'numbers' },
		{ desc: 'arrays' },
		{ desc: 'arrayGrow' },
		{ desc: 'arraySequence' },
		{ desc: 'arrayChange' },
		{ desc: 'arrayMerge' },
		{ desc: 'arrayDouble' },
		{ desc: 'arrayRepeats' },
		{ desc: 'arrayIndex' },
		{ desc: 'arrayElement' },
		{ desc: 'arrayElements' },
		{ desc: 'arrayUnicals' },
		{ desc: 'arrayShuffle' },
		{ desc: 'arrayPart' },
		{ desc: 'arrayDeepSomeValues' },
		{ desc: 'joinedStrings' },
		{ desc: 'objectKey' },
		{ desc: 'objectValue' },
		{ desc: 'objectEntry' },
		{ desc: 'validate' },
		{ desc: 'toInfo' },
		{ desc: 'toJson' },
		{ desc: 'toTextBlock' },
		{ desc: 'matchChars' },
		{ desc: 'isConstantStyle' },
		{ desc: 'isStringLength' },
		{ desc: 'strToArray' },
		{ desc: 'toTextValues' },
		{ desc: 'toTitleCase' },
		{ desc: 'toValidChars' },
		{ desc: 'matchWords' },
		{ desc: 'replaceInvalidChars' },
		{ desc: 'isUpperCase' },
		{ desc: 'rxpFromChars' },
		{ desc: 'rxpFromChars2' },
		{ desc: 'dictionaryMapper' },
		{ desc: 'dictionaryCreate' },
		{ desc: 'dictionaryReplace' },
		{ desc: 'toRomanNumeral' },
		{ desc: 'is' },
		{ desc: 'isF' },
		{ desc: 'isO' },
		{ desc: 'isN' },
		{ desc: 'isS' },
		{ desc: 'isA' },
		{ desc: 'isB' },
		{ desc: 'isE' },
		{ desc: 'isNull' },
		{ desc: 'isUndefined' },
		{ desc: 'isRegExp' },
		{ desc: 'isError' },
		{ desc: 'isDate' },
		{ desc: 'isSymbol' },
		{ desc: 'isLen' },
		{ desc: 'isTruthy' },
		{ desc: 'isOdd' },
		{ desc: 'isPalindrome' },
		{ desc: 'toS' },
		{ desc: 'toA' },
		{ desc: 'toO' },
		{ desc: 'toL' },
		{ desc: 'toTypeOf' },
		{ desc: 'toCallback' },
		{ desc: 'arrLastIndex' },
		{ desc: 'arrLast' },
		{ desc: 'arrFlat' },
		{ desc: 'arrUnical' },
		{ desc: 'arrUnicals' },
		{ desc: 'arrMax' },
		{ desc: 'arrMin' },
		{ desc: 'arrayQuickSort' },
		{ desc: 'arrShuffle' },
		{ desc: 'arrQuickSort' },
		{ desc: 'objAssign' },
		{ desc: 'objKeys' },
		{ desc: 'objValues' },
		{ desc: 'objEntries' },
		{ desc: 'objFrom' },
		{ desc: 'objCreate' },
		{ desc: 'getTimePerformance' },
		{ desc: 'timeStamp' },
		{ desc: 'timeISO' },
		{ desc: 'timeUTC' },
		{ desc: 'getSourceValues' },
		{ desc: 'All' },
		{ desc: 'Errors' },
		{ desc: 'Constants' },
		{ desc: 'Randoms' },
		{ desc: 'Messages' },
		{ desc: 'Useful' },
		{ desc: 'Validators' },
		{ desc: 'Converters' },
		{ desc: 'Arrays' },
		{ desc: 'Objects' },
		{ desc: 'Dates' },
		{ desc: 'Sources' },
	]),
].map(mapper)

module.exports = {
	CONSTANT_VALUES,
	CONSTANTS_ARRAYS,
	MESSAGE_KEYS,
	RANDOM_CONSTANTS,
	USEFUL_CONSTANTS,
	JSUSEFUL_KEYS,
	cb,
	getValue,
	getType,
	getValues,
	mapper,
	vModule,
	vDesc,
	vValue,
	vCallback,
	vArr,
	run,
}
