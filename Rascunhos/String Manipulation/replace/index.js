//syntax
// let newStr = str.replace(substr, newSubstr);

let str = "JS will, JS will rock you!";
let newStr = str.replace("JS", "JavaScript");

let str2 = "JS will, JS will rock you!";
let newStr2 = str.replace(/JS/g, "JavaScript");

let str3 = "JS will, Js will rock you!";
let newStr3 = str.replace(/JS/gi, "JavaScript");

// let newStr = str.replace(substr | regexp, replacer);
let str4 = "I like to eat, eat, eat apples and bananas";
let re = /apples|bananas/gi;

{
  match: "apples";
}
{
  match: "bananas";
}

let newStr4 = str.replace(re, (match) => {
  console.log({ match });
  return match.toUpperCase();
});

console.log(str);
console.log(newStr4);
