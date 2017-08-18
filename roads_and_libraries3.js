
'use strict'

function union (A, B) {
  for (let el of B) {
    A.add(el)
  }
}

function disjAdd (disjSet, vals) {
  let valFound = false
  let foundIn = null
  for (let s of disjSet) {
    if (s.has(vals[0]) || s.has(vals[1])) {
      if (valFound) {
        union(foundIn, s)
        s.clear()
        break
      } else {
        s.add(vals[0])
        s.add(vals[1])
        foundIn = s
        valFound = true
      }
    }
  }
  if (!valFound) {
    disjSet.push(new Set(vals))
  }
}

let n = 6
let m = 6
let roads = [
  [1,3],
  [2,4],
  [5,6],
  [3,4],
  [1,2],
  [2,3],
]

let conComps = []

for (let road of roads) {
  disjAdd(conComps, road)
}

conComps = conComps.filter(val => val.size ? true : false)
console.log(conComps)