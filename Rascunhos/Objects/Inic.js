let a = "foor",
  b = 42,
  c = {};

let o = { a, b, c };

console.log(o);

let o2 = { x: 1, x: 2 };
console.log(o2);

let i = 0;
let o3 = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
};

let param = "size";
let config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};

console.log(config); // { size: 12, mobileSize: 4 }

var obj1 = {};
console.assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
console.assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { __proto__: protoObj };
console.assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: "not an object or null" };
console.log(obj4);

console.assert(Object.getPrototypeOf(obj4) === Object.prototype);
console.assert(!obj4.hasOwnProperty("__proto__"));
