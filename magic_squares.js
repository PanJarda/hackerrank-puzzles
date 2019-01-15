#!/usr/bin/env node

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

function get4 (view, i) {
  return i % 2 ? view[i-1] % 16 : view[i] >> 4;
}

function mkmatrix (m) {
  let buf = new ArrayBuffer(4),
   view = new Uint8Array(buf);

  for (let i = 0; i < 8; i+=2) {
    let j = i >> 1;
    view[j] = m[i] << 4;
    view[j] += m[i+1];
  }
  return buf;  
}

function mxsub (buf1, buf2) {
  let v1 = new Uint32Array(buf1),
    v2 = new Uint32Array(buf2),
    bufr = new ArrayBuffer(4),
    vr = new Uint32Array(bufr);
  vr[0] = v1[0] ^ v2[0];
  console.log(v1[0].toString(2));
  console.log(v2[0].toString(2));
  console.log(vr[0].toString(2));
  return bufr;
}

function mxsum (buf) {
  let view = new Uint8Array(buf),
  sum = 0;

  for (let i = 0; i < 4; i++) {
    console.log((view[i] >> 4).toString(2), view[i] % 16);
    sum += view[i] >> 4 + view[i] % 16;
  }
  return sum;
}

function main() {
  let m0 = readLine().split(' ').map(v=>parseInt(v)),
    m1 = readLine().split(' ').map(v=>parseInt(v)),
    m2 = readLine().split(' ').map(v=>parseInt(v)),
    center = m1.splice(1,1),
    matrix = m0.concat(m1).concat(m2),
    a = mkmatrix(matrix),
    b = mkmatrix([ 3, 8, 2, 4, 7, 6, 1, 6 ]),
    sub = mxsub(a,b),
    sum = mxsum(sub);
    console.log(sum);
}
