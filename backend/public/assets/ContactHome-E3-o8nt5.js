import{a as j,r as a,j as t,b as i}from"./index-MDozii4p.js";import{g as v}from"./analytics-DZz-HrzT.js";function f(){const r=j(),[l,p]=a.useState(""),[o,d]=a.useState(""),[u,g]=a.useState(""),[m,h]=a.useState(""),[c,x]=a.useState(""),[N,n]=a.useState("submit"),S=async e=>{e.preventDefault(),n("loading...");const y={firstName:l,lastName:o,email:u,phoneNo:Number(m),message:c},s=await v(y);if(s.success===!1)return r(i({called:!0,type:s.type?s.type:"warning",message:s.message})),n("try again");r(i({called:!0,type:"success",message:s.message})),n("Thank you")};return t.jsxs("div",{className:"ContactHome",children:[t.jsx("h1",{className:"title col-rare",children:"contact us"}),t.jsxs("form",{className:"ContactForm",onSubmit:S,children:[t.jsxs("span",{children:[t.jsx("input",{type:"text",placeholder:"First name*",required:!0,name:"firstName",value:l,onChange:e=>p(e.target.value)}),t.jsx("input",{type:"text",placeholder:"last name",name:"lastName",value:o,onChange:e=>d(e.target.value)})]}),t.jsx("input",{type:"tel",placeholder:"phone number*",required:!0,name:"phoneNo",value:m,onChange:e=>h(e.target.value)}),t.jsx("input",{type:"email",placeholder:"email*",required:!0,name:"email",value:u,onChange:e=>g(e.target.value)}),t.jsx("textarea",{type:"text",className:"message",placeholder:"message*",required:!0,name:"message",value:c,onChange:e=>x(e.target.value)}),t.jsx("button",{className:"btn",type:"submit",children:N})]})]})}export{f as C};