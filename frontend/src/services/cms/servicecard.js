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
export async function postServiceCard(data) {
  const serviceCards = await apiRequest(
    baseURL + "/api/cms/servicecard/",
    "POST",
    data
  );
  return serviceCards;
}
export async function patchServiceCard(id, data) {
  const serviceCards = await apiRequest(
    baseURL + `/api/cms/servicecard/${id}`,
    "PATCH",
    data
  );
  return serviceCards;
}
export async function deleteServiceCard(id) {
  const serviceCards = await apiRequest(
    baseURL + `/api/cms/servicecard/${id}`,
    "DELETE"
  );
  return serviceCards;
}
