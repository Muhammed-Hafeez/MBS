import{j as s,N as i}from"./index-MDozii4p.js";const t=({image:r,title:c,description:e,link:a})=>s.jsx("div",{className:"project-card",children:s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-image",style:{backgroundImage:`url(${r})`}}),s.jsxs("div",{className:"card-content",children:[s.jsx("h3",{children:c}),s.jsx("p",{children:e}),s.jsx(i,{to:a,"aria-label":`page for ${a}`,className:"btn-p",children:"View Project"})]})]})}),n=({data:r})=>{const c=r;return s.jsx("div",{className:"project-cards",children:c.map((e,a)=>s.jsx(t,{image:e.image,title:e.title,description:e.description,link:`/project/${e.id}`},a))})};export{n as P};
