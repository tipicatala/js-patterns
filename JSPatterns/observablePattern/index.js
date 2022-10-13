import { Observable } from "./Observable.js";
import {
  sendToGoogleAnalytics,
  sendToCustomAnalytics,
  sendToEmail,
} from "./listeners.js";

Observable.subscribe(sendToCustomAnalytics);
Observable.subscribe(sendToGoogleAnalytics);
Observable.subscribe(sendToEmail);

Observable.unsubscribe(sendToEmail);

function handleClickPinkButton() {
  Observable.notify("pink button is clicked");
}

function handleClickBlueButton() {
  Observable.notify("blue button is clicked");
}

const pinkButton = document.getElementById("pink-btn");
const blueButton = document.getElementById("blue-btn");

pinkButton.addEventListener("click", handleClickPinkButton);
blueButton.addEventListener("click", handleClickBlueButton);
