
'use strict'

function union (A, B) {
  for (let elm of B)
    A.add(elm)
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

let contacts = []
let citswroads = new Set()

for (let i=0; i<m; i++) {
  let city = roads[i][0]
  let nextCity = roads[i][1]
  if (contacts[city])
    contacts[city].add(nextCity)
  else
    contacts[city] = new Set().add(nextCity)

  if (contacts[nextCity])
    contacts[nextCity].add(city)
  else
    contacts[nextCity] = new Set().add(city)
}
console.log(contacts)

for (let i=1; i<n; i++) {
  for (let city of contacts[i]) {
    if (contacts[city].size && city !== i) {
      union(contacts[i], contacts[city])
      contacts[city].clear()
    }
  }
}

console.log(nislands)
console.log(islands)