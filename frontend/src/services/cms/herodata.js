import apiRequest from "../../utils/fetchApi";
const protocol = window.location.protocol;
const host = window.location.hostname;
const baseURL = `${protocol}//${host}`;



//herodata
export async function getHeroData() {
  const herodata = await apiRequest(baseURL + "/api/cms/herodata", "GET");
  return herodata;
}
export async function patchHeroData(data) {
  const herodata = await apiRequest(baseURL + "/api/cms/herodata", "PATCH", data);
  return herodata;
}

