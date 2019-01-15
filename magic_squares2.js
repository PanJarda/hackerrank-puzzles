#!/usr/bin/env node

'use strict'

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data',  function (data) {
  input_stdin += data;
});

process.stdin.on('end',  function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function cmincost (sq) {
  let magsqrs = [
    [2, 7, 6, 9, 1, 4, 3, 8], 
    [6, 7, 2, 1, 9, 8, 3, 4], 
    [8, 1, 6, 3, 7, 4, 9, 2], 
    [6, 1, 8, 7, 3, 2, 9, 4], 
    [4, 3, 8, 9, 1, 2, 7, 6], 
    [8, 3, 4, 1, 9, 6, 7, 2], 
    [4, 9, 2, 3, 7, 8, 1, 6], 
    [2, 9, 4, 7, 3, 6, 1, 8]
  ],
    center = sq.splice(4, 1)[0],
    mincost = 36,
    i = 8;
  
  while (i--) {
    let cost = 0,
      j = 8,
      magsq = magsqrs[i];

    while (j--)
      cost += Math.abs(magsq[j] - sq[j]);

    if (cost < mincost)
      mincost = cost;
  }

  mincost += Math.abs(center - 5);

  return mincost;
}

function main() {
  let m0 = readLine().split(' ').map(v=>parseInt(v)), 
    m1 = readLine().split(' ').map(v=>parseInt(v)), 
    m2 = readLine().split(' ').map(v=>parseInt(v)), 
    sq = m0.concat(m1).concat(m2), 
    mincost = cmincost(sq);
  
  console.log(mincost);
}
