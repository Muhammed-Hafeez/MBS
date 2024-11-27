import{r as t,u as j,j as e,S as h}from"./index-MDozii4p.js";import{g as u}from"./projectcard-C2mrALZV.js";const x=({project:r})=>r?e.jsxs("div",{className:"project-page",children:[e.jsxs("div",{className:"project-header",children:[e.jsx("h1",{children:r.title}),e.jsx("p",{children:r.description})]}),e.jsxs("div",{className:"project-details",children:[e.jsx("div",{className:"image-section",style:{backgroundImage:`url(${r.image})`}}),e.jsxs("div",{className:"info-section",children:[e.jsx("h2",{children:"About the Project"}),e.jsx("p",{children:r.details})]})]})]}):e.jsxs("div",{className:"error-message",children:[e.jsx("h1",{children:"Project Not Found"}),e.jsx("p",{children:"The project you are looking for does not exist or has been removed."})]});function f(){const[r,c]=t.useState([]),[a,i]=t.useState(null),[n,d]=t.useState(!0),{id:l}=j();if(t.useEffect(()=>{(async()=>{try{const s=await u();c(s.data)}catch(s){console.error("Error fetching data:",s),i("Failed to load data. Please try again later.")}finally{d(!1)}})()},[]),n)return e.jsx(h,{});if(a)return e.jsxs("div",{className:"error-message",children:[e.jsx("h1",{children:"Oops!"}),e.jsx("p",{children:a})]});const o=r.find(s=>s.id===l);return o?e.jsx(x,{project:o}):e.jsxs("div",{className:"error-message",children:[e.jsx("h1",{children:"Project Not Found"}),e.jsx("p",{children:"We couldn’t find the project you’re looking for. Check the URL or browse other projects."})]})}export{f as default};
