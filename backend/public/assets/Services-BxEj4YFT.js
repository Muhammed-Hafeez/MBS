import{r,j as i,S as c}from"./index-MDozii4p.js";import{H as n}from"./HeroCommon-BWsekSVM.js";import{S as d}from"./serviceCard-Cf-i-H0t.js";import{g as u}from"./servicecard-CJHB1qxM.js";function f(){const[a,s]=r.useState(null),[t,o]=r.useState(!0);return r.useEffect(()=>{(async()=>{try{const e=await u();s(e.data)}catch(e){console.error("Error fetching data:",e)}finally{o(!1)}})()},[]),t?i.jsx(c,{}):a?i.jsxs("div",{children:[i.jsx(n,{data:{title:"our services",heading:"RESPECT & INTEGRITY IN ALL WE DO",body:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque sapiente sed quae consectetur in repellat, commodi similique perspiciatis eaque, vitae, saepe quo facilis cumque praesentium vel quidem amet provident esse?",image:"https://res.cloudinary.com/dbumvyukj/image/upload/v1725870937/jpmrxgxfnyv8fg9iopqc.webp"}}),i.jsx("div",{className:"service-container",children:i.jsx("div",{className:"services serviceGrid",children:a.map(e=>i.jsx(d,{heading:e.heading,body:e.body,icon:e.icon},e._id))})})]}):i.jsx("p",{children:"Error: Failed to load data"})}export{f as default};