const x = "1";
const y = "-1";
const n = "7.77";

console.log(+x);
// expected output: 1

console.log(+n);
// expected output: 7.77

console.log(+y);
// expected output: -1

console.log(+"");
// expected output: 0

console.log(+true);
// expected output: 1

console.log(+false);
// expected output: 0

console.log(+"hello");
// expected output: NaN
//When the + sign is positioned before a variable, function or any returned string representations the output will be converted to integer or float;
//the unary operator (+) converts as well the non-string values true, false, and null. retiredby: Stackoverflow/Fattech//
