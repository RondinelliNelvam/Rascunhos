function add(x, y) {
  if (typeof x !== "number") {
    throw new Error("The first argument must be a number");
  }
  if (typeof y !== "number") {
    throw new Error("The second argument must be a number");
  }

  return x + y;
}

try {
  const result = add("a", 10);
  console.log(result);
} catch (e) {
  console.log(e.name, ":", e.message);
}
