// Un servicio es una configuración que nos permite realizar acciones contra un backend
// podemos pedir información o realizar cambios creando una interfaz para nuestras aplicaciones.
import axios from "axios";

const baseURL = "https://countries.tech-savvy.tech/countries";

const countriesService = axios.create({
  baseURL
});

export const getFirstFive = async () => {
  const { data } = await countriesService.get("/");
  const result = data.slice(0, 5);
  return result;
};
export const getSpainInfo = async () => {
  const { data } = await countriesService.get("/spain");
  const [spain] = data;
  return spain;
};
export const getMexicoInfo = async () => {
  const { data } = await countriesService.get("/mexico");
  const [mexico] = data;
  return mexico;
};
