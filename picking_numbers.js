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

/////////////// ignore above this line ////////////////////

function picknums (ar) {
  let freq = new Map(),
    nums, i, max, fa;

  for (let a of ar) {
    if (fa = freq.get(a))
      freq.set(a, fa + 1);
    else
      freq.set(a, 1);
  }

  nums = [...freq.keys()].sort((a, b) => b - a);
  i = nums.length;
  max = freq.get(nums[--i]);

  while (i--) {
    let a0 = nums[i],
      a1 = nums[i+1],
      f0 = freq.get(a0);

    if (f0 > max)
      max = f0;

    if (a0 - a1 == 1) {
      let f1 = freq.get(a1),
        sum = f0 + f1;
      
      if (sum > max)
        max = sum;
    }
  }

  return max;
}

function picknums2 (ar) {
  let freq = new Array(100).fill(0),
    i = 99,
    max = 0,
    sum;

  for (let a of ar)
    freq[a] += 1;

  while (i--)
    if ((sum = freq[i] + freq[i+1]) > max)
      max = sum;

  return max;
}

function main() {
  let n = parseInt(readLine()),
    a = readLine().split(' ').map(v => parseInt(v)),
    res = picknums(a);
  
  console.log(res);
}
