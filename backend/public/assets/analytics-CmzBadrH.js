import{d as s}from"./index-zZgcTnrc.js";const n=window.location.protocol,o=window.location.hostname,t=`${n}//${o}`;async function i(){const a=await s(t+"/api/analytics/leads","GET");return a.success===!1?!1:a}async function r(a){return await s(t+"/api/analytics/leads","POST",a)}async function l(a){return await s(t+`/api/analytics/leads/${a}`,"DELETE")}export{i as a,l as d,r as g};
