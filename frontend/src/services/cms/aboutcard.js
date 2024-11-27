import apiRequest from "../../utils/fetchApi";
const protocol = window.location.protocol;
const host = window.location.hostname;
const baseURL = `${protocol}//${host}`;

//aboutcard
export async function getAboutCard() {
  const aboutcards = await apiRequest(baseURL + "/api/cms/aboutcard", "GET");
  return aboutcards;
}
export async function postAboutCard(body) {
  const aboutcards = await apiRequest(
    baseURL + "/api/cms/aboutcard",
    "POST",
    body
  );
  return aboutcards;
}
export async function patchAboutCard(id, body) {
  const aboutcards = await apiRequest(
    baseURL + `/api/cms/aboutcard/${id}`,
    "PATCH",
    body
  );
  return aboutcards;
}
export async function deleteAboutCard(id) {
  const aboutcards = await apiRequest(
    baseURL + `/api/cms/aboutcard/${id}`,
    "DELETE"
  );
  return aboutcards;
}