// Style import
import "./styles/main.scss";
import {
  buttonClick,
  getCity,
  updateInteface,
  clearInterface,
  showSpinner,
  hideSpinner,
} from "./dom-manipulation/domManipulation";
import { getWeather } from "./networking/weather";

export const displayWeather = async () => {
  try {
    (<HTMLInputElement>buttonClick).disabled = true;
    let city = await getCity();
    if (city !== "") {
      showSpinner();
      const response = await getWeather(city);
      updateInteface(response);
      hideSpinner();
    }
  } catch (err) {
    clearInterface();
    hideSpinner();
    alert("Error, no se encontró ciudad, intentelo de nuevo");
  } finally {
    (<HTMLInputElement> buttonClick).disabled = false;
  }
};

if (buttonClick) buttonClick.addEventListener("click", displayWeather);
