'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  //memoにデータがあればそれを使う
  if(memo.has(n)) {
    return memo.get(n);
  }else{
  //memoにデータがないので、計算する
  let value = fib(n - 1) + fib(n - 2);
  memo.set(n,value);
  return value;
  }
}
for(let i = 0; i <= 40; i++) {
  console.log(i + "のfibonacci数は" + fib(i) + "です");
}