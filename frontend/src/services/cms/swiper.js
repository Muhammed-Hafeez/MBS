import apiRequest from "../../utils/fetchApi";
const protocol = window.location.protocol;
const host = window.location.hostname;
const baseURL = `${protocol}//${host}`;


//swiper
export async function getSwiperImages() {
  const swiperImages = await apiRequest(baseURL + "/api/cms/swiper", "GET");
  return swiperImages;
}
export async function postSwiperImages() {
  const teamcards = await apiRequest(baseURL + "/api/cms/team", "GET");
  return teamcards;
}
export async function patchSwiperImages() {
  const teamcards = await apiRequest(baseURL + "/api/cms/team", "GET");
  return teamcards;
}
export async function deleteSwiperImages() {
  const teamcards = await apiRequest(baseURL + "/api/cms/team", "GET");
  return teamcards;
}