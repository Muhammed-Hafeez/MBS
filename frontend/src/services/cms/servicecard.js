import apiRequest from "../../utils/fetchApi";
const protocol = window.location.protocol;
const host = window.location.hostname;
const baseURL = `${protocol}//${host}`;

export async function getServiceCard() {
  const serviceCards = await apiRequest(
    baseURL + "/api/cms/servicecard/",
    "GET"
  );
  return serviceCards;
}
