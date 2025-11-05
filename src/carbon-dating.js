const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') { return false }
  let MODERN_ACTIVITY = 15
  let HALF_LIFE_PERIOD = 5730
  let activity = Number(sampleActivity)
  if (activity > 0 && activity < MODERN_ACTIVITY) {
    let log = Math.log(MODERN_ACTIVITY / activity)
    let lambda = 0.693 / HALF_LIFE_PERIOD


    return Math.ceil(log / lambda)
  } else {
    return false
  }


}

module.exports = {
  dateSample
};
