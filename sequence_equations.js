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

function inverse (n, p) {
  let pinv = [];
  for (let i=0 i<n;i++)
    pinv[p[i]] = i+1;
  return pinv;
}

function main() {
  let n = getint(),
    p = getarr(),
    pinv = inverse(n, p);
  for (let i = 1; i <= n; i++)
    console.log(pinv[pinv[i]]);
}
