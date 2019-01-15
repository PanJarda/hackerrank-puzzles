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

function ctreeh (q) {
  let treeh = 1;

  while (q-- > 0) {
    treeh <<= 1;
    if (q--)
      treeh++;
  }

  return treeh;
}

const ctreeh2 = n => ~(~1 << (n >> 1)) << (n & 1);

function main() {
  let n = getint();
  while (n--) {
    let q = getint();
    console.log(ctreeh2(q));
  }
}
