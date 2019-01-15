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

function calcarea (heights, word) {
  let i = word.length,
    maxh = 0,
    code, h;

  while (i--) {
    code = word.charCodeAt(i);
    h = heights[code - 97];
    if (h > maxh)
      maxh = h;
  }
  return word.length * maxh;
}

function main() {
  let heights = getarr(),
    word = readLine(),
    area = calcarea(heights, word);
  console.log(area);
}
