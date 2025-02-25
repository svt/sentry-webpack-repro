import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://d0cda96cb0deccf7276f5e9244fdf0d7@o1168389.ingest.us.sentry.io/4508846186233856",
  integrations: [],
  release: "1.0.0",
  environment: process.env.NODE_ENV || "development",
});

console.log("Hello world!!!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello from index!");
});
