
'use strict'

function newadjl (edges) {
  let adjl = new Map()

  for (let e of edges) {
    let from = e[0]
    let to = e[1]

    if (adjl.has(from))
      adjl.get(from).adjs.add(to)
    else
      adjl.set(from, {
        adjs: new Set([to]),
        visited: 0
      })

    if (adjl.has(to))
      adjl.get(to).adjs.add(from)
    else
      adjl.set(to, {
        adjs: new Set([from]),
        visited: 0
      })
  }

  return adjl
}

function dfs (adjl, start) {
  let node = adjl.get(start)

  if (node.visited)
    return

  node.visited = 1

  for (let v of node.adjs) {
    dfs(adjl, v)
  }
}

// count connected components
function countcc (adjl) {
  let s = adjl.size
  let ncc = 0
  for (let k of adjl.keys()) {
    if (adjl.get(k).visited)
      continue
    ncc++
    dfs(adjl, k)
  }
  return ncc
}

/* TESTS */

const edges = [
    [1,3],
    [2,4],
    [5,6],
    [3,4],
    [1,2]
  ]

function tnewadjl () {
  return newadjl(edges)
}

function tdfs () {
  return dfs(newadjl(edges), edges[0][0])
}

function tcountcc () {
  return countcc(newadjl(edges))
}

console.log(tcountcc())
