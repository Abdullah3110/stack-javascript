let a = {a : 10 }, b = {b : 20 }, c = {c :30}

// let set = new Set ([a,b,c])

// a = null

// console.log(set);

// let arr = [...set]
// console.log(arr[0]);

let weakset = new WeakSet([a,b,c])
a = null;
console.log(weakset.has(a));
console.log(weakset.has(b));