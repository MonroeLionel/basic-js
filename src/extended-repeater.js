const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const opt = {
    repeatTimes: options.repeatTimes || 1,
    separator: options.separator || '+',
    addition: options.hasOwnProperty('addition') ? String(options.addition) : '',
    additionRepeatTimes: options.additionRepeatTimes || 1,
    additionSeparator: options.additionSeparator || '|'
  }
  let addition = ''
  for (let i = 0; i < opt.additionRepeatTimes; i++) {
    addition = addition + `${opt.addition}${opt.additionSeparator}`
  }
  addition = addition.slice(0, addition.length - opt.additionSeparator.length)
  console.log(opt.additionSeparator.length)
  let result = ''
  for (let i = 0; i < opt.repeatTimes; i++) {
    console.log(opt.repeatTimes)
    result = result + `${str}${addition}${opt.separator}`
  }
  result = result.slice(0, result.length - opt.separator.length)
  return result
}

module.exports = {
  repeater
};
