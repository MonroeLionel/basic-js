const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],


  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length) {
      this.chain = []
      return new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let temp = this.chain.join('~~')
    this.chain = []
    return temp
  },
};

module.exports = {
  chainMaker,
};
