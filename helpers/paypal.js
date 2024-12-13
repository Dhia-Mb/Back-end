const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Aeho3HUeoZMMei5-IRUlpkT8xg2G_d7fGL15kciPuhQgfh32L7--hpuA1UfWyFbDQ-yQftXc6g-NiVdw",
  client_secret: "EI6lxynnVgScmORchiPDgRFCxpa_IH-C_WSyePgP5iEW2LGNqEsZsNcFo7Owq0wCKZ56QY9HrZ5IoY2E",
});

module.exports = paypal;
