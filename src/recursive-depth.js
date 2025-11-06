const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    let count = 1

    function deep(arrDeep, count) {
      let temp = count
      for (let i = 0; i < arrDeep.length; i++) {
        if (Array.isArray(arrDeep[i])) {
          let tempDeep;
          tempDeep = deep(arrDeep[i], count + 1)
          if (tempDeep > temp) {
            temp = tempDeep
          }
        }
      }
      return temp
    }


    return deep(arr, count)
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};

