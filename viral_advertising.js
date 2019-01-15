'use strict'

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();    
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function likedc (n) {
  let m = 2,
    sum = 2;

  while (--n) {
    m += m >> 1;
    sum += m;
  }

  return sum;
}

function main() {
  let n = parseInt(readLine());
  console.log(likedc(n));
}
