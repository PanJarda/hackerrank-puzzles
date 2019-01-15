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

function maxsubarr(n, a) {
  var maxsumc = a[0];
  var sumc = a[0];
  var sumn = a[0];

  for (let i=1; i<n; i++) {
    sumc += a[i];
    if (sumc > maxsumc)
      maxsumc = sumc;

    if (a[i] > 0)
      if (sumn > 0)
        sumn += a[i];
      else
        sumn = a[i];
    else
      if (a[i] > sumn)
        sumn = a[i];
  }

  return [maxsumc, sumn];
}

function main() {
  var T = getint();
  for (let i = 0; i < T; i++) {
    let n = getint(),
      a = getarr(),
      r = maxsubarr(n, a);
    console.log(r[0], r[1]);
  }
}