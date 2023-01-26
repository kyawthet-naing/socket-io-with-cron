const CronJob = require("cron").CronJob;

let socket;

let initializeSocket = (sok) => {
  socket = sok;
};

let mainJob = new CronJob(
  "25 9 * * 1-5",
  async () => {
    console.log("Job STARTED!");
    job.start();
  },
  null,
  false,
  "Asia/Rangoon"
);

let job = new CronJob(
  "*/2 * * * * *",
  async () => {
    console.log("Job STARTED!");

    if (socket != undefined) {
      socket.emit("live", new Date().getSeconds());
    }
  },
  null,
  false,
  "Asia/Rangoon"
);

let start = () => {
  mainJob.start();
};

module.exports = {
  start,
  initializeSocket,
};
