import apiRequest from "../../utils/fetchApi";
const protocol = window.location.protocol;
const host = window.location.hostname;
const baseURL = `${protocol}//${host}`;

//swiper
export async function getSwiperImages() {
  const swiperImages = await apiRequest(baseURL + "/api/cms/swiper", "GET");
  return swiperImages;
}
export async function postSwiperImages(data) {
  const swiperImages = await apiRequest(
    baseURL + "/api/cms/swiper",
    "POST",
    data
  );
  return swiperImages;
}
export async function patchSwiperImages(id, data) {
  
  const swiperImages = await apiRequest(
    baseURL + `/api/cms/swiper/${id}`,
    "PATCH",
    data
  );
  return swiperImages;
}
export async function deleteSwiperImages(id) {
  const swiperImages = await apiRequest(
    baseURL + `/api/cms/swiper/${id}`,
    "DELETE"
  );
  return swiperImages;
}
