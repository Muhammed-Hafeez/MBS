import apiRequest from "../utils/fetchApi";
const protocol = window.location.protocol; // e.g., 'http:' or 'https:'
const host = window.location.hostname; // e.g., 'localhost' or 'example.com'
const port = 80; // e.g., '3000', '80', or '' (empty for default ports)
const baseURL = `${protocol}//${host}:${port}`;
export async function getLeads() {
  const result = await apiRequest(baseURL + "/api/analytics/leads", "GET");
  if (result.success === false) {
    return false;
  }
  return result;
}
export async function genrateLead(object) {
  const result = await apiRequest(
    baseURL + "/api/analytics/leads",
    "POST",
    object
  );
  return result;
}
export async function deleteLead(id) {
  const response = await apiRequest(
    baseURL + `/api/analytics/leads/${id}`,
    "DELETE"
  );
  return response;
}
