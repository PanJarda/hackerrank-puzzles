//
// representing ints via typed arrays
//
'use strict'

// createBigPositiveIntFrom('123456789098') -> [ 6789098, 12345 ]
function createBigPositiveIntFrom (stringOfPositiveInt) {
  let chopBase = 7
  let lengthOfStringRepresentation = stringOfPositiveInt.length
  let lengthOfArrayRepresentation = Math.ceil(lengthOfStringRepresentation / chopBase)
  let arrayRepresentation = new Array(lengthOfArrayRepresentation).fill(0)
  for (let i = 0; i < lengthOfArrayRepresentation; i++) {
    arrayRepresentation[i] = parseInt(
                              stringOfPositiveInt.slice(
                                -chopBase * (i + 1),
                                lengthOfStringRepresentation - (chopBase * i)))
  }
  return arrayRepresentation
}

function addTwoBigPositiveInts (arrayRepresentedIntA, arrayRepresentedIntB) {
  let maxIntAllowedIntoOneChop = 9999999
  let lengthOfLongestInt = Math.max(arrayRepresentedIntA.length, arrayRepresentedIntB.length)
  let sum = new Array(lengthOfLongestInt).fill(0)
  let carry = 0
  let tmpSum = 0
  let i = 0;
  for (; i < lengthOfLongestInt; i++) {
    if (typeof arrayRepresentedIntA[i] === 'undefined') {
      arrayRepresentedIntA[i] = 0
    }
    if (typeof arrayRepresentedIntB[i] === 'undefined') {
      arrayRepresentedIntB[i] = 0
    }
    tmpSum =  arrayRepresentedIntA[i] + arrayRepresentedIntB[i] + carry
    if (tmpSum <= maxIntAllowedIntoOneChop) {
      carry = 0
      sum[i] = tmpSum
    } else {
      carry = 1
      sum[i] = tmpSum - (maxIntAllowedIntoOneChop + 1)
    }
  }
  if (carry) {
    sum[i] = 1
  }
  return sum
}

function unshiftArrayTimes (array, times, fill) {
  for (let i = 0; i < times; i++) {
    array.unshift(fill)
  }
  return array
}

function mulTwoBigPositiveInts (arrayRepresentedIntA, arrayRepresentedIntB) {
  let maxIntAllowedIntoOneChop = 9999999
  let res = new Array(Math.max(arrayRepresentedIntA.length, arrayRepresentedIntB.length)).fill(0)
  let i_a = 0
  for (; i_a < arrayRepresentedIntA.length; i_a++) {
    if (arrayRepresentedIntA[i_a] === 0) {
      continue
    }
    if (arrayRepresentedIntA[i_a] === 1) {
      res = addTwoBigPositiveInts(res, unshiftArrayTimes(arrayRepresentedIntB.slice(0), i_a, 0))
      continue;
    }
    let i_b = 0
    let partialRes = []
    let carry = 0
    let tmpMul = 0
    for (; i_b < arrayRepresentedIntB.length; i_b++) {
      tmpMul = arrayRepresentedIntA[i_a] * arrayRepresentedIntB[i_b] + carry
      partialRes[i_b] = tmpMul % (maxIntAllowedIntoOneChop + 1)
      carry = Math.floor(tmpMul / (maxIntAllowedIntoOneChop + 1))
    }
    if (carry > 0) {
      partialRes[i_b] = carry
    }
    res = addTwoBigPositiveInts(res, unshiftArrayTimes(partialRes, i_a, 0))
  }
  return res
}

function convertBigPositiveIntToString (arrayRepresentedInt) {
  return arrayRepresentedInt.map(chop => {
      if (chop === 0) {
        return '0000000'
      } else {
        return chop.toString()
      }
    }).reverse().join('')
}

let c = createBigPositiveIntFrom(Number.MAX_SAFE_INTEGER.toString())
let d = createBigPositiveIntFrom(Number.MAX_SAFE_INTEGER.toString())
let mul = mulTwoBigPositiveInts(c, d)

console.log('mul = ', convertBigPositiveIntToString(mul))




