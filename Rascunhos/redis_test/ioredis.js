const Redis = require("ioredis");

const redis = new Redis();

redis.set("mykey", "value");

redis.get("algo", (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result); // Prints "value"
  }
});
