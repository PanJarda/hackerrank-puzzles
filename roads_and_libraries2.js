
'use strict'

function union (A, B) {
  for (let elm of A)
    B.add(elm)
  return B
}

let ncits = 6
let nroads = 6
let road = [
  [1,3],
  [2,4],
  [5,6],
  [3,4],
  [1,2],
  [2,3],
]

let citswroad = new Set()
let islands = []

for (let i=0; i < nroads; i++) {
  citswroad.add(road[i][0])
  citswroad.add(road[i][1])

  let j
  for (j=0; j < islands.length; j++) {
    if (islands[j].has(road[i][0])) {
      islands[j].add(road[i][1])
      break;
    } else if (islands[j].has(road[i][1])) {
      islands[j].add(road[i][0])
      break;
    }
  }
  if (j === islands.length)
    islands.push(new Set(road[i]));
}

// remove duplicities
citswroad.forEach(city => {
  let hasc = -1
  for (let j=0; j < islands.length; j++) {
    if (islands[j].has(city)) {
      if (hasc > -1) {
        islands[j].forEach(city => islands[hasc].add(city))
        islands[j].clear() 
      }
      else {
        hasc = j
      }
    }
  }
})

let nislands = islands.filter(isl => isl.size ? true : false).length

let nisolatedcits = ncits - citswroad.size

console.log('nislands=',nislands)
console.log('nisolatedcits=',nisolatedcits)
