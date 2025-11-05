const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * spring, summer, autumn (fall), winter.

 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  try {
    date.getTime()
  } catch {
    throw new Error('Invalid date!')
  }
  if (date instanceof Date || !isNaN(date.getTime())) {
    let mounth = date.getMonth()

    if (mounth == 11 || mounth == 0 || mounth == 1) {
      return 'winter'
    }
    if (mounth == 2 || mounth == 3 || mounth == 4) {
      return 'spring'
    }
    if (mounth == 5 || mounth == 6 || mounth == 7) {
      return 'summer'
    }
    if (mounth == 8 || mounth == 9 || mounth == 10) {
      return 'autumn'
    }
  } else {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason
};
