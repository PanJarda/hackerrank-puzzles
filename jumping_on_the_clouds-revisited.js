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

function energy (n, k, clouds) {
  let e = 100,
    i = 0;

  do {
    i = (i + k) % n;
    e -= 1 + 2*clouds[i];
  } while (i);

  return e;
}

function main() {
  let l = readLine().split(' ').map(v=>parseInt(v)),
    n = l[0],
    k = l[1],
    clouds = readLine().split(' ').map(v=>parseInt(v));

  console.log(energy(n, k, clouds));
}
