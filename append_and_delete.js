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

function canconvert (s, t, k) {
  if (s == t)
    return 'Yes';

  let sl = s.length,
    tl = t.length;

  if (sl + tl <= k)
    return 'Yes';

  let minl = Math.min(sl, tl),
    nsame = 0;
  
  for (let i = 0; i < minl; i++)
    if (s.charAt(i) == t.charAt(i))
      nsame++;
    else
      break;

  let nops = sl + tl - (nsame << 1);

  return nops > k || (k - nops) & 1 ? 'No' : 'Yes';
}

function main() {
  let s1 = readLine(),
    s2 = readLine(),
    k = getint();
  console.log(canconvert(s1,s2,k));
}
