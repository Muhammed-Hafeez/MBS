import apiRequest from "../../utils/fetchApi";
const protocol = window.location.protocol;
const host = window.location.hostname;
const baseURL = `${protocol}//${host}`;


//webdata
export async function getWebData() {
  const webdata = await apiRequest(baseURL + "/api/cms/webdata", "GET");
  return webdata;
}
export async function patchWebCard(data) {
  const teamcards = await apiRequest(baseURL + "/api/cms/webdata", "PATCH", data);
  return teamcards;
}
