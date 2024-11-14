import apiRequest from "../../utils/fetchApi";
const protocol = window.location.protocol;
const host = window.location.hostname;
const baseURL = `${protocol}//${host}`;


//team cards
export async function getTeamCard() {
  const teamcards = await apiRequest(baseURL + "/api/cms/team", "GET");
  return teamcards;
}
export async function postTeamCard(body) {
  
  const teamcards = await apiRequest(baseURL + "/api/cms/team", "POST", body);
  return teamcards;
}
export async function updateTeamCard(id, body) {
  const teamcards = await apiRequest(
    baseURL + `/api/cms/team/${id}`,
    "PATCH",
    body
  );
  return teamcards;
}
export async function deleteTeamCard(id) {
  const teamcards = await apiRequest(baseURL + `/api/cms/team/${id}`, "DELETE");
  return teamcards;
}
