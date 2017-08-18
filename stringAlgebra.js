
'use strict'

const muls = [
  [1,2,3,4,5,6,7,8,9],
  [2,4,6,8,10,12,14,16,18],
  [3,6,9,12,15,18,21,24,27],
  [4,8,12,16,20,24,28,32,36],
  [5,10,15,20,25,30,35,40,45],
  [6,12,18,24,30,36,42,48,54],
  [7,14,21,28,35,42,49,56,63],
  [8,16,24,32,40,48,56,64,72],
  [9,18,27,36,45,54,63,72,81]
]

const MULB = [
  [1,2,3,4,5,6,7,8,9],
  [2,4,6,8,0,2,4,6,8],
  [3,6,9,2,5,8,1,4,7],
  [4,8,2,6,0,4,8,2,6],
  [5,0,5,0,5,0,5,0,5],
  [6,2,8,4,0,6,2,8,4],
  [7,4,1,8,5,2,9,6,3],
  [8,6,4,2,0,8,6,4,2],
  [9,8,7,6,5,4,3,2,1]
]

const MULC = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,1],
  [0,0,0,1,1,1,2,2,2],
  [0,0,1,1,2,2,2,3,3],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,3,3,4,4,4],
  [0,1,2,2,3,4,4,5,6],
  [0,1,2,3,4,4,5,6,7],
  [0,1,2,3,4,5,6,7,8]
]

function addArbitrary (intA, intB) {
  let arrA = intA.split('').reverse()
  let arrB = intB.split('').reverse()
  let max = Math.max(arrA.length, arrB.length)
  let sum = new Array(max).fill(0)
  let carry = false
  let numA = 0
  let numB = 0
  let numSum = 0
  let i = 0;
  for (; i < max; i++) {
    if (typeof arrA[i] === 'undefined') {
      numA = 0
    } else {
      numA = Number(arrA[i])
    }
    if (typeof arrB[i] === 'undefined') {
      numB = 0
    } else {
      numB = Number(arrB[i])
    }
    numSum = numA + numB
    if (carry) {
      numSum++
    }
    if (numSum < 10) {
      carry = false
      sum[i] = numSum.toString()
    } else {
      carry = true
      sum[i] = (numSum - 10).toString()
    }
  }
  if (carry) {
    sum[i + 1] = 1
  }
  return sum.reverse().join('')
}

function fillZeros (intZeros) {
  let res = ''
  for (let i = 0; i < intZeros; i++) {
    res = res + '0'
  }
  return res
}

function mulArbitrary (intA, intB) {
  if (intA.length < MAX_MUL && intB.length < MAX_MUL) {
    return (parseInt(intA) * parseInt(intB)).toString()
  }
  let arrA = intA.split('').reverse()
  let arrB = intB.split('').reverse()
  let res = '0'
  let i_a = 0
  let tmp = ''
  let cache = []
  for (; i_a < arrA.length; i_a++) {
    if (arrA[i_a] === 0) {
      continue;
    }
    if (arrA[i_a] === 1) {
      res = addArbitrary(res, intB + fillZeros(i_a))
      continue;
    }
    if (typeof cache[arrA[i_a]] !== 'undefined') {
      res = addArbitrary(res, cache[arrA[i_a]] + fillZeros(i_a))
      continue;
    }
    let i_b = 0
    let product = []
    let carry = 0
    for (; i_b < arrB.length; i_b++) {
      let tmp = arrB[i_b] * arrA[i_a] + carry
      product[i_b] = tmp % 10
      carry = Math.floor(tmp / 10)
    }
    if (carry) {
      product[i_b + 1] = carry
    }
    tmp = product.reverse().join('')
    cache[arrA[i_a]] = tmp
    res = addArbitrary(res, tmp + fillZeros(i_a))
  }
  return res
}

function fibMod (t0, t1, n) {
  let seq = [t0, t1]
  let i = 2
  for (; i < n; i++) {
    seq[i] = addArbitrary(seq[i - 2], mulArbitrary(seq[i - 1], seq[i - 1]))
  }
  return seq[i-1]
}

function main() {
  console.log(fibMod('0', '1', 20))
}

main()
