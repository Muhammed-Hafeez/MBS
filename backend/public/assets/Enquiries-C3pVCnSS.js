import{r as n,a as g,j as e,I as m,b as u,c as N}from"./index-Bl3Jepdn.js";import{d as y,a as E}from"./analytics-C3p2ctMu.js";function v({data:s,dataList:r,setData:c}){const[t,a]=n.useState("mdi:message"),l=g(),h=async f=>{const i=await y(f);if(!i.success)return l(u({called:!0,type:i.type?result.type:"error",message:i.message}));l(u({called:!0,type:"success",message:i.message}));const p=s;c(r.filter(j=>j._id!==p._id))},o=e.jsxs("ul",{children:[e.jsx("li",{children:s.firstName+" "+s.lastName}),e.jsx("li",{children:e.jsx("a",{href:`tel:+91${s.phoneNo}`,children:s.phoneNo})}),e.jsx("li",{children:e.jsx("a",{href:`mailto:${s.email}`,children:s.email})})]}),[x,d]=n.useState(o);return e.jsxs("div",{className:"EnqCard",children:[x,e.jsxs("div",{className:"icon-div",children:[e.jsx(m,{icon:t,width:"25px",className:"icon",onClick:()=>t==="mdi:message"?(d(e.jsx("p",{children:s.message})),a("ic:round-cancel")):(d(o),a("mdi:message"))}),e.jsx(m,{icon:"mdi:trash",width:"30px",className:"icon",onClick:()=>h(s._id)})]})]})}function w(){const[s,r]=n.useState([]),c=N();return n.useEffect(()=>{(async()=>{try{const a=await E();if(a===!1)return c("/error");r(a.data),console.log(a)}catch(a){console.error("Failed to fetch leads:",a)}})()},[]),e.jsxs("div",{className:"Enq",children:[e.jsx("h1",{children:"Enquiries"}),s.map(t=>e.jsx(v,{data:t,dataList:s,setData:r},t._id))]})}export{w as default};