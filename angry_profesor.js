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

function canceled (n, th, times) {
  let att = 0;
  
  while (n--)
    if (times[n] <= 0)
      att++;

  return att < th ? 'YES' : 'NO';
}

function main() {
  let t = getint();
  while (t--) {
    let l = getarr(),
      n = l[0],
      th = l[1],
      times = getarr();
    console.log(canceled(n, th, times));
  }
}
