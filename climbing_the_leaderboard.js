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

function getarr () {
  return readLine().split(' ').map(v => parseInt(v));
}

function getint () {
  return parseInt(readLine());
}

/////////////// ignore above this line ////////////////////

function binsrch (arr, val, start, end) {
  let center;

  while (start <= end) {
    center = (start + end) >> 1;

    if (val == arr[center])
      break;
      
    if (val > arr[center])
      end = center - 1;
    else
      start = center + 1;
  }

  return center;
}

function calcranks (n, score, m, alice) {
  let uniqscores = [score[0]],
    rank, end;
  
  for (let i = 1; i < n; i++)
    if (score[i-1] != score[i])
      uniqscores.push(score[i]);

  end = uniqscores.length - 1;

  for (let a of alice) {
    rank = binsrch(uniqscores, a, 0, end);

    if (uniqscores[rank] > a)
      rank++;

    end = rank;

    console.log(rank+1);
  }
}


function main() {
  let n = getint(),
    scores = getarr(),
    m = getint(),
    alices = getarr();

  calcranks(n, scores, m, alices);
}
