import apiRequest from "../../utils/fetchApi";
const protocol = window.location.protocol;
const host = window.location.hostname;
const baseURL = `${protocol}//${host}`;

//projectcard
export async function getProjectCard() {
  const peojectcards = await apiRequest(
    baseURL + "/api/cms/projectcard",
    "GET"
  );
  return peojectcards;
}
export async function postProjectCard(body) {
  const peojectcards = await apiRequest(
    baseURL + "/api/cms/projectcard",
    "POST",
    body
  );
  return peojectcards;
}
export async function patchProjectCard(id, body) {
  const peojectcards = await apiRequest(
    baseURL + `/api/cms/projectcard/${id}`,
    "PATCH",
    body
  );
  return peojectcards;
}
export async function deleteProjectCard(id) {
  const teamcards = await apiRequest(
    baseURL + `/api/cms/projectcard/${id}`,
    "DELETE"
  );
  return teamcards;
}