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

function reverse (n) {
  let r = 0;

  while (n) {
    r *= 10;
    r += n % 10;
    n = Math.floor(n / 10);
  }

  return r;
}

function isbful (d, k) {
  return !((reverse(d) - d) % k);
}

function bfuldaysc (i, j, k) {
  if (k === 1)
    return j - i + 1;

  let count = 0;

  while (i <= j) {
    if (isbful(i, k))
      count++;
    i++;
  }

  return count;
}

function main() {
  let l = readLine().split(' ').map(v=>parseInt(v)),
    i = l[0],
    j = l[1],
    k = l[2];

  console.log(bfuldaysc(i, j, k));
}
