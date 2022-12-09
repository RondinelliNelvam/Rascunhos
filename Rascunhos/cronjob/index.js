var CronJob = require("cron").CronJob;
var job = new CronJob(
  "*/2 * * * * *",
  function () {
    const date = new Date();
    console.log(`Agora é: ${date}`);
  },
  null,
  true,
  "UTC-1"
);
