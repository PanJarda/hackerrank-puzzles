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

const clibfine = (da, ma, ya, de, me, ye) => (
  ya > ye ? 10000 * (ya - ye) :
  ya < ye ? 0 :
  ma > me ? 500 * (ma - me) :
  ma < me ? 0 :
  da > de ? 15 * (da - de) : 0;
);

function main() {
  let act = readLine().split(' ').map(v=>parseInt(v)),
      exp = readLine().split(' ').map(v=>parseInt(v)),
      lf = clibfine(act[0], act[1], act[2], exp[0], exp[1], exp[2]);

  console.log(lf);
}
