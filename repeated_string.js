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

function main() {
  let s = readLine(),
    n = getint(),
    nainstr,
    nainsup = 0,
    i,
    sup = (n % s.length),
    times = Math.floor(n / s.length);

  for (i = 0; i < sup; i++)
    if (s.charAt(i) == 'a')
      nainsup++;

  nainstr = nainsup;
  for (; i< s.length; i++)
    if (s.charAt(i) == 'a')
      nainstr++;

  console.log(nainstr * times + nainsup);
}
